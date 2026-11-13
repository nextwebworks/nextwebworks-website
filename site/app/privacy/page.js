import { Policy } from '@/lib/cms-kit/policy.js';
import { cleanArticleHtml } from '@/lib/blog-utils.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';

export const metadata = buildRouteMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy policy and data protection standards for Next Web Works in compliance with the India DPDP Act 2023 and international privacy regulations.',
  path: '/privacy',
});

export default async function PrivacyPage() {
  const policy = await Policy.readOne('privacy').catch(() => null);
  const cleanContent = cleanArticleHtml(
    policy?.content ||
      '<p>Privacy Policy details under review by legal counsel. For inquiries, email contact@nextwebworks.in.</p>'
  );

  const jsonLd = buildLinkedGraph({
    path: '/privacy',
    title: 'Privacy Policy | Next Web Works',
    description: metadata.description,
    pageType: 'DigitalDocument',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy' },
    ],
    includeOrgAndSite: false,
  });

  return (
    <div className="py-16 md:py-24">
      <Schema schema={jsonLd} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Legal & Compliance</span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {policy?.title || 'Privacy Policy'}
        </h1>
        <p className="font-mono text-xs text-slate-500 dark:text-[#64748B]">
          Effective Date: {policy?.effectiveDate || '2026-11-11'} · India DPDP Act 2023 & GDPR Aligned
        </p>
        <div
          className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-700 dark:text-[#CBD5E1] border-t border-slate-200 dark:border-[#1E293B] pt-6"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </div>
    </div>
  );
}
