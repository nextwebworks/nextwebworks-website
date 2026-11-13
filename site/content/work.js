// site/content/work.js - Portfolio, deliverable standards, staging environments, and per-page CTA banner

export const workContent = {
  hero: {
    eyebrow: 'ENGINEERING PROOF',
    title: 'Flagship Products & Architectural Builds',
    description:
      'Explore real production software systems engineered by our lead developer. Real schemas, real transaction pipelines, and clean Git commits with zero synthetic marketing metrics.',
    ctaPrimary: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    ctaSecondary: { text: 'View Deliverables ↓', href: '#work-showcase' },
    pillars: [
      { id: 'wp1', label: 'PROPRIETARY', title: 'In-House Platforms' },
      { id: 'wp2', label: 'DELIVERABLE', title: 'Direct Client Builds' },
      { id: 'wp3', label: 'PROTECTED', title: 'White-Label NDA' },
      { id: 'wp4', label: 'WARRANTY', title: '14-Day Post-Launch' },
    ],
  },

  standards: {
    eyebrow: 'ARCHITECTURAL STANDARDS',
    title: 'Engineered for High Concurrency and Zero Maintenance Drag',
    description:
      'We architect codebases to withstand real-world traffic spikes, complex multi-user workflows, and strict regulatory standards.',
    items: [
      {
        id: 'st1',
        title: 'Strict Type Safety & Data Validation',
        description:
          'Every API route and component boundary enforces strict TypeScript interfaces or runtime schema validation using Zod, eliminating unexpected runtime crashes.',
      },
      {
        id: 'st2',
        title: 'ACID Transaction Integrity',
        description:
          'Financial and inventory operations execute inside atomic multi-document database sessions, preventing inventory race conditions and calculation drift.',
      },
      {
        id: 'st3',
        title: 'Asynchronous Compute Offloading',
        description:
          'Heavy compute tasks, such as multi-page vector PDF generation and image resizing, are offloaded to dedicated microservices to protect core API response times.',
      },
    ],
  },

  verification: {
    eyebrow: 'QUALITY VERIFICATION',
    title: 'Rigorous Pre-Handover Verification in Every Sprint',
    description:
      'We do not rely on hopeful manual testing. Every repository undergoes rigorous automated and physical device testing before delivery.',
    gates: [
      {
        id: 'v1',
        title: 'Automated CI/CD Lint & Security Audits',
        description:
          'Every build passes automated ESLint rule checks, formatting validation, and dependency vulnerability scans within automated GitHub Actions pipelines.',
      },
      {
        id: 'v2',
        title: 'Physical Device & Responsive Testing',
        description:
          'Interfaces are tested across physical iOS and Android mobile devices, tablets, and desktop displays to ensure flawless responsive layouts and touch targets.',
      },
      {
        id: 'v3',
        title: 'Core Web Vitals & Accessibility Profiling',
        description:
          'Automated Lighthouse audits verify that production pages satisfy sub-second LCP paint targets, zero layout shift, and WCAG 2.1 AA contrast compliance.',
      },
    ],
  },

  confidentialityNotice: {
    eyebrow: 'CONFIDENTIALITY RATIONALE',
    title: 'Why Our Best Client Work is Never Shown Publicly',
    description:
      'When marketing agencies hire Next Web Works, they hire an invisible partner. We protect that trust above all else.',
    reasons: [
      {
        id: 'r1',
        title: 'Strict Mutual Non-Disclosure',
        desc: 'Agency contracts demand total discretion. Publishing client work to win our own new business would directly violate our core white-label promise.',
      },
      {
        id: 'r2',
        title: 'Agency Client Protection',
        desc: 'Your clients hired your agency, not Next Web Works. We ensure that your agency receives 100% of the industry acclaim, awards, and case study recognition.',
      },
      {
        id: 'r3',
        title: 'Grounded In-House Architecture as Proof',
        desc: 'Instead of violating client NDAs, we demonstrate our engineering capabilities through real, complex in-house software architectures and production products.',
      },
    ],
  },

  codeSovereignty: {
    eyebrow: 'CODE SOVEREIGNTY',
    title: 'Zero Vendor Lock-In. Complete Code Sovereignty.',
    description:
      'You own the code entirely. We build so cleanly that any competent developer can pick up the repository and continue building.',
    guarantees: [
      {
        id: 'cs1',
        title: 'Standardized Directory Structures',
        description:
          'Every project adheres to official framework conventions (Next.js App Router, clean Express controllers, typed Mongoose models) without weird proprietary wrappers.',
      },
      {
        id: 'cs2',
        title: 'Comprehensive Environment Setup Guides',
        description:
          'Every repository includes a detailed README.md with environment variable templates, local startup scripts, and production deployment instructions.',
      },
      {
        id: 'cs3',
        title: 'Direct Organization Transfer',
        description:
          'Repository ownership transfers directly to your agency private GitHub or GitLab organization upon milestone sign-off. You hold the master keys.',
      },
    ],
  },

  faqs: {
    sectionId: 'work-faqs',
    eyebrow: 'WORK & PROOF FAQ',
    title: 'Work Samples & Technical Architecture FAQs',
    description: 'Straightforward answers on repository transfers, staging previews, QA audits, and warranties.',
    items: [
      {
        question: 'Are the platforms showcased on this page actual client projects?',
        answer:
          'No. The platforms displayed here are proprietary in-house software architectures and production applications engineered by our lead developer. They demonstrate our real-world database design, microservice orchestration, and API capabilities without violating client confidentiality agreements.',
      },
      {
        question: 'Can our agency inspect a sample repository or code sample before hiring?',
        answer:
          'Yes. During your 30-minute scoping call, we can walk you through architecture schemas, clean component trees, and Git commit histories to verify code quality, typing discipline, and commenting standards directly.',
      },
      {
        question: 'Do you provide staging preview URLs for our client account team to test?',
        answer:
          'Yes. Every project milestone is deployed to private, password-protected staging preview environments hosted under neutral URLs. Your account managers and clients can test interactive features thoroughly before production deployment.',
      },
      {
        question: 'What coding standards do you enforce across your repositories?',
        answer:
          'We enforce strict TypeScript or modern ECMAScript standards, modular component architectures, automated ESLint formatting, responsive design principles, and comprehensive documentation to ensure maintainability and clean ownership by your team.',
      },
      {
        question: 'How do you handle third-party API dependencies and external services?',
        answer:
          'We configure third-party services—such as Stripe, Resend, Amazon S3, and database providers—directly within your agency or client cloud accounts. Credentials remain strictly isolated to your organization for maximum security.',
      },
    ],
  },

  ctaBanner: {
    sectionId: 'work-cta',
    badge: 'Production Delivery Bench',
    title: 'Discuss an Architectural Build for Your Agency',
    description:
      'Schedule a 30-minute scoping call directly with Devansh. We will evaluate your client technical requirements and outline a clean architecture.',
    primaryButton: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    footnote: 'Clean Git histories · 100% white-label repos · 14-day warranty included',
  },

  contactForm: {
    sectionId: 'work-contact-form',
    eyebrow: 'Production Build Scoping',
    leadIn: 'Submit an Engineering Specification',
    description:
      'Share your project brief, database requirements, and target launch window. We will review the brief under mutual NDA and reply within 24 hours.',
  },

  showcase: {
    eyebrow: 'Production Architecture',
    title: 'Verified Deliverable Case Studies & Products',
    description:
      'Detailed technical breakdowns of our proprietary software products and custom client platforms. Explore architecture decisions, performance benchmarks, and delivery highlights.',
    highlightsLabel: 'Verified Deliverable Highlights:',
    deliveryLabel: 'Direct Engineering Desk',
    deliveryDesc: 'Comprehensive repository ownership, staging domain verification, and 14-day warranty.',
    samples: [
      {
        id: 'nww-cms-kit',
        title: 'NWW Headless CMS Kit',
        stack: 'Class-Based ISR Engine · Next.js App Router · Edge Revalidation',
        badge: 'In-House Proprietary Engine',
        overview:
          'Class-based ISR client kit providing automated edge tag revalidation, typed model query helpers, and deterministic JSON-LD schema blocks.',
        highlights: [
          'Granular cache purging via cryptographic HMAC webhook listeners',
          'Encapsulated model classes isolating frontend components from schema shifts',
          'Automated Schema.org metadata and dynamic sitemap integration',
        ],
        ctaText: 'Explore CMS engineering',
      },
      {
        id: 'classymenu',
        title: 'ClassyMenu Digital Dining Platform',
        stack: 'Multi-Tenant SaaS · Next.js · Node.js · WhatsApp API Bridge',
        badge: 'In-House Proprietary Platform',
        overview:
          'High-concurrency digital menu and ordering platform with live multi-device table synchronization and direct WhatsApp kitchen routing.',
        highlights: [
          'Optimistic UI state management ensuring instant order manipulation',
          'Zero mandatory customer authentication reducing ordering abandonments',
          'Aggressive responsive image compression preserving 60fps scrolling',
        ],
        ctaText: 'Explore dining SaaS',
      },
      {
        id: 'ceramicsales',
        title: 'CeramicSales B2B Wholesale Portal',
        stack: 'Custom ERP Engine · React Server Components · PostgreSQL · Vector PDF',
        badge: 'Direct Client Deliverable',
        overview:
          'Production B2B wholesale platform delivering transactional FIFO inventory allocation, regional tax computation, and instant vector PDF invoicing.',
        highlights: [
          'Row-level database transactions preventing concurrent stock over-allocation',
          'Automated intra-state and inter-state tax engine with immutable logs',
          'High-speed server-rendered vector PDFs streamed directly to client devices',
        ],
        ctaText: 'Explore wholesale ERP',
      },
    ],
  },
};

