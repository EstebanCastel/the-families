import Link from "next/link";
import Marquee from "./Marquee";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink text-paper">
      <Link href="/shop" className="block border-b border-white/10 py-10">
        <Marquee text="THE FAMILIES" duration={30} />
      </Link>

      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 md:py-24">
        <div>
          <h3 className="display text-4xl md:text-6xl">The newsletter</h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ash-2">
            One letter, each chapter. No noise. Only the archive as it opens.
          </p>
          <form className="mt-7 flex max-w-md items-center border-b border-white/25 pb-2">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent text-sm outline-none placeholder:text-ash"
            />
            <button type="submit" className="text-[12px] uppercase tracking-[0.2em] link-underline">
              Join
            </button>
          </form>
        </div>

        <nav className="text-sm">
          <p className="kicker mb-5 text-ash">Index</p>
          <ul className="space-y-2.5">
            {[
              { href: "/shop", label: "Shop" },
              { href: "/archive", label: "Archive" },
              { href: "/journal", label: "Journal" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline text-ash-2">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="text-sm">
          <p className="kicker mb-5 text-ash">Elsewhere</p>
          <ul className="space-y-2.5 text-ash-2">
            <li>
              <a
                href="https://www.instagram.com/t.families/"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:hello@thefamilies.studio" className="link-underline">
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col gap-2 border-t border-white/10 px-5 py-6 text-[11px] uppercase tracking-[0.2em] text-ash md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {year} The Families — A Family Archive</span>
        <span>Memory · Identity · Belonging</span>
      </div>
    </footer>
  );
}
