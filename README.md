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

## Five pages

| Path                     | What it is                                                          |
| ------------------------ | ------------------------------------------------------------------- |
| `/`                      | Landing page. Paste a preview code, or click **Test your luck**.    |
| `/viewer/?id=NC12345`    | Customer-facing 3D viewer. Reads `id` from the URL and loads that model. |
| `/builder/`              | Internal jewelry configurator. Pick a shank + head + metal preset and export a combined GLB or JSON spec. |
| `/wedding-band/`         | Procedural wedding-band builder. Width, profile, comfort-fit, gold color & karat, thickness, finger size — and a live cost estimate. |
| `/admin/`                | Pricing admin for the wedding-band cost estimator. Live metal spot prices, premium / density / labor / markup. |

A customer receives a private link such as:

```
https://yourdomain.com/viewer/?id=NC12345
```

If you share the bare site URL instead, they land on the entry page and can
type in their code (or hit "Test your luck" to see a random sample). The
builder, wedding band, and admin pages are internal tools — not linked from
the landing page.

---

## Quick start

Requirements: Node.js 18+ and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build into ./dist
npm run preview  # serve the production build locally
```

Open:

- `http://localhost:5173/` — landing page
- `http://localhost:5173/viewer/?id=sample-ring` — viewer (after adding `public/models/sample-ring.glb`)
- `http://localhost:5173/builder/` — jewelry configurator
- `http://localhost:5173/wedding-band/` — wedding band builder
- `http://localhost:5173/admin/` — pricing admin

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

3. Share the preview URL:

   ```
   https://yourdomain.com/viewer/?id=NC12345
   ```

Filename rules: only letters, numbers, dashes, and underscores. Slashes and
path traversal (`..`) are rejected by the URL sanitizer.

The bottom-strip thumbnails (Front / Side / Top / Perspective) are always
rendered live from the GLB after the HDR environments resolve — no JPGs to
generate, name, or ship alongside the model. Drop in the `.glb` and the
previews appear on first load.

---

## Viewer URL parameters

| Param         | Values                                  | What it does |
| ------------- | --------------------------------------- | ------------ |
| `id`          | sanitized model id                      | Required. Picks which GLB to load. |
| `show`        | `engagement` · `band` · `all` (default) | When a GLB contains both an engagement ring **and** a matching band as top-level groups, controls which part is visible. The dropdown chip above the thumbnail strip mirrors this state. |
| `debug`       | `1`                                     | Enables the inspector + lil-gui overlay (see below). |

Aliases accepted for `show`: `ring` → `engagement`; `matchingband` / `wedding` → `band`.

---

## Engagement ring + matching band in one GLB

The viewer can ship an engagement ring and its matching band in a single
`.glb`. When both are present, a floating **View** dropdown appears above the
thumbnail strip with three choices:

- **Show Both** (default) — `?show=all`
- **Engagement Ring** — `?show=engagement`
- **Matching Band** — `?show=band`

Toggling the dropdown updates the URL via `history.replaceState`, so deep
links to a specific part work out of the box. If only one of the two parts
is present, the chip is hidden and a stale `?show=` param is cleared.

### How to author it in Rhino

Use two top-level **layers**, one per part. Rhino's glTF exporter turns each
top-level layer into a named node in the GLB — which is exactly what the
viewer matches against.

| Part            | Layer name contains          | URL value |
| --------------- | ---------------------------- | --------- |
| Engagement ring | `engagement` or `ring`       | `engagement` |
| Matching band   | `band` or `wedding`          | `band` |

Inside each layer, follow the same mesh/material naming used everywhere else
(see `docs/naming-cheat-sheet.md`). The grouping only drives show/hide — it
doesn't change how materials are detected.

---

## Screenshots & download-all

Two small icon buttons flank the bottom thumbnail strip:

- **Left button — Screenshot.** Captures the current camera view as a square
  JPEG (2048 px by default) and triggers a download named `<id>-view.jpg`.
- **Right button — Download all angles.** Cycles through the four preset
  views, captures each at full size, and downloads them as
  `<id>-front.jpg` / `-side.jpg` / `-top.jpg` / `-perspective.jpg`. The
  downloads are staggered so the browser asks "allow multiple downloads" once
  and then accepts the rest as a batch.

