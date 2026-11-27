import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import Link from "next/link";
import { SITE_URL } from "@/constants/seo-constants";
import "./globals.css";

/**
 * 404 for both languages. The site has two root layouts (/ and /fr/), so
 * the not-found page brings its own <html>.
 */
const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404 | Taher Guerbej",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${funnelDisplay.variable} h-full antialiased`}>
      <body className="flex min-h-full items-center justify-center bg-primary px-6 text-center text-white">
        <main>
          <p className="text-gradient text-7xl font-black">404</p>
          <h1 className="mt-4 text-2xl font-bold">This page does not exist.</h1>
          <p lang="fr" className="mt-1 text-neutral-400">
            Cette page n&apos;existe pas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Home
            </Link>
            <Link href="/fr/" lang="fr" className="btn-ghost">
              Accueil
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
