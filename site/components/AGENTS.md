# Shared Components Directives

## Architecture
- Contains reusable elements across 2+ pages: `Nav.js`, `Footer.js`, `WhatsAppButton.js`, `ResponsiveImage.js`, and `seo/Schema.js`.
- Keep components flat under `components/` except specialized sub-directories (`components/seo/`, `components/motion/`).

## Conventions
- Use pure Tailwind utility classes in JSX.
- Focus rings strictly enforced: `focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`.
- `WhatsAppButton.js` enforces the exact 4-line context format without personal or behavioural tracking.

## Anti-patterns
- Never import CSS modules or use custom inline `style={{...}}`.
- Never place unvalidated external links without `rel="noopener noreferrer"`.
- Never duplicate form logic; reuse CMS lead submission action.

## Commands
- `pnpm check:structure`: Validate shared component architecture.
