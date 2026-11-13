// site/lib/seo/metadata/builder.js - Universal Next.js App Router metadata builder

import { SEO_CONFIG } from '../config.js';

/**
 * Builds a compliant Next.js Metadata object with complete OpenGraph, Twitter, and canonical configuration.
 *
 * @param {object} options
 * @param {string} options.title - Page title (raw or formatted)
 * @param {string} options.description - Page meta description
 * @param {string} [options.path='/'] - Relative path (e.g. '/services/websites')
 * @param {string} [options.image] - Custom OpenGraph image URL
 * @param {'website'|'article'} [options.type='website'] - OpenGraph type
 * @param {string} [options.publishedTime] - ISO publication date (for articles)
 * @param {string} [options.modifiedTime] - ISO modification date (for articles)
 * @param {string[]} [options.authors] - Author names
 * @param {boolean} [options.noIndex=false] - Whether to explicitly disallow indexing
 * @returns {import('next').Metadata}
 */
export function buildRouteMetadata({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Devansh'],
  noIndex = false,
}) {
  const baseUrl = SEO_CONFIG.siteUrl;
  const cleanPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${baseUrl}${cleanPath}`;
  const hasDedicatedOg =
    cleanPath.startsWith('/services/') ||
    cleanPath.startsWith('/work/') ||
    cleanPath.startsWith('/blog/');
  const resolvedImage =
    image || (hasDedicatedOg ? `${canonicalUrl}/opengraph-image` : `${baseUrl}/opengraph-image`);

  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_GUARD === 'true';
  const shouldNoIndex = noIndex || isPreview;

  const metadata = {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [resolvedImage],
    },
    robots: shouldNoIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };

  if (type === 'article') {
    if (publishedTime) metadata.openGraph.publishedTime = publishedTime;
    if (modifiedTime) metadata.openGraph.modifiedTime = modifiedTime;
    if (authors.length > 0) metadata.openGraph.authors = authors;
  }

  return metadata;
}
