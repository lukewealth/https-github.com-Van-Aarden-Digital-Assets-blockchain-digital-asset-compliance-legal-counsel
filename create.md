# create.md — VDAC Website (Current UI/UX) + Product Features + CMS/SEO Admin + Media Management + Tech Support Runbook

Project: Van Aarden Digital Assets Counsel (VDAC)
Scope: Extend the current BigLaw-style UI/UX with productized services, a blog/CMS, SEO backend, media management, and full-scale technical support instructions.
Principles: Institutional tone, compliance-first, fast, accessible, mobile-responsive, no hype, no ROI guarantees.

---

## 1) CURRENT DESIGN RULES (DO NOT BREAK)
1. Keep the Morgan Lewis benchmark look: clean grid, whitespace, thin dividers, text-forward.
2. Colors: deep navy + slate gray + white + restrained gold/steel accent.
3. Typography: serif headings, sans body; strict hierarchy; no “startup cards”.
4. Imagery: abstract architecture/data geometry; no coin graphics; no price charts.
5. Motion: subtle fades only; no flashy animations.
6. Accessibility: WCAG AA; keyboard navigation; visible focus states.
7. Compliance: always show disclaimers in footer; no ROI promises; no investment solicitation.

---

## 2) INFORMATION ARCHITECTURE (ADD PAGES + FEATURES)
Top Navigation:
- Home
- Expertise
- Industries
- Regulatory Insight (Blog)
- Publications & Briefs
- Resources (NEW)
- About
- Contact

Footer:
- Legal Disclaimer
- Privacy & Data Protection
- Jurisdictional Disclosures
- Professional Ethics Statement
- Cookie Preferences (if required)

NEW PAGES:
A) Services (Productized)
B) Client Portal (Phase 2)
C) Resources (downloadables + templates)
D) FAQ (compliance-first questions)
E) Careers (optional) / Advisory Network
F) Admin (CMS) — private route

---

## 3) “PRODUCT FEATURES” (SERVICE PACKAGES AS PRODUCTS)
Goal: Productize legal services so clients understand scope, timeline, and deliverables without reducing professionalism.

### 3.1 Services Page (NEW)
Create 4 “Service Products” (cards + detail pages)
- Mining Compliance Readiness Pack
- AML/Sanctions & Enforcement Readiness Pack
- VC/Fund Governance & Disclosure Pack
- Token/Stablecoin Compliance Pack

Each Service Product page must include:
- Summary (2–3 lines)
- Best for (who it’s for)
- Deliverables (bullet list)
- Typical timeline (range, not guarantee)
- Required inputs (what client provides)
- Exclusions (what we do not do)
- Engagement path (stepper)
- CTA: Request Confidential Consultation

Mandatory Legal Notice on each product page:
“VDAC does not provide investment advice and does not guarantee returns. All guidance is legal/compliance-focused and jurisdiction-dependent.”

### 3.2 Use Case Library (NEW)
Add a “Use Cases” section under each product:
Examples:
- Hosted Mining Provider onboarding institutional partner
- Mining operation entering EU/UK markets
- VC SPV raising capital with lawful disclosures
- Stablecoin rails integrating custody and insolvency protections

Format:
Problem → Risk → What we do → Deliverables → Outcome (compliance outcome, not ROI)

---

## 4) BLOG / CMS (REGULATORY INSIGHT) — ADMIN MANAGEMENT
The blog is not “marketing.” It is a formal “Regulatory Insight” library.

### 4.1 CMS Content Types (Collections)
1) Posts (Regulatory Insight)
Fields:
- title (string)
- slug (string, unique)
- excerpt (text)
- body (rich text / mdx)
- featured_image (asset ref)
- image_alt (string) [required]
- author (ref to Team)
- publish_date (date)
- updated_date (date auto)
- jurisdiction_tags (multi: EU, UK, CH, LI, Global)
- topic_tags (multi: MiCA, AML, Mining, Custody, Stablecoins, Funds, Enforcement)
- reading_time (auto)
- canonical_url (optional)
- seo_title (string)
- seo_description (string)
- og_title (string)
- og_description (string)
- og_image (asset ref)
- noindex (boolean)
- draft (boolean)
- references (array of {name, link, note}) — no raw links shown on UI if policy requires

