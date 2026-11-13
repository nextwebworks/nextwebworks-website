---
trigger: glob
globs: "**/site/content/**,**/site/app/**"
description: Enforces One Concept One Home, One Objective Per Section, One Terminology, and One Primary CTA copy standards across the platform.
---

# Copy & Content Standards (`copy-standards.md`)

All content modules under `site/content/` and section components under `site/app/` must strictly adhere to the four non-negotiable content architecture invariants:

## 1. One Concept, One Home
- **Ownership Invariant:** Every concept (each of the 5 services, the 4-step delivery protocol, the 14-day warranty, the 3 commercial engagement models, the founder story & operations, architectural proof, and specific FAQ topics) is owned by exactly **one** section.
- **Reference-Only Secondary Mentions:** Everywhere else across the site, a concept may only be **referenced briefly** with a link to its owner (`href="/owner#anchor"`), never re-described or re-listed in altered wording.
- **Allowlist:** Navigation bars and footer link lists are permitted to list anchor links without descriptive copy.

## 2. One Objective Per Section
- Every section component (`// section: <id>`) must have **exactly one stated objective** registered in `project-docs/concept-map.json`:
  1. The single objective it serves (e.g. orient, explain, differentiate, prove, reduce risk, handle an objection, convert).
  2. The primary reader question it answers.
  3. One clear takeaway.
  4. At most one primary action.
- Any section that cannot state one distinct objective must be eliminated or merged.
- Minimum 5 body sections per page must satisfy **five different objectives**, not five restatements of the same idea.

## 3. One Terminology
- Every service, offer model, process step, and action must strictly use its canonical name codified in `project-docs/concept-map.json` and `project-docs/content-architecture.md`.
- Prohibited aliases and marketing buzzwords are banned. The same thing is never named two different ways.

## 4. One Primary CTA Per Page
- Each page features **exactly one primary CTA** (`/book-a-call`), consistent with the page goal.
- Dedicated booking routes (`/book-a-call`) must never render circular CTA banners pointing back to themselves.

## 5. Prohibited Phrases (Banned Clichés)
Under no circumstances may copy, metadata, or JSON-LD contain:
`unlock`, `elevate`, `seamless`, `leverage`, `cutting-edge`, `state-of-the-art`, `in today's fast-paced world`, `game-changer`, `revolutionize`, `bespoke`, `tailored solutions`, `supercharge`, `empower`, or "not just X but Y" syntactical constructions.

