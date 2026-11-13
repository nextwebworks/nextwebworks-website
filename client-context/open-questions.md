# Rolling Client Discovery & Refinement Questions

**Project:** Next Web Works (`nextwebworks-website`)  
**Status:** Active Rolling Brain & Context Expansion Queue (Batch 16: Production Launch Readiness, Third-Party Credentials & Final Client Assets)  
**Active Open Questions Count:** 2  

---

### Category A: Third-Party Credentials Required from Client (Awaiting Input)

1. **Google Analytics 4 (GA4) Measurement ID:**
   - **Status:** Approved by client. Awaiting `G-XXXXXXXXXX` Measurement ID string from client Google Analytics console.
   - **Target Deployment:** Will be injected into Vercel production environment variable `NEXT_PUBLIC_GA4_ID`.

2. **Inbound Lead Alerting & Email Dispatch (`Resend`):**
   - **Status:** Approved by client. Awaiting `re_...` Resend API Key from client Resend account.
   - **Target Deployment:** Will be injected into Vercel production environment variable `RESEND_API_KEY` to dispatch email briefs from `/contact` directly to `contact@nextwebworks.in`.

---

## Codified Decisions History (Resolved in Batches 01–16)

### Batch 16 Decisions (Resolved & Implemented)
- **Proprietor Full Legal Name:** Codified as **Devansh Khetwani (Sole Proprietor)**. All occurrences of `[PROPRIETOR FULL LEGAL NAME - TO PROVIDE]` updated across footer, `/privacy`, `/terms`, and sanitized HTML renderer.
- **Meeting Duration & Call Copy Alignment:** Standardized from 20-min to **30-Min Call** (*"Book a 30-Min Call"*, *"30-Minute Technical Review"*) across navigation, hero, agenda, article callouts, footer, and decoupled content modules to 100% align with active Calendly event (`https://calendly.com/devanshkhetwani/30min`).
- **Lead Intake Routing:** Client confirmed direct email dispatch to `contact@nextwebworks.in` via Resend with 1-click reply-to for briefs submitted via `/contact` and homepage.
- **Google Search Console Token:** Live verification token deployed at `https://nextwebworks.in/googleabbe0780e1c0ccb2.html`.