2) Publications & Briefs (Downloadables)
Fields:
- title, slug
- abstract
- pdf_file (asset ref)
- jurisdiction_tags, topic_tags
- disclaimer_checkbox_required (boolean default true)
- seo fields

3) Resources (Templates / Checklists)
Fields:
- title, slug
- short_description
- file (asset ref)
- format (PDF/DOCX/ZIP)
- version
- last_reviewed_date
- disclaimer_checkbox_required

4) Team Members
Fields:
- full_name
- role_title
- headshot (asset ref)
- bio (text)
- linkedin_url (string)
- x_handle (optional)
- email (optional public)
- visibility (public / advisory only)

### 4.2 Admin Roles & Permissions
Roles:
- Admin (full access)
- Editor (create/edit posts, cannot change settings)
- Publisher (publish/unpublish, manage SEO fields)
- Media Manager (upload/optimize assets)
- Viewer (read-only)

Rules:
- Only Publisher/Admin can set canonical_url, noindex, publish.
- Editor can draft posts; Publisher approves.

### 4.3 Editorial Workflow
1) Draft (Editor)
2) Compliance Review (Publisher/Admin):
   - No ROI promises
   - No legal advice to anonymous readers
   - Jurisdiction-specific caveats included
   - No confidential client info
3) SEO Review (Publisher):
   - title length 50–60 chars
   - meta description 140–160 chars
   - structured headings H1/H2/H3 correct
4) Publish with updated_date auto set

### 4.4 Blog UI Requirements (Frontend)
- Index page with filters (Jurisdiction, Topic, Date)
- Search bar (title + excerpt)
- Post cards: title, date, tags, 2-line excerpt
- No thumbnails required; if used, must be abstract and consistent
- “Last updated” displayed on post detail
- Sticky table-of-contents on desktop; collapsible TOC on mobile
- Related posts by shared tags

---

## 5) SEO BACKEND INSTRUCTIONS
### 5.1 Technical SEO
- Generate sitemap.xml automatically (posts + pages + resources)
- robots.txt configured (block /admin)
- Canonical URLs per post/page
- OpenGraph + Twitter cards
- JSON-LD structured data:
  - Organization (VDAC)
  - Person (Dr. Elise Van Aarden)
  - Article (blog posts)
  - BreadcrumbList

### 5.2 On-Page SEO
- Each page must have:
  - unique title + meta description
  - one H1 only
  - semantic headings
  - internal links to relevant expertise pages
- Add “Regulatory keywords” naturally:
  - MiCA compliance, AML/CFT, sanctions, crypto mining compliance, mining-as-a-service, digital asset custody, stablecoin regulation, VC fund governance, disclosure controls, enforcement readiness

### 5.3 Performance SEO
Targets:
- LCP < 2.5s
- CLS < 0.1
- Page weight minimized

---

## 6) MEDIA MANAGEMENT (ADMIN)
### 6.1 Asset Standards
- Images: WebP preferred, responsive sizes (320/640/960/1280)
- Max upload: 5–8MB; auto compress
- Require alt text for all images
- PDFs: watermark (optional), metadata sanitized

### 6.2 Foldering / Taxonomy
Media Library folders:
- /brand
- /team
- /insight
- /publications
- /resources
- /og-images

Naming convention:
YYYY-MM_topic_shorttitle_v01.webp
YYYY-MM_publication_shorttitle_v01.pdf

### 6.3 OG Image Generator (Optional)
Auto-generate OG images using template:
- Site name, post title, jurisdiction tags
- Abstract background pattern
- No coins, no hype visuals

---

## 7) ADMIN DASHBOARD (CMS UI)
Admin must include:
- Posts list with filters (Draft/Published, Jurisdiction, Topic)
- One-click “Preview”
- Schedule publish date
- Bulk edit tags
- Media library with optimization status
- SEO checklist panel:
  - title length
  - missing meta description
  - missing alt text
  - H1 validation
  - internal links count

