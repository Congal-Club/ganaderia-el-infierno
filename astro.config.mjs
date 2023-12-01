import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    partytown(),
    robotsTxt({
      host: 'https://ganaderia-el-infierno.vercel.app/'
    })
  ],
  output: "server",
  adapter: vercel()
});
