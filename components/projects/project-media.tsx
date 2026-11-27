"use client";

import { type FC } from "react";
import { useReducedMotion } from "motion/react";
import { type ProjectMedia as Media } from "@/types/portfolio-types";

interface ProjectMediaProps {
  media: Media;
  /** "preview": silent loop in the showcase. "full": with controls. */
  mode: "preview" | "full";
  /** In the showcase, only panels near the active one load media. */
  load?: boolean;
  className?: string;
}

/**
 * Renders a project image or video. Videos never autoplay for visitors who
 * ask for reduced motion; they get the poster (preview) or controls (full).
 */
export const ProjectMedia: FC<ProjectMediaProps> = ({
  media,
  mode,
  load = true,
  className = "",
}) => {
  const reduceMotion = useReducedMotion();
  const fit = `h-full w-full object-contain ${className}`;

  if (!load) return null;

  if (media.type === "image") {
    return (
      // Plain <img>: project media has mixed aspect ratios and is shown
      // with object-contain, so next/image's fixed boxes don't help here.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={media.src}
        alt={media.alt}
        loading="lazy"
        decoding="async"
        className={fit}
      />
    );
  }

  if (mode === "preview" && reduceMotion) {
    return media.poster ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={media.poster}
        alt={media.alt}
        loading="lazy"
        decoding="async"
        className={fit}
      />
    ) : null;
  }

  return (
    <video
      src={media.src}
      poster={media.poster}
      aria-label={media.alt}
      className={fit}
      muted
      loop
      playsInline
      autoPlay={!reduceMotion}
      controls={mode === "full"}
      preload={mode === "full" ? "metadata" : "auto"}
    />
  );
};

export const MediaCaption: FC<{ text?: string }> = ({ text }) =>
  text ? (
    <p className="mt-2 text-xs leading-relaxed text-neutral-400">{text}</p>
  ) : null;
