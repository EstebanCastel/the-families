import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop",
  description: "Curated, hand-built editions from THE FAMILIES. Closer to an exhibition than a catalogue.",
};

const CATEGORIES = ["All", "Outerwear", "Knitwear", "Trousers", "Accessories"];

export default function ShopPage() {
  return (
    <div className="pt-28 md:pt-40">
      <header className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="kicker mb-6">The Shop — Edition pieces</p>
        <h1 className="display text-[16vw] leading-[0.82] md:text-[10vw]">Wardrobe</h1>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-5 text-[12px] uppercase tracking-[0.18em] text-ash">
          {CATEGORIES.map((c, i) => (
            <span key={c} className={i === 0 ? "text-ink" : "transition-colors hover:text-ink"}>
              {c}
            </span>
          ))}
          <span className="ml-auto hidden md:inline">{products.length} pieces · One year, three chapters</span>
        </div>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link href={`/shop/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-ash-2/20">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover grayscale transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-paper mix-blend-difference">
                    {p.edition}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h2 className="text-base font-medium">{p.title}</h2>
                  <span className="text-sm text-ash">{p.price}</span>
                </div>
                <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ash">{p.category}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
