import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	site: "https://chad.gauthier.dev",
	integrations: [mdx(), sitemap(), tailwind(), partytown()],
	image: {
		service: {
			entrypoint: "astro/assets/services/noop",
		},
	},
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		speedInsights: {
			enabled: true,
		},
		imageService: true,
		functionPerRoute: true,
	}),
});
