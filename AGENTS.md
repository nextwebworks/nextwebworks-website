# Next Web Works - AI Agent Directives

## 1. Project Purpose
Next Web Works (`nextwebworks-website`) is an agency-facing engineering consultancy website built to showcase white-label Next.js, WordPress, Webflow, and mobile application engineering capabilities under strict confidentiality and zero rates disclosure.

## 2. Technical Stack
- **Framework:** Next.js 16.4.6 (App Router, Turbopack, React 19.3.0)
- **Styling:** Pure Tailwind CSS v4.3.3 (zero custom CSS files or `@apply` in `globals.css`)
- **Motion:** `ultra` motion tier (GSAP 3.15.1 + Lenis 1.3.27 smooth scroll synchronized to `gsap.ticker`)
- **CMS:** Class-based headless NWW CMS kit (`@/lib/cms-kit`)
- **Architecture Spec:** @docs/ARCHITECTURE.md

## 3. Repository Map
- `site/`: Next.js 16 web application root (all app code, components, content, and scripts reside here)
  - `site/app/`: App Router pages (thin Server Components <= 80 lines), sitemap, and Server Actions
  - `site/app/_components/`: Section components (<= 250 lines, `// section: <id>`, `data-section="<id>"`)
  - `site/components/`: Shared UI components (`Nav.js`, `Footer.js`, `WhatsAppButton.js`, `motion/`)
  - `site/content/`: Decoupled static copy and structured JSON-LD entities
  - `site/lib/`: Shared utilities (`utils.js`, `motion.js`), Markdown pipeline (`markdown/`), and CMS client layer (`cms-kit/`). Blog supports dual HTML & Markdown formats with server-side RSC rendering, Shiki syntax highlighting, and on-demand Mermaid diagrams.
- `client-context/`: Client answers, approved copy, brand identity, and conversion blueprints
- `project-docs/`: Architecture specifications, review gates, and master router state (`router-state.md`)
- `.agents/`: Antigravity rules, skills, and safety hooks

## 4. Exact Execution Commands
Always run commands with `--dir site` when invoked from the repository root:
- `pnpm --dir site dev`: Start Next.js local development server
- `pnpm --dir site build`: Create optimized production build
- `pnpm --dir site start`: Run local production server
- `pnpm --dir site lint`: Run ESLint checks
- `pnpm --dir site check:structure`: Validate file line ceilings (page <= 80, sections <= 250), minimum 5 body sections per page (excluding Nav, Hero, CTA, FAQ, Contact Us, and Footer), and RSC rules
- `pnpm --dir site check:assets`: Verify asset manifest and zero-stock integrity
- `pnpm --dir site check:content`: Validate hard content uniqueness, zero cross-page text repeats, and FAQ depth floor (run after build)
- `pnpm --dir site check:seo`: Run post-build technical and on-page SEO hard gate audit across all routes
- `pnpm --dir site check:all`: Run lint, structure audit, and asset audit in sequence

## 5. Workflow Discipline
1. **Read Before Writing:** Inspect analogous existing files, nested `AGENTS.md` files, and content blueprints before creating or modifying code.
2. **Mirror Existing Patterns:** Adhere to existing component signatures, import aliases (`@/...`), and error handling patterns.
3. **Plan First:** On multi-file changes, produce a structured implementation plan and obtain approval before editing.
4. **Scope Control:** Modify only files directly required for the task. Never touch unrelated features.

## 6. Mandatory Editing Rule
Create and modify files **exclusively** with Antigravity editor tools (`write_file`, `edit_file`). Never use shell redirects (`>`, `>>`), heredocs, sed (`sed -i`), perl (`perl -pi`), or automated find-and-replace scripts.

## 7. Forbidden Without Explicit Approval
- Adding, updating, or removing dependencies in `package.json`.
- Modifying, reading, or printing secrets in `.env*` or `.env*.local` (except `.env.example`).
- Executing production deployments (`vercel --prod`) or publishing live artifacts.
- Destructive git operations (`git reset --hard`, `git clean -fd`, `git push --force`).
- Violating the **Zero Rates Policy** (introducing prices, hourly figures, retainers, or split percentages anywhere).
- Violating the **Zero Stock Policy** (`stock_ceiling: 0` - use only in-house SVGs or authentic photos).

## 8. Verification Definition
Never declare a task completed without measured evidence:
1. Run `pnpm --dir site check:structure` to ensure line ceilings and RSC rules pass with 0 errors.
2. Run `pnpm --dir site check:assets` to ensure asset manifests and zero-stock integrity remain valid.
3. Run `pnpm --dir site build` to confirm zero static prerender or compilation errors across all routes.
4. Run `pnpm --dir site check:content` to confirm zero content repeats, single-objective section mapping, and concept ownership compliance (see .agents/rules/copy-standards.md and .agents/rules/unique-content-per-page.md).
5. Run `pnpm --dir site check:seo` to confirm zero metadata, canonical, JSON-LD, heading, or sitemap violations (see .agents/rules/seo-standards.md).
6. Verify responsiveness and visual rendering in the browser.

## 9. Definition of Done
A task is done only when all automated checks pass cleanly, all line ceilings are respected, git status shows only intentional changes, and tangible verification output is presented.

