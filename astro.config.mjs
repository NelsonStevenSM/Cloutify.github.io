import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://NelsonStevenSM.github.io',
  base: '/Cloutify.github.io',
  integrations: [tailwind()]
});