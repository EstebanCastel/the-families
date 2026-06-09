import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach THE FAMILIES — stockists, press, collaborations and made-to-order enquiries.",
};

const CHANNELS = [
  { label: "General", value: "hello@thefamilies.studio", href: "mailto:hello@thefamilies.studio" },
  { label: "Press", value: "press@thefamilies.studio", href: "mailto:press@thefamilies.studio" },
  { label: "Stockists", value: "wholesale@thefamilies.studio", href: "mailto:wholesale@thefamilies.studio" },
  { label: "Instagram", value: "@t.families", href: "https://www.instagram.com/t.families/" },
];

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-40">
      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="kicker mb-6">Contact — Studio</p>
        <h1 className="display text-[16vw] leading-[0.82] md:text-[10vw]">Get in touch</h1>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
        <div>
          <p className="kicker mb-8">Direct</p>
          <ul className="space-y-7">
            {CHANNELS.map((c) => (
              <li key={c.label} className="border-b border-line pb-5">
                <p className="text-[12px] uppercase tracking-[0.2em] text-ash">{c.label}</p>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="link-underline mt-1 inline-block text-xl md:text-2xl"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <p className="text-[12px] uppercase tracking-[0.2em] text-ash">Studio</p>
            <p className="mt-2 text-xl leading-relaxed md:text-2xl">
              By appointment only.
              <br />
              The grey room.
            </p>
          </div>
        </div>

        <form className="flex flex-col gap-6">
          <p className="kicker">Write to us</p>
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
          ].map((f) => (
            <label key={f.name} className="block border-b border-line pb-2">
              <span className="block text-[11px] uppercase tracking-[0.2em] text-ash">{f.label}</span>
              <input
                type={f.type}
                name={f.name}
                required
                className="mt-2 w-full bg-transparent text-lg outline-none"
              />
            </label>
          ))}
          <label className="block border-b border-line pb-2">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-ash">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-2 w-full resize-none bg-transparent text-lg outline-none"
            />
          </label>
          <button
            type="submit"
            className="mt-2 self-start border border-ink px-10 py-4 text-[12px] uppercase tracking-[0.25em] transition-colors duration-500 hover:bg-ink hover:text-paper"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}
