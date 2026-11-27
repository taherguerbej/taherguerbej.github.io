"use client";

import { type FC } from "react";
import { Timeline } from "@/components/portfolio/timeline";
import { EDUCATION, EXPERIENCES } from "@/constants/portfolio-constants";

export const Experiences: FC = () => (
  <div className="w-full">
    <Timeline
      id="experience"
      eyebrow="Experience"
      title={
        <>
          From the shop floor{" "}
          <span className="text-gradient">to a robotics research lab.</span>
        </>
      }
      data={EXPERIENCES}
    />
    <Timeline
      id="education"
      eyebrow="Education"
      title={
        <>
          A double degree{" "}
          <span className="text-gradient">across two countries.</span>
        </>
      }
      data={EDUCATION}
    />
  </div>
);
