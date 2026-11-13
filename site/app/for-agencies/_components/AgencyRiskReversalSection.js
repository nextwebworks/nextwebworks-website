// section: agency-risk-reversal
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function AgencyRiskReversalSection({ content }) {
  if (!content) return null;

  return (
    <section
      id="agency-risk-reversal"
      data-section="agency-risk-reversal"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {content.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {content.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".reversal-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {content.guarantees.map((item) => (
            <div
              key={item.id}
              className="reversal-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-7 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3"
            >
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>
              {item.linkText && item.linkHref && (
                <div className="pt-2">
                  <Link
                    href={item.linkHref}
                    className="font-mono text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {item.linkText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

