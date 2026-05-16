// ----------------------------------------------------------------------------
// createScene.js
// ----------------------------------------------------------------------------
// Sets up everything Three.js needs to draw the 3D viewer:
//   - WebGL renderer (the canvas)
//   - PerspectiveCamera (what the customer sees through)
//   - OrbitControls (drag to rotate, pinch/scroll to zoom, etc.)
//   - Studio-style lighting tuned for shiny jewelry
//   - Dual HDR environments: one for metal parts, one for gem parts
//
// Why two HDRs? Metal and gems want opposite environments. Metal looks best
// under a soft "studio softbox" HDR — broad, even reflections without harsh
// hotspots. Gems (especially diamonds) need the opposite: a darker HDR with
// intense pinpoint lights, which become the "fire" / sparkle once refracted
// through the facets. A single HDR is always a compromise, so we load both
// and assign per-material after the model loads.
//
// We return a small "viewer" object that the rest of the app uses.
// ----------------------------------------------------------------------------

import {
  ACESFilmicToneMapping,
  AmbientLight,
  Color,
  DirectionalLight,
  EquirectangularReflectionMapping,
  HemisphereLight,
  LinearFilter,
  MeshPhysicalMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { createDiamondMaterial, shouldUseDiamondShader } from './diamondShaderMaterial.js';
import { applyPreset, findPreset } from './applyPreset.js';
import materialPresets from '../data/materialPresets.json';

// Mobile detection drives a few perf tradeoffs (lower pixel ratio cap, lower
// transmission render target resolution, halved dispersion). We treat every
// touch-primary device as "mobile" — iPhone, iPad, Android, plus iPadOS which
// reports as Mac in UA but exposes touch points.
function detectMobile() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  if (/iPhone|iPod|Android|Mobile/i.test(ua)) return true;
  // iPadOS 13+ masquerades as Mac. Differentiate by touch support.
  if (/iPad/.test(ua)) return true;
  if (
    navigator.platform === 'MacIntel' &&
    typeof navigator.maxTouchPoints === 'number' &&
    navigator.maxTouchPoints > 1
  ) {
    return true;
  }
  return false;
}

/**
 * Create a Three.js scene mounted inside `container`.
 *
 * @param {HTMLElement} container - The DOM element to attach the canvas to.
 * @returns {{
 *   renderer: WebGLRenderer,
 *   scene: Scene,
 *   camera: PerspectiveCamera,
 *   controls: OrbitControls,
 *   canvas: HTMLCanvasElement,
 *   setSize: (w: number, h: number) => void,
 *   start: () => void,
 *   stop: () => void,
 *   applyMaterialEnvironments: (
 *     root: import('three').Object3D,
 *     overrides?: Record<string, Record<string, unknown>> | null,
 *     scale?: number
 *   ) => Promise<void>,
 *   environments: { metal: import('three').Texture | null, gem: import('three').Texture | null },
 *   lights: {
 *     ambient: import('three').AmbientLight,
 *     hemi: import('three').HemisphereLight,
 *     key: import('three').DirectionalLight,
 *     fill: import('three').DirectionalLight,
 *     rim: import('three').DirectionalLight
 *   }
 * }}
 */
