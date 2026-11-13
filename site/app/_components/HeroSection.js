// section: home-s1-hero
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionTilt from '@/components/motion/MotionTilt.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';

export default function HeroSection({ content }) {
  const router = useRouter();
  const [showMobilePill, setShowMobilePill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setShowMobilePill(true);
      } else {
        setShowMobilePill(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSecondaryCtaClick = (e) => {
    if (content.secondaryCta?.href?.startsWith('#')) {
      e.preventDefault();
      const targetId = content.secondaryCta.href.replace(/^#/, '');
      const target =
        document.getElementById(targetId) ||
        document.getElementById('services') ||
        document.getElementById('home-s4-services');

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', content.secondaryCta.href);
      } else {
        router.push('/services');
      }
    }
  };

  return (
    <section
      id="home-s1-hero"
      data-section="home-s1-hero"
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

            {/* H1 Heading */}
            <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] sm:text-5xl sm:leading-[1.15]">
              Say Yes to Every Client Dev Request.{' '}
              <span className="text-slate-500 dark:text-[#94A3B8]">Without Hiring Developers.</span>
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
              <a
                href={content.secondaryCta.href}
                onClick={handleSecondaryCtaClick}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-6 py-3.5 text-base font-medium text-slate-800 dark:text-[#E2E8F0] hover:bg-slate-100 dark:hover:bg-[#1E293B] hover:text-slate-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors duration-200"
              >
                {content.secondaryCta.text}
              </a>
            </div>

            {/* Trust metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs font-mono text-slate-600 dark:text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#10B981]">✓</span> Fixed quotes in 24h
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#10B981]">✓</span> 100% white-label NDA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#10B981]">✓</span> Full IP ownership
              </span>
            </div>
          </MotionFadeIn>

          {/* Right Column: Architectural Node Schematic with 60fps 3D Cursor Tilt */}
          <div className="lg:col-span-5">
            <MotionTilt
              maxTilt={12}
              className="relative rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A]/90 p-6 shadow-xl backdrop-blur-sm transition-colors"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1E293B] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#10B981]/80" />
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">pipeline_contract.spec</span>
              </div>

              <div className="space-y-4">
                {/* Node 1 */}
                <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] p-4 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#94A3B8]">
                    <span>Step 01 · Specification Intake</span>
                    <span className="text-slate-800 dark:text-[#E2E8F0] font-medium">Your Agency Brand</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Client Brief & Figma Specs</p>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">Scoping · stack evaluation · 24h turnaround</p>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center text-slate-400 dark:text-[#E2E8F0] font-mono text-xs">
                  ↓ <span className="text-slate-500 dark:text-[#94A3B8] ml-2">Private Repo & Staging Pipeline</span>
                </div>

                {/* Node 2 */}
                <div className="rounded-xl border border-[#2563EB]/60 bg-white dark:bg-[#0B0F19] p-4 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#94A3B8]">
                    <span>Step 02 · Sprint Execution</span>
                    <span className="text-[#10B981] font-semibold">Invisible Delivery</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Dedicated NWW Engineering Bench</p>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">Next.js · WordPress · Webflow · React Native</p>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center text-slate-400 dark:text-[#E2E8F0] font-mono text-xs">
                  ↓ <span className="text-slate-500 dark:text-[#94A3B8] ml-2">Verified Staging on Agency Domain</span>
                </div>

                {/* Node 3 */}
                <div className="rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] p-4 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#94A3B8]">
                    <span>Step 03 · Delivery & Warranty</span>
                    <span className="text-[#10B981] font-semibold">Production</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Client Cloud Launch & 14-Day Fix Window</p>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-0.5">Vercel · AWS · DigitalOcean · 100% Client IP</p>
                </div>
              </div>
            </MotionTilt>
          </div>
        </div>
      </div>

      {/* Mobile Floating CTA Pill (<768px) */}
      {showMobilePill && (
        <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden animate-fade-in">
          <Link
            href={content.mobilePill.href}
            className="flex items-center justify-between w-full rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-2xl hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            <span>{content.mobilePill.text}</span>
            <span className="font-mono text-xs opacity-90">30-Min Discovery</span>
          </Link>
        </div>
      )}
    </section>
  );
}
