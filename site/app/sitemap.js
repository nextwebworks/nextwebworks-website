import { Blog } from '@/lib/cms-kit/blog.js';
import { Service } from '@/lib/cms-kit/service.js';
import { Portfolio } from '@/lib/cms-kit/portfolio.js';
import { homeContent } from '@/content/home.js';
import { SEO_CONFIG } from '@/lib/seo/config.js';

export default async function sitemap() {
  const baseUrl = SEO_CONFIG.siteUrl;

  const staticRoutes = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/for-agencies', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/work', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/book-a-call', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/feed.xml', changeFrequency: 'weekly', priority: 0.5 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Service routes (CMS + static fallback)
  let serviceRoutes = [];
  try {
    const cmsSlugs = await Service.getSlugs({ limit: 50 }).catch(() => []);
    const staticSlugs = homeContent.services.drawers.map((d) => d.id);
    const allServiceSlugs = Array.from(new Set([...cmsSlugs, ...staticSlugs]));
    serviceRoutes = allServiceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  } catch (err) {
    console.error('[sitemap] Error fetching service slugs:', err);
  }

  // Work routes (CMS + static fallback)
  let workRoutes = [];
  try {
    const cmsSlugs = await Portfolio.getSlugs({ limit: 50 }).catch(() => []);
    const staticSlugs = homeContent.workShowcase.samples.map((s) => s.id);
    const allWorkSlugs = Array.from(new Set([...cmsSlugs, ...staticSlugs]));
    workRoutes = allWorkSlugs.map((slug) => ({
      url: `${baseUrl}/work/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));
  } catch (err) {
    console.error('[sitemap] Error fetching work slugs:', err);
  }

  // Blog routes with actual post lastModified dates
  let blogRoutes = [];
  try {
    const { items: posts } = await Blog.paginate({ page: 1, limit: 50 }).catch(() => ({ items: [] }));
    if (posts && posts.length > 0) {
      blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.lastUpdatedAt || post.updatedAt || post.postedAt || Date.now()).toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    } else {
      const slugs = await Blog.getSlugs({ limit: 50 }).catch(() => []);
      blogRoutes = slugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error('[sitemap] Error fetching blog slugs:', err);
  }

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...blogRoutes];
}
