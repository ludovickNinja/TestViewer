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

## Three pages

| Path                     | What it is                                                          |
| ------------------------ | ------------------------------------------------------------------- |
| `/`                      | Landing page. Paste a preview code, or click **Test your luck**.    |
| `/viewer/?id=NC12345`    | Customer-facing 3D viewer. Reads `id` from the URL and loads that model. |
| `/builder/`              | Internal jewelry configurator. Pick a shank + head + metal preset and export a combined GLB or JSON spec. |

A customer receives a private link such as:

```
https://yourdomain.com/viewer/?id=NC12345
```

If you share the bare site URL instead, they land on the entry page and can
type in their code (or hit "Test your luck" to see a random sample). The
builder is a separate internal tool — not linked from the landing page.

---

## Quick start

Requirements: Node.js 18+ and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build into ./dist
npm run preview  # serve the production build locally
```

Open `http://localhost:5173/` for the landing page,
`http://localhost:5173/viewer/?id=sample-ring` for the viewer (after adding
`public/models/sample-ring.glb`), or `http://localhost:5173/builder/` for the
jewelry configurator.

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

## Lighting: dual HDR environments

The viewer ships with two pre-filtered HDR environments in `public/`:

| File                  | Used by                                                  |
| --------------------- | -------------------------------------------------------- |
| `env_metal_014.hdr`   | Metal materials — soft studio softbox, even reflections. |
| `env_gem_001.exr`     | Gem materials — contrastier map for diamond fire/sparkle. |

`createScene.js` loads both, pre-filters them with `PMREMGenerator`, and then
`applyMaterialEnvironments(root)` walks the loaded model and assigns each
material to the right env map. Classification is heuristic: transmission > 0
or IOR ≥ 1.4 with low metalness count as gem; otherwise the material name is
matched against `diamond|gem|stone|sapphire|ruby|emerald|crystal|cz|topaz|amethyst`.
Anything that doesn't match falls through to the metal env.

To swap the HDRs, drop new files into `public/` and update `HDRI_CONFIG.metal.path`
/ `HDRI_CONFIG.gem.path` in `src/three/createScene.js`. `.hdr` and `.exr`
extensions are picked up automatically (RGBELoader vs EXRLoader).

---

## Debug inspector & per-material overrides

Append `?debug=1` to any viewer URL to enable the debug overlay:

```
/viewer/?id=NC12345&debug=1
```

What it gives you:

- Click any mesh to highlight it with a `BoxHelper` and pin it in a side panel.
- A `lil-gui` panel exposes the selected mesh's transform, visibility, and PBR
  material props (`metalness`, `roughness`, `transmission`, `ior`,
  `clearcoat`, `envMapIntensity`, etc.).
- Switch the selected material's env map between **metal**, **gem**, or **none** live.
- Inspect / tweak scene-wide settings (lights, camera, tone mapping) and
  export the current values as a preset.

Every change you make is recorded into a per-material overrides map keyed by
`material.name`. Use the **Overrides** folder in the GUI to:

- Copy the JSON to the clipboard, or
- Download it as `<modelId>.materials.json`.

Drop that file into `public/material-overrides/` (it's named after the model
id, so `NC12345.materials.json` pairs with `NC12345.glb`). On the next load
`applyMaterialEnvironments` reads the sidecar after running its heuristic, so
designer-tuned values win over the default classification — without touching
the GLB.

Allowed override keys per material: `envMap` (`metal` / `gem` / `none`),
`color`, and the numeric PBR props listed above. Unknown keys are ignored on
purpose so override files can't drift into arbitrary mutations.

---

## The Builder (`/builder/`)

`/builder/` is a self-contained internal page for assembling a ring from a
**shank** + **head** + **metal preset** and exporting the result. It lives in
`src/builder/` and intentionally does not share code with the customer viewer
so the builder cannot regress `/viewer/`.

Catalog and metals live in JSON:

- `src/data/builderCatalog.json` — list of shanks and heads, each with an `id`,
  display `name`, GLB `file` path, and `defaultMetal` id.
- `src/data/builderMetals.json` — the metal presets (yellow / white / rose
  gold, platinum) with `color`, `metalness`, `roughness`.

GLB files for parts go in:

```
public/assets/builder/shanks/<id>.glb
public/assets/builder/heads/<id>.glb
```

**Coordinate system rule:** the builder does *not* auto-center, auto-scale,
or recompute origins. Shank and head GLBs must be exported from Rhino against
a shared world origin — that shared origin is what makes the parts line up
when loaded together. See `src/builder/builderLoader.js` for the loader
behavior and `src/builder/builderMain.js` for the wiring.

Click any mesh to select it; the side panel lets you rename it, tag it
(`shank` / `head` / other), and apply any metal preset. **Export GLB**
produces a single combined file; **Export JSON** writes a build spec that
references catalog ids.

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
├── builder/
│   └── index.html               # Builder page (jewelry configurator)
├── package.json
├── vite.config.js
├── public/
│   ├── branding/noam-carver-logo.svg
│   ├── models/                  # Customer preview GLBs + README
│   ├── models.json              # IDs available to "Test your luck"
│   ├── thumbnails/              # Optional still-image previews
│   ├── env_metal_014.hdr        # Metal HDR environment
│   ├── env_gem_001.exr          # Gem HDR environment
│   ├── material-overrides/      # Per-model <id>.materials.json sidecars
│   └── assets/builder/          # Shank + head GLBs for the builder
├── src/
│   ├── landing.js               # Landing page logic
│   ├── main.js                  # Viewer page logic
│   ├── components/              # Header / Layout / Loading / Error / Thumbs / Controls
│   ├── three/                   # Scene / Loader / Camera fitting / Presets / Cleanup / Inspector
│   ├── builder/                 # Builder page: scene, loader, materials, selection, export, UI
│   ├── data/                    # builderCatalog.json, builderMetals.json
│   ├── services/
│   │   └── modelService.js      # URL sanitization, asset URL resolution, manifest fetch
│   └── styles/                  # base.css, viewer.css, landing.css, builder.css
└── .github/workflows/deploy.yml
```

Each source file starts with a header comment that explains what it does
and why. If you've never touched Three.js before, a good reading order is:

1. `src/landing.js` — straight DOM, simplest entry point.
2. `src/main.js` — wires the viewer page together.
3. `src/three/createScene.js` — core Three.js setup, dual HDR environments,
   `applyMaterialEnvironments`.
4. `src/three/loadModel.js`, `fitCameraToObject.js`, `cameraViews.js`,
   `disposeScene.js` — the rest of the 3D layer.
5. `src/three/inspector.js` — the `?debug=1` overlay and overrides export.
6. `src/components/*.js` — small, framework-free DOM helpers.
7. `src/services/modelService.js` — URL parsing and asset paths.
8. `src/builder/builderMain.js` — entry point for the builder page; the rest
   of `src/builder/` is the scene, loader, materials, selection, export, and UI.

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
- [x] Material / metal switching (builder + per-material overrides)
- [ ] Diamond / stone display options
- [ ] AR preview

Performance & quality:
- [ ] Draco / Meshopt compression
- [ ] KTX2 texture compression
- [x] HDRI environment map support (dual HDR: metal + gem)
- [ ] CDN or object storage for larger files

Operations:
- [ ] Analytics for link views
- [ ] Auto-generate `models.json` at build time so adding a GLB is one step

---

## License

Internal NOAM CARVER project. Not for redistribution.
