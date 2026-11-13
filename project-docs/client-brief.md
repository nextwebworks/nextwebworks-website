# Master Client Project Brief: Next Web Works

**Technical Project Name / Slug:** `nextwebworks-website`  
**Brand Display Name:** Next Web Works  
**Legal Entity:** Next Web Works (Sole Proprietorship, Indore, Madhya Pradesh, India)  
**Proprietor:** `[PROPRIETOR FULL LEGAL NAME - TO PROVIDE]`  
**GSTIN:** Not shown unless provided  
**Target Domain:** `https://nextwebworks.in`  
**Pipeline Gate:** Gate 1 Developer Gate Sign-Off  
**Sole Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## 1. Executive Summary & Value Proposition

**Next Web Works** is a dedicated white-label engineering and development partner for marketing agencies. We build websites, web applications, custom ERPs, and React Native mobile apps strictly under the agency's own brand. 

By offering rapid turnaround (quotation in 24 hours, same-day kickoff, and typical turnaround for small tasks and critical blockers), dependable engineering craft, and clear scoping on your first call, Next Web Works enables agency owners, founders, and heads of delivery to say "yes" to every client request for development without the financial overhead, hiring risk, or management strain of an in-house engineering team.

---

## 2. Target Audience & Visitor Persona

- **Primary Persona:** Owners, founders, partners, and heads of delivery at small marketing agencies (3–25 people).
- **Core Agency Services:** SEO, paid media, social media marketing, content, or branding—with no in-house developers.
- **Geographic Focus:** India first (domestic billing in INR + GST; USD billing available on request), expanding into UAE and US. Public business address: Indore, Madhya Pradesh, India (city-level only in footer and structured data; jurisdiction claims omitted from marketing copy).
- **Problem on Landing:** Clients keep asking for websites, web apps, ERPs, or mobile apps. Agencies either:
  1. Turn the profitable work down,
  2. Subcontract to unreliable freelancers who ghost or deliver spaghetti code, or
  3. Attempt hiring full-time developers they cannot consistently keep billable.
- **Visitor Intent:** Commercial & Evaluative. They want to see sample work, understand turnaround and how we work, confirm the work is 100% white-label, and book a call or pilot.

---

## 3. Brand Identity, Visual Direction & Aesthetic Rules

- **Brand Personality:**
  - *Minimal ↔ Maximal:* 2/5 (Dense, calm hierarchy, confident short copy).
  - *Corporate ↔ Playful:* 2/5 (Professional, reliable partner; zero gimmicks).
  - *Luxury ↔ Accessible:* 3/5 (High craft, clear scoping on discovery calls).
  - *Modern ↔ Classic:* 5/5 (Cutting-edge Next.js engineering aesthetic).
- **Hero Eyebrow Badge:** *"White-Label Engineering Partner for Marketing Agencies"* (Positions the firm; outcome hook *"Say yes to every client dev request"* carried in H1 / subheadline).
- **Color Palette:**
  - **Canvas Background:** Deep slate navy (`#0B0F19`)
  - **Surfaces & Cards:** High-contrast neutral white (`#FFFFFF`) / Dark card variants (`#0F172A`)
  - **Primary Tech Accent:** Electric cobalt blue (`#2563EB`)
  - **Focus Rings:** 2px electric cobalt ring with 2px offset (`ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-900` on dark canvas; `ring-offset-white` on light surfaces).
  - **Status & "Live" Indicator:** Emerald green (`#10B981`)
- **Typography:**
  - **Headings:** Plus Jakarta Sans (Google Fonts)
  - **Body / Interface:** Inter (Google Fonts)
  - **Monospace Accents:** JetBrains Mono (Google Fonts)
- **Reference Benchmarks (Principles-Only Inspiration):**
  - `linear.app`: Dense but calm visual hierarchy, confident short copy, crisp hairline borders.
  - `stripe.com`: Clear typographic scale, proof points positioned directly adjacent to claims (zero price claims).
  - `posthog.com`: Direct, specific, engineering-focused copy that cuts through agency fluff.
- **Strict Aesthetic Anti-Patterns (Prohibited):**
  - **Zero stock photography:** Absolutely no generic "team at a laptop" or office stock photos (stock ceiling = 0).
  - **Zero fake social proof:** No invented client names, fake logos, fabricated reviews, or synthetic stats.
  - **Zero vague copy:** No generic "we build anything" statements; specific, verifiable capabilities only.
  - **Zero trendy template bloat:** No overused bento grid clones or heavy neon gradient soup.
  - **No autoplay video reels:** Zero auto-playing video reels. WebGL/GLSL is allowed under the `ultra` tier, but must not block the Book a Call button or the primary content.
