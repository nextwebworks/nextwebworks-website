// site/content/home.js - Copy and data structures for Home page
// Adheres strictly to .agents/rules/copy-standards.md and .agents/rules/unique-content-per-page.md

export const homeContent = {
  hero: {
    eyebrow: 'WHITE-LABEL ENGINEERING PARTNER',
    title: 'Say Yes to Every Client Dev Request. Without Hiring Developers.',
    description:
      'We build web applications, ERPs, and mobile apps under your agency brand. Direct principal engineer access, fixed-price quotes in 24 hours, and zero payroll drag.',
    primaryCta: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    secondaryCta: { text: 'Explore Services & Delivery Protocol ↓', href: '#home-services' },
    mobilePill: { text: 'Book a 30-Min Call →', href: '/book-a-call' },
    schematicNodes: [
      { id: 'spec', label: 'Agency Spec / Client Brief' },
      { id: 'layer', label: 'Next Web Works Engineering Layer' },
      { id: 'stack', label: 'Next.js App Router & Cloud APIs' },
      { id: 'output', label: 'White-Label Deliverable Under Your Brand' },
    ],
  },

  painPoints: {
    eyebrow: 'AGENCY DELIVERY BOTTLENECKS',
    title: 'Where Client Dev Projects Fall Apart',
    description:
      'Winning client retainers is profitable. Delivering complex custom code without a dedicated technical lead burns your team and your margins.',
    cards: [
      {
        tag: 'Mid-Sprint Contractor Disappearance',
        title: 'The Freelancer Ghost',
        description:
          'Freelance marketplaces offer cheap starts but zero delivery accountability. When a freelancer vanishes before launch, your account team absorbs the client fallout.',
        risk: 'Risk: Blown Client Launch Deadlines',
      },
      {
        tag: 'Fixed Payroll Overhead',
        title: 'The Unbillable In-House Salary',
        description:
          'Hiring a full-time senior engineer adds substantial monthly overhead. During slow quarters, that unbillable salary drags down agency profitability.',
        risk: 'Risk: Margin Drain During Slow Cycles',
      },
      {
        tag: 'Technical Debt Accumulation',
        title: 'The Costly Code Rewrite',
        description:
          'Hurried offshore codebases lack automated tests, typed contracts, and clean documentation. When the client requests phase two, your team has to rewrite from scratch.',
        risk: 'Risk: Emergency Agency Code Rebuild',
      },
    ],
    cta: { text: 'See How We Eliminate Delivery Churn ↓', href: '#home-services' },
  },

  services: {
    eyebrow: 'TECHNICAL CAPABILITIES',
    title: 'Five Platform Capabilities Behind Your Agency',
    description:
      'Every build is delivered in the platform your client already uses, engineered to enterprise standards with complete repository ownership.',
    drawers: [
      {
        id: 'websites',
        title: 'Websites & Marketing Platforms',
        tag: 'Next.js App Router · Headless Web',
        summary:
          'Sub-second page loads, responsive layouts, and zero layout shift. Built for high-traffic marketing campaigns and client conversion goals.',
        specs: [
          'Next.js 16 App Router architectures with Turbopack and React 19',
          'Strict Core Web Vitals profiling with sub-second paint targets',
          'Automated dynamic sitemaps, semantic JSON-LD, and OpenGraph tags',
          'Decoupled headless CMS integrations giving clients autonomy',
        ],
        ctaText: 'View Website Specifications →',
        href: '/services/websites',
      },
      {
        id: 'web-apps',
        title: 'Custom Web Applications',
        tag: 'Next.js · PostgreSQL · Prisma',
        summary:
          'Secure role-based client dashboards, authenticated workflows, and real-time data streaming built on Next.js, PostgreSQL, and Prisma.',
        specs: [
          'React Server Components for instant data streaming and sub-50ms TTFB',
          'Role-based access control (RBAC) and multi-tenant data schemas',
          'Third-party REST and GraphQL API orchestration with webhooks',
          'Strict TypeScript typing discipline and runtime Zod validation',
        ],
        ctaText: 'View Web Application Specifications →',
        href: '/services/web-apps',
      },
      {
        id: 'erps',
        title: 'Operations & Business ERPs',
        tag: 'Inventory · Billing · Multi-Tier GST',
        summary:
          'Automated invoicing, multi-tier tax engines, high-speed QuestPDF vector rendering, and audit-ready data tracking for growing businesses.',
        specs: [
          'Atomic FIFO inventory lot depletion using MongoDB session transactions',
          'Multi-tier GST tax calculation engine (CGST, SGST, IGST)',
          'Dedicated ASP.NET Core QuestPDF vector document compilation',
          'Enterprise role-based permissions with immutable audit logs',
        ],
        ctaText: 'View ERP Specifications →',
        href: '/services/erps',
      },
      {
        id: 'mobile-apps',
        title: 'Cross-Platform Mobile Apps',
        tag: 'React Native · iOS & Android',
        summary:
          'Native iOS and Android apps compiled from a unified TypeScript repository, complete with camera capture, push alerts, and app store submission support.',
        specs: [
          'Single shared React Native codebase targeting iOS and Android',
          'Hardware access: native camera capture, geolocation, and push alerts',
          'Push notification workflows via Apple APNs and Firebase Cloud Messaging',
          'End-to-end Apple App Store and Google Play Store submission support',
        ],
        ctaText: 'View Mobile Application Specifications →',
        href: '/services/mobile-apps',
      },
      {
        id: 'cms-platforms',
        title: 'Agency CMS & No-Code Platforms',
        tag: 'WordPress ACF · Webflow CMS',
        summary:
          'Intuitive visual editing workspaces built on custom block architectures, giving client content teams autonomy without breaking page layouts.',
        specs: [
          'Custom WordPress themes and Gutenberg blocks without bloated builders',
          'Advanced Webflow CMS architecture, interactions, and custom code',
          'Turnkey client editor documentation and video walkthroughs',
          'Strict white-label delivery with zero Next Web Works branding',
        ],
        ctaText: 'View CMS Specifications →',
        href: '/services/cms-platforms',
      },
    ],
  },

  workflow: {
    eyebrow: 'DELIVERY PROTOCOL',
    title: 'From Client Brief to Clean Staging in Four Milestones',
    description:
      'A predictable engineering pipeline designed to protect agency timelines, eliminate scope creep, and keep client account teams informed.',
    steps: [
      {
        step: '01',
        tag: 'SPECIFICATION & NDA',
        title: 'Step 01 · Specification & NDA',
        desc: 'We execute a mutual non-disclosure agreement before reviewing your Figma designs or client brief. We confirm stack fit and technical constraints directly with your team.',
      },
      {
        step: '02',
        tag: '24-HOUR QUOTATION',
        title: 'Step 02 · 24-Hour Fixed Quotation',
        desc: 'Our lead engineer evaluates data schemas, APIs, and component specifications. Within 24 business hours, you receive a binding fixed-scope milestone quotation with zero hidden fees.',
      },
      {
        step: '03',
        tag: 'PRIVATE STAGING',
        title: 'Step 03 · Private Staging & QA Pass',
        desc: 'We build in isolated preview environments under neutral URLs. Every build passes automated linting, Core Web Vitals profiling, and WCAG contrast testing before review.',
      },
      {
        step: '04',
        tag: 'CODE SOVEREIGNTY',
        title: 'Step 04 · Direct Git Push & Warranty',
        desc: 'Production commits transfer directly into your agency repository. Every full build includes our 14-day defect fix window with scheduled check-ins on Day 7 and Day 14.',
      },
    ],
    cta: { text: 'Start With a Scoped Pilot Build →', href: '/book-a-call' },
  },

  workShowcase: {
    eyebrow: 'PROVEN ARCHITECTURE',
    title: 'Three Production Systems Engineered Behind Agency Doors',
    description:
      'Real codebases, real database schemas, and enterprise architectures built to handle high concurrency and strict data isolation.',
    samples: [
      {
        id: 'nww-cms-kit',
        title: 'NWW Headless CMS Kit',
        tagline:
          'Production-ready headless publishing engine pairing decoupled Next.js App Router frontends with Express microservices.',
        stack: 'Next.js 16 · App Router · ISR Webhooks · Express',
        badge: 'Illustrative sample · not a client project',
        overview:
          'Decoupled Next.js App Router frontend paired with an Express REST API. Automated webhook revalidation purges edge cache instantly with sub-50ms TTFB.',
        highlights: [
          'Dynamic on-demand cache revalidation via secure webhook architecture',
          'Universal model helpers for articles, case studies, and lead intake',
          'Native Schema.org JSON-LD generation with automated dynamic sitemaps',
        ],
        ctaText: 'View Architecture Breakdown →',
        href: '/work/nww-cms-kit',
      },
      {
        id: 'classymenu',
        title: 'ClassyMenu Dining Platform',
        tagline:
          'Multi-tenant digital dining software built for high concurrency and zero-login ordering workflows.',
        stack: 'React 18 · Node.js · Express · MongoDB · Redis',
        badge: 'Illustrative sample · not a client project',
        overview:
          'High-concurrency menu management system with sub-second catalog search, responsive image optimization, and role-based kitchen display routing.',
        highlights: [
          'Zero-latency dynamic catalog navigation supporting thousands of items',
          'Live multi-device table session synchronization with optimistic updates',
          'Direct WhatsApp Business ordering bridge with zero customer login friction',
        ],
        ctaText: 'View Architecture Breakdown →',
        href: '/work/classymenu',
      },
      {
        id: 'ceramicsales',
        title: 'CeramicSales Wholesale ERP',
        tagline:
          'Enterprise wholesale ERP platform featuring multi-tier GST tax engines and real-time inventory reconciliation.',
        stack: 'React 18 · Express · ASP.NET Core · QuestPDF · MongoDB',
        badge: 'Illustrative sample · not a client project',
        overview:
          'Atomic FIFO inventory lot depletion using MongoDB session transactions, paired with an ASP.NET Core QuestPDF document compilation microservice.',
        highlights: [
          'Atomic FIFO stock depletion with transactional rollbacks on concurrent orders',
          'Automated multi-tier GST calculation engine (CGST, SGST, IGST) with audit logs',
          'High-fidelity server-side vector PDF generation for quotes and tax invoices',
        ],
        ctaText: 'View Architecture Breakdown →',
        href: '/work/ceramicsales',
      },
    ],
  },

  engineeringStandards: {
    eyebrow: 'ENGINEERING STANDARDS',
    title: 'Production Code Built for Agency Sovereignty',
    description:
      'We do not cut corners with messy code or unmaintained third-party templates. Every repository is structured for long-term maintainability.',
    standards: [
      {
        id: 'typed',
        title: 'Clean Typed Architectures',
        description:
          'Structured TypeScript and modern ECMAScript standards with strict linting rules. Components are decoupled, self-documenting, and free from bloated dependencies.',
      },
      {
        id: 'performance',
        title: 'Core Web Vitals Enforcement',
        description:
          'Sub-second Largest Contentful Paint (LCP < 2.5s), zero Cumulative Layout Shift (CLS < 0.1), and responsive asset optimization verified before handover.',
      },
      {
        id: 'sovereignty',
        title: 'Zero Proprietary Lock-In',
        description:
          'Atomic Git commits pushed directly into your agency repository. Complete with environment variable templates, setup guides, and automated CI/CD deployment scripts.',
      },
      {
        id: 'discretion',
        title: 'Anonymous Commit Authoring',
        description:
          'Zero Next Web Works watermarks, author credits, or public marketing mentions. We work silently behind your brand, or commit under your agency email handles.',
      },
    ],
    cta: { text: 'Read Our Engineering Principles →', href: '/about' },
  },

  faqs: {
    eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Common Questions From Agency Founders',
    description: 'Straightforward answers on how we collaborate, quote projects, and protect your agency brand.',
    items: [
      {
        question: 'Who owns the intellectual property and code?',
        answer:
          'Your agency retains 100% ownership of all source code, design assets, and database schemas upon milestone delivery. The Git repository is transferred directly to your organization with full commit history and zero vendor lock-in.',
      },
      {
        question: 'Will our client ever find out about Next Web Works?',
        answer:
          'No. We deliver strictly under your agency brand with zero public credits, watermarks, or agency marketing announcements. Commits appear under our developer handles unless you request that we author them directly under your agency email handles.',
      },
      {
        question: 'What happens if a bug appears after launch?',
        answer:
          'Every full build includes our 14-day post-launch defect fix window with scheduled check-ins on Day 7 and Day 14. We fix any code defects against approved specifications promptly, followed by an optional monthly maintenance plan.',
      },
      {
        question: 'Can you join client scoping calls as our technical lead?',
        answer:
          'Yes. When you introduce us as your technical lead or senior developer, we can attend client discovery calls to review architecture constraints, database requirements, and integration feasibility on your agency behalf.',
      },
      {
        question: 'What do you need from our team to start?',
        answer:
          'We start with a 30-minute discovery call to review your client brief, Figma design files, and target milestones. We sign a mutual NDA, deliver a binding fixed-scope quote within 24 business hours, and can kick off work the same day.',
      },
    ],
  },

  ctaBanner: {
    badge: 'Confidential Engineering Partner',
    title: 'Scale Your Agency Dev Capacity This Week',
    description:
      'Schedule a 30-minute scoping call directly with Devansh. We will review your client brief, confirm technical constraints, and deliver a fixed quote in 24 hours.',
    primaryButton: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    footnote: 'Direct engineering conversation · No sales pitch · Mutual NDA protection',
  },

  contactForm: {
    eyebrow: 'Inbound Project Brief',
    leadIn: 'Prefer to Write? Send Us Your Project Brief',
    description:
      'Submit your requirements, Figma references, and target timeline. We will review the specifications under mutual NDA and reply within 24 business hours.',
  },
};
