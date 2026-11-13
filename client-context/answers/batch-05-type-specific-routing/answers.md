# Batch 05 Answers: Type-Specific Architecture (Corporate & White-Label Agency)

- **Corporate / Agency Archetype:** White-Label Engineering & Development Partner for Marketing Agencies
- **Legal Entity & Public Address:**
  - Business Name: Next Web Works (Sole Proprietorship)
  - Proprietor: `[PROPRIETOR FULL LEGAL NAME - TO PROVIDE]`
  - GSTIN: Not shown unless provided
  - Public Business Address: Indore, Madhya Pradesh, India (city-level only in footer and structured data; jurisdiction claims omitted from marketing copy)
- **Founder & Leadership Bio (`/about`):**
  - **Layout:** Minimalist split (founder headshot on left: `[FOUNDER HEADSHOT]`; bio and delivery principles on right: `[FOUNDER BIO / STORY TO PROVIDE]`). Do not invent founder stories.
  - **Title:** Founder & Lead Engineer (Devansh)
  - **Bio Text:** [FOUNDER BIO / STORY TO PROVIDE]
- **Objection Handling & Operational Friction Standards:**
  - **Client Calls & Zoom Face-Time:** "We can join client calls as your technical lead when you introduce us." Client-call attendance is already included in one-time project quotes; on retainers it is deducted from retainer hours. The agency decides how to introduce the developer.
  - **Legacy Code & Rescue Projects:** Scoped paid technical audit first (2–4 hour code review) before accepting any existing codebase. We will not rescue codebases blind. Supported stacks: WordPress (custom themes, plugins, Gutenberg, ACF), Webflow, React / Next.js, and Node.js / Express / MongoDB. Legacy apps accepted only after audit review.
  - **Rush Work & Emergency Delivery:** Rush delivery subject to developer availability on request; terms discussed directly on discovery calls (not a guaranteed SLA).
  - **Critical Blocker During Client Review:** Critical blockers typically triaged the same business day (IST: 10:00 AM – 7:00 PM); routine items within 1–2 business days.
- **Standardized Production Tech Stack & Platforms:**
  - **Primary Framework:** Next.js App Router (React Server Components, dynamic ISR).
  - **Supported Platforms:** WordPress (custom themes, plugins, Gutenberg, ACF), Webflow, Wix, React.js, MERN stack, PHP, React Native.
  - **Databases & Data Layer:** PostgreSQL with Prisma / Drizzle ORM, and MongoDB with Mongoose (code-backed in `next-web-business`, `next-web-campus`, and `next-web-website`). Supabase is supported as a client-project option.
  - **Authentication Architecture:** Tailored per project based on security requirements (Auth.js / NextAuth, Clerk, or custom JWT/session middleware with RBAC).
  - **UI Component Foundation:** Tailwind CSS + Radix-style / shadcn-style accessible modular primitives.
  - **Mobile Architecture:** Single shared React Native codebase (iOS & Android).
  - **Hosting Infrastructure & Cloud Setup:** "We set up production on Vercel, AWS, DigitalOcean or your preferred cloud provider." Staging previews hosted on the agency's own domain or cloud account, or neutral project name on Vercel preview (zero "nextwebworks" in staging URL so white-label promise is preserved).
  - **Maintenance Plan Scope:** "Includes up to 1 hour of copy edits per month, maintenance, backups, security and updates. Domain and hosting not included." No prices published.
- **Trust Elements & Operational Guarantees:**
  - **100% White-Label:** We deliver under your brand with no NWW credits or watermarks. You can introduce us as your in-house developer. Commits appear under our developer handle unless you ask us to author them under your agency's identity.
  - **Pre-Work Mutual NDA & IP Assignment:** Mutual NDA signed before reviewing project briefs or client materials; full IP assignment included in contract. (Zero downloadable templates; zero "on full payment" claims in marketing copy; terms settled in legal Terms page drafted by a lawyer).
  - **Turnaround Timing:** Quotation in 24 hours. Kickoff: same day. Small-task and critical-blocker turnaround: typical.
  - **Dedicated Communication:** Active collaboration via the agency's preferred channel (WhatsApp, Slack, or Microsoft Teams) + a weekly email status note.
  - **Defect Intake & Triage:** Standardized bug intake asking for: description, steps to reproduce, page URL, browser/device, screenshot or video, and severity.
  - **Warranty:** Badge copy: `"14-day post-launch fix window included on full builds"`. Proactive check-ins on Day 7 and Day 14. Day-14 sign-off message confirming closure with offer to discuss ongoing maintenance or retainer hours (no figures in message).
  - **Source Code & Documentation:** Full source code ownership, complete IP assignment in contract, clean README documentation, and standard `.github/workflows/ci.yml`.
  - **Contractual Non-Bypass & White-Label Guarantees:**
    - Zero NWW branding, meta credits, tags, or watermarks on any deliverables.
    - All work executed strictly under the partner agency's branding.
    - Strict non-solicitation clause guaranteeing zero direct contact with the agency's end clients (clauses go live on site/contracts only after formal legal review).
  - **Scope Change & Revision Protocol:**
    - Written change request specifying additional hours or fixed add-on cost, requiring agency founder approval before work starts.
    - Included revisions: 1 revision round on initial design/implementation; bug fixes free within 14-day fix window.
- **Commercial Contract & Billing Terms:**
  - All commercial terms and rates are call-only and omitted from the brief and the site.
  - **Retainer Billing Cycle & Terms:** "Dedicated monthly developer hours with a priority queue." Discussed directly on discovery calls.
  - **Onboarding Speed:** Kickoff: same day (following agreement, NDA, and initial deposit).
  - **Final Handover Package Checklist:**
    - Private GitHub repository ownership transferred directly to the agency's GitHub organization at final delivery.
    - Production-grade README with local setup and environment variable configuration (zero secrets stored in repo; `.env.example` placeholders only).
    - Production deployment and DNS verification on Vercel, AWS, or DigitalOcean.
    - Credentials handed over via a secure password manager.
    - Domain/account transfers where relevant.
    - Formal written IP assignment confirmation in contract.
