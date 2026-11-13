<!-- BEGIN:nextjs-agent-rules -->
# Next Web Works - Engineering Directives & Standards

## Project Identity
- **Name:** Next Web Works (`nextwebworks-website`)
- **Framework:** Next.js App Router (RSC by default)
- **Styling:** Pure Tailwind CSS utility classes in JSX
- **Motion Tier:** `ultra` (GSAP 3 + Lenis sync, respecting `prefers-reduced-motion`)
- **Package Manager:** `pnpm`
<!-- END:nextjs-agent-rules -->

## Architecture
- React Server Components by default; leaf client components for forms, drawers, and motion.
- Thin `page.js` <= 80 lines; section components in `_components/` <= 250 lines.
- Pure Tailwind in JSX; zero custom CSS files or `@apply` in `globals.css`.
- Standard page-bottom stack: FAQ -> Final CTA Banner -> Contact Form -> Footer.

## Conventions
- Every section component must open with `// section: <id>` and render `data-section="<id>"`.
- Zero public prices, hourly rates, or retainer figures across all pages.
- Zero stock photography (`stock_ceiling: 0`). Vector SVGs and authentic photos only.
- Inbound leads route to NWW CMS (`Lead` model helper) via Server Action.

## Anti-patterns
- Never place `'use client'` on `page.js` or root `layout.js`.
- Never use `@apply` in `globals.css` or write custom `.module.css`.
- Never commit `.env.local` or hardcode credentials.
- Never invent client logos, statistics, or metrics.

## Commands
- `pnpm dev`: Start local development server.
- `pnpm build`: Verify production build.
- `pnpm check:structure`: Validate file line ceilings and RSC rules.
- `pnpm check:assets`: Validate asset manifest entries and zero-stock integrity.
- `pnpm check:all`: Run complete test suite.
