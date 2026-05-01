// ----------------------------------------------------------------------------
// inspector.js — debug overlay for the Three.js viewer
// ----------------------------------------------------------------------------
// Click any mesh in the canvas to:
//   - highlight it with a BoxHelper
//   - see its name, type, transform, geometry stats and material props in a
//     side panel
//   - tweak the selected mesh's transform, visibility and PBR material
//     parameters live via lil-gui
//
// Enable by appending `?debug=1` (or `&debug=1`) to the viewer URL.
// ----------------------------------------------------------------------------

import { BoxHelper, Raycaster, Vector2 } from 'three';
import GUI from 'lil-gui';

const MATERIAL_NUMERIC_PROPS = [
  ['metalness', 0, 1, 0.01],
  ['roughness', 0, 1, 0.01],
  ['transmission', 0, 1, 0.01],
  ['thickness', 0, 5, 0.01],
  ['ior', 1, 2.333, 0.001],
  ['clearcoat', 0, 1, 0.01],
  ['clearcoatRoughness', 0, 1, 0.01],
  ['sheen', 0, 1, 0.01],
  ['envMapIntensity', 0, 5, 0.05],
  ['opacity', 0, 1, 0.01]
];

/**
 * Create an inspector bound to a viewer (returned from createScene()).
 * Attach a model root with `inspector.attach(root)` after it loads.
 */
