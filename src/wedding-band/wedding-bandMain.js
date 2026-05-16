// ----------------------------------------------------------------------------
// wedding-bandMain.js — entry point for the WEDDING BAND BUILDER (/wedding-band/)
// ----------------------------------------------------------------------------
// Wires together:
//   1. The shared Three.js scene factory (src/three/createScene.js)
//   2. The procedural geometry generator (wedding-bandGeometry.js)
//   3. The shared material library (src/data/materialPresets.json) via
//      builderMaterials.js — filtered to the three gold options.
//   4. The parameter panel (wedding-bandUI.js)
//   5. The config (src/data/wedding-bandConfig.json)
//
// Runs on the same scene/camera/material pipeline as the /viewer page (HDR
// envs, ACESFilmic + exposure 0.4, 5-light studio rig, on-demand rendering,
// fitCameraToObject for framing).
// ----------------------------------------------------------------------------

import '../styles/base.css';
import '../styles/wedding-band.css';

import { Mesh } from 'three';

import config from '../data/wedding-bandConfig.json';

import { createScene } from '../three/createScene.js';
import { frameModel, fitCameraToObject } from '../three/fitCameraToObject.js';
import { disposeScene } from '../three/disposeScene.js';
import {
  buildBandGeometry,
  ringSizeToInsideRadiusM
} from './wedding-bandGeometry.js';
import { createWeddingBandUI } from './wedding-bandUI.js';
import { createMetalMaterial, listMetals } from '../builder/builderMaterials.js';
import { createInspector } from '../three/inspector.js';

const DEBUG = new URLSearchParams(window.location.search).get('debug') === '1';

// The band UI only exposes the three gold colors. We filter the shared
// materials library so the dropdown matches the legacy product offering.
const GOLD_IDS = new Set(['yellow-gold', 'rose-gold', 'white-gold']);
const golds = listMetals({ filter: (id) => GOLD_IDS.has(id) });
const fingerSizes = config.fingerSizes || [];

function findGoldById(id) {
  return golds.find((g) => g.id === id) || golds[0];
}

function diameterForSize(size) {
  const entry = fingerSizes.find((f) => f.size === size);
  return entry ? entry.diameterMm : 16.51; // fallback to US 7
}

function mount() {
  const appRoot = document.getElementById('app');
  if (!appRoot) throw new Error('Missing #app root element');

  appRoot.innerHTML = `
    <main class="wedding-band-page">
      <div class="wedding-band-stage" data-role="stage"></div>
      <div class="wedding-band-overlay" data-role="overlay"></div>
    </main>
  `;

  const stage = appRoot.querySelector('[data-role="stage"]');
  const overlay = appRoot.querySelector('[data-role="overlay"]');

  // ---- Three.js scene ----
  const viewer = createScene(stage, { canvasClass: 'wedding-band-canvas' });

  // Debug inspector — only mounted with ?debug=1. Same lil-gui panel as the
  // /viewer page: click the band to spawn its material folder, tweak the
  // physical params live, then "copy JSON" to paste back into
  // materialPresets.json or a per-model override sidecar.
  const inspector = DEBUG ? createInspector(viewer) : null;

  // ---- Initial parameters ----
  const initialParams = {
    widthMm: config.ranges.width.default,
    thicknessMm: config.ranges.thickness.default,
    profile: config.defaults.profile,
    comfortFit: config.defaults.comfortFit,
    goldId: config.defaults.goldId,
    fingerSize: config.defaults.fingerSize
  };

  // ---- Persistent mesh: rebuild geometry & swap material in place ----
  // The mesh is built synchronously but kept hidden until the HDR
  // environments finish loading. A pure-metal material rendered before
  // `scene.environment` is assigned has nothing but the direct lights to
  // shade against, which on metals reads as almost black — without this
  // gate the band would flash dark for one or two frames on first paint.
  const initialGold = findGoldById(initialParams.goldId);
  const mesh = new Mesh(
    geometryForParams(initialParams),
    createMetalMaterial(initialGold, { environments: viewer.environments })
  );
  // Rotate the band so its symmetry axis (Y from LatheGeometry) aligns with
  // the scene's Z axis. With the camera looking roughly down +Z the band
  // presents a clear three-quarter view of its inner hole and outer surface.
  mesh.rotation.x = Math.PI / 2;
  mesh.visible = false;
  viewer.scene.add(mesh);

  let lastGoldId = initialParams.goldId;
  let activeRadius = 1;

  function refit() {
    const frame = frameModel(mesh);
    fitCameraToObject(viewer.camera, viewer.controls, frame);
    activeRadius = frame.radius;
    // Re-apply HDR envs (also handles the case where the HDRs only finish
    // loading after the mesh was built).
    void viewer.applyMaterialEnvironments(mesh, null, activeRadius);
    viewer.requestRender();
  }

  // Wait for the HDR environments before revealing the mesh. envMapsReady
  // resolves successfully even if the HDR load fails — in that case the
  // band still appears (lit only by the direct lights), which is preferable
  // to leaving the user staring at an empty stage forever.
  viewer.envMapsReady.then(() => {
    mesh.visible = true;
    refit();
    inspector?.attach(mesh, { modelId: 'wedding-band', scale: activeRadius });
  });

  function rebuild(params) {
    // Geometry: dispose old, swap new.
    const old = mesh.geometry;
    mesh.geometry = geometryForParams(params);
    if (old) old.dispose();

    // Material: keep instance unless the gold changed.
    if (params.goldId !== lastGoldId) {
      const gold = findGoldById(params.goldId);
      const prev = mesh.material;
      mesh.material = createMetalMaterial(gold, { environments: viewer.environments });
      if (prev && prev.dispose) prev.dispose();
      lastGoldId = params.goldId;
    }
    viewer.requestRender();
  }

  // ---- UI ----
  createWeddingBandUI(overlay, {
    golds,
    fingerSizes,
    ranges: config.ranges,
    defaults: initialParams,
    onChange: rebuild,
    onResetView: () => refit()
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

  // ---- Cleanup ----
  window.addEventListener('beforeunload', () => {
    ro.disconnect();
    if (mesh.geometry) mesh.geometry.dispose();
    if (mesh.material && mesh.material.dispose) mesh.material.dispose();
    inspector?.dispose();
    disposeScene(viewer);
  });
}

function geometryForParams(params) {
  return buildBandGeometry({
    widthMm: params.widthMm,
    thicknessMm: params.thicknessMm,
    insideRadiusM: ringSizeToInsideRadiusM(diameterForSize(params.fingerSize)),
    profile: params.profile,
    comfortFit: params.comfortFit
  });
}

mount();
