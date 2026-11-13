# Changelog

All notable changes to the Next Web Works platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.11.0] - 2026-11-13

### Changed
- **Repository Migration & Fresh Publishing**:
  - Migrated repository to the `nextwebworks` GitHub organization/account.
  - Exported verified safety backup bundle (`nextwebworks-website-backup-history.bundle`) outside workspace.
  - Purged all legacy Git histories, `.github/` workflows, and old owner references across the codebase.
  - Updated SEO configurations and metadata to point to `https://github.com/nextwebworks`.
  - Harmonized root `.gitignore` to strictly ignore `.vercel/` and all `.env*` secret files.
  - Configured Git-connected Vercel production deployment under `nextwebworks-projects` with custom domain `nextwebworks.in`.

## [0.10.0] - 2026-11-12

### Added
- **Single-Objective Content Architecture & Hard Gate Suite**:
  - Enforced "One Concept, One Home", "One Objective Per Section", "One Terminology", and "One Primary CTA Per Page (`/book-a-call`)" invariants sitewide.
  - Authored comprehensive Content Architecture specification (`project-docs/content-architecture.md`) and machine-readable concept registry (`project-docs/concept-map.json`).
  - Added `.agents/rules/copy-standards.md` establishing non-negotiable copy and structural invariants for content and component development.
  - Extended `site/scripts/check-content.mjs` with hard gates auditing registered data-section objectives, semantic non-owner concept leaks (>= 3 keyword threshold), prohibited terminology aliases, banned marketing filler phrases, and multiple/circular primary CTAs.
  - Added `project-docs/open-flags.md` recording all 23 project flags, resolving 21 items and explicitly deferring 2 post-launch items (`NEXT_PUBLIC_GA4_ID`, `RESEND_API_KEY`).
  - Created new substantive section components with distinct objectives:
    - `ServicesIntegrationStandardsSection` (`/services`): Production hygiene and automated gate standards.
    - `AgencySlaSection`, `AgencyRiskReversalSection` (`/for-agencies`): Fixed-price guarantee and agency SLAs.
    - `WorkStandardsSection`, `WorkVerificationSection`, `WorkCodeSovereigntySection` (`/work`): Engineering standards, verification evidence, and code ownership.
    - `AboutOperationsSection` (`/about`): Direct engineering operational workflow and communication cadence.
    - `BookAgendaSection`, `BookPreparationSection`, `BookFallbackChannelsSection`, `BookWrittenAlternativeSection` (`/book-a-call`): Scoping agenda, preparation checklist, fallback channels, and written brief routing.
    - `ContactExpectationsSection`, `ContactChannelsSection` (`/contact`): Inquiry expectations and communication routing.
  - Authored authentic in-house cobalt monogram avatar badge (`DK · Lead Engineer`) for `AboutFounderSection` adhering 100% to the Zero Stock policy.

### Changed
- **Eliminated Cross-Page Content Repetition**:
  - Completely rewrote copy across all static pages (`/`, `/services`, `/for-agencies`, `/work`, `/about`, `/book-a-call`, `/contact`, `/blog`) and dynamic templates (`/services/[slug]`, `/work/[slug]`, `/blog/[slug]`) from scratch.
  - Centralized 4-Step Delivery Protocol exclusively on Home (`home-workflow`).
  - Centralized 14-Day Defect Warranty exclusively on About (`about-s6-warranty`).
  - Centralized 3 Commercial Models on For Agencies (`partnership-models`).
  - Harmonized 5 canonical service lines across metadata, navigation, content modules, and JSON-LD structured data.
  - Replaced circular CTA banner on `/book-a-call` with a written brief alternative routing to `/contact`.
  - Updated Server Action `site/app/actions/lead.js` to persist newsletter subscriptions directly into the NWW CMS `ContactUs` database.
  - Added entity decoding in `site/scripts/check-seo.mjs` for visible text FAQ extraction.

## [0.9.0] - 2026-11-12

