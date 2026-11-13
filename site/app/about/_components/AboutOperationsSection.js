// section: about-s5-operations
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { aboutContent } from '@/content/about.js';

export default function AboutOperationsSection({ content = aboutContent }) {
  const operations = content?.operations || aboutContent.operations;

  return (
    <section
      id="operations"
      data-section="about-s5-operations"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {operations.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {operations.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {operations.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".op-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {operations.items.map((item) => (
            <div
              key={item.id}
              className="op-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-7 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center font-mono text-xs font-bold">
                  {item.id.replace('op', '0')}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </MotionStagger>

        <MotionFadeIn y={10} className="mt-8 pt-4 border-t border-slate-100 dark:border-[#1E293B]/40">
          <p className="text-xs text-slate-500 dark:text-[#64748B]">
            Need detailed communication protocols?{' '}
            <Link
              href="/for-agencies#sla"
              className="font-medium text-[#2563EB] dark:text-[#60A5FA] hover:underline"
            >
              Review Agency SLAs & Support Hours →
            </Link>
          </p>
        </MotionFadeIn>
      </div>
    </section>
  );
}

