import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, RevealText } from "@/components/Reveal";
import { looks } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "THE FAMILIES is a cultural project built on memory, identity and belonging.",
};

const PILLARS = ["Memory", "Identity", "Belonging", "Youth Culture", "Family", "Nostalgia"];

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-40">
      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="kicker mb-10">About — A cultural project</p>
        <h1 className="display max-w-[14ch] text-[11vw] leading-[0.86] md:text-[7vw]">
          <RevealText text="We make relics," />
          <span className="block text-ash-2">
            <RevealText text="not garments." delay={0.12} />
          </span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-36">
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <Image src={looks[7].src} alt="The Families" fill sizes="50vw" className="object-cover" />
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-xl leading-relaxed text-ink/85 md:text-2xl md:leading-relaxed">
              The Families began with a box of photographs nobody wanted to throw away. A label, an
              art exhibition, a youth movement and a forgotten photo album, all at once — built to
              hold the people we are afraid of forgetting.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 leading-relaxed text-ink/70">
              Every piece is salvaged, washed and rebuilt by hand against a single grey backdrop.
              Faces are withheld. The clothing belongs to no one in particular, and therefore to
              everyone who has ever inherited something they did not ask for. We release the work in
              chapters, the way a family tells its story: out of order, and never finished.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 text-paper md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="kicker mb-12">The emotional pillars</p>
          <ul className="grid grid-cols-2 gap-y-3 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <li className="display text-3xl leading-tight md:text-6xl">{p}</li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-28 text-center md:py-40">
        <Reveal>
          <p className="display text-3xl leading-[1.1] md:text-5xl md:leading-[1.1]">
            If Rick Owens, Aitor Throup and an independent art publication built a label around
            memory and family — this is the album they would leave behind.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
