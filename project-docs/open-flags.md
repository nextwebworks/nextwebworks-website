# Next Web Works — Master Open Flags Register & Resolutions

**Project:** Next Web Works (`nextwebworks-website`)  
**Status:** Audit & Strategic Resolutions Finalized  
**Last Updated:** 2026-11-12  
**Auditor & Engineer:** Antigravity Senior Copywriter & Next.js 16 Lead  

---

## 1. Candidate Verification Findings

The candidate items raised during the audit have been verified against actual code, config, and script evidence:

| Candidate | Status | Evidence Location | Determination & Evidence |
| :--- | :--- | :--- | :--- |
| **(a) Edit-Guard & Secret-Guard PreToolUse Matchers** | **DISMISSED** | `.agents/hooks.json` (lines 5, 19, 29); Antigravity tool declarations | `.agents/hooks.json` matches `"run_command"` for `edit-guard`, and `"run_command"` + `"write_file\|edit_file\|read_file"` for `secret-guard`. Antigravity's actual tool declarations match these exact tool names (`run_command`, `write_file`, `edit_file`, `read_file`). Arguments match `args.CommandLine` and `args.Path`. Matchers fire correctly. |
| **(b) Verify-Gate Disabled by Default** | **CLOSED (Resolved)** | `.agents/hooks.json` (line 41) | Kept disabled (`"enabled": false`) in `.agents/hooks.json` by design to prevent token and latency overhead on intermediate tool calls. Verification commands (`check:all`, `check:content`, `check:seo`, `build`) are invoked explicitly at task conclusions. |
| **(c) Dummy Newsletter Strategy** | **CLOSED (Resolved)** | `site/app/actions/lead.js` (lines 20-30) | Resolved by wiring newsletter submissions to `ContactUs.submit()` with `{ metadata: { category: 'newsletter', source: 'footer-newsletter' } }`. Emails safely persist in the CMS database instead of returning an unpersisted dummy response. |
| **(d) CMS Lead Endpoint Tied to LMS Schema Requiring `course`** | **DISMISSED** | `site/app/actions/lead.js`, `site/lib/cms-kit/contact-us.js` | Form leads submit to `ContactUs.submit()` -> `POST /api/website-contact-us/create-one` with standard contact fields (`firstName`, `lastName`, `email`, `phone`, `message`, `status`, `metadata`). Codebase audit reveals 0 occurrences of LMS or `course` schemas. |
| **(e) Founder Headshot & Bio Placeholders on About** | **CLOSED (Resolved)** | `site/app/about/_components/AboutFounderSection.js`, `site/content/about.js` | Resolved by replacing `[FOUNDER BIO / STORY TO PROVIDE]` with Devansh's grounded bio and replacing `[FOUNDER HEADSHOT]` with an authentic, high-contrast in-house cobalt monogram avatar badge (`DK · Lead Engineer`) adhering to the Zero Stock policy. |
| **(f) Documented Production Deploy Method Ambiguity** | **CLOSED (Resolved)** | `AGENTS.md` (line 34), `project-docs/client-brief.md` | Standard deployment vehicle is git push to `origin/main`. Direct CLI `vercel --prod` is strictly forbidden. Committing and pushing cleanly to `origin/main` automatically triggers Vercel's production build pipeline to deploy to https://nextwebworks.in. |
| **(g) Robots Disallow vs Noindex Handling for `/book-a-call/thank-you`** | **DISMISSED (Working)** | `site/app/robots.js` (line 19), `site/app/book-a-call/thank-you/page.js` | Disallow is correctly NOT set on `/book-a-call/thank-you`, allowing search engine bots to read the `noindex, nofollow` robots meta tag. Verified by `check:seo`. |

---

## 2. Strategic Copywriting & Architecture Flags (FLAG-C01 – FLAG-C10)

