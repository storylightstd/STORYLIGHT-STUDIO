/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from 'node:http';

export const config = { api: { bodyParser: { sizeLimit: '100kb' } } };
const RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || 'info@storylightstd.org';
const SITE_ORIGIN = process.env.SITE_ORIGIN || 'https://storylight-studio.vercel.app';
const recentSubmissions = new Map<string, number>();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_INTERVAL_MS = RATE_WINDOW_MS / 5;

function json(res: ServerResponse, status: number, body: Record<string, unknown>) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(body));
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

async function readJson(req: IncomingMessage) {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    size += Buffer.byteLength(chunk);
    if (size > 100 * 1024) throw new Error('Payload too large');
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8')) as Record<string, unknown>;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }
  const origin = req.headers.origin;
  if (origin && origin !== SITE_ORIGIN) return json(res, 403, { ok: false, error: 'Unable to process this submission.' });

  const clientKey = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const previous = recentSubmissions.get(clientKey) || 0;
  if (now - previous < RATE_LIMIT_INTERVAL_MS) return json(res, 429, { ok: false, error: 'Please wait a moment before sending another submission.' });
  recentSubmissions.set(clientKey, now);
  for (const [key, timestamp] of recentSubmissions) if (now - timestamp > RATE_WINDOW_MS) recentSubmissions.delete(key);

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return json(res, 503, { ok: false, error: 'Secure submission is temporarily unavailable. Please try again later.' });
  }

  try {
    const body = await readJson(req);
    if (typeof body.website === 'string' && body.website) return json(res, 400, { ok: false, error: 'Unable to process this submission.' });
    const authorName = String(body.authorName || '').trim();
    const email = String(body.email || '').trim();
    const bookTitle = String(body.bookTitle || '').trim();
    const service = String(body.service || '').trim();
    const rating = Number(body.rating);
    const review = String(body.review || '').trim();
    if (!authorName || !isValidEmail(email) || !bookTitle || !service || !Number.isInteger(rating) || rating < 1 || rating > 5 || !review) {
      return json(res, 400, { ok: false, error: 'Please complete all required review fields.' });
    }

    const text = [
      `Author name: ${authorName}`,
      `Email: ${email}`,
      `Book title: ${bookTitle}`,
      `Amazon or Goodreads link: ${String(body.bookLink || 'Not provided')}`,
      `Service received: ${service}`,
      `Rating: ${rating}/5`,
      '',
      `Review:\n${review}`,
      '',
      'Permission to publish after verification: yes',
    ].join('\n');
    const providerResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Review submission from ${authorName} — ${bookTitle}`,
        text,
      }),
    });
    if (!providerResponse.ok) return json(res, 502, { ok: false, error: 'The review could not be delivered. Please try again later.' });
    return json(res, 200, { ok: true });
  } catch (error) {
    console.error('review submission failed', error instanceof Error ? error.message : 'unknown error');
    return json(res, 400, { ok: false, error: 'We could not process the review. Please check the form and try again.' });
  }
}
