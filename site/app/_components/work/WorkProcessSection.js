// section: work-process
import { workContent } from '@/content/work.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function WorkProcessSection() {
  const { process } = workContent;

  return (
    <section
      id="work-process"
      data-section="work-process"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-2xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {process.eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {process.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            {process.description}
          </p>
        </MotionFadeIn>

        {/* 4-Stage Connected Node Pipeline with Stagger */}
        <MotionStagger
          itemSelector=".process-card"
          stagger={0.12}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 relative"
        >
          {process.steps.map((item) => (
            <div
              key={item.step}
              className="process-card relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 shadow-xs space-y-4 hover:border-[#2563EB]/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#38BDF8]">
                    {item.step}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] ring-4 ring-[#10B981]/20" />
                </div>
                <span className="font-mono text-[10px] text-slate-500 dark:text-[#64748B] uppercase tracking-wider block">
                  {item.tag}
                </span>
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-[#1E293B]">
                <span className="font-mono text-[10px] text-[#10B981] font-semibold">
                  STATUS: VERIFIED
                </span>
              </div>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
