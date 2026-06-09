"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/shop", label: "Tienda" },
  { href: "/archive", label: "Archivo" },
  { href: "/journal", label: "Diario" },
  { href: "/about", label: "Nosotros" },
  { href: "/contact", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-blood text-white transition-shadow duration-500 ${
          scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.25)]" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="The Families — inicio">
            <Image
              src="/logo/logo.png"
              alt="The Families"
              width={36}
              height={36}
              className="h-8 w-8 md:h-9 md:w-9"
              priority
            />
            <span className="hidden text-[13px] font-semibold uppercase tracking-[0.34em] sm:inline">
              The&nbsp;Families
            </span>
          </Link>

          <ul className="hidden items-center gap-9 text-[12px] font-medium uppercase tracking-[0.18em] md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] md:hidden"
            aria-label="Abrir menú"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-blood px-6 text-white md:hidden"
          >
            <ul className="space-y-3">
              {[{ href: "/", label: "Inicio" }, ...LINKS].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={l.href} className="display text-[15vw] leading-[0.95]">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
