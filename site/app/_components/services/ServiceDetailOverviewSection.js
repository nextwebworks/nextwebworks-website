// section: service-detail-overview
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const CAPABILITIES_BY_SERVICE = {
  websites: [
    { label: 'PRECISION', title: 'Figma-to-Code Fidelity', desc: 'Componentized implementations matching design specs with pixel-perfect responsive accuracy.' },
    { label: 'SPEED', title: 'Sub-Second Web Vitals', desc: 'Zero layout shift, font subsetting, and optimized media delivery for maximum search ranking.' },
    { label: 'AUTONOMY', title: 'Client Content Workflow', desc: 'Intuitive editorial controls allowing marketing teams to update copy without breaking layouts.' },
  ],
  'web-apps': [
    { label: 'ARCHITECTURE', title: 'React Server Components', desc: 'Instant data streaming, sub-second TTFB, and minimized client JavaScript bundle footprints.' },
    { label: 'SECURITY', title: 'Enterprise Access Control', desc: 'Granular role-based permissions, encrypted sessions, and hardened API mutation guards.' },
    { label: 'INTEGRATIONS', title: 'Custom API & Webhook Pipelines', desc: 'Idempotent event listeners and reliable bidirectional synchronization with external systems.' },
  ],
  erps: [
    { label: 'INVENTORY', title: 'Atomic FIFO Engine', desc: 'Row-level locking ensuring deterministic stock depletion without concurrent over-allocation.' },
    { label: 'TAXATION', title: 'Automated GST Engine', desc: 'Dynamic CGST, SGST, and IGST line-item evaluations with comprehensive financial audit ledgers.' },
    { label: 'REPORTING', title: 'Vector PDF Pipelines', desc: 'Headless server-side document generation rendering tax invoices and packing slips in milliseconds.' },
  ],
  'mobile-apps': [
    { label: 'CODEBASE', title: 'Shared TypeScript Core', desc: 'Single maintainable React Native codebase powering native experiences across iOS and Android.' },
    { label: 'HARDWARE', title: 'Native Sensor Integration', desc: 'Native camera capture, geolocation mapping, and biometric FaceID authentication.' },
    { label: 'DISTRIBUTION', title: 'App Store Submission Support', desc: 'Complete certificate signing, privacy manifest compliance, and store review management.' },
  ],
  'cms-platforms': [
    { label: 'BLOCK THEMES', title: 'Clean Gutenberg Blocks', desc: 'Lightweight WordPress theme architecture free from bloated visual page builder plugins.' },
    { label: 'WEBFLOW', title: 'Modular CMS Collections', desc: 'Structured collections with multi-reference relational architecture and global design systems.' },
    { label: 'HANDOVER', title: 'Async Video Documentation', desc: 'Concise training walkthroughs and documentation enabling smooth client editorial onboarding.' },
  ],
};

export default function ServiceDetailOverviewSection({ service }) {
  const highlights = CAPABILITIES_BY_SERVICE[service?.id] || [
    {
      label: 'CONFIDENTIALITY',
      title: '100% White-Label Engineering',
      desc: 'Delivered under your agency identity. Commits appear under developer handles with zero NWW branding or customer-facing watermarks.',
    },
    {
      label: 'ESTIMATION',
      title: 'Fixed-Price Milestone Scoping',
      desc: 'Scopes are locked against approved designs and functional specifications. Zero surprise invoices or runaway budget creep.',
    },
    {
      label: 'GUARANTEE',
      title: '14-Day Post-Launch Warranty',
      desc: 'Every production handover includes a two-week defect resolution window with scheduled check-ins on Day 7 and Day 14.',
    },
  ];

  return (
    <section
      id="service-detail-overview"
      data-section="service-detail-overview"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Delivery Scope
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {service?.title ? `${service.title} Architecture` : 'Engineered for Agency Client Success'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            {service?.summary || 'How we partner with your strategy and account teams to deliver high-margin client projects.'}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".overview-card"
          stagger={0.1}
          y={20}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="overview-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                {item.label}
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {item.desc}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
