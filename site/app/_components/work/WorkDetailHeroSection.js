// section: work-detail-hero
import Link from 'next/link';
import { SvgScene } from '@/lib/svg/index.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import MotionTilt from '@/components/motion/MotionTilt.js';

const WORK_PILLS = {
  'nww-cms-kit': ['SUB-SECOND ISR CACHE', 'HMAC WEBHOOK PURGING', 'ZERO RUNTIME LOCKS'],
  classymenu: ['OPTIMISTIC UI UPDATES', 'LIVE TABLE SYNC', 'WHATSAPP ROUTING'],
  ceramicsales: ['ROW-LEVEL FIFO LOGS', 'CGST/SGST/IGST ENGINE', 'VECTOR PDF STREAM'],
};

export default function WorkDetailHeroSection({ work }) {
  const clientDisplay = work.clientPublishable && work.client ? work.client : 'Confidential Agency Partner';
  const workId = work.id || work.slug || 'nww-cms-kit';
  const pills = WORK_PILLS[workId] || ['PRIVATE STAGING', '14-DAY WARRANTY', 'FULL IP TRANSFER'];

  return (
    <section
      id="work-detail-hero"
      data-section="work-detail-hero"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/work" className="hover:text-slate-900 dark:hover:text-white transition-colors">Work</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#2563EB] dark:text-[#38BDF8] font-semibold">{work.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <MotionFadeIn y={24} duration={0.8} className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
                Case Study
              </span>
              <span className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-3 py-0.5 font-mono text-xs text-slate-700 dark:text-[#94A3B8]">
                {work.badge || 'Production Platform'}
              </span>
              <span className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-3 py-0.5 font-mono text-xs text-slate-500 dark:text-[#64748B]">
                {work.pill || 'Illustrative sample · not a client project'}
              </span>
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl leading-tight">
              {work.title}
            </h1>

            <p className="font-mono text-xs text-[#2563EB] dark:text-[#38BDF8] font-medium">
              {work.stack}
            </p>

            <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] max-w-2xl">
              {work.tagline || work.summary || work.overview || work.description}
            </p>

            {/* Spec Chips Row */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-md border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-2.5 py-1 text-slate-700 dark:text-[#94A3B8]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <MotionMagnetic>
                <Link
                  href="/book-a-call"
                  className="rounded-lg bg-[#2563EB] px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  Discuss {work.title} Architecture →
                </Link>
              </MotionMagnetic>
              <Link
                href="/work"
                className="rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-5 py-3 text-xs font-semibold text-slate-700 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-0.5"
              >
                ← Back to All Deliverables
              </Link>
            </div>
          </MotionFadeIn>

          {/* Right Column: Deterministic Deliverable SVG Scene with 3D Tilt */}
          <div className="lg:col-span-5">
            <MotionTilt
              maxTilt={10}
              className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-sm"
            >
              <SvgScene
                kind="work"
                category={work.title}
                slug={workId}
                aspectRatio="16/10"
                ariaLabel={`${work.title} Architecture Schematic`}
              />
            </MotionTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
