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
  buildBandProfile,
  ringSizeToInsideRadiusM
} from './wedding-bandGeometry.js';
import { createWeddingBandUI } from './wedding-bandUI.js';
import { createMetalMaterial, listMetals } from '../builder/builderMaterials.js';
import { createInspector } from '../three/inspector.js';
import {
  loadPricing,
  pricingKeyFor,
  hasKarat,
  computePrice
} from '../pricing/pricingService.js';
import { ensureFreshSpot, loadSpot } from '../pricing/spotPriceService.js';
import { bandVolumeM3, massGrams } from '../pricing/computeBandWeight.js';

const DEBUG = new URLSearchParams(window.location.search).get('debug') === '1';

// The band UI exposes the three gold colors plus platinum and sterling
// silver. Karat (10K/14K/18K) is only meaningful for the golds — it doesn't
// affect rendering, only pricing.
const BAND_METAL_IDS = new Set(['yellow-gold', 'white-gold', 'rose-gold', 'platinum', 'silver']);
const metals = listMetals({ filter: (id) => BAND_METAL_IDS.has(id) });
const karats = [
  { id: '10k', label: '10K' },
  { id: '14k', label: '14K' },
  { id: '18k', label: '18K' }
];
const fingerSizes = config.fingerSizes || [];

function findMetalById(id) {
  return metals.find((m) => m.id === id) || metals[0];
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
  const initialMetalId = config.defaults.metalId ?? config.defaults.goldId ?? metals[0].id;
  const initialKarat = hasKarat(initialMetalId)
    ? config.defaults.karat ?? '14k'
    : null;
  const initialParams = {
    widthMm: config.ranges.width.default,
    thicknessMm: config.ranges.thickness.default,
    profile: config.defaults.profile,
    comfortFit: config.defaults.comfortFit,
    metalId: initialMetalId,
    karat: initialKarat,
    fingerSize: config.defaults.fingerSize
  };

  // ---- Persistent mesh: rebuild geometry & swap material in place ----
  // The mesh is built synchronously but kept hidden until the HDR
  // environments finish loading. A pure-metal material rendered before
  // `scene.environment` is assigned has nothing but the direct lights to
  // shade against, which on metals reads as almost black — without this
  // gate the band would flash dark for one or two frames on first paint.
  const initialMetal = findMetalById(initialParams.metalId);
  const mesh = new Mesh(
    geometryForParams(initialParams),
    createMetalMaterial(initialMetal, { environments: viewer.environments })
  );
  // Rotate the band so its symmetry axis (Y from LatheGeometry) aligns with
  // the scene's Z axis. With the camera looking roughly down +Z the band
  // presents a clear three-quarter view of its inner hole and outer surface.
  mesh.rotation.x = Math.PI / 2;
  mesh.visible = false;
  viewer.scene.add(mesh);

  let lastMetalId = initialParams.metalId;
  let activeRadius = 1;

  // ---- Pricing ----
  const pricing = loadPricing();
  // Spot snapshot starts at whatever's in localStorage (could be null on
  // first visit). We kick off an async refresh below and re-run pricing
  // once that resolves — the page never blocks on the network.
  let spot = loadSpot();
  let bandUI = null;  // set once createWeddingBandUI runs below

  function updatePricing(params) {
    if (!bandUI) return;
    const profile = profileForParams(params);
    const volume = bandVolumeM3(profile);
    const key = pricingKeyFor(params.metalId, params.karat);
    const entry = pricing.metals[key];
    if (!entry) {
      bandUI.setPricing({ weightGrams: 0, breakdown: null, spotSourceLabel: spotSourceLabel() });
      return;
    }
    const weightGrams = massGrams(volume, entry.densityGPerCc);
    const breakdown = computePrice(pricing, spot, key, weightGrams);
    bandUI.setPricing({ weightGrams, breakdown, spotSourceLabel: spotSourceLabel() });
  }

  function spotSourceLabel() {
    if (!spot) return 'Spot: bundled fallback';
    const stamp = new Date(spot.fetchedAt).toLocaleString();
    return `Spot: ${spot.source} · ${stamp}`;
  }

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

    // Material: keep instance unless the metal changed.
    if (params.metalId !== lastMetalId) {
      const metal = findMetalById(params.metalId);
      const prev = mesh.material;
      mesh.material = createMetalMaterial(metal, { environments: viewer.environments });
      if (prev && prev.dispose) prev.dispose();
      lastMetalId = params.metalId;
    }
    updatePricing(params);
    viewer.requestRender();
  }

  // ---- UI ----
  bandUI = createWeddingBandUI(overlay, {
    metals,
    karats,
    fingerSizes,
    ranges: config.ranges,
    defaults: initialParams,
    onChange: rebuild,
    onResetView: () => refit()
  });
  updatePricing(initialParams);

  // Refresh the spot snapshot in the background; rerun the pricing once it
  // resolves. If the fetch fails we keep whatever was already in `spot`
  // (cached snapshot, or null → fallback prices). Errors are swallowed
  // inside ensureFreshSpot.
  ensureFreshSpot().then((fresh) => {
    if (fresh) {
      spot = fresh;
      updatePricing(bandUI.getParams());
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
  return buildBandGeometry(geometryParams(params));
}

function profileForParams(params) {
  return buildBandProfile(geometryParams(params));
}

function geometryParams(params) {
  return {
    widthMm: params.widthMm,
    thicknessMm: params.thicknessMm,
    insideRadiusM: ringSizeToInsideRadiusM(diameterForSize(params.fingerSize)),
    profile: params.profile,
    comfortFit: params.comfortFit
  };
}

mount();
