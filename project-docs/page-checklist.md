# Master QA Checklist & Taste Quality Contract

**Project Name:** Next Web Works  
**Technical Slug:** `nextwebworks-website`  
**Brand Display Name:** Next Web Works  
**Motion Tier:** `ultra` (GSAP 3 ticker sync + Lenis, non-blocking WebGL/GLSL, subtle border glow + -2px lift)  
**Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## Foundation Shell Checklist (Stage 6)

- [ ] **Semantic Landmarks:** Root `app/layout.js` renders `<header>`, `<nav>`, `<main id="main">`, and `<footer>`.
- [ ] **Design Tokens:** Exact semantic hex tokens from `design-theory.md` mapped into `site/app/globals.css` and Tailwind config (`#0B0F19` canvas, `#0F172A` surface, `#1E293B` hairline border, `#2563EB` electric cobalt accent, `#10B981` emerald live indicators).
- [ ] **Contrast Compliance:** WCAG AA/AAA verified across all text tokens (minimum 4.5:1 for body text, 3:1 for headlines).
- [ ] **Focus Rings:** High-visibility electric cobalt focus rings (`focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`) on all interactive touchpoints.
- [ ] **Dual Motion Tokens:** Exported to `site/lib/motion.js` with both CSS cubic-bezier variables and GSAP easing curves.
- [ ] **Reduced Motion:** Global `@media (prefers-reduced-motion: reduce)` respected, cleanly bypassing transforms.
- [ ] **Pre-Launch Guard:** `NEXT_PUBLIC_PREVIEW_GUARD="true"` active, serving `noindex, nofollow` and `<PreviewBanner />`.
- [ ] **Zero Stock Images:** `stock_ceiling: 0` verified; all imagery is in-house vector SVG, schematic diagrams, or authentic founder photography.
- [ ] **CMS Client Layer:** `site/lib/cms-kit/` wired with `Blog`, `Lead`, `Policy`, and `SEOHelper`.
- [ ] **On-Demand ISR:** Route `site/app/api/revalidate/route.js` responds 401 without secret, 200 on valid POST.
- [ ] **Zero Secrets Committed:** `.env.local` strictly ignored by git; credentials read via environment variables.

---

## Page-by-Page QA Criteria

### 1. Home (`/`)
- [ ] **Structure & Line Limits:** Thin page server component (`site/app/page.js`) <= 80 lines; section components in `site/app/_components/` <= 250 lines; each file opens with `// section: <id>`; zero `'use client'` on `page.js`.
- [ ] **Hero Section:** Eyebrow badge (*"White-Label Engineering Partner for Marketing Agencies"*), punchy H1 (*"Say Yes to Every Client Dev Request. Without Hiring Developers."*), primary CTA (*"Book a 20-Min Call"*), secondary action (*"Explore Services & How We Work ↓"*), mobile persistent CTA pill, and illustrative architecture node card.
- [ ] **Pain Points Section:** 3-column qualitative cards (*"The Freelancer Ghost"*, *"The Unbillable In-House Salary"*, *"The Costly Code Rewrite"*); zero fabricated statistics.
- [ ] **Workflow Section:** 4-step horizontal connected pipeline on desktop, vertical on mobile, static emerald nodes.
- [ ] **Services Teaser:** 2x2 modular card grid with expandable specification drawers ending with *"Scoped and quoted on your first call"*; static platform pill tags.
- [ ] **Standard Page-Bottom Stack:** Exact sequence: FAQ Accordion (7 core agency FAQs) -> Final CTA Banner (*"Book a 20-Min Call"*) -> Embedded Contact Form (5 qualifying fields, honeypot, consent line) -> Global Footer with Newsletter & Direct WhatsApp.
- [ ] **Zero Rates:** Strictly zero public prices, hourly rates, retainer figures, or discount percentages.

---

