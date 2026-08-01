# Homepage Product Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add four-category navigation, an eight-product homepage collection, relevant manufacturing imagery, and restrained outdoor-technical motion.

**Architecture:** Keep the existing homepage component and source its featured products from a focused local data module so cards remain testable and link to live detail routes. Implement motion with CSS and one reusable intersection-observer reveal component, avoiding a new animation dependency.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, native IntersectionObserver, CSS keyframes.

## Global Constraints

- Use four real product categories and eight real tenant products.
- Honor `prefers-reduced-motion` and keep touch behavior lightweight.
- Preserve WCAG AA contrast and avoid embedded text in imagery.
- Do not invent certifications or commercial claims.

---

### Task 1: Homepage content contract

**Files:**
- Create: `tests/homepage-content.test.mjs`
- Create: `lib/homepage-products.ts`

- [ ] Write a failing source-level test requiring four categories, eight product cards, live detail links, and the new QA asset.
- [ ] Run `node --test tests/homepage-content.test.mjs` and confirm it fails on the current three-category homepage.
- [ ] Add the typed eight-product selection module.

### Task 2: Quality assurance image

**Files:**
- Create: `public/images/quality-inspection.png`

- [ ] Generate a photorealistic garment-inspection scene without text, logos, certificates, or watermarks.
- [ ] Inspect the final image and copy it into the project.

### Task 3: Homepage layout and motion

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Create: `components/reveal.tsx`

- [ ] Render all four category cards in a responsive four-column grid.
- [ ] Add the eight-card Featured Outdoor Collection with real links and horizontal mobile scrolling.
- [ ] Add staggered reveal, image depth, seam-trace hover, process connector, and QA inspection zoom.
- [ ] Add reduced-motion overrides and touch-safe behavior.
- [ ] Run the homepage content test and production build.

### Task 4: Delivery verification

**Files:**
- Modify only files listed above.

- [ ] Commit exact files and push `main`.
- [ ] Wait for Vercel Production to become Ready.
- [ ] Verify homepage HTML includes four categories, eight featured products, and the new QA image.
- [ ] Verify desktop and mobile screenshots for contrast, clipping, and motion-safe fallback.
