# NOAM CARVER · 3D Jewelry Viewer

A minimal, branded customer-facing 3D viewer for jewelry previews. Built with
[Vite](https://vitejs.dev/), [Three.js](https://threejs.org/), and TypeScript.
Designed to be hosted as a static site on GitHub Pages for the prototype
phase, then evolved into a backed-by-database production system.

A customer receives a private link such as:

```
https://yourdomain.com/viewer/?id=NC12345
```

The app reads `id` from the URL, loads `/models/NC12345.glb`, and presents
the model in a clean cinematic viewer with preset camera angles.

---

## Quick start

Requirements: Node.js 18+ and npm.

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview
```

Open `http://localhost:5173/?id=sample-ring` to test (after adding a
`public/models/sample-ring.glb` file).

---

## Adding a new customer preview

1. Drop a `.glb` file into `public/models/`. The filename (without extension)
   becomes the preview ID.

   ```
   public/models/NC12345.glb
   ```

2. (Optional) Add still images for the preset views in `public/thumbnails/`:

   ```
   public/thumbnails/NC12345-front.jpg
   public/thumbnails/NC12345-side.jpg
   public/thumbnails/NC12345-top.jpg
   public/thumbnails/NC12345-perspective.jpg
   ```

   If a thumbnail is missing, the strip falls back to a labeled placeholder.
   Square JPGs around 512x512 px work well.

3. Share the preview URL:

   ```
   https://yourdomain.com/viewer/?id=NC12345
   ```

Filename rules: only letters, numbers, dashes, and underscores. Slashes and
path traversal (`..`) are rejected by the URL sanitizer.

---

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings -> Pages**, set **Source** to *GitHub Actions*.
3. Push to `main`. The included workflow at `.github/workflows/deploy.yml`
   will build and publish the site.

The workflow auto-detects the correct Vite `base` path:

- Project site (`https://<user>.github.io/<repo>/`) -> base `/<repo>/`
- User / organization site (repo named `<user>.github.io`) -> base `/`

### Getting `/viewer/?id=...` URLs

GitHub Pages will serve the app at `https://<user>.github.io/<repo>/`. To
get the literal `/viewer/` path shown in customer links, name the repo
`viewer`. With a custom domain (`yourdomain.com`), you can either:

- Repo named `viewer` + CNAME -> `https://yourdomain.com/viewer/?id=...`
- Or change the base path manually with `VITE_BASE=/viewer/ npm run build`.

---

## Project structure

```
.
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── branding/noam-carver-logo.svg
│   ├── models/                 # GLB files + README
│   └── thumbnails/             # optional still-image previews
├── src/
│   ├── main.ts
│   ├── components/
│   │   ├── Header.ts
│   │   ├── ViewerLayout.ts
│   │   ├── LoadingOverlay.ts
│   │   ├── ErrorState.ts
│   │   ├── ThumbnailStrip.ts
│   │   └── ViewerControls.ts
│   ├── three/
│   │   ├── createScene.ts
│   │   ├── loadModel.ts
│   │   ├── fitCameraToObject.ts
│   │   ├── cameraViews.ts
│   │   └── disposeScene.ts
│   ├── services/
│   │   └── modelService.ts
│   └── styles/
│       ├── base.css
│       └── viewer.css
└── .github/workflows/deploy.yml
```

---

## How it works

- `src/services/modelService.ts` reads the `id` query parameter, sanitizes it,
  and resolves a model URL plus four thumbnail URLs (one per preset view).
- `src/three/createScene.ts` sets up the WebGL renderer, camera, OrbitControls,
  and studio-style lighting (ambient + hemisphere + key/fill/rim directionals).
- `src/three/loadModel.ts` loads the GLB with `GLTFLoader`, preserving original
  materials and material names.
- `src/three/fitCameraToObject.ts` recenters the model and frames the camera.
- `src/three/cameraViews.ts` defines the Front / Side / Top / Perspective
  presets and a smooth tween between them.
- `src/main.ts` wires everything together: layout, header, loading overlay,
  thumbnail strip, floating controls (auto-rotate, reset, fullscreen), resize
  handling, error states, and cleanup.

There is no download button. There is no admin page. The prototype is
intentionally read-only.

---

## Privacy & security note

> **Important:** This is a static GitHub Pages prototype. Even though preview
> links are unguessable, the GLB files themselves are technically reachable by
> anyone who inspects the browser's network tab or knows a filename. There is
> **no real protection** here.
>
> Do not put confidential designs in this repo. Do not embed customer names,
> job numbers, or order numbers in filenames. Use opaque random IDs instead.

When the prototype graduates, replace this front-end-only setup with a
backend that resolves preview IDs to short-lived signed URLs against private
storage.

---

## TODO / future upgrades

Privacy & access:
- [ ] Replace filename-based ID with a database lookup
- [ ] Move GLB files to private storage (S3, R2, GCS)
- [ ] Generate signed / expiring URLs per session
- [ ] Add password or PIN protection per preview
- [ ] Use customer-safe random preview IDs

Workflow:
- [ ] Admin page to create / manage preview links
- [ ] Customer approval workflow
- [ ] Request-changes workflow
- [ ] n8n webhook integration for events (viewed, approved, requested changes)
- [ ] Revision / version history per preview

Content:
- [ ] Model metadata fields (metal, stone, order version, customer notes,
      approval status)
- [ ] Multiple models per preview
- [ ] Multiple still images per preview
- [ ] Automatic screenshot generation for thumbnails
- [ ] Annotations / hotspots on the model
- [ ] Material / metal switching
- [ ] Diamond / stone display options
- [ ] AR preview

Performance & quality:
- [ ] Draco / Meshopt compression
- [ ] KTX2 texture compression
- [ ] HDRI environment map support
- [ ] CDN or object storage for larger files

Operations:
- [ ] Analytics for link views

---

## License

Internal NOAM CARVER project. Not for redistribution.
