import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://chad.gauthier.dev",
  integrations: [mdx(), sitemap(), tailwind(), partytown(), react(), alpinejs()],
  image: {
    service: {
      entrypoint: "astro/assets/services/noop"
    }
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    },
    imageService: true,
    functionPerRoute: true
  })
});