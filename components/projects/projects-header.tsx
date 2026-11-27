import { type FC } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { padIndex } from "@/helpers/format-helpers";

export const ProjectsHeader: FC<{ total: number }> = ({ total }) => (
  <div className="c-space pt-24 md:pt-32">
    <SectionHeader
      eyebrow={`Selected projects · ${padIndex(total)}`}
      title={
        <>
          Research and engineering work,{" "}
          <span className="text-gradient">in simulation and on real robots.</span>
        </>
      }
      hint={["Scroll", "Pinned"]}
    />
  </div>
);
