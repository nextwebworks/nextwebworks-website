// section: poc-pbi-workflow
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function PbiWorkflowSection({ content }) {
  return (
    <section
      id="workflow"
      data-section="poc-pbi-workflow"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {content.eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#94A3B8]">
            {content.description}
          </p>
        </MotionFadeIn>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 sm:p-8 space-y-3"
            >
              <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
