// section: blog-article-body
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionReadingProgress from '@/components/motion/MotionReadingProgress.js';
import TableOfContents from '@/app/blog/_components/article/TableOfContents.js';

export default function BlogArticleBodySection({
  cleanContent,
  markdownElement = null,
  isMarkdown = false,
  headings = [],
  callout,
}) {
  const box = callout || {
    title: 'Need a white-label engineering partner for your agency?',
    desc: 'We deliver custom frontends and web apps directly under your brand with fixed quotes within 24 hours.',
    cta: 'Book a 30-Min Technical Scoping Call →',
    href: '/book-a-call',
  };

  const hasToc = Array.isArray(headings) && headings.length >= 3;

  return (
    <section
      id="blog-article-body"
      data-section="blog-article-body"
      className="relative py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      {/* Scroll-Linked Reading Progress Bar */}
      <MotionReadingProgress targetId="blog-article-body" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${hasToc ? 'lg:grid-cols-12 lg:gap-12' : ''}`}>
          {/* Main Article Content Column */}
          <div className={`${hasToc ? 'lg:col-span-8' : 'mx-auto max-w-3xl'} space-y-8`}>
            {/* Mid-Article Agency Callout Box */}
            <MotionFadeIn y={15} className="rounded-xl border border-[#2563EB]/40 bg-slate-50 dark:bg-[#0F172A] p-6 text-sm space-y-2">
              <p className="font-semibold text-slate-900 dark:text-white">
                {box.title}
              </p>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {box.desc}
              </p>
              <div className="pt-2">
                <Link
                  href={box.href || '/book-a-call'}
                  className="font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] hover:underline font-semibold"
                >
                  {box.cta}
                </Link>
              </div>
            </MotionFadeIn>

            {/* Mobile Collapsible TOC Drawer (rendered before content on mobile) */}
            {hasToc && (
              <div className="lg:hidden">
                <TableOfContents headings={headings} />
              </div>
            )}

            {/* Article Content: Markdown RSC or Sanitized HTML Fallback */}
            {isMarkdown && markdownElement ? (
              <div className="max-w-[70ch] text-slate-700 dark:text-[#CBD5E1]">
                {markdownElement}
              </div>
            ) : (
              <div
                className="max-w-none text-sm leading-relaxed text-slate-700 dark:text-[#CBD5E1] space-y-4 [&_p]:my-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:dark:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:dark:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_a]:text-[#2563EB] [&_a]:dark:text-[#60A5FA] [&_a]:underline [&_pre]:rounded-xl [&_pre]:bg-slate-900 [&_pre]:p-4 [&_pre]:text-xs [&_pre]:overflow-x-auto [&_code]:font-mono [&_blockquote]:border-l-4 [&_blockquote]:border-[#2563EB] [&_blockquote]:pl-4 [&_blockquote]:italic"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />
            )}
          </div>

          {/* Desktop Sticky Table of Contents Sidebar */}
          {hasToc && (
            <aside className="hidden lg:block lg:col-span-4 pl-4 border-l border-slate-200/60 dark:border-[#1E293B]/60">
              <TableOfContents headings={headings} />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
