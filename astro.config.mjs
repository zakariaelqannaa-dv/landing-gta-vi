// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Set this to your deployed origin so that canonical and Open Graph URLs
  // resolve to absolute paths. Example: 'https://gta-vi.example.com'
  // site: 'https://example.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