---

## 8) FULL-SCALE TECHNICAL SUPPORT RUNBOOK
### 8.1 Environments
- Local: dev
- Staging: pre-prod
- Production: prod

### 8.2 Release Process
1) Create branch feature/cms-blog
2) Add tests (lint + build)
3) Deploy to staging
4) Validate:
   - links
   - CMS create/edit/publish
   - sitemap generation
   - robots
   - OG previews
   - mobile layout
5) Deploy to prod
6) Monitor logs and uptime

### 8.3 Monitoring & Alerts
- Uptime monitor (ping every 1 min)
- Error tracking (server + client)
- Log retention 30–90 days
- Alerts to email + slack (optional)

### 8.4 Backups & Recovery
- Daily DB backup (CMS)
- Weekly asset backup (media)
- Restore test monthly

### 8.5 Incident Response (Website)
Severity levels:
- Sev1: site down / admin down
- Sev2: publishing broken / broken forms
- Sev3: minor UI issues

Response steps:
1) Acknowledge
2) Freeze publishing (Sev1/2)
3) Rollback last deploy
4) Restore DB if needed
5) Postmortem checklist:
   - root cause
   - fix
   - prevention

### 8.6 Security Hardening
- /admin behind auth (SSO optional)
- Rate limit on contact form
- CSRF protection
- File upload scanning (AV)
- Content security policy (CSP)
- Regular dependency updates
- Principle of least privilege on roles

---

## 9) MOBILE RESPONSIVE UX REQUIREMENTS
- Nav: hamburger, single column, clear tap targets
- CTAs: full-width
- TOC: collapsible
- Filters: dropdowns
- Images: lazy-loaded
- Forms: short, with step-based optional flow
- Avoid sticky elements that block content

---

## 10) ACCEPTANCE CHECKLIST
- New Services pages implemented with productized content
- CMS supports Posts/Resources/Publications/Team
- Role-based admin permissions working
- SEO fields enforced and validated
- Sitemap + robots correct
- Media optimization + alt text enforced
- Responsive on mobile and desktop
- Performance targets met
- Disclaimers present sitewide

END.


# create.md — VDAC Website (Current UI/UX) + Product Features + CMS/SEO Admin + Media Management + Tech Support Runbook

Project: Van Aarden Digital Assets Counsel (VDAC)
Scope: Extend the current BigLaw-style UI/UX with productized services, a blog/CMS, SEO backend, media management, and full-scale technical support instructions.
Principles: Institutional tone, compliance-first, fast, accessible, mobile-responsive, no hype, no ROI guarantees.

---

## 1) CURRENT DESIGN RULES (DO NOT BREAK)
1. Keep the Morgan Lewis benchmark look: clean grid, whitespace, thin dividers, text-forward.
2. Colors: deep navy + slate gray + white + restrained gold/steel accent.
3. Typography: serif headings, sans body; strict hierarchy; no “startup cards”.
4. Imagery: abstract architecture/data geometry; no coin graphics; no price charts.
5. Motion: subtle fades only; no flashy animations.
6. Accessibility: WCAG AA; keyboard navigation; visible focus states.
7. Compliance: always show disclaimers in footer; no ROI promises; no investment solicitation.

---

## 2) INFORMATION ARCHITECTURE (ADD PAGES + FEATURES)
Top Navigation:
- Home
- team
- Expertise
- Industries
- Regulatory Insight (Blog)
- Publications & Briefs
- Resources (NEW)
- About
- Contact

Footer:
- Legal Disclaimer
- Privacy & Data Protection
- Jurisdictional Disclosures
- Professional Ethics Statement
- Cookie Preferences (if required)

NEW PAGES:
A) Services (Productized)
B) Client Portal (Phase 2)
C) Resources (downloadables + templates)
D) FAQ (compliance-first questions)
E) Careers (optional) / Advisory Network
F) Admin (CMS) — private route

---

## 3) “PRODUCT FEATURES” (SERVICE PACKAGES AS PRODUCTS)
Goal: Productize legal services so clients understand scope, timeline, and deliverables without reducing professionalism.

