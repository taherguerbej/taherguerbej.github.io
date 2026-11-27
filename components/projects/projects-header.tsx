"use client";

import { type FC } from "react";
import { useContent } from "@/components/i18n/locale-provider";
import { Heading } from "@/components/i18n/heading";
import { SectionHeader } from "@/components/ui/section-header";
import { padIndex } from "@/helpers/format-helpers";

export const ProjectsHeader: FC<{ total: number }> = ({ total }) => {
  const { ui } = useContent();
  return (
  <div className="c-space pt-24 md:pt-32">
    <SectionHeader
      eyebrow={`${ui.projects.eyebrow} · ${padIndex(total)}`}
      title={<Heading {...ui.projects.title} />}
      hint={ui.projects.hint}
    />
  </div>
  );
};
