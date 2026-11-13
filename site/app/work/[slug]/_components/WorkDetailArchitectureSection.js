// section: work-detail-architecture
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const ARCH_BY_WORK = {
  'nww-cms-kit': {
    eyebrow: 'Static Regeneration Architecture',
    title: 'NWW Headless CMS Architecture',
    desc: 'In-memory cached markdown parser, dynamic route mapping, and decoupled client layer.',
    points: [
      { id: 'n1', title: 'File-Based Model Classes', desc: 'Lightweight static model classes reading frontmatter markdown directly with sub-5ms lookup latency.' },
      { id: 'n2', title: 'Server-Side Syntax Pipeline', desc: 'Unified Markdown engine compiling code blocks through Shiki with zero client bundle weight.' },
      { id: 'n3', title: 'Dynamic OpenGraph Rendering', desc: 'Satori edge generator compiling 1200x630 social preview cards on-the-fly from model titles.' },
      { id: 'n4', title: 'Zero Third-Party Vendor Lock', desc: 'Stateless file-backed architecture running reliably on standard Node and serverless runtimes.' },
    ],
  },
  classymenu: {
    eyebrow: 'Multi-Tenant SaaS Architecture',
    title: 'ClassyMenu Platform Architecture',
    desc: 'High-concurrency digital menu rendering and multi-location tenant isolation.',
    points: [
      { id: 'c1', title: 'Tenant Isolation Matrix', desc: 'Schema-separated database access ensuring zero cross-tenant data leakage across venue accounts.' },
      { id: 'c2', title: 'Sub-Second QR Menu Streaming', desc: 'Edge-cached catalog payloads delivering dynamic restaurant menus in under 200 milliseconds.' },
      { id: 'c3', title: 'Real-Time Table Webhooks', desc: 'Event-driven order routing alerting staff stations through low-latency persistent socket connections.' },
      { id: 'c4', title: 'Offline Kitchen Fallbacks', desc: 'Progressive Web App service workers caching active shift orders during internet interruptions.' },
    ],
  },
  ceramicsales: {
    eyebrow: 'B2B Wholesale Architecture',
    title: 'CeramicSales Enterprise Architecture',
    desc: 'Atomic FIFO depletion, double-entry financial ledgers, and streaming vector PDFs.',
    points: [
      { id: 'cs1', title: 'Row-Locked FIFO Depletion', desc: 'Deterministic stock allotment preventing race conditions during concurrent bulk dealer orders.' },
      { id: 'cs2', title: 'Multi-State Tax Ledger', desc: 'Dynamic tax engine calculating exact CGST, SGST, and IGST line items with immutable audit logs.' },
      { id: 'cs3', title: 'Streaming Vector PDF Engine', desc: 'Server-side headless invoice renderer streaming multi-page tax documents in under 80ms.' },
      { id: 'cs4', title: 'Role-Based Dealer Portal', desc: 'Granular permissions restricting dealer pricing tiers, credit lines, and payment authorizations.' },
    ],
  },
};

export default function WorkDetailArchitectureSection({ work }) {
  const data = ARCH_BY_WORK[work?.id] || ARCH_BY_WORK['nww-cms-kit'];

  return (
    <section
      id="work-detail-architecture"
      data-section="work-detail-architecture"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {data.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {data.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {data.desc}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".arch-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.points.map((item) => (
            <div
              key={item.id}
              className="arch-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3"
            >
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
