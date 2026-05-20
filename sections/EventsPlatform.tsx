"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    title: "Global Brand Activations",
    description:
      "Immersive campaigns and luxury brand experiences designed to capture worldwide attention.",
  },
  {
    title: "Concerts & Live Events",
    description:
      "World-class entertainment programming driving large-scale audience engagement year-round.",
  },
  {
    title: "Product Launches",
    description:
      "Premium environments for automotive, fashion, technology, and cultural unveilings.",
  },
];

export default function EventsPlatform() {
  return (
    <section id="events" className="relative overflow-hidden bg-black px-6 py-24 md:py-32 md:px-16">

      <div className="absolute inset-0">
        <Image
          src="/images/entertainment.jpg"
          alt="Events"
          fill
          quality={85}
          loading="lazy"
          className="object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10">

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
            Events & Brand Platform
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
            viewport={{ once: true }}
            className="heading-font max-w-6xl text-5xl leading-[0.95] text-white md:text-7xl"
          >
            A GLOBAL PLATFORM FOR CULTURE, ENTERTAINMENT, AND BRAND IMPACT
          </motion.h2>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-12">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-2xl leading-relaxed text-white/80 md:text-4xl">
              Dubai Mall transforms foot traffic into cultural visibility,
              turning every activation into a globally amplified moment.
            </p>

            <div className="mt-16 space-y-10">

              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-white">365</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
                  Year-Round Event Opportunities
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-white">Global</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
                  Media & Influencer Reach
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:col-span-7">

            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md"
              >
                <h3 className="heading-font text-4xl text-white">
                  {event.title}
                </h3>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mx-auto mt-32 max-w-5xl text-center"
        >
          <p className="heading-font text-5xl leading-none text-white md:text-7xl">
            BUILT FOR THE WORLD’S MOST AMBITIOUS BRANDS
          </p>
        </motion.div>
      </div>
    </section>
  );
}