- **Motion Tier:** `ultra` (120fps GSAP ticker synchronization, silky smooth interactions, subtle border glow + small lift on hover, optional non-blocking WebGL/GLSL canvas effects, respecting `prefers-reduced-motion`).
- **Internal Web Vitals Benchmarks:** Accessibility $\ge 95$, SEO $\ge 95$, CLS $< 0.1$, LCP $< 2.5\text{s}$, and Performance $\ge 85$ on mobile with `ultra` motion tier. Zero scores published until measured.

---

## 4. Visual Assets & Imagery Strategy

1. **Per-Service Visuals:** Interactive lightweight inline SVG architecture diagrams + UI preview cards highlighting real production capabilities: server-rendered Next.js, database and auth layer, role-based dashboards, API integrations, and shared React Native codebase. Lucide React icons used as supporting details only.
2. **Sample Builds on `/work`:**
   - 3 schematic UI wireframes and system architecture mockups with interactive tab switcher, cobalt lines, and expandable architectural specification notes:
     - *Sample 1:* Agency Client-Reporting Dashboard (Next.js App Router, React Server Components data streaming, Prisma + PostgreSQL, exportable client summaries).
     - *Sample 2:* Business & Operations ERP (derived from proprietary product capabilities: multi-tier GST tax engine [CGST/SGST/IGST], atomic FIFO stock lot depletion with MongoDB session transactions, QuestPDF vector rendering service, and role-based access audit trail; described as capabilities of our own products, not a client project).
     - *Sample 3:* Field-Inspection Mobile App (React Native shared iOS/Android codebase, camera/photo capture, push notifications, role-based checklists, store submission support; zero unconfirmed offline sync, biometrics, or signed S3 uploads).
   - **Labeling Rule:** Must be clearly labeled with slate monospace pill: `Illustrative sample · not a client project`.
   - **Metrics Ground Rule:** Zero unmeasured or synthetic metrics (no fake "Lighthouse 98", "<800ms boot", or "90%+ code reuse"; zero client names or logos). Highlight qualitative craft points: typed TypeScript codebase, role-based access control, clean schema & handover documentation, and isolated staging environments.
3. **Leadership & About Assets:**
   - Founder Title: "Founder & Lead Engineer" (Devansh).
   - Placeholders maintained until provided: `[FOUNDER HEADSHOT]`, `[FOUNDER BIO / STORY TO PROVIDE]`. No invented founder stories.
   - Engineering Standards Header on `/about`: *"Engineering Standards: How We Build Behind Your Brand"* (covering clean typed code, staging previews, clean handovers).

---

## 5. Trust & Operational Guarantees

