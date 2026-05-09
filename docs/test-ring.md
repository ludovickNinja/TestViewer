# Building a test ring for the viewer

This guide walks through everything you need to export a ring from Rhino so the
viewer's automatic material-detection works on the first try — no override
sidecar required.

The viewer makes decisions about how to render each mesh based on **mesh
names**, **material names**, and a few PBR property heuristics. Get the
naming right and the diamond shader, gem environment map, and metal
reflection paths all kick in automatically.

---

## TL;DR cheat-sheet

| Part of the ring | Mesh name (in Rhino) | Material name | What the viewer does |
| --- | --- | --- | --- |
| Centre diamond | `Diamond_Round_01` | `Diamond_Center` | Class-swap to BVH ray tracer, gem env |
| Side moissanite | `Moissanite_Side_L` | `Moissanite_Side` | Class-swap to BVH ray tracer, gem env |
| Coloured stones | `Sapphire_01`, `Ruby_01`, `Emerald_01`, etc. | `Sapphire_Blue`, `Ruby_Red`, `Emerald_Pavé` | `MeshPhysicalMaterial` + gem env, attenuation kept |
| Metal shank | `Shank` | `Metal_Yellow_Gold_14k` | `MeshPhysicalMaterial` + metal env |
| Metal head / setting | `Head` | `Metal_Yellow_Gold_14k` | Same as shank |
| Prongs / bezel | `Prongs`, `Bezel` | Same metal material | Same as shank |

The regex the viewer matches against (case-insensitive):

- **Diamond shader path**: mesh OR material name contains `diamond` or `moissanite`.
- **Gem env-map path** (auto-applied to anything matching): mesh OR material name contains `diamond`, `gem`, `stone`, `sapphire`, `ruby`, `emerald`, `crystal`, `cz`, `topaz`, or `amethyst`.
- **Metal env-map path**: anything else.

If a mesh is named correctly **but** the material isn't, the viewer still
matches via the mesh name — but it's good practice to name both.

---

## Geometry requirements

### Diamond / moissanite stones

The BVH ray tracer bounces rays off the **actual triangles** in the mesh.
Smoothed normals across facet edges destroy the look — every facet must read
as a hard edge.

- **Faceted, hard-edged geometry.** No NURBS smoothing across facet boundaries.
- **Outward-facing normals.** Run `_Flip` if needed in Rhino.
- **Triangle budget**: 80–500 per stone. A typical round brilliant has 58
  facets, which mesh to ~120–200 triangles.
- **No degenerate faces** (zero-area, duplicated verts). The BVH builder
  doesn't crash on these but they slow ray traversal.
- **Closed mesh.** Open holes cause rays to escape unexpectedly.

In Rhino's mesh-from-NURBS dialog:

| Setting | Value |
| --- | --- |
| **Density slider** | All the way left (lowest) |
| **Maximum angle** | 0 (unset — let it use the angle below) |
| **Maximum aspect ratio** | 0 |
| **Minimum edge length** | 0 |
| **Maximum edge length** | 0 |
| **Maximum distance, edge to surface** | 0 |
| **Minimum initial grid quads** | 0 |
| **Refine mesh** | OFF |
| **Jagged seams** | ON |
| **Pack textures** | OFF |
| **Simple planes** | ON |

The **Jagged seams** + **Simple planes** flags are what preserve the hard
facet edges. If you bake the mesh and the diamond renders smooth, those two
flags are usually the cause.

### Metal parts

Metal has the opposite requirements — smooth normals, dense enough to look
round.

- Use Rhino's default render-mesh settings, or "Smooth & slower".
- Closed mesh, outward normals.
- Watch triangle count per stone setting / prong; 5–20k tris for a full
  ring is typical.

### Pivot, scale, orientation

- **Centre the model on the origin** before export — or let the viewer
  re-centre it via `frameModel()`. Either works.
- **Y-up.** Rhino is Z-up by default; the glTF exporter rotates for you.
  Verify the ring sits flat (band horizontal, stone pointing up) in the
  exported view.
