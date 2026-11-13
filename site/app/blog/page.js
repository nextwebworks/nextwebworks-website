import { Blog } from '@/lib/cms-kit/blog.js';
import BlogHeroSection from '../_components/blog/BlogHeroSection.js';
import BlogFeaturedSection from '../_components/blog/BlogFeaturedSection.js';
import BlogGridSection from '../_components/blog/BlogGridSection.js';
import BlogTopicsSection from '../_components/blog/BlogTopicsSection.js';
import BlogNewsletterSection from './_components/BlogNewsletterSection.js';
import BlogEditorialStandardsSection from './_components/BlogEditorialStandardsSection.js';
import FinalCTABanner from '../_components/FinalCTABanner.js';
import Schema from '@/components/seo/Schema.js';
import { buildLinkedGraph, buildRouteMetadata } from '@/lib/seo/index.js';
import { blogContent } from '@/content/blog.js';
import { stripHtml } from '@/lib/blog-utils.js';

export const metadata = buildRouteMetadata({
  title: 'Engineering Blog & Playbooks',
  description:
    'Tactical guides on agency operations, fixed-price project scoping, and headless CMS architectures for marketing agency operators and founders.',
  path: '/blog',
});

export default async function BlogIndexPage() {
  const { items } = await Blog.paginate({ page: 1, limit: 12 }).catch(() => ({ items: [] }));

  const processed = items.map((post) => ({
    ...post,
    cleanExcerpt: stripHtml(post.excerpt || post.content, post.title, 140),
  }));

  const featuredPost = processed[0] || null;
  const gridPosts = processed.slice(1);

  const jsonLd = buildLinkedGraph({
    path: '/blog',
    title: 'Engineering Blog & Playbooks | Next Web Works',
    description: metadata.description,
    pageType: 'CollectionPage',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
    ],
    includeOrgAndSite: false,
  });

  return (
    <div>
      <Schema schema={jsonLd} />
      <BlogHeroSection />
      <BlogFeaturedSection featuredPost={featuredPost} />
      <BlogGridSection posts={gridPosts.length > 0 ? gridPosts : processed} />
      <BlogTopicsSection />
      <BlogNewsletterSection content={blogContent} />
      <BlogEditorialStandardsSection content={blogContent} />
      <FinalCTABanner content={blogContent.indexCtaBanner} />
    </div>
  );
}
