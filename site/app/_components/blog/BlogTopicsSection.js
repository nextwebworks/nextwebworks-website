// section: blog-topics
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function BlogTopicsSection() {
  const topics = [
    {
      title: 'White-Label Delivery Models',
      desc: 'How digital agencies manage client relationships while outsourcing core technical implementation under strict NDA.',
      tag: 'Agency Growth',
    },
    {
      title: 'Fixed-Price Project Scoping',
      desc: 'Eliminating scope creep, locking sprint deliverables, and preventing runaway costs on custom web builds.',
      tag: 'Scoping Architecture',
    },
    {
      title: 'Platform Selection Tradeoffs',
      desc: 'Pragmatic technical evaluation comparing Next.js App Router, headless CMS kits, WordPress, and Webflow.',
      tag: 'Platform Architecture',
    },
  ];

  return (
    <section
      id="blog-topics"
      data-section="blog-topics"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Editorial Focus
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Core Agency Engineering Themes
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            Practical guides built on real production deployments, not theoretical frameworks.
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".topic-card"
          stagger={0.08}
          y={15}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {topics.map((t) => (
            <div
              key={t.title}
              className="topic-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                {t.tag}
              </span>
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {t.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {t.desc}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
