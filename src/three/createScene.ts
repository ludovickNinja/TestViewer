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

export interface ViewerScene {
  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera;
  controls: OrbitControls;
  canvas: HTMLCanvasElement;
  setSize: (width: number, height: number) => void;
  start: () => void;
  stop: () => void;
}

export function createScene(container: HTMLElement): ViewerScene {
  const scene = new Scene();
  scene.background = new Color('#0b0b0c');

  const camera = new PerspectiveCamera(35, 1, 0.01, 100);
  camera.position.set(0, 0, 3);

  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  const canvas = renderer.domElement;
  canvas.classList.add('viewer-canvas');
  container.appendChild(canvas);

  // Studio-style lighting suitable for jewelry.
  // Future: replace with HDRI environment map (PMREMGenerator + RGBELoader).
  const ambient = new AmbientLight(0xffffff, 0.35);
  scene.add(ambient);

  const hemi = new HemisphereLight(0xffffff, 0x1a1a1f, 0.4);
  scene.add(hemi);

  const keyLight = new DirectionalLight(0xffffff, 2.2);
  keyLight.position.set(2.5, 3, 2);
  keyLight.castShadow = false;
  scene.add(keyLight);

  const fillLight = new DirectionalLight(0xffffff, 1.1);
  fillLight.position.set(-3, 1.5, 1.5);
  scene.add(fillLight);

  const rimLight = new DirectionalLight(0xfff2dc, 1.4);
  rimLight.position.set(0, 2, -3);
  scene.add(rimLight);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.7;
  controls.zoomSpeed = 0.8;
  controls.panSpeed = 0.6;
  controls.enablePan = true;
  controls.minDistance = 0.05;
  controls.maxDistance = 50;
  controls.autoRotateSpeed = 0.8;

  function setSize(width: number, height: number) {
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

  return { renderer, scene, camera, controls, canvas, setSize, start, stop };
}
