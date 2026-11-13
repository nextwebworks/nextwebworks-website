// section: contact-hero
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function ContactHeroSection() {
  return (
    <section
      id="contact-hero"
      data-section="contact-hero"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <MotionFadeIn y={20}>
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Direct Brief Submission
          </span>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Get a Fixed-Scope Quote in 24 Hours
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            Have an active client RFP, Figma design, or technical specification? Submit your details below for a confidential fixed quote within 24 business hours.
          </p>
        </MotionFadeIn>
      </div>
    </section>
  );
}
