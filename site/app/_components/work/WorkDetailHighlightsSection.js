// section: work-detail-highlights
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const HIGHLIGHTS_HEADER_BY_WORK = {
  'nww-cms-kit': {
    title: 'NWW CMS Kit Technical Highlights',
    desc: 'Key architectural components delivered in this incremental static regeneration engine.',
  },
  classymenu: {
    title: 'ClassyMenu Platform Highlights',
    desc: 'Core capabilities delivered in this multi-tenant real-time ordering and dining engine.',
  },
  ceramicsales: {
    title: 'CeramicSales Enterprise Highlights',
    desc: 'Mission-critical operational capabilities verified in this wholesale ERP portal deployment.',
  },
};

export default function WorkDetailHighlightsSection({ work }) {
  const headerInfo = HIGHLIGHTS_HEADER_BY_WORK[work?.id] || {
    title: `${work?.title || 'Deliverable'} Highlights`,
    desc: 'Key architectural components delivered in this production release.',
  };

  const highlights = work?.highlights || [
    'Sub-second page transitions and deterministic state synchronization',
    'Custom webhook pipelines and third-party API integration',
    'Full test coverage with zero layout shift on mobile and desktop viewports',
  ];

  return (
    <section
      id="work-detail-highlights"
      data-section="work-detail-highlights"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Deliverable Features
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
            itemSelector=".highlight-card"
            stagger={0.08}
            y={15}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {highlights.map((h) => (
              <li
                key={h}
                className="highlight-card flex flex-col justify-between rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] p-5 text-xs text-slate-800 dark:text-[#E2E8F0] space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/40 transition-all list-none"
              >
                <span className="text-[#10B981] font-bold text-base" aria-hidden="true">▪</span>
                <span className="leading-relaxed font-medium">{h}</span>
              </li>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
