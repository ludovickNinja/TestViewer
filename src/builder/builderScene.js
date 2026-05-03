// ----------------------------------------------------------------------------
// builderScene.js
// ----------------------------------------------------------------------------
// Builder-specific Three.js scene. Self-contained so it cannot affect the
// existing /viewer scene. Uses the same library versions but a simpler
// lighting setup tuned for a metal jewelry preview against a dark background.
// ----------------------------------------------------------------------------

import {
  ACESFilmicToneMapping,
  AmbientLight,
  Color,
  DirectionalLight,
  HemisphereLight,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const DEFAULT_CAMERA_POSITION = [0.06, 0.04, 0.18];
const DEFAULT_TARGET = [0, 0, 0];

/**
 * Create the builder scene. The returned object exposes everything the rest
 * of the builder modules need (renderer, scene, camera, controls, raycaster
 * canvas DOM element, plus lifecycle helpers).
 *
 * @param {HTMLElement} container - The DOM element to mount the canvas in.
 */
export function createBuilderScene(container) {
  const scene = new Scene();
  // Neutral dark background — easier on the eyes than pure black and lets
  // polished metal read clearly.
  scene.background = new Color('#15161a');

  const camera = new PerspectiveCamera(35, 1, 0.001, 100);
  camera.position.set(...DEFAULT_CAMERA_POSITION);

  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.4;

  const canvas = renderer.domElement;
  canvas.classList.add('builder-canvas');
  container.appendChild(canvas);

  // Lighting tuned for jewelry on a dark background. We don't load HDR here
  // to keep the builder lightweight and avoid coupling to viewer assets.
  const ambient = new AmbientLight(0xffffff, 0.55);
  scene.add(ambient);

  const hemi = new HemisphereLight(0xffffff, 0x202028, 0.6);
  scene.add(hemi);

  const key = new DirectionalLight(0xffffff, 3.0);
  key.position.set(2.5, 3, 2);
  scene.add(key);

  const fill = new DirectionalLight(0xffffff, 1.6);
  fill.position.set(-3, 1.5, 1.5);
  scene.add(fill);

  const rim = new DirectionalLight(0xfff2dc, 1.8);
  rim.position.set(0, 2, -3);
  scene.add(rim);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.7;
  controls.zoomSpeed = 0.8;
  controls.panSpeed = 0.6;
  controls.minDistance = 0.005;
  controls.maxDistance = 50;
  controls.target.set(...DEFAULT_TARGET);

  function setSize(width, height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  }

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

  /** Reset camera + OrbitControls target to their default values. */
  function resetView() {
    camera.position.set(...DEFAULT_CAMERA_POSITION);
    controls.target.set(...DEFAULT_TARGET);
    camera.up.set(0, 1, 0);
    controls.update();
  }

  /** Dispose GPU resources (called on page unload). */
  function dispose() {
    stop();
    controls.dispose();
    renderer.dispose();
    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
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
    resetView,
    dispose,
    defaultCameraPosition: new Vector3(...DEFAULT_CAMERA_POSITION),
    defaultTarget: new Vector3(...DEFAULT_TARGET)
  };
}
