// ----------------------------------------------------------------------------
// diamondShaderMaterial.js — BVH-based multi-bounce ray-traced diamond
// ----------------------------------------------------------------------------
// Earlier versions of this file did "single-refract + env-map sample" which
// gave a glassy look but missed the deep internal "fire" of a real diamond.
// This rewrite traces actual rays through the diamond mesh's geometry,
// bouncing up to N times against a BVH (bounding volume hierarchy) baked
// from the mesh, before sampling the gem HDR with the exit direction.
//
// Per fragment:
//   1. Refract the camera ray through the front facet using Snell's law.
//   2. Walk the BVH up to `bounces` times — at each step, take the first
//      facet hit. If we can refract out, take that direction and stop.
//      Otherwise reflect (total internal reflection) and continue.
//   3. Three-tap chromatic aberration: do steps 1+2 three times with three
//      slightly different IORs (one per RGB channel) so wavelength
//      separation produces the rainbow "fire".
//   4. Sample the equirectangular gem HDR at the final exit direction
//      using textureGrad with a screen-smooth derivative pair so we don't
//      get mipmap noise from chaotic ray directions.
//
// This is the same approach drei's MeshRefractionMaterial uses (originally
// by N8Programs). Ported here as vanilla Three.js so we can:
//   - integrate with our preset / override sidecar architecture
//   - apply iJewel-derived parameter defaults (IOR 2.6, dispersion 0.01,
//     bounces 5, fresnel 0.5)
//   - run on iPhone with WebGL2 (which iOS 15+ supports)
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
  GLSL3,
  Matrix4,
  ShaderMaterial,
  Vector2
} from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  MeshBVH,
  MeshBVHUniformStruct,
  shaderStructs,
  shaderIntersectFunction
} from 'three-mesh-bvh';

/**
 * Build a MeshBVH from a BufferGeometry, accepting non-indexed input by
 * indexing it on the fly. Returns null if construction fails for any reason.
 */
function buildBvh(geometry) {
  if (!geometry) return null;
  try {
    // three-mesh-bvh requires indexed geometry. GLBs usually export indexed
    // (especially Draco-compressed ones) but some pipelines drop the index.
    const indexed = geometry.index ? geometry : mergeVertices(geometry);
    return new MeshBVH(indexed);
  } catch (err) {
    console.warn('[diamond] failed to build BVH from geometry', err);
    return null;
  }
}

const VERTEX_SHADER = /* glsl */ `
uniform mat4 viewMatrixInverse;

varying vec3 vWorldPosition;
varying vec3 vNormal;
varying mat4 vModelMatrixInverse;

void main() {
  vModelMatrixInverse = inverse(modelMatrix);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPos.xyz;
  vNormal = normalize((viewMatrixInverse * vec4(normalMatrix * normal, 0.0)).xyz);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const FRAGMENT_SHADER = /* glsl */ `
precision highp isampler2D;
precision highp usampler2D;

varying vec3 vWorldPosition;
varying vec3 vNormal;
varying mat4 vModelMatrixInverse;

uniform sampler2D envMap;
uniform float bounces;
${shaderStructs}
${shaderIntersectFunction}
uniform BVH bvh;
uniform float ior;
uniform vec2 resolution;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrixInverse;
uniform mat4 viewMatrixInverse;
uniform float aberrationStrength;
uniform float fresnel;
uniform vec3 tintColor;
uniform float opacity;
uniform float envMapIntensity;

#include <common>
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>

const float TWO_PI = 6.28318530718;
const float ONE_OVER_PI = 0.31830988618;

vec2 equirectUv(vec3 dir) {
  vec3 d = normalize(dir);
  float u = atan(d.z, d.x) / TWO_PI + 0.5;
  float v = asin(clamp(d.y, -1.0, 1.0)) * ONE_OVER_PI + 0.5;
  return vec2(u, v);
}

float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
  return pow(1.0 + dot(viewDirection, worldNormal), 10.0);
}

// Trace a ray through the diamond, refracting through the front facet
// and then bouncing inside the mesh up to (bounces) uniform times.
// Returns the final exit direction in world space.
vec3 totalInternalReflection(vec3 ro, vec3 rd, vec3 normal, float etaIor, mat4 modelMatrixInverse) {
  vec3 rayOrigin = ro;
  vec3 rayDirection = rd;
  rayDirection = refract(rayDirection, normal, 1.0 / etaIor);
  rayOrigin = vWorldPosition + rayDirection * 0.001;
  // Move into local space — the BVH was built from the geometry's local
  // positions, so rays must traverse it in the same frame.
  rayOrigin = (modelMatrixInverse * vec4(rayOrigin, 1.0)).xyz;
  rayDirection = normalize((modelMatrixInverse * vec4(rayDirection, 0.0)).xyz);
  for (float i = 0.0; i < bounces; i++) {
    uvec4 faceIndices = uvec4(0u);
    vec3 faceNormal = vec3(0.0, 0.0, 1.0);
    vec3 barycoord = vec3(0.0);
    float side = 1.0;
    float dist = 0.0;
    bvhIntersectFirstHit(bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist);
    vec3 hitPos = rayOrigin + rayDirection * max(dist - 0.001, 0.0);
    vec3 tempDir = refract(rayDirection, faceNormal, etaIor);
    if (length(tempDir) != 0.0) {
      // Successful refraction out of the diamond — stop bouncing.
      rayDirection = tempDir;
      break;
    }
    // Total internal reflection — bounce off the back facet and continue.
    rayDirection = reflect(rayDirection, faceNormal);
    rayOrigin = hitPos + rayDirection * 0.01;
  }
  // Back to world space for the env-map sample.
  rayDirection = normalize((modelMatrix * vec4(rayDirection, 0.0)).xyz);
  return rayDirection;
}

