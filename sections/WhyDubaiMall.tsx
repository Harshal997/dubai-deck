"use client";

import StatsCard from "@/components/StatsCard";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";

export default function WhyDubaiMall() {
  return (
    <section
      id="overview"
      className="relative bg-[#050505] px-6 py-24 md:py-32 md:px-16"
    >
      <div className="max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70"
        >
          Why Dubai Mall
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="heading-font max-w-5xl text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-white"
        >
          A GLOBAL DESTINATION BUILT FOR SCALE, CULTURE, AND COMMERCE
        </motion.h2>
      </div>

      <div className="mt-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-4xl"
        >
          <Image
            src="/images/dubai-mall-main.jpg"
            alt="Dubai Mall"
            width={1200}
            height={1400}
            quality={85}
            loading="lazy"
            className="h-[420px] sm:h-[550px] lg:h-[700px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        <div className="space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <StatsCard end={100} suffix="M+" />

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">
              Annual Visitors
            </p>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              One of the most visited lifestyle and retail destinations on the
              planet, attracting global audiences year-round.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <StatsCard end={1200} suffix="+" />

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">
              Retail & Luxury Brands
            </p>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Home to flagship global retailers, luxury maisons, emerging
              labels, and immersive consumer experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-white">
              Global
            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">
              Tourism & Cultural Reach
            </p>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Positioned at the center of Downtown Dubai beside Burj Khalifa,
              connecting tourism, entertainment, hospitality, and commerce.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
