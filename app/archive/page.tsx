import type { Metadata } from "next";
import ArchiveGrid from "@/components/ArchiveGrid";
import { looks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "The full contact sheet — campaigns, collections and creative process from THE FAMILIES, presented as a family photo album.",
};

export default function ArchivePage() {
  return (
    <div className="pt-28 md:pt-40">
      <header className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="kicker mb-6">The Archive — Contact sheet 001</p>
        <h1 className="display text-[16vw] leading-[0.82] md:text-[10vw]">Archive</h1>
        <p className="mt-8 max-w-xl leading-relaxed text-ink/75">
          Forty-five frames from the first year. Campaigns, process and behind-the-scenes, kept the
          way a family keeps photographs — unsorted, undated, and complete. Select any frame to
          enlarge.
        </p>
      </header>

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <ArchiveGrid looks={looks} />
      </section>
    </div>
  );
}
