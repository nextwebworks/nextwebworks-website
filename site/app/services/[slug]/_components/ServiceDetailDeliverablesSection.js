// section: service-detail-deliverables
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const DELIVERABLES_BY_SERVICE = {
  websites: {
    eyebrow: 'Website Deliverables Manifest',
    title: 'Shipped Artifacts for Marketing Websites',
    desc: 'Everything your account team needs to deliver high-converting marketing experiences.',
    items: [
      { id: 'w1', title: 'Componentized React Codebase', desc: 'Modular Next.js Server Components with strict line ceilings and zero CSS framework bloat.' },
      { id: 'w2', title: 'Asset Optimization Pipeline', desc: 'Pre-rendered responsive WebP images and SVG vectors with zero stock photography dependencies.' },
      { id: 'w3', title: 'Full Technical SEO Setup', desc: 'Dynamic XML sitemaps, structured JSON-LD schemas, and verified social sharing preview cards.' },
      { id: 'w4', title: '14-Day Post-Launch Review', desc: 'Scheduled telemetry and defect fixes on Day 7 and Day 14 following production DNS cutover.' },
    ],
  },
  'web-apps': {
    eyebrow: 'App Deliverables Manifest',
    title: 'Shipped Artifacts for Web Applications',
    desc: 'Production-ready full-stack software built for high concurrency and strict security.',
    items: [
      { id: 'wa1', title: 'Fullstack Next.js Repo', desc: 'Server Actions, React Server Components, and transactional SQL migration scripts.' },
      { id: 'wa2', title: 'Role-Based Auth & Session Store', desc: 'Hardened cookie authentication, session expiration guards, and permission middleware.' },
      { id: 'wa3', title: 'Automated CI/CD Workflow', desc: 'GitHub Actions deployment workflows and container blueprints configured for agency cloud VPCs.' },
      { id: 'wa4', title: 'Two-Week Defect Warranty', desc: 'Dedicated engineering defect resolution coverage through Day 7 and Day 14 post-deployment.' },
    ],
  },
  erps: {
    eyebrow: 'ERP Deliverables Manifest',
    title: 'Shipped Artifacts for Business ERPs',
    desc: 'Mission-critical operational systems with verified financial calculation accuracy.',
    items: [
      { id: 'e1', title: 'Atomic Inventory Engine', desc: 'Row-level database depletion scripts with automated rollback safeguards against overselling.' },
      { id: 'e2', title: 'Multi-State Tax Matrix', desc: 'Dynamic GST calculation modules and verified double-entry accounting reconciliation ledgers.' },
      { id: 'e3', title: 'Vector PDF Invoice Streamer', desc: 'Headless document generation engine rendering print-ready tax invoices in milliseconds.' },
      { id: 'e4', title: 'Post-Launch Data Assurance', desc: 'Proactive error monitoring on Day 7 and Day 14 to verify inventory accuracy and ledger balance.' },
    ],
  },
  'mobile-apps': {
    eyebrow: 'Mobile Deliverables Manifest',
    title: 'Shipped Artifacts for Cross-Platform Mobile',
    desc: 'Ready-to-publish React Native applications for Apple App Store and Google Play.',
    items: [
      { id: 'm1', title: 'Unified React Native Core', desc: 'Single TypeScript codebase with Expo EAS build workflows for native iOS and Android compilation.' },
      { id: 'm2', title: 'Offline Storage & Push Sync', desc: 'Local SQLite caching tier and cross-platform push notification integration modules.' },
      { id: 'm3', title: 'Store Submission Package', desc: 'Privacy manifests, signed release certificates, and app store listing screenshot packages.' },
      { id: 'm4', title: 'Release Stabilization Window', desc: 'Fourteen days of telemetry monitoring on live device releases to resolve platform edge cases.' },
    ],
  },
  'cms-platforms': {
    eyebrow: 'CMS Deliverables Manifest',
    title: 'Shipped Artifacts for Headless CMS',
    desc: 'Clean editorial experiences built on modern WordPress and Webflow foundations.',
    items: [
      { id: 'c1', title: 'Custom Gutenberg Theme', desc: 'Clean Bedrock theme architecture free of visual page builders, utilizing native core blocks.' },
      { id: 'c2', title: 'Webflow Component System', desc: 'Modular design system components mapped to structured CMS multi-reference collections.' },
      { id: 'c3', title: 'Async Video Editor Guides', desc: 'Short async video walkthroughs walking agency editors through updating copy and adding pages.' },
      { id: 'c4', title: 'Two-Week Launch Support', desc: 'Proactive editorial check-ins on Day 7 and Day 14 to assist client teams with content entry.' },
    ],
  },
};

export default function ServiceDetailDeliverablesSection({ service }) {
  const data = DELIVERABLES_BY_SERVICE[service?.id] || DELIVERABLES_BY_SERVICE.websites;

  return (
    <section
      id="service-detail-deliverables"
      data-section="service-detail-deliverables"
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
          itemSelector=".deliv-item"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.items.map((item) => (
            <div
              key={item.id}
              className="deliv-item rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3"
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
