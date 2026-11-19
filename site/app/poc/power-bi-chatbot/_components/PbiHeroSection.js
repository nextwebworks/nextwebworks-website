// section: poc-pbi-hero
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import PbiHeroMockup from '../PbiHeroMockup.js';

export default function PbiHeroSection({ content }) {
  return (
    <section
      id="poc-hero"
      data-section="poc-pbi-hero"
      className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200 dark:border-[#1E293B]/60 transition-colors"
    >
      {/* Background ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[600px] rounded-full bg-[#2563EB]/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Value Proposition */}
          <MotionFadeIn y={24} duration={0.8} className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-3.5 py-1.5 text-xs font-mono text-slate-800 dark:text-[#E2E8F0] shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>{content.eyebrow}</span>
            </div>

            {/* H1 Heading with dual-tone black & slate */}
            <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] sm:text-5xl sm:leading-[1.15]">
              {content.titleMain}{' '}
              <span className="text-slate-500 dark:text-[#94A3B8]">{content.titleSub}</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-lg">
              {content.description}
            </p>

            {/* Dual CTAs (primary + secondary) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <MotionMagnetic>
                <Link
                  href={content.primaryCta.href}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[#2563EB] px-6 py-3.5 text-base font-medium text-white shadow-sm hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B0F19] transition-all duration-200"
                >
                  {content.primaryCta.text}
                </Link>
              </MotionMagnetic>

              {/* Demo CTA Guard: Secondary button disabled pending Gate 5 */}
              <div className="relative group">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-6 py-3.5 text-base font-medium text-slate-400 dark:text-[#64748B] cursor-not-allowed transition-colors duration-200 shadow-xs"
                >
                  Interactive Demo Launching Soon ↓
                </button>
                <div className="absolute -bottom-7 left-0 whitespace-nowrap text-[10px] font-mono font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800/40 px-2 py-0.5 rounded shadow-xs pointer-events-none">
                  {content.demoNotice}
                </div>
              </div>
            </div>

            {/* Trust metadata checkmarks */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs font-mono text-slate-600 dark:text-[#94A3B8]">
              {content.checks.map((check) => (
                <span key={check} className="flex items-center gap-1.5">
                  <span className="text-[#10B981]">✓</span> {check}
                </span>
              ))}
            </div>
          </MotionFadeIn>

          {/* Right Column: Architectural Node Schematic */}
          <div className="lg:col-span-5">
            <PbiHeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
