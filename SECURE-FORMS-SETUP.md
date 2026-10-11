# Secure form setup

The website now uses two server-side Vercel functions:

- `POST /api/contact` — contact inquiries with an optional PDF/DOCX manuscript attachment.
- `POST /api/review` — author review submissions.

Both functions send only after validation succeeds and only report success after the email provider confirms delivery.

## Required Vercel environment variables

Add these variables in **Vercel → Project Settings → Environment Variables** for Production (and Preview if needed):

```text
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Storylight Website <noreply@storylightstd.org>
CONTACT_RECIPIENT_EMAIL=info@storylightstd.org
SITE_ORIGIN=https://storylight-studio.vercel.app
```

### Resend setup

1. Create or use a Resend account.
2. Add and verify the `storylightstd.org` sending domain.
3. Create an API key with permission to send email.
4. Use a verified sender address in `RESEND_FROM_EMAIL`.
5. Add the values in Vercel; never commit the API key to GitHub.
6. Redeploy after saving the variables.

Until `RESEND_API_KEY` and `RESEND_FROM_EMAIL` are configured, the endpoints intentionally return a temporary-unavailable response instead of pretending that a submission was delivered.

## Upload protections

- Accepted files: PDF and DOCX only.
- Maximum manuscript size: 10 MB.
- Server validates the extension, MIME type, and file signature.
- Only one file is accepted per contact submission.
- Filenames are sanitized before attachment.
- Request body and form-field limits are enforced.
- Same-origin and lightweight rate-limit checks are applied.
- Uploaded manuscripts are not written to the repository or public storage; they are attached to the delivery email only.

Before production use, confirm that the receiving mailbox and email provider’s retention/access controls are appropriate for manuscript material.
