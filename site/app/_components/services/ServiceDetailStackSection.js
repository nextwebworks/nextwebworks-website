// section: service-detail-stack
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const STACKS_BY_SERVICE = {
  websites: [
    { name: 'Architecture', value: 'WordPress, Webflow, Next.js App Router' },
    { name: 'Testing & QA', value: 'Lighthouse 95+ audits & mobile viewport validation' },
    { name: 'Cloud & Deploy', value: 'Vercel Edge network & password-protected previews' },
    { name: 'Code Handoff', value: 'Direct Git push to Agency GitHub or GitLab org' },
  ],
  'web-apps': [
    { name: 'Architecture', value: 'Next.js 16, React 19, TypeScript, Node.js' },
    { name: 'Testing & QA', value: 'Automated integration suites & end-to-end flows' },
    { name: 'Cloud & Deploy', value: 'Isolated staging branches on Vercel or AWS ECS' },
    { name: 'Code Handoff', value: 'Monorepo repository transfer with Docker compose' },
  ],
  erps: [
    { name: 'Architecture', value: 'Full-Stack Custom Engine, PostgreSQL, Node.js' },
    { name: 'Testing & QA', value: 'Atomic rollback testing & double-entry ledger audits' },
    { name: 'Cloud & Deploy', value: 'Encrypted VPN staging with seeded test databases' },
    { name: 'Code Handoff', value: 'Complete server configurations & migration scripts' },
  ],
  'mobile-apps': [
    { name: 'Architecture', value: 'React Native, Expo SDK, TypeScript Core' },
    { name: 'Testing & QA', value: 'Physical device testing across real iOS and Android' },
    { name: 'Cloud & Deploy', value: 'Expo EAS internal distribution channels & TestFlight' },
    { name: 'Code Handoff', value: 'Signed release bundles and mobile store assets' },
  ],
  'cms-platforms': [
    { name: 'Architecture', value: 'Custom Gutenberg, Webflow Collections, Shopify' },
    { name: 'Testing & QA', value: 'Cross-browser responsive stress tests & permissions' },
    { name: 'Cloud & Deploy', value: 'Private agency sandbox sites with temporary routing' },
    { name: 'Code Handoff', value: 'Standalone zip packages, theme exports, and Git repos' },
  ],
};

const STACK_HEADER_BY_SERVICE = {
  websites: { title: 'Web Deployment & Edge Hosting', desc: 'Deployed to global edge networks with isolated staging branches for agency preview.' },
  'web-apps': { title: 'Application Cloud & Container Topology', desc: 'Hardened cloud infrastructure with automated CI/CD pipelines and Docker containerization.' },
  erps: { title: 'Enterprise Server & Database Governance', desc: 'Isolated VPN environments, encrypted transaction backups, and automated migration scripts.' },
  'mobile-apps': { title: 'Mobile Build & Release Pipeline', desc: 'Continuous app binary generation via Expo EAS with direct TestFlight and Google Play tracks.' },
  'cms-platforms': { title: 'CMS Staging & Environment Management', desc: 'Private agency sandbox sites with temporary staging domains and turnkey DNS cutover.' },
};

export default function ServiceDetailStackSection({ service }) {
  const headerInfo = STACK_HEADER_BY_SERVICE[service?.id] || {
    title: `${service?.title || 'Engineering'} Infrastructure`,
    desc: 'Built directly on your or your client’s infrastructure with full transparency.',
  };

  const stackItems = STACKS_BY_SERVICE[service?.id] || service?.stackItems || [
    { name: 'Architecture', value: service?.tag || 'Modern Web Stack' },
    { name: 'Testing & QA', value: 'Cross-browser & responsive mobile verification' },
    { name: 'Cloud & Deploy', value: 'Vercel, AWS, or Agency preferred cloud' },
    { name: 'Code Handoff', value: 'Direct push to Agency GitHub repository' },
  ];

  return (
    <section
      id="service-detail-stack"
      data-section="service-detail-stack"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Deployment & Governance
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {headerInfo.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            {headerInfo.desc}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".stack-tile"
          stagger={0.08}
          y={15}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="stack-tile rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-5 text-xs space-y-2 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <span className="font-mono text-slate-500 dark:text-[#64748B] uppercase tracking-wider font-semibold">
                {item.name}
              </span>
              <p className="font-medium text-slate-900 dark:text-white leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
