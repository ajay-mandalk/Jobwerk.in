import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import clerk from "@clerk/astro";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), tailwind(), clerk(), sitemap()],
  site: "https://www.jobwerk.in",
  output: 'server',

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
    devMode: false,
    functionPerRoute: false,
    edgeMiddleware: false,
    imageConfig: {
      domains: [],
    },
  }),
 
});