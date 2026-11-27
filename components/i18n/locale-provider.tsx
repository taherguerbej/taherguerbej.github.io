"use client";

import { createContext, useContext, type FC, type ReactNode } from "react";
import { EN } from "@/content/en";
import { FR } from "@/content/fr";
import { type Locale, type SiteContent } from "@/types/i18n-types";

export const CONTENT: Record<Locale, SiteContent> = { en: EN, fr: FR };

/** Home page of each language. */
export const LOCALE_PATHS: Record<Locale, string> = { en: "/", fr: "/fr/" };

const LocaleContext = createContext<SiteContent>(EN);

export const LocaleProvider: FC<{ locale: Locale; children: ReactNode }> = ({
  locale,
  children,
}) => (
  <LocaleContext.Provider value={CONTENT[locale]}>
    {children}
  </LocaleContext.Provider>
);

/** The page content in the current language. */
export const useContent = (): SiteContent => useContext(LocaleContext);
