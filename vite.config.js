// ----------------------------------------------------------------------------
// Vite configuration
// ----------------------------------------------------------------------------
//
// This project has FIVE pages:
//   /               -> the landing page (paste a code OR click "test your luck")
//   /viewer/        -> the actual 3D viewer (reads ?id=... from the URL)
//   /builder/       -> the jewelry configurator (shank + head builder)
//   /wedding-band/  -> the wedding band builder (procedural ring geometry)
//   /admin/         -> pricing admin for the wedding-band cost estimator
//
// All pages are plain index.html files; Vite figures out the rest.
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
        viewer: resolve(__dirname, 'viewer/index.html'),
        // Builder page (jewelry configurator). Lives at /builder/index.html.
        builder: resolve(__dirname, 'builder/index.html'),
        // Wedding band builder (procedural). Lives at /wedding-band/index.html.
        weddingBand: resolve(__dirname, 'wedding-band/index.html'),
        // Pricing admin. Lives at /admin/index.html.
        admin: resolve(__dirname, 'admin/index.html')
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});
