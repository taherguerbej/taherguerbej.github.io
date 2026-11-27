import { type FC, type ReactNode } from "react";
import { Funnel_Display } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { type Locale } from "@/types/i18n-types";
import "@/app/globals.css";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const INTRO_SKIP_SCRIPT = `try{if(sessionStorage.getItem("intro-played")==="1"){document.documentElement.dataset.introPlayed="1"}}catch(e){}`;

const NOSCRIPT_CSS = `
  .page-loader { display: none !important; }
  #site-content [style] {
    opacity: 1 !important;
    filter: none !important;
    transform: none !important;
  }
`;

/** <html> and <body> shared by the English and French root layouts. */
export const RootDocument: FC<{ lang: Locale; children: ReactNode }> = ({
  lang,
  children,
}) => {
  return (
    <html
      lang={lang}
      className={`${funnelDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{ __html: INTRO_SKIP_SCRIPT }}
        />
        <noscript>
          <style>{NOSCRIPT_CSS}</style>
        </noscript>
        <JsonLd locale={lang} />
        {children}
      </body>
    </html>
  );
};
