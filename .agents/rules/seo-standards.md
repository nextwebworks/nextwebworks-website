---
trigger: glob
globs:
  - site/app/**
  - site/lib/seo/**
  - site/content/**
description: Technical and on-page SEO standards covering metadata length bounds, linked structured data, canonicalization, heading progression, and crawler governance.
---

# Technical & On-Page SEO Standards

## 1. Title & Meta Description Invariants
- **Page Titles:** Must be unique sitewide, descriptive, and strictly between **25 and 65 characters** (including the root layout template `%s | Next Web Works`).
- **Meta Descriptions:** Must be unique sitewide, action-oriented, and strictly between **70 and 160 characters** for all indexable pages.
- **Single Brand Suffix:** Never hardcode `| Next Web Works` in page-level titles; rely exclusively on the root layout title template `%s | Next Web Works`.

## 2. Structured Data (JSON-LD) Invariants
- **Single Linked `@graph`:** Emit structured data as a unified `@graph` linking `#organization`, `#website`, `#webpage`, `#breadcrumb`, `#service`, `#article`, `#project`, and `#faq` with stable `@id` anchors.
- **Zero Rates & Prices Disclosure:** Strictly omit `Offer`, `offers`, `hasOfferCatalog`, `price`, `priceRange`, `Rating`, `reviewRating`, `AggregateRating`, and `Review` anywhere in JSON-LD.
- **XSS & Parser Safety:** Serialize structured data through `site/components/seo/Schema.js`, escaping `<` as `\u003c`.
- **FAQPage Synchronization:** Every Question and Answer declared in `FAQPage` schema must match real visible text rendered on the page.

## 3. Canonical & Crawl Control Invariants
- **Canonical URLs:** Every indexable route must declare a self-referential canonical URL matching `https://nextwebworks.in` plus route path with zero trailing slash (except root apex).
- **Robots Directives:** Indexable pages emit `index, follow`. Conversion confirmation (`/book-a-call/thank-you`) and 404 (`/_not-found`) pages must emit `noindex`.
- **Crawlability for Noindex:** Never disallow `noindex` pages (such as `/book-a-call/thank-you`) in `robots.txt`, so search engines can crawl the page and read the `noindex` directive.
- **Sitemap Integrity:** Every indexable route must be declared in `/sitemap.xml` with realistic `lastModified` timestamps. Never include `noindex` routes in `sitemap.xml`.

## 4. On-Page Structure & Accessibility Invariants
- **Single H1 Rule:** Exactly one `<h1>` element per page located in the hero section.
- **Heading Hierarchy:** Sequential heading progression without skipping levels (`h1` -> `h2` -> `h3`).
- **Image Accessibility:** Every `<img>` must carry an `alt` attribute; purely decorative images declare `alt=""`.
- **Internal Linking:** Every indexable page must have at least one internal link pointing to it (zero orphan pages). Anchor text must be descriptive (never generic "click here" or "read more" without an accessible name).

