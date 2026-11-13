// section: book-written-alternative
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';
import { bookACallContent } from '@/content/bookACall.js';

export default function BookWrittenAlternativeSection({ content = bookACallContent }) {
  const written = content?.writtenAlternative || bookACallContent.writtenAlternative;

  return (
    <section
      id="written-alternative"
      data-section="book-written-alternative"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn
          y={20}
          className="rounded-3xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-8 md:p-12 text-center space-y-6 shadow-xs"
        >
          {written.badge && (
            <span className="inline-block rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 px-3.5 py-1 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA]">
              {written.badge}
            </span>
          )}

          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl max-w-2xl mx-auto">
            {written.title}
          </h2>

          <p className="text-sm text-slate-600 dark:text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            {written.description}
          </p>

          <div className="pt-2">
            <MotionMagnetic>
              <Link
                href={written.primaryButton.href}
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                {written.primaryButton.text}
              </Link>
            </MotionMagnetic>
          </div>

          {written.footnote && (
            <p className="font-mono text-[11px] text-slate-500 dark:text-[#64748B]">
              {written.footnote}
            </p>
          )}
        </MotionFadeIn>
      </div>
    </section>
  );
}

