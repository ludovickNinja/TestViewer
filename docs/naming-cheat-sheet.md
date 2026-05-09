# Mesh + material naming cheat-sheet

The viewer auto-detects what to do with each mesh based on its name and
its material name. Match these patterns when authoring in Rhino and
everything just works on first load — no override sidecar required.

## What goes where

| Part | Mesh name | Material name | What the viewer does |
| --- | --- | --- | --- |
| Centre diamond | `Diamond_Round_Center` | `Diamond_Center` | BVH ray tracer, gem env |
| Side diamonds / pavé | `Diamond_Side_L`, `Diamond_Halo_01` | `Diamond_Halo` | BVH ray tracer, gem env |
| Moissanite | `Moissanite_Center` | `Moissanite_Center` | BVH ray tracer, gem env |
| Sapphire / ruby / emerald | `Sapphire_01`, `Ruby_01`, `Emerald_01` | `Sapphire_Blue`, `Ruby_Red`, `Emerald_Pavé` | `MeshPhysicalMaterial` + gem env, attenuation |
| Other coloured stones | mesh contains `gem`, `stone`, `crystal`, `cz`, `topaz`, or `amethyst` | same | `MeshPhysicalMaterial` + gem env |
| Metal shank | `Shank` | `Metal_Yellow_Gold_14k` | `MeshPhysicalMaterial` + metal env |
| Head / setting | `Head` | same metal material | metal env |
| Prongs / bezel / gallery | `Prongs`, `Bezel`, `Gallery` | same metal material | metal env |

## Patterns the viewer matches (case-insensitive)

| Path | Triggered when… |
| --- | --- |
| **Diamond shader** (BVH ray tracer) | mesh OR material name contains `diamond` or `moissanite` |
| **Gem env map** | mesh OR material name contains `diamond`, `gem`, `stone`, `sapphire`, `ruby`, `emerald`, `crystal`, `cz`, `topaz`, or `amethyst` |
| **Metal env map** | anything else |

## Rules of thumb

- Match either slot — mesh name **or** material name. The viewer checks both.
- One material per metal across all metal parts (shank, head, prongs) — much easier to tune in the override sidecar.
- One material per stone group (`Diamond_Center`, `Diamond_Halo`, `Sapphire_Pavé`) — same reason.
- If the GLB exporter dropped a name (you see `Object_001` / `Material_42`), re-set in Rhino and re-export.

## Where to verify

Open the viewer with `?debug=1`, click a mesh. The inspector panel shows
the actual `mesh.name` and `material.name` as parsed from the GLB. If
those don't match what you typed in Rhino, the export lost them.

## Full guide

See [`docs/test-ring.md`](./test-ring.md) for Rhino export settings,
geometry requirements, and the inspector tuning workflow.
