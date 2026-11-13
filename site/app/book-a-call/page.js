import BookHeroSection from '../_components/book-a-call/BookHeroSection.js';
import BookAgendaSection from '../_components/book-a-call/BookAgendaSection.js';
import BookCalSection from '../_components/book-a-call/BookCalSection.js';
import BookPreparationSection from '../_components/book-a-call/BookPreparationSection.js';
import BookGuaranteeSection from './_components/BookGuaranteeSection.js';
import BookConfidentialitySection from './_components/BookConfidentialitySection.js';
import BookFallbackChannelsSection from './_components/BookFallbackChannelsSection.js';
import BookWrittenAlternativeSection from './_components/BookWrittenAlternativeSection.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import { bookACallContent } from '@/content/bookACall.js';

export const metadata = buildRouteMetadata({
  title: 'Book a 30-Min Scoping Call',
  description:
    'Schedule a 30-minute scoping call directly with our founder. We review your client briefs, confirm stack fit, and deliver a fixed-scope quote in 24 hours.',
  path: '/book-a-call',
});

export default function BookACallPage() {
  const jsonLd = buildLinkedGraph({
    path: '/book-a-call',
    title: 'Book a 30-Min Scoping Call | Next Web Works',
    description: metadata.description,
    pageType: 'ContactPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Book a Call', url: '/book-a-call' },
    ],
    includeOrgAndSite: false,
  });

  return (
    <div>
      <Schema schema={jsonLd} />
      <BookHeroSection />
      <BookAgendaSection content={bookACallContent} />
      <BookCalSection />
      <BookPreparationSection content={bookACallContent} />
      <BookGuaranteeSection content={bookACallContent} />
      <BookConfidentialitySection content={bookACallContent} />
      <BookFallbackChannelsSection content={bookACallContent} />
      <BookWrittenAlternativeSection content={bookACallContent} />
    </div>
  );
}