### Batch 15: Component Blueprints, Breakpoints, Markdown Rendering & SEO Schemas (Codified & Implemented)
- **Hero Schematic Nodes:** Implemented 4 connected nodes (`Agency Brand / Client Spec` → `Next Web Works Engineering Layer` → `Next.js App Router & API` → `White-Label Deliverable`) with cobalt lines and subtle packet flow in `HeroSection.js`.
- **Navigation Bar Sticky Behavior:** Implemented transparent top header transitioning smoothly to semi-opaque slate (`#0B0F19/80`) with `backdrop-blur-md` and 1px hairline border once scrolled past 40px; persistent "Book a Call" CTA and light/dark theme toggle in `Nav.js`.
- **Pain-Point Card Graphic Accents:** Minimalist monochrome icon badges (`UserX`, `Banknote`, `RefreshCw`) implemented in `PainPointsSection.js`.
- **Service Spec Drawer Expanded Content Layout:** Two-column structured drawer with deliverables checklist, architecture standards, and *"Scoped and quoted on your first call"* implemented in `ServicesSection.js`.
- **Responsive Viewport Grids & Collapse:** 2x2 services grid remains 2 columns on tablet; 3-column matrices collapse to 2 columns with 3rd card spanning full width.
- **Mobile Navigation Drawer Pattern:** Slide-down drawer beneath header with theme toggle, high-contrast links ($\ge 48$px), and primary CTA button.
- **Floating Mobile CTA Pill:** Persistent bottom pill (*"Book a Call →"*) appearing after 240px scroll depth on mobile screens; strictly hidden on booking, contact, and legal routes.
- **Touch Target Standards:** Strict WCAG 2.5.5 compliance ($\ge 44$px height) enforced across all buttons, inputs, and drawer triggers.
- **Blog Reader Rich-Text Formatting:** High-contrast reading column (`max-w-3xl`) with `prose prose-slate dark:prose-invert` styling, sanitized via `cleanArticleHtml()`.
- **Related Articles Widget:** 2-column card grid showing related posts in same category with reading times in `BlogRelatedSection.js`.
- **Native Social Sharing:** 1-click native Web Share API and clipboard copy link button with toast feedback.
- **CMS Fallback Strategy:** Graceful fallback to static cached seed content for blog, services, and portfolio routes when CMS is unreachable.
- **OpenGraph & Dynamic Metadata:** Server-generated metadata, canonical URLs, and structured JSON-LD (`Organization`, `Service`, `BlogPosting`, `CreativeWork`) with zero rates.
- **BreadcrumbList Schema:** Injected `BreadcrumbList` JSON-LD across all dynamic sub-routes (`/services/[slug]`, `/work/[slug]`, `/blog/[slug]`).
- **Image Alt-Text Standards:** Architectural descriptions enforced for all technical diagrams and schematics.
- **AI Scraper Governance:** Enforced in `site/app/robots.js` allowing standard search crawlers while blocking non-search AI scrapers (`GPTBot`, `CCBot`).
- **Minimum 5 Sections Rule:** Enforced via `.agents/rules/min-sections-per-page.md` and `check-structure.mjs`, requiring all public pages to compose $\ge 5$ modular section components.
- **16:9 Deterministic Blog SVG Covers:** 4 theme-aware SVG motifs (`agency-growth`, `project-scoping`, `architecture`, `general`) rendered inline.
- **Legal HTML Rendering:** Policy pages (`/privacy` and `/terms`) parse CMS content through `cleanArticleHtml` and render formatted semantic HTML via `dangerouslySetInnerHTML`.
- **Calendly Embed:** Embedded inline Calendly widget (`https://calendly.com/devanshkhetwani/30min`) on `/book-a-call`.

### Commercial Terms & Zero-Rates Policy
- **Zero Rates Policy:** NO rates, prices, "from" figures, yearly maintenance fees, retainer figures, volume discounts, pilot discounts, rush percentages, or payment-split figures anywhere on the public website. Pricing is discussed directly on discovery calls.
- **Hero Secondary CTA:** `"Explore Services & How We Work ↓"`.
- **Services 2x2 Grid:** 5 core sections approved. Anchors:
  1. Websites & Marketing Platforms (`#websites`)
  2. Custom Web Applications & Client Portals (`#web-apps`)
  3. Operations & Business ERPs (`#erps`)
  4. Cross-Platform Mobile Apps (`#mobile-apps`)
  5. Agency CMS & No-Code Platforms (`#cms-platforms`)
  - Spec drawers toggle: `"View Technical Specs ↓"` / `"Hide Technical Specs ↑"`. Each card ends with *"Scoped and quoted on your first call"*.
- **Partnership Matrix on `/for-agencies`:** 3-column side-by-side comparison matrix:
  - Column 1: *"Scoped Pilot Build"*
  - Column 2: *"Fixed-Price Sprints"*
  - Column 3: *"Dedicated Dev Bench"*
  - Ending: *"Terms discussed on discovery call"*. Zero published figures or hour caps.