- **100% White-Label:** We deliver under your brand with no NWW credits or watermarks. You can introduce us as your in-house developer. Commits appear under our developer handle unless you ask us to author them under your agency's identity.
- **Agency Protection & Non-Solicitation:** Contractual guarantee of zero direct contact with the agency's end clients; mutual non-solicitation clause (formal clauses settled in legal Terms drafted by a lawyer).
- **Client Face-Time & Calls:** "We can join client calls as your technical lead when you introduce us." Attendance on client calls is included in one-time project quotes; on retainers it is deducted from retainer hours. (The agency decides how to introduce the developer; no fake titles like "Head of Development").
- **Custom NDA & IP Assignment:** Mutual NDA signed before reviewing project briefs or client materials; full IP assignment included in contract. (Zero downloadable NDA PDFs or templates; zero "on full payment" claims in marketing copy; terms settled in legal Terms).
- **Turnaround Timing:** Quotation in 24 hours. Kickoff: same day. Small-task and critical-blocker turnaround: typical.
- **Operating & Support Hours:** Monday–Friday, 10:00 AM – 7:00 PM IST.
- **Dedicated Communication & Support:** Active collaboration via the agency's preferred channel (WhatsApp, Slack, or Microsoft Teams) + a weekly email status note.
- **Defect Intake & Triage:** Standardized bug intake asking for: description, steps to reproduce, page URL, browser/device, screenshot or video, and severity. Critical blockers typically triaged the same business day (IST: 10:00 AM – 7:00 PM); routine items within 1–2 business days.
- **Scope Changes & Revisions:** 1 revision round included on design/implementation; written change request with quoted additional hours/cost approved before out-of-scope work proceeds.
- **Rush Delivery & Legacy Code Policy:** Rush delivery subject to developer availability on request (not guaranteed). Legacy code accepted only after a scoped paid audit (2–4 hours).
- **Cloud Hosting & Production Setups:** "We set up production on Vercel, AWS, DigitalOcean or your preferred cloud provider." Staging previews hosted on the agency's own domain/cloud account, or neutral project name on Vercel preview (zero "nextwebworks" in staging URL so white-label promise is preserved).
- **Maintenance Plan Scope:** "Includes up to 1 hour of copy edits per month, maintenance, backups, security and updates. Domain and hosting not included." No prices published.
- **Warranty:** Badge copy: `"14-day post-launch fix window included on full builds"`. Proactive check-ins on Day 7 and Day 14. Formal Day-14 sign-off message confirming fix window closure with offer to discuss ongoing maintenance or retainer hours (no figures).
- **Source Code & Handover Package:** Private GitHub repository ownership transferred directly to the agency's GitHub organization at final delivery, once contract conditions are met.
  - Standard `README.md` structure: 1. Project Overview & Architecture, 2. Prerequisites & Node/Package Manager versions, 3. Local Development Setup, 4. Environment Variables Reference, 5. Deployment Guide (Vercel/AWS), 6. Handover Verification Checklist.
  - Branching: `main` (production deployment branch) + `staging` (preview review branch), with feature branches merging into staging. Verify branch protection availability on agency GitHub plan.
  - Handover CI/CD: Include standard `.github/workflows/ci.yml` running linting (`eslint`), code formatting check (`prettier --check`), and build validation (`pnpm build`).
  - Credentials protocol: Set up cloud services in agency's own accounts; production secrets transferred via Bitwarden/1Password secure share link. Never emailed.

---

## 6. Partnership Models (`/for-agencies`)

*Note: Zero public rates, price figures, or call-only commercial terms are displayed on the website or brief. All pricing and custom terms are discussed directly on the first discovery call.*

1. **3-Column Partnership Matrix:**
   - **Column 1: "Scoped Pilot Build":** High-contrast callout (*"Test us before committing: one scoped pilot build"*). One small, scoped pilot build (e.g., single landing page, dashboard widget, or calculator component) to test speed, code quality, and communication; terms discussed on the call. Strictly limited to one pilot per agency. Full IP transfer upon contract completion.
   - **Column 2: "Fixed-Price Sprints":** Custom scoped and quoted on your first call. "Predictable project scoping lets you bundle development into your own service lines." Client-call attendance included in one-time project quotes. Builds in the platform your client already uses (Websites, Web Apps, ERPs, Mobile Apps).
   - **Column 3: "Dedicated Dev Bench":** "Dedicated monthly developer hours with a priority queue." Direct coordination, client-call attendance deducted from retainer hours. Terms and capacity discussed on call.
   - Ending line: *"Terms discussed on discovery call"*.

---

## 7. Launch Route Hierarchy & Information Architecture

