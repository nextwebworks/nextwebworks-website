import { ImageResponse } from 'next/og';
import { Service } from '@/lib/cms-kit/service.js';
import { homeContent } from '@/content/home.js';

export const alt = 'Next Web Works Engineering Capability';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const STATIC_SERVICES = homeContent.services.drawers;

async function getService(slug) {
  const fromCms = await Service.readOne(slug).catch(() => null);
  if (fromCms) return fromCms;
  return STATIC_SERVICES.find((s) => s.id === slug) || null;
}

export default async function Image({ params }) {
  const { slug } = await params;
  const service = await getService(slug);
  const title = service?.title || 'Engineering Capability';
  const tag = service?.tag || 'Full-Stack Development';

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
            <span style={{ fontSize: '22px', fontWeight: 'bold' }}>NEXT WEB WORKS · SERVICES</span>
          </div>
          <div
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid #10B981',
              color: '#10B981',
              fontSize: '13px',
              fontWeight: 'bold',
            }}
          >
            {tag}
          </div>
        </div>

        {/* Service Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ color: '#38BDF8', fontSize: '15px', fontWeight: 'bold', letterSpacing: '1px' }}>
            AGENCY ENGINEERING CAPABILITY
          </span>
          <h1
            style={{
              fontSize: '52px',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-1px',
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: '22px', color: '#94A3B8', margin: 0, maxWidth: '880px', lineHeight: 1.4 }}>
            Delivered under your agency brand with fixed quotes, zero client contact, and 14-day warranty.
          </p>
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
          <div style={{ display: 'flex', gap: '20px', color: '#CBD5E1', fontSize: '16px' }}>
            <span>• Fixed-Price Sprint</span>
            <span>• Dedicated Bench</span>
            <span>• Strict Mutual NDA</span>
          </div>
          <div style={{ color: '#64748B', fontSize: '15px' }}>
            nextwebworks.in/services
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
