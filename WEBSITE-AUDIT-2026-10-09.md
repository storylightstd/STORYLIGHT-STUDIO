# Storylight Studios Website Audit

**Audit date:** 2026-10-09  
**Repository:** `storylightstd/STORYLIGHT-STUDIO`  
**Live site checked:** https://storylight-studio.vercel.app  
**Scope:** source code, production build, deployed response, forms, navigation, trust/scam signals, SEO, accessibility, security hygiene, content consistency, and external media.

> This is a high-confidence code and deployment audit. It cannot verify real-world claims, permissions, legal status, ownership of media, or whether the named people are genuine without documentation from the business owner.

## Executive summary

The site is visually polished and the production bundle builds, but it has several **critical credibility defects** that can make an author reasonably think it is a scam:

1. **Contact, newsletter, and review forms show success without sending or storing anything.** Visitor data is silently lost.
2. **The site makes large “verified” performance and client-volume claims without dates, evidence, external links, case-study documents, or verifiable identities.**
3. **The portfolio contains recognizable authors and major publishing brands, plus performance claims, without visible permission/credit evidence.** Even with some “authorized” labels, this is a major legal and trust risk.
4. **The business identity is incomplete:** Gmail address, no company address, phone, legal entity/registration, privacy policy, terms, or clear commercial policies.
5. **The repository is not production-ready:** clean `npm ci` fails because of a Vite/esbuild peer-dependency conflict; the README is still AI Studio boilerplate.

## Priority 0 — fix before sending traffic or collecting leads

### P0.1 Contact form is a fake submission flow

**Evidence:** `src/pages/Contact.tsx:51-60` only sets a loading state and calls `setIsSubmitted(true)` after a 700 ms timeout. There is no `fetch`, API route, email service, database, CRM, or `mailto:` submission.

**Visitor impact:** The visitor is told “Diagnostic Inquiry Received” and is promised a response, but the inquiry never reaches the business. This is the strongest scam-like behavior in the codebase and can cause lost leads and false assurances.

**Fix:** Connect the form to a real, authenticated server-side endpoint or reputable form provider. Handle success, failure, spam protection, consent, privacy notice, and an actual confirmation reference. Do not claim a response window until it is operational.

### P0.2 Newsletter signup is also simulated

**Evidence:** `src/components/NewsletterSignup.tsx:9-20` validates only whether the string contains `@`, waits 600 ms, and changes state to success. It does not subscribe the email anywhere, yet says: “We’ve sent your welcome dispatch” and claims delivery every Tuesday.

**Fix:** Integrate an email provider, add double opt-in, privacy/consent language, unsubscribe handling, provider error states, and only show “welcome email sent” after the provider confirms acceptance.

### P0.3 Review form discards submitted reviews

**Evidence:** `src/pages/LeaveReview.tsx:7-8,27-38` stores only `submitted` in React state. It never sends the author name, email, book, rating, link, or review text anywhere, while claiming the review was received and is pending manual verification.

**Fix:** Add a real moderation workflow or remove the form until one exists. Store the consent record, submission timestamp, moderation status, and privacy basis securely. Add a clear data-retention/privacy notice.

### P0.4 High-risk claims are presented as verified without proof

**Evidence:** `src/data/content.ts:23-26,177-238` and `src/pages/Testimonials.tsx:33-80` claim `400+ authors`, `55+ 5-Star Reviews`, `+280% Average Visibility`, `94% Client Retention`, and six “Verified Client” testimonials.

There are no dates, methodology, denominator definitions, source links, screenshots, review-platform links, named public client profiles, signed approvals, or case-study evidence. Several testimonials use initials or generic names, making independent verification impossible.

**Fix:** For every metric, add a time period, definition, sample size, methodology, and evidence. Link to permissioned third-party reviews where possible. If evidence cannot be published, remove “verified,” reduce the claim to a clearly labelled internal/illustrative statement, or remove the metric.

### P0.5 Portfolio and third-party rights/endorsement risk

**Evidence:** `src/data/content.ts:260-329` includes Lisa Jewell, Rick Riordan / Scholastic, Tahereh Mafi, James Dashner, and other recognizable titles. Some entries say “Authorized Promotional Work,” but the site provides no permission, rights holder, campaign date, credit, or link to the official work. Other entries claim results such as “Category Top 100 Launch Week” and “Goodreads Listopia #3 Position.”

`src/data/oldPortfolio.ts` also lists 65 books by well-known authors and labels them by marketing service. The page says they are illustrative examples, but the combination of title, author, service label, and “selected work” presentation can still imply client work or endorsement.

**Fix:** Publish only work for which the studio has written permission. Add an explicit label per item: “Client work,” “Authorized promotional work,” “Speculative concept,” or “Illustrative reference.” Remove performance claims unless they are documented and approved. Remove famous titles entirely if rights cannot be proven.

## Priority 1 — major trust and business legitimacy problems

### P1.1 Business identity is too thin for a paid professional service

