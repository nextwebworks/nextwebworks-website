// site/content/services.js - Technical capabilities, stack FAQs, and per-page CTA banner

export const servicesContent = {
  hero: {
    eyebrow: 'ENGINEERING CAPABILITIES',
    title: 'Enterprise-Grade Web & Mobile Engineering for Agencies',
    description:
      'We engineer custom frontends, scalable web applications, and mobile apps strictly under your agency brand. Built on modern architectures with zero technical debt.',
    ctaPrimary: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    ctaSecondary: { text: 'Explore Platform Capabilities ↓', href: '#services-capabilities' },
    pillars: [
      { id: 'p1', label: '01 · Confidential', title: '100% White-Label' },
      { id: 'p2', label: '02 · Predictable', title: 'Fixed-Price Quotes' },
      { id: 'p3', label: '03 · Reliable', title: '14-Day Warranty' },
      { id: 'p4', label: '04 · Rapid Scoping', title: 'Quote in 24 Hours' },
    ],
  },

  capabilitiesHeader: {
    eyebrow: 'CORE PLATFORMS',
    title: 'Engineered Across Five Strategic Platforms',
    description:
      'From sub-second marketing websites to high-concurrency ERP software, we build in the frameworks your accounts require.',
  },

  integrationStandards: {
    eyebrow: 'DEPLOYMENT INTEGRATION',
    title: 'Configured Directly in Your Agency Cloud Accounts',
    description:
      'We never hold client hosting hostage. Production environments are configured directly within your agency or client cloud infrastructure.',
    points: [
      {
        id: 'cloud',
        title: 'Direct Cloud Infrastructure Access',
        description:
          'We set up production directly on Vercel, AWS, DigitalOcean, or your preferred cloud provider. Secret variables remain in your accounts.',
      },
      {
        id: 'staging',
        title: 'White-Label Staging Previews',
        description:
          'Preview deployments run on your agency domain or neutral URLs with password protection and strict search-engine exclusion.',
      },
      {
        id: 'cicd',
        title: 'Automated Deployment Pipelines',
        description:
          'Every repository includes turnkey CI/CD workflows so that merging to your production branch executes automated tests and edge deployments.',
      },
    ],
  },

  deliverables: {
    eyebrow: 'PRODUCTION DELIVERABLES',
    title: 'What Your Agency Receives on Every Build',
    description:
      'We hand over clean, production-verified assets engineered for long-term maintainability with zero proprietary developer lock-in.',
    items: [
      {
        id: 'd1',
        title: 'Full Source Code & Git History',
        description:
          'Atomic commits, clear semantic messages, and full branch history pushed directly to your agency private GitHub or GitLab repository.',
      },
      {
        id: 'd2',
        title: 'Automated CI/CD Deployment Scripts',
        description:
          'Ready-to-deploy GitHub Actions workflows, Dockerfiles, and environment templates configured for Vercel, AWS, or your client cloud.',
      },
      {
        id: 'd3',
        title: 'Comprehensive Technical Documentation',
        description:
          'Architecture READMEs, component prop matrices, CMS schema definitions, and local development environment setup guides.',
      },
      {
        id: 'd4',
        title: 'Performance & Accessibility Audit Report',
        description:
          'Verified Lighthouse 95+ scores, WCAG 2.1 AA accessibility checklists, and cross-browser physical device verification records.',
      },
    ],
  },

  comparison: {
    eyebrow: 'CAPACITY MODEL COMPARISON',
    title: 'Why Agencies Choose a Dedicated Engineering Partner',
    description:
      'Compare our white-label partnership model against freelance gig platforms and permanent internal engineering payroll.',
    models: [
      {
        id: 'nww',
        name: 'Next Web Works Partner',
        badge: 'Recommended',
        points: [
          'Fixed-scope quote in 24h with zero rate surprises',
          'Direct principal engineer access on every sprint',
          '14-day post-launch defect fix warranty included',
          'Zero payroll drag or unbillable bench overhead',
        ],
      },
      {
        id: 'freelance',
        name: 'Freelance Platforms',
        badge: 'High Friction',
        points: [
          'Unpredictable availability and mid-sprint churn',
          'Varied code quality and inconsistent styling patterns',
          'No post-launch defect warranty or SLA accountability',
          'Frequent communication lag across multiple timezones',
        ],
      },
      {
        id: 'inhouse',
        name: 'Permanent In-House Payroll',
        badge: 'High Overhead',
        points: [
          'Substantial fixed payroll, benefits, and equity costs',
          'Unbillable payroll drag during slow client quarters',
          'Extensive hiring timelines and expensive recruiters',
          'Limited tech stack diversity within a single hire',
        ],
      },
    ],
  },

  faqs: {
    sectionId: 'services-faqs',
    eyebrow: 'TECHNICAL SPECIFICATIONS FAQ',
    title: 'Answers to Architecture & Platform Questions',
    description: 'Guidance on stack selection, performance guarantees, and integration workflows.',
    items: [
      {
        question: 'How do you decide between Next.js, WordPress, and Webflow for a build?',
        answer:
          'Stack selection depends entirely on your client editorial workflow and data requirements. We recommend Next.js App Router for dynamic web applications, high-density portals, and sub-second TTFB targets. For marketing sites requiring client content autonomy, we recommend headless CMS setups, clean custom WordPress themes with custom Gutenberg blocks, or Webflow CMS with tailored custom code embeds.',
      },
      {
        question: 'Do you build responsive mobile apps for both iOS and Android?',
        answer:
          'Yes. We build cross-platform mobile apps using React Native and TypeScript from a single shared codebase. This approach delivers authentic native performance across iOS and Android while dramatically reducing development timelines and ongoing maintenance overhead for your client accounts.',
      },
      {
        question: 'How do you handle database migrations and data security in web apps?',
        answer:
          'We utilize structured migration tooling such as Prisma ORM for relational PostgreSQL databases and versioned Mongoose schemas for MongoDB. All sensitive data is protected using encrypted environment secrets, prepared statements, and role-based access route guards to eliminate SQL and NoSQL injection risks.',
      },
      {
        question: 'Can you take over an existing legacy codebase from another developer?',
        answer:
          'Yes, subject to a technical feasibility review. We inspect the repository, audit dependencies, assess code quality, and provide an honest assessment of whether the codebase can be reliably maintained or if specific modules require refactoring before expanding features.',
      },
      {
        question: 'What performance metrics do you guarantee for website frontends?',
        answer:
          'Every website build is engineered to meet strict Core Web Vitals standards: Largest Contentful Paint under 2.5 seconds, Cumulative Layout Shift under 0.1, and high-contrast WCAG 2.1 AA accessibility compliance across both mobile and desktop viewports before code handover.',
      },
    ],
  },

  ctaBanner: {
    sectionId: 'services-cta',
    badge: 'Platform Engineering Bench',
    title: 'Review Your Client Architecture With an Engineer',
    description:
      'Schedule a 30-minute scoping call directly with Devansh. We will evaluate technical requirements, recommend the optimal stack, and quote within 24 hours.',
    primaryButton: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    footnote: 'Strict NDA protection · Direct repository access · 24h technical quotes',
  },

  contactForm: {
    sectionId: 'services-contact-form',
    eyebrow: 'Technical Scoping Inquiry',
    leadIn: 'Submit an Architecture Brief for Quotation',
    description:
      'Send your client requirements, Figma designs, and preferred stack. We will review the technical constraints under mutual NDA and deliver a fixed quote in 24 hours.',
  },

  stackMatrix: [
    { category: 'CMS Platforms', items: ['WordPress Custom Themes', 'Webflow Enterprise', 'NWW Headless Kit', 'Shopify Liquid'] },
    { category: 'Modern Web & SaaS', items: ['Next.js 16 App Router', 'React 19 Server Components', 'Node.js Microservices', 'PHP Laravel'] },
    { category: 'Native Mobile', items: ['React Native Expo', 'TypeScript Shared Engine', 'iOS & Android Release'] },
    { category: 'Cloud Staging & Edge', items: ['Vercel Enterprise', 'AWS Cloud Infrastructure', 'Edge Caching CDN', 'Cloudflare Proxy'] },
  ],

  drawers: [
    {
      id: 'websites',
      title: 'High-Performance Marketing Websites',
      tag: 'Custom Themes · CMS Collections · SSR',
      summary:
        'Figma-accurate frontend engineering delivering sub-second paint targets, WCAG 2.1 AA accessibility, and structured editorial schemas.',
      specs: [
        'Component-driven frontends matching Figma mockups with 1px precision',
        'Engineered to guarantee sub-second LCP and green Core Web Vitals',
        'Intuitive visual editors or headless CMS custom field groups',
        'Semantic schema tags, dynamic sitemaps, and technical SEO structure',
      ],
      ctaText: 'Scope marketing build',
    },
    {
      id: 'web-apps',
      title: 'Custom Web Applications & Portals',
      tag: 'Full-Stack Architecture · REST & GraphQL',
      summary:
        'Full-stack application engineering with React Server Components, transactional database schemas, and enterprise role-based security.',
      specs: [
        'Server-rendered Next.js architectures with low TTFB streaming',
        'Role-based access controls, tenant isolation, and audit histories',
        'Idempotent webhook consumers and third-party API sync engines',
        'Automated branch test suites and structured runtime observability',
      ],
      ctaText: 'Scope web application',
    },
    {
      id: 'erps',
      title: 'Operations & Business ERPs',
      tag: 'Custom Node & SQL Engine · Vector PDF',
      summary:
        'Operational business software featuring row-level atomic FIFO depletion, dynamic multi-tier tax engines, and vector PDF streaming.',
      specs: [
        'Deterministic FIFO stock deduction with rollback safeguards',
        'Automated CGST, SGST, and IGST tax calculation matrices',
        'High-fidelity server-side vector PDF invoice streaming',
        'Granular user permission matrices with immutable event logs',
      ],
      ctaText: 'Scope custom ERP',
    },
    {
      id: 'mobile-apps',
      title: 'Cross-Platform Mobile Applications',
      tag: 'React Native Core · Expo EAS',
      summary:
        'Cross-platform mobile applications engineered in React Native with offline data caching, native device sensors, and app store release management.',
      specs: [
        'Unified React Native and Expo codebase targeting iOS and Android',
        'Direct device hardware integration for camera, geo, and biometrics',
        'Reliable push messaging via Apple APNs and Firebase Cloud services',
        'Store submission management across Apple App Store and Google Play',
      ],
      ctaText: 'Scope mobile build',
    },
    {
      id: 'cms-platforms',
      title: 'Agency CMS & No-Code Platforms',
      tag: 'Gutenberg Blocks · Webflow Systems',
      summary:
        'Modular Gutenberg block themes and structured Webflow CMS collections built without third-party page builders for complete client autonomy.',
      specs: [
        'Custom Gutenberg blocks engineered without bulky third-party builders',
        'Webflow CMS architectures with custom code embeds and interactions',
        'Step-by-step editor handbooks and video walkthrough documentation',
        'Fully unbranded delivery packages ready for immediate agency handover',
      ],
      ctaText: 'Scope CMS build',
    },
  ],
};

