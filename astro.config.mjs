import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from "astro-icon";

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },


    maxDuration: 60,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    icon()
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});