| Route | Page Name | Primary Purpose & Key Sections |
|---|---|---|
| `/` | **Home** | Eyebrow: *"White-Label Engineering Partner for Marketing Agencies"*, Hero with exact copy, stylized architecture node card, "Why agencies lose dev work" pain-point teardown (Freelancer Ghost, Unbillable In-House Salary, Costly Code Rewrite), 4-step white-label workflow with Step 1 Security & White-Label Lock badge, service overview, illustrative sample previews, retainer model pitch, Book a 20-Min Call primary CTA, secondary CTA *"Explore Services & How We Work ↓"*, and mobile persistent CTA pill *"Book a 20-Min Call →"*. Footer displays `"Indore, Madhya Pradesh, India"`. |
| `/services` | **Services** | Single page with anchor-linked sections for core capabilities and platforms: 1. Websites & Marketing Platforms (`#websites`), 2. Custom Web Applications & Client Portals (`#web-apps`), 3. Operations & Business ERPs (`#erps`), 4. Cross-Platform Mobile Apps (`#mobile-apps`), 5. Agency CMS & No-Code Platforms (`#cms-platforms`). 2x2 modular grid with expandable specification drawers (`"View Technical Specs ↓"` / `"Hide Technical Specs ↑"`). Each card ends with *"Scoped and quoted on your first call"*. Platforms & Stack tags: CMS & No-Code (WordPress, Webflow, Wix), Custom Web (Next.js, React.js, MERN, PHP), Mobile (React Native). |
| `/for-agencies` | **For Agencies** | 3-column partnership matrix (Scoped Pilot Build, Fixed-Price Sprints, Dedicated Dev Bench) on team fit, workflow integration and typical turnaround (ending *"Terms discussed on discovery call"*). Agency margin callout (*"Predictable project scoping lets you bundle development into your own service lines"*). 7 Core FAQs. Platform flexibility tags ("Builds in the platform your client already uses"). |
| `/work` | **Work** | 3 schematic builds labeled `Illustrative sample · not a client project` with interactive tab switcher and SVG node diagrams (B2B Agency Client-Reporting Dashboard, Business ERP drawn from proprietary product capabilities, Field-Inspection Mobile App). Qualitative craft breakdowns. Zero metrics, zero client logos. |
| `/about` | **About** | Engineering standards header: *"Engineering Standards: How We Build Behind Your Brand"*, delivery standards, pre-work NDA guarantee, 14-day post-launch fix window, engineering workflow, and founder bio with placeholders `[FOUNDER HEADSHOT]` and `[FOUNDER BIO / STORY TO PROVIDE]`. Legal jurisdiction omitted from marketing copy. |
| `/book-a-call` | **Book a Call** | 20-minute Cal.com embed (`cal.com/nextwebworks/intro-20`, Monday–Friday, 10:00 AM – 7:00 PM IST, 15-min buffer, 2-hr notice), 3-point agenda, Security & White-Label Lock badge, 5 qualifying fields (Project Scope placeholder: *"e.g. a Next.js client portal, 3 WordPress marketing sites, or dedicated monthly dev support"*), consent line with privacy link, and fallback card (direct Cal.com link + WhatsApp button + embedded 5-field form) if iframe blocked. Form error styling: red-500 hairline border, subtle red tint, icon and text message for color-blind accessibility. |
| `/book-a-call/thank-you` | **Booking Confirmation** | Booking confirmation, calendar invite verification, "What to bring" checklist (client requirements, wireframes/Figma, current bottlenecks), "Add to Calendar" buttons (Google/Outlook/iCal), and quick-links to `/for-agencies` and WhatsApp. Strictly excluded from sitemap and enforced with `noindex`. No downloadable NDA link. |
| `/blog` | **Blog** | Dynamic articles published via NWW CMS Headless API with on-demand ISR. 9 posts per page; pagination triggers only once >9 posts exist. Category filter bar hidden until $\ge 6$ posts exist (category pills on cards only). Server-side reading time calculation ($\approx 200\text{ wpm}$). Author: Devansh, "Founder & Lead Engineer" (bio card: *"Devansh is the Founder & Lead Engineer at Next Web Works. He partners with marketing agencies to architect and ship custom websites, web applications, ERPs, and mobile apps under their own brand"*). Launch articles: 1) "The White-Label Playbook: How Marketing Agencies Ship Custom Web Apps Without In-House Devs" (Subheadings: The Dilemma, Common Failure Modes of Freelance Delivery, The Behind-the-Scenes Partner Model, 4-Point Checklist), 2) "How to Scope Fixed-Price Web Projects Without Scope Creep", 3) "Headless Next.js vs WordPress vs Webflow: How to Choose the Right Stack". Single mid-article service callout per post (zero pricing language). Code snippets: dark slate `#0F172A`, JetBrains Mono 14px, syntax highlighting, copy code button. |
| `/contact` | **Contact** | Inquiry form with 5 fields, consent line (*"We'll use your details only to reply to your enquiry. Privacy Policy"*), invisible honeypot spam trap (`company_url`), inline blur validation with color-blind accessible text/icons, Security & White-Label Lock badge, smooth success card crossfade, and error fallback preserving inputs with mailbox `contact@nextwebworks.in` and secondary WhatsApp link. |
| `/privacy` | **Privacy Policy** | India DPDP Act 2023 + GDPR compliance. Content drafted by a lawyer; no unapproved legal templates published. |
| `/terms` | **Terms of Service** | Legal terms document settling business entity (Next Web Works, sole proprietorship, proprietor `[PROPRIETOR FULL LEGAL NAME - TO PROVIDE]`), governing law (Courts of Indore, MP), Indian Contract Act 1872, IP assignment, and mutual confidentiality (drafted by lawyer; no unapproved legal templates published). |
| `/404` | **Not Found** | Short static 404 page: *"404: page not found."* + buttons: *"Return home"* and *"Book a 20-Min Call"*. Purely static with zero telemetry logging at launch. |

