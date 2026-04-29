import { BufferGeometry, Material, Mesh, Object3D, Texture } from 'three';
import type { ViewerScene } from './createScene';

/**
 * Recursively dispose of geometries, materials and textures attached to an object.
 */
export function disposeObject(root: Object3D): void {
  root.traverse((obj) => {
    const mesh = obj as Mesh;
    if ((mesh as Mesh).isMesh) {
      const geometry = mesh.geometry as BufferGeometry | undefined;
      geometry?.dispose();

      const material = mesh.material;
      if (Array.isArray(material)) {
        material.forEach(disposeMaterial);
      } else if (material) {
        disposeMaterial(material);
      }
    }
  });
}

function disposeMaterial(material: Material): void {
  // Dispose any texture properties on the material.
  for (const key of Object.keys(material) as Array<keyof Material>) {
    const value = (material as unknown as Record<string, unknown>)[key as string];
    if (value && (value as Texture).isTexture) {
      (value as Texture).dispose();
    }
  }
  material.dispose();
}

/**
 * Tear down the entire viewer scene and free GPU resources.
 */
export function disposeScene(viewer: ViewerScene): void {
  viewer.stop();
  disposeObject(viewer.scene);
  viewer.controls.dispose();
  viewer.renderer.dispose();
  if (viewer.canvas.parentElement) {
    viewer.canvas.parentElement.removeChild(viewer.canvas);
  }
}