- **Retainer Model Copy:** *"Dedicated monthly developer hours with a priority queue."*
- **Agency Margin Framing:** *"Predictable project scoping lets you bundle development into your own service lines."* (Softened framing; avoids outcome promises).
- **Maintenance Plan Scope:** *"Includes up to 1 hour of copy edits per month, maintenance, backups, security and updates. Domain and hosting not included."* No prices shown.
- **Client-Call Attendance:** Attendance on agency client calls is included in one-time project quotes; on retainers it is deducted from retainer hours. Site copy: *"We can join client calls as your technical lead when you introduce us."* The agency decides how to introduce the developer (no fake titles like "Head of Development").
- **Turnaround & Kickoff Commitments:** Quote line: `"Quotation in 24 hours"`. Kickoff: `"Kickoff: same day"`. Small-task and critical-blocker turnaround: `"typical"`.
- **Support & Triage Hours:** Standard business hours across all pages and support mentions: **Monday–Friday, 10:00 AM – 7:00 PM IST**.
- **Defect Intake & Triage SLA:** Bug intake asks for description, steps to reproduce, page URL, browser/device, screenshot/video, and severity. Critical blockers typically triaged same business day (IST: 10:00 AM – 7:00 PM); routine items within 1–2 business days.
- **Post-Launch Fix Window:** `"14-day post-launch fix window included on full builds"`. Proactive check-ins on Day 7 and Day 14. Formal Day-14 sign-off message confirming closure with offer to discuss ongoing maintenance or retainer hours (no figures in message).

### Supported Platforms & Engineering Capabilities
- **Primary Platform:** `Next.js` (App Router, React Server Components).
- **Supported Platforms & Stacks:** Displayed as static monospace pill tags (*"Builds in the platform your client already uses"*):
  - CMS & No-Code: `WordPress` (custom themes, plugins, Gutenberg, ACF), `Webflow`, `Wix`
  - Custom Web: `Next.js`, `React.js`, `MERN`, `PHP`
  - Mobile: `React Native` (iOS & Android)
- **Cloud Setup Line:** *"We set up production on Vercel, AWS, DigitalOcean or your preferred cloud provider."* Configured directly in agency's own cloud accounts so secrets rarely need transferring.
- **Staging Preview Hosting:** Hosted on the agency's own domain or cloud account, or neutral project name on Vercel preview (zero "nextwebworks" in staging URL so white-label promise is preserved).
- **Codebase Handover Standards:**
  - Standard `README.md` structure: 1. Project Overview & Architecture, 2. Prerequisites & Node/Package Manager versions, 3. Local Development Setup, 4. Environment Variables Reference, 5. Deployment Guide (Vercel/AWS), 6. Handover Verification Checklist.
  - Branching: `main` (production deployment branch) + `staging` (preview review branch), with feature branches merging into staging. Verify branch protection availability on agency GitHub plan.
  - Handover CI/CD: Include standard `.github/workflows/ci.yml` running linting (`eslint`), code formatting check (`prettier --check`), and build validation (`pnpm build`).
  - Credentials protocol: Production secrets transferred via Bitwarden/1Password secure share link. Never emailed. Private GitHub repository ownership transferred directly to agency GitHub organization at final delivery.

### Design System & Visual System (Gate 2)
- **Visual Variations Approved:**
  - V1 (The Modernist Technical Lead): Deep slate canvas (`#0B0F19`), `#0F172A` cards, subtle cobalt hairline highlights.
  - V2 (The Crisp Engineering Partner): Clean high-contrast neutral white canvas (`#FFFFFF`), `#F8FAFC` cards, cobalt interactive accents.
  - V3 (The Hybrid Operator): Deep slate dark hero/footer zones with high-contrast light content body zones. (Devansh lean: V3 or V1; final decision in review hub).
