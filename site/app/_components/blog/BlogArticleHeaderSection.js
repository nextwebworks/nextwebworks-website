// section: blog-article-header
import Link from 'next/link';
import { SvgScene } from '@/lib/svg/index.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

export default function BlogArticleHeaderSection({ post, category, readingTime = '' }) {
  return (
    <section
      id="blog-article-header"
      data-section="blog-article-header"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blog</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#2563EB] dark:text-[#60A5FA] font-semibold">{category}</span>
        </nav>

        <MotionFadeIn y={20} className="space-y-4">
          <span className="font-mono text-xs font-semibold text-[#10B981] uppercase tracking-wider">
            {category}
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="font-mono text-xs text-slate-500 dark:text-[#64748B]">
            Published on {new Date(post.createdAt || '2026-11-11').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · By Devansh, Principal Engineer{readingTime ? ` · ${readingTime}` : ''}
          </p>
        </MotionFadeIn>

        {/* 16:9 Theme-Aware Vector Cover Art */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B]">
          <SvgScene
            kind="blog"
            category={category}
            slug={post.slug}
            title={post.title}
            aspectRatio="16/9"
          />
        </div>
      </div>
    </section>
  );
}
