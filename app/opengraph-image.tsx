import { ImageResponse } from "next/og";
import {
  HERO_NAME,
  HERO_ROLE,
  HERO_AVAILABILITY,
} from "@/constants/hero-constants";

export const alt = `${HERO_NAME}, ${HERO_ROLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview, generated at build time from the hero constants. */
export default function OpengraphImage() {
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
          Robotics portfolio
        </div>
        <div
          style={{ display: "flex", fontSize: 96, fontWeight: 800, marginTop: 18 }}
        >
          {HERO_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 10, color: "#c7d6ff" }}>
          {HERO_ROLE}
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 34, color: "#94a3b8" }}>
          Perception · Planning · Control
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 24,
            color: "#34d399",
          }}
        >
          {HERO_AVAILABILITY}
        </div>
      </div>
    ),
    { ...size }
  );
}
