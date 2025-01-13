import { describe, expect, it } from "vitest";
import { engineeringRegistry, registrySize } from "../registry";

describe("engineering registry", () => {
  it("keeps every contract identifier unique", () => {
    const ids = Object.values(engineeringRegistry).flat().map((entry) => entry.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(registrySize).toBeGreaterThan(100);
  });

  it("requires positive quality budgets", () => {
    expect(engineeringRegistry.qualityBudgets.every((entry) => entry.budget > 0)).toBe(true);
  });

  it("maps accessibility contracts to WCAG criteria", () => {
    expect(engineeringRegistry.accessibilityContracts.every((entry) => /^\d+\.\d+\.\d+$/.test(entry.wcag))).toBe(true);
  });
});
