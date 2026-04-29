// ----------------------------------------------------------------------------
// loadModel.js
// ----------------------------------------------------------------------------
// Loads a single .glb file using Three.js's GLTFLoader.
//
// PRIVACY NOTE (prototype):
// In this static GitHub Pages prototype the .glb URL is fetched directly by
// the browser, which means it's visible in the Network tab of devtools.
// Anyone with the link can save the file. For real protection move models
// to private storage (S3 / R2 / GCS) and serve them via short-lived signed
// URLs from a backend.
// ----------------------------------------------------------------------------

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Load a .glb model.
 *
 * @param {object} options
 * @param {string} options.url - Where to fetch the .glb from.
 * @param {(progress: { loaded: number, total: number, ratio: number }) => void} [options.onProgress]
 *   Called as bytes stream in. `ratio` is NaN if the server didn't send a length.
 * @param {AbortSignal} [options.signal] - Optional, for cancelling the load.
 * @returns {Promise<{ root: import('three').Group, gltf: any }>}
 */
export function loadModel({ url, onProgress, signal }) {
  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    // Bail out immediately if the caller already cancelled.
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }

    const onAbort = () => reject(new DOMException('Aborted', 'AbortError'));
    signal?.addEventListener('abort', onAbort, { once: true });

    loader.load(
      url,
      // Success callback — `gltf.scene` is the root Group of all model meshes.
      (gltf) => {
        signal?.removeEventListener('abort', onAbort);

        // We deliberately do NOT replace the GLB's materials. Whatever the
        // designer set up (gold, white gold, diamonds, etc.) is preserved.
        // We only walk the tree to make sure shadow flags are sensible.
        gltf.scene.traverse((obj) => {
          if (obj.isMesh) {
            obj.castShadow = false;
            obj.receiveShadow = false;
          }
        });

        resolve({ root: gltf.scene, gltf });
      },
      // Progress callback
      (event) => {
        if (!onProgress) return;
        const total = event.total || 0;
        const loaded = event.loaded || 0;
        const ratio = total > 0 ? loaded / total : Number.NaN;
        onProgress({ loaded, total, ratio });
      },
      // Error callback
      (err) => {
        signal?.removeEventListener('abort', onAbort);
        reject(err instanceof Error ? err : new Error(String(err)));
      }
    );
  });
}
