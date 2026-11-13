---
name: add-feature-in-repo-style
description: Guides the discovery and mirroring of existing component, content, and data-access patterns in the repository when adding a new page, section, or capability.
---

# Add Feature in Repository Style

Follow this procedure when creating new pages, sections, or components to ensure seamless alignment with established Next Web Works patterns.

## 1. Locate Analogous Patterns
- **Pages:** Inspect `site/app/about/page.js` or `site/app/for-agencies/page.js` for thin Server Component structure (<= 80 lines).
- **Sections:** Inspect `site/app/_components/ServicesSection.js` or `site/app/_components/WorkflowSection.js` for section header comments, `data-section`, and Tailwind layout patterns (<= 250 lines).
- **Interactive Leaves:** Inspect `site/app/book-a-call/_components/CalEmbed.js` for client components (`'use client'`) with error boundaries and fallbacks.
- **Content:** Inspect `site/content/home.js` for decoupled static text and metadata objects.

## 2. Implementation Rules
1. Never place `'use client'` on `page.js`.
2. Open every section component with `// section: <id>` and attach `data-section="<id>"` to its root element.
3. Use pure Tailwind CSS utility classes; avoid custom inline styles or CSS modules.
4. If the feature touches data access, use `@/lib/cms-kit/` models or Server Actions with honeypots.

## 3. Verify
Run `pnpm --dir site check:structure` and `pnpm --dir site build` to confirm the new feature conforms to line limits and builds cleanly.

