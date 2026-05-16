// ----------------------------------------------------------------------------
// builderMain.js — entry point for the BUILDER page (/builder/)
// ----------------------------------------------------------------------------
// Wires together:
//   1. The shared Three.js scene factory (src/three/createScene.js)
//   2. The catalog data (src/data/builderCatalog.json)
//   3. The metal presets — sourced from the shared material library
//      (src/data/materialPresets.json) via builderMaterials.js
//   4. The GLB loader (builderLoader.js)
//   5. The click-to-select controller (builderSelection.js)
//   6. The export helpers (builderExport.js)
//   7. The DOM panels (builderUI.js)
//
// The builder now runs on the same scene/camera/material pipeline as the
// /viewer page: identical HDR environments, exposure, lighting rig, on-demand
// render loop, and material preset application. Camera framing uses
// fitCameraToObject() after the first part loads, replacing the previous
// hard-coded camera position.
//
// IMPORTANT — jewelry coordinate system:
//   We DO NOT auto-scale or recompute origins on loaded GLBs. Shank and head
//   GLBs are exported from Rhino using a shared world origin; trusting those
//   transforms is what makes them line up. Note that frameModel() *does*
//   recenter the combined parts at (0,0,0) once, on the first fit pass, so
//   the camera presets have a well-defined target.
// ----------------------------------------------------------------------------

import '../styles/base.css';
import '../styles/builder.css';

import { Box3, Vector3 } from 'three';

import catalog from '../data/builderCatalog.json';

import { createScene } from '../three/createScene.js';
import { fitCameraToObject } from '../three/fitCameraToObject.js';
import { disposeScene } from '../three/disposeScene.js';
import { loadBuilderPart, removeBuilderPart } from './builderLoader.js';
import {
  applyMetalToMesh,
  applyMetalToTree,
  findMetalById,
  listMetals
} from './builderMaterials.js';
import { createSelectionController } from './builderSelection.js';
import { exportBuilderGLB, exportBuilderJSON } from './builderExport.js';
import { createBuilderUI } from './builderUI.js';

const baseUrl = import.meta.env.BASE_URL ?? '/';
const metals = listMetals();

