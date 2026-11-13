// section: work-hero
import Link from 'next/link';
import { SvgScene } from '@/lib/svg/index.js';
import { workContent } from '@/content/work.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import MotionTilt from '@/components/motion/MotionTilt.js';

export default function WorkHeroSection() {
  const content = workContent.hero;

  return (
    <section
      id="work-hero"
      data-section="work-hero"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Deliberate Anatomy */}
          <MotionFadeIn y={24} duration={0.8} className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              {content.eyebrow}
            </span>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl leading-tight">
              {content.title}
            </h1>

            <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] max-w-2xl">
              {content.description}
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <MotionMagnetic>
                <Link
                  href={content.ctaPrimary.href}
                  className="rounded-lg bg-[#2563EB] px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  {content.ctaPrimary.text} →
                </Link>
              </MotionMagnetic>
              <a
                href={content.ctaSecondary.href}
                className="rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-5 py-3 text-xs font-semibold text-slate-700 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-0.5"
              >
                {content.ctaSecondary.text}
              </a>
            </div>

            {/* Proof Pillar Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {content.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-3.5 text-xs transition-colors hover:border-[#2563EB]/40"
                >
                  <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#38BDF8] font-medium block">
                    {pillar.label}
                  </span>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {pillar.title}
                  </p>
                </div>
              ))}
            </div>
          </MotionFadeIn>

          {/* Right Column: Hero Preview SVG Scene with 3D Tilt */}
          <div className="lg:col-span-5">
            <MotionTilt
              maxTilt={10}
              className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-sm"
            >
              <SvgScene
                kind="work"
                category="Platform Architecture"
                slug="work-hero-preview"
                aspectRatio="16/10"
                ariaLabel="Next Web Works Deliverable Showcase Architecture"
              />
            </MotionTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