### Added
- **Enforced Minimum 5 Qualifying Body Sections Rule**:
  - Updated `.agents/rules/min-sections-per-page.md` and `site/scripts/check-structure.mjs` to mandate $\ge 5$ substantive body sections per page strictly *excluding* `Nav`, `Footer`, `Hero`, `CTA`, `FAQ`, and `ContactForm`.
  - Added new modular substantive body sections across all non-exempt pages:
    - Home (`/`): `HomeTechStackSection` (deep dive into Next.js, WordPress, Webflow, and React Native execution pillars).
    - About (`/about`): `AboutMissionSection`, `AboutPhilosophySection`, `AboutConfidentialitySection`, `AboutWarrantySection`.
    - Services (`/services`): `ServicesDeliverablesSection`, `ServicesComparisonSection`.
    - Service Detail (`/services/[slug]`): `ServiceDetailWorkflowSection`, `ServiceDetailDeliverablesSection` with 100% unique per-service data mapping.
    - For Agencies (`/for-agencies`): `AgencyHeroSection`, `AgencyMarginsSection`, `AgencyConfidentialitySection`, `AgencyOnboardingSection`.
    - Work (`/work`): `WorkStackDiversitySection`, `WorkConfidentialityNoticeSection`.
    - Work Detail (`/work/[slug]`): `WorkDetailArchitectureSection`, `WorkDetailDeliverablesSection` with unique per-work data mapping.
    - Blog (`/blog`): `BlogNewsletterSection`, `BlogEditorialStandardsSection`.
    - Blog Post (`/blog/[slug]`): `BlogArticleKeyTakeawaysSection`, `BlogArticleDiscussionSection` with unique per-post data mapping.
    - Book a Call (`/book-a-call`): `BookGuaranteeSection`, `BookConfidentialitySection`.
    - Contact (`/contact`): `ContactBriefChecklistSection`, `ContactSecuritySection`, `ContactSlaSection`.

### Changed
- **Modernized Badge & Step Numeral Typography**:
  - Replaced AI-sloopy `"01 // "` patterns sitewide with sleek, modern, professional agency design (`Step 01 · Specification Intake`, `01 · Confidential`, clean monospace badges with subtle dot separators).
  - Updated allowlist and test fixtures across `.agents/rules/unique-content-per-page.md`, `site/scripts/check-content.mjs`, and OpenGraph templates.

## [0.8.0] - 2026-11-11

### Added
- **Full Technical & On-Page SEO Engine (`site/lib/seo/`)**:
  - Modular SEO architecture (`metadata/`, `jsonld/`, `config.js`) supporting safe metadata generation, OpenGraph/Twitter parity, and single linked `@graph` JSON-LD structured data.
  - Linked Schema.org graph builder linking `#organization` (ProfessionalService), `#website`, `#webpage` (WebPage / AboutPage / ContactPage / CollectionPage / DigitalDocument), `#breadcrumb` (BreadcrumbList), `#service` (Service), `#article` (BlogPosting), `#project` (CreativeWork), and `#faq` (FAQPage).
  - Strict structured-data sanitizer stripping all commercial prices, rates, offers, and review scores to uphold the Zero Rates Policy.
  - Safe RSC serialization via `<Schema />` component escaping literal `<` to `\u003c` to neutralize XSS vulnerabilities.
- **Dynamic Branded Open Graph Images (`next/og`)**:
  - Implemented 1200x630 dynamic social sharing card generators at root (`site/app/opengraph-image.js`) and dynamic route segments: `/blog/[slug]`, `/services/[slug]`, and `/work/[slug]`.
  - Styled with authentic in-house design tokens, dark slate themes, and SVG badge accents under the strict Zero Stock policy.
- **Syndication RSS Feed (`site/app/feed.xml/route.js`)**:
  - Implemented static-cached RSS 2.0 / Atom feed syndicating published blog posts and platform engineering playbooks.
- **Post-Build Hard Gate Auditor (`site/scripts/check-seo.mjs` / `pnpm check:seo`)**:
  - Automated compliance auditor validating prerendered HTML in `.next/server/app/`.
  - Verifies title length (25–65), description length (70–160), unique content across all routes, self-referential canonicals, single `h1`, heading progression, image alt attributes, non-generic anchor text, JSON-LD validity, FAQPage visible text synchronization, sitemap route completeness, orphan route detection, and preview/production robots directives.
