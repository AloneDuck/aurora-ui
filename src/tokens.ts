export const primitives = {
  blue: { 50: "#eff6ff", 100: "#dbeafe", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8" },
  slate: { 50: "#f8fafc", 100: "#f1f5f9", 300: "#cbd5e1", 600: "#475569", 900: "#0f172a" },
  red: { 50: "#fef2f2", 600: "#dc2626", 700: "#b91c1c" },
  green: { 50: "#f0fdf4", 600: "#16a34a", 700: "#15803d" },
} as const;

export const semanticTokens = {
  light: {
    canvas: primitives.slate[50], surface: "#ffffff", text: primitives.slate[900], muted: primitives.slate[600],
    border: primitives.slate[300], accent: primitives.blue[600], accentHover: primitives.blue[700], danger: primitives.red[600],
  },
  dark: {
    canvas: "#020617", surface: primitives.slate[900], text: primitives.slate[50], muted: primitives.slate[300],
    border: primitives.slate[600], accent: primitives.blue[500], accentHover: primitives.blue[100], danger: "#f87171",
  },
} as const;

export type ThemeName = keyof typeof semanticTokens;

export function cssVariables(theme: ThemeName) {
  return Object.fromEntries(Object.entries(semanticTokens[theme]).map(([key, value]) => [`--aurora-${key}`, value]));
}
