import { notFound } from 'next/navigation';
import { Service } from '@/lib/cms-kit/service.js';
import { homeContent } from '@/content/home.js';
import { serviceSeoMeta } from '@/content/services.js';
import Schema from '@/components/seo/Schema.js';
import { getServiceData } from '@/lib/seo/helpers.js';
import { buildRouteMetadata } from '@/lib/seo/index.js';
import ServiceDetailHeroSection from '../../_components/services/ServiceDetailHeroSection.js';
import ServiceDetailOverviewSection from '../../_components/services/ServiceDetailOverviewSection.js';
import ServiceDetailSpecsSection from '../../_components/services/ServiceDetailSpecsSection.js';
import ServiceDetailStackSection from '../../_components/services/ServiceDetailStackSection.js';
import ServiceDetailWorkflowSection from './_components/ServiceDetailWorkflowSection.js';
import ServiceDetailDeliverablesSection from './_components/ServiceDetailDeliverablesSection.js';
import FAQSection from '../../_components/FAQSection.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';
import ContactFormSection from '../../_components/ContactFormSection.js';

export async function generateStaticParams() {
  const cms = await Service.getSlugs({ limit: 50 }).catch(() => []);
  const stat = homeContent.services.drawers.map((s) => s.id);
  return Array.from(new Set([...cms, ...stat])).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = serviceSeoMeta[slug];
  if (!meta) return { title: 'Service Not Found' };
  return buildRouteMetadata({
    title: meta.title,
    description: meta.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const data = await getServiceData(slug);
  if (!data) notFound();
  const { service, detail, jsonLd } = data;

  return (
    <div>
      <Schema schema={jsonLd} />
      <ServiceDetailHeroSection service={service} />
      <ServiceDetailOverviewSection service={service} />
      <ServiceDetailSpecsSection service={service} />
      <ServiceDetailStackSection service={service} />
      <ServiceDetailWorkflowSection service={service} />
      <ServiceDetailDeliverablesSection service={service} />
      <FAQSection content={detail.faqs} />
      <FinalCTABanner content={detail.ctaBanner} />
      <ContactFormSection content={detail.contactForm} />
    </div>
  );
}
