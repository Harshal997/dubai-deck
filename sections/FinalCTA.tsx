"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-40 md:px-16"
    >
      <div className="absolute left-1/2 top-1/2 h-[380px] sm:h-[450px] lg:h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mb-6 text-sm uppercase tracking-[0.5em] text-white/50"
        >
          The Opportunity
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="heading-font max-w-6xl text-6xl leading-[0.9] text-white md:text-8xl lg:text-[10rem]"
        >
          BE PART OF THE WORLD’S MOST ICONIC DESTINATION
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 max-w-3xl text-lg leading-relaxed text-white/70 md:text-2xl"
        >
          From luxury retail and immersive entertainment to global brand
          activations and world-class events, Dubai Mall offers an unmatched
          platform for brands seeking visibility, scale, and cultural impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col gap-5 sm:flex-row"
        >
          <button className="rounded-full bg-white px-10 py-5 text-sm uppercase tracking-[0.25em] text-black transition hover:scale-[1.03]">
            Lease Opportunities
          </button>

          <button className="rounded-full border border-white/20 bg-white/5 px-10 py-5 text-sm uppercase tracking-[0.25em] text-white backdrop-blur-md transition hover:bg-white hover:text-black">
            Partnership Inquiries
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="text-sm uppercase tracking-[0.5em] text-white/40">
            Dubai Mall • Downtown Dubai • Global Destination
          </p>
        </motion.div>
      </div>
    </section>
  );
}
