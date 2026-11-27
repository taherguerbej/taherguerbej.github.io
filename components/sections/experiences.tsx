"use client";

import { type FC } from "react";
import { Timeline } from "@/components/portfolio/timeline";
import { useContent } from "@/components/i18n/locale-provider";
import { Heading } from "@/components/i18n/heading";

export const Experiences: FC = () => {
  const { experiences, education, ui } = useContent();
  return (
  <div className="w-full">
    <Timeline
      id="experience"
      eyebrow={ui.experience.eyebrow}
      title={<Heading {...ui.experience.title} />}
      data={experiences}
    />
    <Timeline
      id="education"
      eyebrow={ui.education.eyebrow}
      title={<Heading {...ui.education.title} />}
      data={education}
    />
  </div>
  );
};