- **Standards & Rule Architecture (`.agents/rules/seo-standards.md`)**:
  - Codified technical SEO standards across `site/app/**`, `site/lib/seo/**`, and `site/content/**`.
  - Integrated `check:seo` into `site/package.json`, `.agents/skills/verify/SKILL.md`, `release-checklist.md`, and `AGENTS.md`.

### Changed
- **Unified Title & Description Across Every Route**:
  - Synchronized page titles and descriptions to eliminate duplication, respect length bounds, and eliminate SERP truncation across all 24 route endpoints.
  - Refined `/book-a-call/thank-you` to declare explicit metadata and canonical tags while enforcing `noindex, nofollow`.
  - Updated `404` (`site/app/not-found.js`) to export explicit `noindex, follow` metadata and provide descriptive internal links back to key routes.
- **Robots & Crawl Control Synchronization**:
  - Removed `/book-a-call/thank-you` from robots.txt `disallow` array to ensure search crawlers can access the page and read its `noindex` tag.
  - Updated `sitemap.js` to emit real ISO `lastModified` dates from CMS records and include `/feed.xml`.

## [0.7.0] - 2026-11-11

### Added
- **Full Markdown & Mermaid Diagram Architecture for Blog (`site/lib/markdown/`)**: Implemented a server-side Markdown compilation and rendering pipeline based on `unified`, `remark-gfm`, `remark-rehype`, `rehype-slug`, `rehype-autolink-headings`, `rehype-sanitize`, and `shiki`.
  - CommonMark + GitHub-Flavored Markdown support: responsive tables, task lists, strikethrough, autolinks, footnotes, blockquotes, inline code, kbd, figures, and images.
  - GitHub-style alert callouts (`> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]`) with Lucide icons mapped to brand color tokens.
  - Server-side syntax highlighting via Shiki with dual themes (`github-light` / `github-dark-default`), language indicators, and interactive `<CopyButton />` leaf.
  - Lazy Mermaid diagram rendering via `<MermaidDiagram />`: on-demand dynamic import when blocks enter viewport, strict security mode, real-time light/dark theme synchronization, responsive horizontal scrolling, and accessible server-side fallback.
  - Sticky Table of Contents (`<TableOfContents />`): active heading highlight via `IntersectionObserver`, collapsible mobile drawer, and smooth anchor scrolling cooperating with Lenis.
  - Ultra-tier reading progress bar (`<MotionReadingProgress />`) and subtle reveals for non-text blocks (`<MotionRevealBlock />`).
  - Shared helpers for plain-text extraction, word-boundary excerpt generation, reading time calculation, and SEO metadata / Schema.org `BlogPosting` JSON-LD description.
- **Dual Content Format Support**: Preserved 100% backward compatibility for legacy sanitized HTML blog posts alongside Markdown posts with conservative format detection in `site/lib/markdown/format.js`.

## [0.6.0] - 2026-11-11

### Added
- **Ultra Motion System & GSAP Primitives (`site/components/motion/`)**: Built a reusable motion system powered by GSAP 3.15.1, `@gsap/react` 2.1.2, and Lenis 1.3.27. Includes reusable client primitives:
  - `MotionFadeIn`: Viewport scroll-triggered fade and slide with `@gsap/react` scoping and matchMedia fallback.
  - `MotionStagger`: Coordinated staggered entrance for card grids, timelines, and feature lists.
  - `MotionTilt`: 60fps cursor tilt card interaction using `gsap.quickTo()` with 3D transform perspectives.
  - `MotionMagnetic`: Physics-based cursor spring magnet for high-intent primary CTA buttons.
  - `MotionNumberTicker`: Numerical counter transition for metrics and statistics.
  - `MotionPathDraw`: SVG stroke draw reveal for schematics and architectural lines.
- **Shared Motion Tokens (`site/lib/motion.js`)**: Codified standardized duration tokens (`instant`, `fast`, `base`, `smooth`, `epic`), GSAP easing curves (`power2.out`, `power3.out`, `back.out(1.4)`, `power2.inOut`), stagger delays, and the `shouldAnimate()` guard enforcing system `prefers-reduced-motion` and touch hardware awareness.