---

## 8. Form & Booking Routing Architecture

- **Primary Conversion CTA:** "Book a 20-Min Call" (All CTAs sitewide link directly to `/book-a-call`; zero modal popups).
- **Secondary Hero CTA:** "Explore Services & How We Work ↓" (smooth anchor scroll to services overview).
- **Mobile Persistent CTA:** Floating bottom pill *"Book a 20-Min Call →"* appearing after hero scroll on mobile viewports (<768px).
- **Booking Mechanism:** Cal.com embedded inline on dedicated route `/book-a-call` (`[CAL.COM LINK TO CONFIRM]`, Monday–Friday, 10:00 AM – 7:00 PM IST), lazy-loaded to safeguard Core Web Vitals.
- **Secondary Direct Communication:** WhatsApp direct link on `/contact`: `https://wa.me/917999934815?text=Hi%2C%20I%20run%20an%20agency%20and%20want%20to%20discuss%20white-label%20development.` (digits only, prefilled inquiry text).
- **5 Qualifying Form Fields:**
  1. Agency Name
  2. Team Size (1–5, 6–15, 16–30, 30+)
  3. Type of Dev Work Needed (Websites, Web Apps, ERPs, Mobile Apps, Retainer, CMS / WordPress / Webflow)
  4. Monthly Client Dev Requests (1–2, 3–5, 6+)
  5. Project Scope (Placeholder: *"e.g. a Next.js client portal, 3 WordPress marketing sites, or dedicated monthly dev support"*)
