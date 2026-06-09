import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE = "https://the-families.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "THE FAMILIES — Un Archivo Familiar",
    template: "%s — THE FAMILIES",
  },
  description:
    "THE FAMILIES es un proyecto cultural y casa de moda independiente construida sobre la memoria, la identidad y la pertenencia. Una exposición digital que además vende ropa.",
  keywords: ["The Families", "moda avant-garde", "archivo", "editorial", "cultura juvenil", "Colombia"],
  openGraph: {
    title: "THE FAMILIES — Un Archivo Familiar",
    description: "Casa de moda independiente construida sobre la memoria, la identidad y la pertenencia.",
    url: SITE,
    siteName: "THE FAMILIES",
    type: "website",
    locale: "es_CO",
    images: [{ url: "/video/hero-poster.jpg", width: 1920, height: 1080 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logo/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${interTight.variable} grain h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
