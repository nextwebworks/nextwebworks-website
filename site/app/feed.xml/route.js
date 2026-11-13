import { Blog } from '@/lib/cms-kit/blog.js';
import { SEO_CONFIG } from '@/lib/seo/config.js';

export const dynamic = 'force-static';
export const revalidate = 3600;

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const base = SEO_CONFIG.siteUrl;
  const { items: posts } = await Blog.paginate({ page: 1, limit: 50 }).catch(() => ({ items: [] }));

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${base}/blog/${post.slug}`;
      const pubDate = new Date(post.postedAt || post.createdAt || Date.now()).toUTCString();
      const summary = post.summary || post.metaDescription || post.title;

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(summary)}</description>
      <author>devansh@nextwebworks.in (${escapeXml(post.author?.name || 'Devansh')})</author>
      <category>${escapeXml(post.metadata?.category || 'White-Label Engineering')}</category>
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SEO_CONFIG.siteName)} Engineering Feed</title>
    <link>${base}/blog</link>
    <description>White-label development playbooks, agency operational scoping, and technical architecture guides.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

