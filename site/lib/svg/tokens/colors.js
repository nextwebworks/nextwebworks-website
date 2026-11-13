// site/lib/svg/tokens/colors.js - Theme tokens and palette for inline SVGs

export const SVG_COLORS = {
  canvas: {
    dark: '#0B0F19',
    light: '#F8FAFC',
    class: 'fill-slate-50 dark:fill-[#0B0F19]',
  },
  surface: {
    dark: '#0F172A',
    light: '#FFFFFF',
    class: 'fill-white dark:fill-[#0F172A]',
  },
  surfaceSubtle: {
    dark: '#1E293B',
    light: '#F1F5F9',
    class: 'fill-slate-100 dark:fill-[#1E293B]',
  },
  border: {
    dark: '#1E293B',
    light: '#E2E8F0',
    class: 'stroke-slate-200 dark:stroke-[#1E293B]',
  },
  borderSubtle: {
    dark: 'rgba(255, 255, 255, 0.08)',
    light: 'rgba(15, 23, 42, 0.08)',
    class: 'stroke-slate-300/40 dark:stroke-slate-800/60',
  },
  cobalt: {
    base: '#2563EB',
    light: '#38BDF8',
    dark: '#1D4ED8',
    class: 'text-[#2563EB] dark:text-[#38BDF8]',
  },
  emerald: {
    base: '#10B981',
    light: '#34D399',
    glow: 'rgba(16, 185, 129, 0.2)',
  },
  text: {
    primary: 'fill-slate-900 dark:fill-[#F8FAFC]',
    muted: 'fill-slate-600 dark:fill-[#94A3B8]',
    caption: 'fill-slate-400 dark:fill-[#64748B]',
  },
};
