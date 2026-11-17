import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), {
    name: 'development-csp',
    apply: 'serve',
    // HMR uses WebSockets and inline styles; production keeps the strict policy.
    transformIndexHtml: html => html.replace(/\s*<meta http-equiv="Content-Security-Policy"[^>]*\/>/, ''),
  }],
  build: { sourcemap: false },
  server: { host: '127.0.0.1', cors: false, fs: { strict: true } },
  preview: { host: '127.0.0.1' },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