The only visible contact is `info.hannahcooper@gmail.com` (`src/components/Footer.tsx:40`, `src/pages/Contact.tsx:293`). There is no business-domain email, physical/business correspondence address, phone number, legal entity name, company registration/jurisdiction, VAT/tax details where applicable, or clearly identified operating entity.

**Why it matters:** A Gmail address alone is not proof of fraud, but alongside large claims and missing policies it strongly reduces trust.

**Fix:** Add the real legal business identity, domain email, business address or service address, phone/office hours, jurisdiction, and links to legitimate professional profiles. Do not invent any of these.

### P1.2 Missing privacy policy, terms, consent, and commercial policies

There is no privacy policy, terms of service, cookie/analytics notice, data-retention explanation, refund/cancellation policy, contract/scope explanation, or payment policy. Yet the site collects names, emails, book links, and review content and claims “100% protected” (`src/pages/Contact.tsx:271-273`).

**Fix:** Add legally reviewed privacy and terms pages, explicit form consent, data processor disclosure, retention/deletion contact, and client engagement/payment/refund terms. Replace absolute “100% protected” language with accurate security/privacy wording.

### P1.3 LinkedIn verification is promised but not provided

`src/pages/Team.tsx:149` says experience is “fully verifiable” and specifically references LinkedIn, but there are no LinkedIn profile links. The imported `Linkedin` and `ExternalLink` icons are not used.

**Fix:** Link each real team member to an authentic profile, or remove the verification claim. Do not create placeholder profiles.

### P1.4 Inconsistent team roster

The site repeatedly says there are 13 specialists, but `src/pages/About.tsx` and `src/pages/Portfolio.tsx` mention **Marcus Vance** and **Tyler Brooks** as production specialists. They are not in the 13-member `TEAM_MEMBERS` roster in `src/data/content.ts:239-255`.

**Fix:** Add these real people to the roster with permission and bios, or correct the copy. Keep the total count consistent everywhere.

### P1.5 Absolute compliance and safety guarantees are too strong

Examples include “100% White-Hat,” “100% Compliant with Amazon & Goodreads TOS,” “permanently safe,” “legally compliant,” and “100% Author Ownership Guarantee” (`src/pages/TrustAndEthics.tsx`, `src/pages/About.tsx`). No business can guarantee permanent account safety or universal platform compliance as platform rules and implementation details change.

**Fix:** Use qualified wording: “Our stated policy is…”, “We aim to follow current platform rules…”, and “No strategy can guarantee account outcomes.” Add the policy version/date and links to current official platform policies.

### P1.6 Claims about platform mechanics are overconfident and potentially misleading

The site uses phrases such as “algorithmic category repair,” “category dominance,” “Goodreads Listopia #3,” “24-point forensic algorithmic audit,” and “Amazon recommendation engine” without explaining data sources or what access is actually available. The audit itself is only a local scoring questionnaire (`src/pages/Audit.tsx:20-23`), not a 24-point platform-data audit.

**Fix:** Clearly distinguish the free browser-based self-assessment from a human/paid audit. Publish the 24 points, data sources, limitations, and date of analysis. Avoid implying access to private Amazon or Goodreads data unless the customer has provided authorized access.

## Priority 2 — functional and UX defects

### P2.1 Back/forward navigation is broken or misleading

`src/App.tsx:45` uses `window.history.replaceState` for every internal navigation. This replaces the current browser history entry instead of adding a new one, so normal browser Back navigation will not step through visited pages.

**Fix:** Use `pushState` for navigation and handle `popstate`, or use a real router. Preserve hash routes consistently.

### P2.2 Trailer player controls do not control the actual video

`src/components/TrailerModal.tsx` maintains custom `isPlaying`, `isMuted`, and `progress` state, but the `<video>` element uses native `controls` and is not connected to those states. The fake progress bar advances on a timer even when the video is paused, and mute/play buttons do not change the video element.

**Fix:** Use a `videoRef` and control `play()`, `pause()`, `muted`, `currentTime`, and `duration`; or remove the custom controls and rely on native controls. Add Escape-key close and focus management.

### P2.3 All portfolio trailer cards reuse generic images for multiple titles

Several entries in `PORTFOLIO_ITEMS` use the same fantasy or historical image even for different books and authors. This can look like fabricated portfolio work or stock-image reuse.

**Fix:** Use the actual authorized thumbnail for each work, label stock/concept images prominently, and never present a generic image as the cover or campaign asset for a named author without permission.

### P2.4 External images and media are hotlinked

Book covers use Open Library URLs and video files use `media.base44.com` URLs. The deployed site therefore depends on third parties remaining available and serving compatible content. The asset probe also found some Open Library responses returning GIF content despite `.jpg` URLs.

**Fix:** Host licensed, optimized assets under the studio’s controlled domain or CDN, document rights/attribution, add fallbacks, and monitor third-party media failures.

### P2.5 Forms lack user-facing failure handling

Even after adding a backend, the current UI has no network failure, timeout, retry, duplicate-submit, rate-limit, or spam response path. `Contact.tsx` also uses a client-only `submitting` state.