- **Hero Eyebrow Badge:** *"White-Label Engineering Partner for Marketing Agencies"*. Main H1 / subheadline carries outcome line: *"Say Yes to Every Client Dev Request. Without Hiring Developers."*
- **`/about` Engineering Standards Header:** *"Engineering Standards: How We Build Behind Your Brand"* (grounded in clean typed code, staging previews, clean handovers).
- **Color Discipline & Focus Rings:** Cobalt `#2563EB` reserved exclusively for interactive touchpoints and buttons; prohibited for body text on `#0B0F19` dark canvas. Keyboard focus rings: 2px electric cobalt ring with 2px offset (`ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-900` on dark canvas; `ring-offset-white` on light surfaces). Emerald `#10B981` reserved for live status indicators and workflow nodes.
- **Typography:** Display: Plus Jakarta Sans; Interface/Body: Inter; Monospace: JetBrains Mono. Configured with `display: 'swap'` and `adjustFontFallback: true` for zero CLS.
- **Asset Guards:** Zero stock photography (stock ceiling = 0); custom in-house vector SVGs and authentic photos only.
- **Internal Web Vitals Benchmarks:** Accessibility $\ge 95$, SEO $\ge 95$, CLS $< 0.1$, LCP $< 2.5\text{s}$, and Performance $\ge 85$ on mobile with `ultra` motion tier. Zero scores published until measured.
- **Pain-Points Order:** 1. The Freelancer Ghost, 2. The Unbillable In-House Salary, 3. The Costly Code Rewrite. Qualitative copy only; zero invented statistics.
- **Workflow Pipeline:** 4-step horizontal connected pipeline on desktop, vertical on mobile, with static emerald nodes (subtle pulse at most; zero scrubbed progress bars).
- **Grounded Illustrative Samples (`/work`):** 3 builds with interactive tab switcher, SVG node diagrams, cobalt lines, and expandable architectural specification notes.
  - Sample 1: SaaS Analytics Portal (Next.js App Router, React Server Components data streaming, Prisma + PostgreSQL, exportable client summaries).
  - Sample 2: Business & Operations ERP (derived from proprietary product capabilities `next-web-business`: multi-tier GST tax engine [CGST/SGST/IGST], atomic FIFO stock lot depletion with MongoDB session transactions, QuestPDF vector rendering service, role-based access audit trail; described as product capabilities, not client deliverables).
  - Sample 3: Field-inspection cross-platform mobile app (React Native shared codebase, camera/photo capture, push notifications, role-based checklists, store submission support; zero unconfirmed offline sync, biometrics, or signed S3 uploads).
  - Monospace pill: `Illustrative sample · not a client project`. Zero unmeasured synthetic metrics.
- **Mobile Persistent CTA Floating Pill:** *"Book a 20-Min Call →"* appearing after hero scroll on mobile viewports (<768px); strictly hidden on `/book-a-call`, `/contact`, and `/book-a-call/thank-you`.
- **Motion Tier:** `ultra` (GSAP 3 ticker sync + Lenis, non-blocking WebGL/GLSL, subtle border glow + -2px lift). Autoplay video reels prohibited.

### Legal Entity, Brand & Trust Guarantees
- **Legal Entity:** Next Web Works (Sole Proprietorship, Indore, Madhya Pradesh, India). Proprietor legal name: `[PROPRIETOR FULL LEGAL NAME - TO PROVIDE]`. No GSTIN shown unless provided.
- **Public Business Address:** `"Indore, Madhya Pradesh, India"` (city-level only in footer and structured data; no street address).
- **Founder Identity:** Devansh, `"Founder & Lead Engineer"`. Authentic narrative written by founder. Placeholders kept strictly visible until provided: `[FOUNDER HEADSHOT]`, `[FOUNDER BIO / STORY TO PROVIDE]`.
- **White-Label Definition:** *"We deliver under your brand with no NWW credits or watermarks. You can introduce us as your in-house developer. Commits appear under our developer handle unless you ask us to author them under your agency's identity."*
- **Legal Terms & NDA:** Mutual NDA signed before work starts and IP assignment stated as contract standards. Zero downloadable NDA/agreement templates; zero unapproved legal drafting (Terms and Privacy drafted by a lawyer).
- **7 Core FAQs on `/for-agencies`:**
  1. *Who owns the code?* "You do: the repository is transferred to your organization at handover."
  2. *Will our client find out?* "We deliver under your brand with no NWW credits or watermarks. You can introduce us as your in-house developer. Commits appear under our developer handle unless you ask us to author them under your agency's identity."
  3. *What if a bug appears after launch?* "14-day post-launch fix window included on full builds (proactive check-ins on Day 7 and Day 14), followed by an optional ongoing maintenance plan."
  4. *Can you join client calls?* "We can join client calls as your technical lead when you introduce us."
  5. *What stacks do you support?* "Next.js, WordPress, Webflow, Wix, React.js, MERN, PHP, and React Native."
  6. *How do scope changes work?* "Written change request with an itemized, revised quote before any out-of-scope work proceeds."
  7. *How do we get started?* "Book a 20-min call, sign a mutual NDA, review your brief, quote in 24 hours, and kickoff the same day."

