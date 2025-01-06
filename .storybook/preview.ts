import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    a11y: { test: "error" },
    backgrounds: { default: "canvas" },
  },
};

export default preview;
