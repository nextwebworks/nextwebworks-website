import { ImageResponse } from 'next/og';
import { Blog } from '@/lib/cms-kit/blog.js';

export const alt = 'Next Web Works Engineering Article';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { slug } = await params;
  const post = await Blog.readOne(slug).catch(() => null);
  const title = post?.title || 'Engineering Playbook';
  const category = post?.metadata?.category || 'White-Label Engineering';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0B0F19',
          color: '#F8FAFC',
          padding: '64px',
          fontFamily: 'sans-serif',
          border: '12px solid #1E293B',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '20px',
              }}
            >
              W
            </div>
            <span style={{ fontSize: '22px', fontWeight: 'bold' }}>NEXT WEB WORKS · BLOG</span>
          </div>
          <div
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid #38BDF8',
              color: '#38BDF8',
              fontSize: '13px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </div>
        </div>

        {/* Post Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ color: '#10B981', fontSize: '15px', fontWeight: 'bold', letterSpacing: '1px' }}>
            AGENCY PLAYBOOK // ARTICLE
          </span>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-1px',
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #1E293B',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '20px', color: '#94A3B8', fontSize: '16px' }}>
            <span>By Devansh, Principal Engineer</span>
            <span>•</span>
            <span>Technical White-Label Playbook</span>
          </div>
          <div style={{ color: '#64748B', fontSize: '15px' }}>
            nextwebworks.in/blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

