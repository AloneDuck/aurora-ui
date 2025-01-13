import tokenContracts from "./data/token-contracts.json";
import componentContracts from "./data/component-contracts.json";
import interactionScenarios from "./data/interaction-scenarios.json";
import qualityBudgets from "./data/quality-budgets.json";
import accessibilityContracts from "./data/accessibility-contracts.json";

export const engineeringRegistry = {
  tokenContracts,
  componentContracts,
  interactionScenarios,
  qualityBudgets,
  accessibilityContracts,
} as const;

export const registrySize = Object.values(engineeringRegistry).reduce((sum, entries) => sum + entries.length, 0);