- **Consent Line:** Displayed under every form: *"We'll use your details only to reply to your enquiry. Privacy Policy"* (with Privacy Policy linked).
- **Form Error Styling:** Crisp red-500 hairline border (`border-red-500`), subtle red tint background (`bg-red-500/5`), plus an icon and short text message in each error for color-blind accessibility.
- **Data Persistence:** Submissions saved directly to NWW CMS (`WebsiteContactUs` / `Lead` model via Next.js Server Action with CMS Bearer token).
- **Alert Dispatch (Email-Only via Resend):** Dispatched server-side upon lead creation via Resend (`from: alerts@nextwebworks.in`, reply-to set to lead's own email for instant 1-click reply). Subject line: `[Website Lead] <Agency Name> — <Dev Work Type>`. Slack is completely eliminated from lead alerts.
- **Immediate Autoresponder:** Automated transactional email sent from `contact@nextwebworks.in` to lead: *"We've received your enquiry. Devansh will reply within 24 hours."*

---

## 8.1. Standard Page-Bottom Section Stack, Newsletter & WhatsApp

- **Standard Page-Bottom Stack Sequence:** `FAQ Accordion -> Final CTA Banner -> Embedded Contact Form -> Global Footer with Newsletter`
  - *Final CTA Banner:* Single primary button *"Book a 20-Min Call"* routing to `/book-a-call`, one short supporting line (*"Direct engineering conversation with Devansh. No sales pitch, no obligation"*), zero prices.
  - *Contact Form Section:* Lead-in headline *"Prefer to write? Send us your brief."*, 5 qualifying fields, honeypot, consent line, and accessible error styling.
  - *Page Mapping:*
    - Home: FAQ (short, 4–5 questions) -> Final CTA Banner -> Contact Form -> Footer
    - `/services`: FAQ (7 core questions) -> Final CTA Banner -> Contact Form -> Footer
    - `/for-agencies`: FAQ (7 core questions) -> Final CTA Banner -> Contact Form -> Footer
    - `/work`: Final CTA Banner -> Contact Form -> Footer (no FAQ)
    - `/about`: Final CTA Banner -> Contact Form -> Footer (no FAQ)
    - `/blog` & `/blog/[slug]`: Mid-article callout + author card -> Final CTA Banner -> Footer (no FAQ, no form)
    - `/book-a-call` & `/contact`: Conversion endpoints: Footer only (zero duplicate banner or form)
    - `/book-a-call/thank-you`: Footer only (onboarding checklist, calendar buttons, WhatsApp link)
    - `/privacy`, `/terms`: Footer only
    - `/404`: Short static layout unchanged
- **Additional Sitewide CTA Placements:** One primary CTA per viewport-sized section, varying copy contextually:
  - Header: Persistent *"Book a 20-Min Call"* button
  - Hero: Primary *"Book a 20-Min Call"* + secondary *"Explore Services & How We Work ↓"*
  - After pain points: *"Tell us what your clients keep asking for"* -> `/book-a-call`
  - After 4-step workflow: *"Start with a scoped pilot"* -> `/book-a-call`
  - Each service spec drawer: *"Discuss this build"* -> `/book-a-call`
  - Each `/work` sample card: *"Discuss a build like this"* -> `/book-a-call`
  - `/for-agencies` partnership columns: Action link per model -> `/book-a-call`
  - `/about` after engineering standards: *"Talk to the founder"* -> `/book-a-call`
  - Blog articles: Mid-article callout box + bottom author card
  - Mobile: Floating bottom pill *"Book a 20-Min Call →"* appearing after hero scroll
  - Footer: *"Book a 20-Min Call"* link + WhatsApp direct link
- **Footer Newsletter Signup:**
  - Field: Email input + button *"Subscribe"*
  - One-line description: *"The white-label engineering digest. At most 2 articles a month on agency dev scoping and delivery."*
  - Consent notice: *"We'll email you new articles. Unsubscribe any time. Privacy Policy"* (linked to `/privacy`)
  - Storage: Captured via NWW CMS `Lead` model (`metadata.type = 'newsletter'`, `metadata.source = 'footer-newsletter'`)
  - Autoresponder: Resend confirmation email with an explicit 1-click unsubscribe link in every email
- **Floating WhatsApp Button & Dynamic URL Builder:**
  - Pinned at bottom-right of every public page + links in footer and on `/contact`
  - Target URL: `https://wa.me/917999934815`
  - Prefilled message built dynamically on click:
    ```text
    Hi, I run an agency and want to discuss white-label development.

    Page: <current page title>
    Link: <current page URL, without query strings except utm_ parameters>
    Source: <utm_source if present, otherwise document.referrer domain, otherwise "direct">
    Via: <floating button / footer / contact page>
    ```
  - Mobile safe layout: Floating CTA pill pinned at `bottom-4` centered; WhatsApp button elevated to `bottom-20 right-4` (`z-40`, 48x48px circle, $\ge 44$px touch target, 16px vertical clearance) to prevent overlapping tap targets.


---

## 9. Technical Stack & Governance

- **Primary Framework:** Next.js App Router (React Server Components, dynamic ISR).
- **Styling:** Tailwind CSS utility classes strictly in JSX; zero custom CSS files.
- **Language & Package Manager:** JavaScript (`.jsx` / `.js`) + `pnpm`.
- **Motion Engine:** GSAP with ScrollTrigger (`ultra` tier, subtle border glow + small hover lift, no heavy WebGL).
- **Platforms & Stacks Supported for Agency Clients:**
  - *CMS & No-Code:* WordPress (custom themes, plugins, Gutenberg, ACF), Webflow, Wix
  - *Custom Web & Backend:* Next.js, React.js, MERN stack, Node.js / Express, PHP
  - *Mobile:* React Native (cross-platform iOS & Android)
- **Supported Production Cloud Setups:** "We set up production on Vercel, AWS, DigitalOcean or your preferred cloud provider." Configured on agency's or client's own cloud accounts.
- **Icons & Graphics:** Lucide React icons + bespoke inline SVG schematics.
- **CMS Mode:** `cms` (NWW CMS Headless API for dynamic `blog` publishing and `policies` legal updates; services and samples remain static in code).
- **Client Review Deployments:**
  - *Stage 2 Variations:* Public GitHub Pages review hub (`nextwebworks-website-v1`, `-v2`, `-v3`).
  - *Next.js Stages:* Vercel project deployment (`nextwebworks-website`).
- **Domain & Canonical Rules:** Strict HTTPS enforcement, 301 redirect `www.nextwebworks.in` to apex `https://nextwebworks.in`, canonical tag `https://nextwebworks.in`, `<html lang="en-IN">`. Previews protected via Vercel Authentication / password protection with `X-Robots-Tag: noindex, nofollow`.
