// section: blog-hero
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function BlogHeroSection() {
  return (
    <section
      id="blog-hero"
      data-section="blog-hero"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            AGENCY PLAYBOOKS
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Engineering Blog & Agency Dev Playbooks
          </h1>
          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            Tactical guides on agency development operations, fixed-price project scoping, and headless CMS architectures. Written for digital agency founders and technical leads.
          </p>
        </MotionFadeIn>
      </div>
    </section>
  );
}
