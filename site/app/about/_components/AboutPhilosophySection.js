// section: about-s4-philosophy
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { aboutContent } from '@/content/about.js';

export default function AboutPhilosophySection({ content = aboutContent }) {
  const philosophy = content?.philosophy || aboutContent.philosophy;

  return (
    <section
      id="philosophy"
      data-section="about-s4-philosophy"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {philosophy.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {philosophy.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {philosophy.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".philosophy-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {philosophy.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="philosophy-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-7 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {pillar.referenceText && (
                <div className="pt-3 border-t border-slate-200 dark:border-[#1E293B]/60">
                  <Link
                    href={pillar.referenceHref}
                    className="text-[11px] font-medium text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {pillar.referenceText}
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