Both buttons are disabled until the model finishes loading. Capture is done
on the live renderer (between two repaints) so the customer never sees the
intermediate frames.

### Premium touches on the strip

- **Live previews.** The four strip tiles render from the loaded GLB after
  the HDR environments resolve — no JPGs to ship.
- **Hover turntable.** The Perspective tile also stores 12 pre-rendered
  frames; hovering or focusing the tile swaps the visible `<img>` src
  through each frame on a JS timer, so the ring stays centered in the tile
  while rotating in place. Respects `prefers-reduced-motion`.
- **Stays in sync.** Toggling the engagement ring / matching band selector
  re-renders the strip so each tile only shows the part that's actually
  visible. With `?debug=1`, material edits in the inspector also schedule a
  debounced re-render so the strip reflects the latest tweaks.

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

The same scene/material pipeline is used by `/viewer/`, `/builder/`, and
`/wedding-band/`, so a material looks identical no matter which page renders
it.

---

## Debug inspector & per-material overrides

Append `?debug=1` to the viewer **or** the wedding-band URL to enable the
debug overlay:

```
/viewer/?id=NC12345&debug=1
/wedding-band/?debug=1
```

What it gives you:

- Click any mesh to highlight it with a `BoxHelper` and pin it in a side panel.
- A `lil-gui` panel exposes the selected mesh's transform, visibility, and PBR
  material props (`metalness`, `roughness`, `transmission`, `ior`,
  `clearcoat`, `envMapIntensity`, etc.).
- Switch the selected material's env map between **metal**, **gem**, or **none** live.
- Apply a one-shot preset from the shared library (`src/data/materialPresets.json`)
  — metals (10K/14K/18K yellow / white / rose, platinum, silver) and gems
  (diamond, moissanite, sapphire, ruby, emerald, amethyst, topaz, citrine).
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
`src/builder/` and shares the viewer's scene/material pipeline so the export
matches what the customer sees.

Catalog and metals live in JSON:

- `src/data/builderCatalog.json` — list of shanks and heads, each with an `id`,
  display `name`, GLB `file` path, and `defaultMetal` id.
- `src/data/materialPresets.json` — the shared metal + gem preset library
  (used by the builder, the wedding band, and the inspector).

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

## The Wedding Band Builder (`/wedding-band/`)

`/wedding-band/` builds a wedding band entirely from code — no GLB required.
You pick:

- **Width** (2.0–8.0 mm) and **thickness** (1.2–3.0 mm)
- **Profile** (flat, half-round, knife-edge, …) with an optional **edge bevel**
- **Comfort fit** (true concave inner arc) on/off
- **Gold color** (yellow / white / rose / platinum / sterling silver) and,
  for golds, **karat** (10K / 14K / 18K)
- **Finger size** (US 4 – 13, in half steps; mapped to inside diameter via
  `src/data/wedding-bandConfig.json`)

The cross-section is profiled and revolved into a procedural mesh by
`wedding-bandGeometry.js`, then dropped into the same scene the viewer uses
(HDR envs, ACESFilmic tone mapping, on-demand rendering). The HDR
environments resolve before the mesh is added, so the first paint already
has correct reflections — no "plastic-then-shiny" pop.

### Live cost estimate

The right-hand panel shows a running price for the current configuration:

```
spotPerGram = spotPricePerOzUSD / 31.1034768
pricePerGram = spotPerGram * purityFraction + premiumPerGramUSD
band $       = pricePerGram * massGrams + laborUSD
final $      = band $ * (1 + markupPct / 100)
```

Mass comes from `computeBandWeight.js`, which integrates the chosen
cross-section over the inside circumference. Spot prices come from Stooq via
`spotPriceService.js` (gold / silver / platinum, USD/oz, cached for the day
and auto-refreshed after 10:00 London time). If the live fetch fails and no
snapshot is cached, the `fallbackSpot` block in `pricingConfig.json` keeps
the page working.

---

## Pricing Admin (`/admin/`)

`/admin/` is the authoring surface for the per-device pricing overrides used
by the wedding-band cost estimator. It is **browser-local** — values are
saved to `localStorage` under `noam.carver.pricing.v1` and never leave the
device. Reset restores the bundled defaults.

