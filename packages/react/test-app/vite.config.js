import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    testTimeout: 3000,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.js",
    deps: {
      inline: [
        "@astrouxds/astro-web-components",
        "testing-library__dom"
      ]
  },
}
})
