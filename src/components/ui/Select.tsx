"use client";

import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useEffect, useRef, useState } from "react";

/**
 * Custom animated select, replaces the native <select> so the dropdown looks
 * and animates identically across every device and browser (native selects
 * render with OS-specific, un-animatable popups).
 */
export function Select({
  options,
  value,
  onChange,
  placeholder = "Select…",
}: {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click / tap and on Escape.
  useEffect(() => {
    if (!open) return;
    function onPointer(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between border-b border-foreground/25 bg-transparent py-3 text-left transition-colors focus:border-gold focus:outline-none"
      >
        <span className={value ? "text-foreground" : "text-foreground/40"}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="text-gold"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.28, ease: EASE }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 right-0 z-40 mt-2 max-h-64 overflow-auto rounded-xl border border-gold/15 bg-teal-deep/95 py-2 shadow-2xl backdrop-blur-md"
          >
            {options.map((opt) => (
              <li key={opt} role="option" aria-selected={value === opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`block w-full px-5 py-2.5 text-left text-sm font-light transition-colors hover:bg-gold/10 hover:text-gold ${
                    value === opt ? "text-gold" : "text-foreground/80"
                  }`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
