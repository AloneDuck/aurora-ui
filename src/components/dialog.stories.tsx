import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Dialog } from "./primitives";

function DialogExample() {
  const [open, setOpen] = useState(false);
  return <><Button onClick={() => setOpen(true)}>Open review</Button><Dialog open={open} title="Review changes" onClose={() => setOpen(false)}><p>Three accessibility contracts changed.</p></Dialog></>;
}

const meta = { title: "Overlays/Dialog", component: DialogExample, parameters: { layout: "centered" } } satisfies Meta<typeof DialogExample>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
