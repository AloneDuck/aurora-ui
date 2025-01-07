# Aurora UI

Aurora UI is an accessible React design system built around semantic tokens, composable primitives, and executable quality contracts. It is intentionally small enough to understand and strict enough to serve as a frontend-platform reference.

## What is included

- Semantic light/dark tokens with CSS-variable compilation.
- Controlled and uncontrolled component APIs.
- Keyboard-friendly fields, switches, tabs, and dialogs.
- Storybook documentation with accessibility checks set to fail builds.
- Vitest/Testing Library coverage plus Playwright accessibility and visual-contract tests.
- A versioned engineering registry for compatibility, interaction, a11y, and performance expectations.

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
npm run build-storybook
npx playwright install chromium
npm run test:e2e
```

## فارسی

این پروژه یک دیزاین‌سیستم React با تمرکز روی دسترس‌پذیری، توکن‌های معنایی و قراردادهای قابل‌آزمون است.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for package boundaries and [docs/accessibility.md](./docs/accessibility.md) for the keyboard and screen-reader contract.
