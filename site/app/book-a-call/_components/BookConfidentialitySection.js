// section: book-confidentiality
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function BookConfidentialitySection({ content }) {
  if (!content?.confidentiality) return null;
  const { confidentiality } = content;

  return (
    <section
      id="book-confidentiality"
      data-section="book-confidentiality"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {confidentiality.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {confidentiality.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {confidentiality.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".conf-item"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {confidentiality.points.map((pt) => (
            <div
              key={pt.id}
              className="conf-item rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-7 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              {pt.referenceText && (
                <div className="pt-3 border-t border-slate-100 dark:border-[#1E293B]">
                  <Link
                    href={pt.referenceHref}
                    className="text-[11px] font-medium text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {pt.referenceText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
