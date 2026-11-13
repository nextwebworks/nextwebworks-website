// section: services-stack-matrix
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function ServicesStackMatrixSection({ content }) {
  const platforms = content?.platforms || [
    { category: 'CMS & No-Code', items: ['WordPress', 'Webflow', 'Wix Studio', 'Shopify'] },
    { category: 'Custom Web & SaaS', items: ['Next.js App Router', 'React.js', 'Node.js / Express', 'PHP / Laravel'] },
    { category: 'Mobile Apps', items: ['React Native', 'Expo', 'iOS & Android Builds'] },
    { category: 'Cloud & Staging', items: ['Vercel', 'AWS', 'DigitalOcean', 'Cloudflare'] },
  ];

  return (
    <section
      id="services-stack-matrix"
      data-section="services-stack-matrix"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Supported Technology Stacks
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Platforms Engineered to Agency Standards
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            We build strictly in the frameworks your clients require, with zero unwanted technical debt.
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".matrix-tile"
          stagger={0.06}
          y={15}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {platforms.map((group) => (
            <div
              key={group.category}
              className="matrix-tile rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-4 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] px-3 py-1 font-mono text-xs text-slate-700 dark:text-[#94A3B8]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
