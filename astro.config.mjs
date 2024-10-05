// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "hy5wyd3m",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
