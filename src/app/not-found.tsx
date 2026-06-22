"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/easing";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-teal-deep px-6 text-center">
      {/* Ambient background */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.18 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0"
      >
        <Image
          src="/images/masterplan.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/80 via-teal-deep/70 to-teal-deep" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Image
            src="/images/logo.png"
            alt="Zariya Living"
            width={150}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mt-12 text-xs font-light uppercase tracking-[0.4em] text-gold"
        >
          Page Not Found
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="mt-4 font-serif text-7xl font-light leading-none text-foreground sm:text-8xl md:text-9xl"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="mt-6 max-w-md text-base font-light leading-relaxed text-foreground/75 md:text-lg"
        >
          This path leads nowhere — but the journey at Zariya is just beginning.
          Let us guide you back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-teal-deep transition-transform duration-300 hover:scale-105"
          >
            Return Home
          </Link>
          <Link
            href="/#book"
            className="rounded-full border border-foreground/40 px-8 py-3.5 text-sm font-light tracking-wide text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Book a Visit
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
