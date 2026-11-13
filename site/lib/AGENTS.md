# Library & Utilities Directives

## Architecture
- `lib/cms-kit/`: Direct class-based client layer for NWW CMS (`Blog`, `Lead`, `Policy`, `SEOHelper`, `PageConfig`).
- `lib/motion.js`: Dual motion tokens (GSAP easing curves + CSS transitions).
- `lib/utils.js`: Standard `cn()` class merger using `clsx` and `tailwind-merge`.

## Conventions
- Server Component queries use `fetch` with ISR tags (`next: { tags: ['cms:blog'] }`).
- Mutation actions (leads, newsletters) use Server Actions with honeypot validation.
- Motion tokens must always respect `prefers-reduced-motion`.

## Anti-patterns
- Never edit files in `lib/cms-kit/` directly without matching upstream references.
- Never hardcode API keys or secret tokens in client code.

## Commands
- `pnpm test`: Execute automated checks.
