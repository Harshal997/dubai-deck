"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = ["Hermès", "Gucci", "Prada", "Dior", "Cartier", "Rolex"];

export default function RetailLuxury() {
  return (
    <section
      id="retail"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-32 md:px-16"
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
          Retail & Luxury
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
          WHERE GLOBAL LUXURY MEETS CULTURAL MOMENTUM
        </motion.h2>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] lg:col-span-5"
        >
          <Image
            src="/images/dubai-shopping.jpg"
            alt="Luxury Retail"
            width={1000}
            height={1400}
            quality={85}
            loading="lazy"
            className="h-[420px] sm:h-[550px] lg:h-[700px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        <div className="flex flex-col justify-between lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              Fashion Avenue at Dubai Mall represents one of the most
              prestigious luxury retail environments in the world, blending
              global fashion, experiential architecture, and affluent
              international audiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3"
          >
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition hover:bg-white/[0.06]"
              >
                <p className="text-lg text-white/90">{brand}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative mt-10 overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/images/hermes.jpg"
              alt="Fashion Avenue"
              width={1400}
              height={700}
              quality={85}
              loading="lazy"
              className="h-[100px] w-full object-cover md:h-[200px] lg:h-[300px]"
            />

            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