### 3.1 Services Page (NEW)
Create 4 “Service Products” (cards + detail pages)
- Mining Compliance Readiness Pack
- AML/Sanctions & Enforcement Readiness Pack
- VC/Fund Governance & Disclosure Pack
- Token/Stablecoin Compliance Pack

Each Service Product page must include:
- Summary (2–3 lines)
- Best for (who it’s for)
- Deliverables (bullet list)
- Typical timeline (range, not guarantee)
- Required inputs (what client provides)
- Exclusions (what we do not do)
- Engagement path (stepper)
- CTA: Request Confidential Consultation

Mandatory Legal Notice on each product page:
“VDAC does not provide investment advice and does not guarantee returns. All guidance is legal/compliance-focused and jurisdiction-dependent.”

### 3.2 Use Case Library (NEW)
Add a “Use Cases” section under each product:
Examples:
- Hosted Mining Provider onboarding institutional partner
- Mining operation entering EU/UK markets
- VC SPV raising capital with lawful disclosures
- Stablecoin rails integrating custody and insolvency protections

Format:
Problem → Risk → What we do → Deliverables → Outcome (compliance outcome, not ROI)

---

## 4) BLOG / CMS (REGULATORY INSIGHT) — ADMIN MANAGEMENT
The blog is not “marketing.” It is a formal “Regulatory Insight” library.

### 4.1 CMS Content Types (Collections)
1) Posts (Regulatory Insight)
Fields:
- title (string)
- slug (string, unique)
- excerpt (text)
- body (rich text / mdx)
- featured_image (asset ref)
- image_alt (string) [required]
- author (ref to Team)
- publish_date (date)
- updated_date (date auto)
- jurisdiction_tags (multi: EU, UK, CH, LI, Global)
- topic_tags (multi: MiCA, AML, Mining, Custody, Stablecoins, Funds, Enforcement)
- reading_time (auto)
- canonical_url (optional)
- seo_title (string)
- seo_description (string)
- og_title (string)
- og_description (string)
- og_image (asset ref)
- noindex (boolean)
- draft (boolean)
- references (array of {name, link, note}) — no raw links shown on UI if policy requires

2) Publications & Briefs (Downloadables)
Fields:
- title, slug
- abstract
- pdf_file (asset ref)
- jurisdiction_tags, topic_tags
- disclaimer_checkbox_required (boolean default true)
- seo fields

3) Resources (Templates / Checklists)
Fields:
- title, slug
- short_description
- file (asset ref)
- format (PDF/DOCX/ZIP)
- version
- last_reviewed_date
- disclaimer_checkbox_required

4) Team Members
Fields:
- full_name
- role_title
- headshot (asset ref)
- bio (text)
- linkedin_url (string)
- x_handle (optional)
- email (optional public)
- visibility (public / advisory only)

### 4.2 Admin Roles & Permissions
Roles:
- Admin (full access)
- Editor (create/edit posts, cannot change settings)
- Publisher (publish/unpublish, manage SEO fields)
- Media Manager (upload/optimize assets)
- Viewer (read-only)

Rules:
- Only Publisher/Admin can set canonical_url, noindex, publish.
- Editor can draft posts; Publisher approves.

### 4.3 Editorial Workflow
1) Draft (Editor)
2) Compliance Review (Publisher/Admin):
   - No ROI promises
   - No legal advice to anonymous readers
   - Jurisdiction-specific caveats included
   - No confidential client info
3) SEO Review (Publisher):
   - title length 50–60 chars
   - meta description 140–160 chars
   - structured headings H1/H2/H3 correct
4) Publish with updated_date auto set

### 4.4 Blog UI Requirements (Frontend)
- Index page with filters (Jurisdiction, Topic, Date)
- Search bar (title + excerpt)
- Post cards: title, date, tags, 2-line excerpt
- No thumbnails required; if used, must be abstract and consistent
- “Last updated” displayed on post detail
- Sticky table-of-contents on desktop; collapsible TOC on mobile
- Related posts by shared tags

---