### Changed
- **Full-Site Motion & Design Polish Across All Pages & Sections**: Upgraded every page and every section (Home, Services list & details, Work list & details, For Agencies, About, Blog list & articles, Contact, Book a Call, Thank You, 404, and Error) with purposeful entrance choreography, magnetic actions, and 3D card tilts.
- **Layout & Rhythm Diversity**: Ensured no adjacent sections share identical layout and entrance choreography, eliminating uniform fade-up patterns and generic templates.
- **Strict Accessibility & Performance Guardrails**: Zero layout shift, full SSR/prerender content preservation, automatic event cleanup via `useGSAP` contexts, touch fallbacks, and zero new runtime dependencies (static chunk size reduced to ~799 KB).

## [0.5.2] - 2026-11-11

### Fixed
- **Duplicate Brand Name in Page Titles**: Removed redundant `| Next Web Works` suffixes across all App Router `page.js` routes (`/about`, `/blog`, `/blog/[slug]`, `/book-a-call`, `/book-a-call/thank-you`, `/contact`, `/for-agencies`, `/privacy`, `/terms`, `/services`, `/services/[slug]`, `/work`, `/work/[slug]`), allowing the root `template: '%s | Next Web Works'` in `site/app/layout.js` to append the brand suffix cleanly exactly once without duplication.

## [0.5.1] - 2026-11-11

### Fixed
- **Markdown Table Support for Blog Articles**: Added semantic markdown table parsing to `cleanArticleHtml` in `site/lib/blog-utils.js`, automatically converting both paragraph-wrapped (`<p>| ... |</p>`) and multiline markdown tables into responsive, theme-styled HTML `<table>` elements with horizontal scrolling, subtle borders, and monospace headers.

## [0.5.0] - 2026-11-11

### Added
- **Modular SVG Generator System (`site/lib/svg/`)**: Introduced a modular, theme-aware, deterministic SVG generator library composed of primitives (`defs`, `patterns`, `frames`, `nodes`, `blocks`, `badges`), Tailwind-derived tokens, real CMS category/work scenes, a seeded PRNG (Mulberry32) for build-stable rendering, and a central registry `<SvgScene />`.
- **Services Page Redesign to Reference Standards**: Redesigned `/services` and `/services/[slug]` to match reference benchmarks (`linear.app`, `stripe.com`, `posthog.com`) with 12-column responsive split grid, deliberate section anatomy (eyebrow, heading, support line, action, proof), dedicated capabilities bento (`ServicesCapabilitiesSection.js`), 4-stage connected delivery pipeline (`ServicesProcessSection.js`), and inline SVG architecture schematics.
- **Work Page Redesign to Reference Standards**: Redesigned `/work` and `/work/[slug]` with 12-column split case study layouts, dedicated deliverable showcase grid (`WorkShowcaseGridSection.js`), 4-stage white-label staging & transfer pipeline (`WorkProcessSection.js`), and bespoke deliverable SVG schematics.

### Changed
- **Removed SVG Size Limit**: Completely removed all SVG byte budgets ($\le 5.0\text{ KB} / 15\text{ KB}$) across `check-assets.mjs`, `AGENTS.md`, `release-checklist.md`, `zero-rates-and-confidentiality.md`, `verify/SKILL.md`, and documentation while preserving the strict zero-stock policy (`stock_ceiling: 0`) and asset manifest integrity.
- **Re-Wired Blog Components to Modular SVG System**: Replaced legacy monolithic cover code in `site/lib/blog-utils.js` with `<SvgScene />` across `BlogFeaturedSection`, `BlogGridSection`, and `BlogArticleHeaderSection`.
- **Decoupled Blog Article Author & CTA Banners**: Parameterized `BlogArticleAuthorSection` and `FinalCTABanner` per slug with dedicated copy in `site/content/blog.js`, ensuring 100% content uniqueness and 0 duplicate text violations.

## [0.4.0] - 2026-11-11

