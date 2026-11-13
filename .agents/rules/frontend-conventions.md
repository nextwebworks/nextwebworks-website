---
trigger: glob
globs: "**/site/app/**, **/site/components/**"
description: Rules for Next.js 16 RSC, line ceilings (page <= 80, section <= 250), and pure Tailwind CSS.
---

# Frontend Architecture & Conventions

## 1. Line Ceilings & RSC Boundaries
- **Page Server Components (`page.js` / `page.jsx`):**
  - Strictly <= 80 lines of code.
  - Must remain React Server Components (RSC). Never add `'use client'`.
  - Assemble thin layout shells importing and rendering section components in order.
- **Section Components (`_components/*.js`):**
  - Strictly <= 250 lines of code.
  - Every section component must open with `// section: <id>` on line 1.
  - Every root element must render `data-section="<id>"`.
  - Interactive leaves (`'use client'`) are permitted only for spec drawers, modal state, and form submissions.

## 2. Standard Page-Bottom Stack
All public informational pages must preserve the exact approved stack sequence before the footer:
1. FAQ Accordion (`FAQSection`)
2. Final CTA Banner (`FinalCTABanner`)
3. Contact Form (`ContactFormSection`)
4. Global Footer (`Footer`)
*Exceptions:* `/book-a-call`, `/contact`, `/book-a-call/thank-you`, and legal pages render Footer only.

## 3. Styling Standards
- Pure Tailwind CSS utility classes in JSX.
- Zero custom `.css` or `.module.css` files.
- Zero `@apply` directives in `site/app/globals.css`.
- Surface contrast: Ensure all text meets WCAG AA standards (>= 4.5:1). Cobalt `#2563EB` is restricted to buttons and interactive accents; use `#E2E8F0` or `#94A3B8` for readable canvas typography.
- Visible focus rings mandatory: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19]`.
