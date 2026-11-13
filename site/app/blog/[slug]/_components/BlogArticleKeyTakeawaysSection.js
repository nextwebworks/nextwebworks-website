// section: blog-article-key-takeaways
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

const TAKEAWAYS_BY_SLUG = {
  'the-white-label-playbook-for-marketing-agencies': {
    eyebrow: 'Playbook Key Takeaways',
    title: 'Core Lessons on White-Label Scaling',
    desc: 'Actionable guidelines for marketing agencies scaling technical capacity safely.',
    points: [
      { id: 'p1', title: 'Protect Agency Margin', desc: 'Avoid unbillable bench payroll during slow seasons by utilizing an invisible on-demand engineering desk.' },
      { id: 'p2', title: 'Enforce Developer Anonymity', desc: 'Require code commits under agency handles and bilateral non-solicitation protection on every engagement.' },
      { id: 'p3', title: 'Prioritize Code Sovereignty', desc: 'Guarantee full source code ownership and clean git repositories transfer directly to your organization.' },
    ],
  },
  'how-to-scope-fixed-price-web-projects-without-scope-creep': {
    eyebrow: 'Scoping Key Takeaways',
    title: 'Core Lessons on Scope Control',
    desc: 'Practical methods to lock project specifications and prevent unbudgeted developer hours.',
    points: [
      { id: 's1', title: 'Audit Figma Edge-Cases', desc: 'Inspect responsive behavior, empty states, and error handling prior to issuing a binding quotation.' },
      { id: 's2', title: 'Establish Milestone Gates', desc: 'Require written sign-off at each sprint checkpoint before subsequent technical development begins.' },
      { id: 's3', title: 'Isolate Change Requests', desc: 'Funnel new client feature requests into itemized change orders rather than absorbing scope creep.' },
    ],
  },
  'headless-nextjs-vs-wordpress-vs-webflow': {
    eyebrow: 'Stack Key Takeaways',
    title: 'Core Lessons on Platform Selection',
    desc: 'Strategic criteria to match client business requirements with the optimal technical stack.',
    points: [
      { id: 'st1', title: 'Match Editor Workflow', desc: 'Deploy Webflow or WordPress when non-technical marketing teams need frequent visual page composition.' },
      { id: 'st2', title: 'Choose Next.js for Scale', desc: 'Select Next.js App Router for complex database integrations, custom SaaS features, and edge speed.' },
      { id: 'st3', title: 'Avoid Bloated Plugins', desc: 'Enforce clean theme architectures and native blocks to ensure long-term stability and security.' },
    ],
  },
};

export default function BlogArticleKeyTakeawaysSection({ post }) {
  const data = TAKEAWAYS_BY_SLUG[post?.slug] || TAKEAWAYS_BY_SLUG['the-white-label-playbook-for-marketing-agencies'];

  return (
    <section
      id="blog-article-key-takeaways"
      data-section="blog-article-key-takeaways"
      className="py-12 md:py-16 border-t border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <MotionFadeIn y={20} className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {data.eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {data.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {data.desc}
          </p>
        </MotionFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.points.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-2.5"
            >
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
