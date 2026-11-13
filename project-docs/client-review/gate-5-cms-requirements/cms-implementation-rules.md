# Stage 5 CMS Implementation Rules & Architecture Standards

**Project Name:** Next Web Works  
**Technical Slug:** `nextwebworks-website`  
**CMS Integration Mode:** `cms` (NWW CMS Headless API)  
**Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## 1. Authoritative Backend Endpoints & Methods

All communication with the Next Web Works CMS backend strictly targets the verified multi-module route catalog:

| Model / Entity | Action | HTTP Method | Endpoint Route | Request Headers |
|---|---|:---:|---|---|
| **Blog Articles** | Create One | `POST` | `/api/blog/create-one` | `Authorization: Bearer ${CMS_TOKEN}`, `Content-Type: application/json` |
| **Blog Articles** | Get All (Listing) | `GET` | `/api/blog/get-all` | `Authorization: Bearer ${CMS_TOKEN}` |
| **Blog Articles** | Get One by Slug | `GET` | `/api/blog/get-one-by-slug/:slug` | `Authorization: Bearer ${CMS_TOKEN}` |
| **Lead Capture** | Submit Contact Lead | `POST` | `/api/lead/create-one` | `Authorization: Bearer ${CMS_TOKEN}`, `Content-Type: application/json` |
| **Lead Capture** | Newsletter Signup | `POST` | `/api/lead/create-one` | `Authorization: Bearer ${CMS_TOKEN}`, `Content-Type: application/json` |
| **Policies** | Create One | `POST` | `/api/website-privacy-policy/create-one` | `Authorization: Bearer ${CMS_TOKEN}`, `Content-Type: application/json` |
| **On-Demand ISR** | Trigger Revalidate | `POST` | `/api/revalidate` (Next.js Edge) | `Authorization: Bearer ${REVALIDATE_SECRET}` |

---

## 2. Authentication, Security & Secret Hygiene

1. **Bearer Authentication:** All write operations to the CMS API require the `CMS_TOKEN` passed in the `Authorization: Bearer <token>` header.
2. **Absolute Secret Hygiene:** The agent, scripts, and committed codebase must **NEVER** accept, record, or commit real API keys or bearer tokens. All tools reference environment variables strictly (`CMS_TOKEN`, `SERVER_URL`, `REVALIDATE_SECRET`).
3. **Environment Template (`.env.example`):** Placeholders are defined in root and `site/.env.example`.

---

## 3. Mongoose Strict-Mode Rules

The NWW CMS MongoDB backend enforces Mongoose strict mode (`strict: true`). Any field not explicitly declared in the collection's top-level schema is silently stripped on save:

1. **Mandatory `metadata` Container:**
   - Top-level `category`, `tags`, or `technologies` fields are **prohibited** in root JSON objects because MongoDB strips them.
   - All taxonomies must reside strictly inside the `metadata` object:
     ```json
     "metadata": {
       "category": "agency-growth",
       "tags": ["agency-growth", "web-development", "project-scoping"]
     }
     ```
2. **Timeline Preservation Flag (`editTimeFields`):**
   - The backend automatically overrides `postedAt` with `new Date()` unless `"editTimeFields": true` is explicitly provided.
   - Every seed payload must include `"editTimeFields": true` to preserve publication dates.
3. **Status Enums:**
   - Active status must be strictly `"published"`. Live public website queries (`site/app/blog/page.js`) filter strictly by `status === "published"`.

---

## 4. Lead Model Ingestion Protocol

In accordance with our architecture audit (confirming that NWW CMS uses the unified `Lead` collection for prospect capture), both the 5-field contact form and the footer newsletter utilize `/api/lead/create-one`:

### A. Contact Inquiry Payload
```json
{
  "name": "Agency Founder Name",
  "email": "lead@partneragency.com",
  "phone": "+919876543210",
  "notes": "Client Dev Brief Submission",
  "metadata": {
    "type": "contact-inquiry",
    "agencyName": "Apex Digital Studio",
    "teamSize": "11-25",
    "devWorkType": "Next.js Web Applications",
    "monthlyRequests": "3-5 projects",
    "projectScope": "Dedicated monthly dev support for client SaaS portal",
    "consent": true,
    "source": "contact-form"
  }
}
```

### B. Newsletter Subscription Payload
```json
{
  "name": "Newsletter Subscriber",
  "email": "subscriber@partneragency.com",
  "notes": "White-Label Engineering Digest Subscription",
  "metadata": {
    "type": "newsletter",
    "source": "footer-newsletter",
    "frequency": "max-2-per-month",
    "consent": true
  }
}
```

---

## 5. On-Demand ISR Revalidation Protocol

1. **Tag-Based Caching:** Next.js Server Components fetch blog posts with cache tags:
   `fetch(url, { next: { tags: ['cms:blog'] } })`
2. **Webhook Invalidation:** When a post is published or edited in NWW CMS, the CMS calls:
   `POST https://nextwebworks.in/api/revalidate`
   - Header: `Authorization: Bearer ${REVALIDATE_SECRET}`
   - Body: `{ "resource": "blog" }`
3. **Instant Cache Purge:** Next.js invokes `revalidateTag('cms:blog')`, purging edge cache without rebuilding the static deployment.

---

## 6. Zero Rates & Commercial Confidentiality

In strict adherence to the project's zero-rates mandate:
- **Zero Public Prices:** No CMS collection, seed file, or API payload may contain price figures, hourly rates, "from" prices, retainer tiers, or discount percentages.
- All pricing is scoped and quoted during the first discovery call.

