// section: blog-grid
import Link from 'next/link';
import { SvgScene } from '@/lib/svg/index.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function BlogGridSection({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      id="blog-grid"
      data-section="blog-grid"
      className="py-16 md:py-20 border-b border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            All Engineering Guides
          </span>
          <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Recent Articles & Scoping Blueprints
          </h2>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".blog-card"
          stagger={0.1}
          y={20}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => {
            const category = post.metadata?.category || 'White-Label Engineering';

            return (
              <article
                key={post._id || post.slug}
                className="blog-card flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] hover:border-[#2563EB]/60 hover:-translate-y-1 transition-all shadow-sm"
              >
                {/* 16:9 In-House Deterministic Theme-Aware SVG Cover */}
                <div className="w-full aspect-[16/9] overflow-hidden border-b border-slate-200 dark:border-[#1E293B]">
                  <SvgScene
                    kind="blog"
                    category={category}
                    slug={post.slug}
                    title={post.title}
                    aspectRatio="16/9"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="font-mono text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                      {category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                      {post.cleanExcerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-[#1E293B] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#64748B]">
                    <span>
                      {new Date(post.createdAt || '2026-11-11').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-[#2563EB] dark:text-[#60A5FA] font-medium hover:underline">
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
