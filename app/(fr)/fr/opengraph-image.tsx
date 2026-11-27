import { OG_SIZE, ogImageAlt, renderOgImage } from "@/components/seo/og-image";

// Rendered once at build time (static export for GitHub Pages).
export const dynamic = "force-static";

export const alt = ogImageAlt("fr");
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage("fr");
}
