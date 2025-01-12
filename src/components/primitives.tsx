import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useRef,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cn, useControllableState } from "../lib";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  intent?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { intent = "primary", size = "md", loading = false, disabled, className, children, ...props }, ref,
) {
  return (
    <button
      ref={ref}
      className={cn("au-button", `au-button--${intent}`, `au-button--${size}`, className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span aria-hidden="true" className="au-spinner" /> : null}
      <span>{children}</span>
    </button>
  );
});

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string };

export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, hint, error, id, className, ...props }, ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = `${inputId}-description`;
  return (
    <div className="au-field">
      <label className="au-field__label" htmlFor={inputId}>{label}</label>
      <input
        ref={ref}
        id={inputId}
        className={cn("au-input", error && "au-input--invalid", className)}
        aria-invalid={Boolean(error)}
        aria-describedby={hint || error ? descriptionId : undefined}
        {...props}
      />
      {hint || error ? <span id={descriptionId} className={cn("au-field__hint", error && "au-field__error")}>{error ?? hint}</span> : null}
    </div>
  );
});

type SwitchProps = { checked?: boolean; defaultChecked?: boolean; onCheckedChange?: (value: boolean) => void; label: string };

export function Switch({ checked, defaultChecked = false, onCheckedChange, label }: SwitchProps) {
  const [active, setActive] = useControllableState(checked, defaultChecked, onCheckedChange);
  return (
    <button className="au-switch" type="button" role="switch" aria-checked={active} onClick={() => setActive(!active)}>
      <span className="au-switch__thumb" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

type DialogProps = { open: boolean; title: string; children: ReactNode; onClose: () => void };

export function Dialog({ open, title, children, onClose }: DialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);
  if (!open) return null;
  return (
    <div className="au-dialog-backdrop" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="au-dialog">
        <header><h2 id="dialog-title">{title}</h2><Button ref={closeRef} intent="secondary" onClick={onClose}>Close</Button></header>
        {children}
      </section>
    </div>
  );
}

type TabsContextValue = { value: string; select: (value: string) => void };
const TabsContext = createContext<TabsContextValue | null>(null);

export function Tabs({ value, defaultValue, onValueChange, children }: { value?: string; defaultValue: string; onValueChange?: (value: string) => void; children: ReactNode }) {
  const [current, select] = useControllableState(value, defaultValue, onValueChange);
  return <TabsContext.Provider value={{ value: current, select }}><div className="au-tabs">{children}</div></TabsContext.Provider>;
}

export function TabList({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div role="tablist" className="au-tablist" {...props}>{children}</div>;
}

export function Tab({ value, children }: { value: string; children: ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used inside Tabs");
  const selected = context.value === value;
  return <button role="tab" type="button" aria-selected={selected} className="au-tab" onClick={() => context.select(value)}>{children}</button>;
}

export function TabPanel({ value, children }: { value: string; children: ReactNode }) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabPanel must be used inside Tabs");
  return context.value === value ? <div role="tabpanel" className="au-panel">{children}</div> : null;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <article className={cn("au-card", className)} {...props} />;
}

export function VisuallyHidden({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("au-visually-hidden", className)} {...props} />;
}

export function Skeleton({ label = "Loading content" }: { label?: string }) {
  return <div className="au-skeleton" role="status"><VisuallyHidden>{label}</VisuallyHidden></div>;
}
