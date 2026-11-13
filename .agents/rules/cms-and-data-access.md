---
trigger: glob
globs: "**/site/lib/cms-kit/**, **/site/app/actions/**"
description: Rules for class-based NWW CMS models, ISR caching, and Server Actions.
---

# NWW CMS Integration & Data Access

## 1. Class-Based Model Architecture
- All communication with the headless NWW CMS backend occurs via class-based models in `site/lib/cms-kit/`:
  - `Blog`: Read-only queries for articles (`paginate`, `readOne`, `getSlugs`). Tagged with `next: { tags: ['cms:blog'] }`.
  - `ContactUs`: Inbound contact brief submissions (`POST /api/website-contact-us/create-one`).
  - `Policy`: Legal policies (`readOne('privacy')`, `readOne('terms')`). Tagged with `next: { tags: ['cms:policy'] }`.
  - `SEOHelper`: Default metadata and OpenGraph tag composition.

## 2. Server Action Discipline (`site/app/actions/lead.js`)
- **Anti-Spam Honeypots:** Check `formData.get('website_hp')` and `formData.get('company_url')`. If present, return `{ success: true, message: 'Inquiry received.' }` without storing.
- **Inbound Inquiries:** Submit agency name, team size, dev work type, and scope to `ContactUs.submit`. Always sanitize inputs.
- **Newsletter Signups (F-01 Strategy):** Validate email format and return a dummy success confirmation immediately to prevent unrouted backend schema errors.
- **Error Handling:** Catch errors gracefully and return actionable error messages with fallback direct email (`contact@nextwebworks.in`) and WhatsApp links.
