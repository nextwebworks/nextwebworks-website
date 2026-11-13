// section: blog-article-discussion
import Link from 'next/link';
import MotionFadeIn from '@/components/motion/MotionFadeIn.js';

const DISCUSSION_BY_SLUG = {
  'the-white-label-playbook-for-marketing-agencies': {
    eyebrow: 'Agency Partnership Discussion',
    title: 'Exploring an Invisible Engineering Partner for Your Agency?',
    desc: 'Devansh is available for confidential discussions on white-label sprint capacity, mutual NDA terms, and pricing models.',
    btnPrimary: 'Inquire About White-Label Bench →',
    btnSecondary: 'Schedule 30-Min Partnership Call',
  },
  'how-to-scope-fixed-price-web-projects-without-scope-creep': {
    eyebrow: 'Scoping Review Desk',
    title: 'Have an Active Client RFP That Needs Feasibility Auditing?',
    desc: 'Send us your wireframes, Figma specs, or brief for an itemized fixed-scope feasibility audit within 24 business hours.',
    btnPrimary: 'Submit RFP for Scope Audit →',
    btnSecondary: 'Book 30-Min Scoping Walkthrough',
  },
  'headless-nextjs-vs-wordpress-vs-webflow': {
    eyebrow: 'Architecture Advisory',
    title: 'Debating Tech Stack Fit for an Upcoming Client Build?',
    desc: 'Our principal engineer will review your editorial requirements and performance goals to provide an unbiased recommendation.',
    btnPrimary: 'Send Stack Architecture Brief →',
    btnSecondary: 'Book 30-Min Architecture Consultation',
  },
};

export default function BlogArticleDiscussionSection({ post }) {
  const data = DISCUSSION_BY_SLUG[post?.slug] || DISCUSSION_BY_SLUG['the-white-label-playbook-for-marketing-agencies'];

  return (
    <section
      id="blog-article-discussion"
      data-section="blog-article-discussion"
      className="py-12 md:py-16 border-t border-slate-200 dark:border-[#1E293B]/60 bg-white dark:bg-[#0B0F19] transition-colors"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn
          y={15}
          className="rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0F172A] p-8 md:p-10 shadow-xs space-y-4"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] font-semibold">
            {data.eyebrow}
          </span>
          <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
            {data.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            {data.desc}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1D4ED8] transition-colors shadow-xs"
            >
              {data.btnSecondary} →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#0B0F19] px-5 py-2.5 text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#1E293B] transition-colors"
            >
              {data.btnPrimary}
            </Link>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
