"use client";

import { useState, type FC } from "react";
import { useMediaQuery } from "react-responsive";
import { ProjectDetails } from "@/components/portfolio/project-details";
import { PinnedShowcase } from "@/components/projects/pinned-showcase";
import { ProjectsHeader } from "@/components/projects/projects-header";
import { MoreProjects } from "@/components/projects/more-projects";
import { VerticalProjects } from "@/components/projects/vertical-projects";
import { useContent } from "@/components/i18n/locale-provider";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { type Project } from "@/types/portfolio-types";

export const Projects: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const mounted = useHasMounted();
  const [active, setActive] = useState<Project | null>(null);
  const { projects } = useContent();

  const pinned = mounted && !isMobile;

  return (
    <section id="work" className="relative">
      <ProjectsHeader total={projects.length} />

      {pinned ? (
        <PinnedShowcase onOpen={setActive} />
      ) : (
        <div className="c-space">
          <VerticalProjects onOpen={setActive} />
        </div>
      )}

      <MoreProjects />

      {active && (
        <ProjectDetails {...active} closeModal={() => setActive(null)} />
      )}
    </section>
  );
};
