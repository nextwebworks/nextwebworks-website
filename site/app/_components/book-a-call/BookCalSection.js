// section: book-cal
import CalEmbed from '@/app/book-a-call/_components/CalEmbed.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function BookCalSection() {
  return (
    <section
      id="book-cal"
      data-section="book-cal"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Live Calendar
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Select a Time That Suits Your Agency
          </h2>
        </MotionFadeIn>

        <CalEmbed />
      </div>
    </section>
  );
}
