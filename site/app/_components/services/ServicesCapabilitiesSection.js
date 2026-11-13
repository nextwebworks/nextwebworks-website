// section: services-capabilities
import Link from 'next/link';
import { SvgScene } from '@/lib/svg/index.js';
import { servicesContent } from '@/content/services.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function ServicesCapabilitiesSection() {
  const { capabilitiesHeader, drawers } = servicesContent;

  return (
    <section
      id="services-capabilities"
      data-section="services-capabilities"
      className="py-20 md:py-28 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {capabilitiesHeader.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {capabilitiesHeader.title}
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {capabilitiesHeader.description}
          </p>
        </MotionFadeIn>

        {/* 5-Platform Architecture Bento Grid with Stagger */}
        <MotionStagger
          itemSelector=".capability-card"
          stagger={0.1}
          y={24}
          className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
        >
          {drawers.map((item, index) => {
            const isWide = index === 0 || index === 1;
            const colSpan = isWide ? 'md:col-span-6' : 'md:col-span-4';

            return (
              <article
                key={item.id}
                className={`capability-card flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 md:p-8 shadow-xs transition-all hover:-translate-y-1 hover:border-[#2563EB]/60 hover:shadow-md ${colSpan}`}
              >
                <div className="space-y-5">
                  {/* Category SVG Diagram */}
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 dark:border-[#1E293B]/80">
                    <SvgScene
                      kind="service"
                      category={item.title}
                      slug={item.id}
                      aspectRatio="16/9"
                      ariaLabel={`${item.title} Schematic Diagram`}
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] px-3 py-1 font-mono text-[11px] text-[#2563EB] dark:text-[#38BDF8] font-medium inline-block">
                      {item.tag}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                      <Link href={`/services/${item.id}`} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] transition-colors">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                      {item.summary}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1E293B]/60 text-xs text-slate-700 dark:text-[#E2E8F0]">
                    {item.specs.slice(0, 3).map((spec) => (
                      <li key={spec} className="flex items-start gap-2">
                        <span className="text-[#10B981] font-bold" aria-hidden="true">✓</span>
                        <span className="leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-[#1E293B]">
                  <Link
                    href={`/services/${item.id}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline"
                  >
                    <span>View Technical Spec</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
