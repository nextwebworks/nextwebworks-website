// site/content/about.js - Engineering philosophy, 4 principles, mission, operations, warranty, and per-page FAQ/CTA

export const aboutContent = {
  founder: {
    name: 'Devansh Khetwani',
    title: 'Founder & Lead Engineer',
    location: 'Indore, Madhya Pradesh, India',
    badge: 'DK · Lead Engineer',
    bio: 'Devansh is the Founder & Lead Engineer at Next Web Works, based in Indore, India. He partners directly with digital agencies to architect and ship custom Next.js web applications, headless CMS platforms, and ERPs behind their brand, eliminating payroll drag and delivery churn.',
    eyebrow: 'LEAD ENGINEER & FOUNDER',
    titleMain: "Engineering Craft Behind Your Agency's Brand",
    description:
      'Next Web Works was founded by Devansh Khetwani to solve a specific, expensive friction point: digital agencies winning complex contracts but losing sleep and margin to unreliable freelancers and bloated payroll.',
    paragraphs: [
      'We operate as your dedicated technical partner. When you pitch a custom web application, enterprise WordPress build, or React Native mobile platform, we review your specifications, verify technical constraints, and deliver the production code strictly under your brand.',
      'Operating from Indore, India, we maintain standard business hours (10:00 AM – 7:00 PM IST) and direct engineering communication. You always speak directly with the developer writing your code—never an account manager or junior intermediary.',
    ],
    cta: { text: 'Talk Directly With Devansh →', href: '/book-a-call' },
  },

  principles: [
    {
      number: '01',
      title: 'Strict White-Label Discretion',
      description:
        'Zero watermarks, zero public portfolio boasting, and zero client solicitation. We work silently behind your brand, or author commits under your agency email handles.',
    },
    {
      number: '02',
      title: 'Direct Senior Engineering Access',
      description:
        'No account managers, sales representatives, or junior hand-offs. You collaborate directly with the lead engineer who reviews your brief and writes your code.',
    },
    {
      number: '03',
      title: 'Zero Rate Surprises & Fixed Scopes',
      description:
        'We evaluate specifications thoroughly and quote fixed milestones within 24 hours. When scope is agreed upon, your price is locked with zero surprise charges.',
    },
    {
      number: '04',
      title: 'Complete Codebase Sovereignty',
      description:
        'We deliver full repository ownership directly to your agency with clear setup guides, automated CI/CD pipelines, and zero proprietary developer lock-in.',
      referenceText: 'View Handover Deliverables →',
      referenceHref: '/services#deliverables',
    },
  ],

  mission: {
    eyebrow: 'CONSULTANCY MISSION',
    title: 'Eliminating Technical Overhead for Growth Agencies',
    description:
      'Marketing agencies and creative studios should focus on strategy, client relationships, and creative design—not debugging server configurations.',
    pillars: [
      {
        id: 'm1',
        title: 'Enabling Confident Agency Pitches',
        description:
          'We enable agencies to pitch sophisticated web apps, custom portals, and mobile platforms without the fear of being unable to deliver.',
      },
      {
        id: 'm2',
        title: 'Protecting Agency Profitability',
        description:
          'We replace unbillable developer payroll and freelancer churn with predictable, milestone-based engineering execution.',
      },
      {
        id: 'm3',
        title: 'Delivering Sustainable Software',
        description:
          'We write clean, typed, documented code that client organizations can maintain and operate for years without technical bankruptcy.',
      },
    ],
  },

  philosophy: {
    eyebrow: 'ARCHITECTURE PHILOSOPHY',
    title: 'Clean Typed Architectures Over Framework Hype',
    description:
      'We choose proven, resilient engineering tools that solve real business problems rather than chasing fleeting developer trends.',
    pillars: [
      {
        id: 'ph1',
        title: 'Lean Dependencies & Zero Bloat',
        description:
          'Every third-party package introduced into a repository must justify its weight. We avoid dependency bloat that slows down page loads and creates security vulnerabilities.',
      },
      {
        id: 'ph2',
        title: 'Predictable Data Contracts',
        description:
          'Frontend and backend services communicate through explicit, typed data contracts. We validate data at system boundaries so that bugs are caught during development.',
      },
      {
        id: 'ph3',
        title: 'Deterministic Verification Before Delivery',
        description:
          'Code is verified against automated linter gates, accessibility standards, and physical device performance benchmarks before we request milestone review.',
        referenceText: 'View Verification Lab Standards →',
        referenceHref: '/work#verification',
      },
    ],
  },

  operations: {
    eyebrow: 'DAILY OPERATIONS',
    title: 'Transparent Collaboration on a Predictable Schedule',
    description:
      'Clear communication rhythms and transparent task tracking keep agency account managers in complete control of sprint timelines.',
    items: [
      {
        id: 'op1',
        title: 'Predictable Working Hours',
        description:
          'Operating Monday through Friday, 10:00 AM to 7:00 PM IST, providing solid working overlap with agencies across Europe, the Middle East, and Asia-Pacific.',
      },
      {
        id: 'op2',
        title: 'Asynchronous Task Visibility',
        description:
          'We provide regular sprint status updates, linking directly to staging preview URLs and transparent task checklists so account managers never have to guess progress.',
      },
      {
        id: 'op3',
        title: 'Direct Technical Triage',
        description:
          'When questions or scope clarifications arise, we resolve them quickly through shared agency channels, keeping project momentum high.',
      },
    ],
  },

  warranty: {
    eyebrow: 'POST-LAUNCH WARRANTY',
    title: '14-Day Post-Launch Defect Warranty on Every Full Build',
    description:
      'We own our work until your account team and client are completely satisfied. Every full project build includes an active 14-day fix window.',
    checkpoints: [
      {
        step: 'Check 01',
        title: 'Full Defect Coverage Against Approved Specs',
        description:
          'During the 14 calendar days following client staging sign-off, we resolve any code defects, layout misalignments, or functional bugs against approved specifications promptly at zero additional cost.',
      },
      {
        step: 'Check 02',
        title: 'Scheduled Day 7 and Day 14 Check-Ins',
        description:
          'We schedule proactive check-ins at Day 7 and Day 14 post-launch to review real-world telemetry, address client feedback, and ensure smooth operational handover.',
      },
      {
        step: 'Check 03',
        title: 'Clear Boundary Definitions',
        description:
          'The warranty covers code bugs and defects against signed specifications. It excludes new feature requests, client content copy additions, and external third-party platform API disruptions.',
      },
    ],
  },

  faqs: {
    sectionId: 'about-faqs',
    eyebrow: 'Engineering Team FAQ',
    title: 'About Next Web Works & Founder Operations FAQs',
    description:
      'Direct answers about our operations, location in Indore, time zone coverage, and engineering standards.',
    items: [
      {
        question: 'Where is Next Web Works legally registered and operated?',
        answer:
          'Next Web Works is legally registered as a sole proprietorship founded by Devansh Khetwani in Indore, Madhya Pradesh, India. We operate from Indore and partner remotely with digital marketing agencies and creative studios globally.',
      },
      {
        question: 'Do you outsource development to junior subcontractors or offshore agencies?',
        answer:
          'No. Every project is architected, developed, and verified directly by our lead engineer, Devansh. We do not pass your client work down to junior developers or third-party offshore subcontractors.',
      },
      {
        question: 'How do you handle client discovery calls across different time zones?',
        answer:
          'We accommodate discovery and technical scoping calls within our standard business hours (10:00 AM – 7:00 PM IST) and can schedule morning or evening slots to accommodate European, Australian, or US agency time zones.',
      },
      {
        question: "Can you sign our agency's standard mutual NDA and master services agreement?",
        answer:
          'Yes. We routinely review and execute agency-provided mutual non-disclosure agreements and master services agreements prior to reviewing client briefs, Figma design libraries, or proprietary project documentation.',
      },
      {
        question: 'What happens after the 14-day post-launch warranty window concludes?',
        answer:
          'At the conclusion of the 14-day defect window on Day 14, we perform a formal sign-off. Agencies can either take full ownership of the codebase or transition into our optional monthly dedicated dev bench for ongoing feature updates.',
      },
    ],
  },

  ctaBanner: {
    sectionId: 'about-cta',
    badge: 'Direct Engineering Access',
    title: 'Talk Directly With Our Lead Engineer',
    description:
      'Schedule a 30-minute scoping call directly with Devansh. We will discuss your client pipeline, evaluate technical feasibility, and quote within 24 hours.',
    primaryButton: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    footnote: 'Direct 1-on-1 engineering dialogue · No sales pitch · Strict mutual NDA',
  },

  contactForm: {
    sectionId: 'about-contact-form',
    eyebrow: 'Direct Technical Inquiry',
    leadIn: 'Send Devansh a Note About Your Agency',
    description:
      'Have a question about how we collaborate or want to review an upcoming client RFP? Send a message directly to our engineering desk.',
  },
};
