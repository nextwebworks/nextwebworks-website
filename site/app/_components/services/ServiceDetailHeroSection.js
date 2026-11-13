// section: service-detail-hero
import Link from 'next/link';
import { SvgScene } from '@/lib/svg/index.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import MotionTilt from '@/components/motion/MotionTilt.js';

const SERVICE_PILLS = {
  websites: ['FIGMA 1:1 PRECISION', 'GREEN CORE WEB VITALS', 'EDITORIAL WORKFLOWS'],
  'web-apps': ['REACT SERVER COMPONENTS', 'RBAC & AUDIT LOGS', 'REST & GRAPHQL APIS'],
  erps: ['ATOMIC FIFO ALLOCATION', 'MULTI-TIER GST LOGIC', 'VECTOR PDF STREAMING'],
  'mobile-apps': ['SHARED REACT NATIVE BENCH', 'NATIVE CAMERA & GEO', 'PUSH NOTIFICATIONS'],
  'cms-platforms': ['HEADLESS CMS APIS', 'GUTENBERG BLOCKS', 'WEBFLOW EMBEDS'],
};

export default function ServiceDetailHeroSection({ service }) {
  const serviceId = service.id || service.slug || 'websites';
  const pills = SERVICE_PILLS[serviceId] || ['24H QUOTE', '14-DAY WARRANTY', 'FULL IP TRANSFER'];

  return (
    <section
      id="service-detail-hero"
      data-section="service-detail-hero"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Services</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#2563EB] dark:text-[#38BDF8] font-semibold">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <MotionFadeIn y={24} duration={0.8} className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
                Platform Specification
              </span>
              <span className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-3 py-0.5 font-mono text-xs text-[#2563EB] dark:text-[#38BDF8]">
                {service.tag || 'White-Label Delivery'}
              </span>
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl leading-tight">
              {service.title}
            </h1>

            <p className="text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] max-w-2xl">
              {service.summary || service.description}
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
                  Scope {service.title} With Engineering →
                </Link>
              </MotionMagnetic>
              <Link
                href="/services"
                className="rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] px-5 py-3 text-xs font-semibold text-slate-700 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-0.5"
              >
                ← Back to All Services
              </Link>
            </div>
          </MotionFadeIn>

          {/* Right Column: Deterministic Service SVG Scene with 3D Tilt */}
          <div className="lg:col-span-5">
            <MotionTilt
              maxTilt={10}
              className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-sm"
            >
              <SvgScene
                kind="service"
                category={service.title}
                slug={serviceId}
                aspectRatio="16/10"
                ariaLabel={`${service.title} Architecture Schematic`}
              />
            </MotionTilt>
          </div>
        </div>
      </div>
    </section>
  );
}
