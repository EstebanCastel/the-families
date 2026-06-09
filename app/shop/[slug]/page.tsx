import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Accordion from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.story,
    openGraph: { images: [{ url: product.image }] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="pt-16 md:pt-20">
      <div className="md:grid md:grid-cols-2">
        {/* Gallery */}
        <div className="flex flex-col gap-1.5 md:gap-2">
          {product.gallery.map((src, i) => (
            <div key={src} className="relative aspect-[4/5] w-full overflow-hidden bg-ash-2/20">
              <Image
                src={src}
                alt={`${product.title} — vista ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Info — sticky */}
        <div className="px-5 py-12 md:px-16 md:py-0">
          <div className="md:sticky md:top-24">
            <p className="kicker mb-4">{product.category} — {product.edition}</p>
            <h1 className="display text-5xl leading-[0.9] md:text-7xl">{product.title}</h1>
            <p className="mt-6 text-xl text-ash">{product.price}</p>

            <p className="mt-8 max-w-md leading-relaxed text-ink/80">{product.story}</p>

            <button className="mt-9 w-full max-w-md border border-ink py-4 text-[12px] uppercase tracking-[0.25em] transition-colors duration-500 hover:bg-ink hover:text-paper">
              Añadir al guardarropa
            </button>
            <p className="mt-3 max-w-md text-center text-[11px] uppercase tracking-[0.18em] text-ash">
              Hecho a pedido — elaborado a mano en 4 a 6 semanas
            </p>

            <div className="mt-12 max-w-md">
              <Accordion
                items={[
                  {
                    title: "Materiales y Construcción",
                    body: (
                      <ul className="space-y-1.5">
                        {product.materials.map((m) => (
                          <li key={m}>— {m}</li>
                        ))}
                      </ul>
                    ),
                  },
                  { title: "Filosofía de la Prenda", body: <p>{product.philosophy}</p> },
                  {
                    title: "Tallas",
                    body: (
                      <p>
                        Corte oversize y unisex. The Families está hecho para crecer dentro de él, no
                        para ceñirse al cuerpo. Si estás entre tallas, baja una para estructura o sube
                        una para volumen. Medidas a pedido disponibles bajo solicitud.
                      </p>
                    ),
                  },
                  {
                    title: "Envío y Cuidado",
                    body: (
                      <p>
                        Envíos a toda Colombia, asegurados, 3 a 6 días hábiles una vez elaborado.
                        Envíos internacionales bajo cotización. Cada pieza llega con su ficha de
                        archivo y notas de origen. Lavar a mano en frío, secar en plano, usar seguido.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Story band */}
      <section className="bg-ink px-5 py-28 text-paper md:px-10 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="kicker mb-8">La Filosofía</p>
          <Reveal>
            <p className="display text-3xl leading-[1.05] md:text-5xl md:leading-[1.05]">
              {product.philosophy}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
        <h2 className="display mb-12 text-4xl md:text-6xl">Piezas relacionadas</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3">
          {related.map((p) => (
            <Link key={p.slug} href={`/shop/${p.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-ash-2/20">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="object-cover grayscale transition-all duration-[1.1s] group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="text-sm font-medium">{p.title}</h3>
                <span className="text-sm text-ash">{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
