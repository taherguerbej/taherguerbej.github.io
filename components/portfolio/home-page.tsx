"use client";

import { type FC } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Focus } from "@/components/sections/focus";
import { Projects } from "@/components/sections/projects";
import { Experiences } from "@/components/sections/experiences";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { PageLoader } from "@/components/portfolio/page-loader";
import { GlobeLayer } from "@/components/globe/globe-layer";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import { type Locale } from "@/types/i18n-types";

export const HomePage: FC<{ locale: Locale }> = ({ locale }) => (
  <LocaleProvider locale={locale}>
    <PageLoader />
    <GlobeLayer />
    <div id="site-content" className="relative z-10 w-full">
      <Navbar />
      <Hero />
      <About />
      <Focus />
      <Projects />
      <Experiences />
      <Skills />
      <Contact />
      <Footer />
    </div>
  </LocaleProvider>
);
