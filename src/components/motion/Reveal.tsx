"use client";

import { motion, type Variants } from "framer-motion";
import { EASE } from "@/lib/easing";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET = 48;

function getOffset(direction: Direction) {
  switch (direction) {
    case "up":
      return { y: OFFSET };
    case "down":
      return { y: -OFFSET };
    case "left":
      return { x: OFFSET };
    case "right":
      return { x: -OFFSET };
    default:
      return {};
  }
}

/**
 * Scroll-triggered reveal. Fades + eases an element into place the first time
 * it enters the viewport — the core motion gesture used across the site.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
  once = false,
  amount = 0.3,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getOffset(direction) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers the reveal of its <Stagger.Item> children. */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export function Stagger({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
