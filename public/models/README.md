# Models

Place GLB files for customer previews in this folder.

## Naming

Each file becomes a preview link based on its filename:

```
public/models/<id>.glb  →  /viewer/?id=<id>
```

The `<id>` must contain only letters, numbers, dashes, and underscores. The
viewer rejects anything else to prevent path traversal.

## Examples

| File                          | URL                                         |
| ----------------------------- | ------------------------------------------- |
| `public/models/sample-ring.glb` | `https://yourdomain.com/viewer/?id=sample-ring` |
| `public/models/NC12345.glb`   | `https://yourdomain.com/viewer/?id=NC12345` |

## Privacy warning

This is a static prototype hosted on GitHub Pages. Anyone with a link — or who
inspects the network tab — can download the GLB file. **Do not** put confidential
designs here. For real protection move to private storage with signed URLs.

Avoid using customer names, job numbers, or order numbers in filenames if links
will be shared externally — use opaque random IDs instead.
