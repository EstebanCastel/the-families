import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { journal } from "@/lib/data";

export const metadata: Metadata = {
  title: "Diario",
  description: "Ensayos, notas de proceso y referencias culturales: una publicación independiente de THE FAMILIES.",
};

export default function JournalPage() {
  const [lead, ...rest] = journal;
  return (
    <div className="pt-28 md:pt-40">
      <header className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="kicker mb-6">El Diario — Una publicación independiente</p>
        <h1 className="display text-[16vw] leading-[0.82] md:text-[10vw]">Diario</h1>
      </header>

      {/* Lead */}
      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <Link href={`/journal/${lead.slug}`} className="group grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
            <Image
              src={lead.cover}
              alt={lead.title}
              fill
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover grayscale transition-all duration-[1.2s] group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </div>
          <div>
            <p className="kicker mb-4">{lead.category} — {lead.date}</p>
            <h2 className="display text-5xl leading-[0.92] md:text-7xl">{lead.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">{lead.dek}</p>
            <span className="mt-8 inline-block link-underline text-sm uppercase tracking-[0.2em]">
              Leer el ensayo →
            </span>
          </div>
        </Link>
      </section>

      {/* Rest */}
      <section className="mx-auto max-w-[1600px] border-t border-line px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
          {rest.map((entry, i) => (
            <Reveal key={entry.slug} delay={i * 0.08}>
              <Link href={`/journal/${entry.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={entry.cover}
                    alt={entry.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover grayscale transition-all duration-[1.1s] group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <p className="kicker mt-5">{entry.category} — {entry.date}</p>
                <h3 className="mt-2 text-3xl font-medium leading-tight">{entry.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70">{entry.dek}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
