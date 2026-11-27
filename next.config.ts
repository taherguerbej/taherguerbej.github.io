import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server there).
  output: "export",
  // /fr/ -> fr/index.html, which GitHub Pages serves without guessing.
  trailingSlash: true,
  turbopack: {
    root: projectRoot,
  },
  images: {
    // The image optimizer needs a server; a static export serves files as-is.
    unoptimized: true,
  },
};

export default nextConfig;
