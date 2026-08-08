# Wild North Goose Delivery Closure Design

## Objective

Bring the Wild North Goose customer site from a visually approved implementation to a technically complete delivery for Suzhou Wild North Goose Apparel Co., Ltd. The formal public domain is `wildnorthgooseoutdoor.com`, the public contact email is `info@wildnorthgooseoutdoor.com`, and phone/WhatsApp information must remain hidden until the customer supplies it.

## Scope and isolation

- Customer code changes are limited to `wild-north-goose`.
- Customer database writes are limited to tenant `af256585-7618-4fe9-8f68-e96c18f6f407`.
- Shared `huanqiu-admin` code is not modified as part of this customer delivery.
- Existing uncommitted `.gitignore` changes and generated browser artifacts remain untouched and uncommitted.
- No warranty, guarantee, or equivalent promise may appear in source, fallback data, database content, metadata, structured data, images, or rendered pages.

## Public contact and identity

- Display the confirmed company address `No. 98 Tonggang Road, Building 1, Changshu, Jiangsu, China` and the confirmed email `info@wildnorthgooseoutdoor.com`.
- Remove phone and WhatsApp rows rather than showing empty or placeholder values.
- Keep the inquiry form as the primary public contact path.
- Use `wildnorthgooseoutdoor.com` as the canonical production host after domain activation.

## Customer data access and language readiness

- Add a focused locale utility that selects multilingual JSONB values in this order: requested locale, tenant default language, then the first non-empty language.
- Product and article database queries read the existing `*_i18n` fields while retaining legacy fields only as compatibility fallbacks.
- Data access functions accept a locale parameter from their first release, with `en` as the current visible locale.
- The initial English-only site does not expose an empty language switcher or generate empty translated pages.
- The data and route interfaces retain the locale boundary needed to enable additional languages without schema changes or product/article recreation.
- Metadata, Open Graph, JSON-LD, and Sitemap use the same localized content selection.

## SEO and structured data

- Every public static page receives unique metadata, an absolute canonical URL, and complete Open Graph data.
- Product pages output localized dynamic metadata plus `Product` and `BreadcrumbList` JSON-LD.
- News pages output localized dynamic metadata plus `NewsArticle` and `BreadcrumbList` JSON-LD.
- The root layout continues to output the verified organization identity and formal domain.
- Sitemap entries use the formal canonical host, database update timestamps for products and articles, and contain only active products and published articles.
- `robots.txt` points to the formal Sitemap and continues to block admin, API, login, and preview paths.
- Open Graph images are absolute HTTPS URLs that are publicly accessible.

## Content cleanup

- Remove the public contact placeholders and the knitwear “Coming soon” fallback entry.
- Do not render a placeholder image as a real product. A missing database image is treated as an invalid product record and must not silently appear as a customer product.
- Preserve the 20 active Supabase products and their existing R2 image URLs unless the source-material reconciliation identifies a specific mismatch.
- Product facts remain limited to supplied Excel data, product media, and confirmed FAQ answers.

## Administration and data operations

- Create exactly one active administrator for this tenant using `info@wildnorthgooseoutdoor.com` and the initial password `info12345`, stored only as a bcrypt hash.
- Verify global email uniqueness before creation.
- Verify login, redirect, cookies, tenant isolation, proxied admin navigation, logout, and rejection of an incorrect password.
- Exercise manual one-click translation on one real product and one real article through the shared admin without changing shared code. The translated JSONB values must persist after reload and remain editable.
- Restore the tenant to the intended launch language configuration after the temporary additional-language test if that test would otherwise expose incomplete routes.

## Inquiry verification

- The public form writes a tenant-scoped inquiry and maintains disabled, success, error, and cleared-form states.
- Remove the automatic success-reset timer so the success state is not a simulated workflow and remains visible until the visitor edits or submits again.
- Submit one uniquely marked `CODEX DELIVERY CHECK` inquiry through the deployed public form.
- Confirm the record in Supabase and the tenant admin inquiry list.
- Delete only that marked test record using the exact tenant ID and test identifier, then confirm zero matching rows remain.

## Domain, deployment, and external systems

- Bind `wildnorthgooseoutdoor.com` and `www.wildnorthgooseoutdoor.com` to the existing Vercel Production project before changing DNS.
- Read the exact DNS targets returned by this Vercel project.
- Create or reuse the company Cloudflare zone, preserve necessary existing mail records, add the required DNS-only records, and switch registrar nameservers to Cloudflare.
- Pause only if the registrar presents an unavoidable verification code, CAPTCHA, expired session, or missing permission.
- Update the tenant domain and Vercel `NEXT_PUBLIC_SITE_URL` to the formal HTTPS host, redeploy, and verify both the formal domain and the project Vercel address serve the same delivery.
- After deployment, verify authoritative NS, public DNS, Vercel domain status, HTTPS, canonical URLs, Sitemap URLs, and image reachability.

## Verification and delivery record

- Add regression tests before production changes for locale fallback, contact cleanup, canonical metadata, structured data, Sitemap timestamps, and placeholder removal.
- Run the full test suite, lint, and production build.
- Inspect every Sitemap URL on desktop and mobile, including interactive and error states, with console and accessibility/contrast checks.
- Scan source, static fallback, tenant database content, and all rendered Sitemap pages for prohibited warranty/guarantee terms and malformed characters.
- Push only explicitly staged customer files to `luqite-ux/wild-north-goose`, confirm remote `main` SHA through the company GitHub token, and confirm Vercel Production uses that commit.
- Update the existing Feishu customer row with the company, project, local path, formal domain, Cloudflare status, Vercel URL, GitHub URL, tenant ID, admin URL, admin account, password, delivery date, and final status; re-read the row after synchronization.

## Completion criteria

Delivery is complete only when product, article, translation, inquiry, admin, SEO, domain, deployment, mobile/desktop visual checks, GitHub state, and Feishu state have all been verified with fresh evidence. Missing customer phone/WhatsApp data is not a blocker because those channels are intentionally hidden by explicit approval.
