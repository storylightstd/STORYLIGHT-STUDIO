import type { IncomingMessage, ServerResponse } from 'node:http';

const RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || 'info@storylightstd.org';
const SITE_ORIGIN = process.env.SITE_ORIGIN || 'https://storylight-studio.vercel.app';
const ALLOWED_ORIGINS = new Set([
  ...SITE_ORIGIN.split(',').map(origin => origin.trim()).filter(Boolean),
  'https://storylight-studio.vercel.app',
  'https://www.storylightstd.org',
  'https://storylightstd.org',
]);
const recentSignups = new Map<string, number>();
const RATE_INTERVAL_MS = 60 * 1000;

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
    if (size > 20 * 1024) throw new Error('Payload too large');
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
  if (origin && !ALLOWED_ORIGINS.has(origin)) return json(res, 403, { ok: false, error: 'Unable to process this signup.' });

  const clientKey = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const previous = recentSignups.get(clientKey) || 0;
  if (now - previous < RATE_INTERVAL_MS) return json(res, 429, { ok: false, error: 'Please wait a moment before trying again.' });
  recentSignups.set(clientKey, now);
  for (const [key, timestamp] of recentSignups) if (now - timestamp > 15 * 60 * 1000) recentSignups.delete(key);

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return json(res, 503, { ok: false, error: 'Newsletter signup is temporarily unavailable. Please try again later.' });
  }

  try {
    const body = await readJson(req);
    if (typeof body.website === 'string' && body.website) return json(res, 400, { ok: false, error: 'Unable to process this signup.' });
    const email = String(body.email || '').trim().toLowerCase();
    if (!isValidEmail(email)) return json(res, 400, { ok: false, error: 'Please enter a valid email address.' });

    const providerResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [RECIPIENT],
        reply_to: email,
        subject: `New Storylight newsletter signup — ${email}`,
        text: [
          'A new author joined the Storylight newsletter.',
          '',
          `Subscriber email: ${email}`,
          'Requested list: Storylight Author Growth Dispatch',
          '',
          'Please add this address to the newsletter list and handle consent/unsubscribe according to your email provider process.',
        ].join('\n'),
      }),
    });

    if (!providerResponse.ok) return json(res, 502, { ok: false, error: 'We could not complete the signup. Please try again later.' });
    return json(res, 200, { ok: true });
  } catch (error) {
    console.error('newsletter signup failed', error instanceof Error ? error.message : 'unknown error');
    return json(res, 400, { ok: false, error: 'We could not process the signup. Please try again.' });
  }
}
