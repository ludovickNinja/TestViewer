# NOAM CARVER · 3D Jewelry Viewer

A minimal, branded customer-facing 3D viewer for jewelry previews. Built with
[Vite](https://vitejs.dev/) + [Three.js](https://threejs.org/) in plain
JavaScript — no TypeScript, no frameworks, no Tailwind. Designed to be hosted
as a static site on GitHub Pages for the prototype phase, then evolved into
a backed-by-database production system later.

> **Deploying? Read this first.** In the GitHub repo, go to
> **Settings → Pages** and set **Source** to **GitHub Actions**. If it is
> set to "Deploy from a branch" instead, Pages will publish raw source files
> (which require a Vite build step to run) and the site will appear blank.

## Two pages

| Path                     | What it is                                                          |
| ------------------------ | ------------------------------------------------------------------- |
| `/`                      | Landing page. Paste a preview code, or click **Test your luck**.    |
| `/viewer/?id=NC12345`    | The actual 3D viewer. Reads `id` from the URL and loads that model. |

A customer receives a private link such as:

```
https://yourdomain.com/viewer/?id=NC12345
```

If you share the bare site URL instead, they land on the entry page and can
type in their code (or hit "Test your luck" to see a random sample).

---

## Quick start

Requirements: Node.js 18+ and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build into ./dist
npm run preview  # serve the production build locally
```

Open `http://localhost:5173/` for the landing page, or
`http://localhost:5173/viewer/?id=sample-ring` for the viewer (after adding
`public/models/sample-ring.glb`).

---

## Adding a new customer preview

1. Drop a `.glb` file into `public/models/`. The filename (without
   extension) becomes the preview ID.

   ```
   public/models/NC12345.glb
   ```

2. Add the ID to `public/models.json` so it appears in the **Test your luck**
   pool on the landing page:

   ```json
   [
     "sample-ring",
     "NC12345"
   ]
   ```

   The viewer works for any valid ID, even one not listed here — the manifest
   only controls the random picker.

3. (Optional) Add still images for the preset views in `public/thumbnails/`:

   ```
   public/thumbnails/NC12345-front.jpg
   public/thumbnails/NC12345-side.jpg
   public/thumbnails/NC12345-top.jpg
   public/thumbnails/NC12345-perspective.jpg
   ```

   If a thumbnail is missing, the strip falls back to a labeled placeholder.
   Square JPGs around 512x512 px work well.

4. Share the preview URL:

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

GitHub Pages serves the site at `https://<user>.github.io/<repo>/`. The
viewer page lives at `/viewer/`, so the full link is
`https://<user>.github.io/<repo>/viewer/?id=NC12345`. With a custom domain
(`yourdomain.com`) and a CNAME, the URL becomes
`https://yourdomain.com/viewer/?id=NC12345`.

If you want the simpler `https://yourdomain.com/viewer/?id=...` (no repo
segment in the path), name the repo after a domain you control or build with
a manual base, for example `VITE_BASE=/ npm run build`.

---

## Project structure

```
.
├── index.html                   # Landing page
├── viewer/
│   └── index.html               # Viewer page
├── package.json
├── vite.config.js
├── public/
│   ├── branding/noam-carver-logo.svg
│   ├── models/                  # GLB files + README
│   ├── models.json              # IDs available to "Test your luck"
│   └── thumbnails/              # Optional still-image previews
├── src/
│   ├── landing.js               # Landing page logic
│   ├── main.js                  # Viewer page logic
│   ├── components/              # Header / Layout / Loading / Error / Thumbs / Controls
│   ├── three/                   # Scene / Loader / Camera fitting / Camera presets / Cleanup
│   ├── services/
│   │   └── modelService.js      # URL sanitization, asset URL resolution, manifest fetch
│   └── styles/                  # base.css, viewer.css, landing.css
└── .github/workflows/deploy.yml
```

Each source file starts with a header comment that explains what it does
and why. If you've never touched Three.js before, a good reading order is:

1. `src/landing.js` — straight DOM, simplest entry point.
2. `src/main.js` — wires the viewer page together.
3. `src/three/createScene.js` — the core Three.js setup.
4. `src/three/loadModel.js`, `fitCameraToObject.js`, `cameraViews.js`,
   `disposeScene.js` — the rest of the 3D layer.
5. `src/components/*.js` — small, framework-free DOM helpers.
6. `src/services/modelService.js` — URL parsing and asset paths.

---

## Privacy & security note

> **Important:** This is a static GitHub Pages prototype. Even though preview
> links are unguessable, the GLB files themselves are technically reachable
> by anyone who inspects the browser's network tab or knows a filename.
> There is **no real protection** here.
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
- [ ] Auto-generate `models.json` at build time so adding a GLB is one step

---

## License

Internal NOAM CARVER project. Not for redistribution.
