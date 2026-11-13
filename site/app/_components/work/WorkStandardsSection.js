// section: work-standards
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { workContent } from '@/content/work.js';

export default function WorkStandardsSection({ content = workContent.standards }) {
  const { eyebrow, title, description, items } = content || workContent.standards;

  return (
    <section
      id="work-standards"
      data-section="work-standards"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="max-w-2xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            {description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".standard-tile"
          stagger={0.08}
          y={20}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map((std) => (
            <div
              key={std.title}
              className="standard-tile rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              {std.tag && (
                <span className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] font-medium">
                  {std.tag}
                </span>
              )}
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                {std.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {std.description || std.desc}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
