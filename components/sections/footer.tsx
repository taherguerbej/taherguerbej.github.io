"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import {
  CONTACT_EMAIL,
  HERO_NAME,
  HERO_ROLE,
  MY_SOCIALS,
} from "@/constants/portfolio-constants";

const TEMPLATE_URL = "https://github.com/HasnainIrfan/3d-portfolio";

export const Footer: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer ref={ref} className="c-space pt-16 pb-8 relative overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-50%] h-72 w-[80%] rounded-full bg-royal/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <div>
          <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-royal to-aqua text-white text-sm font-black">
              {HERO_NAME.charAt(0)}
            </span>
            <span>{HERO_NAME}</span>
          </div>
          <p className="mt-3 text-sm text-neutral-400 max-w-sm">
            {HERO_ROLE}. Reach me at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white hover:text-aqua transition-colors break-all"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-4">
          <div className="flex gap-3">
            {MY_SOCIALS.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center hover:bg-white/[0.1] hover:border-white/30 transition-colors"
              >
                <img src={social.icon} alt="" loading="lazy" decoding="async" className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-neutral-500 md:justify-end">
            <span>
              © {new Date().getFullYear()} {HERO_NAME}
            </span>
            <span>·</span>
            <span>
              Built on{" "}
              <a
                href={TEMPLATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/20 underline-offset-2 hover:text-white"
              >
                Hasnain Irfan&apos;s 3D portfolio template
              </a>{" "}
              (MIT)
            </span>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center text-[20vw] md:text-[14rem] font-black leading-none text-white/[0.03] select-none"
      >
        GUERBEJ
      </motion.p>
    </footer>
  );
};
