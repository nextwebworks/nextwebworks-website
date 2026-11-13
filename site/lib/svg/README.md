# Modular SVG Generator Library

A modular, theme-aware, deterministic SVG generator library engineered for Next.js 16 and Tailwind CSS v4.

## Directory Structure
- `tokens/`: Colors, stroke weights, corner radii, and viewBox constants.
- `primitives/`: Atomic SVG components (frames, patterns, defs, nodes, cards, chips).
- `scenes/`: Category-specific scene compositions (blog, service, work).
- `prng.js`: Seeded PRNG (Mulberry32) ensuring build-stable deterministic variations per slug.
- `registry.js`: Central dispatcher mapping `(kind, category, slug)` to composable scenes.
- `index.js`: Main entry point exporting the `<SvgScene />` component.

## Usage Example
```jsx
import { SvgScene } from '@/lib/svg';

// Blog card cover
<SvgScene
  kind="blog"
  category="White-Label Engineering"
  slug="the-white-label-playbook"
  aspectRatio="16/9"
  ariaLabel="White-Label Engineering Architecture Cover"
/>

// Service capability diagram
<SvgScene
  kind="service"
  category="Web Applications"
  slug="web-apps"
  aspectRatio="16/9"
  ariaLabel="Web Applications System Architecture Diagram"
/>
```

## Accessibility & Theming
- Renders inline React JSX elements with `role="img"` and `<title>` tag for screen readers.
- Sets `aria-hidden="true"` when `decorative={true}` is passed.
- Adapts seamlessly to light and dark themes using semantic Tailwind utility classes without relying on `<img>` tags.