## 5) SEO BACKEND INSTRUCTIONS
### 5.1 Technical SEO
- Generate sitemap.xml automatically (posts + pages + resources)
- robots.txt configured (block /admin)
- Canonical URLs per post/page
- OpenGraph + Twitter cards
- JSON-LD structured data:
  - Organization (VDAC)
  - Person (Dr. Elise Van Aarden)
  - Article (blog posts)
  - BreadcrumbList

### 5.2 On-Page SEO
- Each page must have:
  - unique title + meta description
  - one H1 only
  - semantic headings
  - internal links to relevant expertise pages
- Add “Regulatory keywords” naturally:
  - MiCA compliance, AML/CFT, sanctions, crypto mining compliance, mining-as-a-service, digital asset custody, stablecoin regulation, VC fund governance, disclosure controls, enforcement readiness

### 5.3 Performance SEO
Targets:
- LCP < 2.5s
- CLS < 0.1
- Page weight minimized

---

## 6) MEDIA MANAGEMENT (ADMIN)
### 6.1 Asset Standards
- Images: WebP preferred, responsive sizes (320/640/960/1280)
- Max upload: 5–8MB; auto compress
- Require alt text for all images
- PDFs: watermark (optional), metadata sanitized

### 6.2 Foldering / Taxonomy
Media Library folders:
- /brand
- /team
- /insight
- /publications
- /resources
- /og-images

Naming convention:
YYYY-MM_topic_shorttitle_v01.webp
YYYY-MM_publication_shorttitle_v01.pdf

### 6.3 OG Image Generator (Optional)
Auto-generate OG images using template:
- Site name, post title, jurisdiction tags
- Abstract background pattern
- No coins, no hype visuals

---

## 7) ADMIN DASHBOARD (CMS UI)
Admin must include:
- Posts list with filters (Draft/Published, Jurisdiction, Topic)
- One-click “Preview”
- Schedule publish date
- Bulk edit tags
- Media library with optimization status
- SEO checklist panel:
  - title length
  - missing meta description
  - missing alt text
  - H1 validation
  - internal links count

---

## 8) FULL-SCALE TECHNICAL SUPPORT RUNBOOK
### 8.1 Environments
- Local: dev
- Staging: pre-prod
- Production: prod

### 8.2 Release Process
1) Create branch feature/cms-blog
2) Add tests (lint + build)
3) Deploy to staging
4) Validate:
   - links
   - CMS create/edit/publish
   - sitemap generation
   - robots
   - OG previews
   - mobile layout
5) Deploy to prod
6) Monitor logs and uptime

### 8.3 Monitoring & Alerts
- Uptime monitor (ping every 1 min)
- Error tracking (server + client)
- Log retention 30–90 days
- Alerts to email + slack (optional)

### 8.4 Backups & Recovery
- Daily DB backup (CMS)
- Weekly asset backup (media)
- Restore test monthly

### 8.5 Incident Response (Website)
Severity levels:
- Sev1: site down / admin down
- Sev2: publishing broken / broken forms
- Sev3: minor UI issues

Response steps:
1) Acknowledge
2) Freeze publishing (Sev1/2)
3) Rollback last deploy
4) Restore DB if needed
5) Postmortem checklist:
   - root cause
   - fix
   - prevention

### 8.6 Security Hardening
- /admin behind auth (SSO optional)
- Rate limit on contact form
- CSRF protection
- File upload scanning (AV)
- Content security policy (CSP)
- Regular dependency updates
- Principle of least privilege on roles

---

## 9) MOBILE RESPONSIVE UX REQUIREMENTS
- Nav: hamburger, single column, clear tap targets
- CTAs: full-width
- TOC: collapsible
- Filters: dropdowns
- Images: lazy-loaded
- Forms: short, with step-based optional flow
- Avoid sticky elements that block content

---

## 10) ACCEPTANCE CHECKLIST
- New Services pages implemented with productized content
- CMS supports Posts/Resources/Publications/Team
- Role-based admin permissions working
- SEO fields enforced and validated
- Sitemap + robots correct
- Media optimization + alt text enforced
- Responsive on mobile and desktop
- Performance targets met
- Disclaimers present sitewide

END.
