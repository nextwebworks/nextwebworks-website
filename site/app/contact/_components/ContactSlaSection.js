// section: contact-sla
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function ContactSlaSection({ content }) {
  if (!content?.sla) return null;
  const { sla } = content;

  return (
    <section
      id="contact-sla"
      data-section="contact-sla"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={20} className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {sla.eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {sla.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {sla.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".sla-card"
          stagger={0.08}
          y={20}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {sla.tiers.map((t) => (
            <div
              key={t.id}
              className="sla-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-7 shadow-xs hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
                    {t.label}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                    {t.time}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  {t.title || 'Turnaround Protocol'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {t.desc}
                </p>
              </div>

              {t.referenceText && (
                <div className="pt-3 border-t border-slate-100 dark:border-[#1E293B]">
                  <Link
                    href={t.referenceHref}
                    className="text-[11px] font-medium text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {t.referenceText}
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
