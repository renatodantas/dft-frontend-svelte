import svelte from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['tinro']
  },
  plugins: [svelte()]
})
