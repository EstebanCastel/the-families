import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { Reveal, RevealText, ImageReveal } from "@/components/Reveal";
import { products, collections, journal, looks } from "@/lib/data";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />

      {/* MANIFESTO */}
      <section className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-44">
        <p className="kicker mb-10">001 — Statement</p>
        <h2 className="display max-w-[14ch] text-[10vw] leading-[0.9] md:text-[6.4vw]">
          <RevealText text="Not a clothing brand." />
          <span className="block text-ash-2">
            <RevealText text="A family archive." delay={0.15} />
          </span>
        </h2>
        <Reveal delay={0.2} className="mt-12 grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div />
          <p className="max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">
            The Families is a cultural project disguised as a wardrobe. Every garment begins as
            something already loved and rebuilt by hand — a forgotten photo album turned into cloth.
            What you are about to enter is closer to an exhibition than a shop.
          </p>
        </Reveal>
      </section>

      {/* EDITORIAL STORYTELLING — alternating */}
      <section className="space-y-24 pb-28 md:space-y-40 md:pb-44">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <ImageReveal className="relative aspect-[3/4] md:aspect-[4/5]">
            <Image
              src={looks[0].src}
              alt="Look one"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </ImageReveal>
          <div className="px-5 md:px-16">
            <p className="kicker mb-6">Chapter 01 — Household Saints</p>
            <h3 className="display text-5xl leading-[0.92] md:text-7xl">
              Devotion,
              <br />
              denim
              <br />
              &amp; the dead
            </h3>
            <p className="mt-7 max-w-md leading-relaxed text-ink/75">
              Garments photographed the way relatives are remembered: from behind, mid-gesture,
              refusing the camera. Faces withheld so the clothing can speak.
            </p>
            <Link
              href="/shop"
              className="mt-9 inline-block link-underline text-sm uppercase tracking-[0.2em]"
            >
              Enter the collection
            </Link>
          </div>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 px-5 md:order-1 md:px-16 md:text-right">
            <p className="kicker mb-6">The Grey Backdrop</p>
            <h3 className="display text-5xl leading-[0.92] md:text-7xl">
              Measured
              <br />
              for memory
            </h3>
            <p className="ml-auto mt-7 max-w-md leading-relaxed text-ink/75">
              We never leave the studio. A single institutional grey — the colour of a waiting room,
              a class photo, a uniform fitting — holds every piece. The backdrop is not neutral. It
              is the memory of being measured.
            </p>
          </div>
          <ImageReveal className="relative order-1 aspect-[3/4] md:order-2 md:aspect-[4/5]">
            <Image
              src={looks[20].src}
              alt="Look two"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </ImageReveal>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="bg-ink py-28 text-paper md:py-44">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="kicker mb-4">002 — The Pieces</p>
              <h2 className="display text-5xl md:text-8xl">Selected works</h2>
            </div>
            <Link
              href="/shop"
              className="hidden link-underline text-sm uppercase tracking-[0.2em] md:block"
            >
              All pieces →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-4 md:gap-x-6">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/shop/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width:768px) 50vw, 25vw"
                      className="object-cover grayscale transition-all duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <h3 className="text-sm font-medium">{p.title}</h3>
                    <span className="text-sm text-ash">{p.price}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-ash">
                    {p.edition}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVE TEASER */}
      <section className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-44">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker mb-4">003 — The Archive</p>
            <h2 className="display max-w-[16ch] text-5xl leading-[0.9] md:text-7xl">
              Forty-five frames from chapter one
            </h2>
          </div>
          <Link href="/archive" className="link-underline text-sm uppercase tracking-[0.2em]">
            Open the full archive →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-1.5 md:grid-cols-6 md:gap-2">
          {looks.slice(0, 12).map((l, i) => (
            <Reveal key={l.id} delay={(i % 6) * 0.04} y={18}>
              <Link
                href="/archive"
                className="group relative block aspect-square overflow-hidden bg-ash-2/20"
              >
                <Image
                  src={l.src}
                  alt={l.id}
                  fill
                  sizes="(max-width:768px) 33vw, 16vw"
                  className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
                />
                <span className="absolute bottom-1 left-1.5 font-mono text-[9px] text-paper mix-blend-difference">
                  {l.id}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNAL */}
      <section className="border-t border-line py-28 md:py-44">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="kicker mb-4">004 — The Journal</p>
          <h2 className="display mb-14 text-5xl md:text-8xl">Reading room</h2>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {journal.map((entry, i) => (
              <Reveal key={entry.slug} delay={i * 0.08}>
                <Link href={`/journal/${entry.slug}`} className="group block">
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <Image
                      src={entry.cover}
                      alt={entry.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover grayscale transition-all duration-[1.1s] group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="kicker mt-5">
                    {entry.category} — {entry.date}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium leading-tight md:text-3xl">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/70">{entry.dek}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
