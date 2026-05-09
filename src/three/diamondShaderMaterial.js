// ----------------------------------------------------------------------------
// diamondShaderMaterial.js — custom GLSL material for diamond / moissanite
// ----------------------------------------------------------------------------
// MeshPhysicalMaterial.transmission re-renders the entire scene every frame
// into a separate render target so the diamond's shader can sample what's
// "behind" it. On iPhone with DPR 3 and dispersion enabled (3 RGB samples),
// that pass is the single biggest performance cost in the viewer.
//
// For diamonds specifically we don't actually need to see real geometry
// behind the stone — the convincing look comes from sampling a contrasty
// HDR environment with refracted ray directions. So this material skips
// the transmission pass entirely and samples the gem HDR directly using
// Snell's law in the fragment shader.
//
// What this material does, per fragment:
//   1. Refract the view ray through the front facet using Snell's law.
//   2. Optionally take a second refraction off a synthetic back facet so the
//      ray exits at a different angle (this is what creates the deep "fire"
//      look — single-bounce alone tends to look like glass, not diamond).
//   3. Sample the equirect gem HDR three times (R/G/B) at slightly different
//      IORs for chromatic aberration / dispersion.
//   4. Sample the same HDR with the reflection vector for the mirror lobe.
//   5. Mix refraction + reflection via a Schlick Fresnel term — edges become
//      mostly reflective, the centre mostly refractive.
//   6. Add a tight specular highlight per directional light so pinpoint
//      light sources still produce on-camera sparkle.
//
// Property surface is intentionally aliased to the MeshPhysicalMaterial knobs
// the rest of the codebase already speaks (color, ior, dispersion, roughness,
// envMapIntensity, transmission, thickness, metalness). That lets the
// inspector, the preset applicator and the override sidecar drive this
// material without special-casing it.
// ----------------------------------------------------------------------------

import {
  Color,
  EquirectangularReflectionMapping,
  ShaderMaterial,
  UniformsUtils,
  Vector3
} from 'three';

const VERTEX_SHADER = /* glsl */ `
varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  // Use the inverse-transpose for non-uniform scales. modelMatrix's upper-3x3
  // is fine for uniform scales which is the common case for jewelry GLBs.
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const FRAGMENT_SHADER = /* glsl */ `
#include <common>
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>

uniform sampler2D envMap;
uniform vec3 cameraPos;
uniform vec3 tintColor;
uniform float ior;
uniform float dispersion;
uniform float envMapIntensity;
uniform float fresnelPower;
uniform float secondaryBounce;
uniform float sparkleStrength;

#define MAX_LIGHTS 4
uniform int numLights;
uniform vec3 lightDirs[MAX_LIGHTS];
uniform vec3 lightColors[MAX_LIGHTS];

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

const float TWO_PI = 6.28318530718;
const float ONE_OVER_PI = 0.31830988618;

vec2 equirectUv(vec3 dir) {
  // Standard equirect mapping: longitude across U, latitude across V.
  // Three.js's equirect convention puts (u=0.5, v=0.5) at +Z forward.
  vec3 d = normalize(dir);
  float u = atan(d.z, d.x) / TWO_PI + 0.5;
  float v = asin(clamp(d.y, -1.0, 1.0)) * ONE_OVER_PI + 0.5;
  return vec2(u, v);
}

vec3 sampleEnv(vec3 dir) {
  return texture2D(envMap, equirectUv(dir)).rgb;
}

// Sample the env map for a refracted ray, optionally taking a second bounce
// off a virtual back facet so the exit direction differs from the entry
// direction. eta = n_outside / n_inside.
vec3 refractedSample(vec3 incident, vec3 N, float eta) {
  vec3 r1 = refract(incident, N, eta);
  // Total internal reflection — refract returns vec3(0).
  if (dot(r1, r1) < 1e-6) {
    return sampleEnv(reflect(incident, N));
  }
  if (secondaryBounce > 0.0) {
    // Approximate the back facet as the opposite normal jittered by the
    // refracted direction. This is not physically exact but produces the
    // multi-direction exit that gives diamonds their depth.
    vec3 backNormal = normalize(-N + r1 * 0.35);
    vec3 r2 = refract(r1, backNormal, 1.0 / eta);
    if (dot(r2, r2) < 1e-6) {
      // TIR at the back facet — bounce off it instead.
      r2 = reflect(r1, backNormal);
    }
    vec3 exitDir = mix(r1, r2, secondaryBounce);
    return sampleEnv(exitDir);
  }
  return sampleEnv(r1);
}

