"use client";

import { useSyncExternalStore } from "react";

type ToastState = { message: string; type: "success" | "error" } | null;

let state: ToastState = null;
let timer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function showToast(message: string, type: "success" | "error" = "success") {
  clearTimeout(timer);
  state = { message, type };
  emit();
  timer = setTimeout(() => {
    state = null;
    emit();
  }, 4200);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function Toast() {
  const toast = useSyncExternalStore(
    subscribe,
    () => state,
    () => null,
  );
  if (!toast) return null;

  const isError = toast.type === "error";
  const accent = isError ? "#E0A96D" : "#DFC1A5";

  return (
    <div
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
      className="fixed bottom-[30px] left-1/2 z-[2000] flex max-w-[90vw] -translate-x-1/2 items-center gap-3 rounded-[6px] border border-solid px-7 py-4 shadow-[0_20px_50px_rgba(0,0,0,.4)]"
      style={{ background: isError ? "#3A2418" : "#114747", borderColor: accent }}
    >
      <span
        className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full border-[1.5px] border-solid text-[15.5px] leading-none font-bold"
        style={{ borderColor: accent, color: accent }}
      >
        {isError ? "!" : "✓"}
      </span>
      <span className="text-[17px] font-medium text-white">{toast.message}</span>
    </div>
  );
}
