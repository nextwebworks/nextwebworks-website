// section: blog-newsletter
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function BlogNewsletterSection({ content }) {
  if (!content?.newsletter) return null;
  const { newsletter } = content;

  return (
    <section
      id="blog-newsletter"
      data-section="blog-newsletter"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0F172A] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <MotionFadeIn y={20}>
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            {newsletter.eyebrow}
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {newsletter.title}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {newsletter.description}
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-slate-200/80 dark:bg-[#1E293B] px-4 py-1.5 font-mono text-xs text-slate-700 dark:text-[#E2E8F0]">
              Delivered twice monthly · Unsubscribe anytime · Zero spam
            </span>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}

