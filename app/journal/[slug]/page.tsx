import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { journal } from "@/lib/data";

export function generateStaticParams() {
  return journal.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = journal.find((j) => j.slug === slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.dek, openGraph: { images: [{ url: entry.cover }] } };
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = journal.find((j) => j.slug === slug);
  if (!entry) notFound();

  const idx = journal.findIndex((j) => j.slug === slug);
  const nextEntry = journal[(idx + 1) % journal.length];

  return (
    <article className="pt-28 md:pt-40">
      <header className="mx-auto max-w-3xl px-5 text-center md:px-0">
        <p className="kicker mb-6">{entry.category} — {entry.date}</p>
        <h1 className="display text-5xl leading-[0.9] md:text-7xl">{entry.title}</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{entry.dek}</p>
      </header>

      <div className="relative mx-auto mt-14 aspect-[16/9] w-full max-w-5xl overflow-hidden px-0 md:mt-20">
        <Image src={entry.cover} alt={entry.title} fill priority sizes="100vw" className="object-cover" />
      </div>

      <div className="mx-auto max-w-2xl px-5 py-16 md:py-24">
        {entry.body.map((p, i) => (
          <p
            key={i}
            className={`leading-[1.8] text-ink/85 ${
              i === 0 ? "text-2xl md:text-3xl md:leading-[1.5]" : "mt-7 text-lg"
            }`}
          >
            {p}
          </p>
        ))}
      </div>

      <nav className="mx-auto max-w-[1600px] border-t border-line px-5 py-14 md:px-10">
        <Link href={`/journal/${nextEntry.slug}`} className="group block">
          <p className="kicker mb-3">Siguiente en el diario</p>
          <span className="display text-4xl leading-[0.95] transition-colors group-hover:text-ash md:text-7xl">
            {nextEntry.title} →
          </span>
        </Link>
      </nav>
    </article>
  );
}
