// section: blog-article-author
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionMagnetic from '@/components/motion/MotionMagnetic.js';

const AUTHOR_FOCUS_BY_SLUG = {
  'the-white-label-playbook-for-marketing-agencies':
    'Advising agency principals and operations directors on scaling delivery capacity through confidential engineering benches.',
  'how-to-scope-fixed-price-web-projects-without-scope-creep':
    'Consulting on functional specifications, milestone boundaries, and predictable change request governance for digital agencies.',
  'headless-nextjs-vs-wordpress-vs-webflow':
    'Architecting high-performance React Server Components frontends, headless data layers, and structured CMS workflows.',
};

export default function BlogArticleAuthorSection({ slug = '' }) {
  const bio =
    AUTHOR_FOCUS_BY_SLUG[slug] ||
    'Providing transparent technical execution and predictable white-label sprint capacity for marketing agencies.';

  return (
    <section
      id="blog-article-author"
      data-section="blog-article-author"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn
          y={15}
          className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs"
        >
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 shrink-0 rounded-full border border-[#2563EB] bg-slate-100 dark:bg-[#0B0F19] flex items-center justify-center font-mono text-base font-bold text-slate-800 dark:text-[#E2E8F0]">
              D
            </div>
            <div className="space-y-1">
              <p className="font-heading text-base font-bold text-slate-900 dark:text-white">
                Devansh
              </p>
              <p className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA]">
                Founder & Technical Lead
              </p>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                {bio}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <MotionMagnetic>
              <Link
                href="/about"
                className="inline-flex items-center rounded-lg border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B0F19] px-4 py-2 text-xs font-semibold text-slate-700 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About the Team →
              </Link>
            </MotionMagnetic>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
