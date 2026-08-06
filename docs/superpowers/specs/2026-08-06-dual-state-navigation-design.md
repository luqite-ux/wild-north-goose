# Dual-State Navigation Design

## Goal

Keep the homepage Hero immersive while making the fixed navigation readable before and after scrolling.

## Approved behavior

- At the top of the page, render a deep forest-green translucent navigation surface with backdrop blur.
- Use white brand text, desktop links, mobile menu icon, and accessible focus states over the dark surface.
- Keep Contact Us visually prominent with a light glacier treatment and dark readable text.
- After scrolling more than 50px, transition to the existing warm-white translucent surface, deep-green text, subtle border, and shadow.
- Keep the navigation height fixed at 80px so the transition causes no layout shift.
- When the mobile menu is open, always use an opaque warm-white panel with deep-green controls.
- Apply the same readable navigation treatment to non-home pages instead of relying on page backgrounds.

## Accessibility and motion

- Navigation text and controls must meet WCAG AA contrast in both states.
- Focus-visible rings must remain visible on dark and light states.
- Background, border, text, and shadow transition over 300ms.
- `prefers-reduced-motion: reduce` keeps the state change immediate through the existing global motion override.

## Scope

Only `components/navigation.tsx` and its focused regression test are changed. No shared admin or tenant data changes are required.
