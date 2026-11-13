// section: book-preparation
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { bookACallContent } from '@/content/bookACall.js';

export default function BookPreparationSection({ content = bookACallContent }) {
  const prep = content?.preparation || bookACallContent.preparation;

  return (
    <section
      id="book-preparation"
      data-section="book-preparation"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-8 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
                {prep.eyebrow}
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mt-1">
                {prep.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1">
                {prep.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-mono font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline shrink-0"
            >
              Prefer to send written brief? →
            </Link>
          </div>

          <MotionStagger itemSelector=".prep-item" stagger={0.06} y={10} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {prep.items.map((item) => (
              <div
                key={item.title}
                className="prep-item rounded-xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] p-4 text-xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#10B981] font-bold" aria-hidden="true">✓</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{item.title}</span>
                </div>
                <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </MotionStagger>
        </MotionFadeIn>
      </div>
    </section>
  );
}
