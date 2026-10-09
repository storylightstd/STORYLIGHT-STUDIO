# Storylight Studios feature extension

## Design direction

- **Movement:** editorial intelligence desk—quiet, premium, analytical, and human.
- **Principles:** evidence before promises; clear next steps; named human oversight; calm, accessible interactions.
- **Palette:** retain navy and warm gold so the tools feel like part of Storylight rather than a separate SaaS product.
- **Layout:** audit workspace with a focused intake column and a report column; Sage as a compact assistant drawer rather than an intrusive chatbot bubble.
- **Voice:** precise, encouraging, and transparent. Say “preliminary signal” instead of making sales guarantees.

## Implementation

- Add an `audit` page with a working form and client-side scoring model covering discoverability, listing conversion, launch readiness, reader trust, and data completeness.
- Add a `SageAssistant` component grounded only in approved Storylight services, process, ethics, review moderation, and audit guidance. Unknown or sensitive questions receive a transparent limitation response.
- Add hash navigation and page titles for the audit route.
- Preserve all existing team, testimonials, portfolio media, and company pages.
- Keep future live Gemini/server integration separate from the UI so no secret key is exposed in the browser.
