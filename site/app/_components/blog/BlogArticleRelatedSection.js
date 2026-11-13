// section: blog-article-related
import Link from 'next/link';
import { blogContent } from '@/content/blog.js';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';
import MotionStagger from '@/components/motion/MotionStagger.js';

export default function BlogArticleRelatedSection({ currentSlug = '' }) {
  const recommendations =
    blogContent.relatedArticlesBySlug[currentSlug] || [
      {
        title: 'Modern Front-End Engineering & Headless Architectures',
        desc: 'Evaluating headless Next.js vs visual site builders for agency scalability.',
        href: '/blog',
      },
      {
        title: 'Technical Scoping & Milestone Delivery Protocols',
        desc: 'Frameworks for fixed-price quoting and preventing scope creep on client projects.',
        href: '/blog',
      },
    ];

  return (
    <section
      id="blog-article-related"
      data-section="blog-article-related"
      className="py-12 md:py-16 border-b border-slate-200 dark:border-[#1E293B]/60 bg-slate-50 dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn y={15} className="mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">
            Further Reading
          </span>
          <h2 className="mt-1 font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            Related Engineering Playbooks
          </h2>
        </MotionFadeIn>

        <MotionStagger
          itemSelector=".related-card"
          stagger={0.1}
          y={15}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {recommendations.map((rec) => (
            <div
              key={rec.title}
              className="related-card rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-xs space-y-3 hover:-translate-y-0.5 hover:border-[#2563EB]/50 transition-all"
            >
              <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors">
                <Link href={rec.href}>{rec.title}</Link>
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {rec.desc}
              </p>
              <Link href={rec.href} className="inline-block font-mono text-xs text-[#2563EB] dark:text-[#60A5FA] hover:underline">
                Read Playbook →
              </Link>
            </div>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
