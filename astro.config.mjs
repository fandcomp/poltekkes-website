import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://YOUR_USERNAME.github.io', // Ganti dengan username GitHub Anda
  base: '/Chatbot', // Ganti dengan nama repository Anda jika berbeda
});

