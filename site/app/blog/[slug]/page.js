import { notFound } from 'next/navigation';
import { Blog } from '@/lib/cms-kit/blog.js';
import Schema from '@/components/seo/Schema.js';
import { getBlogPostData } from '@/lib/seo/helpers.js';
import { buildRouteMetadata } from '@/lib/seo/index.js';
import { blogContent, blogSeoMeta } from '@/content/blog.js';
import { getArticleDescription } from '@/lib/markdown/helpers.js';
import BlogArticleHeaderSection from '../../_components/blog/BlogArticleHeaderSection.js';
import BlogArticleBodySection from '../../_components/blog/BlogArticleBodySection.js';
import BlogArticleAuthorSection from '../../_components/blog/BlogArticleAuthorSection.js';
import BlogArticleRelatedSection from '../../_components/blog/BlogArticleRelatedSection.js';
import BlogArticleKeyTakeawaysSection from './_components/BlogArticleKeyTakeawaysSection.js';
import BlogArticleDiscussionSection from './_components/BlogArticleDiscussionSection.js';
import FinalCTABanner from '../../_components/FinalCTABanner.js';

export async function generateStaticParams() {
  const slugs = await Blog.getSlugs({ limit: 20 }).catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await Blog.readOne(slug).catch(() => null);
  if (!post) return { title: 'Post Not Found' };
  const meta = blogSeoMeta[slug] || { title: post.title, description: getArticleDescription(post, 160) };
  return buildRouteMetadata({
    title: meta.title,
    description: meta.description,
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.postedAt || post.createdAt,
    modifiedTime: post.lastUpdatedAt || post.updatedAt || post.postedAt || post.createdAt,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const data = await getBlogPostData(slug);
  if (!data) notFound();
  const { post, category, readingTime, cleanContent, markdownElement, isMarkdown, headings, jsonLd } = data;

  return (
    <article>
      <Schema schema={jsonLd} />
      <BlogArticleHeaderSection post={post} category={category} readingTime={readingTime} />
      <BlogArticleBodySection
        cleanContent={cleanContent}
        markdownElement={markdownElement}
        isMarkdown={isMarkdown}
        headings={headings}
        callout={blogContent.articleCalloutBySlug?.[slug]}
      />
      <BlogArticleAuthorSection slug={slug} />
      <BlogArticleRelatedSection currentSlug={slug} />
      <BlogArticleKeyTakeawaysSection post={post} />
      <BlogArticleDiscussionSection post={post} />
      <FinalCTABanner content={blogContent.articleCtaBannerBySlug[slug] || blogContent.articleCtaBanner} />
    </article>
  );
}
