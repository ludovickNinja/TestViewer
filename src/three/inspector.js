// ----------------------------------------------------------------------------
// inspector.js — debug overlay for the Three.js viewer
// ----------------------------------------------------------------------------
// Click any mesh in the canvas to:
//   - highlight it with a BoxHelper
//   - see its name, type, transform, geometry stats and material props in a
//     side panel
//   - tweak the selected mesh's transform, visibility and PBR material
//     parameters live via lil-gui
//   - swap its environment map between the metal HDR, the gem HDR or none
//
// Every material change is recorded into a per-material overrides map keyed
// by `material.name`. The Overrides folder lets you copy that map to the
// clipboard or download it as `<modelId>.materials.json`. Drop the file into
// `public/material-overrides/` and applyMaterialEnvironments will pick it
// up on the next load.
//
// Enable by appending `?debug=1` (or `&debug=1`) to the viewer URL.
// ----------------------------------------------------------------------------

import {
  ACESFilmicToneMapping,
  AgXToneMapping,
  BoxHelper,
  CineonToneMapping,
  LinearToneMapping,
  NeutralToneMapping,
  NoToneMapping,
  Raycaster,
  ReinhardToneMapping,
  Vector2
} from 'three';
import GUI from 'lil-gui';

const TONE_MAPPING_PRESETS = {
  None: NoToneMapping,
  Linear: LinearToneMapping,
  Reinhard: ReinhardToneMapping,
  Cineon: CineonToneMapping,
  ACESFilmic: ACESFilmicToneMapping,
  AgX: AgXToneMapping,
  Neutral: NeutralToneMapping
};

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
  /** Model id used to name the downloaded overrides file. */
  let modelId = null;
  /**
   * Per-material override accumulator, keyed by `material.name`. Populated
   * from the sidecar JSON on attach() and updated whenever the user moves a
   * slider in the Material section of the Selection folder.
   * @type {Map<string, Record<string, unknown>>}
   */
  const overrides = new Map();

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
  // No `container` option — lil-gui's default auto-place pins it to the
  // top-right with position:fixed. Passing a container switches off auto-place
  // and the panel ends up in normal document flow (off-screen on this layout).
  const gui = new GUI({ title: 'Debug' });
  gui.domElement.classList.add('nc-inspector-gui');

  const sceneFolder = gui.addFolder('Scene');
  sceneFolder.add(renderer, 'toneMappingExposure', 0, 5, 0.01).name('exposure');
  const tmProxy = {
    mode: keyForValue(TONE_MAPPING_PRESETS, renderer.toneMapping) || 'ACESFilmic'
  };
  sceneFolder
    .add(tmProxy, 'mode', Object.keys(TONE_MAPPING_PRESETS))
    .name('tone mapping')
    .onChange((name) => {
      renderer.toneMapping = TONE_MAPPING_PRESETS[name];
      // Materials need to recompile shaders when the tone mapping mode changes.
      scene.traverse((o) => {
        if (o.isMesh) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => m && (m.needsUpdate = true));
        }
      });
    });
  sceneFolder
    .add({ bg: '#' + scene.background.getHexString() }, 'bg')
    .name('background')
    .onChange((v) => scene.background.set(v));
  sceneFolder.close();

  // ---- Lights ----
  if (viewer.lights) {
    const lightsFolder = gui.addFolder('Lights');
    for (const [name, light] of Object.entries(viewer.lights)) {
      const f = lightsFolder.addFolder(name);
      f.add(light, 'visible');
      f.add(light, 'intensity', 0, 10, 0.05);
      if (light.color) {
        f.addColor({ color: '#' + light.color.getHexString() }, 'color').onChange((v) =>
          light.color.set(v)
        );
      }
      if (light.groundColor) {
        f.addColor({ ground: '#' + light.groundColor.getHexString() }, 'ground').onChange((v) =>
          light.groundColor.set(v)
        );
      }
      if (light.position && light.isDirectionalLight) {
        f.add(light.position, 'x', -10, 10, 0.05).name('pos.x');
        f.add(light.position, 'y', -10, 10, 0.05).name('pos.y');
        f.add(light.position, 'z', -10, 10, 0.05).name('pos.z');
      }
      f.close();
    }
    lightsFolder.close();
  }

  // ---- Camera ----
  const cameraFolder = gui.addFolder('Camera');
  cameraFolder
    .add(camera, 'fov', 10, 90, 1)
    .onChange(() => camera.updateProjectionMatrix());
  cameraFolder
    .add(camera, 'near', 0.001, 1, 0.001)
    .onChange(() => camera.updateProjectionMatrix());
  cameraFolder
    .add(camera, 'far', 1, 200, 1)
    .onChange(() => camera.updateProjectionMatrix());
  cameraFolder.add({
    log: () => {
      const { x, y, z } = camera.position;
      console.log('camera position:', [+x.toFixed(3), +y.toFixed(3), +z.toFixed(3)]);
    }
  }, 'log').name('log position');
  cameraFolder.close();

  // ---- Overrides ----
  // Aggregate of every per-material change made through the Selection folder,
  // serialised to the same JSON format that applyMaterialEnvironments reads
  // from `public/material-overrides/<id>.json`.
  const overridesFolder = gui.addFolder('Overrides');
  overridesFolder.add(
    {
      copy: async () => {
        const text = JSON.stringify(overridesAsObject(), null, 2);
        try {
          await navigator.clipboard.writeText(text);
          console.log('[inspector] copied overrides to clipboard:\n' + text);
        } catch (err) {
          console.warn('[inspector] clipboard unavailable, logging instead:', err);
          console.log(text);
        }
      }
    },
    'copy'
  ).name('copy JSON');
  overridesFolder.add(
    {
      download: () => {
        const filename = `${modelId || 'model'}.json`;
        downloadJson(filename, overridesAsObject());
      }
    },
    'download'
  ).name('download .json');
  overridesFolder.add(
    {
      clear: () => {
        overrides.clear();
        console.log('[inspector] overrides cleared');
      }
    },
    'clear'
  ).name('clear');
  overridesFolder.close();

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

      // Env map dropdown — pick the metal HDR, the gem HDR, or none. Saved to
      // overrides so a one-off correction (e.g. a gem mis-classified as metal)
      // survives a reload via the sidecar.
      if (viewer.environments) {
        const envChoice = currentEnvChoice(mat, viewer.environments);
        m.add({ env: envChoice }, 'env', ['metal', 'gem', 'none'])
          .name('envMap')
          .onChange((choice) => {
            if (choice === 'metal') mat.envMap = viewer.environments.metal;
            else if (choice === 'gem') mat.envMap = viewer.environments.gem;
            else mat.envMap = null;
            mat.needsUpdate = true;
            recordOverride(mat.name, 'envMap', choice);
            renderInfo(mesh);
          });
      }

      if (mat.color) {
        m.addColor({ color: '#' + mat.color.getHexString() }, 'color').onChange((v) => {
          mat.color.set(v);
          recordOverride(mat.name, 'color', v);
        });
      }
      for (const [prop, min, max, step] of MATERIAL_NUMERIC_PROPS) {
        if (typeof mat[prop] === 'number') {
          m.add(mat, prop, min, max, step).onChange((v) => {
            recordOverride(mat.name, prop, v);
            renderInfo(mesh);
          });
        }
      }
      m.add({ wireframe: !!mat.wireframe }, 'wireframe').onChange((v) => {
        mat.wireframe = v;
      });
    }

    const presets = selectionFolder.addFolder('Preset');
    presets.add(
      {
        copy: async () => {
          const snap = snapshot(mesh);
          const text = JSON.stringify(snap, null, 2);
          try {
            await navigator.clipboard.writeText(text);
            console.log('[inspector] copied preset to clipboard:\n' + text);
          } catch (err) {
            console.warn('[inspector] clipboard unavailable, logging instead:', err);
            console.log(text);
          }
        }
      },
      'copy'
    ).name('copy as JSON');
    presets.add(
      {
        log: () => console.log('[inspector] selected:', mesh, snapshot(mesh))
      },
      'log'
    ).name('log to console');
    presets.close();

    selectionFolder.open();
  }

  function snapshot(mesh) {
    const mat = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
    const out = {
      name: mesh.name || null,
      type: mesh.type,
      uuid: mesh.uuid,
      visible: mesh.visible,
      position: mesh.position.toArray().map((n) => +n.toFixed(4)),
      rotation: [mesh.rotation.x, mesh.rotation.y, mesh.rotation.z].map((n) => +n.toFixed(4)),
      scale: mesh.scale.toArray().map((n) => +n.toFixed(4))
    };
    if (mat) {
      const matOut = { type: mat.type, name: mat.name || null };
      if (mat.color) matOut.color = '#' + mat.color.getHexString();
      for (const [prop] of MATERIAL_NUMERIC_PROPS) {
        if (typeof mat[prop] === 'number') matOut[prop] = +mat[prop].toFixed(4);
      }
      if (typeof mat.wireframe === 'boolean') matOut.wireframe = mat.wireframe;
      out.material = matOut;
    }
    return out;
  }

  function refreshHelper() {
    if (boxHelper) boxHelper.update();
    if (selected) renderInfo(selected);
  }

  function recordOverride(matName, prop, value) {
    if (!matName) return; // unnamed materials can't be addressed by the sidecar
    const current = overrides.get(matName) ?? {};
    current[prop] = typeof value === 'number' ? +value.toFixed(4) : value;
    overrides.set(matName, current);
  }

  function overridesAsObject() {
    const out = {};
    for (const [name, props] of overrides) out[name] = { ...props };
    return out;
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
    attach(root, opts = {}) {
      modelRoot = root;
      modelId = opts.modelId ?? null;
      // Seed the overrides map from the sidecar so existing tweaks are
      // included in the next "copy JSON" / "download" without the user having
      // to re-apply every change.
      if (opts.initialOverrides && typeof opts.initialOverrides === 'object') {
        for (const [name, props] of Object.entries(opts.initialOverrides)) {
          if (props && typeof props === 'object') overrides.set(name, { ...props });
        }
      }
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

function keyForValue(obj, value) {
  for (const [k, v] of Object.entries(obj)) if (v === value) return k;
  return null;
}

function currentEnvChoice(mat, environments) {
  if (!mat.envMap) return 'none';
  if (mat.envMap === environments.metal) return 'metal';
  if (mat.envMap === environments.gem) return 'gem';
  // Material is using some other env (e.g. a previously-set value not from
  // our two HDRs). Treat as "metal" for the dropdown so the user has a
  // sensible starting point — switching the dropdown will overwrite it.
  return 'metal';
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
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
