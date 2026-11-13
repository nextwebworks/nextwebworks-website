import { SEO_CONFIG } from '@/lib/seo/config.js';

export default function robots() {
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_GUARD === 'true';

  if (isPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${SEO_CONFIG.siteUrl}/sitemap.xml`,
  };
}
