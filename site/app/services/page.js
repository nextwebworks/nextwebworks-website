import ServicesHeroSection from '../_components/services/ServicesHeroSection.js';
import ServicesCapabilitiesSection from '../_components/services/ServicesCapabilitiesSection.js';
import ServicesIntegrationStandardsSection from '../_components/services/ServicesIntegrationStandardsSection.js';
import ServicesStackMatrixSection from '../_components/services/ServicesStackMatrixSection.js';
import ServicesDeliverablesSection from './_components/ServicesDeliverablesSection.js';
import ServicesComparisonSection from './_components/ServicesComparisonSection.js';
import FAQSection from '../_components/FAQSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import { servicesContent } from '@/content/services.js';

export const metadata = buildRouteMetadata({
  title: 'White-Label Web Dev Services',
  description:
    'Full-service white-label engineering for marketing agencies: custom Next.js web applications, WordPress, Webflow, business ERPs, and mobile apps.',
  path: '/services',
});

export default function ServicesPage() {
  const jsonLd = buildLinkedGraph({
    path: '/services',
    title: 'White-Label Web Dev Services | Next Web Works',
    description: metadata.description,
    pageType: 'CollectionPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ],
    faqs: servicesContent.faqs.items,
    includeOrgAndSite: false,
  });

  return (
    <div>
      <Schema schema={jsonLd} />
      <ServicesHeroSection />
      <ServicesCapabilitiesSection />
      <ServicesIntegrationStandardsSection content={servicesContent} />
      <ServicesStackMatrixSection content={{ platforms: servicesContent.stackMatrix }} />
      <ServicesDeliverablesSection content={servicesContent} />
      <ServicesComparisonSection content={servicesContent} />
      <FAQSection content={servicesContent.faqs} />
      <FinalCTABanner content={servicesContent.ctaBanner} />
      <ContactFormSection content={servicesContent.contactForm} />
    </div>
  );
}
