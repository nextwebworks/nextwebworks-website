# Next Web Campus — Technical Case Study & Engineering Record

**Slug:** `next-web-campus`  
**Previous Name:** EduManage  
**Project Archetype:** Multi-Tenant Education ERP  
**Timeline:** Started May 2025 · In Active Development  
**Core Stack:** React 18, Vite, Node.js, Express, MongoDB, Mongoose, Amazon S3  
**Current Status:** 0 Production Institutions · In Active Development · Private Repository  

---

## 1. Project Context & Purpose

Next Web Campus is a comprehensive educational enterprise management platform designed to automate and unify administrative, academic, and financial operations across academic institutions.

### Core Modules Built
* **Student Lifecycle Management:** Admissions, enrollment, profile directories, and class section assignments.
* **Attendance Management:** Daily roll-call, session-based attendance tracking, and absent notifications.
* **Fee Collection & Billing:** Fee structure definitions, concession rules, receipt generation, and ledger tracking.
* **Examination Management:** Exam scheduling, grading criteria, report card assembly, and marks registers.
* **Multi-Tenant Academic Scoping:** Data isolation separating academic institutions, departments, and academic sessions.
* **Cloud Asset Management:** Integrated cloud document and media storage for student certificates and records.

---

## 2. Personal Responsibilities & Engineering Ownership

* **Campus Core Architecture:** Implemented academic workflow features, data models, and Express REST route controllers.
* **Role-Based Access Control (RBAC):** Architected the complete 5-role permission framework, encompassing coarse-grained route guards, fine-grained operation checkers, and tenant-level query scoping.
* **Cloud Storage Integration:** Designed the user-scoped Amazon S3 asset organization structure and pre-signed URL direct-upload protocol.
* **Data Modeling:** Designed MongoDB schemas in Mongoose enforcing tenant boundaries, relational lookups, and session indexing.

---

## 3. The 5-Role RBAC Framework

Next Web Campus enforces a strict, hierarchical five-role model reflecting real educational administration workflows:

| Role | Role Level | Scope & Capabilities |
| :--- | :--- | :--- |
| **Super Admin** | Platform Root | Platform-level monitoring, multi-institution onboarding, unrestricted administrative bypass across the system. |
| **Institute Admin** | Institutional Tenant | Full administrative authority within a single institution: branch settings, staff onboarding, academic year configuration, and fee structures. |
| **Teacher** | Academic Staff | Class attendance logging, assignment publishing, marks entry, and student academic performance evaluation. |
| **Student** | Learner / Recipient | Read-only access to academic timetables, attendance reports, published assignments, submission portals, and fee receipts. |
| **Employee** | Operational Staff | Non-teaching administrative operations, facility tracking, library inventory, and operational documentation. |

---

## 4. Key Engineering Implementations

### Implementation A: Three-Tier RBAC Runtime Enforcement
To prevent privilege escalation across user types, Next Web Campus implements a layered security checkpoint:

1. **Super Admin Bypass Gate:** Checks whether the requester is the root platform administrator.
2. **Coarse-Grained Type Gate:** Verifies if the authenticated `user.type` belongs to the allowed role types for the target route.
3. **Fine-Grained Operations Gate:** For sub-users (`Teacher`, `Student`, `Employee`), queries the user's active role permissions and checks specific CRUD actions (`Create`, `Read`, `Update`, `Delete`, `Approve`, `Export`) per module.

#### Runtime Enforcement Gate (`permission.middleware.js`)
```javascript
const permissionMiddleware = (...configs) => {
  return async (req, res, next) => {
    const user = req.user;
    if (!user?._id) return res.status(401).json({ error: "Unauthorized" });

    // 1. SuperAdmin unrestricted bypass
    if (user.type === UserTypes.SuperAdmin && !user.user) {
      return next();
    }

    for (const config of configs) {
      const { UserTypes: allowedTypes, Operations, Modules } = config;

      // 2. Coarse-grained Role Type Check (Institute Admin, Teacher, Student, Employee)
      if (allowedTypes && !allowedTypes.includes(user.type)) continue;

      // 3. Fine-grained RBAC for Sub-Users (Teacher, Student, Employee)
      if (ApplicationConstants.isSubUserType(user.type)) {
        const role = await Role.findById(user.currentRole).populate("permissions");
        if (!PermissionHelper.hasPermission(role?.permissions?.permissions, Modules, Operations)) {
          continue;
        }
      }
      return next();
    }
    return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
  };
};
```

---

### Implementation B: Multi-Tenant Query Scoping
Enforcing permissions at the route boundary is insufficient if users can query other tenants' documents. Route handlers inject dynamic MongoDB filters to scope data queries:

#### Tenant & Author Scoping (`assignment.route.js`)
```javascript
// Scoping query filters by role and tenant hierarchy
customFilter: async (filter, req) => {
  if (req.user?.type !== UserTypes.SuperAdmin) {
    // Institute Admin and sub-users locked strictly to their Institute Tenant
    filter.user = req.user.admin || req.user._id;
  }
  if (req.user?.type === UserTypes.Teacher) {
    // Teachers scoped strictly to assignments they authored
    filter.createdBy = req.user._id;
  }
}
```

---

### Implementation C: JWT Role Entity Payload Contract
To minimize database lookups on standard authenticated requests, the JWT payload embeds essential tenant and role linkage identifiers:

#### Token Generation Contract (`AuthHelper.js`)
```javascript
generateUserToken(user) {
  const payload = { _id: user._id, type: user.type, email: user.email };
  if (user.user) payload.admin = user.user;
  if (user.type === UserTypes.Teacher)  payload.teacher = user.record;
  if (user.type === UserTypes.Student)  payload.student = user.record;
  if (user.type === UserTypes.Employee) payload.employee = user.record;
  if ([UserTypes.Admin, UserTypes.AdminUser].includes(user.type)) {
    payload.institute = user.institute;
  }
  return this.generateToken(payload);
}
```

---

### Implementation D: Pre-Signed S3 Cloud Asset Architecture
* **Challenge:** Handling student record uploads, identity verifications, and assignment attachments without burdening the Express server with file buffer streaming or exposing AWS credentials.
* **Solution:** Implemented a direct-to-cloud upload protocol utilizing Amazon S3 pre-signed PUT URLs.
  1. The client requests an upload ticket from Express, passing file metadata (`fileName`, `mimeType`, `category`).
  2. Express verifies authorization, constructs an S3 object key with structured user-specific prefixes:
     $$\text{institutes/}\{\text{instituteId}\}/\text{users/}\{\text{userId}\}/\{\text{category}\}/\{\text{uuid-fileName}\}$$
  3. Express generates an S3 pre-signed URL with a short expiration TTL (15 minutes) and returns it.
  4. The React client uploads the file directly to S3 via HTTP PUT, eliminating backend bandwidth bottlenecks.

> [!NOTE]
> **Organizational vs Security Distinction:** User-ID S3 prefixes organize uploaded files logically within the bucket. Access control and security are enforced through pre-signed URL expiration, bucket policies, and authenticated API verification—not by the folder prefix alone.

---

## 5. Development Status & Factual Grounding

* **Adoption Baseline:** Next Web Campus is in active development with **0 production institutions** and no real-world student adoption figures yet.
* **Integrity Guardrail:** The portfolio presents this project truthfully as an active architectural development project, showcasing complex RBAC, cloud storage, and domain modeling without claiming unverified institutional adoption.

