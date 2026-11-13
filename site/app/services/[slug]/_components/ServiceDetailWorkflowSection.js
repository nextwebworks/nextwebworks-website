// section: service-detail-workflow
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

const WORKFLOW_BY_SERVICE = {
  websites: {
    eyebrow: 'Frontend Sprint Lifecycle',
    title: 'Marketing Website Delivery Sprints',
    desc: 'From Figma design tokens to sub-second Core Web Vitals on live production domains.',
    phases: [
      { step: '01', title: 'Figma Token Audit', desc: 'We extract colors, responsive grids, and font subsets from your design files into Tailwind v4 tokens.' },
      { step: '02', title: 'Component Scaffolding', desc: 'Atomic Next.js Server Components developed with strict line ceilings and zero third-party layout shift.' },
      { step: '03', title: 'Lighthouse 95+ Audit', desc: 'Rigorous optimization of images, media loading priority, and accessibility contrast before handoff.' },
      { step: '04', title: 'Domain DNS Cutover', desc: 'Production deployment to Vercel edge with SSL provisioning and two-week warranty monitoring.' },
    ],
  },
  'web-apps': {
    eyebrow: 'Fullstack Lifecycle',
    title: 'Custom Web Application Delivery Sprints',
    desc: 'Architecting scalable server-rendered portals with enterprise database security.',
    phases: [
      { step: '01', title: 'Schema & Auth Scoping', desc: 'We design transactional database models, session stores, and role-based access permission matrices.' },
      { step: '02', title: 'Server Action Pipelines', desc: 'Building secure server mutations with cryptographic CSRF guards and optimistic UI updates.' },
      { step: '03', title: 'Integration Stress Tests', desc: 'End-to-end webhook verification, third-party API sync validation, and database connection pooling.' },
      { step: '04', title: 'Private VPC Deployment', desc: 'Deploying containerized services to agency cloud infrastructure with automated health alerts.' },
    ],
  },
  erps: {
    eyebrow: 'Operations Lifecycle',
    title: 'Business ERP Delivery Sprints',
    desc: 'Deterministic inventory logic, multi-tier taxation rules, and streaming documents.',
    phases: [
      { step: '01', title: 'Business Logic Modeling', desc: 'Mapping physical inventory workflows, FIFO warehouse depletion rules, and GST tax schemas.' },
      { step: '02', title: 'Transactional Ledger Build', desc: 'Developing row-locked database operations with immutable audit trails and rollback safeguards.' },
      { step: '03', title: 'PDF & Report Verification', desc: 'Benchmarking server-side vector document generation to stream invoices in under 80 milliseconds.' },
      { step: '04', title: 'Data Migration & Cutover', desc: 'Executing live data imports from legacy spreadsheets with zero downtime or inventory discrepancy.' },
    ],
  },
  'mobile-apps': {
    eyebrow: 'Mobile App Lifecycle',
    title: 'Mobile Application Delivery Sprints',
    desc: 'Unified React Native and Expo engineering for iOS and Android store distribution.',
    phases: [
      { step: '01', title: 'Native Bridge Architecture', desc: 'Configuring Expo EAS plugins, native biometric sensors, and cross-platform navigation hierarchies.' },
      { step: '02', title: 'Shared State Implementation', desc: 'Connecting offline SQLite caching and background push notification listeners with web APIs.' },
      { step: '03', title: 'Physical Device QA Matrix', desc: 'Testing touch targets, notch constraints, and frame rates across 12 physical iOS and Android devices.' },
      { step: '04', title: 'App Store Submission Pass', desc: 'Handling privacy manifest generation, Apple App Store reviews, and Google Play console releases.' },
    ],
  },
  'cms-platforms': {
    eyebrow: 'CMS Engineering Lifecycle',
    title: 'Headless CMS Delivery Sprints',
    desc: 'Clean Gutenberg block development and scalable Webflow CMS architectures.',
    phases: [
      { step: '01', title: 'Editorial Model Mapping', desc: 'Defining clean content schemas, custom post types, and multi-reference relational data structures.' },
      { step: '02', title: 'Custom Block Construction', desc: 'Engineering modular Gutenberg blocks or Webflow components without bloated visual page builders.' },
      { step: '03', title: 'Webhook & Cache Warmup', desc: 'Configuring instant static revalidation hooks and Redis edge caching for sub-second page loads.' },
      { step: '04', title: 'Editor Training & Handoff', desc: 'Recording concise async video walkthroughs for your client editorial team and agency managers.' },
    ],
  },
};

export default function ServiceDetailWorkflowSection({ service }) {
  const data = WORKFLOW_BY_SERVICE[service?.id] || WORKFLOW_BY_SERVICE.websites;

  return (
    <section
      id="service-detail-workflow"
      data-section="service-detail-workflow"
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
          itemSelector=".workflow-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.phases.map((p) => (
            <div
              key={p.step}
              className="workflow-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3"
            >
              <span className="font-mono text-xs font-bold text-[#10B981]">
                Step {p.step}
              </span>
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
