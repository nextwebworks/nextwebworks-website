// section: services-deliverables
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function ServicesDeliverablesSection({ content }) {
  if (!content?.deliverables) return null;
  const { deliverables } = content;

  return (
    <section
      id="services-deliverables"
      data-section="services-deliverables"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {deliverables.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {deliverables.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {deliverables.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".deliverable-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {deliverables.items.map((item) => (
            <div
              key={item.id}
              className="deliverable-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3"
            >
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

