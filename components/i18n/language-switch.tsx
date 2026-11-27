"use client";

import { type FC, type MouseEvent } from "react";
import { type Locale } from "@/types/i18n-types";
import { LOCALE_PATHS, useContent } from "./locale-provider";

const LOCALES: Locale[] = ["en", "fr"];

/** EN | FR pill. Switching keeps the section the visitor is reading. */
export const LanguageSwitch: FC<{ className?: string }> = ({
  className = "",
}) => {
  const { locale, ui } = useContent();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, target: Locale) => {
    event.preventDefault();
    if (target === locale) return;
    window.location.assign(`${LOCALE_PATHS[target]}${window.location.hash}`);
  };

  return (
    <div
      role="group"
      aria-label={ui.switchLanguage}
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] p-0.5 text-xs font-semibold backdrop-blur-md ${className}`}
    >
      {LOCALES.map((target) => {
        const current = target === locale;
        return (
          <a
            key={target}
            href={LOCALE_PATHS[target]}
            hrefLang={target}
            lang={target}
            onClick={(event) => handleClick(event, target)}
            aria-current={current ? "true" : undefined}
            title={current ? undefined : ui.switchLanguage}
            className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${
              current
                ? "bg-white text-primary"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            {target}
          </a>
        );
      })}
    </div>
  );
};
