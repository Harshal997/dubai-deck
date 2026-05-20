"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-20 md:px-16">
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/5 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="heading-font text-4xl tracking-wider text-white md:text-6xl"
        >
          DUBAI MALL
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60"
        >
          Built for global brands, immersive experiences, and world-class
          partnerships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8"
        >
          <a
            href="#overview"
            className="text-sm uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
          >
            Overview
          </a>

          <a
            href="#retail"
            className="text-sm uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
          >
            Retail
          </a>

          <a
            href="#entertainment"
            className="text-sm uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
          >
            Entertainment
          </a>

          <a
            href="#events"
            className="text-sm uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
          >
            Events
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Concept Experience • Dubai Mall • 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
