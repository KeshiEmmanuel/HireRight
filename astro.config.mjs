// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Inter Tight",
      cssVariable: "--font-tight",
      provider: fontProviders.google(),
      weights: ["400", "500", "600"],
    },
    {
      name: "Funnel Display",
      cssVariable: "--font-funnel",
      provider: fontProviders.google(),
      weights: ["400", "500", "600"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
