// section: services-comparison
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function ServicesComparisonSection({ content }) {
  if (!content?.comparison) return null;
  const { comparison } = content;

  return (
    <section
      id="services-comparison"
      data-section="services-comparison"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {comparison.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {comparison.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {comparison.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".comparison-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {comparison.models.map((model) => (
            <div
              key={model.id}
              className={`comparison-card rounded-2xl border p-7 shadow-xs hover:-translate-y-0.5 transition-all space-y-4 ${
                model.id === 'nww'
                  ? 'border-[#2563EB] bg-white dark:bg-[#0F172A] shadow-sm'
                  : 'border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {model.name}
                </h3>
                <span
                  className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                    model.id === 'nww'
                      ? 'bg-[#10B981]/10 text-[#10B981]'
                      : 'bg-slate-200 dark:bg-[#1E293B] text-slate-600 dark:text-[#94A3B8]'
                  }`}
                >
                  {model.badge}
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-[#CBD5E1]">
                {model.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className={`mt-0.5 font-bold ${model.id === 'nww' ? 'text-[#10B981]' : 'text-slate-400'}`}>
                      {model.id === 'nww' ? '✓' : '•'}
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

