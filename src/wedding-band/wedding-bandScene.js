// ----------------------------------------------------------------------------
// wedding-bandScene.js
// ----------------------------------------------------------------------------
// Three.js scene for the wedding band builder. Mirrors builderScene.js (same
// lighting tuned for polished metal on a dark background) but is fully self-
// contained so the wedding band page cannot affect the existing /builder or
// /viewer pages.
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

// Pulled in slightly from the builder default so the band (typically ~10 mm
// radius) frames well at first paint without needing a fit-to-object pass.
const DEFAULT_CAMERA_POSITION = [0.02, 0.018, 0.05];
const DEFAULT_TARGET = [0, 0, 0];

/**
 * Create the wedding band builder scene.
 *
 * @param {HTMLElement} container - The DOM element to mount the canvas in.
 */
export function createWeddingBandScene(container) {
  const scene = new Scene();
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
  canvas.classList.add('wedding-band-canvas');
  container.appendChild(canvas);

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

  function resetView() {
    camera.position.set(...DEFAULT_CAMERA_POSITION);
    controls.target.set(...DEFAULT_TARGET);
    camera.up.set(0, 1, 0);
    controls.update();
  }

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
