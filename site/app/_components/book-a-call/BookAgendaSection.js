// section: book-agenda
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { bookACallContent } from '@/content/bookACall.js';

export default function BookAgendaSection({ content = bookACallContent }) {
  const agenda = content?.agenda || bookACallContent.agenda;

  return (
    <section
      id="book-agenda"
      data-section="book-agenda"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {agenda.eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {agenda.title}
          </h2>
          <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
            {agenda.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".agenda-card"
          stagger={0.08}
          y={15}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {agenda.items.map((item) => (
            <div
              key={item.num}
              className="agenda-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-5 text-xs shadow-xs space-y-2 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-[#2563EB] dark:text-[#60A5FA] font-bold">
                  {item.num} {'//'} {item.title}
                </span>
                <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
