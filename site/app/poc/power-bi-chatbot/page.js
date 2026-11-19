import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import FAQSection from '@/app/_components/FAQSection.js';
import FinalCTABanner from '@/app/_components/FinalCTABanner.js';
import PbiHeroSection from './_components/PbiHeroSection.js';
import PbiValueSection from './_components/PbiValueSection.js';
import PbiWorkflowSection from './_components/PbiWorkflowSection.js';
import PbiSecuritySection from './_components/PbiSecuritySection.js';
import PbiVisualArchSection from './_components/PbiVisualArchSection.js';
import PbiModelSupportSection from './_components/PbiModelSupportSection.js';
import PbiInquirySection from './_components/PbiInquirySection.js';
import { pbiContent } from './content.js';

export const metadata = buildRouteMetadata({
  title: 'Power BI Embedded Conversational AI Copilot | PoC Showcase',
  description:
    'Turn static Power BI dashboards into conversational analytics workspaces. Query semantic models in plain English with verified read-only DAX queries and native vector charts.',
  path: '/poc/power-bi-chatbot',
});

export default function PowerBiChatbotPoCPage() {
  const jsonLd = buildLinkedGraph({
    path: '/poc/power-bi-chatbot',
    title: 'Power BI Embedded Conversational AI Copilot | Next Web Works',
    description: metadata.description,
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Power BI Chatbot PoC', url: '/poc/power-bi-chatbot' },
    ],
    faqs: pbiContent.faqs.items,
    includeOrgAndSite: false,
  });

  return (
    <div className="bg-white dark:bg-[#0B0F19] transition-colors">
      <Schema schema={jsonLd} />
      <PbiHeroSection content={pbiContent.hero} />
      <PbiValueSection content={pbiContent.value} />
      <PbiWorkflowSection content={pbiContent.workflow} />
      <PbiSecuritySection content={pbiContent.security} />
      <PbiVisualArchSection content={pbiContent.visualArch} />
      <PbiModelSupportSection content={pbiContent.modelSupport} />
      <FAQSection content={pbiContent.faqs} />
      <FinalCTABanner content={pbiContent.ctaBanner} />
      <PbiInquirySection />
    </div>
  );
}
