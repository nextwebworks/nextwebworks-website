import { Policy } from '@/lib/cms-kit/policy.js';
import { cleanArticleHtml } from '@/lib/blog-utils.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';

export const metadata = buildRouteMetadata({
  title: 'Terms of Service',
  description:
    'Terms of service and white-label contractual standards for Next Web Works, governing intellectual property assignment and confidentiality.',
  path: '/terms',
});

export default async function TermsPage() {
  const policy = await Policy.readOne('terms').catch(() => null);
  const cleanContent = cleanArticleHtml(
    policy?.content ||
      '<p>Terms of Service under review by legal counsel. For inquiries, email contact@nextwebworks.in.</p>'
  );

  const jsonLd = buildLinkedGraph({
    path: '/terms',
    title: 'Terms of Service | Next Web Works',
    description: metadata.description,
    pageType: 'DigitalDocument',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Terms of Service', url: '/terms' },
    ],
    includeOrgAndSite: false,
  });

  return (
    <div className="py-16 md:py-24">
      <Schema schema={jsonLd} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="font-mono text-xs uppercase tracking-wider text-[#10B981] font-semibold">Legal & Compliance</span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {policy?.title || 'Terms of Service'}
        </h1>
        <p className="font-mono text-xs text-slate-500 dark:text-[#64748B]">
          Effective Date: {policy?.effectiveDate || '2026-11-11'} · Jurisdiction: Indore, MP, India
        </p>
        <div
          className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-700 dark:text-[#CBD5E1] border-t border-slate-200 dark:border-[#1E293B] pt-6"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </div>
    </div>
  );
}
