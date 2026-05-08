// ----------------------------------------------------------------------------
// diamondMatcapMaterial.js — matcap-based diamond material
// ----------------------------------------------------------------------------
// A matcap ("material capture") is a 2D image sampled by the surface normal
// projected into view space. The result is a texture that's effectively
// "stuck to the surface" relative to the camera — the highlights stay in the
// same screen-space location as the diamond rotates.
//
// Tradeoffs vs the refraction shader:
//   + The cheapest possible material — one texture lookup per pixel. No
//     transmission render pass, no HDR, no equirect math. Ideal for iPhone.
//   + Works with any square photo / render of a diamond, like the one
//     bundled at public/diamond-matcap.png.
//   - The highlights track the camera, not the world. If the user stops
//     rotating mid-spin, the diamond can look slightly "frozen". For a
//     product viewer where the user is mostly orbiting, it's invisible.
//
// Property surface mirrors MeshPhysicalMaterial enough that the inspector,
// applyPreset, and the override sidecar can drive it without special-casing.
// ----------------------------------------------------------------------------

import { Color, ShaderMaterial, Vector3 } from 'three';

const VERTEX_SHADER = /* glsl */ `
varying vec2 vMatcapUv;

void main() {
  vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
  vec3 viewNormal = normalize(normalMatrix * normal);

  // Standard matcap projection: take the view-space normal, perturb it by
  // the view direction so the matcap stays anchored as the camera moves
  // across the surface, then map xy from [-1,1] to [0,1] UV space.
  vec3 viewDir = normalize(-viewPosition.xyz);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vMatcapUv = vec2(dot(x, viewNormal), dot(y, viewNormal)) * 0.495 + 0.5;

  gl_Position = projectionMatrix * viewPosition;
}
`;

const FRAGMENT_SHADER = /* glsl */ `
#include <common>
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>

uniform sampler2D matcap;
uniform vec3 tintColor;
uniform float intensity;

varying vec2 vMatcapUv;

void main() {
  vec3 sample = texture2D(matcap, vMatcapUv).rgb;
  vec3 col = sample * tintColor * intensity;
  vec4 outColor = vec4(col, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>

  gl_FragColor = outColor;
}
`;

/**
 * @typedef MatcapMaterialOptions
 * @property {string} [name]
 * @property {string | number} [color]
 * @property {import('three').Texture | null} [matcap]
 * @property {number} [intensity]
 */

/**
 * @param {MatcapMaterialOptions} [opts]
 */
export function createDiamondMatcapMaterial(opts = {}) {
  const uniforms = {
    matcap: { value: opts.matcap ?? null },
    tintColor: { value: new Color(0xffffff) },
    intensity: { value: typeof opts.intensity === 'number' ? opts.intensity : 1.0 }
  };

  const material = new ShaderMaterial({
    name: opts.name || 'DiamondMatcapMaterial',
    uniforms,
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    transparent: false,
    depthWrite: true,
    depthTest: true
  });

  material.userData.isDiamondMatcapMaterial = true;

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
    matcap: {
      enumerable: true,
      configurable: true,
      get() {
        return uniforms.matcap.value;
      },
      set(tex) {
        uniforms.matcap.value = tex || null;
      }
    },
    envMapIntensity: {
      enumerable: true,
      configurable: true,
      get() {
        return uniforms.intensity.value;
      },
      set(v) {
        if (typeof v === 'number') uniforms.intensity.value = v;
      }
    },
    // Aliased no-op numeric props so the inspector + override sidecar can
    // hand us the same JSON it gives a MeshPhysicalMaterial without erroring
    // or skipping the material entirely.
    metalness: writableNumber(0),
    roughness: writableNumber(0),
    transmission: writableNumber(1),
    thickness: writableNumber(0.3),
    ior: writableNumber(2.417),
    dispersion: writableNumber(0.8),
    clearcoat: writableNumber(0),
    clearcoatRoughness: writableNumber(0)
  });

  return material;
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
