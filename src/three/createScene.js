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
  PCFSoftShadowMap,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

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
 *   applyMaterialEnvironments: (root: import('three').Object3D) => Promise<void>,
 *   environments: { metal: import('three').Texture | null, gem: import('three').Texture | null }
 * }}
 */
export function createScene(container) {
  // ============================================================================
  // SCENE CONFIGURATION — Adjust these to customize appearance & behavior
  // ============================================================================

  const SCENE_CONFIG = {
    backgroundColor: '#f4f4f5',    // Super light grey, almost white
  };

  const CAMERA_CONFIG = {
    fov: 35,                       // Field of view in degrees (lower = more zoomed in)
    initialPosition: [0, 0, 3],    // Starting camera position [x, y, z]
    nearPlane: 0.01,               // Objects closer than this won't render
    farPlane: 100,                 // Objects farther than this won't render
  };

  const RENDERER_CONFIG = {
    toneMappingExposure: 1.8,      // Overall brightness (higher = brighter)
    pixelRatioCap: 2,              // Max device pixel ratio (1-2 recommended)
  };

  const LIGHTING_CONFIG = {
    ambientIntensity: 0.8,         // Uniform light preventing pitch-black shadows
    hemisphereIntensity: 0.7,      // Sky light (above) + ground light (below)
    keyLightIntensity: 4.0,        // Primary bright light (up-right)
    fillLightIntensity: 2.5,       // Secondary soft light (opposite side)
    rimLightIntensity: 2.5,        // Back warm light for edge glow
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
      intensity: 1.0,              // envMapIntensity applied to metal materials
    },
    gem: {
      path: '/env_gem_001.exr',    // Contrasty EXR for gem fire/sparkle
      intensity: 1.4,              // Gems usually want a brighter env
    },
  };

  // ============================================================================
  // SCENE SETUP — Use configurations above
  // ============================================================================

  const scene = new Scene();
  scene.background = new Color(SCENE_CONFIG.backgroundColor);

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

  const canvas = renderer.domElement;
  canvas.classList.add('viewer-canvas');
  container.appendChild(canvas);

  // Add lights using configuration
  scene.add(new AmbientLight(0xffffff, LIGHTING_CONFIG.ambientIntensity));
  scene.add(new HemisphereLight(0xffffff, 0x1a1a1f, LIGHTING_CONFIG.hemisphereIntensity));

  const keyLight = new DirectionalLight(0xffffff, LIGHTING_CONFIG.keyLightIntensity);
  keyLight.position.set(...LIGHT_POSITIONS.keyLight);
  scene.add(keyLight);

  const fillLight = new DirectionalLight(0xffffff, LIGHTING_CONFIG.fillLightIntensity);
  fillLight.position.set(...LIGHT_POSITIONS.fillLight);
  scene.add(fillLight);

  const rimLight = new DirectionalLight(0xfff2dc, LIGHTING_CONFIG.rimLightIntensity);
  rimLight.position.set(...LIGHT_POSITIONS.rimLight);
  scene.add(rimLight);

  // ----- HDR environments -----
  // Both HDRs are equirectangular. We pre-filter them with PMREMGenerator so
  // they can be sampled by PBR materials at any roughness without ringing.
  const environments = { metal: null, gem: null };
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

    const loadEnv = (path) => new Promise((resolve, reject) => {
      loaderFor(path).load(
        path,
        (texture) => {
          texture.mapping = EquirectangularReflectionMapping;
          const prefiltered = pmrem.fromEquirectangular(texture).texture;
          texture.dispose();
          resolve(prefiltered);
        },
        undefined,
        reject
      );
    });

    envMapsReady = Promise.all([
      loadEnv(HDRI_CONFIG.metal.path),
      loadEnv(HDRI_CONFIG.gem.path)
    ])
      .then(([metalEnv, gemEnv]) => {
        environments.metal = metalEnv;
        environments.gem = gemEnv;
        // Default scene environment to the metal map so anything we don't
        // classify still gets sensible reflections out of the box.
        scene.environment = metalEnv;
        pmrem.dispose();
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

  /**
   * Walk a loaded model and assign the appropriate envMap + envMapIntensity
   * to every material based on whether it looks like metal or a gem. Safe to
   * call before HDRs finish loading — it awaits internally.
   * @param {import('three').Object3D} root
   */
  async function applyMaterialEnvironments(root) {
    await envMapsReady;
    if (!environments.metal || !environments.gem) return;

    root.traverse((obj) => {
      if (!obj.isMesh) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        if (!mat) continue;
        const gem = isGemMaterial(mat);
        mat.envMap = gem ? environments.gem : environments.metal;
        mat.envMapIntensity = gem ? HDRI_CONFIG.gem.intensity : HDRI_CONFIG.metal.intensity;
        mat.needsUpdate = true;
      }
    });
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
  }

  // ------- Render loop -------
  // requestAnimationFrame fires roughly 60 times per second. We update the
  // controls (for damping / auto-rotate) and re-render the scene each tick.
  let raf = 0;
  let running = false;

  function tick() {
    raf = requestAnimationFrame(tick);
    controls.update();
    renderer.render(scene, camera);
  }

  function start() {
    if (running) return;
    running = true;
    tick();
  }

  function stop() {
    if (!running) return;
    running = false;
    cancelAnimationFrame(raf);
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
    applyMaterialEnvironments,
    environments
  };
}
