import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button, Dialog, Field, Switch } from "../components/primitives";

describe("Aurora primitives", () => {
  it("exposes loading state without dropping the accessible name", () => {
    render(<Button loading>Publish release</Button>);
    expect(screen.getByRole("button", { name: "Publish release" })).toBeDisabled();
    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
  });

  it("connects field errors to the input", () => {
    render(<Field label="Workspace" error="Workspace is required" />);
    const input = screen.getByRole("textbox", { name: "Workspace" });
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Workspace is required");
  });

  it("supports controlled switch state", async () => {
    const user = userEvent.setup();
    const change = vi.fn();
    render(<Switch label="High contrast" checked={false} onCheckedChange={change} />);
    await user.click(screen.getByRole("switch", { name: "High contrast" }));
    expect(change).toHaveBeenCalledWith(true);
  });

  it("closes dialogs with Escape", async () => {
    const user = userEvent.setup();
    const close = vi.fn();
    render(<Dialog open title="Release checklist" onClose={close}><p>Ready</p></Dialog>);
    await user.keyboard("{Escape}");
    expect(close).toHaveBeenCalledOnce();
  });
});
