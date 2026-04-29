import { defineConfig } from 'vite';

// The base path can be overridden when deploying to a subpath on GitHub Pages,
// e.g. https://<user>.github.io/<repo>/. Set VITE_BASE=/repo-name/ at build time
// or override the default below.
const base = process.env.VITE_BASE ?? '/';

export default defineConfig({
  base,
  build: {
    target: 'es2020',
    sourcemap: false,
    assetsInlineLimit: 0
  },
  server: {
    host: true,
    port: 5173
  }
});
