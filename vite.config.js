// ----------------------------------------------------------------------------
// Vite configuration
// ----------------------------------------------------------------------------
//
// This project has TWO pages:
//   /            -> the landing page (paste a code OR click "test your luck")
//   /viewer/     -> the actual 3D viewer (reads ?id=... from the URL)
//
// Both pages are plain index.html files; Vite figures out the rest.
//
// `base` controls the URL prefix the built site lives under. On GitHub Pages
// project sites the URL is https://<user>.github.io/<repo>/ so we need
// base = "/<repo>/". The deploy workflow sets VITE_BASE for us; for local
// dev we just use "/".
// ----------------------------------------------------------------------------

import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const base = process.env.VITE_BASE ?? '/';

export default defineConfig({
  base,
  build: {
    target: 'es2020',
    sourcemap: false,
    // Keep GLBs / images from being inlined as base64 — we always want real files.
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        // Landing page (root)
        main: resolve(__dirname, 'index.html'),
        // Viewer page (lives at /viewer/index.html so URLs look like /viewer/?id=...)
        viewer: resolve(__dirname, 'viewer/index.html')
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});