What you can edit:

- **Spot prices** — read-only summary of the latest Stooq pull (gold / silver
  / platinum, USD/oz). A "Refresh now" button forces a re-fetch.
- **Metals table** — `densityGPerCc` and `premiumPerGramUSD` per
  (karat × color). The computed `$/g` is shown read-only next to each row so
  you can see the impact of a premium change at a glance. Purity and
  `spotMetal` (the metal whose spot price drives the calculation) aren't
  editable — they describe the alloy.
- **Labor** (flat USD per band) and **Markup** (%).

Defaults live in `src/data/pricingConfig.json`. The admin page merges those
defaults with any localStorage overrides each time it loads.

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
├── viewer/index.html            # Viewer page
├── builder/index.html           # Builder page (jewelry configurator)
├── wedding-band/index.html      # Wedding band builder page
├── admin/index.html             # Pricing admin page
├── package.json
├── vite.config.js
├── docs/
│   ├── naming-cheat-sheet.md    # Mesh + material naming conventions
│   └── test-ring.md             # Rhino export workflow for the viewer
├── public/
│   ├── branding/noam-carver-logo.svg
│   ├── models/                  # Customer preview GLBs + README
│   ├── models.json              # IDs available to "Test your luck"
│   ├── env_metal_014.hdr        # Metal HDR environment
│   ├── env_gem_001.exr          # Gem HDR environment
│   ├── material-overrides/      # Per-model <id>.materials.json sidecars
│   └── assets/builder/          # Shank + head GLBs for the builder
├── src/
│   ├── landing.js               # Landing page logic
│   ├── main.js                  # Viewer page logic
│   ├── components/              # Header / Layout / Loading / Error / Thumbs /
│   │                            #   ThumbnailActions / Controls / PartSelector
│   ├── three/                   # Scene / Loader / Camera fitting / Presets /
│   │                            #   Cleanup / Inspector / Angle capture /
│   │                            #   Ring-parts detector
│   ├── builder/                 # Builder page: scene, loader, materials,
│   │                            #   selection, export, UI
│   ├── wedding-band/            # Wedding band builder: geometry, UI, main
│   ├── admin/                   # Pricing admin page entry
│   ├── pricing/                 # pricingService / spotPriceService /
│   │                            #   computeBandWeight
│   ├── data/                    # builderCatalog, materialPresets,
│   │                            #   wedding-bandConfig, pricingConfig
│   ├── services/
│   │   └── modelService.js      # URL sanitization (id, show), asset URL
│   │                            #   resolution, manifest fetch
│   └── styles/                  # base / viewer / landing / builder /
│                                #   wedding-band / admin
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
5. `src/three/generateAngleThumbnails.js` — square capture used by the strip
   and the two download buttons.
6. `src/three/ringParts.js` — engagement-ring vs matching-band detection.
7. `src/three/inspector.js` — the `?debug=1` overlay and overrides export.
8. `src/components/*.js` — small, framework-free DOM helpers.
9. `src/services/modelService.js` — URL parsing and asset paths.
10. `src/builder/builderMain.js` — entry point for the builder page; the rest
    of `src/builder/` is the scene, loader, materials, selection, export, and UI.
11. `src/wedding-band/wedding-bandMain.js` — entry point for the procedural
    band builder; `wedding-bandGeometry.js` is the math, `wedding-bandUI.js`
    is the panel.
12. `src/pricing/*.js` + `src/admin/adminMain.js` — pricing pipeline and the
    authoring surface for it.

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
- [x] Multiple parts per preview (engagement ring + matching band, with
      `?show=` URL filter)
- [ ] Multiple still images per preview
- [x] Automatic screenshot generation for thumbnails (always rendered from
      the GLB at load time — no JPGs on the server)
- [x] Download current view / download all 4 angles as JPEG
- [ ] Annotations / hotspots on the model
- [x] Material / metal switching (builder + per-material overrides)
- [x] Procedural wedding-band builder with live cost estimate
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
- [x] Live spot-price pull for the cost estimator (Stooq, cached daily)

---

## License

Internal NOAM CARVER project. Not for redistribution.
