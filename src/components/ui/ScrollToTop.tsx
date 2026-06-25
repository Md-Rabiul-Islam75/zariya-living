"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useState } from "react";

/**
 * Floating scroll-progress button (bottom-right). The gold ring fills as the
 * page scrolls; clicking glides back to the top. Hidden near the very top.
 */
export function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  // Smooth the raw progress so the ring eases instead of snapping.
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setVisible(v > 0.06);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center md:bottom-8 md:right-8 md:h-[52px] md:w-[52px]"
        >
          {/* Backdrop disc */}
          <span className="absolute inset-0 rounded-full border border-gold/20 bg-teal-deep/80 backdrop-blur-md transition-colors duration-300 group-hover:bg-teal-panel/90" />

          {/* Progress ring */}
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 52 52" aria-hidden="true">
            <circle cx="26" cy="26" r="23" fill="none" stroke="currentColor" className="text-gold/15" strokeWidth="2" />
            <motion.circle
              cx="26"
              cy="26"
              r="23"
              fill="none"
              stroke="currentColor"
              className="text-gold"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>

          {/* Up arrow */}
          <motion.span
            className="relative text-gold"
            initial={false}
            animate={{ y: 0 }}
            whileHover={{ y: -2 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