export function createScene(container, { canvasClass = 'viewer-canvas' } = {}) {
  // ============================================================================
  // SCENE CONFIGURATION — Adjust these to customize appearance & behavior
  // ============================================================================

  const isMobile = detectMobile();

  const SCENE_CONFIG = {
    backgroundColor: '#f4f4f5',    // Super light grey, almost white
  };

  const CAMERA_CONFIG = {
    fov: 10,                       // Field of view in degrees (lower = more zoomed in)
    initialPosition: [0, 0, 3],    // Starting camera position [x, y, z]
    nearPlane: 0.01,               // Objects closer than this won't render
    farPlane: 100,                 // Objects farther than this won't render
  };

  // Lower exposure than before (was 2.4) so highlight separation in the gem
  // HDR survives tonemapping. Diamond "fire" depends on near-clipped pinpoint
  // highlights against dark facets — a high exposure crushes that contrast.
  // EnvMapIntensity on the gem material is bumped to compensate.
  const RENDERER_CONFIG = {
    toneMappingExposure: 0.4,
    // iPhones/iPads commonly report DPR 3, which makes the transmission pass
    // (which renders at full canvas resolution) ~9× as expensive as it
    // appears. Cap aggressively on mobile.
    pixelRatioCap: isMobile ? 1.5 : 2,
    // Three r170+: scales the resolution of the internal transmission
    // render target. Halving on mobile is essentially invisible because the
    // result is blurred by roughness/thickness anyway.
    transmissionResolutionScale: isMobile ? 0.5 : 1.0,
  };

  // Multiplier on scene.environment's contribution to all PBR materials.
  // Three.js >= 0.165. Useful when the HDR itself is on the dim side and you
  // want to brighten indirect light without re-exporting the map.
  const SCENE_ENV_INTENSITY = 1.0;

  // Direct lights are kept moderate. Diamond fire wants dark facets, but the
  // metal HDR is a soft studio softbox that needs directional lights to
  // shape highlights and avoid looking lifeless. These are about half the
  // original values — enough to read on metal, not so bright that they
  // crush the gem's contrast.
  const LIGHTING_CONFIG = {
    ambientIntensity: 0.4,
    hemisphereIntensity: 0.4,
    keyLightIntensity: 3.0,
    fillLightIntensity: 1.5,
    rimLightIntensity: 1.5,
  };

  const LIGHT_POSITIONS = {
    keyLight: [2.5, 3, 2],         // Bright light from upper right
    fillLight: [-3, 1.5, 1.5],     // Soft light from upper left
    rimLight: [0, 2, -3],          // Warm light from behind
  };

  const CONTROLS_CONFIG = {
    dampingFactor: 0.08,           // Smoothness of rotation (lower = smoother)
    rotateSpeed: 0.7,              // How responsive to drag gestures
    zoomSpeed: 0.8,                // How responsive to scroll/pinch
    panSpeed: 0.6,                 // How responsive to middle-click drag
    minDistance: 0.05,             // Closest zoom distance
    maxDistance: 50,               // Farthest zoom distance
    autoRotateSpeed: 0.8,          // Speed of auto-rotation if enabled
  };

  // Vite's BASE_URL is the path prefix the site is served from. On localhost
  // it's "/"; on GitHub Pages project sites it's "/<repo>/". Without this,
  // absolute paths like "/env_gem_001.exr" 404 on Pages because they resolve
  // to the org root instead of the project root.
  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';

  // Two environments: a soft studio map for metals, and a contrastier map
  // with stronger pinpoint highlights for gems. Loader is picked from the
  // file extension (.hdr -> HDRLoader, .exr -> EXRLoader).
  const HDRI_CONFIG = {
    enabled: true,
    metal: {
      path: `${baseUrl}env_metal_014.hdr`,  // Studio-softbox HDR for metals
      // Bumped from 1.5 to compensate for the lower toneMappingExposure.
      // Metal needs a brighter env to read as polished rather than dull.
      intensity: 2.5,
    },
    gem: {
      path: `${baseUrl}env_gem_001.exr`,    // Contrasty EXR for gem fire/sparkle
      // Bumped from 2.0 because exposure was lowered from 2.4 -> 1.5; the
      // gem now depends more on its envMap than on the global tonemap.
      intensity: 2.6,
    },
  };

  // ============================================================================
  // SCENE SETUP — Use configurations above
  // ============================================================================

  const scene = new Scene();
  scene.background = new Color(SCENE_CONFIG.backgroundColor);
  scene.environmentIntensity = SCENE_ENV_INTENSITY;

  const camera = new PerspectiveCamera(
    CAMERA_CONFIG.fov,
    1,
    CAMERA_CONFIG.nearPlane,
    CAMERA_CONFIG.farPlane
  );
  camera.position.set(...CAMERA_CONFIG.initialPosition);

  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, RENDERER_CONFIG.pixelRatioCap));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = RENDERER_CONFIG.toneMappingExposure;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  // Three r170+: scales the internal transmission render target. Older
  // versions silently ignore the property, so the assignment is safe.
  if ('transmissionResolutionScale' in renderer) {
    renderer.transmissionResolutionScale = RENDERER_CONFIG.transmissionResolutionScale;
  }

  const canvas = renderer.domElement;
  canvas.classList.add(canvasClass);
  container.appendChild(canvas);

  // Add lights using configuration
  const ambientLight = new AmbientLight(0xffffff, LIGHTING_CONFIG.ambientIntensity);
  scene.add(ambientLight);

  const hemiLight = new HemisphereLight(0xffffff, 0x1a1a1f, LIGHTING_CONFIG.hemisphereIntensity);
  scene.add(hemiLight);

  const keyLight = new DirectionalLight(0xffffff, LIGHTING_CONFIG.keyLightIntensity);
  keyLight.position.set(...LIGHT_POSITIONS.keyLight);
  scene.add(keyLight);

  const fillLight = new DirectionalLight(0xffffff, LIGHTING_CONFIG.fillLightIntensity);
  fillLight.position.set(...LIGHT_POSITIONS.fillLight);
  scene.add(fillLight);

  const rimLight = new DirectionalLight(0xfff2dc, LIGHTING_CONFIG.rimLightIntensity);
  rimLight.position.set(...LIGHT_POSITIONS.rimLight);
  scene.add(rimLight);

  const lights = {
    ambient: ambientLight,
    hemi: hemiLight,
    key: keyLight,
    fill: fillLight,
    rim: rimLight
  };

  // ----- HDR environments -----
  // Both HDRs are equirectangular. We pre-filter them with PMREMGenerator so
  // they can be sampled by PBR materials at any roughness without ringing.
  // For the gem map we ALSO keep the raw equirect float texture around — the
  // diamond shader samples it directly with refracted ray directions, which
  // needs sharp (un-prefiltered) data.
  const environments = { metal: null, gem: null };
  // Raw equirect textures, fed to the custom diamond shader. Mirrors
  // `environments` keys for symmetry.
  const equirectEnvironments = { metal: null, gem: null };
  let envMapsReady;

  if (HDRI_CONFIG.enabled) {
    const pmrem = new PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const hdrLoader = new HDRLoader();
    const exrLoader = new EXRLoader();

    // Pick the right loader based on file extension. Both produce equirect
    // float textures we can hand straight to PMREMGenerator.
    const loaderFor = (path) => {
      const ext = path.split('.').pop().toLowerCase();
      if (ext === 'exr') return exrLoader;
      return hdrLoader;
    };

    const loadEnv = (path, { keepEquirect = false } = {}) => new Promise((resolve, reject) => {
      loaderFor(path).load(
        path,
        (texture) => {
          texture.mapping = EquirectangularReflectionMapping;
          const prefiltered = pmrem.fromEquirectangular(texture).texture;
          if (keepEquirect) {
            // Diamond shader wants sharp linear sampling, no mips. The texture
            // is already linear-float from the HDR/EXR loader.
            texture.minFilter = LinearFilter;
            texture.magFilter = LinearFilter;
            texture.generateMipmaps = false;
            texture.needsUpdate = true;
            resolve({ prefiltered, equirect: texture });
          } else {
            texture.dispose();
            resolve({ prefiltered, equirect: null });
          }
        },
        undefined,
        reject
      );
    });

    envMapsReady = Promise.all([
      loadEnv(HDRI_CONFIG.metal.path),
      loadEnv(HDRI_CONFIG.gem.path, { keepEquirect: true })
    ])
      .then(([metalRes, gemRes]) => {
        environments.metal = metalRes.prefiltered;
        environments.gem = gemRes.prefiltered;
        equirectEnvironments.gem = gemRes.equirect;
        // Default scene environment to the metal map so anything we don't
        // classify still gets sensible reflections out of the box.
        scene.environment = metalRes.prefiltered;
        pmrem.dispose();
        requestRender();
      })
      .catch((err) => {
        console.error('[viewer] failed to load HDR environments', err);
        pmrem.dispose();
      });
  } else {
    envMapsReady = Promise.resolve();
  }

  /**
   * Decide whether a material should use the gem environment. We look at
   * physical properties first (transmission / IOR / metalness) and fall back
   * to the material name. Designers commonly name diamond materials
   * "Diamond", "Gem", "CZ", etc.
   * @param {import('three').Material} material
   */
  function isGemMaterial(material) {
    if (!material) return false;
    if (typeof material.transmission === 'number' && material.transmission > 0) return true;
    if (
      typeof material.ior === 'number' && material.ior >= 1.4 &&
      (material.metalness ?? 0) < 0.3
    ) {
      return true;
    }
    const name = (material.name || '').toLowerCase();
    return /diamond|gem|stone|sapphire|ruby|emerald|crystal|cz|topaz|amethyst/.test(name);
  }

  // Override-sidecar entries use the same shape as material presets, so push
  // them through the shared applyPreset() pipeline. Anything not whitelisted
  // there (NUMERIC_PROPS / COLOR_PROPS / envMap routing / size-scoped scaling)
  // is silently ignored, which keeps override files honest.
  function applyOverrideToMaterial(mat, override, scale = 1) {
    if (!override) return;
    applyPreset(mat, override, environments, scale);
  }

  /**
   * Pick which gem preset (`diamond` vs `moissanite`) to seed a freshly-swapped
   * BVH diamond material with. Mirrors the matching heuristic in
   * shouldUseDiamondShader() so the preset and the swap decision agree.
   *
   * @param {import('three').Material} mat
   * @param {{ preset?: string } | null} override
   * @param {import('three').Mesh | null} mesh
   */
  function pickDiamondPresetId(mat, override, mesh) {
    if (override?.preset && findPreset(materialPresets, override.preset)) {
      return override.preset;
    }
    const matName = (mat?.name || '').toLowerCase();
    const meshName = (mesh?.name || '').toLowerCase();
    if (/moissanite/.test(matName) || /moissanite/.test(meshName)) return 'moissanite';
    return 'diamond';
  }

  /**
   * Replace a material on a mesh with our custom diamond shader, preserving
   * the original's name so the inspector + override sidecar still address it
   * the same way. Construction values are sourced from the matching preset in
   * materialPresets.json — never from the inbound GLB material — so the
   * post-swap appearance matches what "Apply preset" in the inspector would
   * produce. Per-mesh override sidecars layer on top via applyOverride below.
   *
   * @param {import('three').Mesh} mesh
   * @param {import('three').Material} oldMat
   * @param {number} matIndex - Index in mesh.material if it's an array
   * @returns {import('three').Material}
   */
  function swapToDiamondShader(mesh, oldMat, matIndex) {
    // The BVH ray tracer requires WebGL2 (integer samplers, inverse(mat4)
    // built-in). Some Windows + older-driver combos quietly fall back to
    // WebGL1 — there the shader fails to compile and the mesh draws nothing,
    // making the diamond invisible. Detect upfront and fall back to a
    // MeshPhysicalMaterial with diamond-tuned transmission instead.
    const isWebGL2 = renderer.capabilities?.isWebGL2 === true;

    const presetId = pickDiamondPresetId(oldMat, null, mesh);
    const preset = findPreset(materialPresets, presetId) || {};

    // Build the BVH path; createDiamondMaterial returns null if the geometry
    // can't be indexed or BVH construction throws.
    const diamondMat = isWebGL2
      ? createDiamondMaterial({
          name: oldMat.name || 'Diamond',
          color: typeof preset.color === 'string' ? preset.color : 0xffffff,
          ior: preset.ior,
          dispersion: preset.dispersion,
          bounces: preset.bounces,
          fresnel: preset.reflectivity,
          envMap: equirectEnvironments.gem,
          envMapIntensity:
            typeof preset.envMapIntensity === 'number'
              ? preset.envMapIntensity
              : HDRI_CONFIG.gem.intensity,
          geometry: mesh.geometry
        })
      : null;

    let nextMat;
    if (diamondMat) {
      nextMat = diamondMat;
      console.log(`[viewer] swapped "${oldMat.name || mesh.name}" to diamond shader (BVH ray tracer)`);
    } else {
      nextMat = buildPhysicalDiamondFallback(oldMat);
      console.warn(
        `[viewer] swapped "${oldMat.name || mesh.name}" to MeshPhysicalMaterial fallback`,
        isWebGL2 ? '(BVH build failed)' : '(WebGL1 — BVH ray tracer needs WebGL2)'
      );
    }

    if (Array.isArray(mesh.material)) {
      mesh.material[matIndex] = nextMat;
    } else {
      mesh.material = nextMat;
    }
    oldMat.dispose?.();
    return nextMat;
  }

  /**
   * Fallback diamond when the BVH ray tracer can't run. Uses Three's built-in
   * `MeshPhysicalMaterial` with transmission + ior + dispersion. Less dramatic
   * than the ray tracer (no internal multi-bounce facet detail) but always
   * renders something visible on every device.
   *
   * @param {import('three').Material} oldMat
   * @returns {import('three').MeshPhysicalMaterial}
   */
  function buildPhysicalDiamondFallback(oldMat) {
    const mat = new MeshPhysicalMaterial({
      name: oldMat.name || 'Diamond',
      color: oldMat.color ? oldMat.color.getHex() : 0xffffff,
      metalness: 0,
      roughness: 0,
      transmission: 1,
      ior: 2.417,
      dispersion: 0.5,
      thickness: 0.5,
      envMap: environments.gem,
      envMapIntensity: HDRI_CONFIG.gem.intensity
    });
    return mat;
  }

  /**
   * Walk a loaded model and assign the appropriate envMap + envMapIntensity
   * to every material based on whether it looks like metal or a gem. Safe to
   * call before HDRs finish loading — it awaits internally.
   *
   * If an `overrides` object (keyed by material name) is provided, it's
   * applied on top of the heuristic so designer-tuned values from the
   * sidecar JSON win over the default classification.
   *
   * Materials that look like diamond / moissanite are swapped for a custom
   * `DiamondShaderMaterial` that samples the raw gem HDR directly with
   * refracted view rays — much faster on iPhone than the per-frame
   * transmission render pass MeshPhysicalMaterial would otherwise trigger,
   * and gives a more dramatic "fire" look.
   *
   * `scale` (typically the model's bounding radius) multiplies size-scoped
   * override props (thickness, attenuationDistance) so values authored as
   * fractions of the piece survive a re-export at a different unit scale.
   *
   * @param {import('three').Object3D} root
   * @param {Record<string, Record<string, unknown>> | null} [overrides]
   * @param {number} [scale]
   */
  async function applyMaterialEnvironments(root, overrides = null, scale = 1) {
    await envMapsReady;
    if (!environments.metal || !environments.gem) return;

    root.traverse((obj) => {
      if (!obj.isMesh) return;
      processMeshMaterials(obj, overrides, scale);
    });
    requestRender();
  }

  /**
   * Apply environment + override + class-swap logic to one mesh's materials.
   * Shared between the initial model walk and the inspector's "apply preset"
   * path so behaviour is identical regardless of when an override changes.
   *
   * @param {import('three').Mesh} obj
   * @param {Record<string, Record<string, unknown>> | null} overrides
   * @param {number} scale
   */
  function processMeshMaterials(obj, overrides, scale) {
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (let i = 0; i < mats.length; i++) {
      let mat = mats[i];
      if (!mat) continue;

      // Override lookup falls back to the mesh name, since the GLB exporter
      // commonly leaves materials with generic names like "Material.001"
      // even when the mesh is "Diamond_Round".
      const matOverride =
        (overrides && mat.name && overrides[mat.name]) ||
        (overrides && obj.name && overrides[obj.name]) ||
        null;

      // Diamond / moissanite path: replace with the refraction shader.
      // Skip when there's no equirect gem map to feed it.
      if (
        equirectEnvironments.gem &&
        shouldUseDiamondShader(mat, matOverride, obj)
      ) {
        if (mat.userData?.isDiamondShaderMaterial) {
          if (matOverride) applyOverrideToMaterial(mat, matOverride, scale);
          continue;
        }
        mat = swapToDiamondShader(obj, mat, i);
        if (Array.isArray(obj.material)) obj.material[i] = mat;
        else obj.material = mat;
        if (matOverride) applyOverrideToMaterial(mat, matOverride, scale);
        continue;
      }

      const gem = isGemMaterial(mat);
      mat.envMap = gem ? environments.gem : environments.metal;
      mat.envMapIntensity = gem ? HDRI_CONFIG.gem.intensity : HDRI_CONFIG.metal.intensity;
      mat.needsUpdate = true;

      if (matOverride) {
        applyOverrideToMaterial(mat, matOverride, scale);
      }
    }
  }

  /**
   * Re-evaluate one mesh's material classes + properties given an updated
   * override entry. Used by the inspector when the user applies a preset
   * that would change the shader (e.g. picking the refraction-shader diamond
   * over a stock PBR material).
   *
   * @param {import('three').Mesh} mesh
   * @param {Record<string, Record<string, unknown>>} overrides
   * @param {number} scale
   */
  async function reapplyMeshMaterial(mesh, overrides, scale = 1) {
    await envMapsReady;
    if (!environments.metal || !environments.gem) return;
    processMeshMaterials(mesh, overrides, scale);
    requestRender();
  }

  // Configure user interaction
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = CONTROLS_CONFIG.dampingFactor;
  controls.rotateSpeed = CONTROLS_CONFIG.rotateSpeed;
  controls.zoomSpeed = CONTROLS_CONFIG.zoomSpeed;
  controls.panSpeed = CONTROLS_CONFIG.panSpeed;
  controls.enablePan = true;
  controls.minDistance = CONTROLS_CONFIG.minDistance;
  controls.maxDistance = CONTROLS_CONFIG.maxDistance;
  controls.autoRotateSpeed = CONTROLS_CONFIG.autoRotateSpeed;

  /** Resize the canvas + camera to match a new container size. */
  function setSize(width, height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
    requestRender();
  }

  // ------- Render loop -------
  // Render-on-demand instead of fixed 60Hz. On iPhone, drawing every frame
  // even when nothing has changed drains battery and causes thermal throttling
  // that hurts framerate during actual interaction.
  //
  // We schedule a render whenever:
  //   - the user drags/zooms (OrbitControls 'change')
  //   - the canvas resizes
  //   - the model loads or materials change
  //   - auto-rotate is on (we draw a continuous loop while it's active)
  //
  // Damping is handled by polling controls.update(): if it returns true the
  // controls are still settling and we keep drawing for one more frame.

  let pending = false;
  let running = false;

  function drawFrame() {
    pending = false;
    if (!running) return;
    // controls.update() returns true while damping or auto-rotating is still
    // mutating the camera. As long as that's true we keep redrawing; once it
    // returns false the next frame settles and the loop falls idle.
    const stillAnimating = controls.update();
    renderer.render(scene, camera);
    if (stillAnimating || controls.autoRotate) requestRender();
  }

  function requestRender() {
    if (!running || pending) return;
    pending = true;
    requestAnimationFrame(drawFrame);
  }

  // Any user interaction with OrbitControls (drag, zoom, pan) fires 'change'.
  // That, plus explicit requestRender() calls from callers that mutate the
  // scene, is enough to keep the canvas correct without a permanent rAF loop.
  controls.addEventListener('change', requestRender);

  function start() {
    if (running) return;
    running = true;
    requestRender();
  }

  function stop() {
    if (!running) return;
    running = false;
    pending = false;
  }

  return {
    renderer,
    scene,
    camera,
    controls,
    canvas,
    setSize,
    start,
    stop,
    requestRender,
    applyMaterialEnvironments,
    reapplyMeshMaterial,
    environments,
    equirectEnvironments,
    envMapsReady,
    lights,
    isMobile
  };
}
