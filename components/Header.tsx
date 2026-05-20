"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Retail", href: "#retail" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-1/2 top-5 z-50 w-[95%] max-w-7xl -translate-x-1/2"
      >
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-2xl">
          <a
            href="#hero"
            className="heading-font text-xl tracking-[0.2em] text-white md:text-2xl"
          >
            DUBAI MALL
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="hidden rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black lg:block">
            Partner With Us
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed left-1/2 top-24 z-40 w-[92%] max-w-md -translate-x-1/2 rounded-3xl border border-white/10 bg-black/90 p-8 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <button className="mt-4 rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.2em] text-black">
                Partner With Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
