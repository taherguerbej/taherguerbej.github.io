import { ImageResponse } from "next/og";
import { EN } from "@/content/en";
import { FR } from "@/content/fr";
import { HERO_NAME } from "@/constants/hero-constants";
import { type Locale } from "@/types/i18n-types";

export const OG_SIZE = { width: 1200, height: 630 };

const OG_TEXT: Record<
  Locale,
  { eyebrow: string; role: string; focus: string; availability: string }
> = {
  en: {
    eyebrow: "Robotics portfolio",
    role: EN.hero.role,
    focus: "Perception · Planning · Control",
    availability: EN.hero.availability,
  },
  fr: {
    eyebrow: "Portfolio robotique",
    role: FR.hero.role,
    focus: "Perception · Planification · Commande",
    availability: FR.hero.availability,
  },
};

export const ogImageAlt = (locale: Locale) =>
  `${HERO_NAME}, ${OG_TEXT[locale].role}`;

/** Social preview, rendered at build time in the page's language. */
export const renderOgImage = (locale: Locale) => {
  const text = OG_TEXT[locale];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          background:
            "radial-gradient(ellipse at 75% 40%, rgba(59,91,255,0.45), transparent 55%), radial-gradient(ellipse at 90% 90%, rgba(34,211,238,0.3), transparent 50%), #030412",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7dd3fc",
          }}
        >
          {text.eyebrow}
        </div>
        <div
          style={{ display: "flex", fontSize: 96, fontWeight: 800, marginTop: 18 }}
        >
          {HERO_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 10, color: "#c7d6ff" }}>
          {text.role}
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 34, color: "#94a3b8" }}>
          {text.focus}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 24,
            color: "#34d399",
          }}
        >
          {text.availability}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
};
