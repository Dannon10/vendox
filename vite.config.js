import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import Sitemap from 'vite-plugin-pages-sitemap';

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    Pages({
      dirs: 'src/Pages',
      extensions: ['jsx', 'js'],
    }),
    Sitemap({
      hostname: 'https://vendox.vercel.app',
    })
  ],
  server: {
    host: true,
  }
})