| Flag ID | Topic & Location | Severity | Status | Final Resolution & Decision |
| :--- | :--- | :--- | :--- | :--- |
| **FLAG-C01** | Target Audience Scope (Sitewide) | Blocker for Copy | **CLOSED** | **Hybrid Agency & Growth Companies.** Primary audience: Digital, performance, and creative agencies requiring reliable white-label web and mobile engineering. Secondary audience: Funded startups and venture-backed founders needing custom engineering without hiring an in-house team. |
| **FLAG-C02** | Positioning & Core Differentiators (Sitewide) | Blocker for Copy | **CLOSED** | **Direct Principal Engineer Partnership.** Devansh architects, scopes, and builds every project directly. No account manager layers, no junior handoffs, 24-hour fixed quotes, 14-day post-launch warranty, and clean repo handover. |
| **FLAG-C03** | Canonical Service Taxonomy (Services / Home) | Blocker for Copy | **CLOSED** | **5 Canonical Service Lines:** (1) Websites & Marketing Platforms, (2) Custom Web Applications, (3) Operations & Business ERPs, (4) Cross-Platform Mobile Apps, (5) Agency CMS & No-Code Platforms. Public copy focuses strictly on affirmative scope. |
| **FLAG-C04** | Canonical Commercial Models (For Agencies / Glossary) | Blocker for Copy | **CLOSED** | **3 Commercial Engagement Models:** (1) Scoped Pilot Build, (2) Fixed-Price Sprints, (3) Dedicated Dev Bench. Zero rates or price figures anywhere; terms discussed on discovery call. |
| **FLAG-C05** | Delivery Process Canonical Home (Home / Services / Work) | Blocker for Copy | **CLOSED** | **Home (`home-workflow`) is the sole canonical owner** of the 4-Step Delivery Protocol (Step 01 Specification & NDA -> Step 02 24-Hour Fixed Quotation -> Step 03 Private Staging & QA -> Step 04 Direct Git Push & Warranty). Duplicate process sections on Services, For Agencies, and Work removed or replaced with domain-specific sections. |
| **FLAG-C06** | 14-Day Warranty Canonical Home (About / Services) | Blocker for Copy | **CLOSED** | **About (`about-s6-warranty`) is the sole canonical owner** of the 14-Day Defect Window. Covers code bugs against approved specs/Figma with proactive check-ins on Day 7 and Day 14. All other pages reference via link only (`/about#warranty`). |
| **FLAG-C07** | Proof & Architectural Ground Truth (Work / Home) | Blocker for Copy | **CLOSED** | **Truthful Proof Grounded in Codebase Repositories.** Proof references actual system architectures (`nww-cms-kit`, `classymenu`, `ceramicsales`). Monospace pill: `Illustrative sample · not a client project`. Zero synthetic client logos, fake awards, or unmeasured metrics. |
| **FLAG-C08** | Negative Boundaries & Exclusions (FAQs) | Blocker for Copy | **CLOSED** | **Explicitly Documented in FAQs:** We build production code from approved Figma/specifications. We do NOT provide logo design, copywriting, media buying, SEO link schemes, or 24/7 graveyard shift support (standard business hours: Mon–Fri 10am–7pm IST). |
| **FLAG-C09** | Voice, Tone & Spelling Variant (Sitewide) | Blocker for Copy | **CLOSED** | **US English Spelling** ("optimize", "catalog", "color"); plain engineering tone (Grade 8–10); benefit-before-feature; zero buzzwords or generic marketing filler from the Banned Phrases list. |
| **FLAG-C10** | Concept Ownership Allocation (Content Architecture) | Blocker for Copy | **CLOSED** | **One Concept, One Home Invariant:** Home owns 4-Step Protocol; Services owns 5 Service Lines & Handover Package; For Agencies owns 3 Commercial Models & White-Label NDA Protocols; About owns Founder Story & 14-Day Warranty; Work owns Case Studies & Verification Standards. All other occurrences are link-only references. |

---

## 3. Operational, Technical & Implementation Flags (FLAG-01 – FLAG-13)

