# Head GLB files

Place exported head GLBs here. They will be served from `/assets/builder/heads/<file>.glb`.

The catalog at `/src/data/builderCatalog.json` is what tells the builder which
files exist; add a matching entry there for every GLB you drop in.

Conventions (very important — these are the rules the builder relies on):

- Export from Rhino using the **shared jewelry coordinate system** (same world
  origin as the shanks). The builder does **not** auto-center, auto-scale, or
  recompute origins, so misaligned exports will appear misaligned in the UI.
- Preserve original object names — the builder shows them in the right panel
  and re-exports them.
- Keep the GLBs lightweight (web preview, not production CAD).

Example file: `sample-round-4-prong-head.glb`
