import type { Metadata } from "next";
import ArchiveGrid from "@/components/ArchiveGrid";
import { looks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Archivo",
  description:
    "La hoja de contactos completa: campañas, colecciones y proceso creativo de THE FAMILIES, presentados como un álbum de fotos familiar.",
};

export default function ArchivePage() {
  return (
    <div className="pt-28 md:pt-40">
      <header className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="kicker mb-6">El Archivo — Hoja de contactos 001</p>
        <h1 className="display text-[16vw] leading-[0.82] md:text-[10vw]">Archivo</h1>
        <p className="mt-8 max-w-xl leading-relaxed text-ink/75">
          Cuarenta y cinco cuadros del primer año. Campañas, proceso y detrás de cámaras, guardados
          como una familia guarda las fotos: sin orden, sin fecha y completos. Selecciona cualquier
          cuadro para ampliarlo.
        </p>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <ArchiveGrid looks={looks} />
      </section>
    </div>
  );
}
