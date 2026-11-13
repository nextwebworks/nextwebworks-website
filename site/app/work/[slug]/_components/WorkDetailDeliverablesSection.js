// section: work-detail-deliverables
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const DELIVERABLES_BY_WORK = {
  'nww-cms-kit': {
    eyebrow: 'NWW Kit Artifacts',
    title: 'Shipped CMS Kit Deliverables',
    desc: 'Self-hosted content engine assets and integration templates.',
    items: [
      { id: 'nd1', title: 'Open Model Client Library', desc: 'Class-based JavaScript client with static pagination, filtering, and tag-lookup methods.' },
      { id: 'nd2', title: 'Dynamic OG Card Generator', desc: 'Serverless OpenGraph edge handlers with branded typography and SVG layout templates.' },
      { id: 'nd3', title: 'Interactive Code Pipeline', desc: 'Pre-configured Shiki syntax themes with dual HTML and Markdown server rendering.' },
      { id: 'nd4', title: 'Comprehensive Schema Spec', desc: 'Documented frontmatter field definitions and automated build-time validation scripts.' },
    ],
  },
  classymenu: {
    eyebrow: 'Dining SaaS Artifacts',
    title: 'Shipped ClassyMenu Deliverables',
    desc: 'Full-stack restaurant operating system and customer QR interfaces.',
    items: [
      { id: 'cd1', title: 'Multi-Tenant Manager Portal', desc: 'Administrative dashboard for restaurant operators to manage menus, pricing, and modifiers.' },
      { id: 'cd2', title: 'Sub-Second Customer Web App', desc: 'Ultra-lightweight PWA menu interface rendering catalogs instantly without app store download.' },
      { id: 'cd3', title: 'Staff Terminal Integration', desc: 'Real-time kitchen order dispatch screen with audio alerts and receipt printer webhooks.' },
      { id: 'cd4', title: 'Deployment Blueprint', desc: 'Automated Docker compose setup and cloud migration guide for dedicated hosting.' },
    ],
  },
  ceramicsales: {
    eyebrow: 'Wholesale ERP Artifacts',
    title: 'Shipped CeramicSales Deliverables',
    desc: 'Mission-critical enterprise distribution software assets and databases.',
    items: [
      { id: 'csd1', title: 'Atomic Inventory Database', desc: 'PostgreSQL schema with row-level locks, audit triggers, and FIFO depletion functions.' },
      { id: 'csd2', title: 'Double-Entry GST Ledger', desc: 'Financial calculation library with automated tax report exports and invoice numbering.' },
      { id: 'csd3', title: 'Streaming Document Service', desc: 'Headless PDF generator producing compliant B2B tax invoices with vector barcode labels.' },
      { id: 'csd4', title: 'Wholesale Dealer Portal', desc: 'B2B order booking web application with custom credit terms and real-time stock checks.' },
    ],
  },
};

export default function WorkDetailDeliverablesSection({ work }) {
  const data = DELIVERABLES_BY_WORK[work?.id] || DELIVERABLES_BY_WORK['nww-cms-kit'];

  return (
    <section
      id="work-detail-deliverables"
      data-section="work-detail-deliverables"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
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
          itemSelector=".deliv-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.items.map((item) => (
            <div
              key={item.id}
              className="deliv-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3"
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
