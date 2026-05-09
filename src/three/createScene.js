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
  PCFSoftShadowMap,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { createDiamondMaterial, shouldUseDiamondShader } from './diamondShaderMaterial.js';
import { createDiamondMatcapMaterial } from './diamondMatcapMaterial.js';

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
export function createScene(container) {
  // ============================================================================
  // SCENE CONFIGURATION — Adjust these to customize appearance & behavior
  // ============================================================================

  const isMobile = detectMobile();

  const SCENE_CONFIG = {
    backgroundColor: '#f4f4f5',    // Super light grey, almost white
  };

  const CAMERA_CONFIG = {
    fov: 35,                       // Field of view in degrees (lower = more zoomed in)
    initialPosition: [0, 0, 3],    // Starting camera position [x, y, z]
    nearPlane: 0.01,               // Objects closer than this won't render
    farPlane: 100,                 // Objects farther than this won't render
  };

  // Lower exposure than before (was 2.4) so highlight separation in the gem
  // HDR survives tonemapping. Diamond "fire" depends on near-clipped pinpoint
  // highlights against dark facets — a high exposure crushes that contrast.
  // EnvMapIntensity on the gem material is bumped to compensate.
  const RENDERER_CONFIG = {
    toneMappingExposure: 1.5,
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

  // Two environments: a soft studio map for metals, and a contrastier map
  // with stronger pinpoint highlights for gems. Loader is picked from the
  // file extension (.hdr -> RGBELoader, .exr -> EXRLoader).
  const HDRI_CONFIG = {
    enabled: true,
    metal: {
      path: '/env_metal_014.hdr',  // Studio-softbox HDR for metals
      // Bumped from 1.5 to compensate for the lower toneMappingExposure.
      // Metal needs a brighter env to read as polished rather than dull.
      intensity: 2.5,
    },
    gem: {
      path: '/env_gem_001.exr',    // Contrasty EXR for gem fire/sparkle
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
  canvas.classList.add('viewer-canvas');
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
    const rgbeLoader = new RGBELoader();
    const exrLoader = new EXRLoader();

    // Pick the right loader based on file extension. Both produce equirect
    // float textures we can hand straight to PMREMGenerator.
    const loaderFor = (path) => {
      const ext = path.split('.').pop().toLowerCase();
      if (ext === 'exr') return exrLoader;
      return rgbeLoader;
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

  // Numeric PBR props the override sidecar is allowed to set. Anything outside
  // this list is ignored to keep override files from drifting into a free-for-
  // all of arbitrary material mutations.
  const OVERRIDE_NUMERIC_PROPS = [
    'metalness',
    'roughness',
    'transmission',
    'thickness',
    'ior',
    'dispersion',
    'clearcoat',
    'clearcoatRoughness',
    'sheen',
    'envMapIntensity',
    'opacity',
    'attenuationDistance'
  ];

  // Keys whose value is a hex color string and whose material slot is a
  // Three.js Color (set via slot.set('#rrggbb')). Kept in sync with
  // src/three/applyPreset.js's COLOR_PROPS.
  const OVERRIDE_COLOR_PROPS = ['color', 'attenuationColor', 'sheenColor', 'emissive'];

  // Override props authored in model-radius units. Multiplied by `scale`
  // (= frame.radius) when applied so a sidecar saying `thickness: 0.3` reads
  // as "0.3 of the model's radius" regardless of the GLB's export scale.
  // Kept in sync with applyPreset.js's SIZE_SCOPED_PROPS.
  const OVERRIDE_SIZE_SCOPED_PROPS = new Set(['thickness', 'attenuationDistance']);

  function applyOverrideToMaterial(mat, override, scale = 1) {
    if (!override) return;
    if (override.envMap === 'metal') mat.envMap = environments.metal;
    else if (override.envMap === 'gem') mat.envMap = environments.gem;
    else if (override.envMap === 'none') mat.envMap = null;

    for (const prop of OVERRIDE_NUMERIC_PROPS) {
      if (typeof override[prop] === 'number' && typeof mat[prop] === 'number') {
        mat[prop] = OVERRIDE_SIZE_SCOPED_PROPS.has(prop)
          ? override[prop] * scale
          : override[prop];
      }
    }
    for (const prop of OVERRIDE_COLOR_PROPS) {
      const value = override[prop];
      if (typeof value !== 'string') continue;
      const slot = mat[prop];
      if (slot && typeof slot.set === 'function') slot.set(value);
    }
    mat.needsUpdate = true;
  }

  /**
   * Replace a material on a mesh with our custom diamond shader, preserving
   * the original's name and color so the inspector + override sidecar still
   * address it the same way.
   *
   * @param {import('three').Mesh} mesh
   * @param {import('three').Material} oldMat
   * @param {number} matIndex - Index in mesh.material if it's an array
   * @returns {import('three').ShaderMaterial}
   */
  function swapToDiamondShader(mesh, oldMat, matIndex) {
    const diamondMat = createDiamondMaterial({
      name: oldMat.name || 'Diamond',
      color: oldMat.color ? oldMat.color.getHex() : 0xffffff,
      ior: typeof oldMat.ior === 'number' ? oldMat.ior : 2.417,
      dispersion: typeof oldMat.dispersion === 'number' ? oldMat.dispersion : 0.8,
      envMap: equirectEnvironments.gem,
      envMapIntensity: HDRI_CONFIG.gem.intensity
    });
    if (Array.isArray(mesh.material)) {
      mesh.material[matIndex] = diamondMat;
    } else {
      mesh.material = diamondMat;
    }
    console.log(`[viewer] swapped "${oldMat.name || mesh.name}" to diamond shader`);
    oldMat.dispose?.();
    return diamondMat;
  }

  // Matcap textures are colour data sampled in the fragment shader. We load
  // each unique URL once and cache it so an override referencing the same
  // image across multiple stones doesn't re-fetch.
  const matcapCache = new Map(); // url -> Texture
  const textureLoader = new TextureLoader();

  function loadMatcapTexture(url) {
    if (!url) return null;
    const cached = matcapCache.get(url);
    if (cached) return cached;
    const tex = textureLoader.load(
      url,
      // Once it actually loads, kick a render so the canvas updates without
      // requiring user interaction.
      () => requestRender(),
      undefined,
      (err) => console.error('[viewer] failed to load matcap', url, err)
    );
    tex.colorSpace = SRGBColorSpace;
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.generateMipmaps = false;
    tex.flipY = true;
    matcapCache.set(url, tex);
    return tex;
  }

  /**
   * Replace a material with our matcap-based diamond material. Matcap is the
   * cheapest possible diamond renderer: one texture lookup per pixel, no HDR
   * needed, no transmission pass. Driven by a `matcap: <url>` field in the
   * preset / override sidecar (typically combined with `shader: "matcap"`).
   *
   * @param {import('three').Mesh} mesh
   * @param {import('three').Material} oldMat
   * @param {number} matIndex
   * @param {string} matcapUrl
   * @returns {import('three').ShaderMaterial}
   */
  function swapToMatcap(mesh, oldMat, matIndex, matcapUrl) {
    const matcapTex = loadMatcapTexture(matcapUrl);
    const matcapMat = createDiamondMatcapMaterial({
      name: oldMat.name || 'Diamond',
      color: oldMat.color ? oldMat.color.getHex() : 0xffffff,
      matcap: matcapTex,
      intensity: 1.0
    });
    if (Array.isArray(mesh.material)) {
      mesh.material[matIndex] = matcapMat;
    } else {
      mesh.material = matcapMat;
    }
    console.log(`[viewer] swapped "${oldMat.name || mesh.name}" to matcap (${matcapUrl})`);
    oldMat.dispose?.();
    return matcapMat;
  }

  /**
   * Should this material/mesh be rendered as a matcap? Triggered when the
   * preset or override sidecar specifies `shader: "matcap"` or simply a
   * `matcap: "<url>"` string.
   *
   * @param {import('three').Material} mat
   * @param {{ shader?: string, matcap?: string } | null} override
   * @returns {string | null} The matcap URL to use, or null.
   */
  function matcapUrlFor(mat, override) {
    if (mat?.userData?.isDiamondMatcapMaterial) {
      // Already a matcap; no swap needed but caller can refresh the texture.
      return typeof override?.matcap === 'string' ? override.matcap : null;
    }
    if (override?.shader === 'matcap' && typeof override?.matcap === 'string') {
      return override.matcap;
    }
    if (typeof override?.matcap === 'string' && override.matcap.length > 0) {
      return override.matcap;
    }
    return null;
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

      // Highest priority: explicit matcap request from preset/override.
      const matcapUrl = matcapUrlFor(mat, matOverride);
      if (matcapUrl) {
        // Already on a matcap material with the same texture — just refresh
        // the override and skip the swap.
        if (
          mat.userData?.isDiamondMatcapMaterial &&
          uniformMatcapUrl(mat) === matcapUrl
        ) {
          if (matOverride) applyOverrideToMaterial(mat, matOverride, scale);
          continue;
        }
        mat = swapToMatcap(obj, mat, i, matcapUrl);
        if (Array.isArray(obj.material)) obj.material[i] = mat;
        else obj.material = mat;
        if (matOverride) applyOverrideToMaterial(mat, matOverride, scale);
        continue;
      }

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

  function uniformMatcapUrl(mat) {
    // Cache lookup is the source of truth for which URL produced this texture.
    const tex = mat.matcap;
    if (!tex) return null;
    for (const [url, cachedTex] of matcapCache.entries()) {
      if (cachedTex === tex) return url;
    }
    return null;
  }

  /**
   * Re-evaluate one mesh's material classes + properties given an updated
   * override entry. Used by the inspector when the user applies a preset
   * that would change the shader (e.g. picking the matcap diamond preset
   * over the refraction one).
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
    lights,
    isMobile
  };
}
