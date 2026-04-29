import { Group, Mesh, Object3D } from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export interface LoadedModel {
  root: Group;
  gltf: GLTF;
}

export interface LoadProgress {
  loaded: number;
  total: number;
  ratio: number; // 0..1, NaN if total is unknown
}

export interface LoadModelOptions {
  url: string;
  onProgress?: (progress: LoadProgress) => void;
  signal?: AbortSignal;
}

/**
 * Load a GLB model. Materials and material names from the GLB are preserved.
 *
 * Privacy note: in a static GitHub Pages prototype, this URL is fetched directly
 * by the browser and is visible in the network tab. For real protection, move
 * model files behind private storage and serve them via signed URLs.
 */
export function loadModel(options: LoadModelOptions): Promise<LoadedModel> {
  const { url, onProgress, signal } = options;
  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }

    const onAbort = () => reject(new DOMException('Aborted', 'AbortError'));
    signal?.addEventListener('abort', onAbort, { once: true });

    loader.load(
      url,
      (gltf) => {
        signal?.removeEventListener('abort', onAbort);
        const root = gltf.scene as Group;

        // Preserve original materials and names; only enable shadow flags.
        root.traverse((obj: Object3D) => {
          const mesh = obj as Mesh;
          if ((mesh as Mesh).isMesh) {
            mesh.castShadow = false;
            mesh.receiveShadow = false;
          }
        });

        resolve({ root, gltf });
      },
      (event) => {
        if (!onProgress) return;
        const total = event.total || 0;
        const loaded = event.loaded || 0;
        const ratio = total > 0 ? loaded / total : Number.NaN;
        onProgress({ loaded, total, ratio });
      },
      (err) => {
        signal?.removeEventListener('abort', onAbort);
        reject(err instanceof Error ? err : new Error(String(err)));
      }
    );
  });
}
