import { homeContent } from '@/content/home.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import HeroSection from './_components/HeroSection.js';
import PainPointsSection from './_components/PainPointsSection.js';
import WorkflowSection from './_components/WorkflowSection.js';
import ServicesSection from './_components/ServicesSection.js';
import WorkShowcaseSection from './_components/WorkShowcaseSection.js';
import HomeTechStackSection from './_components/HomeTechStackSection.js';
import FAQSection from './_components/FAQSection.js';
import FinalCTABanner from './_components/FinalCTABanner.js';
import ContactFormSection from './_components/ContactFormSection.js';

export const metadata = buildRouteMetadata({
  title: 'White-Label Web Dev Partner',
  description:
    'Dedicated white-label engineering partner for marketing agencies. WordPress, Webflow, custom Next.js, and mobile apps delivered with fixed quotes.',
  path: '/',
});

export default function HomePage() {
  const jsonLd = buildLinkedGraph({
    path: '/',
    title: 'White-Label Web Dev Partner | Next Web Works',
    description:
      'Dedicated white-label engineering partner for marketing agencies. WordPress, Webflow, custom Next.js, and mobile apps delivered with fixed quotes.',
    pageType: 'WebPage',
    faqs: homeContent.faqs.items,
    includeOrgAndSite: false,
  });

  return (
    <>
      <Schema schema={jsonLd} />
      <HeroSection content={homeContent.hero} />
      <PainPointsSection content={homeContent.painPoints} />
      <WorkflowSection content={homeContent.workflow} />
      <ServicesSection content={homeContent.services} />
      <WorkShowcaseSection content={homeContent.workShowcase} />
      <HomeTechStackSection content={homeContent.engineeringStandards} />
      <FAQSection content={homeContent.faqs} />
      <FinalCTABanner content={homeContent.ctaBanner} />
      <ContactFormSection content={homeContent.contactForm} />
    </>
  );
}