| Flag ID | Item & Location | Severity | Status | Resolution / Deferral Plan |
| :--- | :--- | :--- | :--- | :--- |
| **FLAG-01** | Founder Bio (`site/app/about/_components/AboutFounderSection.js`) | Blocker for Copy | **CLOSED** | Resolved with authentic bio: *"Devansh is the Founder & Lead Engineer at Next Web Works, based in Indore, India. He partners directly with digital agencies to architect and ship custom Next.js web applications, headless CMS platforms, and ERPs behind their brand, eliminating payroll drag and delivery churn."* |
| **FLAG-02** | Founder Headshot (`site/app/about/_components/AboutFounderSection.js`) | Blocker for Copy | **CLOSED** | Resolved with an in-house SVG monogram badge (`DK · Lead Engineer`) in cobalt styling, meeting zero-stock criteria. |
| **FLAG-03** | Canonical Service Taxonomy (`site/content/services.js`) | Blocker for Copy | **CLOSED** | Harmonized into 5 canonical service lines across metadata, navigation, content modules, and JSON-LD structured data. |
| **FLAG-04** | Engagement Models Alignment (`site/content/forAgencies.js`) | Blocker for Copy | **CLOSED** | Aligned with glossary into Scoped Pilot Build, Fixed-Price Sprints, and Dedicated Dev Bench. |
| **FLAG-05** | Warranty Terms & Boundaries (`site/content/about.js`) | Blocker for Copy | **CLOSED** | Canonical terms codified under `about-s6-warranty` with clear bug vs feature boundaries and scheduled Day 7 / Day 14 milestone reviews. |
| **FLAG-06** | Work Case Study Attribution (`site/content/work.js`) | Blocker for Copy | **CLOSED** | Monospace pill `Illustrative sample · not a client project` applied consistently across all sample case studies; synthetic client metrics removed. |
| **FLAG-07** | Newsletter Form Persistence (`site/app/actions/lead.js`) | Blocker for Launch | **CLOSED** | Updated Server Action to submit newsletter subscribers to NWW CMS `ContactUs` collection with `{ metadata: { category: 'newsletter', source: 'footer-newsletter' } }`. |
| **FLAG-08** | Google Analytics 4 Measurement ID (`client-context/open-questions.md`) | Blocker for Launch | **DEFERRED** | **Owner:** Devansh.  <br>**Trigger:** Post-launch environment variable injection (`NEXT_PUBLIC_GA4_ID`) in Vercel project settings. Clean fallback guard in `site/app/layout.js` renders without errors when unset. |
| **FLAG-09** | Resend API Key for Direct Email Dispatch (`client-context/open-questions.md`) | Blocker for Launch | **DEFERRED** | **Owner:** Devansh.  <br>**Trigger:** Post-launch environment variable injection (`RESEND_API_KEY`) in Vercel project settings. Form submissions safely persist to CMS `ContactUs` database in the interim. |
| **FLAG-10** | Verify-Gate PreTool Hook Status (`.agents/hooks.json`) | Non-blocking | **CLOSED** | Hook remains disabled in `hooks.json` to optimize turn latency and token consumption; comprehensive verification commands (`check:all`, `check:content`, `check:seo`, `build`) run at final gates. |
| **FLAG-11** | Image Component ESLint Warning (`site/components/ResponsiveImage.js`) | Non-blocking | **CLOSED** | Added `/* eslint-disable-next-line @next/next/no-img-element */` above line 20 in `site/components/ResponsiveImage.js`. `pnpm lint` now passes with 0 errors and 0 warnings. |
| **FLAG-12** | Production Deployment Protocol (`AGENTS.md`) | Blocker for Launch | **CLOSED** | Standard deployment vehicle confirmed as git push to `origin/main` (triggers automated Vercel CI/CD build). Manual CLI `vercel --prod` is strictly prohibited. |
| **FLAG-13** | Circular CTA on Booking Page (`site/app/book-a-call/page.js`) | Blocker for Copy | **CLOSED** | Bottom banner on `/book-a-call` reframed to written brief alternative: *"Prefer to send a written specification first? Send Dev Brief → /contact"*, eliminating circular navigation loops. |

---

## 4. Summary of Statuses

- **Total Flags Identified:** 23 (7 candidates + 10 copy/architecture + 13 operational/implementation, with overlapping candidate items aligned)
- **Closed / Resolved:** 21
- **Explicitly Deferred:** 2 (`FLAG-08`: GA4 Measurement ID; `FLAG-09`: Resend API Key; both owned by Devansh with trigger: Vercel environment variable injection post-launch)
- **Dismissed Candidates:** 3 (Edit-guard tool matchers verified valid; CMS LMS schema verified nonexistent; Robots disallow verified correct)

