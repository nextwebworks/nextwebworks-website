// section: service-detail-specs
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const SPECS_HEADER_BY_SERVICE = {
  websites: {
    title: 'Frontend & Web Vitals Benchmarks',
    desc: 'Engineered for sub-second paint targets, zero layout shifts, and client editorial autonomy.',
  },
  'web-apps': {
    title: 'Application Architecture & Security Standards',
    desc: 'Built with React Server Components, transactional schemas, and hardened RBAC authorization guards.',
  },
  erps: {
    title: 'Operational Integrity & Tax Specifications',
    desc: 'Enforcing atomic FIFO calculations, multi-tier GST compliance, and server-side vector PDF exports.',
  },
  'mobile-apps': {
    title: 'Cross-Platform Mobile Specifications',
    desc: 'Native 60fps performance, hardware sensor bridging, and automated store submission compliance.',
  },
  'cms-platforms': {
    title: 'CMS Architecture & Governance Standards',
    desc: 'Lightweight Gutenberg themes, modular Webflow collections, and clean agency handover documentation.',
  },
};

export default function ServiceDetailSpecsSection({ service }) {
  const headerInfo = SPECS_HEADER_BY_SERVICE[service?.id] || {
    title: `${service?.title || 'Platform'} Specifications`,
    desc: 'Every line of code is held to strict agency delivery benchmarks.',
  };

  const specs = service.specs || [
    'Clean componentized code matching Figma 1:1 down to 1px precision',
    'Core Web Vitals optimized with zero layout shift and sub-second paint targets',
    'Client-friendly visual editors or headless CMS custom field groups',
    'Structured data schema, OpenGraph, dynamic sitemaps, and technical SEO',
  ];

  return (
    <section
      id="service-detail-specs"
      data-section="service-detail-specs"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Quality Constraints
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {headerInfo.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            {headerInfo.desc}
          </p>
        </MotionFadeIn>

        <div className="mt-8 rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-8">
          <MotionStagger
            itemSelector=".spec-item"
            stagger={0.06}
            y={12}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {specs.map((spec) => (
              <li
                key={spec}
                className="spec-item flex items-start gap-3 rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] p-4 text-xs text-slate-800 dark:text-[#E2E8F0] hover:border-[#2563EB]/40 transition-colors list-none"
              >
                <span className="text-[#10B981] font-bold text-sm" aria-hidden="true">✓</span>
                <span className="leading-relaxed">{spec}</span>
              </li>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
