import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [tailwind()],
  site: 'https://29demayo.es',
  vite: {
    optimizeDeps: {
      exclude: ['gsap']
    }
  }
});
