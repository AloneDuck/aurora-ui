# Visual regression strategy

The browser suite asserts stable computed-style contracts for critical primitives and leaves layout screenshots to the consuming product, where fonts and platform rendering are controlled. This avoids noisy pixel diffs while still detecting accidental token, spacing, and size changes.