### Added
- **Hard Content-Uniqueness Rule**: Added `.agents/rules/unique-content-per-page.md` (`trigger: always_on`) strictly prohibiting content block duplicates ($\ge 4$ words or $\ge 25$ chars), exact section repeats, thin FAQs ($< 5$ Q&A or answers $< 25$ words), and near-duplicate answers sitewide. Added invariant directives to `AGENTS.md` and `site/app/AGENTS.md`.
- **Lightweight Pre-Render HTML Content Auditor (`check:content`)**: Created `site/scripts/check-content.mjs` and wired `"check:content"` into `package.json`, `.agents/skills/verify/SKILL.md`, `release-checklist.md`, and `AGENTS.md`. Parses prerendered HTML output under `.next/server/app/**/*.html`, evaluating Jaccard shingle similarity, section hashes, FAQ item depth, and an explicit approved allowlist.
- **Dedicated Decoupled Content Modules**: Created `site/content/contact.js`, `site/content/bookACall.js`, and `site/content/blog.js`, and expanded `site/content/home.js`, `site/content/about.js`, `site/content/forAgencies.js`, `site/content/services.js`, and `site/content/work.js`. Every page features distinct hero, CTA, contact form, and FAQ content.
- **Dynamic Blog Related Reading System**: Enhanced `BlogArticleRelatedSection.js` to accept `currentSlug` and render distinct, article-specific playbooks from `blogContent.relatedArticlesBySlug` with zero repetitive text across blog posts.

### Changed
- **FAQ Component Accessibility & Prerendering**: Updated `FAQSection.js` accordion body to toggle `block` vs `hidden` classes instead of unmounting so all questions and answers render completely into SSR HTML for search engine indexing and automated content audits.
- **Dynamic CTA & Contact Form Intros**: Parameterized `FinalCTABanner.js` (`content.badge`, `content.footnote`) and `ContactFormSection.js` (`content.eyebrow`, `content.leadIn`, `content.description`) to eliminate sitewide boilerplate cloning.
- **Route-Specific Capability & Showcase Grids**: Decoupled `/services` and `/work` card grids from Homepage summaries (`servicesContent.drawers`, `servicesContent.stackMatrix`, `workContent.showcase`), providing deep technical architecture specifications.

## [0.3.2] - 2026-11-11

### Changed
- **Calendly 30-Min Call Alignment**: Standardized all discovery call copy across header, hero, agenda, blog articles, and footer from 20-min to "Book a 30-Min Call" to match the active Calendly event.
- **Sole Proprietorship Legal Declarations**: Codified Devansh Khetwani as the Sole Proprietor across footer and legal policies, resolving the `[PROPRIETOR FULL LEGAL NAME - TO PROVIDE]` placeholder.
- **Rolling Discovery Queue Batch 16**: Advanced open questions queue to Batch 16, codifying all Batch 15 architecture and component decisions.

## [0.3.1] - 2026-11-11

### Fixed
- **Privacy Policy & Terms of Service HTML Rendering**: Fixed raw HTML tags displaying on `/privacy` and `/terms` by parsing CMS policy body through `cleanArticleHtml` sanitizer and rendering sanitized semantic HTML via `dangerouslySetInnerHTML`.
- **Home Hero Services Link Navigation**: Wired `#services` section ID to `ServicesSection.js` with `scroll-mt-16` offset, added canonical anchor IDs (`#work`, `#faq`, `#contact`), and added smooth scrolling with graceful router fallback in `HeroSection.js`.
- **Link Integrity**: Validated all 72 internal and external links sitewide to ensure zero dead or broken links.

## [0.3.0] - 2026-11-11

