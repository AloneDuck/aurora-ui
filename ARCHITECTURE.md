# Architecture

Aurora separates primitive values, semantic meaning, component behavior, and verification.

1. `tokens.ts` owns primitive and semantic values. Components never reference palette values directly.
2. `components/primitives.tsx` owns accessible behavior and controlled/uncontrolled APIs.
3. Storybook documents supported states; it is not the source of component behavior.
4. `engineeringRegistry` stores machine-readable compatibility and quality contracts used by the demo and tests.
5. Browser tests cover integration boundaries that jsdom cannot represent reliably.

The public API favors native HTML attributes and refs. Product-specific state, network access, and business copy stay outside the package boundary.
