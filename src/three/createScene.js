// ----------------------------------------------------------------------------
// createScene.js
// ----------------------------------------------------------------------------
// Sets up everything Three.js needs to draw the 3D viewer:
//   - WebGL renderer (the canvas)
//   - PerspectiveCamera (what the customer sees through)
//   - OrbitControls (drag to rotate, pinch/scroll to zoom, etc.)
//   - Studio-style lighting tuned for shiny jewelry
//
// We return a small "viewer" object that the rest of the app uses. Nothing
// in here is jewelry-specific except the lighting choices.
// ----------------------------------------------------------------------------

import {
  ACESFilmicToneMapping,
  AmbientLight,
  Color,
  DirectionalLight,
  HemisphereLight,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
 *   stop: () => void
 * }}
 */
export function createScene(container) {
  // ============================================================================
  // SCENE CONFIGURATION — Adjust these to customize appearance & behavior
  // ============================================================================

  const SCENE_CONFIG = {
    backgroundColor: '#0b0b0c',    // Dark background to focus on the object
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

  return { renderer, scene, camera, controls, canvas, setSize, start, stop };
}
