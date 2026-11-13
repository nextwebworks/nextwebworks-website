// section: contact-expectations
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { contactContent } from '@/content/contact.js';

export default function ContactExpectationsSection({ content = contactContent }) {
  const exp = content?.expectations || contactContent.expectations;

  return (
    <section
      id="contact-expectations"
      data-section="contact-expectations"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="max-w-2xl space-y-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {exp.eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {exp.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            {exp.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".expectation-card"
          stagger={0.1}
          y={20}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {exp.items.map((s, idx) => (
            <div
              key={s.id || idx}
              className="expectation-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <span className="font-mono text-xs font-bold text-[#10B981]">
                Step 0{idx + 1}
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {s.description || s.desc}
              </p>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
