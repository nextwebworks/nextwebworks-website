import { ImageResponse } from 'next/og';

export const alt = 'Next Web Works | White-Label Engineering Partner for Marketing Agencies';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Top Header / Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '22px',
              }}
            >
              W
            </div>
            <span style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
              NEXT WEB WORKS
            </span>
          </div>
          <div
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid #10B981',
              color: '#10B981',
              fontSize: '14px',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            WHITE-LABEL DEV PARTNER
          </div>
        </div>

        {/* Central Core Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              margin: 0,
              letterSpacing: '-1.5px',
            }}
          >
            Say Yes to Every Client Dev Request.
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#94A3B8',
              margin: 0,
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            Dedicated engineering fulfillment under your agency brand. Next.js, WordPress, Webflow, ERPs, and mobile apps.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #1E293B',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', color: '#CBD5E1', fontSize: '16px', fontWeight: 600 }}>
            <span>• Fixed-Price Quotes</span>
            <span>• Zero Client Contact</span>
            <span>• 14-Day Post-Launch Warranty</span>
          </div>
          <div style={{ color: '#64748B', fontSize: '15px', letterSpacing: '0.5px' }}>
            nextwebworks.in
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