function mount() {
  const appRoot = document.getElementById('app');
  if (!appRoot) throw new Error('Missing #app root element');

  // Build the page skeleton: a stage that holds the Three.js canvas, plus a
  // sibling root for the floating panels.
  appRoot.innerHTML = `
    <main class="builder-page">
      <div class="builder-stage" data-role="stage"></div>
      <div class="builder-overlay" data-role="overlay"></div>
    </main>
  `;

  const stage = appRoot.querySelector('[data-role="stage"]');
  const overlay = appRoot.querySelector('[data-role="overlay"]');

  // ---- Three.js scene ----
  // Same factory as /viewer: HDR-lit, on-demand rendering, ACESFilmic at
  // exposure 0.4, 5-light studio rig. We pass a distinct canvas class so the
  // existing builder CSS targeting (.builder-canvas) keeps working.
  const viewer = createScene(stage, { canvasClass: 'builder-canvas' });

  /** Set to true after fitCameraToObject runs the first time. */
  let framed = false;
  /** Last frame radius — used to scale size-scoped material props. */
  let activeRadius = 1;

  // ---- DOM (panels) ----
  const ui = createBuilderUI(overlay, {
    shanks: catalog.shanks || [],
    heads: catalog.heads || [],
    metals,
    onLoadParts: () => {
      void loadParts(ui.getSelectedShankId(), ui.getSelectedHeadId());
    },
    onShankChange: () => {},
    onHeadChange: () => {},
    onRename: (newName) => {
      const sel = selection.selected;
      if (!sel) return;
      sel.name = newName;
      ui.setSelected(sel);
    },
    onCategoryChange: (category) => {
      const sel = selection.selected;
      if (!sel) return;
      sel.userData = sel.userData || {};
      sel.userData.builderCategory = category;
    },
    onApplyMetal: (metalId) => {
      const sel = selection.selected;
      if (!sel) return;
      const metal = findMetalById(metals, metalId);
      if (!metal) return;
      applyMetalToMesh(sel, metal, { environments: viewer.environments });
      // Re-select to refresh the selection highlight on the new material.
      selection.select(sel);
      viewer.requestRender();
    },
    onExportGLB: () => {
      const shank = findRoot(viewer.scene, 'shank');
      const head = findRoot(viewer.scene, 'head');
      if (!shank && !head) {
        ui.showToast('Load a shank or head before exporting.');
        return;
      }
      exportBuilderGLB({ shank, head }).catch((err) => {
        console.error('[builder] GLB export failed', err);
        ui.showToast('GLB export failed. See the browser console.');
      });
    },
    onExportJSON: () => {
      const shank = findRoot(viewer.scene, 'shank');
      const head = findRoot(viewer.scene, 'head');
      if (!shank && !head) {
        ui.showToast('Load a shank or head before exporting.');
        return;
      }
      exportBuilderJSON({
        shank,
        head,
        selectedShankId: ui.getSelectedShankId(),
        selectedHeadId: ui.getSelectedHeadId()
      });
    },
    onResetView: () => {
      // Re-fit to the currently-loaded parts instead of restoring a fixed
      // hard-coded position — same behaviour as the /viewer reset button.
      const frame = computeSceneFrame(viewer.scene);
      if (frame) {
        fitCameraToObject(viewer.camera, viewer.controls, frame);
        activeRadius = frame.radius;
      }
      selection.clear();
      ui.setSelected(null);
      viewer.requestRender();
    }
  });

  // ---- Selection controller ----
  const selection = createSelectionController({
    canvas: viewer.canvas,
    camera: viewer.camera,
    scene: viewer.scene,
    onSelect: (mesh) => {
      ui.setSelected(mesh);
      // Selection mutates material.emissive without firing controls 'change',
      // so the on-demand render loop needs a manual nudge.
      viewer.requestRender();
    }
  });

  // ---- Resize ----
  const resize = () => {
    const rect = stage.getBoundingClientRect();
    viewer.setSize(rect.width, rect.height);
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(stage);
  window.addEventListener('resize', resize);

  viewer.start();

  // ---- Initial state: pre-select the first catalog entry and try to load ----
  const initialShankId = catalog.shanks?.[0]?.id || '';
  const initialHeadId = catalog.heads?.[0]?.id || '';
  ui.setSelectedShankId(initialShankId);
  ui.setSelectedHeadId(initialHeadId);

  if (!catalog.shanks?.length && !catalog.heads?.length) {
    ui.showToast(
      'Catalog is empty. Add entries to /src/data/builderCatalog.json and place GLB files in /assets/builder/shanks and /assets/builder/heads.',
      true
    );
  } else {
    void loadParts(initialShankId, initialHeadId, /*silentMissing*/ true);
  }

  // ---- Cleanup ----
  window.addEventListener('beforeunload', () => {
    selection.dispose();
    ro.disconnect();
    disposeScene(viewer);
  });

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------

  /**
   * Load (or replace) the shank and the head matching the given catalog ids.
   * Each part is loaded independently — failure of one does not block the
   * other.
   */
  async function loadParts(shankId, headId, silentMissing = false) {
    selection.clear();
    ui.setSelected(null);

    const tasks = [];
    const missing = [];

    const shankEntry = catalog.shanks?.find((s) => s.id === shankId);
    if (shankEntry) {
      tasks.push(
        loadOnePart('shank', shankEntry).catch((err) => {
          missing.push(shankEntry.file);
          if (!silentMissing) console.warn('[builder] shank load failed', err);
        })
      );
    }

    const headEntry = catalog.heads?.find((h) => h.id === headId);
    if (headEntry) {
      tasks.push(
        loadOnePart('head', headEntry).catch((err) => {
          missing.push(headEntry.file);
          if (!silentMissing) console.warn('[builder] head load failed', err);
        })
      );
    }

    await Promise.all(tasks);

    if (missing.length > 0) {
      ui.showToast(
        `Missing GLB${missing.length > 1 ? 's' : ''}: ${missing.join(', ')}. Place GLB files in /assets/builder/shanks and /assets/builder/heads.`,
        true
      );
    } else {
      ui.hideToast();
    }

    // Frame the combined parts once — preserve the user's camera afterwards
    // so swapping a head doesn't yank the view back.
    if (!framed) {
      const frame = computeSceneFrame(viewer.scene);
      if (frame) {
        fitCameraToObject(viewer.camera, viewer.controls, frame);
        activeRadius = frame.radius;
        framed = true;
      }
    }

    // Assign HDR envs to every freshly-loaded material. Safe to call before
    // HDRs finish loading — applyMaterialEnvironments awaits internally.
    const shankRoot = findRoot(viewer.scene, 'shank');
    const headRoot = findRoot(viewer.scene, 'head');
    if (shankRoot) await viewer.applyMaterialEnvironments(shankRoot, null, activeRadius);
    if (headRoot) await viewer.applyMaterialEnvironments(headRoot, null, activeRadius);
    viewer.requestRender();
  }

  /**
   * Load a single part (shank OR head). Removes any previously loaded part
   * with the same role first, then applies the catalog entry's default metal.
   */
  async function loadOnePart(role, entry) {
    const url = joinUrl(baseUrl, entry.file);
    const root = await loadBuilderPart(url, role);

    root.userData.builderCatalogId = entry.id;

    const metal = findMetalById(metals, entry.defaultMetal);
    if (metal) {
      applyMetalToTree(root, metal, { environments: viewer.environments });
    }

    removeBuilderPart(viewer.scene, role);
    viewer.scene.add(root);

    if (role === 'shank') ui.setShankName(entry.name);
    else if (role === 'head') ui.setHeadName(entry.name);
  }
}

/**
 * Find the top-level group with `userData.builderRole === role` that lives
 * directly under the scene. Returns null if none.
 *
 * @param {import('three').Scene} scene
 * @param {'shank'|'head'} role
 */
function findRoot(scene, role) {
  for (const child of scene.children) {
    if (child.userData && child.userData.builderRole === role) return child;
  }
  return null;
}

/**
 * Compute a ModelFrame-compatible bounds object covering every builder part
 * currently in the scene. Returns null if no parts are loaded.
 *
 * @param {import('three').Scene} scene
 */
function computeSceneFrame(scene) {
  const box = new Box3();
  let any = false;
  for (const child of scene.children) {
    if (!child.userData?.builderRole) continue;
    box.expandByObject(child);
    any = true;
  }
  if (!any || box.isEmpty()) return null;
  const size = new Vector3();
  const center = new Vector3();
  box.getSize(size);
  box.getCenter(center);
  const radius = Math.max(size.x, size.y, size.z) * 0.5 || 0.05;
  return { center, size, radius };
}

/**
 * Join a base URL with an absolute path, collapsing the duplicated leading
 * slash. Avoids "//assets/builder/..." when BASE_URL is already "/".
 */
function joinUrl(base, path) {
  if (!path.startsWith('/')) return base + path;
  if (base.endsWith('/')) return base + path.slice(1);
  return base + path;
}

mount();
