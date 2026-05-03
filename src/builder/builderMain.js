// ----------------------------------------------------------------------------
// builderMain.js — entry point for the BUILDER page (/builder/)
// ----------------------------------------------------------------------------
// Wires together:
//   1. The Three.js scene (builderScene.js)
//   2. The catalog + metal data (src/data/builderCatalog.json, builderMetals.json)
//   3. The GLB loader (builderLoader.js)
//   4. The metal/material library (builderMaterials.js)
//   5. The click-to-select controller (builderSelection.js)
//   6. The export helpers (builderExport.js)
//   7. The DOM panels (builderUI.js)
//
// Self-contained: nothing here reaches into the existing /viewer code, so the
// builder cannot regress the viewer. All builder-specific assets live under
// /assets/builder/ (served from /public/assets/builder/ at build time).
//
// IMPORTANT — jewelry coordinate system:
//   We DO NOT auto-center, DO NOT auto-scale, and DO NOT recompute origins
//   on loaded GLBs. Shank and head GLBs are exported from Rhino using a
//   shared world origin; trusting those transforms is what makes them line
//   up. See README notes in builderLoader.js.
// ----------------------------------------------------------------------------

import '../styles/base.css';
import '../styles/builder.css';

import catalog from '../data/builderCatalog.json';
import metalsDoc from '../data/builderMetals.json';

import { createBuilderScene } from './builderScene.js';
import { loadBuilderPart, removeBuilderPart } from './builderLoader.js';
import { applyMetalToMesh, applyMetalToTree, findMetalById } from './builderMaterials.js';
import { createSelectionController } from './builderSelection.js';
import { exportBuilderGLB, exportBuilderJSON } from './builderExport.js';
import { createBuilderUI } from './builderUI.js';

const baseUrl = import.meta.env.BASE_URL ?? '/';
const metals = metalsDoc.metals || [];

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
  const viewer = createBuilderScene(stage);

  // ---- DOM (panels) ----
  const ui = createBuilderUI(overlay, {
    shanks: catalog.shanks || [],
    heads: catalog.heads || [],
    metals,
    onLoadParts: () => {
      void loadParts(ui.getSelectedShankId(), ui.getSelectedHeadId());
    },
    onShankChange: () => {
      // The user picks from the dropdown but we wait for "Load / Update" to
      // actually fetch the GLB. This keeps the UX predictable and avoids
      // surprise downloads.
    },
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
      applyMetalToMesh(sel, metal);
      // Re-select to refresh the selection highlight on the new material.
      selection.select(sel);
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
      viewer.resetView();
      selection.clear();
      ui.setSelected(null);
    }
  });

  // ---- Selection controller ----
  const selection = createSelectionController({
    canvas: viewer.canvas,
    camera: viewer.camera,
    scene: viewer.scene,
    onSelect: (mesh) => ui.setSelected(mesh)
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
    // Try the initial load. If GLBs are missing the loader will reject and
    // we'll surface a friendly toast — we do NOT crash.
    void loadParts(initialShankId, initialHeadId, /*silentMissing*/ true);
  }

  // ---- Cleanup ----
  window.addEventListener('beforeunload', () => {
    selection.dispose();
    ro.disconnect();
    viewer.dispose();
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
  }

  /**
   * Load a single part (shank OR head). Removes any previously loaded part
   * with the same role first, then applies the catalog entry's default metal.
   */
  async function loadOnePart(role, entry) {
    // The entry.file path is absolute ("/assets/builder/shanks/foo.glb").
    // Respect Vite's BASE_URL so it works under /<repo>/ on GitHub Pages.
    const url = joinUrl(baseUrl, entry.file);
    const root = await loadBuilderPart(url, role);

    // Stash the catalog id so JSON export round-trips correctly.
    root.userData.builderCatalogId = entry.id;

    // Apply the default metal preset across the entire subtree, but only if
    // we know about it. If the catalog metal id isn't in the metals doc, we
    // leave the imported material alone.
    const metal = findMetalById(metals, entry.defaultMetal);
    if (metal) applyMetalToTree(root, metal);

    // Remove any previous part with the same role, then add the new one.
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
 * Join a base URL with an absolute path, collapsing the duplicated leading
 * slash. Avoids "//assets/builder/..." when BASE_URL is already "/".
 */
function joinUrl(base, path) {
  if (!path.startsWith('/')) return base + path;
  if (base.endsWith('/')) return base + path.slice(1);
  return base + path;
}

mount();
