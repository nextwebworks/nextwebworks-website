// section: book-fallback-channels
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';
import { bookACallContent } from '@/content/bookACall.js';

export default function BookFallbackChannelsSection({ content = bookACallContent }) {
  const fallback = content?.fallbackChannels || bookACallContent.fallbackChannels;

  return (
    <section
      id="fallback-channels"
      data-section="book-fallback-channels"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {fallback.eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {fallback.title}
          </h2>
          <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
            {fallback.description}
          </p>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".channel-card"
          stagger={0.08}
          y={15}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {fallback.channels.map((ch) => (
            <div
              key={ch.id}
              className="channel-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-6 shadow-xs space-y-3 flex flex-col justify-between hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <div className="space-y-2">
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                  {ch.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {ch.description}
                </p>
              </div>

              <div>
                {ch.ctaHref.startsWith('http') ? (
                  <a
                    href={ch.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {ch.ctaText}
                  </a>
                ) : (
                  <Link
                    href={ch.ctaHref}
                    className="inline-flex items-center text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    {ch.ctaText}
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

