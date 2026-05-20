"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-20 sm:pb-0 relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/dubai-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black" />

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70"
        >
          Dubai, United Arab Emirates
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="heading-font max-w-5xl leading-[0.9] tracking-wide text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl"
        >
          THE WORLD&apos;S MOST VISITED RETAIL DESTINATION
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 flex flex-wrap  gap-8 py-1 px-2 rounded-l-sm"
        >
          {/* <div>
            <div className="flex">
              <CountUp
                end={100}
                duration={3}
                className="text-3xl font-semibold md:text-4xl"
              />
              <p className="text-3xl font-semibold md:text-4xl">M+</p>
            </div>
            <p className="mt-1 text-sm uppercase tracking-widest text-white/60">
              Annual Visitors
            </p>
          </div>

          <div>
            <div className="flex">
              <CountUp
                end={1200}
                duration={3}
                className="text-3xl font-semibold md:text-4xl"
              />
              <p className="text-3xl font-semibold md:text-4xl">+</p>
            </div>
            <p className="mt-1 text-sm uppercase tracking-widest text-white/60">
              Retail Stores
            </p>
          </div> */}

          {/* <div>
            <p className="text-3xl font-semibold md:text-4xl">Global</p>
            <p className="mt-1 text-sm uppercase tracking-widest text-white/60">
              Luxury Destination
            </p>
          </div> */}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 w-fit rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white hover:text-black"
        >
          Explore Opportunities
        </motion.button>
      </div>
    </section>
  );
}
