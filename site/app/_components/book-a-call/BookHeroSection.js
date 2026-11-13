// section: book-hero
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function BookHeroSection() {
  return (
    <section
      id="book-hero"
      data-section="book-hero"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <MotionFadeIn y={20}>
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Discovery Schedule
          </span>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Book a 30-Minute Technical Review
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            Direct scoping call with our founder & principal engineer. No sales pitches. We review your client briefs, confirm stack fit, and deliver a fixed-scope quotation within 24 hours.
          </p>
        </MotionFadeIn>
      </div>
    </section>
  );
}
