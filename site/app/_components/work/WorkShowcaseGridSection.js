// section: work-showcase-grid
import Link from 'next/link';
import { SvgScene } from '@/lib/svg/index.js';
import { workContent } from '@/content/work.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import MotionTilt from '@/components/motion/MotionTilt.js';

export default function WorkShowcaseGridSection() {
  const { showcase } = workContent;

  return (
    <section
      id="work-showcase"
      data-section="work-showcase-grid"
      className="py-20 md:py-28 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {showcase.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {showcase.title}
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {showcase.description}
          </p>
        </MotionFadeIn>

        {/* Deliverables Grid with 3D Tilt Cards */}
        <MotionStagger
          itemSelector=".showcase-card"
          stagger={0.12}
          y={24}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {showcase.samples.map((sample) => (
            <article key={sample.id} className="showcase-card flex flex-col">
              <MotionTilt
                maxTilt={10}
                className="flex-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 md:p-8 shadow-xs transition-all hover:border-[#2563EB]/60 hover:shadow-md"
              >
                <div className="space-y-5">
                  {/* Deliverable SVG Schematic */}
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 dark:border-[#1E293B]/80">
                    <SvgScene
                      kind="work"
                      category={sample.title}
                      slug={sample.id}
                      aspectRatio="16/9"
                      ariaLabel={`${sample.title} System Schematic`}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] px-2.5 py-0.5 font-mono text-[10px] text-slate-600 dark:text-[#64748B]">
                        {sample.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                      <Link href={`/work/${sample.id}`} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] transition-colors">
                        {sample.title}
                      </Link>
                    </h3>
                    <p className="font-mono text-[11px] text-[#2563EB] dark:text-[#38BDF8] font-medium">
                      {sample.stack}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                      {sample.overview}
                    </p>
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1E293B]/60 text-xs text-slate-700 dark:text-[#E2E8F0]">
                    {sample.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-[#10B981] font-bold" aria-hidden="true">▪</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-[#1E293B]">
                  <Link
                    href={`/work/${sample.id}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline"
                  >
                    <span>{sample.ctaText || 'Explore case study'}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </MotionTilt>
            </article>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
