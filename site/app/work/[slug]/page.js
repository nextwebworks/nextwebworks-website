import { notFound } from 'next/navigation';
import { Portfolio } from '@/lib/cms-kit/portfolio.js';
import { homeContent } from '@/content/home.js';
import { workSeoMeta } from '@/content/work.js';
import Schema from '@/components/seo/Schema.js';
import { getWorkData } from '@/lib/seo/helpers.js';
import { buildRouteMetadata } from '@/lib/seo/index.js';
import WorkDetailHeroSection from '../../_components/work/WorkDetailHeroSection.js';
import WorkDetailOverviewSection from '../../_components/work/WorkDetailOverviewSection.js';
import WorkDetailHighlightsSection from '../../_components/work/WorkDetailHighlightsSection.js';
import WorkDetailConfidentialitySection from '../../_components/work/WorkDetailConfidentialitySection.js';
import WorkDetailArchitectureSection from './_components/WorkDetailArchitectureSection.js';
import WorkDetailDeliverablesSection from './_components/WorkDetailDeliverablesSection.js';
import FAQSection from '../../_components/FAQSection.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';
import ContactFormSection from '../../_components/ContactFormSection.js';

export async function generateStaticParams() {
  const cms = await Portfolio.getSlugs({ limit: 50 }).catch(() => []);
  const stat = homeContent.workShowcase.samples.map((w) => w.id);
  return Array.from(new Set([...cms, ...stat])).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = workSeoMeta[slug];
  if (!meta) return { title: 'Deliverable Not Found' };
  return buildRouteMetadata({
    title: meta.title,
    description: meta.description,
    path: `/work/${slug}`,
  });
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const data = await getWorkData(slug);
  if (!data) notFound();
  const { work, detail, jsonLd } = data;

  return (
    <div>
      <Schema schema={jsonLd} />
      <WorkDetailHeroSection work={work} />
      <WorkDetailOverviewSection work={work} />
      <WorkDetailHighlightsSection work={work} />
      <WorkDetailConfidentialitySection work={work} />
      <WorkDetailArchitectureSection work={work} />
      <WorkDetailDeliverablesSection work={work} />
      <FAQSection content={detail.faqs} />
      <FinalCTABanner content={detail.ctaBanner} />
      <ContactFormSection content={detail.contactForm} />
    </div>
  );
}