### 2. Services (`/services`)
- [ ] **Structure:** Thin page server component <= 80 lines; modular section components <= 250 lines.
- [ ] **Platform Banner:** Static monospace pill tags grouped into CMS/No-Code (WordPress, Webflow, Wix), Custom Web (Next.js, React.js, MERN, PHP), and Mobile (React Native). Banner reads: *"Builds in the platform your client already uses"*.
- [ ] **5 Specification Drawers:** `#websites`, `#web-apps`, `#erps`, `#mobile-apps`, `#cms-platforms` with trigger label *"View Technical Specs ↓"* / *"Hide Technical Specs ↑"*.
- [ ] **Bottom Stack:** Technical FAQs -> Final CTA Banner -> Contact Form -> Global Footer.

---

### 3. For Agencies (`/for-agencies`)
- [ ] **Structure:** Thin page server component <= 80 lines.
- [ ] **Partnership Models:** 3-column matrix (*"Scoped Pilot Build"*, *"Fixed-Price Sprints"*, *"Dedicated Dev Bench"*), ending with *"Terms discussed on discovery call"*.
- [ ] **Guarantees:** White-label non-solicitation and mutual confidentiality guarantees.
- [ ] **Bottom Stack:** 7 Core FAQs -> Final CTA Banner -> Contact Form -> Global Footer.

---

### 4. Work (`/work`)
- [ ] **Structure:** Thin page server component <= 80 lines.
- [ ] **Illustrative Samples:** 3 interactive samples labeled with slate monospace pill: `Illustrative sample · not a client project`:
  - Sample 1: Agency Client-Reporting Dashboard (Next.js App Router, RSC, Prisma + PostgreSQL)
  - Sample 2: Multi-Tier Operations ERP (Multi-tier GST, FIFO inventory, QuestPDF)
  - Sample 3: Field-Inspection Mobile App (React Native, camera, push notifications)
- [ ] **Bottom Stack:** Final CTA Banner -> Contact Form -> Global Footer (FAQ omitted).

---

### 5. About (`/about`)
- [ ] **Structure:** Thin page server component <= 80 lines.
- [ ] **Founder Section:** Minimalist split layout with founder headshot placeholder (`[FOUNDER HEADSHOT]`) on left; bio and principles on right (`[FOUNDER BIO / STORY TO PROVIDE]`). Title: *"Founder & Lead Engineer"* (Devansh).
- [ ] **Delivery Standards:** 14-day post-launch fix window (Day 7 and Day 14 check-ins), pre-work mutual NDA.
- [ ] **Bottom Stack:** Final CTA Banner -> Contact Form -> Global Footer (FAQ omitted).

---

### 6. Book a Call (`/book-a-call`) & Thank You (`/book-a-call/thank-you`)
- [ ] **Book a Call:** Hero with 3-point call agenda, embedded Cal.com scheduling with fallback direct link, WhatsApp quick link, Security & White-Label Lock notice, consent notice. Footer rendered only (FAQ and contact form omitted).
- [ ] **Thank You:** Confirmation of calendar invite, what-to-bring checklist, NDA reassurance, link to `/for-agencies`, WhatsApp quick link. Excluded from `sitemap.xml` with `robots: noindex, nofollow`.

---

### 7. Blog Listing (`/blog`) & Single Post (`/blog/[slug]`)
- [ ] **Listing:** 3-column responsive card grid, 9 posts per page, pagination only once >9 posts exist, taxonomy filter pill tags (5 tags). Footer rendered with newsletter (contact form omitted).
- [ ] **Single Post:** Dynamic SSR/ISR via NWW CMS (`Blog.readOne`), breadcrumbs, category pill, server-side reading time, co-located vector cover visual, HTML rich text body, mid-article service callout (no prices), embedded FAQ accordion, author card (Devansh), newsletter CTA, Footer.

---

### 8. Contact (`/contact`)
- [ ] **Structure:** 5-field qualifying form (Agency Name, Team Size, Dev Work Type, Monthly Requests, Project Scope), consent notice with privacy link, honeypot trap, inline validation, direct email (`contact@nextwebworks.in`), secondary WhatsApp direct link. Footer rendered only.

---

### 9. Legal Pages (`/privacy` & `/terms`)
- [ ] **Privacy:** India DPDP Act 2023 + GDPR compliant, data minimization, Indore sole proprietorship entity.
- [ ] **Terms:** White-label non-solicitation, 100% IP transfer on delivery, 14-day defect warranty, Indore jurisdiction.
