// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    react(),
  ],
  devToolbar: {
    enabled: true,
  },
  server: {
    port: 4321,
    host: true,
  },
});
