---
trigger: always_on
description: Enforces hard content-uniqueness across all pages and sections with zero cross-page text repeats.
---

# Unique Content Per Page Rule

## 1. Non-Repeating Content Invariant
- **Only Section TYPES May Repeat:** Generic section primitives (`Hero`, `FAQ`, `Final CTA`, `Contact Form`, card grids, workflows, and bento layouts) may be composed across different routes.
- **Zero Content Repeats:** No text block of $\ge 4$ words or $\ge 25$ characters may appear on more than one page, or twice on the same page.
- **No Exact Section Repeats:** No exact section (same type with identical normalized copy) may appear on a second page or twice on one page.
- **Granular Text Scope:** Headings, eyebrows, paragraphs, list items, card text, FAQ questions, FAQ answers, CTA headlines, and supporting lines must each be strictly unique across the entire site.

## 2. Shared Contact Form Contract
- Shared `ContactFormSection` keeps its shared input field labels, placeholders, select options, and client-side validation error messages.
- The section's **heading and intro/description copy must be unique per page** and sourced from decoupled content modules in `site/content/`.

## 3. FAQ Depth Floor
- Every page rendering an FAQ section must compose a **minimum of 5 Q&A items**.
- **Every FAQ answer must be $\ge 25$ words**.
- **Zero Identical FAQ Questions:** Identical or near-duplicate questions across different pages are strictly prohibited.

## 4. Strict Allowlist
The following functional elements are strictly exempt from cross-page duplication checks:
1. Form field labels, placeholders, select dropdown options, and validation messages.
2. Form consent notices linking to `/privacy`.
3. Button microcopy under 4 words (e.g. *"Book a 30-Min Call"*, *"View Technical Specs ↓"*).
4. Breadcrumb navigation labels (`"Home"`, `"Services"`, `"Work"`, `"Blog"`).
5. Listing-card teasers linking to their own detail entry (`/services`, `/work`, `/blog`).
6. Statutory legal/policy body text from CMS (`/privacy`, `/terms`).
7. Step sequence badges (`"Step 01 · Specification Intake"`) and publication date bylines (`"Published on ... · By Devansh, Principal Engineer"`).

