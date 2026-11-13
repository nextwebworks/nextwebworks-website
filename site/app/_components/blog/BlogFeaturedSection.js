// section: blog-featured
import Link from 'next/link';
import { SvgScene } from '@/lib/svg/index.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function BlogFeaturedSection({ featuredPost }) {
  if (!featuredPost) return null;

  const category = featuredPost.metadata?.category || 'White-Label Engineering';

  return (
    <section
      id="blog-featured"
      data-section="blog-featured"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] font-semibold">
            Featured Playbook
          </span>
        </MotionFadeIn>

        <MotionFadeIn
          y={24}
          duration={0.8}
          className="overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0 items-center"
        >
          <div className="lg:col-span-7 aspect-[16/9] w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-[#1E293B]">
            <SvgScene
              kind="blog"
              category={category}
              slug={featuredPost.slug}
              title={featuredPost.title}
              aspectRatio="16/9"
            />
          </div>

          <div className="lg:col-span-5 p-8 md:p-10 space-y-4">
            <span className="font-mono text-xs font-semibold text-[#10B981]">
              {category}
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors">
              <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              {featuredPost.cleanExcerpt}
            </p>
            <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-[#1E293B]">
              <span className="font-mono text-xs text-slate-500 dark:text-[#64748B]">
                {new Date(featuredPost.createdAt || '2026-11-11').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="font-mono text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
              >
                Read Full Playbook →
              </Link>
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
