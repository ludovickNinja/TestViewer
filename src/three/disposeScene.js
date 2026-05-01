// ----------------------------------------------------------------------------
// disposeScene.js
// ----------------------------------------------------------------------------
// Three.js does NOT garbage-collect GPU resources for you. Geometries,
// materials, and textures live on the graphics card until you explicitly
// call .dispose() on them. If you forget, leaving the page (or hot-reloading
// during dev) leaks GPU memory.
//
// These helpers walk the scene and release everything cleanly.
// ----------------------------------------------------------------------------

/**
 * Dispose every geometry, material, and texture under `root`.
 * @param {import('three').Object3D} root
 */
export function disposeObject(root) {
  root.traverse((obj) => {
    if (!obj.isMesh) return;

    obj.geometry?.dispose();

    // A mesh may have a single material or an array of materials.
    if (Array.isArray(obj.material)) {
      obj.material.forEach(disposeMaterial);
    } else if (obj.material) {
      disposeMaterial(obj.material);
    }
  });
}

/**
 * @param {import('three').Material} material
 */
function disposeMaterial(material) {
  // Materials hold references to textures (color map, normal map, etc.) on
  // various properties. Walk every property; if it's a Texture, dispose it.
  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && value.isTexture) {
      value.dispose();
    }
  }
  material.dispose();
}

/**
 * Tear down an entire viewer scene and remove its canvas from the DOM.
 *
 * @param {ReturnType<typeof import('./createScene.js').createScene>} viewer
 */
export function disposeScene(viewer) {
  viewer.stop();
  disposeObject(viewer.scene);
  // PMREM-prefiltered env maps live outside the scene graph (on
  // scene.environment and on per-material .envMap slots), so the mesh walk
  // above doesn't reliably free them. Dispose them explicitly.
  viewer.environments?.metal?.dispose();
  viewer.environments?.gem?.dispose();
  viewer.controls.dispose();
  viewer.renderer.dispose();
  if (viewer.canvas.parentElement) {
    viewer.canvas.parentElement.removeChild(viewer.canvas);
  }
}
