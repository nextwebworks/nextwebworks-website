// site/content/bookACall.js - Scoping call agenda, prep, guarantees, fallbacks, and written alternative

export const bookACallContent = {
  hero: {
    eyebrow: 'TECHNICAL SCOPING',
    title: 'Book a 30-Min Technical Scoping Call',
    description:
      'Schedule a direct scoping call with our lead developer. We review your client brief, confirm technical constraints, and deliver a fixed quote in 24 hours.',
  },

  agenda: {
    eyebrow: 'CALL AGENDA',
    title: 'What We Cover in 30 Minutes',
    description:
      "A structured, engineering-led conversation focused entirely on your client's technical requirements and project feasibility.",
    items: [
      {
        num: '01',
        title: 'Brief & Figma Architecture Review (10 Mins)',
        description:
          'We walk through your client brief, Figma screens, user flows, and core functionality to identify technical requirements and dependencies.',
      },
      {
        num: '02',
        title: 'Technical Feasibility & Stack Selection (10 Mins)',
        description:
          'We evaluate framework options (Next.js, WordPress, Webflow, React Native), assess database schemas, and identify third-party API integrations.',
      },
      {
        num: '03',
        title: 'Milestone Schedule & Quotation Parameters (10 Mins)',
        description:
          'We define milestone acceptance gates, target launch dates, and delivery expectations. Within 24 hours, you receive a binding fixed quote.',
      },
    ],
  },

  preparation: {
    eyebrow: 'PREPARATION CHECKLIST',
    title: 'How to Prepare for Your Scoping Session',
    description:
      'Having these items ready helps us deliver an accurate, binding quotation within 24 business hours.',
    items: [
      {
        title: 'Client Brief or Feature RFP',
        description:
          'A summary of project requirements, user roles, core workflows, and any existing client system constraints.',
      },
      {
        title: 'Figma Files or Design References',
        description:
          'Approved visual design links, wireframes, or reference website examples illustrating desired UI/UX patterns.',
      },
      {
        title: 'Target Launch Dates & Milestones',
        description:
          "Your client's expected delivery deadlines or marketing campaign launch milestones.",
      },
    ],
  },

  guarantee: {
    eyebrow: 'CONSULTATION GUARANTEE',
    title: 'Direct Engineering Conversation. Zero Sales Pitches.',
    description:
      'You speak directly with Devansh, the engineer who writes your code. No aggressive salespeople, no junior account managers, and no obligation.',
    commitments: [
      {
        id: 'g1',
        title: 'Honest Technical Assessment',
        desc: "If your client's timeline or stack is unfeasible, we tell you directly and recommend viable architectural alternatives.",
      },
      {
        id: 'g2',
        title: 'Zero Commercial Pressure',
        desc: 'We discuss scope, constraints, and delivery milestones. We never pressure your agency into contracts that do not fit your pipeline.',
      },
      {
        id: 'g3',
        title: 'Actionable Technical Advice',
        desc: 'Even if we do not end up working together, you leave the call with clear technical recommendations for your client project.',
      },
    ],
  },

  confidentiality: {
    eyebrow: 'CONFIDENTIALITY ASSURANCE',
    title: 'All Discussions Covered Under Mutual Non-Disclosure',
    description:
      'We treat your client briefs and proprietary agency concepts with complete confidentiality.',
    points: [
      {
        id: 'c1',
        title: 'Pre-Call Mutual NDA',
        desc: 'We routinely sign mutual non-disclosure agreements prior to call attendance if your agency policy requires signed documentation in advance.',
      },
      {
        id: 'c2',
        title: 'Protected Discussion Space',
        desc: 'Everything shared during scoping—from client names to budget parameters—remains strictly confidential within Next Web Works.',
        referenceText: 'View Full Confidentiality Terms →',
        referenceHref: '/for-agencies#confidentiality',
      },
    ],
  },

  fallbackChannels: {
    eyebrow: 'ALTERNATIVE CHANNELS',
    title: 'Need a Custom Time or Having Trouble With the Calendar?',
    description:
      'If the interactive calendar below does not load or you require a time outside our standard calendar slots, contact us directly.',
    channels: [
      {
        id: 'f1',
        title: 'Direct WhatsApp Message',
        description:
          'Send a direct message to +91 79999 34815 for rapid schedule coordination during business hours.',
        ctaText: 'Chat on WhatsApp →',
        ctaHref: 'https://wa.me/917999934815',
      },
      {
        id: 'f2',
        title: 'Direct Email Dispatch',
        description:
          'Email your brief directly to contact@nextwebworks.in or submit our 5-field agency form.',
        ctaText: 'Submit Written Brief →',
        ctaHref: '/contact',
      },
    ],
  },

  writtenAlternative: {
    badge: 'Async Brief Intake',
    title: 'Prefer to Send a Written Specification First?',
    description:
      'If you already have a detailed brief or RFP ready for review, submit it through our confidential intake desk. We evaluate specifications and quote within 24 hours.',
    primaryButton: { text: 'Send Dev Brief →', href: '/contact' },
    footnote: 'Itemized milestone quotes · Same-day mutual NDA · Strict confidentiality',
  },
};
