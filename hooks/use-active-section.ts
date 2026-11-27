"use client";

import { useEffect, useState } from "react";
import {
  NAV_ITEMS,
  NAV_OBSERVER_OPTIONS,
} from "@/constants/navigation-constants";

export const useActiveSection = (): string => {
  // Starts on the hero, which has no nav link, so nothing is underlined.
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const ids = ["home", ...NAV_ITEMS.map((item) => item.href.slice(1))];
    const sections = ids.map((id) =>
      document.getElementById(id)
    ).filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target.id) setActive(`#${visible.target.id}`);
    }, NAV_OBSERVER_OPTIONS);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
};
