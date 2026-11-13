// site/lib/seo/config.js - Authoritative SEO and brand identity configuration

export const SEO_CONFIG = {
  siteName: 'Next Web Works',
  legalName: 'Next Web Works',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://nextwebworks.in',
  locale: 'en_IN',
  inLanguage: 'en-IN',
  logoUrl: 'https://nextwebworks.in/assets/logo.svg',
  logoMarkUrl: 'https://nextwebworks.in/assets/logo-mark.svg',
  defaultOgImage: 'https://nextwebworks.in/opengraph-image',
  founder: {
    name: 'Devansh',
    jobTitle: 'Founder & Principal Engineer',
  },
  address: {
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    telephone: '+917999934815',
    contactType: 'technical discovery',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://github.com/nextwebworks',
  ],
  knowsAbout: [
    'White-Label Web Development',
    'Next.js App Router Engineering',
    'React Native Mobile Application Development',
    'Custom Business ERP Architecture',
    'WordPress Theme and Gutenberg Block Engineering',
    'Webflow CMS Implementation',
    'Headless CMS Architecture',
  ],
};

