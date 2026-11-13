// site/content/contact.js - Contact page scoping form copy, channels, brief checklist, SLA, and per-page CTA banner

export const contactContent = {
  hero: {
    eyebrow: 'SUBMIT A BRIEF',
    title: 'Send an Agency Dev Brief for 24-Hour Review',
    description:
      'Submit your client requirements, design links, and target timeline. We review specifications under mutual NDA and deliver an itemized fixed-scope quote in 24 hours.',
  },

  expectations: {
    eyebrow: 'TURNAROUND PROTOCOL',
    title: 'Binding Fixed Quotation Within 24 Business Hours',
    description:
      'We do not leave agency inquiries sitting in sales queues. Every brief is reviewed directly by our lead engineer.',
    items: [
      {
        id: 'e1',
        title: 'Rapid Technical Evaluation',
        description:
          'We inspect your user flows, database requirements, and Figma files within 24 business hours of submission.',
      },
      {
        id: 'e2',
        title: 'Itemized Scope Breakdown',
        description:
          'You receive an itemized milestone quotation outlining architecture specifications, deliverables, and exact timelines.',
      },
      {
        id: 'e3',
        title: 'Zero Obligation',
        description:
          'Reviewing our technical assessment carries zero commitment. You evaluate our proposal and decide if we fit your client pipeline.',
      },
    ],
  },

  channels: {
    eyebrow: 'DIRECT CHANNELS',
    title: 'Three Ways to Connect With Our Engineering Desk',
    description: "Reach out via your agency's preferred communication method.",
    items: [
      {
        id: 'ch1',
        title: 'Direct Email Dispatch',
        description:
          'Email your brief and files directly to contact@nextwebworks.in. We reply within 24 business hours.',
        ctaText: 'Email Engineering →',
        ctaHref: 'mailto:contact@nextwebworks.in',
      },
      {
        id: 'ch2',
        title: 'Direct WhatsApp Messaging',
        description:
          'Chat directly with Devansh on WhatsApp at +91 79999 34815 for rapid schedule checks and brief intake.',
        ctaText: 'Message on WhatsApp →',
        ctaHref: 'https://wa.me/917999934815',
      },
      {
        id: 'ch3',
        title: 'Live 30-Minute Scoping Call',
        description:
          'Prefer a live conversation? Schedule directly on our calendar.',
        ctaText: 'Book a 30-Min Call →',
        ctaHref: '/book-a-call',
      },
    ],
  },

  briefChecklist: {
    eyebrow: 'BRIEF CHECKLIST',
    title: 'What to Include in Your Project Brief',
    description:
      'Including these details enables our lead developer to quote your project with high accuracy.',
    items: [
      {
        id: 'b1',
        title: 'Core Workflows & User Roles',
        desc: 'Summarize what users do in the application (e.g. client portal, inventory depletion, public marketing).',
      },
      {
        id: 'b2',
        title: 'Design Availability & Tech Stacks',
        desc: 'Mention whether Figma designs are ready, in progress, or if your client requires a specific platform (Next.js, WordPress, Webflow, React Native).',
      },
      {
        id: 'b3',
        title: 'Target Launch Windows',
        desc: 'State your target delivery dates or client campaign milestones so we can verify scheduling availability.',
      },
    ],
  },

  security: {
    eyebrow: 'DATA SECURITY',
    title: 'Confidential Brief Evaluation Under Strict NDA',
    description:
      'We understand that client RFP documents and designs are highly confidential assets.',
    points: [
      {
        id: 's1',
        title: 'Mutual Non-Disclosure Protection',
        desc: 'All documents, schemas, and credentials submitted through this form are treated as strictly confidential under mutual NDA principles.',
      },
      {
        id: 's2',
        title: 'Isolated Storage & Zero Telemetry Sharing',
        desc: 'Brief details are sent securely to our direct engineering desk. We never share client specifications with third parties or advertising brokers.',
      },
    ],
  },

  sla: {
    eyebrow: 'BUSINESS HOURS & SLA',
    title: 'Operating Monday Through Friday, 10am–7pm IST',
    description:
      'Our engineering operations run on a structured business schedule to provide dependable support.',
    tiers: [
      {
        id: 'sla1',
        label: 'Response SLA',
        time: '24 Hours',
        title: 'Standard Response SLA',
        desc: 'Inbound briefs submitted during business hours are acknowledged promptly, with comprehensive technical quotations delivered within 24 business hours.',
      },
      {
        id: 'sla2',
        label: 'Time Zone',
        time: '10am–7pm IST',
        title: 'Time-Zone Coordination',
        desc: 'Operating from 10:00 AM to 7:00 PM IST provides strong working overlap with European, Middle Eastern, and Asian agency teams.',
        referenceText: 'View Agency SLA Standards →',
        referenceHref: '/for-agencies#sla',
      },
    ],
  },

  contactForm: {
    sectionId: 'contact-form',
    eyebrow: 'Direct Scoping Submission',
    leadIn: 'Send Your Project Specification',
    description:
      'Fill out the qualifying fields below. Our lead developer will evaluate the brief and reply within 24 hours.',
  },

  ctaBanner: {
    sectionId: 'contact-cta',
    badge: 'Direct Founder Connection',
    title: 'Prefer a Live Conversation?',
    description:
      'Skip the form and schedule a 30-minute scoping call directly with Devansh. We will review your brief in real time.',
    primaryButton: { text: 'Book a 30-Min Call', href: '/book-a-call' },
    footnote: 'Direct engineering desk · Same-day NDA turnaround · Zero agency fees',
  },
};