export function createInspector(viewer) {
  const { renderer, scene, camera, canvas } = viewer;

  const raycaster = new Raycaster();
  const pointer = new Vector2();

  /** @type {import('three').Object3D | null} */
  let modelRoot = null;
  /** @type {import('three').Mesh | null} */
  let selected = null;
  /** @type {BoxHelper | null} */
  let boxHelper = null;
  /** @type {GUI | null} */
  let selectionFolder = null;

  // ---- Panel ----
  const panel = document.createElement('div');
  panel.className = 'nc-inspector-panel';
  panel.innerHTML = `
    <div class="nc-inspector-header">
      <strong>Inspector</strong>
      <span class="nc-inspector-hint">click a mesh</span>
    </div>
    <div class="nc-inspector-body" data-empty="true">
      Nothing selected.
    </div>
  `;
  const body = panel.querySelector('.nc-inspector-body');
  document.body.appendChild(panel);

  // ---- lil-gui ----
  const gui = new GUI({ title: 'Debug', container: document.body });
  gui.domElement.classList.add('nc-inspector-gui');

  const sceneFolder = gui.addFolder('Scene');
  sceneFolder.add(renderer, 'toneMappingExposure', 0, 5, 0.01).name('exposure');
  sceneFolder
    .add({ bg: '#' + scene.background.getHexString() }, 'bg')
    .name('background')
    .onChange((v) => scene.background.set(v));
  sceneFolder.close();

  // Highlight on click — also expose a list of pickable meshes for raycasting.
  function pickableMeshes() {
    if (!modelRoot) return [];
    const meshes = [];
    modelRoot.traverse((o) => {
      if (o.isMesh && o.visible) meshes.push(o);
    });
    return meshes;
  }

  function onPointerDown(event) {
    // Ignore if the user is dragging — only treat as a pick if no movement.
    const startX = event.clientX;
    const startY = event.clientY;

    function onUp(upEvent) {
      canvas.removeEventListener('pointerup', onUp);
      const dx = upEvent.clientX - startX;
      const dy = upEvent.clientY - startY;
      if (Math.hypot(dx, dy) > 4) return; // it was a drag, not a click
      pickAt(upEvent.clientX, upEvent.clientY);
    }
    canvas.addEventListener('pointerup', onUp);
  }

  function pickAt(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(pickableMeshes(), false);
    if (hits.length === 0) {
      select(null);
      return;
    }
    select(hits[0].object);
  }

  function select(mesh) {
    selected = mesh;

    if (boxHelper) {
      scene.remove(boxHelper);
      boxHelper.dispose();
      boxHelper = null;
    }
    if (selectionFolder) {
      selectionFolder.destroy();
      selectionFolder = null;
    }

    if (!mesh) {
      body.dataset.empty = 'true';
      body.textContent = 'Nothing selected.';
      return;
    }

    boxHelper = new BoxHelper(mesh, 0x4ad6ff);
    boxHelper.material.depthTest = false;
    boxHelper.material.transparent = true;
    scene.add(boxHelper);

    renderInfo(mesh);
    buildSelectionGui(mesh);
  }

  function renderInfo(mesh) {
    const geom = mesh.geometry;
    const pos = mesh.position;
    const rot = mesh.rotation;
    const scl = mesh.scale;
    const mat = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;

    const vertexCount = geom?.attributes?.position?.count ?? 0;
    const triCount = geom?.index ? geom.index.count / 3 : vertexCount / 3;

    const matLines = mat
      ? [
          ['name', mat.name || '(unnamed)'],
          ['type', mat.type],
          ['color', mat.color ? '#' + mat.color.getHexString() : '—'],
          ['metalness', fmt(mat.metalness)],
          ['roughness', fmt(mat.roughness)],
          ['transmission', fmt(mat.transmission)],
          ['ior', fmt(mat.ior)],
          ['envMapIntensity', fmt(mat.envMapIntensity)],
          ['envMap', mat.envMap ? 'set' : 'none']
        ]
      : [['material', 'none']];

    body.dataset.empty = 'false';
    body.innerHTML = `
      <div class="nc-row"><span>name</span><b>${escape(mesh.name) || '(unnamed)'}</b></div>
      <div class="nc-row"><span>type</span><b>${escape(mesh.type)}</b></div>
      <div class="nc-row"><span>uuid</span><b class="nc-mono">${mesh.uuid.slice(0, 8)}</b></div>
      <div class="nc-row"><span>visible</span><b>${mesh.visible}</b></div>
      <div class="nc-section">Transform</div>
      <div class="nc-row"><span>position</span><b class="nc-mono">${vec(pos)}</b></div>
      <div class="nc-row"><span>rotation</span><b class="nc-mono">${vec(rot, 'rad')}</b></div>
      <div class="nc-row"><span>scale</span><b class="nc-mono">${vec(scl)}</b></div>
      <div class="nc-section">Geometry</div>
      <div class="nc-row"><span>type</span><b>${escape(geom?.type ?? '—')}</b></div>
      <div class="nc-row"><span>vertices</span><b>${vertexCount}</b></div>
      <div class="nc-row"><span>triangles</span><b>${Math.round(triCount)}</b></div>
      <div class="nc-section">Material</div>
      ${matLines
        .map(([k, v]) => `<div class="nc-row"><span>${k}</span><b>${escape(String(v))}</b></div>`)
        .join('')}
    `;
  }

  function buildSelectionGui(mesh) {
    selectionFolder = gui.addFolder(`Selection: ${mesh.name || mesh.type}`);

    selectionFolder.add(mesh, 'visible').onChange(refreshHelper);

    const t = selectionFolder.addFolder('Transform');
    t.add(mesh.position, 'x', -5, 5, 0.001).name('pos.x').onChange(refreshHelper);
    t.add(mesh.position, 'y', -5, 5, 0.001).name('pos.y').onChange(refreshHelper);
    t.add(mesh.position, 'z', -5, 5, 0.001).name('pos.z').onChange(refreshHelper);
    t.add(mesh.rotation, 'x', -Math.PI, Math.PI, 0.001).name('rot.x').onChange(refreshHelper);
    t.add(mesh.rotation, 'y', -Math.PI, Math.PI, 0.001).name('rot.y').onChange(refreshHelper);
    t.add(mesh.rotation, 'z', -Math.PI, Math.PI, 0.001).name('rot.z').onChange(refreshHelper);
    t.add(mesh.scale, 'x', 0.01, 5, 0.001).name('scl.x').onChange(refreshHelper);
    t.add(mesh.scale, 'y', 0.01, 5, 0.001).name('scl.y').onChange(refreshHelper);
    t.add(mesh.scale, 'z', 0.01, 5, 0.001).name('scl.z').onChange(refreshHelper);
    t.close();

    const mat = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
    if (mat) {
      const m = selectionFolder.addFolder('Material');
      if (mat.color) {
        m.addColor({ color: '#' + mat.color.getHexString() }, 'color').onChange((v) =>
          mat.color.set(v)
        );
      }
      for (const [prop, min, max, step] of MATERIAL_NUMERIC_PROPS) {
        if (typeof mat[prop] === 'number') {
          m.add(mat, prop, min, max, step);
        }
      }
      m.add({ wireframe: !!mat.wireframe }, 'wireframe').onChange((v) => {
        mat.wireframe = v;
      });
    }

    selectionFolder.open();
  }

  function refreshHelper() {
    if (boxHelper) boxHelper.update();
    if (selected) renderInfo(selected);
  }

  // Keep the BoxHelper in sync if the model animates / camera moves.
  let raf = 0;
  function tick() {
    raf = requestAnimationFrame(tick);
    if (boxHelper) boxHelper.update();
  }
  tick();

  canvas.addEventListener('pointerdown', onPointerDown);

  // Also let Esc clear the selection.
  function onKey(e) {
    if (e.key === 'Escape') select(null);
  }
  window.addEventListener('keydown', onKey);

  return {
    attach(root) {
      modelRoot = root;
    },
    dispose() {
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKey);
      if (boxHelper) {
        scene.remove(boxHelper);
        boxHelper.dispose();
      }
      gui.destroy();
      panel.remove();
    }
  };
}

function fmt(n) {
  if (n === undefined || n === null) return '—';
  if (typeof n !== 'number') return String(n);
  return n.toFixed(3);
}

function vec(v, unit = '') {
  return `${v.x.toFixed(3)}, ${v.y.toFixed(3)}, ${v.z.toFixed(3)}${unit ? ' ' + unit : ''}`;
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[c]);
}
