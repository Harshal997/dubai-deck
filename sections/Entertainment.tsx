"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const attractions = [
  {
    title: "Dubai Aquarium",
    description:
      "One of the world's largest suspended aquariums, attracting millions of visitors annually.",
    image: "/images/aquarium.jpg",
  },
  {
    title: "Dubai Arte Museum",
    description:
      "A cutting-edge contemporary art space hosting exhibitions from global artists, driving cultural tourism.",
    image: "/images/arte-museum.jpg",
  },
  {
    title: "Dubai SkyView",
    description:
      "Iconic observation deck offering breathtaking panoramic views of Dubai's skyline.",
    image: "/images/skyview.jpg",
  },
];

export default function Entertainment() {
  return (
    <section
      id="entertainment"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:py-32 md:px-16"
    >
      <div className="absolute left-1/2 top-0 h-[380px] sm:h-[450px] lg:h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl">
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
          Attractions & Entertainment
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="heading-font max-w-5xl text-5xl leading-[0.95] text-white md:text-7xl"
        >
          ENTERTAINMENT THAT DRIVES GLOBAL FOOT TRAFFIC
        </motion.h2>
      </div>

      <div className="relative z-10 mt-24 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {attractions.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1200}
                quality={85}
                loading="lazy"
                className="h-[380px] sm:h-[450px] lg:h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 z-10 p-8">
              <h3 className="heading-font text-4xl text-white">{item.title}</h3>

              <p className="mt-4 max-w-sm text-base leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mt-28 max-w-4xl text-center"
      >
        <p className="text-2xl leading-relaxed text-white/80 md:text-4xl">
          Dubai Mall is not simply a retail environment. It is a continuously
          evolving global entertainment platform.
        </p>
      </motion.div>
    </section>
  );
}
