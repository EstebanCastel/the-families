"use client";

import { motion } from "framer-motion";

export default function Marquee({
  text,
  className = "",
  duration = 28,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const items = Array.from({ length: 4 });
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {items.map((_, i) => (
          <span key={i} className="display mr-10 text-[14vw] leading-none md:text-[10vw]">
            {text}
            <span className="text-blood">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
