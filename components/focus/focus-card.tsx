"use client";

import { useRef, type FC } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  FOCUS_ACCENTS,
  STACK_OFFSET_REM,
  STACK_SCALE_STEP,
} from "@/constants/focus-constants";
import { formatCounter, padIndex } from "@/helpers/format-helpers";
import { type FocusCardProps } from "@/types/focus-types";
import { FocusBullets } from "./focus-bullets";

export const FocusCard: FC<FocusCardProps> = ({ area, index, total }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * STACK_SCALE_STEP]
  );
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.7]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `calc(8rem + ${index * STACK_OFFSET_REM}rem)` }}
    >
      <motion.article
        style={{ scale, opacity }}
        className="relative min-h-[70vh] overflow-hidden rounded-3xl border border-white/10 bg-midnight md:h-[72vh]"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br opacity-25 ${
            FOCUS_ACCENTS[index % FOCUS_ACCENTS.length]
          }`}
        />
        <div className="blueprint-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(0,0,0,0.5),transparent_45%)]" />

        <div className="relative grid h-full grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-12 lg:p-16">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-white/60">
                  Focus {formatCounter(index, total)}
                </span>
                <span className="block h-px w-12 bg-white/30" />
              </div>

              <h3 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
                {area.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {area.description}
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/50">
                Applied in
              </p>
              <div className="flex flex-wrap gap-2">
                {area.appliedIn.map((place) => (
                  <a
                    key={place}
                    href="#work"
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/85 transition-colors hover:border-aqua/50 hover:text-white"
                  >
                    {place}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div className="relative flex items-start justify-end">
              <span className="text-[7rem] font-black leading-none tracking-tighter text-white/10 md:text-[10rem]">
                {padIndex(index + 1)}
              </span>
              <div className="absolute right-0 top-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-aqua backdrop-blur-md md:h-20 md:w-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 md:h-9 md:w-9"
                  aria-hidden
                >
                  <path d={area.icon} />
                </svg>
              </div>
            </div>

            <FocusBullets title="What it covers" bullets={area.bullets} />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
      </motion.article>
    </div>
  );
};
