# Thumbnails

Optional still-image previews shown in the bottom strip of the viewer.

## Naming convention

Each model can have up to four thumbnails, one per preset view:

```
public/thumbnails/<id>-front.jpg
public/thumbnails/<id>-side.jpg
public/thumbnails/<id>-top.jpg
public/thumbnails/<id>-perspective.jpg
```

`<id>` must match the GLB filename (without `.glb`).

## Behavior

- If a thumbnail is present, the viewer shows it in the strip.
- If a thumbnail is missing, the viewer falls back to a labeled placeholder.
- Clicking a thumbnail moves the camera to that preset view, regardless of
  whether the image exists.

## Recommended size

Square JPGs around 512×512 px work well. Thumbnails are static — they do not
need to match the live 3D view exactly.
