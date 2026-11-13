# Stage 5 CMS Schema Specification & Data Dictionary

**Project Name:** Next Web Works  
**Technical Slug:** `nextwebworks-website`  
**Database Engine:** MongoDB via Mongoose (Strict Mode Enabled)  
**Approver:** Devansh  
**Last Updated:** 2026-11-11  

---

## 1. Overview & Mongoose Configuration

All data models in the Next Web Works CMS backend enforce strict schema validation:
- **`strict: true`**: Prohibits rogue keys at the document root. Taxonomies and custom attributes are nested under `metadata`.
- **`timestamps: true`**: Automatically maintains `createdAt` and `updatedAt` ISO date stamps.
- **`editTimeFields: true`**: Preserves manual `postedAt` timestamps when explicitly set.

---

## 2. Blog Collection Schema (`Blog`)

Target Collection: `blogs`  
API Route: `POST /api/blog/create-one` | `GET /api/blog/get-all` | `GET /api/blog/get-one-by-slug/:slug`

### Mongoose Schema Definition
```javascript
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    minlength: 2
  },
  slug: {
    type: String,
    required: [true, 'Blog slug is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase kebab-case']
  },
  content: {
    type: String,
    required: [true, 'HTML content is required']
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'published', 'archived'],
    default: 'published',
    index: true
  },
  postedAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  editTimeFields: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  metaTitle: {
    type: String,
    trim: true,
    maxlength: 70
  },
  metaDescription: {
    type: String,
    trim: true,
    maxlength: 160
  },
  cover_image: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  author_name: {
    type: String,
    default: 'Devansh'
  },
  author_image: {
    type: String,
    default: null
  },
  author: {
    mode: { type: String, enum: ['manual', 'existing'], default: 'manual' },
    name: { type: String, default: 'Devansh' },
    role: { type: String, default: 'Founder & Lead Engineer' },
    image: { type: String, default: null },
    url: { type: String, default: 'https://nextwebworks.in/about' }
  },
  faqs: [{
    question: { type: String, required: true },
    answer: { type: String, required: true }
  }],
  metadata: {
    category: { type: String, default: 'agency-growth' },
    tags: [{ type: String }]
  }
}, { timestamps: true });

// Compound Indexes for Performance
BlogSchema.index({ status: 1, postedAt: -1 });
BlogSchema.index({ slug: 1, status: 1 });
```

---

## 3. Lead Collection Schema (`Lead`)

Target Collection: `leads`  
API Route: `POST /api/lead/create-one`

### Mongoose Schema Definition
```javascript
const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Contact or subscriber name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email address format']
  },
  phone: {
    type: String,
    trim: true,
    default: null
  },
  notes: {
    type: String,
    trim: true,
    default: null
  },
  metadata: {
    type: {
      type: String,
      enum: ['contact-inquiry', 'newsletter'],
      required: true
    },
    agencyName: { type: String, default: null },
    teamSize: { type: String, default: null },
    devWorkType: { type: String, default: null },
    monthlyRequests: { type: String, default: null },
    projectScope: { type: String, default: null },
    source: { type: String, default: 'website' },
    frequency: { type: String, default: null },
    consent: { type: Boolean, required: true, default: true }
  }
}, { timestamps: true });

LeadSchema.index({ email: 1, 'metadata.type': 1 });
LeadSchema.index({ createdAt: -1 });
```

---

## 4. Policy Collection Schema (`Policy`)

Target Collection: `policies`  
API Route: `POST /api/website-privacy-policy/create-one`

### Mongoose Schema Definition
```javascript
const PolicySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Policy title is required'],
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'Policy slug is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  content: {
    type: String,
    required: [true, 'HTML content is required']
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'published', 'archived'],
    default: 'published'
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  editTimeFields: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  metaTitle: {
    type: String,
    trim: true
  },
  metaDescription: {
    type: String,
    trim: true
  },
  canonicalUrl: {
    type: String,
    trim: true
  }
}, { timestamps: true });

PolicySchema.index({ slug: 1 });
```

---

## 5. Seed Validation Standards & Compilation Mapping

All compiled seed files in `project-docs/client-review/gate-5-cms-content/` are validated against strict Zod definitions matching the Mongoose schemas above prior to database transmission.

