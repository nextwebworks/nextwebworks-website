// section: contact-channels
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { contactContent } from '@/content/contact.js';

export default function ContactChannelsSection({ content = contactContent }) {
  const ch = content?.channels || contactContent.channels;

  return (
    <section
      id="contact-channels"
      data-section="contact-channels"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="max-w-2xl space-y-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {ch.eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {ch.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8]">
            {ch.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".channel-card"
          stagger={0.08}
          y={15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {ch.items.map((item) => (
            <div
              key={item.id}
              className="channel-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 shadow-xs space-y-3 flex flex-col justify-between hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <div className="space-y-2">
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                {item.ctaHref.startsWith('http') || item.ctaHref.startsWith('mailto:') ? (
                  <a
                    href={item.ctaHref}
                    target={item.ctaHref.startsWith('http') ? '_blank' : undefined}
                    rel={item.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {item.ctaText}
                  </a>
                ) : (
                  <Link
                    href={item.ctaHref}
                    className="inline-flex items-center text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {item.ctaText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