**Fix:** Add server validation, CSRF/spam protection, accessible status messages, retry behavior, and an alternative contact method that is genuinely monitored.

### P2.6 Several interactive elements are not keyboard-semantic

Clickable image containers in `Home.tsx` and `Portfolio.tsx` use `<div onClick>` rather than buttons/links. Rating stars in `LeaveReview.tsx` visually show stars but do not expose accessible labels. Modal focus trapping and Escape handling are absent.

**Fix:** Use keyboard-focusable buttons with visible focus states, accessible labels, `fieldset`/radio labels for ratings, and a proper dialog implementation.

## Priority 3 — SEO, security, and production hygiene

### P3.1 Page titles change, but descriptions and social metadata remain homepage-only

`src/App.tsx:61-68` changes `document.title`, but the description, Open Graph title/description, canonical URL, and Twitter metadata remain the same for every page. `index.html` has no canonical URL, `og:url`, `og:image`, `twitter:title`, or `twitter:description`.

**Fix:** Use route-aware metadata, canonical URLs, social preview images, and a real sitemap/robots configuration. Ensure hash pages have a deliberate SEO strategy, or migrate to crawlable routes.

### P3.2 Security headers are incomplete on the live deployment

The live response had HSTS, but no visible `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, or `Permissions-Policy`. It also returned `access-control-allow-origin: *`.

**Fix:** Configure appropriate headers in Vercel/deployment configuration. Review whether wildcard CORS is necessary. Add CSP carefully for Google Fonts, video, images, and any form/API providers.

### P3.3 Google site-verification token is exposed without a documented verified property

`index.html:8` contains a Google verification token. This is not normally a secret, but it should correspond to a property the owner controls. If it was copied from another site or property, it damages credibility and can create ownership confusion.

**Fix:** Confirm the token belongs to the current domain/property or remove it and verify the correct property.

### P3.4 Clean dependency installation is broken

`npm ci` fails with an `ERESOLVE` peer conflict: Vite 8.3.3 requires optional `esbuild ^0.27.0 || ^0.28.0`, while the project resolves `esbuild 0.25.x`. The project only installs and builds with `npm install --legacy-peer-deps`.

`npm run lint` and `npm run build` pass after that fallback install, but this is not a reliable CI/deployment setup.

**Fix:** Align Vite/esbuild versions, regenerate and commit a valid lockfile, then require a clean `npm ci` in CI.

### P3.5 Repository documentation is unfinished and misleading

`package.json` is still named `react-example`, and `README.md` is AI Studio boilerplate referring to “your AI Studio app,” a Google AI Studio app URL, and `GEMINI_API_KEY`, although the visible app has no implemented Gemini flow.

**Fix:** Replace the README with real project setup, environment variables, deployment, form provider, content/rights, and operational instructions. Rename the package if appropriate.

### P3.6 Performance is heavier than necessary

The build output includes several 775–925 KB JPEGs plus a 411 KB JS bundle. Most team images are lazy-loaded, but hero and portfolio images are large and external covers are not optimized.

**Fix:** Convert images to WebP/AVIF, resize to display dimensions, add responsive `srcSet`, lazy-load below-the-fold media, and measure Core Web Vitals.

## Content and credibility cleanup checklist

- Replace or substantiate every metric: `400+`, `55+`, `94%`, `280%`, `1,800`, `120,000+`, `Top 100`, `#280`, and `#3`.
- Add dates and methodology to every result.
- Replace anonymous testimonials with permissioned names and links, or mark them as anonymized and explain the verification method.
- Remove “verified” labels from content that cannot be verified by the business.
- Obtain written permissions for every named author, publisher, cover, video, quote, and performance result.
- Separate real client work, authorized promotional work, illustrative concepts, and public industry references visually and textually.
- Remove recognizable third-party titles if permission cannot be documented.
- Add real legal/business identity and policies before collecting personal data.
- Replace absolute guarantees with accurate, qualified statements.
- Make every “we will contact you,” “welcome email sent,” and “manual review” statement true in the live system.

## Validation performed

- Repository cloned successfully from GitHub.
- Live site returned HTTP 200 from Vercel.
- `npm ci`: **failed** due to Vite/esbuild peer dependency conflict.
- `npm install --legacy-peer-deps`: succeeded.
- `npm run lint`: passed.
- `npm run build`: passed with a Vite `__dirname` deprecation warning.
- Local asset imports: no missing source assets found after accounting for extensionless TypeScript imports.
- No committed secret-like files found beyond `.env.example`.
- No source implementation found for contact delivery, newsletter subscription, or review moderation.

## Recommended order of work

1. **Stop claiming successful lead/review/newsletter submission until real delivery is connected.**
2. **Remove or quarantine unverified testimonials, metrics, famous-author portfolio items, and unsupported “verified” labels.**
3. **Add legal/business identity, privacy/terms, consent, and commercial policies.**
4. **Fix clean dependency installation and replace the README.**
5. **Fix navigation and trailer controls.**
6. **Improve metadata, security headers, accessibility, and performance.**
7. **Only then relaunch credibility claims with evidence and dated case studies.**
