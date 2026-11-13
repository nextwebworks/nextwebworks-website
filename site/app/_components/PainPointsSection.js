// section: home-s2-pain-points
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function PainPointsSection({ content }) {
  return (
    <section
      id="home-s2-pain-points"
      data-section="home-s2-pain-points"
      className="py-20 md:py-28 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionFadeIn y={20} className="max-w-3xl space-y-4">
          <p className="text-xs font-mono tracking-wider uppercase text-[#10B981] font-semibold">
            {content.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {content.description}
          </p>
        </MotionFadeIn>

        {/* 3-Column Pain-Point Cards with Staggered Entrance */}
        <MotionStagger
          itemSelector=".pain-card"
          stagger={0.12}
          y={28}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {content.cards.map((card, idx) => (
            <div
              key={card.title}
              className="pain-card group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-7 transition-all duration-200 hover:border-[#2563EB]/60 hover:-translate-y-1 shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-[#64748B]">
                    0{idx + 1} {'//'} {card.tag}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#EF4444]/70" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#1E293B]/80 text-xs font-mono text-slate-500 dark:text-[#64748B]">
                {card.risk || 'Risk Factor: Margin Erosion'}
              </div>
            </div>
          ))}
        </MotionStagger>

        {/* CTA after pain-point cards */}
        <div className="mt-12 flex justify-start">
          <Link
            href={content.cta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded py-1"
          >
            <span>{content.cta.text}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
