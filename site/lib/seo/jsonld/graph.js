// site/lib/seo/jsonld/graph.js - Single linked Schema.org @graph generator with stable @id anchors

import { SEO_CONFIG } from '../config.js';
import { sanitizeSchemaNode } from './sanitizer.js';

/**
 * Builds the canonical Organization entity.
 */
export function buildOrganizationNode() {
  const base = SEO_CONFIG.siteUrl;
  return {
    '@type': 'ProfessionalService',
    '@id': `${base}/#organization`,
    name: SEO_CONFIG.siteName,
    legalName: SEO_CONFIG.legalName,
    url: base,
    logo: {
      '@type': 'ImageObject',
      '@id': `${base}/#logo`,
      url: SEO_CONFIG.logoUrl,
      caption: SEO_CONFIG.siteName,
    },
    image: {
      '@id': `${base}/#logo`,
    },
    founder: {
      '@type': 'Person',
      '@id': `${base}/#founder`,
      name: SEO_CONFIG.founder.name,
      jobTitle: SEO_CONFIG.founder.jobTitle,
      url: `${base}/about`,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SEO_CONFIG.address.addressLocality,
      addressRegion: SEO_CONFIG.address.addressRegion,
      addressCountry: SEO_CONFIG.address.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_CONFIG.contactPoint.telephone,
      contactType: SEO_CONFIG.contactPoint.contactType,
      availableLanguage: SEO_CONFIG.contactPoint.availableLanguage,
    },
    knowsAbout: SEO_CONFIG.knowsAbout,
    sameAs: SEO_CONFIG.sameAs,
  };
}

/**
 * Builds the canonical WebSite entity.
 */
export function buildWebSiteNode() {
  const base = SEO_CONFIG.siteUrl;
  return {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: base,
    name: SEO_CONFIG.siteName,
    publisher: {
      '@id': `${base}/#organization`,
    },
    inLanguage: SEO_CONFIG.inLanguage,
  };
}

/**
 * Builds a BreadcrumbList entity from an array of items.
 *
 * @param {string} pageUrl - Canonical URL of the current page
 * @param {Array<{ name: string, url?: string }>} items
 */
export function buildBreadcrumbNode(pageUrl, items = []) {
  if (!items || items.length === 0) return null;

  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url ? (item.url.startsWith('http') ? item.url : `${SEO_CONFIG.siteUrl}${item.url}`) : undefined,
    })),
  };
}

/**
 * Builds an FAQPage entity.
 *
 * @param {string} pageUrl
 * @param {Array<{ question: string, answer: string }>} faqs
 */
export function buildFAQNode(pageUrl, faqs = []) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.title || '',
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.content || '',
      },
    })),
  };
}

/**
 * Compiles a single linked Schema.org @graph payload with verified stable @id anchors.
 *
 * @param {object} options
 * @param {string} options.path - Relative path (e.g. '/services/websites')
 * @param {string} options.title - Page or entity title
 * @param {string} options.description - Page or entity description
 * @param {string} [options.pageType='WebPage'] - Schema.org type (AboutPage, ContactPage, CollectionPage, etc.)
 * @param {Array<{ name: string, url?: string }>} [options.breadcrumbs]
 * @param {Array<{ question: string, answer: string }>} [options.faqs]
 * @param {object} [options.primaryEntity] - Dedicated entity (Service, BlogPosting, CreativeWork)
 * @param {boolean} [options.includeOrgAndSite=true] - Whether to include Organization & WebSite nodes
 * @returns {object} Safe JSON-LD Schema.org object
 */
export function buildLinkedGraph({
  path = '/',
  title,
  description,
  pageType = 'WebPage',
  breadcrumbs,
  faqs,
  primaryEntity,
  includeOrgAndSite = true,
}) {
  const base = SEO_CONFIG.siteUrl;
  const cleanPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const pageUrl = `${base}${cleanPath}`;

  const graph = [];

  if (includeOrgAndSite) {
    graph.push(buildOrganizationNode());
    graph.push(buildWebSiteNode());
  }

  // WebPage node
  const webPageNode = {
    '@type': pageType,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: {
      '@id': `${base}/#website`,
    },
    inLanguage: SEO_CONFIG.inLanguage,
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    webPageNode.breadcrumb = {
      '@id': `${pageUrl}#breadcrumb`,
    };
    const breadcrumbNode = buildBreadcrumbNode(pageUrl, breadcrumbs);
    if (breadcrumbNode) graph.push(breadcrumbNode);
  }

  if (primaryEntity) {
    webPageNode.mainEntity = {
      '@id': primaryEntity['@id'] || `${pageUrl}#primary`,
    };
    graph.push(primaryEntity);
  }

  graph.push(webPageNode);

  if (faqs && faqs.length > 0) {
    const faqNode = buildFAQNode(pageUrl, faqs);
    if (faqNode) graph.push(faqNode);
  }

  const payload = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return sanitizeSchemaNode(payload);
}

