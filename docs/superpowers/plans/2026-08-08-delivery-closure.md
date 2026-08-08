# Wild North Goose Delivery Closure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the customer site's content, multilingual data access, SEO, administration, inquiry, formal-domain, deployment, and delivery-record closure.

**Architecture:** Keep customer-specific code in the Next.js customer repository and tenant-specific records in Supabase. Centralize locale fallback and SEO helpers, keep database queries server-side, and use existing Vercel, Cloudflare, unified-admin, R2, and Feishu workflows without modifying shared admin code.

**Tech Stack:** Next.js 16 App Router, TypeScript, Supabase, Cloudflare DNS, Vercel, Node test runner, Playwright/Lighthouse, GitHub REST and Smart HTTP.

## Global Constraints

- Customer code changes are limited to `wild-north-goose`.
- Database writes must include tenant ID `af256585-7618-4fe9-8f68-e96c18f6f407`.
- Public domain is `https://wildnorthgooseoutdoor.com`; public/admin email is `info@wildnorthgooseoutdoor.com`.
- Phone and WhatsApp remain hidden.
- No warranty or guarantee language is allowed anywhere.
- Preserve existing user changes and stage only explicit files.
- GitHub operations use the verified `luqite-ux` token workflow.

---

### Task 1: Contact and fallback cleanup

**Files:**
- Modify: `app/contact/page.tsx`
- Modify: `lib/products.ts`
- Modify: `lib/products-db.ts`
- Test: `tests/delivery-closure.test.mjs`

**Interfaces:**
- Consumes: confirmed address/email and existing `Product` fallback data.
- Produces: public contact UI without phone placeholders and fallback products without “Coming soon”.

- [ ] Write tests asserting the confirmed email/address, absence of phone/WhatsApp placeholders, absence of the knitwear “Coming soon” entry, and no automatic success reset timer.
- [ ] Run `node --test tests/delivery-closure.test.mjs` and verify the assertions fail for the missing behavior.
- [ ] Update the contact page and fallback handling with the minimum implementation.
- [ ] Re-run the focused test and the full `node --test tests/*.test.mjs` suite.
- [ ] Commit only Task 1 files.

### Task 2: Locale-aware Supabase mapping

**Files:**
- Create: `lib/i18n.ts`
- Modify: `lib/products-db.ts`
- Modify: `lib/articles-db.ts`
- Modify: `app/products/page.tsx`
- Modify: `app/products/[id]/page.tsx`
- Modify: `app/news/page.tsx`
- Modify: `app/news/[slug]/page.tsx`
- Modify: `app/sitemap.ts`
- Test: `tests/i18n-data-access.test.mjs`

**Interfaces:**
- Produces: `pickLocalizedValue(value, requestedLocale, defaultLocale, legacyFallback)` and locale-accepting product/article query functions.
- Selection order: requested locale, default locale, first non-empty JSONB language, legacy fallback.

- [ ] Write failing tests for string, string-array, and HTML locale fallback plus required JSONB query fields and locale parameters.
- [ ] Run the focused test and confirm the expected failures.
- [ ] Implement `lib/i18n.ts`, update row types/selects/mappers, and pass `en` through current routes and Sitemap.
- [ ] Run focused and full tests, then build.
- [ ] Commit only Task 2 files.

### Task 3: Canonical metadata and structured data

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/products/page.tsx`
- Modify: `app/news/page.tsx`
- Modify: `app/oem-odm/page.tsx`
- Modify: `app/manufacturing/page.tsx`
- Modify: `app/quality/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/faq/page.tsx`
- Modify: `app/contact/page.tsx`
- Modify: `app/products/[id]/page.tsx`
- Modify: `app/news/[slug]/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `lib/products.ts`
- Test: `tests/seo-closure.test.mjs`

**Interfaces:**
- Consumes: `getSiteUrl()`, localized products/articles, and database timestamps.
- Produces: canonical metadata, absolute OG images, `Organization`, `Product`, `NewsArticle`, and `BreadcrumbList` JSON-LD.

- [ ] Write failing source-level tests for all public canonical URLs, formal domain configuration, detail JSON-LD types, and database-backed Sitemap timestamps.
- [ ] Run the focused test and verify failure.
- [ ] Implement page metadata and structured data without unsupported claims.
- [ ] Run focused/full tests and `pnpm build`.
- [ ] Commit only Task 3 files.

### Task 4: Tenant administration and translation verification

**Files:**
- Create or modify only tenant-scoped seed/verification scripts under `scripts/` if a reusable existing script is unavailable.

**Interfaces:**
- Produces: one active bcrypt-backed admin user for the confirmed email; persisted product/article JSONB translation evidence.

- [ ] Check global email uniqueness and existing tenant users.
- [ ] Create one admin user with password `info12345`, never logging the hash or service key.
- [ ] Re-read tenant admin users and verify exactly one active matching email.
- [ ] Log in through the customer site, verify cookies/admin proxy/navigation/logout and wrong-password rejection.
- [ ] Temporarily enable a second language, execute manual translation for one real product and article, verify persistence/editability, and restore the launch configuration without deleting translated JSONB.

### Task 5: Inquiry end-to-end closure

**Files:**
- No source changes unless browser verification reveals a tested defect.

**Interfaces:**
- Produces and then removes one exact `CODEX DELIVERY CHECK` inquiry.

- [ ] Query for pre-existing matching test inquiries and clean only stale exact matches.
- [ ] Submit the deployed contact form with a unique marked email/message.
- [ ] Verify success state, cleared fields, Supabase row, correct tenant/fields, and admin-list visibility.
- [ ] Delete the exact test row by tenant ID and marker.
- [ ] Re-read and confirm zero matching test inquiries remain.

### Task 6: Formal domain and production deployment

**Files:**
- Update Vercel environment values; no source secrets.

**Interfaces:**
- Produces: Vercel-bound apex/www domains, Cloudflare DNS-only records and authoritative nameservers, formal canonical host, HTTPS.

- [ ] Bind apex and www to Vercel and read project-specific DNS targets.
- [ ] Create/reuse Cloudflare zone, preserve mail records, write exact Vercel records, and read assigned nameservers.
- [ ] Switch registrar nameservers; pause only for an unavoidable verification challenge.
- [ ] Update tenant domain and `NEXT_PUBLIC_SITE_URL` for all Vercel environments, then redeploy.
- [ ] Verify Cloudflare zone, authoritative NS, public DNS, Vercel domain status, HTTPS, and both production hosts.

### Task 7: Final verification, publication, and Feishu

**Files:**
- Update: existing Feishu customer row through the approved sync command.

**Interfaces:**
- Produces: verified remote `main`, Vercel Production commit, full terminal/browser evidence, and completed A-L delivery record.

- [ ] Run full tests, lint, build, source/database/rendered forbidden-term scans, and secret scan.
- [ ] Read every Sitemap URL and image, validate metadata/canonical/OG/JSON-LD/H1/status, and run desktop/mobile browser plus accessibility/contrast checks.
- [ ] Commit remaining exact files, push with temporary company-token authentication, and verify remote `main` SHA through GitHub REST.
- [ ] Verify Vercel Production uses the same commit.
- [ ] Sync and re-read the existing Feishu row including formal domain, Cloudflare status, GitHub, Vercel, tenant ID, admin credentials, delivery date, and status.
- [ ] Confirm the worktree and primary checkout contain no unintended staged or committed files.
