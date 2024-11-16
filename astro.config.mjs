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
    edgeMiddleware: true, // Add this
    includeFiles: ['**/*.{js,json}'], // Add this to ensure all files are included
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    icon()
  ],
  // Simplified Vite config
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});