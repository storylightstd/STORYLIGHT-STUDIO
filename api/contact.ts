/// <reference types="node" />
import Busboy from 'busboy';
import type { IncomingMessage, ServerResponse } from 'node:http';

export const config = {
  api: {
    bodyParser: false,
    sizeLimit: '12mb',
  },
};

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_FIELD_BYTES = 50 * 1024;
const RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || 'info@storylightstd.org';
const SITE_ORIGIN = process.env.SITE_ORIGIN || 'https://storylight-studio.vercel.app';
const ALLOWED_EXTENSIONS = new Set(['.pdf', '.docx']);
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/octet-stream',
]);
const recentSubmissions = new Map<string, number>();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_INTERVAL_MS = RATE_WINDOW_MS / 5;

type ParsedUpload = {
  fields: Record<string, string>;
  file?: {
    filename: string;
    mimeType: string;
    buffer: Buffer;
  };
};

function json(res: ServerResponse, status: number, body: Record<string, unknown>) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(body));
}

function safeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-120) || 'manuscript';
}

function hasValidSignature(extension: string, buffer: Buffer) {
  if (extension === '.pdf') return buffer.subarray(0, 5).toString() === '%PDF-';
  if (extension === '.docx') return buffer.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]));
  return false;
}

function parseMultipart(req: IncomingMessage): Promise<ParsedUpload> {
  return new Promise((resolve, reject) => {
    const contentType = req.headers['content-type'];
    if (!contentType || !contentType.toLowerCase().startsWith('multipart/form-data;')) {
      reject(new Error('Expected multipart form data'));
      return;
    }

    let parser: ReturnType<typeof Busboy>;
    try {
      parser = Busboy({
        headers: req.headers,
        limits: { fileSize: MAX_FILE_BYTES, fieldSize: MAX_FIELD_BYTES, files: 1, fields: 20 },
      });
    } catch {
      reject(new Error('Invalid multipart form data'));
      return;
    }

    const fields: Record<string, string> = {};
    let upload: ParsedUpload['file'];
    let fileTooLarge = false;
    let settled = false;

    const fail = (error: Error) => {
      if (!settled) {
        settled = true;
        reject(error);
      }
    };

    parser.on('field', (name, value) => {
      fields[name] = value;
    });

    parser.on('file', (name, file, info) => {
      if (name !== 'manuscript') {
        file.resume();
        return;
      }
      const chunks: Buffer[] = [];
      let total = 0;
      file.on('data', (chunk: Buffer) => {
        total += chunk.length;
        if (total <= MAX_FILE_BYTES) chunks.push(chunk);
      });
      file.on('limit', () => {
        fileTooLarge = true;
      });
      file.on('end', () => {
        if (!fileTooLarge && total > 0) {
          upload = { filename: safeFilename(info.filename || 'manuscript'), mimeType: info.mimeType.toLowerCase(), buffer: Buffer.concat(chunks) };
        }
      });
    });

    parser.on('filesLimit', () => fail(new Error('Too many files')));
    parser.on('fieldsLimit', () => fail(new Error('Too many fields')));
    parser.on('error', () => fail(new Error('Could not read upload')));
    parser.on('finish', () => {
      if (settled) return;
      if (fileTooLarge) return fail(new Error('File is too large'));
      settled = true;
      resolve({ fields, file: upload });
    });

    req.on('aborted', () => fail(new Error('Upload aborted')));
    req.pipe(parser);
  });
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }

  const origin = req.headers.origin;
  if (origin && origin !== SITE_ORIGIN) {
    return json(res, 403, { ok: false, error: 'Unable to process this submission.' });
  }

  const clientKey = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const previous = recentSubmissions.get(clientKey) || 0;
  if (now - previous < RATE_LIMIT_INTERVAL_MS) {
    return json(res, 429, { ok: false, error: 'Please wait a moment before sending another submission.' });
  }
  recentSubmissions.set(clientKey, now);
  for (const [key, timestamp] of recentSubmissions) {
    if (now - timestamp > RATE_WINDOW_MS) recentSubmissions.delete(key);
  }

  const rawLength = req.headers['content-length'];
  const contentLength = rawLength ? Number(rawLength) : 0;
  if (contentLength > 12 * 1024 * 1024) {
    return json(res, 413, { ok: false, error: 'The upload is too large. Please keep the manuscript under 10 MB.' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return json(res, 503, { ok: false, error: 'Secure submission is temporarily unavailable. Please try again later.' });
  }

  try {
    const { fields, file } = await parseMultipart(req);
    if (fields.website) return json(res, 400, { ok: false, error: 'Unable to process this submission.' });

    const authorName = (fields.authorName || '').trim();
    const email = (fields.email || '').trim();
    if (!authorName || !email || !isValidEmail(email)) {
      return json(res, 400, { ok: false, error: 'Please provide a valid author name and email address.' });
    }

    if (file) {
      const extension = file.filename.toLowerCase().slice(file.filename.lastIndexOf('.'));
      if (!ALLOWED_EXTENSIONS.has(extension) || !ALLOWED_MIME_TYPES.has(file.mimeType) || !hasValidSignature(extension, file.buffer)) {
        return json(res, 415, { ok: false, error: 'Only valid PDF or DOCX manuscripts are accepted.' });
      }
    }

    const subject = `Storylight inquiry from ${authorName}${fields.bookTitle ? ` — ${fields.bookTitle}` : ''}`;
    const text = [
      `Author: ${authorName}`,
      `Email: ${email}`,
      `Book / series: ${fields.bookTitle || 'Not provided'}`,
      `Genre: ${fields.genre || 'Not provided'}`,
      `Release stage: ${fields.stage || 'Not provided'}`,
      `Service focus: ${fields.serviceFocus || 'Not provided'}`,
      `Book link or ASIN: ${fields.bookLink || 'Not provided'}`,
      '',
      fields.message || 'No additional message provided.',
      file ? `\nManuscript attached: ${file.filename}` : '\nNo manuscript attached.',
    ].join('\n');

    const emailPayload: Record<string, unknown> = {
      from: process.env.RESEND_FROM_EMAIL,
      to: [RECIPIENT],
      reply_to: email,
      subject,
      text,
    };
    if (file) {
      emailPayload.attachments = [{ filename: file.filename, content: file.buffer.toString('base64') }];
    }

    const providerResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!providerResponse.ok) {
      return json(res, 502, { ok: false, error: 'The submission could not be delivered. Please try again later.' });
    }

    return json(res, 200, { ok: true });
  } catch (error) {
    console.error('contact submission failed', error instanceof Error ? error.message : 'unknown error');
    return json(res, 400, { ok: false, error: 'We could not process the submission. Please check the form and try again.' });
  }
}
