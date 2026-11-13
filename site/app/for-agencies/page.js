import AgencyHeroSection from './_components/AgencyHeroSection.js';
import PartnershipModelsSection from './_components/PartnershipModelsSection.js';
import AgencyMarginsSection from './_components/AgencyMarginsSection.js';
import AgencyConfidentialitySection from './_components/AgencyConfidentialitySection.js';
import AgencySlaSection from './_components/AgencySlaSection.js';
import AgencyRiskReversalSection from './_components/AgencyRiskReversalSection.js';
import FAQSection from '../_components/FAQSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import { forAgenciesContent } from '@/content/forAgencies.js';

export const metadata = buildRouteMetadata({
  title: 'Outsource Dev for Agencies',
  description:
    'Scale your agency with a dedicated white-label dev bench or fixed-price sprints. Zero overhead, 24-hour quotes, and strict non-solicitation guarantees.',
  path: '/for-agencies',
});

export default function ForAgenciesPage() {
  const jsonLd = buildLinkedGraph({
    path: '/for-agencies',
    title: 'Outsource Dev for Agencies | Next Web Works',
    description: metadata.description,
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'For Agencies', url: '/for-agencies' },
    ],
    faqs: forAgenciesContent.faqs.items,
    includeOrgAndSite: false,
  });

  return (
    <div className="py-4">
      <Schema schema={jsonLd} />
      <AgencyHeroSection content={forAgenciesContent.hero} />
      <PartnershipModelsSection />
      <AgencyMarginsSection content={forAgenciesContent.margins} />
      <AgencyConfidentialitySection content={forAgenciesContent.confidentiality} />
      <AgencySlaSection content={forAgenciesContent.sla} />
      <AgencyRiskReversalSection content={forAgenciesContent.riskReversal} />
      <FAQSection content={forAgenciesContent.faqs} />
      <FinalCTABanner content={forAgenciesContent.ctaBanner} />
      <ContactFormSection content={forAgenciesContent.contactForm} />
    </div>
  );
}