### Forms, Lead Capture & Booking Architecture
- **Cal.com Meeting Parameters:** 20 minutes duration, Monday–Friday, 10:00 AM – 7:00 PM IST, 15-minute buffer between calls, 2-hour minimum advance notice.
- **Cal.com Blocked Embed Fallback UI:** Clean fallback card displaying: direct booking link + WhatsApp direct button + embedded 5-field inquiry form, ensuring a blocked embed never loses a lead.
- **Form Error Styling:** Crisp red-500 hairline border (`border-red-500`), subtle red tint background (`bg-red-500/5`), plus an icon or short text message in each error so color-blind visitors can read it (not relying on red alone).
- **Booking Thank-You Page (`/book-a-call/thank-you`):** "What to bring" checklist (client requirements, Figma designs, current dev bottlenecks), "Add to Calendar" buttons (Google/Outlook/iCal), link to `/for-agencies`, and WhatsApp contact. Strictly no downloadable NDA document link.
- **Inbound Notifications via Resend:** Internal alerts sent from `alerts@nextwebworks.in` with reply-to set to lead's own email for instant 1-click reply. Standardized subject line: `[Website Lead] <Agency Name> — <Dev Work Type>`. Slack completely eliminated from lead alerts.
- **Immediate Autoresponder:** Automated transactional email sent from `contact@nextwebworks.in` to lead: *"We've received your enquiry. Devansh will reply within 24 hours."*
- **Form Fields (5 Qualifying Fields):** Agency Name, Team Size, Type of Dev Work, Monthly Client Requests, Project Scope (`project_scope` placeholder: *"e.g. a Next.js client portal, 3 WordPress marketing sites, or dedicated monthly dev support"*).
- **Consent Line:** Displayed under every form: *"We'll use your details only to reply to your enquiry. Privacy Policy"* (linked to `/privacy`). Invisible honeypot spam trap (`company_url`).
- **Short 404 Page:** Clean and short: *"404: page not found."* + buttons: *"Return home"* and *"Book a 20-Min Call"*. Purely static with zero telemetry logging at launch to protect visitor privacy.

### SEO & Dynamic Blog Strategy
- **Global Title:** `White-Label Development Partner for Agencies | Next Web Works` (59 chars, <60 chars limit).
- **Global Description:** `We build websites, custom web apps, ERPs and mobile apps under your agency's brand. Say yes to every client dev request without hiring developers.`
- **Structured Data:** `Organization`, `Service`, `BlogPosting` schemas. Zero fake price markup; zero review markup.
- **Sitemap:** All core routes + dynamic blog posts; strictly omit `/book-a-call/thank-you` (noindexed).
- **Dynamic Blog (`/blog`):** 9 posts per page; pagination triggers only once >9 posts exist. Topic filter bar hidden until $\ge 6$ posts exist (show category pill on each card only until then).
  - Launch Article 1: *"The White-Label Playbook: How Marketing Agencies Ship Custom Web Apps Without In-House Devs"*
    - Subheadings: 1. The Dilemma: Turn Profitable Dev Work Away or Bleed Margin on Payroll? 2. Common Failure Modes of Freelance Delivery, 3. The Behind-the-Scenes Engineering Partner Model, 4. The 4-Point Checklist for Scoping Your First White-Label Sprint.
  - Launch Article 2: *"How to Scope Fixed-Price Web Projects Without Scope Creep"*
  - Launch Article 3: *"Headless Next.js vs WordPress vs Webflow: How to Choose the Right Stack"*
  - Author Bio Card: *"Devansh is the Founder & Lead Engineer at Next Web Works. He partners with marketing agencies to architect and ship custom websites, web applications, ERPs, and mobile apps under their own brand."*
  - Single mid-article service callout per post (zero pricing language) and bottom author card.
  - Code snippets: Dark slate container (`#0F172A`), 1px border (`#1E293B`), JetBrains Mono 14px, syntax highlighting tokens, file-name header badge, 1-click "Copy Code" button.

