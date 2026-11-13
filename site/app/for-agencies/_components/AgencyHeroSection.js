// section: agency-hero
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function AgencyHeroSection({ content }) {
  if (!content) return null;

  return (
    <section
      id="agency-hero"
      data-section="agency-hero"
      className="pt-12 pb-8 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {content.eyebrow}
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {content.description}
          </p>
        </MotionFadeIn>
      </div>
    </section>
  );
}