- **Real-world units.** Millimetres are typical. The viewer auto-scales the
  camera to fit, so the absolute size doesn't matter as long as it's
  consistent across the model.

---

## Naming in Rhino

There are two name slots that matter: the **object name** (becomes
`mesh.name` in the GLB) and the **material name** (becomes `material.name`).

### Object names

In Rhino, select the mesh and use the **Properties** panel → **Object** tab
→ **Name** field. Or `_SetObjectName`.

Recommended pattern:

```
<Type>_<Variant>_<Position>
```

Examples:

- `Diamond_Round_Center`
- `Diamond_Round_Side_L` / `_Side_R`
- `Moissanite_Halo_01` … `_24`
- `Sapphire_Pavé_01`
- `Shank`, `Head`, `Prongs`, `Bezel`, `Gallery`

### Material names

In Rhino, **Materials** panel → select the material → rename. Or use the
glTF exporter's material editor.

Recommended pattern:

```
<Class>_<Subtype>
```

Examples:

- `Diamond_Center`, `Diamond_Side`
- `Moissanite_Halo`
- `Sapphire_Blue`, `Ruby_Red`, `Emerald_Pavé`
- `Metal_Yellow_Gold_14k`, `Metal_White_Gold_18k`, `Metal_Platinum`,
  `Metal_Rose_Gold_14k`

> **Tip**: assign the same metal material to every metal part of the ring
> (shank, head, prongs, bezel). One material = one set of overrides in the
> sidecar JSON, much easier to tune.

Each unique stone position can share a material (e.g. all halo stones use
`Diamond_Halo`) **or** have its own (e.g. `Diamond_Center`,
`Diamond_Halo_01` … `Diamond_Halo_24`). Sharing is more practical for a
test ring.

---

## Exporting from Rhino

### Tools

- **Rhino 7 / 8 built-in exporter** — `_Export` and pick `.glb`. Works fine
  for most cases.
- **glTF 2.0 plugin** by Robert McNeel (Rhino 6/7) — same file format, more
  options.

### Export settings

Pick these in the export dialog:

| Setting | Value | Why |
| --- | --- | --- |
| **Format** | `.glb` (binary) | Single-file, smaller, what the viewer expects |
| **Draco compression** | ON | Existing GLBs use it; the loader's wired up for it |
| **Draco compression level** | 7 (default) | Diminishing returns above 7 |
| **Draco quantization (positions)** | 14 bits | Diamonds need precision; 11 bits visibly degrades facets |
| **Draco quantization (normals)** | 10 bits | 8 bits loses facet sharpness |
| **Y-up** | ON | Three.js is Y-up |
| **Embed textures** | ON | One-file workflow |
| **Apply transforms** | ON | Bakes object transforms into geometry |
| **Use display colour as material colour** | OFF | We override via materialPresets / sidecar |

### Verifying the export

Drop the GLB into <https://gltf-viewer.donmccurdy.com/> or
<https://sandbox.babylonjs.com/>. You should see:

- Each mesh listed by its name in the scene tree
- Material names visible in the materials panel
- Faceted diamonds rendering with visible edges (Babylon's PBR is a good
  facet sanity check)

If a mesh shows up as `Object_001` or a material as `Material_42`, the name
slot wasn't set in Rhino. Go back and fix.

---

## Wiring the GLB into the viewer

1. Save the GLB to `public/models/<id>.glb`. Use lowercase, dashes only
   (e.g. `test-ring-01.glb`).
2. Add the id to `public/models.json`:
   ```json
   {
     "test-ring-01": {
       "displayName": "Test Ring 01"
     }
   }
   ```
3. (Optional) Drop four thumbnails:
   - `public/thumbnails/test-ring-01-front.jpg`
   - `public/thumbnails/test-ring-01-side.jpg`
   - `public/thumbnails/test-ring-01-top.jpg`
   - `public/thumbnails/test-ring-01-perspective.jpg`