export const serviceDetailContent = {
  websites: {
    ctaBanner: {
      badge: 'Marketing Web Architecture',
      title: 'Have a High-Stakes Marketing Website Brief Ready for Code?',
      description:
        'Let’s review your Figma designs, layout requirements, and performance targets. We provide milestone schedules and fixed-scope delivery proposals within 24 hours.',
      primaryButton: { text: 'Scope Your Marketing Website', href: '/book-a-call' },
      footnote: 'Pixel-perfect accuracy · Sub-second load times · Complete editorial autonomy',
    },
    contactForm: {
      eyebrow: 'Marketing Site Scoping',
      leadIn: 'Scope Your Next High-Performance Marketing Build',
      description:
        'Send us your Figma files, brand guidelines, or target launch deadline. Our engineering team will review technical feasibility and confirm milestone delivery.',
    },
    faqs: {
      eyebrow: 'Marketing Web FAQ',
      title: 'High-Performance Marketing Website Engineering',
      description: 'Frequently asked questions about design fidelity, Core Web Vitals, and client CMS autonomy.',
      items: [
        {
          question: 'How do you translate Figma mockups into production-ready frontends without visual drift?',
          answer:
            'Our engineering workflow inspects design tokens, grid hierarchies, typography scales, and responsive breakpoints directly from your Figma files. Every layout is audited side-by-side against design specs at standard viewports to ensure pixel-perfect fidelity.',
        },
        {
          question: 'What specific strategies do you use to guarantee green Core Web Vitals?',
          answer:
            'We implement strict image dimension attributes, modern image compression formats, server component data fetching, critical CSS inlining, font subsetting, and dynamic asset preloading to prevent cumulative layout shift and keep Largest Contentful Paint well under 1.5 seconds.',
        },
        {
          question: 'Can our clients easily update content without breaking responsive layouts?',
          answer:
            'Yes. We configure intuitive visual editing interfaces or structured headless schema models with strict input constraints. Marketing editors can effortlessly update copy, hero banners, and media assets without risking layout regression or broken responsive styles.',
        },
        {
          question: 'Do your marketing website builds adhere to global accessibility standards?',
          answer:
            'Every site is engineered against WCAG 2.1 AA benchmarks. We enforce semantic HTML5 landmarks, keyboard navigation tab orders, accessible color contrast ratios, screen reader aria attributes, and reduced-motion user preferences across all interactive elements.',
        },
        {
          question: 'How do you handle custom SVG animations and interactive scroll effects?',
          answer:
            'We build fluid animations using GSAP and Lenis smooth scrolling, keeping motion synchronized to refresh tickers while isolating transform calculations off the main thread to preserve 60 frames-per-second performance across mobile and desktop devices.',
        },
      ],
    },
  },

  'web-apps': {
    ctaBanner: {
      badge: 'Full-Stack Web App Engineering',
      title: 'Ready to Architect a Resilient Web Application or Portal?',
      description:
        'From complex dashboard workflows to multi-tenant SaaS MVPs, we turn wireframes into hardened production software. Connect with our engineering lead for a deep technical review.',
      primaryButton: { text: 'Discuss Your Web Application', href: '/book-a-call' },
      footnote: 'Full TypeScript architecture · End-to-end data validation · Production-ready RBAC',
    },
    contactForm: {
      eyebrow: 'Web App Project Brief',
      leadIn: 'Request Architecture Scoping for Your Custom Application',
      description:
        'Submit your software specification, database schema requirements, or API documentation. We analyze concurrency, auth models, and integration points to return a detailed engineering blueprint.',
    },
    faqs: {
      eyebrow: 'Web Application FAQ',
      title: 'Custom Web Applications & Portal Engineering',
      description: 'Frequently asked questions regarding database architecture, security guards, and API sync engines.',
      items: [
        {
          question: 'How do you structure database models and state management for complex SaaS applications?',
          answer:
            'We design normalized relational database schemas with atomic transactional guarantees, pairing server-side query caching with optimistic UI state management to deliver instant client interactions while preventing dirty reads or concurrent data write conflicts.',
        },
        {
          question: 'What security protocols and role-based access control models do you implement?',
          answer:
            'We engineer granular role-based permissions, multi-factor authentication, encrypted session handling, CSRF protection, and parameterized database queries. Every sensitive mutation passes through server-side authorization guards to prevent privilege escalation.',
        },
        {
          question: 'Can your team build custom webhook pipelines and third-party API sync engines?',
          answer:
            'Yes. We build idempotent webhook listeners, queue-backed background workers, automated retry logic with exponential backoff, and bidirectional synchronization engines for external platforms including payment gateways, accounting systems, and marketing CRMs.',
        },
        {
          question: 'How do you handle real-time data streaming and live dashboard updates?',
          answer:
            'We deploy server-sent events or WebSocket connections integrated with lightweight pub/sub message brokers. Data feeds stream directly to frontend dashboard tables and analytical charts with minimal network overhead and zero polling latency.',
        },
        {
          question: 'What automated testing and telemetry practices accompany application deliveries?',
          answer:
            'Our production builds incorporate unit and integration test coverage for mission-critical business logic, paired with distributed error monitoring, structured application logging, and health-check endpoints to alert engineering teams to anomalies instantly.',
        },
      ],
    },
  },

  erps: {
    ctaBanner: {
      badge: 'Custom Enterprise ERP Engine',
      title: 'Scale Operational Complexity With a Custom Enterprise Engine',
      description:
        'Replace fragmented spreadsheets and legacy off-the-shelf software with an ERP tailored specifically to your manufacturing, trading, or distribution workflows. Book a consultative architecture session.',
      primaryButton: { text: 'Consult With an ERP Architect', href: '/book-a-call' },
      footnote: 'Atomic FIFO calculations · Multi-tier tax engines · Server-side document generation',
    },
    contactForm: {
      eyebrow: 'Enterprise ERP Consultation',
      leadIn: 'Describe Your Operational Workflow & ERP Requirements',
      description:
        'Whether handling multi-warehouse inventories, automated GST invoicing, or custom procurement approval chains, share your operational bottleneck with our technical team.',
    },
    faqs: {
      eyebrow: 'Enterprise ERP FAQ',
      title: 'Operations & Business ERP Architecture',
      description: 'Frequently asked questions on inventory depletion math, tax engine compliance, and ledger audits.',
      items: [
        {
          question: 'How does your ERP engine ensure atomic FIFO inventory depletion accuracy?',
          answer:
            'Every stock movement executes inside database transactions that lock inventory batch rows, compute remaining quantities strictly in chronological receipt order, and record immutable audit logs, guaranteeing zero negative stock balances and mathematically precise cost-of-goods accounting.',
        },
        {
          question: 'Can your platform support complex multi-tier tax computations like CGST, SGST, and IGST?',
          answer:
            'Yes. Our tax engine evaluates customer jurisdiction, inter-state classification, product HSN/SAC codes, and reverse-charge rules dynamically at line-item levels, generating compliant invoice totals and automated tax breakdown reports for reliable accounting reconciliation.',
        },
        {
          question: 'How are high-volume, multi-page vector PDF invoices and receipts generated?',
          answer:
            'We employ headless server-side rendering pipelines that stream vector PDF documents directly from memory into secure cloud storage. Documents render pixel-perfect company headers, itemized tabular data, and dynamic QR payment codes in milliseconds.',
        },
        {
          question: 'What safeguards protect sensitive financial records and inventory audit trails?',
          answer:
            'We apply immutable append-only ledger patterns to all journal entries, financial adjustments, and stock transfers. Historical records cannot be silently overwritten or deleted, ensuring complete traceability during internal audits and external statutory inspections.',
        },
        {
          question: 'Can the custom ERP integrate with existing legacy databases or barcode scanning hardware?',
          answer:
            'Yes. We engineer customized ETL import pipelines for historical legacy data and build progressive web app interfaces that communicate directly with handheld bluetooth barcode scanners, enabling rapid stock counts directly on warehouse floors.',
        },
      ],
    },
  },

  'mobile-apps': {
    ctaBanner: {
      badge: 'Native Mobile Engineering',
      title: 'Ship High-Performance iOS & Android Apps From One Codebase',
      description:
        'Deliver fluid 60fps mobile experiences without doubling engineering overhead. We architect cross-platform React Native and Expo applications ready for enterprise app store distribution.',
      primaryButton: { text: 'Plan Your Mobile Application', href: '/book-a-call' },
      footnote: 'Unified TypeScript code · Native hardware access · App Store & Play Store approval',
    },
    contactForm: {
      eyebrow: 'Mobile App Project Intake',
      leadIn: 'Outline Your Cross-Platform Mobile Application Vision',
      description:
        'Have wireframes, feature lists, or existing backend endpoints for an iOS or Android app? Submit your requirements for a comprehensive platform feasibility review.',
    },
    faqs: {
      eyebrow: 'Cross-Platform Mobile FAQ',
      title: 'Mobile Application Architecture & Deployment',
      description: 'Frequently asked questions covering native performance, hardware APIs, and App Store releases.',
      items: [
        {
          question: 'How does a cross-platform React Native app compare to native Swift and Kotlin code?',
          answer:
            'By compiling to native view hierarchies and utilizing native UI thread bridging, modern React Native applications deliver identical 60fps scrolling, fluid gestures, and native ergonomics while sharing over 90% of business logic across iOS and Android.',
        },
        {
          question: 'How do you handle offline storage, data caching, and background synchronization?',
          answer:
            'We implement encrypted SQLite local databases and queue-based sync managers. When users lose connectivity, the app operates uninterrupted and automatically replays pending mutations in strict transactional order once network access is restored.',
        },
        {
          question: 'Can the mobile app interface directly with native device hardware and biometric sensors?',
          answer:
            'Yes. We configure native device modules to access camera hardware for image capture and barcode scanning, GPS geolocation services for precise mapping, and FaceID or biometric authentication for secure instant login.',
        },
        {
          question: 'What is your process for managing Apple App Store and Google Play Store submissions?',
          answer:
            'We manage provisioning profiles, certificates, app privacy manifests, privacy nutrition labels, and screenshot compliance across both platforms, guiding builds through Apple App Review and Google Play Console automated review gates until approved.',
        },
        {
          question: 'How are remote push notifications and deep linking architectures implemented?',
          answer:
            'We integrate Apple Push Notification service and Firebase Cloud Messaging with server-side notification routers. Deep links are mapped to application router routes, allowing push taps to navigate users directly into specific conversation threads or order screens.',
        },
      ],
    },
  },

  'cms-platforms': {
    ctaBanner: {
      badge: 'Agency CMS Development',
      title: 'Give Your Marketing Clients Intuitive Content Autonomy',
      description:
        'Eliminate client friction with clean, modular CMS builds across WordPress, Webflow, and Headless architectures. Zero bloated plugins, zero fragile page builders, and turnkey agency handover.',
      primaryButton: { text: 'Discuss CMS Development', href: '/book-a-call' },
      footnote: 'Clean Gutenberg blocks · Modular Webflow CMS · Zero plugin bloat',
    },
    contactForm: {
      eyebrow: 'CMS Development Scoping',
      leadIn: 'Partner on Agency CMS & Visual Site Implementations',
      description:
        'Need an experienced dev partner to build custom WordPress themes, Webflow collections, or Shopify storefronts for your clients? Share your project details below.',
    },
    faqs: {
      eyebrow: 'Agency CMS & No-Code FAQ',
      title: 'Custom CMS Themes & Visual Platform Engineering',
      description: 'Frequently asked questions regarding Gutenberg block themes, Webflow collections, and security.',
      items: [
        {
          question: 'Why do you engineer custom WordPress themes instead of using commercial builders like Elementor?',
          answer:
            'Commercial builders inject hundreds of unneeded scripts, deeply nested DOM elements, and CSS bloat that degrade mobile performance. Custom Gutenberg block themes provide lightweight, semantic HTML that achieves perfect PageSpeed scores while giving clients an intuitive block-based editing experience.',
        },
        {
          question: 'How do you structure Webflow CMS collections for scalable client management?',
          answer:
            'We architect modular Webflow collections with standardized naming conventions, multi-reference relationships, and automated conditional visibility rules. This prevents layout breakage as content volumes scale and enables agency designers to easily restyle components globally.',
        },
        {
          question: 'Can you migrate legacy marketing websites into modern CMS platforms without losing search rankings?',
          answer:
            'Yes. We conduct complete URL mapping audits, preserve canonical link structures, recreate custom 301 redirect tables, and transfer all metadata descriptions, OpenGraph tags, and image alt attributes to safeguard existing search engine indexing throughout the migration.',
        },
        {
          question: 'How do you protect agency client WordPress installations against security vulnerabilities?',
          answer:
            'We minimize third-party plugin dependencies, enforce two-factor authentication, disable XML-RPC endpoints, implement automated daily database backups, and isolate staging environments with SSL encryption and strict server-level firewall policies.',
        },
        {
          question: 'What documentation and handover training do you provide for our agency’s editorial staff?',
          answer:
            'Every CMS build includes an asynchronous screen recording library and a concise digital editor guide explaining how to publish blog articles, configure promotional banners, and edit navigation structures without altering core stylesheets.',
        },
      ],
    },
  },
};

export const serviceSeoMeta = {
  websites: {
    title: 'Marketing Website Development',
    description:
      'Pixel-perfect Figma-to-code marketing websites built in WordPress, Webflow, and Next.js with sub-second page loads and turnkey agency handover.',
  },
  'web-apps': {
    title: 'Custom Web App Development',
    description:
      'Full-stack Next.js web applications, client portals, and multi-tenant SaaS tools built with React Server Components, RBAC, and verified delivery.',
  },
  erps: {
    title: 'Operations & ERP Development',
    description:
      'Proprietary business systems: atomic FIFO inventory allocations, multi-tier GST calculation engines, and server-side vector PDF invoice generation.',
  },
  'mobile-apps': {
    title: 'Mobile Application Development',
    description:
      'Native-feel iOS and Android mobile applications engineered from a single shared TypeScript codebase with offline sync, push notifications, and camera.',
  },
  'cms-platforms': {
    title: 'Agency CMS & No-Code Builds',
    description:
      'Custom WordPress themes, clean Gutenberg blocks, and advanced Webflow CMS builds delivered under your agency brand with zero third-party lock-in.',
  },
};


