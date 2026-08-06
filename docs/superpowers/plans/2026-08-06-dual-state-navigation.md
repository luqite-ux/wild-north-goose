# Dual-State Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement an accessible dark-on-Hero and light-on-scroll fixed navigation without layout shift.

**Architecture:** Keep the existing `scrolled` state and derive one shared visual state for the navigation surface, brand text, links, icon, and CTA. The mobile dropdown remains an explicit warm-white theme independent of scroll state.

**Tech Stack:** React 19, Next.js 16, TypeScript, Tailwind CSS.

## Global Constraints

- Top state uses a deep forest translucent surface with white navigation text.
- Scrolled state uses warm white with deep forest text.
- Mobile dropdown always uses warm white and deep forest text.
- Navigation height remains `h-20`.
- Both states meet WCAG AA and preserve visible focus states.

---

### Task 1: Regression contract

**Files:**
- Create: `tests/navigation-contrast.test.mjs`
- Read: `components/navigation.tsx`

- [ ] Write a source-level test requiring an explicit dark top surface, white top-state text, light scrolled surface, deep-green scrolled text, and an opaque light mobile menu.
- [ ] Run `node --test tests/navigation-contrast.test.mjs` and confirm it fails against the transparent top state.

### Task 2: Dual-state navigation

**Files:**
- Modify: `components/navigation.tsx`
- Test: `tests/navigation-contrast.test.mjs`

- [ ] Derive `topState = !scrolled && !mobileMenuOpen` and apply complete dark/light theme classes to every navigation element.
- [ ] Add focus-visible rings and a readable CTA for both themes.
- [ ] Keep the mobile dropdown opaque and light.
- [ ] Run the navigation test, homepage tests, and `pnpm build`.

### Task 3: Production verification

**Files:**
- Modify only files listed above and these two documentation files.

- [ ] Commit exact files and push `main`.
- [ ] Wait for Vercel Production Ready.
- [ ] Verify top and scrolled states in a real browser at desktop and mobile sizes.
- [ ] Confirm browser console has zero errors and forbidden warranty/guarantee terms have zero matches in modified sources.
