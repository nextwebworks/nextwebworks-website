// section: home-engineering-standards
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function HomeTechStackSection({ content }) {
  if (!content) return null;

  return (
    <section
      id="home-engineering-standards"
      data-section="home-engineering-standards"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {content.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {content.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".standard-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {content.standards.map((standard) => (
            <div
              key={standard.id}
              className="standard-card flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-7 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-md bg-[#2563EB]/10 px-2.5 py-1 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                    Standard
                  </span>
                  <span className="font-mono text-xs text-slate-400 dark:text-[#64748B]">
                    Production Verified
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                  {standard.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {standard.description}
                </p>
              </div>
            </div>
          ))}
        </MotionStagger>

        {content.cta && (
          <div className="mt-10">
            <Link
              href={content.cta.href}
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
            >
              {content.cta.text}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
