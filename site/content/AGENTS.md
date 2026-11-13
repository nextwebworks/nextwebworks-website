# Content Architecture Directives

## Architecture
- Static copy and structured data are decoupled into `site/content/<slug>.js`.
- Shared copy resides in `site/content/shared/` (`nav.js`, `footer.js`).
- Dynamic articles and legal policies are stored in NWW CMS and queried via `@/lib/cms-kit`.

## Conventions
- Verbatim copy adheres strictly to the approved design theory and voice & tone standards.
- Marked placeholders use `data-placeholder="true"` until client-provided assets arrive.
- Zero rate figures, pricing tables, or hourly rates in any content file.

## Anti-patterns
- Never inline large static text blocks inside section JSX files; isolate to `content/`.
- Never invent client logos, metrics, or testimonials.

## Commands
- `pnpm check:structure`: Validate content module integrity.