void main() {
  vec3 N = normalize(vWorldNormal);
  vec3 V = normalize(cameraPos - vWorldPosition);
  vec3 I = -V;

  // Reflection lobe.
  vec3 R = reflect(I, N);
  vec3 reflColor = sampleEnv(R);

  // Refraction lobe with chromatic aberration. Real diamond dispersion is
  // ~0.044 between red and violet IORs; we expose dispersion as a 0-2
  // designer dial multiplied by that physical baseline.
  float disp = dispersion * 0.044;
  float iorR = ior - disp * 0.5;
  float iorG = ior;
  float iorB = ior + disp * 0.5;

  vec3 refrR = refractedSample(I, N, 1.0 / iorR);
  vec3 refrG = refractedSample(I, N, 1.0 / iorG);
  vec3 refrB = refractedSample(I, N, 1.0 / iorB);

  vec3 refrColor = vec3(refrR.r, refrG.g, refrB.b) * tintColor;

  // Schlick Fresnel between refraction (centre) and reflection (edges).
  float cosTheta = clamp(dot(N, V), 0.0, 1.0);
  float F0 = pow((1.0 - ior) / (1.0 + ior), 2.0);
  float fresnel = F0 + (1.0 - F0) * pow(1.0 - cosTheta, fresnelPower);

  vec3 col = mix(refrColor, reflColor, fresnel) * envMapIntensity;

  // Add tight specular highlights from scene-direct lights so pinpoint
  // sources still appear ON the diamond surface, not just inside it.
  if (sparkleStrength > 0.0) {
    for (int i = 0; i < MAX_LIGHTS; ++i) {
      if (i >= numLights) break;
      vec3 L = normalize(lightDirs[i]);
      vec3 H = normalize(L + V);
      float spec = pow(max(dot(N, H), 0.0), 256.0);
      col += lightColors[i] * spec * sparkleStrength;
    }
  }

  vec4 outColor = vec4(col, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>

  gl_FragColor = outColor;
}
`;

const DEFAULT_LIGHT_DIRS = [
  new Vector3(0, 0, 1),
  new Vector3(0, 0, 1),
  new Vector3(0, 0, 1),
  new Vector3(0, 0, 1)
];
const DEFAULT_LIGHT_COLORS = [
  new Vector3(0, 0, 0),
  new Vector3(0, 0, 0),
  new Vector3(0, 0, 0),
  new Vector3(0, 0, 0)
];

/**
 * @typedef DiamondMaterialOptions
 * @property {string} [name]
 * @property {string | number} [color]
 * @property {import('three').Texture | null} [envMap]
 * @property {number} [ior]
 * @property {number} [dispersion]
 * @property {number} [envMapIntensity]
 * @property {number} [fresnelPower]
 * @property {number} [secondaryBounce]
 * @property {number} [sparkleStrength]
 */

/**
 * Build a custom shader material that mimics a faceted diamond by sampling
 * an equirectangular HDR with refracted view rays.
 *
 * @param {DiamondMaterialOptions} [opts]
 */
export function createDiamondMaterial(opts = {}) {
  const uniforms = UniformsUtils.merge([
    {
      envMap: { value: null },
      cameraPos: { value: new Vector3() },
      tintColor: { value: new Color(0xffffff) },
      ior: { value: 2.417 },
      dispersion: { value: 0.8 },
      envMapIntensity: { value: 1.8 },
      fresnelPower: { value: 5.0 },
      secondaryBounce: { value: 0.55 },
      sparkleStrength: { value: 1.5 },
      numLights: { value: 0 },
      lightDirs: { value: DEFAULT_LIGHT_DIRS.map((v) => v.clone()) },
      lightColors: { value: DEFAULT_LIGHT_COLORS.map((v) => v.clone()) }
    }
  ]);

  const material = new ShaderMaterial({
    name: opts.name || 'DiamondShaderMaterial',
    uniforms,
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    // Diamonds are opaque from the renderer's POV — we draw a solid colour
    // per fragment and don't blend. This keeps it cheap and correct under
    // sorting.
    transparent: false,
    depthWrite: true,
    depthTest: true
  });

  // Tag so the rest of the codebase can detect this material without an
  // instanceof import (avoids circular imports in the inspector).
  material.userData.isDiamondShaderMaterial = true;

  // ---- Property surface aliased to MeshPhysicalMaterial -------------------
  // The inspector, applyPreset, and the override sidecar all probe materials
  // by reading `mat.ior`, `mat.color`, etc. Expose those as ordinary getters
  // and setters that read/write the uniforms behind the scenes.

  const colorProxy = new Color(opts.color ?? 0xffffff);
  uniforms.tintColor.value.copy(colorProxy);

  Object.defineProperties(material, {
    color: {
      enumerable: true,
      configurable: true,
      get() {
        return colorProxy;
      },
      set(v) {
        if (v && typeof v.getHex === 'function') colorProxy.copy(v);
        else colorProxy.set(v);
        uniforms.tintColor.value.copy(colorProxy);
      }
    },
    envMap: {
      enumerable: true,
      configurable: true,
      get() {
        return uniforms.envMap.value;
      },
      set(tex) {
        // Our shader does its own equirect UV math against an unfiltered
        // float texture. Silently ignore any other type (most importantly
        // PMREM-packed 2D textures, which would be sampled as garbage).
        // Allow null so callers can clear the slot if they really want.
        if (tex === null || tex === undefined) {
          uniforms.envMap.value = null;
          return;
        }
        if (tex.mapping === EquirectangularReflectionMapping) {
          uniforms.envMap.value = tex;
        }
      }
    },
    ior: {
      enumerable: true,
      configurable: true,
      get() {
        return uniforms.ior.value;
      },
      set(v) {
        if (typeof v === 'number') uniforms.ior.value = v;
      }
    },
    dispersion: {
      enumerable: true,
      configurable: true,
      get() {
        return uniforms.dispersion.value;
      },
      set(v) {
        if (typeof v === 'number') uniforms.dispersion.value = v;
      }
    },
    envMapIntensity: {
      enumerable: true,
      configurable: true,
      get() {
        return uniforms.envMapIntensity.value;
      },
      set(v) {
        if (typeof v === 'number') uniforms.envMapIntensity.value = v;
      }
    },
    // Aliased numeric props with no GLSL effect — the inspector still binds
    // to them so designers can drag the same sliders, but they're ignored.
    // Keeping them as numbers prevents `if (typeof mat[prop] === 'number')`
    // gates in applyPreset / inspector from skipping the material entirely
    // and lets a single override JSON drive both shader and physical materials.
    metalness: writableNumber(0),
    roughness: writableNumber(0),
    transmission: writableNumber(1),
    thickness: writableNumber(0.3),
    clearcoat: writableNumber(0),
    clearcoatRoughness: writableNumber(0)
  });

  // Apply explicit overrides from the caller.
  if (typeof opts.ior === 'number') material.ior = opts.ior;
  if (typeof opts.dispersion === 'number') material.dispersion = opts.dispersion;
  if (typeof opts.envMapIntensity === 'number') material.envMapIntensity = opts.envMapIntensity;
  if (typeof opts.fresnelPower === 'number') uniforms.fresnelPower.value = opts.fresnelPower;
  if (typeof opts.secondaryBounce === 'number') uniforms.secondaryBounce.value = opts.secondaryBounce;
  if (typeof opts.sparkleStrength === 'number') uniforms.sparkleStrength.value = opts.sparkleStrength;
  if (opts.envMap) material.envMap = opts.envMap;

  // Per-frame sync of camera position + lights. Three.js calls onBeforeRender
  // right before the draw, with the active camera passed in.
  material.onBeforeRender = function (_renderer, scene, cam) {
    uniforms.cameraPos.value.setFromMatrixPosition(cam.matrixWorld);
    syncLights(scene, uniforms);
  };

  return material;
}

/**
 * Walk the scene once per draw, copy at most MAX_LIGHTS directional lights
 * into the uniforms array. Cheap — jewelry scenes have <5 lights total.
 */
function syncLights(scene, uniforms) {
  let count = 0;
  scene.traverse((obj) => {
    if (count >= 4) return;
    if (!obj.isDirectionalLight || !obj.visible) return;
    const dir = uniforms.lightDirs.value[count];
    const col = uniforms.lightColors.value[count];
    // DirectionalLight points from `position` toward `target.position`. For
    // shading we want the direction from the surface TOWARD the light,
    // i.e. (position - target).
    dir.copy(obj.position);
    if (obj.target) dir.sub(obj.target.position);
    dir.normalize();
    col.set(obj.color.r * obj.intensity, obj.color.g * obj.intensity, obj.color.b * obj.intensity);
    count++;
  });
  uniforms.numLights.value = count;
}

function writableNumber(initial) {
  let value = initial;
  return {
    enumerable: true,
    configurable: true,
    get() {
      return value;
    },
    set(v) {
      if (typeof v === 'number') value = v;
    }
  };
}

/**
 * Heuristic: should this material be replaced with the diamond shader?
 * We look for very high IOR + transmissive + low metalness, an explicit
 * material name like "Diamond" / "Moissanite", or a host mesh whose name
 * matches (the GLB exporter often gives the material a generic name like
 * "Material.001" while the mesh keeps the artist's "Diamond_Round" label).
 * Sapphires/rubies/emeralds have IOR 1.5–1.8 and benefit from
 * MeshPhysicalMaterial's attenuation, so they stay on the physical path.
 *
 * @param {import('three').Material} mat
 * @param {{ ior?: number, name?: string, shader?: string } | null} [override]
 * @param {import('three').Mesh | null} [mesh]
 */
export function shouldUseDiamondShader(mat, override = null, mesh = null) {
  if (!mat) return false;
  if (mat.userData?.isDiamondShaderMaterial) return true;
  // Explicit opt-in via override sidecar / preset wins over heuristics.
  if (override?.shader === 'diamond') return true;
  if (override?.shader && override.shader !== 'diamond') return false;

  const matName = (mat.name || '').toLowerCase();
  const meshName = (mesh?.name || '').toLowerCase();
  if (/diamond|moissanite/.test(matName) || /diamond|moissanite/.test(meshName)) return true;

  const overrideIor = typeof override?.ior === 'number' ? override.ior : null;
  const ior = overrideIor ?? (typeof mat.ior === 'number' ? mat.ior : 0);
  const transmission = typeof mat.transmission === 'number' ? mat.transmission : 0;
  const metalness = typeof mat.metalness === 'number' ? mat.metalness : 0;
  return ior >= 2.0 && transmission > 0.5 && metalness < 0.3;
}
