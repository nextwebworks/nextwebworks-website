// site/lib/svg/index.js - Unified SvgScene component and generator API

import { createPrng } from './prng.js';
import { renderSvgScene } from './registry.js';
import { SVG_VIEWBOX, FONT_STACK } from './tokens/constants.js';
import { SvgDefs, SvgPatternGrid, SvgCadFrame } from './primitives/index.js';

export function SvgScene({
  kind = 'blog',
  category = '',
  slug = '',
  title = '',
  aspectRatio = '16/9',
  className = 'w-full h-full',
  ariaLabel = '',
  decorative = false,
}) {
  const prng = createPrng(slug || category || 'nww');
  const vb = SVG_VIEWBOX[aspectRatio] || SVG_VIEWBOX['16/9'];
  const gridId = `grid-${prng.hexHash}-${slug.slice(0, 8) || 'nww'}`;
  const defsId = `defs-${prng.hexHash}`;
  const label = ariaLabel || title || `${category || 'Technical'} Architecture Schematic`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={vb.viewBox}
      fill="none"
      className={className}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? 'true' : undefined}
      aria-label={decorative ? undefined : label}
      style={{ fontFamily: FONT_STACK }}
    >
      {!decorative && <title>{label}</title>}

      {/* Base Canvas */}
      <rect width={vb.width} height={vb.height} className="fill-slate-50 dark:fill-[#0B0F19]" />

      <SvgDefs idPrefix={defsId} />
      <defs>
        <SvgPatternGrid id={gridId} size={20} />
      </defs>

      {/* Blueprint Grid & Glow Overlays */}
      <rect width={vb.width} height={vb.height} fill={`url(#${gridId})`} />
      <rect width={vb.width} height={vb.height} fill={`url(#${defsId}-glow)`} />

      {/* Outer CAD Frame & Corner Reticles */}
      <SvgCadFrame width={vb.width} height={vb.height} padding={20} />

      {/* Top Header Telemetry Strip */}
      <g transform="translate(40, 38)" aria-hidden="true">
        <circle cx="6" cy="6" r="3" fill="#10B981" />
        <text x="16" y="9" fontSize="10" fontWeight="600" className="fill-slate-500 dark:fill-[#94A3B8]" letterSpacing="1.2">
          SYS_SPEC {'//'} <tspan className="fill-[#2563EB] dark:fill-[#38BDF8]">{category.toUpperCase() || 'CORE'}</tspan>
        </text>
      </g>
      <g transform={`translate(${vb.width - 40}, 38)`} aria-hidden="true">
        <text x="0" y="9" textAnchor="end" fontSize="9" fontWeight="600" className="fill-slate-400 dark:fill-[#64748B]" letterSpacing="1">
          BUILD #{prng.hexHash}
        </text>
      </g>
      <line
        x1="24"
        y1="50"
        x2={vb.width - 24}
        y2="50"
        className="stroke-slate-200 dark:stroke-[#1E293B]"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Active Scene Content */}
      {renderSvgScene({ kind, category, slug, prng })}

      {/* Bottom Footer Telemetry Strip */}
      <line
        x1="24"
        y1={vb.height - 38}
        x2={vb.width - 24}
        y2={vb.height - 38}
        className="stroke-slate-200 dark:stroke-[#1E293B]"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <text x="40" y={vb.height - 20} fontSize="9" className="fill-slate-400 dark:fill-[#475569]">
        NEXT.JS 16 · REACT 19 · TURBOPACK · GSAP ULTRA
      </text>
      <text x={vb.width - 40} y={vb.height - 20} textAnchor="end" fontSize="9" className="fill-slate-400 dark:fill-[#475569]">
        STRICT WHITE-LABEL PROTOCOL
      </text>
    </svg>
  );
}

export { renderSvgScene };
