# Next Web Works Architecture

## 1. System Overview
Next Web Works is a high-performance marketing agency engineering consultancy platform built on Next.js 16 (App Router) and Tailwind CSS v4. It features zero stock photography, strict zero rate disclosures, class-based headless CMS integration, and an `ultra` motion tier with desktop smooth-scrolling synchronized to the GSAP ticker.

## 2. Directory Layout & Module Responsibilities
- **`site/`**: Next.js 16 Production Web Application.
  - **`app/`**: App Router page routes, metadata declarations, dynamic sitemap (`sitemap.js`), robots rules (`robots.js`), and server-side actions (`actions/lead.js`).
  - **`app/_components/`**: Modular section components adhering to the `// section: <id>` and `data-section="<id>"` contract (<= 250 lines).
  - **`components/`**: Reusable shared UI elements (`Nav.js`, `Footer.js`, `WhatsAppButton.js`, `PreviewBanner.js`).
  - **`components/motion/`**: `SmoothScrollProvider.js` integrating Lenis and GSAP ticker sync for desktop while preserving mobile battery life.
  - **`content/`**: Decoupled static page copy modules (`home.js`, `shared/nav.js`, `shared/footer.js`).
  - **`lib/cms-kit/`**: Direct class-based client layer for NWW CMS (`Blog`, `ContactUs`, `Policy`, `SEOHelper`).
  - **`lib/seo/`**: Modular technical SEO subsystem (`metadata/`, `jsonld/`, `config.js`) providing length-checked metadata builders and single linked `@graph` JSON-LD compiler with stable `@id` anchors.
  - **`public/assets/`**: In-house optimized vector graphics and asset manifest.
  - **`scripts/`**: Automated compliance auditors (`check-structure.mjs`, `check-assets.mjs`, `check-content.mjs`, `check-seo.mjs`).
- **`client-context/`**: Approved brand guidelines, verified answers, content blueprints, and conversion requirements.
- **`project-docs/`**: Client review gates, master pipeline router state (`router-state.md`), and stock provenance audits.

## 3. Data & State Flow
1. **Public Inquiries:** Client brief submissions in `ContactFormSection` invoke the Server Action `submitLead` (`site/app/actions/lead.js`), validate honeypots, and ingest into `ContactUs` on `https://prod-server.nextwebworks.in`.
2. **Newsletter Signups:** Footer newsletter forms validate email syntax and persist subscribers to the NWW CMS `ContactUs` collection (`category: 'newsletter'`).
3. **Dynamic Content:** Blog posts and legal policies fetch from NWW CMS during build and ISR revalidation tagged with `cms:blog` and `cms:policy`.
4. **Motion System:** `SmoothScrollProvider` mounts Lenis and synchronizes ticks via `gsap.ticker.add()` only when `(pointer: fine)` and `prefers-reduced-motion` is not active.
5. **Technical SEO & Structured Data:** Pages compile metadata and single linked Schema.org `@graph` payloads (`#organization`, `#website`, `#webpage`, `#breadcrumb`, `#service`, `#article`, `#project`, `#faq`). Dynamic social images generate via `next/og` (`opengraph-image.js`). RSS feeds syndicate via `/feed.xml`. Pre-release verification is enforced by `check:seo`.

## 4. Key Constraints
- **Zero Rates Policy:** Strictly zero rates, pricing formulas, retainers, or split percentages in JSX, metadata, or JSON-LD.
- **Line Ceilings:** `page.js` <= 80 lines; section components in `_components/` <= 250 lines.
- **RSC Boundaries:** `page.js` and root `layout.js` are pure Server Components; `'use client'` is reserved for interactive leaf components.
- **Technical SEO Hard Gate:** All pages must pass `check:seo` with title 25–65 characters, description 70–160 characters, single `h1`, non-skipping heading levels, self-referential canonicals, zero orphan sitemap routes, and zero commercial/rating disclosures in JSON-LD.
- **Content Architecture Hard Gate:** All pages must maintain minimum 5 qualifying body sections with distinct objectives registered in `project-docs/concept-map.json`, adhere to the 'One Concept, One Home' rule, enforce zero banned phrases, and pass `check:content`.

