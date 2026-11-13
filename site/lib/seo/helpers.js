// site/lib/seo/helpers.js - Server data preparation & linked graph builders for dynamic routes

import { Service } from '@/lib/cms-kit/service.js';
import { Portfolio } from '@/lib/cms-kit/portfolio.js';
import { Blog } from '@/lib/cms-kit/blog.js';
import { homeContent } from '@/content/home.js';
import { servicesContent, serviceDetailContent, serviceSeoMeta } from '@/content/services.js';
import { workContent, workDetailContent, workSeoMeta } from '@/content/work.js';
import { blogContent, blogSeoMeta } from '@/content/blog.js';
import { cleanArticleHtml } from '@/lib/blog-utils.js';
import { detectContentFormat } from '@/lib/markdown/format.js';
import { processMarkdown } from '@/lib/markdown/pipeline.js';
import { MarkdownContent } from '@/lib/markdown/renderer.js';
import { getArticleReadingTime, getArticleDescription } from '@/lib/markdown/helpers.js';
import { buildLinkedGraph } from './jsonld/graph.js';

export async function getServiceData(slug) {
  const fromCms = await Service.readOne(slug).catch(() => null);
  const service = fromCms || homeContent.services.drawers.find((s) => s.id === slug) || null;
  if (!service) return null;

  const meta = serviceSeoMeta[slug] || { title: service.title, description: service.summary };
  const detail = serviceDetailContent[slug] || {
    faqs: servicesContent.faqs,
    ctaBanner: servicesContent.ctaBanner,
    contactForm: servicesContent.contactForm,
  };

  const jsonLd = buildLinkedGraph({
    path: `/services/${slug}`,
    title: `${meta.title} | Next Web Works`,
    description: meta.description,
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: meta.title, url: `/services/${slug}` },
    ],
    primaryEntity: {
      '@type': 'Service',
      '@id': `https://nextwebworks.in/services/${slug}#service`,
      name: meta.title,
      description: meta.description,
      provider: { '@id': 'https://nextwebworks.in/#organization' },
      areaServed: 'Worldwide',
    },
    faqs: detail.faqs?.items,
    includeOrgAndSite: false,
  });

  return { service, detail, meta, jsonLd };
}

export async function getWorkData(slug) {
  const fromCms = await Portfolio.readOne(slug).catch(() => null);
  const work = fromCms || homeContent.workShowcase.samples.find((w) => w.id === slug) || null;
  if (!work) return null;

  const meta = workSeoMeta[slug] || { title: work.title, description: work.overview };
  const detail = workDetailContent[slug] || {
    faqs: workContent.faqs,
    ctaBanner: workContent.ctaBanner,
    contactForm: workContent.contactForm,
  };

  const jsonLd = buildLinkedGraph({
    path: `/work/${slug}`,
    title: `${meta.title} | Next Web Works`,
    description: meta.description,
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: meta.title, url: `/work/${slug}` },
    ],
    primaryEntity: {
      '@type': 'CreativeWork',
      '@id': `https://nextwebworks.in/work/${slug}#project`,
      name: meta.title,
      description: meta.description,
      creator: { '@id': 'https://nextwebworks.in/#organization' },
    },
    faqs: detail.faqs?.items,
    includeOrgAndSite: false,
  });

  return { work, detail, meta, jsonLd };
}

export async function getBlogPostData(slug) {
  const post = await Blog.readOne(slug).catch(() => null);
  if (!post) return null;

  const meta = blogSeoMeta[slug] || { title: post.title, description: getArticleDescription(post, 160) };
  const category = post.metadata?.category || 'White-Label Engineering';
  const format = detectContentFormat(post.content, post);
  const isMarkdown = format === 'markdown';
  const readingTime = getArticleReadingTime(post.content).text;

  let markdownElement = null;
  let headings = [];
  let cleanContent = '';

  if (isMarkdown) {
    const processed = await processMarkdown(post.content, post.title);
    headings = processed.headings;
    markdownElement = <MarkdownContent hast={processed.hast} />;
  } else {
    cleanContent = cleanArticleHtml(post.content);
  }

  const jsonLd = buildLinkedGraph({
    path: `/blog/${slug}`,
    title: `${meta.title} | Next Web Works`,
    description: meta.description,
    pageType: 'WebPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: meta.title, url: `/blog/${slug}` },
    ],
    primaryEntity: {
      '@type': 'BlogPosting',
      '@id': `https://nextwebworks.in/blog/${slug}#article`,
      headline: post.title,
      description: meta.description,
      datePublished: post.postedAt || post.createdAt,
      dateModified: post.lastUpdatedAt || post.updatedAt || post.postedAt || post.createdAt,
      author: {
        '@type': 'Person',
        '@id': 'https://nextwebworks.in/#founder',
        name: post.author?.name || 'Devansh',
      },
      publisher: { '@id': 'https://nextwebworks.in/#organization' },
      mainEntityOfPage: `https://nextwebworks.in/blog/${slug}`,
    },
    includeOrgAndSite: false,
  });

  return { post, meta, category, isMarkdown, readingTime, cleanContent, markdownElement, headings, jsonLd };
}