// Sample the equirect env map with derivatives taken from a smooth
// screen-space direction (correctMips trick) so that adjacent fragments,
// whose chaotic ray directions differ wildly, don't bias the mipmap
// selection toward the highest blur level.
vec4 sampleEnvSmooth(vec3 dir, vec3 smoothDir) {
  vec2 uvCoord = equirectUv(dir);
  vec2 smoothUv = equirectUv(smoothDir);
  return textureGrad(envMap, uvCoord, dFdx(smoothUv), dFdy(smoothUv));
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  vec3 directionCamPerfect = (projectionMatrixInverse * vec4(uv * 2.0 - 1.0, 0.0, 1.0)).xyz;
  directionCamPerfect = (viewMatrixInverse * vec4(directionCamPerfect, 0.0)).xyz;
  directionCamPerfect = normalize(directionCamPerfect);
  vec3 normal = vNormal;
  vec3 rayOrigin = cameraPosition;
  vec3 rayDirection = normalize(vWorldPosition - cameraPosition);

  vec4 diffuseColor = vec4(tintColor, opacity);

  // Three full ray paths, one per RGB channel, at slightly different IORs.
  // This is more expensive than fast-chroma (offset only the final dir)
  // but produces correct dispersion at every internal facet hit.
  vec3 rayDirectionG = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior, 1.0), vModelMatrixInverse);
  vec3 rayDirectionR = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior * (1.0 - aberrationStrength), 1.0), vModelMatrixInverse);
  vec3 rayDirectionB = totalInternalReflection(rayOrigin, rayDirection, normal, max(ior * (1.0 + aberrationStrength), 1.0), vModelMatrixInverse);

  float finalColorR = sampleEnvSmooth(rayDirectionR, directionCamPerfect).r;
  float finalColorG = sampleEnvSmooth(rayDirectionG, directionCamPerfect).g;
  float finalColorB = sampleEnvSmooth(rayDirectionB, directionCamPerfect).b;
  diffuseColor.rgb *= vec3(finalColorR, finalColorG, finalColorB) * envMapIntensity;

  // Soft fresnel rim — pulls highlights toward white at grazing angles.
  vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
  float nFresnel = fresnelFunc(viewDirection, normal) * fresnel;

  // gl_FragColor must be written BEFORE the chunks below — they read it
  // (tonemapping_fragment runs gl_FragColor.rgb = toneMapping(...) and
  // colorspace_fragment runs gl_FragColor = linearToOutputTexel(...)).
  // If we set gl_FragColor after them, the chunks no-op on undefined memory
  // and the final colour skips both the tone-mapping AND sRGB conversion,
  // which on a Windows + ANGLE pipeline can render the surface as effectively
  // invisible (linear values ≪ 1 are clipped by the sRGB framebuffer).
  gl_FragColor = vec4(mix(diffuseColor.rgb, vec3(1.0), nFresnel), diffuseColor.a);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

/**
 * @typedef DiamondMaterialOptions
 * @property {string} [name]
 * @property {string | number} [color]
 * @property {import('three').Texture | null} [envMap]
 * @property {import('three').BufferGeometry | null} [geometry] - Source geometry to build a BVH from.
 * @property {import('three-mesh-bvh').MeshBVH | null} [bvh] - Pre-built BVH (overrides geometry).
 * @property {number} [ior]
 * @property {number} [dispersion]
 * @property {number} [bounces]
 * @property {number} [fresnel]
 * @property {number} [envMapIntensity]
 */

/**
 * Build a custom diamond material that ray-traces through the mesh's BVH.
 * One of `geometry` or `bvh` must be supplied so the shader has something
 * to bounce rays against.
 *
 * @param {DiamondMaterialOptions} [opts]
 */
