# Stage 5 CMS Requirements: Active Open Questions

> **Notice:** This document contains strictly active, unresolved open questions requiring technical verification or client input. All confirmed decisions are codified in `cms-implementation-rules.md` and `client-context/answers/`.

1. **Revalidation Webhook Secret Management:** Will `REVALIDATE_SECRET` be generated as a 64-character cryptographically secure token and stored directly in Vercel project environment variables?
2. **Blog Author Avatar Hosting:** When the founder headshot is finalized, will the author avatar image be hosted directly within Next.js `public/` or uploaded to the CMS media CDN?
3. **Lead Webhook Notification Routing:** When contact or newsletter leads are submitted to `/api/lead/create-one`, does the CMS backend trigger secondary internal notifications, or does Next.js handle Resend dispatch exclusively?
4. **CMS Staging Environment:** Is a dedicated staging database instance available for preview branch test runs prior to executing production `--apply` seed pushes?

