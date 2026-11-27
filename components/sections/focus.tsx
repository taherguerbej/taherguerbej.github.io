"use client";

import { useRef, type FC } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FocusCard } from "@/components/focus/focus-card";
import { SectionHeader } from "@/components/ui/section-header";
import { FOCUS_AREAS } from "@/constants/focus-constants";
import { padIndex } from "@/helpers/format-helpers";

export const Focus: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const auroraY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const auroraOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.7, 0.3]
  );

  return (
    <section
      ref={sectionRef}
      id="focus"
      className="c-space section-spacing relative overflow-visible"
    >
      <motion.div
        aria-hidden
        style={{ y: auroraY, opacity: auroraOpacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-lavender/15 blur-[140px]" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-aqua/15 blur-[140px]" />
      </motion.div>

      <SectionHeader
        className="mb-12"
        eyebrow={`Engineering focus areas · ${padIndex(FOCUS_AREAS.length)}`}
        title={
          <>
            Where I put my effort,{" "}
            <span className="text-gradient">from simulation to hardware.</span>
          </>
        }
        hint={["Scroll", "Stack"]}
      />

      <div className="relative space-y-6 md:space-y-8">
        {FOCUS_AREAS.map((area, index) => (
          <FocusCard
            key={area.id}
            area={area}
            index={index}
            total={FOCUS_AREAS.length}
          />
        ))}
      </div>
    </section>
  );
};