export function createDiamondMaterial(opts = {}) {
  // Build the BVH first — if construction fails (non-indexed geometry that
  // can't be indexed, or a corrupt input), return null so the caller can
  // fall back to a non-BVH material rather than rendering an invisible mesh.
  const bvh = opts.bvh ?? buildBvh(opts.geometry);
  if (!bvh) {
    console.warn('[diamond] no BVH available; cannot create BVH ray-traced material');
    return null;
  }
  const bvhUniform = new MeshBVHUniformStruct();
  bvhUniform.updateFrom(bvh);

  // Defaults derived from a real diamond's optical properties, with small
  // boosts for screen-rendered punch (IOR 2.6 vs. physical 2.42).
  const uniforms = {
    envMap: { value: opts.envMap ?? null },
    bvh: { value: bvhUniform },
    bounces: { value: typeof opts.bounces === 'number' ? opts.bounces : 5 },
    ior: { value: typeof opts.ior === 'number' ? opts.ior : 2.6 },
    aberrationStrength: { value: typeof opts.dispersion === 'number' ? opts.dispersion : 0.01 },
    fresnel: { value: typeof opts.fresnel === 'number' ? opts.fresnel : 0.5 },
    tintColor: { value: new Color(opts.color ?? 0xffffff) },
    opacity: { value: 1.0 },
    envMapIntensity: { value: typeof opts.envMapIntensity === 'number' ? opts.envMapIntensity : 1.3 },
    resolution: { value: new Vector2(1, 1) },
    viewMatrixInverse: { value: new Matrix4() },
    projectionMatrixInverse: { value: new Matrix4() }
  };

  const material = new ShaderMaterial({
    name: opts.name || 'DiamondShaderMaterial',
    uniforms,
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    // The shader uses GLSL ES 3.00 features that don't exist in 1.00:
    //   - usampler2D / uvec4 / texelFetch (from three-mesh-bvh's BVH traversal)
    //   - textureGrad (sampleEnvSmooth)
    //   - precision qualifiers for isampler2D / usampler2D
    // Without GLSL3 here, three.js wraps the source as GLSL 1.00 and the
    // fragment shader fails to compile ("Fragment shader is not compiled").
    // GLSL3 mode also installs three's compat macros (varying → in/out,
    // gl_FragColor → pc_fragColor) so the existing source keeps working.
    glslVersion: GLSL3,
    transparent: false,
    depthWrite: true,
    depthTest: true
  });

  material.userData.isDiamondShaderMaterial = true;
  material.userData.bvh = bvh; // keep a strong ref so it isn't GC'd

  // ---- Property surface aliased to MeshPhysicalMaterial -------------------
  // The inspector, applyPreset and the override sidecar all probe materials
  // by reading mat.ior, mat.color, mat.dispersion, etc. Expose those as
  // ordinary getters/setters that read/write the uniforms behind the scenes.

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
        // Our shader does its own equirect UV math, so PMREM-packed
        // textures would sample as garbage. Silently ignore non-equirect
        // assignments — the gem env we wired in at construction stays.
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
        return uniforms.aberrationStrength.value;
      },
      set(v) {
        if (typeof v === 'number') uniforms.aberrationStrength.value = v;
      }
    },
    bounces: {
      enumerable: true,
      configurable: true,
      get() {
        return uniforms.bounces.value;
      },
      set(v) {
        if (typeof v === 'number') uniforms.bounces.value = v;
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
    reflectivity: {
      enumerable: true,
      configurable: true,
      get() {
        return uniforms.fresnel.value;
      },
      set(v) {
        if (typeof v === 'number') uniforms.fresnel.value = v;
      }
    },
    // Aliased no-op props so the inspector + override sidecar can apply the
    // same JSON they'd apply to a MeshPhysicalMaterial without skipping the
    // material entirely. None of these have any GLSL effect.
    metalness: writableNumber(0),
    roughness: writableNumber(0),
    transmission: writableNumber(1),
    thickness: writableNumber(0.3),
    clearcoat: writableNumber(0),
    clearcoatRoughness: writableNumber(0)
  });

  // Per-frame sync: camera position is built into Three's shaders, but the
  // matrices and resolution we need aren't, so wire them in onBeforeRender.
  material.onBeforeRender = function (renderer, _scene, cam) {
    renderer.getSize(uniforms.resolution.value);
    uniforms.viewMatrixInverse.value.copy(cam.matrixWorld);
    uniforms.projectionMatrixInverse.value.copy(cam.projectionMatrixInverse);
  };

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

/**
 * Heuristic: should this material be replaced with the diamond shader?
 *
 * Triggers in any of these cases:
 *   - The material is already our shader (re-applying overrides).
 *   - The override / preset explicitly asks for `shader: "diamond"`.
 *   - The material or host mesh is named like a diamond/moissanite (the
 *     GLB exporter often stamps a generic "Material.001" while the artist
 *     keeps "Diamond_Round" on the mesh).
 *   - The material has the high-IOR + transmission shape of a clear gem.
 *
 * Sapphires/rubies/emeralds (IOR 1.5–1.8) stay on the physical material
 * path because they need attenuation-based colour transmission.
 *
 * @param {import('three').Material} mat
 * @param {{ ior?: number, name?: string, shader?: string } | null} [override]
 * @param {import('three').Mesh | null} [mesh]
 */
export function shouldUseDiamondShader(mat, override = null, mesh = null) {
  if (!mat) return false;
  if (mat.userData?.isDiamondShaderMaterial) return true;
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
