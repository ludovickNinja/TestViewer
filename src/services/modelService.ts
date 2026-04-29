import type { CameraViewId } from '../three/cameraViews';
import { CAMERA_VIEWS } from '../three/cameraViews';

/**
 * Read-only resolver mapping a URL ID to model + thumbnail asset URLs.
 *
 * Privacy / security note (prototype):
 * - In this GitHub Pages prototype the URL ID equals the GLB filename, so
 *   model files are technically reachable by anyone who inspects the network
 *   tab or guesses filenames.
 * - For real protection, replace this service with a backend lookup that
 *   resolves opaque preview IDs to signed URLs against private storage.
 *
 * Future TODO list (also tracked in README):
 * - Random customer-safe preview IDs
 * - Database-backed mapping
 * - Signed / expiring URLs and PIN protection
 * - Approval / revisions / metadata
 */

const ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

export interface ResolvedModel {
  id: string;
  displayName: string;
  modelUrl: string;
  thumbnails: Array<{ id: CameraViewId; label: string; imageUrl: string }>;
}

/**
 * Read the preview ID from the current URL's `id` query parameter.
 */
export function readModelIdFromUrl(search: string = window.location.search): string | null {
  const params = new URLSearchParams(search);
  const raw = params.get('id');
  if (!raw) return null;
  return sanitizeModelId(raw);
}

/**
 * Strict allow-list: letters, numbers, dash, underscore. No slashes,
 * no path traversal. Returns null when the ID is unsafe.
 */
export function sanitizeModelId(raw: string): string | null {
  const trimmed = raw.trim();
  if (!ID_PATTERN.test(trimmed)) return null;
  return trimmed;
}

/**
 * Build the URLs for a given preview. Uses Vite's BASE_URL so the app works
 * both at the site root and at a subpath (e.g. GitHub Pages /<repo>/).
 */
export function resolveModel(id: string): ResolvedModel {
  const baseUrl = import.meta.env.BASE_URL ?? '/';
  const modelUrl = `${baseUrl}models/${id}.glb`;

  const thumbnails = CAMERA_VIEWS.map((view) => ({
    id: view.id,
    label: view.label,
    imageUrl: `${baseUrl}thumbnails/${id}-${view.id}.jpg`
  }));

  return {
    id,
    displayName: id,
    modelUrl,
    thumbnails
  };
}
