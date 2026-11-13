# Page List & Master Build Tracker

**Project Name:** Next Web Works  
**Technical Slug:** `nextwebworks-website`  
**Brand Display Name:** Next Web Works  
**Pipeline Gate:** Gate 3 (Page List & Route Architecture)  
**Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## Core Pages

- [ ] Home
  - Slug: home
  - Route: /
  - Content owner: agency (authentic copy from client brief §1-8)
  - Purpose: Primary conversion hub communicating core value proposition (say yes to every client dev request without hiring) and guiding agency founders to book a discovery call.
  - Key sections: Sticky Header with Book a Call CTA, Hero with Eyebrow Badge & Visual Node Schematic, Pain Points (Freelancer Ghost, Unbillable Salary, Costly Rewrite), 4-Step White-Label Workflow, 2x2 Services Grid with Specification Drawers, Work Samples Showcase, 7 Core FAQs Accordion, Final CTA Banner, Embedded Contact Form, Global Footer with Newsletter & Direct WhatsApp.
  - Primary CTA: Book a 20-Min Call -> /book-a-call
  - Secondary CTA: Explore Services & How We Work ↓ -> #services
  - Source signal: Client brief §1-8
  - Type: Static
  - Template group: none

- [ ] Services
  - Slug: services
  - Route: /services
  - Content owner: agency
  - Purpose: Comprehensive technical specification of all 5 capability domains and platform ecosystems supported.
  - Key sections: Header, Hero, Platform & Stack Tags Banner ("Builds in the platform your client already uses"), 5 Expandable Specification Drawers (#websites, #web-apps, #erps, #mobile-apps, #cms-platforms), Technical FAQs, Final CTA Banner, Contact Form, Footer.
  - Primary CTA: Book a 20-Min Call -> /book-a-call
  - Secondary CTA: Discuss this build -> /book-a-call
  - Source signal: Batch 03 & Batch 14 decisions
  - Type: Static
  - Template group: none

- [ ] For Agencies
  - Slug: for-agencies
  - Route: /for-agencies
  - Content owner: agency
  - Purpose: Partnership models (Dedicated Dev Bench, Fixed-Price Sprints, Scoped Pilot Build), white-label non-solicitation guarantees, agency margins, and delivery SLAs.
  - Key sections: Header, Hero, Partnership Models 3-Column Comparison Matrix, Agency Margin Callout, Security & White-Label Lock Reassurance, 7 Core FAQs, Final CTA Banner, Contact Form, Footer.
  - Primary CTA: Book a 20-Min Call -> /book-a-call
  - Source signal: Batch 03, Batch 08 & Batch 14 decisions
  - Type: Static
  - Template group: none

- [ ] Work
  - Slug: work
  - Route: /work
  - Content owner: agency
  - Purpose: Architectural proof of technical craft via 3 interactive illustrative samples with technical specification deep-dives.
  - Key sections: Header, Hero, Interactive Tab Switcher (Sample 1: Client Reporting Dashboard, Sample 2: Multi-Tier Operations ERP, Sample 3: Field-Inspection Mobile App), Architectural Schematics, Technical Handover Breakdown, Final CTA Banner, Contact Form, Footer.
  - Primary CTA: Discuss a build like this -> /book-a-call
  - Source signal: Batch 03 illustrative samples (not client projects)
  - Type: Static
  - Template group: none

- [ ] About
  - Slug: about
  - Route: /about
  - Content owner: agency
  - Purpose: Engineering authority, founder background (Devansh, Founder & Lead Engineer), delivery standards, 14-day defect warranty, pre-work mutual NDA, and Indore engineering operations.
  - Key sections: Header, Hero, Minimalist Split Layout (Founder Headshot placeholder on left, bio & principles on right), Delivery Standards, 14-Day Post-Launch Fix Window Details, Final CTA Banner, Contact Form, Footer.
  - Primary CTA: Talk to the Founder -> /book-a-call
  - Source signal: Client brief §4 & Batch 14 decisions
  - Type: Static
  - Template group: none

- [ ] Book a Call
  - Slug: book-a-call
  - Route: /book-a-call
  - Content owner: agency
  - Purpose: High-intent conversion page featuring embedded Cal.com scheduling with 5 qualifying fields and zero sales pitch.
  - Key sections: Header, Hero with 3-Point Call Agenda, Cal.com Embed with fallback direct link, WhatsApp Quick Link, Security & White-Label Lock Notice, Consent Notice, Footer (FAQ and contact form omitted).
  - Primary CTA: Confirm Schedule -> Cal.com
  - Source signal: Batch 03 & Batch 08 conversion architecture
  - Type: Static
  - Template group: Funnel

---

## Dynamic / Templated Pages

- [ ] Blog Listing
  - Slug: blog
  - Route: /blog
  - Content owner: agency
  - CMS-Controlled: true
  - Target model: blog
  - Purpose: Thought leadership hub featuring pragmatic playbooks on agency growth, fixed-price project scoping, and architecture selection.
  - Key sections: Header, Hero, Taxonomy Filter Pill Tags (5 tags), Responsive 3-Column Article Card Grid (9 posts per page), Newsletter Signup, Footer (contact form omitted).
  - Primary CTA: Read Article -> /blog/[slug]
  - Source signal: Batch 03 & Batch 07
  - Type: Dynamic
  - Template group: Blog
  - Data source: cms (`Blog.paginate`)
  - Entries expected: 3 launch articles

- [ ] Blog Post Template
  - Slug: blog-post
  - Route: /blog/[slug]
  - Content owner: agency
  - CMS-Controlled: true
  - Target model: blog
  - Purpose: In-depth long-form technical article with rich HTML body, Google FAQ schema, mid-article service callout, and author card.
  - Key sections: Header, Breadcrumb Trail, Article Hero with Category Pill & Reading Time, Co-Located Cover Visual, HTML Rich Text Body, Mid-Article Service Callout, Embedded FAQ Accordion, Author Bio Card (Devansh), Newsletter Digest CTA, Footer.
  - Primary CTA: Book a 20-Min Call -> /book-a-call
  - Source signal: Stage 4 validated MDX files
  - Type: Dynamic
  - Template group: Blog
  - Data source: cms (`Blog.readOne`)
  - Entries expected: 3 live articles in NWW CMS

---

## Secondary / Utility Pages

- [ ] Contact
  - Slug: contact
  - Route: /contact
  - Content owner: agency
  - Purpose: Direct brief submission for agencies with existing RFPs or clients needing 24-hour quotes.
  - Key sections: Header, Hero, 5-Field Qualifying Form (Agency Name, Team Size, Dev Work Type, Monthly Requests, Project Scope), Consent Notice, Direct Email (`contact@nextwebworks.in`), Secondary WhatsApp Direct Link, Footer.
  - Primary CTA: Send Brief for 24h Quote -> /api/lead/create-one
  - Source signal: Batch 03 & Batch 08
  - Type: Static
  - Template group: none

- [ ] Booking Confirmed Thank You
  - Slug: thank-you
  - Route: /book-a-call/thank-you
  - Content owner: agency
  - Purpose: Confirmation of scheduled discovery call with what-to-bring checklist and preparation notes.
  - Key sections: Header, Confirmation Checkmark Badge, What-to-Bring Checklist, NDA Reassurance, Links to /for-agencies and WhatsApp, Footer (FAQ and contact form omitted; robots noindex).
  - Primary CTA: Explore How We Work -> /for-agencies
  - Source signal: Batch 03 & Batch 07
  - Type: Static
  - Template group: Funnel

---

## Utility / System Pages

- [ ] 404 Not Found
  - Slug: not-found
  - Route: app/not-found.js
  - Content owner: agency
  - Purpose: Friendly error recovery directing lost visitors back home or into discovery booking.
  - Key sections: 404 Notice, Explanation, Primary Buttons ("Return Home" and "Book a 20-Min Call").
  - Primary CTA: Return Home -> /
  - Source signal: Batch 03 & Next.js convention
  - Type: Static
  - Template group: none

- [ ] 500 Server Error
  - Slug: error
  - Route: app/error.js
  - Content owner: agency
  - Purpose: Client-side error boundary recovery.
  - Key sections: Error Notice, Retry Button.
  - Primary CTA: Try Again -> reset()
  - Source signal: Standard Next.js convention
  - Type: Client Component
  - Template group: none

---

## Legal / Compliance Pages

- [ ] Privacy Policy
  - Slug: privacy
  - Route: /privacy
  - Content owner: client / lawyer
  - Purpose: India DPDP Act 2023 and GDPR compliance, data collection minimization, and contact details.
  - Key sections: Header, Policy Metadata, 8-Section Policy Prose, Contact Mailbox (`contact@nextwebworks.in`), Footer.
  - Primary CTA: None
  - Source signal: Stage 4 validated policy MDX
  - Type: Static
  - Template group: Legal

- [ ] Terms of Service
  - Slug: terms
  - Route: /terms
  - Content owner: client / lawyer
  - Purpose: Legal terms governing white-label development, IP transfer upon delivery, 14-day warranty, and Indore jurisdiction.
  - Key sections: Header, Terms Metadata, 8-Section Terms Prose, Indore Jurisdiction, Footer.
  - Primary CTA: None
  - Source signal: Stage 4 validated terms MDX
  - Type: Static
  - Template group: Legal
