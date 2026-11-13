// section: work-detail-overview
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const PILLARS_BY_WORK = {
  'nww-cms-kit': [
    { label: 'CACHE REVALIDATION', title: 'Edge-Tag Invalidation', desc: 'Instantaneous webhook-driven cache purges targeting granular model tags.' },
    { label: 'CLIENT SDK', title: 'Class Encapsulation', desc: 'Typed query normalization with isolated error handling and zero REST leaks.' },
    { label: 'SEO & METRICS', title: 'Structured JSON-LD', desc: 'Automated breadcrumb and article schema generation embedded at build time.' },
  ],
  classymenu: [
    { label: 'CONCURRENCY', title: 'Real-Time Table Sync', desc: 'Optimistic UI updates synchronized across all diners sharing a table session.' },
    { label: 'CONVERSION', title: 'WhatsApp Direct Bridge', desc: 'Frictionless ordering flow routing structured payloads directly to kitchen staff.' },
    { label: 'ASSET PIPELINE', title: 'Next-Gen Responsive Media', desc: 'Sub-second catalog browsing and 60fps scrolling across thousands of menu items.' },
  ],
  ceramicsales: [
    { label: 'WAREHOUSE FIFO', title: 'Atomic Inventory Locks', desc: 'Row-level database locks preventing duplicate allocations during peak wholesale checkout.' },
    { label: 'TAX ENGINE', title: 'Automated GST Calculation', desc: 'Dynamic CGST, SGST, and IGST line-item evaluations with complete audit ledgers.' },
    { label: 'DOCUMENT PIPELINE', title: 'Server-Side Vector PDFs', desc: 'Instant memory-streamed tax invoices and delivery challans with barcode verification.' },
  ],
};

export default function WorkDetailOverviewSection({ work }) {
  const highlights = PILLARS_BY_WORK[work?.id] || [
    {
      label: 'ARCHITECTURE',
      title: `${work?.title || 'System'} Architecture`,
      desc: 'Engineered for sub-second page performance, zero layout shifts, and multi-tenant isolation.',
    },
    {
      label: 'DATA INTEGRITY',
      title: 'Atomic Transaction Pipelines',
      desc: 'Robust schema designs and API workflows with automated rollbacks and deterministic consistency.',
    },
    {
      label: 'HANDOFF',
      title: 'Full Repository Transfer',
      desc: 'Clean, documented code pushed directly to client repositories with zero proprietary dependencies.',
    },
  ];

  return (
    <section
      id="work-detail-overview"
      data-section="work-detail-overview"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Engineering Scope
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {work?.title ? `${work.title} Architecture` : 'Platform Capabilities & Implementation'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            {work?.overview || 'Architectural breakdown of technical requirements, integrations, and production standards.'}
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