export const workDetailContent = {
  'nww-cms-kit': {
    ctaBanner: {
      badge: 'Headless CMS Architecture',
      title: 'Build Your Next High-Performance Client Site on NWW CMS Kit',
      description:
        'Harness sub-second ISR rendering, tag-based on-demand cache revalidation, and class-based API access. Consult with our technical lead on headless CMS deployments.',
      primaryButton: { text: 'Discuss Headless CMS Kit', href: '/book-a-call' },
      footnote: 'Sub-second ISR streaming · Tag-based revalidation · Type-safe schema models',
    },
    contactForm: {
      eyebrow: 'CMS Kit Consultation',
      leadIn: 'Scope a Headless Next.js & CMS Architecture',
      description:
        'Need advice on headless content architecture, edge caching strategies, or migrating an existing WordPress/Webflow install to Next.js? Let’s connect.',
    },
    faqs: {
      eyebrow: 'CMS Engine FAQ',
      title: 'NWW Headless CMS Kit Technical Specifications',
      description: 'Frequently asked questions regarding incremental static regeneration, caching webhooks, and SEO.',
      items: [
        {
          question: 'How does the NWW CMS Kit achieve sub-second incremental static regeneration?',
          answer:
            'The kit utilizes Next.js fetch cache tagging with custom HTTP revalidation webhooks. Content renders from edge cache in single-digit milliseconds while background webhook handlers purge specific model tags only when editorial changes occur in the CMS.',
        },
        {
          question: 'What advantages does class-based SDK encapsulation offer over raw REST fetch calls?',
          answer:
            'Our class-based models encapsulate API endpoints, query normalization, error boundaries, and response typing into reusable methods. Frontend Server Components remain strictly decoupled from CMS endpoint mutations and data structure variances.',
        },
        {
          question: 'How does the kit handle structured data and Schema.org generation automatically?',
          answer:
            'The CMS kit features an integrated SEO helper that parses article metadata, canonical URLs, and entity schemas at build time, generating validated Article and BreadcrumbList JSON-LD blocks without manual template scripting.',
        },
        {
          question: 'Can the NWW Headless CMS Kit integrate with third-party webhooks or preview links?',
          answer:
            'Yes. The architecture includes cryptographic secret validation on webhook endpoints and dedicated draft mode endpoints, enabling content editors to view unpublished draft articles on live Next.js preview environments securely.',
        },
        {
          question: 'What server infrastructure or hosting stack does the kit require?',
          answer:
            'The client kit is zero-dependency and fully compatible with Node.js runtime environments, Vercel Edge networks, Docker containers, and standard Linux VPS hosting platforms without requiring custom native compilation steps.',
        },
      ],
    },
  },

  classymenu: {
    ctaBanner: {
      badge: 'Hospitality SaaS Engineering',
      title: 'Launch a High-Concurrency Hospitality or Ordering Application',
      description:
        'From multi-tenant restaurant ecosystems to zero-login WhatsApp bridges, we engineer resilient web applications designed for chaotic, real-world peak operations.',
      primaryButton: { text: 'Discuss SaaS Architecture', href: '/book-a-call' },
      footnote: 'Zero customer login · Real-time table sync · WhatsApp business API bridge',
    },
    contactForm: {
      eyebrow: 'Hospitality Tech Inquiry',
      leadIn: 'Inquire About Multi-Tenant SaaS & Dining Tech',
      description:
        'Looking to engineer real-time ordering engines, digital menu platforms, or specialized transactional SaaS products? Share your functional specifications below.',
    },
    faqs: {
      eyebrow: 'Dining Platform FAQ',
      title: 'ClassyMenu SaaS Architecture & Performance',
      description: 'Frequently asked questions on live table synchronization, WhatsApp integration, and peak surges.',
      items: [
        {
          question: 'How does ClassyMenu synchronize orders across multiple diner phones at the same table?',
          answer:
            'The application maintains lightweight session channels keyed to specific table QR codes. When any diner adds items or modifies quantities, state updates broadcast to all connected table devices with zero interface freezing.',
        },
        {
          question: 'Why was a direct WhatsApp Business API bridge chosen over an in-app payment gate?',
          answer:
            'Eliminating mandatory user account creation and payment gateway friction increased order conversion rates dramatically in high-density dining environments, allowing customers to send verified orders directly to kitchen staff in seconds.',
        },
        {
          question: 'How does the platform optimize image rendering for menus with thousands of dishes?',
          answer:
            'We implement aggressive next-gen image formats with responsive srcset dimensions, lazy loading below the viewport, and CDN edge caching to ensure comprehensive menus with thousands of items scroll smoothly at 60fps.',
        },
        {
          question: 'What multi-tenant isolation guarantees exist for restaurant brand owners?',
          answer:
            'Each dining establishment operates within logically partitioned data namespaces with individual branding themes, custom domain support, private staff dashboard access, and isolated transactional records to prevent cross-tenant data leakage.',
        },
        {
          question: 'How does the architecture maintain zero downtime during peak lunch and dinner surges?',
          answer:
            'Stateless Next.js server components scale horizontally behind load balancers, while database queries are heavily indexed and protected by connection pooling to absorb concurrent dinner-hour request spikes effortlessly.',
        },
      ],
    },
  },

  ceramicsales: {
    ctaBanner: {
      badge: 'B2B ERP & Operations',
      title: 'Modernize Complex B2B Wholesale & Distribution Workflows',
      description:
        'Eliminate manual ledger errors with custom ERP software engineered for multi-tier taxation, FIFO warehouse accounting, and instant vector document generation.',
      primaryButton: { text: 'Discuss B2B Wholesale Systems', href: '/book-a-call' },
      footnote: 'Row-level transactional locks · Automated GST breakdown · Instant vector PDF exports',
    },
    contactForm: {
      eyebrow: 'Wholesale ERP Consultation',
      leadIn: 'Scope Your Custom B2B Portal & Inventory Platform',
      description:
        'Facing challenges with inventory reconciliation, complex distributor tax tiers, or automated invoice generation? Detail your operational requirements for engineering review.',
    },
    faqs: {
      eyebrow: 'Wholesale Portal FAQ',
      title: 'CeramicSales Wholesale & ERP Technical Overview',
      description: 'Frequently asked questions on atomic inventory locks, regional tax splits, and accounting exports.',
      items: [
        {
          question: 'How does CeramicSales handle concurrent wholesale orders without inventory over-allocation?',
          answer:
            'The checkout pipeline wraps stock reservation in atomic database transactions with row-level locks. If concurrent orders target the same batch, each order is evaluated sequentially, guaranteeing zero duplicate allocations or negative physical warehouse stock.',
        },
        {
          question: 'How are regional GST rules and inter-state tax splits calculated dynamically?',
          answer:
            'The system identifies delivery and billing state coordinates against company registrations to apply CGST and SGST splits for intra-state orders or IGST for inter-state shipments, generating legally compliant tax invoices automatically.',
        },
        {
          question: 'What engine generates the downloadable server-side vector PDF invoices?',
          answer:
            'Invoices and dispatch delivery slips are generated on the server using headless vector rendering engines that stream PDF binaries directly to client browsers in milliseconds, ensuring crisp typography and scannable barcode verification.',
        },
        {
          question: 'How do wholesale trade buyers access personalized pricing tiers and credit limits?',
          answer:
            'Buyer accounts are mapped to custom distributor tiers with negotiated discount schedules and dynamic credit limit verification, preventing order confirmation if pending invoices exceed agreed commercial credit thresholds.',
        },
        {
          question: 'Can CeramicSales export financial transactions into third-party accounting platforms?',
          answer:
            'Yes. The platform provides automated daily ledger export pipelines and REST webhooks formatted for standard accounting software like Tally, Zoho Books, and SAP, eliminating manual double-entry bookkeeping for finance teams.',
        },
      ],
    },
  },
};

export const workSeoMeta = {
  'nww-cms-kit': {
    title: 'NWW Headless CMS Kit Build',
    description:
      'Architecture case study of our zero-dependency headless CMS client delivering instantaneous edge caching, ISR revalidation, and typed schema models.',
  },
  classymenu: {
    title: 'ClassyMenu SaaS Platform',
    description:
      'Architecture case study of a multi-tenant digital dining platform connecting table session state with automated WhatsApp Business order routing.',
  },
  ceramicsales: {
    title: 'CeramicSales Wholesale ERP',
    description:
      'Technical case study of a B2B wholesale platform featuring atomic FIFO inventory tracking, multi-tier GST compliance, and server-side PDF exports.',
  },
};


