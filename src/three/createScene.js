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
  // The Scene is the root container for everything 3D.
  const scene = new Scene();
  // Dark, neutral background — keeps the focus on the jewelry.
  scene.background = new Color('#0b0b0c');

  // PerspectiveCamera(fov, aspect, near, far). The aspect gets fixed in setSize.
  const camera = new PerspectiveCamera(35, 1, 0.01, 100);
  camera.position.set(0, 0, 3);

  // The renderer turns the scene + camera into pixels on a <canvas>.
  const renderer = new WebGLRenderer({
    antialias: true,         // smooth edges
    alpha: false,            // we have our own background
    powerPreference: 'high-performance'
  });
  // Cap the pixel ratio at 2 — beyond that you waste GPU for no visible gain.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // Color space + tone mapping make GLB materials look how the artist intended.
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.8;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  const canvas = renderer.domElement;
  canvas.classList.add('viewer-canvas');
  container.appendChild(canvas);

  // ===== LIGHTING CONFIGURATION =====
  // Adjust these values to control overall brightness. Goal: jewelry box feel.
  // Key: bright top light | Fill: soft opposite side | Rim: warm edge glow
  // FUTURE: replace with HDRI environment map for physically accurate reflections.
  const LIGHTING = {
    ambientIntensity: 0.8,        // Uniform light preventing pitch-black shadows
    hemisphereIntensity: 0.7,     // Sky light (above) + ground light (below)
    keyLightIntensity: 4.0,       // Primary bright light (up-right)
    fillLightIntensity: 2.5,      // Secondary soft light (opposite side)
    rimLightIntensity: 2.5,       // Back warm light for edge glow
  };

  scene.add(new AmbientLight(0xffffff, LIGHTING.ambientIntensity));
  scene.add(new HemisphereLight(0xffffff, 0x1a1a1f, LIGHTING.hemisphereIntensity));

  const keyLight = new DirectionalLight(0xffffff, LIGHTING.keyLightIntensity);
  keyLight.position.set(2.5, 3, 2);
  scene.add(keyLight);

  const fillLight = new DirectionalLight(0xffffff, LIGHTING.fillLightIntensity);
  fillLight.position.set(-3, 1.5, 1.5);
  scene.add(fillLight);

  const rimLight = new DirectionalLight(0xfff2dc, LIGHTING.rimLightIntensity);
  rimLight.position.set(0, 2, -3);
  scene.add(rimLight);

  // ------- Controls -------
  // OrbitControls lets the user drag to rotate, scroll/pinch to zoom, etc.
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;   // smooth, "weighted" feel
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.7;
  controls.zoomSpeed = 0.8;
  controls.panSpeed = 0.6;
  controls.enablePan = true;
  controls.minDistance = 0.05;
  controls.maxDistance = 50;
  controls.autoRotateSpeed = 0.8;

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