4. Visit `https://ludovickninja.github.io/TestViewer/viewer/?id=test-ring-01&debug=1`.
5. Open the **Inspector** panel. Click each mesh — verify:
   - The name shown matches what you set in Rhino.
   - The material section shows the right type (`MeshStandardMaterial` is
     normal for fresh GLBs; the viewer will class-swap diamonds to
     `DiamondShaderMaterial` automatically on load).

---

## Tuning with the inspector

Once the ring loads:

1. Click the diamond mesh.
2. In the **Material** section of the inspector, drop down
   **apply preset** → pick `Gem: Diamond`.
   The diamond should immediately come alive. If it stays flat, the swap
   didn't fire — check the console for `[viewer] swapped "<name>" to
   diamond shader (BVH ray tracer)`.
3. Tweak `ior`, `dispersion`, `bounces`, `reflectivity`, `envMapIntensity`
   sliders until the look matches what you want.
4. Click each metal mesh, apply `Metal: 14K Yellow Gold` (or whatever
   metal preset matches).
5. In the **Overrides** folder, click **download .json**.
6. Save the file as `public/material-overrides/test-ring-01.json`.
7. Commit. From now on every load applies your tuned values automatically
   (no inspector needed).

---

## Common pitfalls

**The diamond renders flat white even after applying the preset.**
The swap heuristic didn't fire. Check that the **mesh name** contains
`diamond` (case-insensitive) — look in the inspector under
`name` field. If the GLB exporter dropped the name, re-export.

**Diamond looks smoothed, no facets visible.**
Mesh-from-NURBS used the wrong settings. In Rhino: re-mesh with
**Simple planes ON, Jagged seams ON, Refine mesh OFF**. Re-export.

**Diamond is dim or grey.**
Check `envMapIntensity` in the inspector — should be ~1.3 with the BVH
ray tracer. Also check the gem HDR loaded by looking at DevTools Network
for `env_gem_001.exr` (200 OK).

**Metal renders milky / no reflections.**
Same root cause — the metal HDR didn't load. Network panel for
`env_metal_014.hdr`.

**`models.json` doesn't list the model and the URL still 404s.**
The viewer reads any `?id=<id>` regardless of `models.json` — that file
is only used by the landing-page random picker. If the URL 404s, the
GLB itself isn't deployed. Check `dist/models/` after a build.

**Coloured stones look wrong (orange ruby etc.).**
Coloured gems still use `MeshPhysicalMaterial` with attenuation; their
`color` and `attenuationColor` fields control tint. Tune in the
inspector and download the override JSON.

**Builder page expects part names.**
The customer viewer accepts any names. The builder (`/builder/`) looks
for top-level groups named `shank` and `head` — only relevant if you're
testing the configurator, not the basic viewer.

---

## Reference: a complete test-ring asset structure

```
public/models/test-ring-01.glb               # the GLB itself
public/material-overrides/test-ring-01.json  # tuned values from inspector
public/thumbnails/test-ring-01-front.jpg     # 4 view thumbs
public/thumbnails/test-ring-01-side.jpg
public/thumbnails/test-ring-01-top.jpg
public/thumbnails/test-ring-01-perspective.jpg
```

Inside the GLB, the scene tree should look like:

```
Scene
└─ TestRing (root group, optional)
   ├─ Shank                      mat: Metal_Yellow_Gold_14k
   ├─ Head                       mat: Metal_Yellow_Gold_14k
   ├─ Prongs                     mat: Metal_Yellow_Gold_14k
   ├─ Diamond_Round_Center       mat: Diamond_Center
   ├─ Diamond_Halo_01            mat: Diamond_Halo
   ├─ Diamond_Halo_02            mat: Diamond_Halo
   └─ ...
```

If you build that and apply the `Gem: Diamond` and
`Metal: 14K Yellow Gold` presets via the inspector, you should be at
parity with the polished demos on first load.
