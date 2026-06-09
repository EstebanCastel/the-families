"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Look = { src: string; id: string };

export default function ArchiveGrid({ looks }: { looks: Look[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? i : (i - 1 + looks.length) % looks.length));
  const next = () => setActive((i) => (i === null ? i : (i + 1) % looks.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 md:gap-2 lg:grid-cols-5">
        {looks.map((l, i) => (
          <motion.button
            key={l.id}
            onClick={() => setActive(i)}
            className="group relative block aspect-[4/5] overflow-hidden bg-ash-2/20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 5) * 0.03 }}
          >
            <Image
              src={l.src}
              alt={l.id}
              fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 20vw"
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-paper mix-blend-difference">
              {l.id}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              className="absolute right-5 top-5 text-[12px] uppercase tracking-[0.2em] text-paper"
              onClick={close}
            >
              Close
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-paper md:left-10"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-paper md:right-10"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              →
            </button>
            <motion.div
              key={active}
              className="relative h-[78vh] w-full max-w-3xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={looks[active].src}
                alt={looks[active].id}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <span className="absolute -bottom-7 left-0 font-mono text-[11px] tracking-widest text-paper/70">
                {looks[active].id} · Archivo The Families
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
