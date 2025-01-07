# Accessibility contract

- Every control keeps an accessible name in loading, error, and disabled states.
- Focus indicators meet a 3:1 non-text contrast target and are never removed without replacement.
- Dialogs expose `aria-modal`, move focus on open, and close with Escape.
- Motion is reduced when `prefers-reduced-motion` is active.
- Storybook a11y violations fail CI; Playwright runs axe against the composed application.

Automated checks complement manual keyboard, zoom, high-contrast, and screen-reader review.
