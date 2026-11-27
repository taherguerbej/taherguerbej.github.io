"use client";

import { type FC, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { TILT_RANGE, TILT_SPRING } from "@/constants/projects-constants";
import { formatCounter, padIndex } from "@/helpers/format-helpers";
import { type ProjectPreviewProps } from "@/types/project-types";
import { ProjectMedia } from "./project-media";

const BADGE =
  "rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] backdrop-blur-md";

export const ProjectPreview: FC<ProjectPreviewProps> = ({
  project,
  index,
  total,
  showPreview,
  onOpen,
}) => {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], TILT_RANGE.x),
    TILT_SPRING
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], TILT_RANGE.y),
    TILT_SPRING
  );

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const handleLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  const media = project.media;
  const label = media
    ? media.caption?.startsWith("Simulation")
      ? "Simulation"
      : media.caption?.startsWith("Real robot")
        ? "Real robot"
        : media.type === "video"
        ? "Video"
        : "Result"
    : "Media coming soon";

  return (
    <div className="order-1 lg:order-2 lg:col-span-7">
      <div style={{ perspective: "1400px" }} className="relative">
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-midnight shadow-2xl shadow-black/50 md:aspect-[16/10]"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40`}
          />
          <div className="blueprint-grid absolute inset-0 opacity-50" />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-[10rem] font-black leading-none tracking-tighter text-white/10 md:text-[14rem]">
              {padIndex(index + 1)}
            </span>
          </div>

          {media && (
            <div className="absolute inset-x-4 top-14 bottom-14 overflow-hidden rounded-xl">
              <ProjectMedia media={media} mode="preview" load={showPreview} />
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_45%)]" />

          <div
            style={{ transform: "translateZ(70px)" }}
            className="pointer-events-none absolute left-5 right-5 top-5 flex items-center justify-between"
          >
            <span
              className={`${BADGE} inline-flex items-center gap-2 border-white/25 bg-black/50 text-white`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
              {label}
            </span>
            <span className={`${BADGE} text-white/70`}>
              {formatCounter(index, total)}
            </span>
          </div>

          <button
            type="button"
            onClick={onOpen}
            style={{ transform: "translateZ(80px)" }}
            className="absolute bottom-4 right-5 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md hover:border-aqua/60"
          >
            <span>Case study</span>
            <span aria-hidden>↗</span>
          </button>

          <div
            style={{ transform: "translateZ(50px)" }}
            className={`${BADGE} pointer-events-none absolute bottom-4 left-5 max-w-[60%] truncate text-white/85`}
          >
            {project.period}
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </div>
  );
};
