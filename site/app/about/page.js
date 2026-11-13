import AboutFounderSection from './_components/AboutFounderSection.js';
import AboutPrinciplesSection from './_components/AboutPrinciplesSection.js';
import AboutMissionSection from './_components/AboutMissionSection.js';
import AboutPhilosophySection from './_components/AboutPhilosophySection.js';
import AboutOperationsSection from './_components/AboutOperationsSection.js';
import AboutWarrantySection from './_components/AboutWarrantySection.js';
import FAQSection from '../_components/FAQSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import { aboutContent } from '@/content/about.js';

export const metadata = buildRouteMetadata({
  title: 'About Our Delivery Standards',
  description:
    'Meet Devansh, Founder & Lead Engineer at Next Web Works. Four core engineering principles, 14-day post-launch warranty, and Indore engineering operations.',
  path: '/about',
});

export default function AboutPage() {
  const jsonLd = buildLinkedGraph({
    path: '/about',
    title: 'About Our Delivery Standards | Next Web Works',
    description: metadata.description,
    pageType: 'AboutPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ],
    faqs: aboutContent.faqs.items,
    includeOrgAndSite: false,
  });

  return (
    <div className="py-4">
      <Schema schema={jsonLd} />
      <AboutFounderSection content={aboutContent} />
      <AboutPrinciplesSection content={aboutContent} />
      <AboutMissionSection content={aboutContent} />
      <AboutPhilosophySection content={aboutContent} />
      <AboutOperationsSection content={aboutContent} />
      <AboutWarrantySection content={aboutContent} />
      <FAQSection content={aboutContent.faqs} />
      <FinalCTABanner content={aboutContent.ctaBanner} />
      <ContactFormSection content={aboutContent.contactForm} />
    </div>
  );
}
