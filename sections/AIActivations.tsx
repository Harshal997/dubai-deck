"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const concepts = [
  {
    title: "Immersive Fashion Experiences",
    description:
      "AI-assisted experiential retail concepts designed to transform luxury shopping into cinematic interactive environments.",
    image: "/images/ai-2.jpg",
  },
  {
    title: "Next-Generation Brand Activations",
    description:
      "Conceptual large-scale activations combining projection mapping, immersive storytelling, and experiential audience engagement.",
    image: "/images/ai-1.jpg",
  },
];

export default function AIActivations() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-16 md:py-32">
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/70">
            AI-Powered Interactive Design
          </p>

          <h2 className="heading-font text-4xl text-white sm:text-5xl md:text-7xl">
            FUTURE BRAND ACTIVATIONS
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
            Exploring how AI-assisted design, immersive storytelling, and
            next-generation experiential technology can redefine retail,
            entertainment, and audience engagement at global destinations.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={concept.image}
                  alt={concept.title}
                  fill
                  quality={85}
                  loading="lazy"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl text-white">{concept.title}</h3>

                <p className="mt-4 leading-relaxed text-white/70">
                  {concept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
