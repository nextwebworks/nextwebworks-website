---
name: plan-first
description: Audits the codebase, identifies files to modify, assesses risks, and prepares a structured implementation plan artifact for user approval before making any file changes.
---

# Plan-First Procedure

Follow this multi-step procedure whenever requested to implement a complex feature, refactor, or multi-file architectural change.

## 1. Inspection & Research
1. Locate existing analogous components, content modules, or API routes in `site/`.
2. Inspect nested `AGENTS.md` files (`site/app/AGENTS.md`, `site/components/AGENTS.md`, `site/lib/AGENTS.md`).
3. Check `client-context/` for approved copy, blueprints, and requirements.

## 2. Draft Implementation Plan Artifact
Create an artifact in the conversation artifact directory (`implementation-plan-*.md`) containing:
- **Objective:** Concise summary of what will be implemented.
- **File Inventory:** Exact list of files to create, edit, or delete with a one-line description of each.
- **Architecture & Conventions:** Line ceilings (page <= 80, section <= 250), Tailwind styling, and RSC boundary alignment.
- **Risks & Open Questions:** Technical tradeoffs, browser compatibility, and external dependency risks.
- **Verification Plan:** Exact verification commands (`pnpm --dir site check:all`, `build`) and proof output to collect.

## 3. Approval Gate (Mandatory Stop)
- Always set `RequestFeedback: true` in the artifact metadata.
- **STOP** and wait for explicit user approval before executing any file edits.

