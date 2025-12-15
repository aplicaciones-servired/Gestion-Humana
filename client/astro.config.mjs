// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import clerk from "@clerk/astro";
import { esES } from '@clerk/localizations'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    clerk({
      localization: esES,
    }),
  ],
  adapter: node({
    mode: 'standalone'
  }),
  output: "server",
  server: {
    host: '0.0.0.0',
    port: 4321
  },

  vite: {
    plugins: [tailwindcss()]
  }
});