// site/content/forAgencies.js - Agency partnership models, NDA guarantees, and per-page CTA banner
// Adheres strictly to .agents/rules/copy-standards.md and .agents/rules/unique-content-per-page.md

export const forAgenciesContent = {
  hero: {
    eyebrow: 'AGENCY PARTNERSHIP',
    title: 'Scale Agency Margins Without Adding Payroll',
    description:
      'We operate as your dedicated white-label engineering team. Say yes to custom web applications, complex ERPs, and mobile builds with binding fixed-price quotes and zero overhead.',
  },

  margins: {
    eyebrow: 'MARGIN PROTECTION',
    title: 'Predictable Scoping Protects Agency Profitability',
    description:
      'Freelancer hourly overages and idle in-house developer salaries are the two primary causes of agency margin collapse.',
    pillars: [
      {
        id: 'p1',
        title: 'Binding Fixed-Price Quotations',
        desc: 'Every project is quoted on a binding milestone basis. When scope is locked, our price is locked. If a task takes longer to polish than anticipated, your agency margin remains completely protected.',
      },
      {
        id: 'p2',
        title: 'Zero Unbillable Payroll Drag',
        desc: 'During slow client quarters or between contract cycles, your agency incurs zero developer salary expenses. You scale engineering capacity up or down strictly in lockstep with client demand.',
      },
      {
        id: 'p3',
        title: 'Value-Based Agency Bundling',
        desc: 'Because our quotations are fixed and predictable, your account leads can bundle development into comprehensive client retainers and strategy packages, capturing substantial agency margin.',
      },
    ],
  },

  confidentiality: {
    eyebrow: 'CONFIDENTIALITY PROTOCOLS',
    title: 'Strict Mutual NDA & White-Label Discretion',
    description:
      'Your client relationships are your most valuable agency asset. We work silently behind your brand with zero public self-promotion.',
    points: [
      {
        id: 'c1',
        title: 'Mutual Non-Disclosure Agreement',
        desc: 'We sign a comprehensive mutual NDA before reviewing any client briefs, Figma links, or contract documents. Your client identities and project briefs remain confidential.',
      },
      {
        id: 'c2',
        title: 'Zero Public Credits or Watermarks',
        desc: 'We never add Next Web Works credits in footers, meta tags, or package manifests. We never publish your client projects to our portfolio without explicit, written agency permission.',
      },
      {
        id: 'c3',
        title: 'Flexible Commit Attribution',
        desc: 'By default, code commits are pushed under our senior engineering handles. If your agency requires total anonymity, we configure Git to author commits under your agency email domain.',
      },
    ],
  },

  sla: {
    eyebrow: 'COMMUNICATION & SLA',
    title: 'Direct Engineering Communication on Your Agency Terms',
    description:
      'We integrate into your agency preferred collaboration channels with clear business hours and rapid issue triage.',
    standards: [
      {
        id: 'hours',
        title: 'Standard Business & Triage Hours',
        description:
          'Our engineering operations run Monday through Friday, 10:00 AM to 7:00 PM IST. Critical blockers are typically evaluated within hours during active sprints; routine updates within one business day.',
      },
      {
        id: 'channels',
        title: 'Direct Slack or WhatsApp Channels',
        description:
          'We communicate directly with your project managers and creative directors via shared Slack channels, WhatsApp, or email, eliminating communication lag.',
      },
      {
        id: 'client-calls',
        title: 'Client Call Attendance as Technical Lead',
        description:
          'When complex technical questions arise during client pitches, we can join your client video calls introduced as your technical lead or senior developer to confirm constraints.',
      },
    ],
  },

  riskReversal: {
    eyebrow: 'RISK REVERSAL',
    title: 'Zero-Risk Delivery Backed by a 14-Day Defect Window',
    description:
      'We stand behind our production code. Every full build is protected by our post-launch warranty and structured milestone approvals.',
    guarantees: [
      {
        id: 'milestone',
        title: 'Milestone-Based Acceptance',
        description:
          'Work proceeds in transparent milestones. You review staging previews and verify acceptance criteria before signing off on milestone handovers.',
      },
      {
        id: 'warranty',
        title: '14-Day Post-Launch Defect Window',
        description:
          'Every full project build includes 14 calendar days of defect fixes covering code bugs against approved specs, with scheduled check-ins on Day 7 and Day 14.',
        linkText: 'Read Detailed Warranty Terms →',
        linkHref: '/about#warranty',
      },
      {
        id: 'changes',
        title: 'Written Change Orders for Scope Additions',
        description:
          'If your client requests new features mid-build, we provide a clear, itemized quote before any out-of-scope work begins. You never face surprise invoices.',
      },
    ],
  },

  faqs: {
    sectionId: 'agency-faqs',
    eyebrow: 'AGENCY PARTNERSHIP FAQ',
    title: 'Frequently Asked Questions by Agency Operators',
    description: 'Clear answers on non-solicitation, repository authorship, client communication, and capacity.',
    items: [
      {
        question: 'How do scope changes work if our client requests new features mid-sprint?',
        answer:
          'If your client introduces new requirements after the quotation is locked, we prepare a clear, written change request with an itemized estimate. No out-of-scope work proceeds until your agency approves the revised timeline and scope.',
      },
      {
        question: 'Can you handle urgent client deadlines or rush builds?',
        answer:
          'We accommodate urgent deadlines when our engineering schedule permits. Because we maintain lean operations with zero bureaucracy, we can evaluate specifications within 24 hours and often kick off active development on the same day.',
      },
      {
        question: 'What technologies do you prefer not to work with?',
        answer:
          'We focus on modern production stacks: Next.js, WordPress, Webflow, and React Native. We explicitly decline legacy PHP 5.x systems, outdated monolithic frameworks, proprietary closed builders like Wix, and native Swift/Kotlin-only mobile codebases.',
      },
      {
        question: 'How do payments and milestones work for project builds?',
        answer:
          'Projects are structured around clear deliverables and staging milestone approvals. Terms, milestone dates, and payment schedules are discussed and agreed upon directly during your discovery call, with zero hidden surprises or undisclosed fees.',
      },
      {
        question: 'How quickly can we start our first pilot build?',
        answer:
          'We can typically kick off within 24 to 48 hours of initial brief intake. Once we review your Figma files or project brief and execute a mutual NDA, we deliver a binding fixed quote and schedule sprint execution immediately.',
      },
    ],
  },

  ctaBanner: {
    sectionId: 'agency-cta',
    badge: 'Agency Capacity Expansion',
    title: 'Partner With an Engineering Lead Who Understands Agencies',
    description:
      'Schedule a 30-minute scoping call directly with Devansh. We will evaluate your current client pipeline and establish a reliable dev partnership.',
    primaryButton: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    footnote: 'Flexible sprint allocations · Dedicated monthly bench · Zero payroll liability',
  },

  contactForm: {
    sectionId: 'agency-contact-form',
    eyebrow: 'Agency Partnership Inquiry',
    leadIn: 'Send an Agency Dev Brief for 24-Hour Review',
    description:
      'Submit your upcoming client requirements or active RFP. We will review the brief under mutual NDA and deliver an itemized fixed-scope quote.',
  },
};
