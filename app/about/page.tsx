import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, RevealText } from "@/components/Reveal";
import { looks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "THE FAMILIES es un proyecto cultural construido sobre la memoria, la identidad y la pertenencia.",
};

const PILLARS = ["Memoria", "Identidad", "Pertenencia", "Cultura Juvenil", "Familia", "Nostalgia"];

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-40">
      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="kicker mb-10">Nosotros — Un proyecto cultural</p>
        <h1 className="display max-w-[14ch] text-[11vw] leading-[0.86] md:text-[7vw]">
          <RevealText text="Hacemos reliquias," />
          <span className="block text-ash-2">
            <RevealText text="no prendas." delay={0.12} />
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
              The Families empezó con una caja de fotografías que nadie quería botar. Una marca, una
              exposición de arte, un movimiento juvenil y un álbum de fotos olvidado, todo a la vez,
              hecho para sostener a las personas que tenemos miedo de olvidar.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 leading-relaxed text-ink/70">
              Cada pieza es rescatada, lavada y reconstruida a mano sobre un solo fondo gris. Los
              rostros se retienen. La ropa no pertenece a nadie en particular, y por eso a todos los
              que alguna vez heredaron algo que no pidieron. Lanzamos el trabajo por capítulos, como
              una familia cuenta su historia: sin orden, y nunca terminada.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 text-paper md:py-36">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="kicker mb-12">Los pilares emocionales</p>
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
            Si Rick Owens, Aitor Throup y una publicación de arte independiente construyeran una
            marca en torno a la memoria y la familia, este sería el álbum que dejarían atrás.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
