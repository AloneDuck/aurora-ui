import clsx, { type ClassValue } from "clsx";
import { useCallback, useState } from "react";

export function cn(...values: ClassValue[]) {
  return clsx(values);
}

export function useControllableState<T>(value: T | undefined, initialValue: T, onChange?: (next: T) => void) {
  const [internal, setInternal] = useState(initialValue);
  const current = value === undefined ? internal : value;
  const setValue = useCallback((next: T) => {
    if (value === undefined) setInternal(next);
    onChange?.(next);
  }, [onChange, value]);
  return [current, setValue] as const;
}
