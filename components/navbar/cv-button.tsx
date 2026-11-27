"use client";

import { type FC } from "react";
import { CV_FILE_NAME, CV_URL } from "@/constants/social-constants";
import { type CvButtonProps } from "@/types/navigation-types";

export const CvButton: FC<CvButtonProps> = ({ onClick, full }) => (
  <a
    href={CV_URL}
    download={CV_FILE_NAME}
    onClick={onClick}
    className={`group relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] py-1.5 pl-4 pr-1.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-aqua/50 ${
      full ? "w-full justify-between" : ""
    }`}
  >
    <span>Download CV</span>
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:translate-y-0.5">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
        aria-hidden
      >
        <path d="M12 5v14" />
        <path d="M5 12l7 7 7-7" />
      </svg>
    </span>
  </a>
);
