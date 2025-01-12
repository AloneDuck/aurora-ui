import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Field, Switch } from "./primitives";

const meta = { title: "Primitives/Button", component: Button, args: { children: "Create release" }, parameters: { layout: "centered" } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
export const Secondary: Story = { args: { intent: "secondary" } };
export const Loading: Story = { args: { loading: true } };
export const FormControls: Story = { render: () => <div style={{ display: "grid", gap: 16, width: 320 }}><Field label="Project name" hint="Used in release notes" /><Switch label="Require review" /></div> };
