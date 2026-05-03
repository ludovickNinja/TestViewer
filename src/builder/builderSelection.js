// ----------------------------------------------------------------------------
// builderSelection.js
// ----------------------------------------------------------------------------
// Click-to-select for builder meshes.
//
//   - THREE.Raycaster against canvas-relative pointer coordinates.
//   - Only meshes flagged with `userData.builderRole` are selectable
//     (so we never accidentally pick a light helper or future overlay).
//   - The currently selected mesh is visually highlighted using
//     `material.emissive`. The original emissive color/intensity are saved
//     so we can restore them when the selection changes.
//   - We never modify geometry.
// ----------------------------------------------------------------------------

import { Color, Raycaster, Vector2 } from 'three';

const HIGHLIGHT_COLOR = new Color('#3a6cff');
const HIGHLIGHT_INTENSITY = 0.45;

/**
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   camera: import('three').PerspectiveCamera,
 *   scene: import('three').Scene,
 *   onSelect: (mesh: import('three').Mesh | null) => void
 * }} opts
 */
export function createSelectionController({ canvas, camera, scene, onSelect }) {
  const raycaster = new Raycaster();
  const pointer = new Vector2();

  /** @type {import('three').Mesh | null} */
  let selected = null;

  function highlight(mesh) {
    if (!mesh || !mesh.material) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of mats) {
      if (!mat || !('emissive' in mat)) continue;
      // Save originals once so we can restore them later.
      if (!mat.userData.__builderEmissiveSaved) {
        mat.userData.__builderEmissiveSaved = {
          color: mat.emissive.clone(),
          intensity: mat.emissiveIntensity ?? 1
        };
      }
      mat.emissive.copy(HIGHLIGHT_COLOR);
      mat.emissiveIntensity = HIGHLIGHT_INTENSITY;
      mat.needsUpdate = true;
    }
  }

  function unhighlight(mesh) {
    if (!mesh || !mesh.material) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of mats) {
      if (!mat || !('emissive' in mat)) continue;
      const saved = mat.userData.__builderEmissiveSaved;
      if (saved) {
        mat.emissive.copy(saved.color);
        mat.emissiveIntensity = saved.intensity;
        delete mat.userData.__builderEmissiveSaved;
      } else {
        mat.emissive.set(0x000000);
      }
      mat.needsUpdate = true;
    }
  }

  /** Programmatically clear the current selection. */
  function clear() {
    if (selected) unhighlight(selected);
    selected = null;
    onSelect(null);
  }

  /** Programmatically select a mesh (e.g. from the parts list). */
  function select(mesh) {
    if (selected === mesh) return;
    if (selected) unhighlight(selected);
    selected = mesh || null;
    if (selected) highlight(selected);
    onSelect(selected);
  }

  function handlePointerDown(event) {
    // Ignore right-click and middle-click — those rotate / pan in OrbitControls.
    if (event.button !== 0) return;

    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    // Collect candidate meshes (only those tagged as builder parts). We use
    // recursive intersection on the scene root because parts are loaded as
    // groups, not direct children.
    const intersections = raycaster.intersectObjects(scene.children, true);
    let hit = null;
    for (const x of intersections) {
      if (x.object && x.object.isMesh && x.object.userData?.builderRole) {
        hit = x.object;
        break;
      }
    }

    if (hit) select(hit);
    else clear();
  }

  // Use 'pointerup' on top of a pointerdown threshold check to differentiate
  // a click from an OrbitControls drag. We track the down position and only
  // treat it as a click if the up position is within a small radius.
  let downX = 0;
  let downY = 0;
  let downTime = 0;
  const DRAG_THRESHOLD_PX = 5;
  const CLICK_MAX_MS = 500;

  function onPointerDown(event) {
    downX = event.clientX;
    downY = event.clientY;
    downTime = performance.now();
  }

  function onPointerUp(event) {
    const dx = event.clientX - downX;
    const dy = event.clientY - downY;
    const dt = performance.now() - downTime;
    if (Math.hypot(dx, dy) > DRAG_THRESHOLD_PX) return;
    if (dt > CLICK_MAX_MS) return;
    handlePointerDown(event);
  }

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointerup', onPointerUp);

  function dispose() {
    canvas.removeEventListener('pointerdown', onPointerDown);
    canvas.removeEventListener('pointerup', onPointerUp);
    if (selected) unhighlight(selected);
    selected = null;
  }

  return {
    select,
    clear,
    dispose,
    get selected() {
      return selected;
    }
  };
}
