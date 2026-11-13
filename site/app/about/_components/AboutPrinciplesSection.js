// section: about-s2-principles
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { aboutContent } from '@/content/about.js';

export default function AboutPrinciplesSection({ content = aboutContent }) {
  const principles = content?.principles || aboutContent.principles;

  return (
    <section
      id="principles"
      data-section="about-s2-principles"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-[#1E293B]/60 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            CORE COMMITMENTS
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Four Engineering Principles Behind Your Brand
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            We do not compromise on code hygiene, delivery transparency, or agency discretion.
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".principle-card"
          stagger={0.08}
          y={20}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="principle-card flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs transition-colors hover:-translate-y-0.5 hover:border-[#2563EB]/50"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                  {principle.number}
                </span>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                  {principle.description}
                </p>
              </div>

              {principle.referenceText && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#1E293B]/60">
                  <Link
                    href={principle.referenceHref}
                    className="text-[11px] font-medium text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {principle.referenceText}
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