### Added
- **Single Authoritative Hero Sections**: Resolved duplicate hero sections on `/services` and `/work` by implementing dedicated route hero components (`ServicesHeroSection.js`, `WorkHeroSection.js`) and adding a `hideHeader` prop to `ServicesSection` and `WorkShowcaseSection`.
- **Dynamic Service Detail Routes (`/services/[slug]`)**: Created dynamic App Router detail pages backed by NWW CMS `Service` model with graceful static fallback for all 5 technical capability drawers. Included unique dynamic metadata, breadcrumbs, Service JSON-LD (zero rates), and sitemap generator.
- **Dynamic Work Detail Routes (`/work/[slug]`)**: Created dynamic App Router deliverable detail pages backed by NWW CMS `Portfolio` model with strict white-label confidentiality enforcement (masking client identities unless marked `clientPublishable: true`), CreativeWork JSON-LD, and sitemap generator.
- **Minimum 5 Sections per Page Rule**: Added `.agents/rules/min-sections-per-page.md` and updated `AGENTS.md` and `site/app/AGENTS.md`. Extended `site/scripts/check-structure.mjs` to strictly enforce that every non-exempt public route composes $\ge 5$ modular section components following the `// section: <id>` and `data-section="<id>"` contract.
- **Modular Page Decompositions**: Upgraded `/services` (6 sections), `/work` (6 sections), `/blog` (5 sections), `/blog/[slug]` (5 sections), `/contact` (5 sections), `/book-a-call` (5 sections), `/services/[slug]` (7 sections), and `/work/[slug]` (7 sections). Route-scoped components are cleanly organized into subdirectories (`_components/services/`, `_components/work/`, `_components/blog/`, `_components/contact/`, `_components/book-a-call/`) ensuring no folder exceeds 10 files.
- **Redesigned 16:9 Theme-Aware Blog Covers**: Re-engineered deterministic vector SVG covers ($\le 5.0$ KB) in `site/lib/blog-utils.js` across 4 category motifs (`agency-growth`, `project-scoping`, `architecture`, `general`) with theme-aware classes for crisp rendering in both light and dark modes.
- **Clean Plain-Text Excerpt Deduplication**: Upgraded `stripHtml` in `site/lib/blog-utils.js` to strip leading heading tags, discard duplicate post title text at excerpt starts, decode HTML entities, and trim cleanly on word boundaries with an ellipsis only when truncated.

### Changed
- Bumped application version to `0.3.0`.

## [0.2.0] - 2026-11-11

### Added
- **Theme Switcher**: Complete light mode (default on initial visit) and dark mode implementation via Tailwind CSS v4 `@custom-variant dark`. Persisted in `localStorage` with zero-FOUT `<head>` blocking script and accessible toggle in desktop `Nav` and mobile drawer.
- **Brand SVG Logo & Mark**: Hand-crafted vector SVG wordmark (`site/public/assets/logo.svg`) and compact icon mark (`site/public/assets/logo-mark.svg`) featuring the distinctive magenta accent and crisp geometric typography across 24px, 40px, and 200px sizes. Registered in `public/assets/manifest.json`.
- **Engineering Capabilities Bento Grid**: Rebuilt the 5 capabilities cards into an asymmetrical Bento grid at the `ultra` motion tier (GSAP staggered entrance, hover micro-lift, prefers-reduced-motion check, and mobile touch fallback).
- **Independent Closed Specs**: Initialized all 5 capabilities specs as closed by default on load, with independent toggle controls and full keyboard accessibility.
- **Flagship Products Showcase**: Updated Deliverable Showcase to feature in-house products (**NWW Headless CMS Kit**, **ClassyMenu**, **CeramicSales**) under white-label confidentiality.
- **Per-Page Decoupled Content**: Created decoupled content modules in `site/content/` (`services.js`, `forAgencies.js`, `work.js`, `about.js`) providing unique contextual FAQs and custom Final CTA banners per route.
- **Synchronized Structured Data**: Added route-specific `FAQPage` JSON-LD schemas matching visible FAQ content on `/`, `/services`, `/for-agencies`, `/work`, and `/about` with zero rates.
- **About Page Expansion**: Expanded `/about` with Founder positioning, 4 Core Engineering Principles, 4 "What We Do NOT Do" boundaries, 14-day warranty details, and Indore engineering operations.
- **Blog Plain-Text Excerpts & Sanitization**: Implemented safe regex-based HTML stripping and word-boundary trimming for blog list cards, allowlist HTML sanitizer for detail pages with duplicate leading `<h1>` removal, and deterministic in-house SVG covers ($\le 5.0$ KB).

### Changed
- Refactored all sections, inputs, buttons, and navigation links to paired light/dark classes for high contrast and readability.
- Bumped application version to `0.2.0`.

