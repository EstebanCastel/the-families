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
    default: "THE FAMILIES — A Family Archive",
    template: "%s — THE FAMILIES",
  },
  description:
    "THE FAMILIES is a cultural project and independent fashion house built on memory, identity and belonging. A digital exhibition that happens to sell clothes.",
  keywords: ["The Families", "avant-garde fashion", "archive", "editorial", "youth culture"],
  openGraph: {
    title: "THE FAMILIES — A Family Archive",
    description: "An independent fashion house built on memory, identity and belonging.",
    url: SITE,
    siteName: "THE FAMILIES",
    type: "website",
    images: [{ url: "/video/hero-poster.jpg", width: 1920, height: 1080 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logo/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${interTight.variable} grain h-full antialiased`}>
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
