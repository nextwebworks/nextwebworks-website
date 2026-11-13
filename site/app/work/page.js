import WorkHeroSection from '../_components/work/WorkHeroSection.js';
import WorkStandardsSection from '../_components/work/WorkStandardsSection.js';
import WorkShowcaseGridSection from '../_components/work/WorkShowcaseGridSection.js';
import WorkVerificationSection from '../_components/work/WorkVerificationSection.js';
import WorkConfidentialityNoticeSection from './_components/WorkConfidentialityNoticeSection.js';
import WorkCodeSovereigntySection from './_components/WorkCodeSovereigntySection.js';
import FAQSection from '../_components/FAQSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import ContactFormSection from '../_components/ContactFormSection.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import { workContent } from '@/content/work.js';

export const metadata = buildRouteMetadata({
  title: 'Flagship Products & Builds',
  description:
    'Explore our proprietary products and client platform builds: NWW Headless CMS Kit, ClassyMenu digital dining SaaS, and CeramicSales wholesale ERP.',
  path: '/work',
});

export default function WorkPage() {
  const jsonLd = buildLinkedGraph({
    path: '/work',
    title: 'Flagship Products & Builds | Next Web Works',
    description: metadata.description,
    pageType: 'CollectionPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
    ],
    faqs: workContent.faqs.items,
    includeOrgAndSite: false,
  });

  return (
    <div>
      <Schema schema={jsonLd} />
      <WorkHeroSection />
      <WorkStandardsSection />
      <WorkShowcaseGridSection />
      <WorkVerificationSection />
      <WorkConfidentialityNoticeSection content={workContent} />
      <WorkCodeSovereigntySection />
      <FAQSection content={workContent.faqs} />
      <FinalCTABanner content={workContent.ctaBanner} />
      <ContactFormSection content={workContent.contactForm} />
    </div>
  );
}
