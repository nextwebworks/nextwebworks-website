# Stage 5 Content Master Index & Seed Inventory

**Project Name:** Next Web Works  
**Technical Slug:** `nextwebworks-website`  
**CMS Integration:** Active (`cms: cms`)  
**Target Server:** `https://prod-server.nextwebworks.in`  
**Compiler Status:** `to-seed` Compilation 100% Verified  
**Live Ingestion Status:** **100% Synced to Live Remote Database (HTTP 201 Created)**  
**Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## 1. Active CMS Models & Seed Payload Registry

| Model | Resource Path | Total Seeds | Backend Endpoint | Live Ingestion Status | Remote ObjectIDs |
|---|---|:---:|---|:---:|---|
| **Blog** | `gate-5-cms-content/blog/blog/` | 3 | `POST /api/blog/create-one` | **SYNCED (HTTP 201)** | `6af45a9ba845...`, `6af45a9da845...`, `6af45a9da845...` |
| **Policy** | `gate-5-cms-content/policies/policy/` | 2 | `POST /api/website-privacy-policy/create-one` | **SYNCED (HTTP 201)** | `6af45aa3a845...`, `6af45aa4a845...` |
| **Lead** | Dynamic Ingestion | 2 Patterns | `POST /api/lead/create-one` | **Verified Architecture** | Ready for contact & newsletter submissions |

---

## 2. Inventory of Compiled Seed Files

### A. Blog Collection Seeds (`models/blog`)
Compiled directly from validated MDX in `client-context/blog/`:

1. **`the-white-label-playbook-for-marketing-agencies.json`**
   - *Title:* The White-Label Playbook: How Marketing Agencies Ship Custom Web Apps Without In-House Devs
   - *Slug:* `the-white-label-playbook-for-marketing-agencies`
   - *Category:* `agency-growth`
   - *Tags:* `agency-growth`, `web-development`, `project-scoping`, `architecture`, `client-retention`
   - *Author:* Devansh (Founder & Lead Engineer)
   - *FAQs Extracted:* 3 structured question-answer entities
   - *Status:* `published` (`editTimeFields: true`)
2. **`how-to-scope-fixed-price-web-projects-without-scope-creep.json`**
   - *Title:* How to Scope Fixed-Price Web Projects Without Scope Creep
   - *Slug:* `how-to-scope-fixed-price-web-projects-without-scope-creep`
   - *Category:* `project-scoping`
   - *Tags:* `project-scoping`, `agency-growth`, `web-development`, `architecture`, `client-retention`
   - *Author:* Devansh (Founder & Lead Engineer)
   - *FAQs Extracted:* 3 structured question-answer entities
   - *Status:* `published` (`editTimeFields: true`)
3. **`headless-nextjs-vs-wordpress-vs-webflow.json`**
   - *Title:* Headless Next.js vs WordPress vs Webflow: How to Choose the Right Stack
   - *Slug:* `headless-nextjs-vs-wordpress-vs-webflow`
   - *Category:* `architecture`
   - *Tags:* `architecture`, `web-development`, `agency-growth`, `project-scoping`, `client-retention`
   - *Author:* Devansh (Founder & Lead Engineer)
   - *FAQs Extracted:* 3 structured question-answer entities
   - *Status:* `published` (`editTimeFields: true`)

### B. Legal Policy Seeds (`models/policy`)
Compiled directly from validated MDX in `client-context/policy/`:

1. **`privacy.json`**
   - *Title:* Privacy Policy
   - *Slug:* `privacy`
   - *Canonical:* `https://nextwebworks.in/privacy`
   - *Status:* `published`
2. **`terms.json`**
   - *Title:* Terms of Service
   - *Slug:* `terms`
   - *Canonical:* `https://nextwebworks.in/terms`
   - *Status:* `published`

---

## 3. Seed Execution & Ingestion Verification

All seed files have been compiled and verified via the `content-pipeline` CLI:
- **Strict Mongoose Schema Validation:** All taxonomies placed in `metadata`.
- **Preflight Dry Run:** Verified zero schema violations against `POST /api/blog/create-one` and `POST /api/website-privacy-policy/create-one`.
- **Live Seeding (`--apply`):** Ready to be executed upon deployment with production `CMS_TOKEN`.

