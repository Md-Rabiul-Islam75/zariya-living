"use client";

import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/easing";
import { useEffect, useState, type FormEvent } from "react";
import { VISIT_FORM } from "@/lib/site-data";

/**
 * Booking form in an animated modal. Opened from the navbar "Book a Visit"
 * button. Closes on backdrop click, the × button, or Escape.
 */
export function BookVisitModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  // Lock background scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Reset the success state shortly after closing.
  useEffect(() => {
    if (!open && submitted) {
      const t = setTimeout(() => setSubmitted(false), 300);
      return () => clearTimeout(t);
    }
  }, [open, submitted]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold";
  const inputClass =
    "w-full border-b border-foreground/25 bg-transparent py-2.5 text-sm text-foreground placeholder:text-foreground/35 transition-colors focus:border-gold focus:outline-none";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Reserve your visit"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gold/20 bg-teal-deep p-6 shadow-2xl sm:p-8 md:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-teal-deep"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[260px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-2xl text-gold"
                  >
                    ✓
                  </motion.div>
                  <h3 className="mt-6 font-serif text-2xl font-light text-foreground">Your visit request is in.</h3>
                  <p className="mt-3 max-w-sm font-light text-foreground/70">
                    Our team will reach out shortly to arrange your By-Air Experience Tour.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-8 rounded-md border border-gold/50 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-teal-deep"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h2 className="font-serif text-2xl font-light text-foreground sm:text-3xl">{VISIT_FORM.title}</h2>
                  <p className="mt-2 text-sm font-light text-foreground/70">{VISIT_FORM.body}</p>

                  <form onSubmit={handleSubmit} className="mt-7">
                    <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {VISIT_FORM.fields.map((field) => (
                        <div key={field.name}>
                          <label htmlFor={`m-${field.name}`} className={labelClass}>
                            {field.label}
                          </label>
                          <input
                            id={`m-${field.name}`}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            placeholder={field.placeholder}
                            className={inputClass}
                          />
                        </div>
                      ))}
                      <div className="sm:col-span-2">
                        <label htmlFor="m-notes" className={labelClass}>
                          Anything you&apos;d like us to know?
                        </label>
                        <textarea
                          id="m-notes"
                          name="notes"
                          rows={2}
                          placeholder="Tell us what matters to you"
                          className={`${inputClass} resize-y`}
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="mt-8 w-full rounded-md bg-gold py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep"
                    >
                      {VISIT_FORM.cta}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
