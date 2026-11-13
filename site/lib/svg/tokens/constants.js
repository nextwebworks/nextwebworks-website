// site/lib/svg/tokens/constants.js - Geometry, stroke, and layout constants

export const SVG_VIEWBOX = {
  '16/9': { width: 800, height: 450, viewBox: '0 0 800 450' },
  '16/10': { width: 800, height: 500, viewBox: '0 0 800 500' },
  '4/3': { width: 800, height: 600, viewBox: '0 0 800 600' },
  '1/1': { width: 600, height: 600, viewBox: '0 0 600 600' },
};

export const SVG_STROKES = {
  hairline: 1,
  normal: 1.5,
  accent: 2,
  bold: 3,
};

export const SVG_RADII = {
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14,
  pill: 9999,
};

export const FONT_STACK = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