### Conversion Architecture, Sitewide CTAs & WhatsApp System
- **Standard Page-Bottom Stack:** Exact order: `FAQ Accordion -> Final CTA Banner -> Embedded Contact Form -> Global Footer with Newsletter`.
  - Final CTA Banner: Single primary button *"Book a 20-Min Call"* -> `/book-a-call`, one supporting line (*"Direct engineering conversation with Devansh. No sales pitch, no obligation"*), zero prices.
  - Contact Form Section: Headline *"Prefer to write? Send us your brief."*, reuses 5 qualifying fields, honeypot, consent line with `/privacy` link, accessible error styling.
  - Page mapping: Home, `/services`, and `/for-agencies` include FAQ; `/work` and `/about` omit FAQ; `/blog` and `/blog/[slug]` omit FAQ and form (render CTA banner -> footer); `/book-a-call`, `/contact`, `/book-a-call/thank-you`, `/privacy`, `/terms` render footer only.
- **Additional Sitewide CTA Placements:** One primary CTA per viewport-sized section, varying copy contextually:
  - Header: Persistent *"Book a 20-Min Call"* button
  - Hero: Primary *"Book a 20-Min Call"* + secondary *"Explore Services & How We Work ↓"*
  - After pain points: *"Tell us what your clients keep asking for"* -> `/book-a-call`
  - After 4-step workflow: *"Start with a scoped pilot"* -> `/book-a-call`
  - Each service spec drawer: *"Discuss this build"* -> `/book-a-call`
  - Each `/work` sample card: *"Discuss a build like this"* -> `/book-a-call`
  - `/for-agencies` partnership columns: action link per model -> `/book-a-call`
  - `/about` after engineering standards: *"Talk to the founder"* -> `/book-a-call`
  - Blog articles: single mid-article service callout + bottom author card
  - Mobile: Floating bottom pill *"Book a 20-Min Call →"* appearing after hero scroll
  - Footer: *"Book a 20-Min Call"* link + WhatsApp direct link
- **Footer Newsletter Signup:** Email field + button *"Subscribe"*, description: *"The white-label engineering digest. At most 2 articles a month on agency dev scoping and delivery."*, consent notice with link to `/privacy`. Stored via NWW CMS `Lead` model (`metadata.type = 'newsletter'`, `metadata.source = 'footer-newsletter'`). Resend confirmation email with 1-click unsubscribe link.
- **Floating WhatsApp Button & Prefilled Message:** Pinned at bottom-right of every public page + links in footer and on `/contact`. URL: `https://wa.me/917999934815`. Dynamic message format on click:
  - Line 1: `Hi, I run an agency and want to discuss white-label development.`
  - Line 2: `Page: <current page title>`
  - Line 3: `Link: <current page URL, without query strings except utm_ parameters>`
  - Line 4: `Source: <utm_source if present, otherwise document.referrer domain, otherwise "direct">`
  - Line 5: `Via: <floating button / footer / contact page>`
  - Mobile safe layout: Floating CTA pill pinned at `bottom-4` centered; WhatsApp button elevated to `bottom-20 right-4` (`z-40`, 48x48px circle, $\ge 44$px touch target, 16px vertical clearance) to prevent overlapping tap targets.