- **Partnership Models on `/for-agencies` (Priority Order — Zero Public Rates):**
  1. **Dedicated Dev Bench / Monthly Retainer (Featured Partner Model):**
     - **Visual Treatment:** Elevated "Featured Partner Model" badge with a subtle glowing cobalt border.
     - **Description:** "Dedicated monthly developer hours with a priority queue." Direct coordination, client-call attendance deducted from retainer hours. Terms and capacity discussed on call.
     - **Day-to-Day Retainer Workflow:**
       - Dedicated communication: agency-preferred channel (WhatsApp, Slack, or Teams) + weekly email status note.
       - Task management: single shared task board (agency picks the tool — Trello, Linear, ClickUp, or Notion).
       - Alignment: weekly priority sync note or quick alignment call.
       - Turnaround: small-task turnaround: typical.
  2. **Fixed-Price Sprints & Deliverable Boundaries:** Custom scoped and quoted on your first call (zero public prices or rates). "Predictable project scoping lets you bundle development into your own service lines." Client-call attendance included in one-time project quotes:
     - **Websites:** Responsive multi-page layouts, contact form integration, on-page SEO setup, agency-branded handover. Scoped and quoted on your first call.
     - **Custom Web Apps:** Client portals, internal team dashboards, booking and workflow automation tools, and reporting dashboards. Scoped and quoted on your first call.
     - **ERPs:** Roles & permissions, automated audit trails, multi-location stock tracking with FIFO lot depletion (MongoDB atomic transaction sessions), multi-tier GST calculation engine (CGST/SGST vs IGST), workflow approvals, and offloaded vector PDF document compilation (QuestPDF microservice architecture). Grounded in `next-web-business` and `next-web-campus`. Scoped and quoted on your first call.
     - **Mobile Apps (React Native):** Single shared React Native codebase for Android and iOS, camera/file upload, push notifications, role-based checklists, and store submission support. Scoped and quoted on your first call.
     - **Platforms & Stacks Badge:** "Builds in the platform your client already uses" (WordPress, Webflow, Wix, Next.js, React.js, MERN, PHP, React Native).
  3. **Pilot Project Offer:**
     - **Visual Treatment:** High-contrast callout positioned immediately after the sprint tiers: *"Test us before committing: one scoped pilot build."*
     - **Terms:** "One small, scoped pilot build; terms discussed on the call." (e.g. single landing page, dashboard widget, or calculator component to test speed, code quality, and communication). Strictly limited to one pilot per agency. Full IP transfer upon contract completion.
- **Lead Capture & Booking Architecture:**
  - **Booking:** Cal.com embed on dedicated `/book-a-call` (`[CAL.COM LINK TO CONFIRM]`), 20-minute slots. Embedded inline directly on the page and lazy-loaded to protect Core Web Vitals. All "Book a 20-Min Call" buttons sitewide link to this page rather than opening a modal.
  - **Booking Confirmation:** Redirects upon scheduling completion to `/book-a-call/thank-you` with an onboarding checklist. Enforced with `noindex` and excluded from `sitemap.xml`.
  - **Secondary WhatsApp Communication:** Direct link `https://wa.me/917999934815?text=Hi%2C%20I%20run%20an%20agency%20and%20want%20to%20discuss%20white-label%20development.` (country code 91, digits only, prefilled inquiry text).
  - **Qualifying Form Fields:**
    1. Agency Name
    2. Team Size (1–5, 6–15, 16–30, 30+)
    3. Type of Dev Work Needed (Websites, Web Apps, ERPs, Mobile Apps, Retainer, CMS / WordPress / Webflow)
    4. Client Requests Per Month (1–2, 3–5, 6+)
    5. Project Scope (Placeholder: *"e.g. a Next.js client portal, 3 WordPress marketing sites, or dedicated monthly dev support"*)
  - **Consent Line:** Displayed under every form: *"We'll use your details only to reply to your enquiry. Privacy Policy"* (linked to `/privacy`).
  - **Data Persistence:** Submissions stored via Next.js Server Action using `nww-cms` (`WebsiteContactUs` / `Lead` model helper with server-side `CMS_TOKEN`).
  - **Notifications (Email-Only via Resend):** Internal alerts sent from `alerts@nextwebworks.in` with reply-to set to lead's own email. Subject line: `[Website Lead] <Agency Name> — <Dev Work Type>`.
  - **Autoresponder:** Automated transactional email sent from `contact@nextwebworks.in` to lead: *"We've received your enquiry. Devansh will reply within 24 hours."*
  - **Compliance & Privacy:** Clear consent line and privacy link on all forms (DPDP Act 2023 & GDPR aligned).
- **Stage 2 Review Hub & Variation Approval Terms:**
  - **Variations:** V1 (Linear deep slate `#0B0F19`), V2 (Stripe high-contrast light), V3 (Hybrid slate hero/light body). Identical copy and content structure across all three to isolate pure visual aesthetic and contrast judgment.
  - **Viewport Testing:** Desktop 1440px, Tablet 768px, Mobile 375px.
  - **Interactive States:** Functional expandable service drawers and sample tab switchers.
  - **Sign-Off Protocol:** Approver provides a written reply naming the approved variation (or "V_ with these changes") plus one consolidated change list. Capped at 2 revision rounds to prevent pipeline stall. Gate 2 closes upon explicit written confirmation.
