// section: about-s1-founder
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import MotionTilt from '@/components/motion/MotionTilt.js';
import { aboutContent } from '@/content/about.js';

export default function AboutFounderSection({ content = aboutContent }) {
  const { founder } = content || aboutContent;

  return (
    <section id="founder" data-section="about-s1-founder" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Founder Identity Card with 3D Tilt */}
          <div className="lg:col-span-5">
            <MotionTilt
              maxTilt={12}
              className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-8 text-center space-y-4 shadow-sm transition-colors"
            >
              {/* Authentic In-House Cobalt Monogram Badge */}
              <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-tr from-[#1D4ED8] to-[#2563EB] flex flex-col items-center justify-center shadow-md border-2 border-white dark:border-[#1E293B] text-white">
                <span className="font-heading text-2xl font-black tracking-widest leading-none">DK</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-blue-100 mt-1">Lead Eng</span>
              </div>

              <div>
                <p className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                  {founder.name}
                </p>
                <p className="font-mono text-xs font-semibold text-[#10B981] mt-0.5">
                  {founder.title}
                </p>
                <p className="font-mono text-xs text-slate-500 dark:text-[#64748B] mt-0.5">
                  {founder.location}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19]/60 p-4 text-left">
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </MotionTilt>
          </div>

          {/* Narrative & Positioning */}
          <MotionFadeIn y={24} duration={0.8} className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
              {founder.eyebrow}
            </span>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {founder.titleMain}
            </h1>
            <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
              {founder.description}
            </p>
            {founder.paragraphs.map((p, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {p}
              </p>
            ))}

            <div className="pt-2">
              <MotionMagnetic>
                <Link
                  href={founder.cta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-colors shadow-sm"
                >
                  {founder.cta.text}
                </Link>
              </MotionMagnetic>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}
