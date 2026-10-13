// ----------------------------------------------------------------------------
// materialNaming.js — self-describing GLB material naming convention
// ----------------------------------------------------------------------------
// Pure string logic (no three.js) that lets a GLB describe its own materials
// through node / material / group names baked in Rhino, so the viewer can map
// each piece to a preset in materialPresets.json *without* a per-model sidecar.
//
// Two things live here:
//   1. Compact metal/gem CODES used both in baked names and in runtime URL
//      params (?metal=YW, ?er=YWR, ?stone=RB, ?head=R …).
//   2. A parser that reads a material's name chain (material → mesh → ancestor
//      groups) and produces a { part, section, slot, kind, presetId } "role",
//      plus a resolver that layers runtime URL selections on top of the baked
//      default following a fixed precedence ladder.
//
// Metals are treated as COLORS, no karat. There are exactly six:
//   Y Yellow Gold · R Rose Gold · W White Gold · G Gun Metal ·
//   B Black Rhodium · T Tantalum
// Platinum and Silver were removed from the palette — both read as "white", so
// any legacy "platinum"/"silver" token in an existing GLB name resolves to
// White Gold instead of breaking.
//
// DESIGN NOTE — regression safety: parseMaterialRole() returns null unless the
// name chain shows a clear convention signal (a section token, a part token,
// or a spelled-out metal/gem alias). A material is only ever assigned a PRESET
// when its name carries an explicit colour/gem token; a bare section like
// "Shank" with no colour letter yields presetId=null so the viewer keeps its
// existing heuristic behaviour. That keeps models authored before this
// convention (generic "Material.001", "Interior", "SB" …) rendering exactly as
// they do today. Short single/double-letter CODES (Y, SB …) are only honoured
// when a stronger signal (section or spelled-out alias) is already present, so
// a stray "SB" material can't accidentally become a sapphire.
// ----------------------------------------------------------------------------

/** Single-letter metal codes → preset id. Six colours, no karat. */
export const METAL_CODES = {
  Y: 'yellow-gold',
  R: 'rose-gold',
  W: 'white-gold',
  G: 'gunmetal',
  B: 'black-rhodium',
  T: 'tantalum'
};

/** Gem codes (1–2 letters) → preset id. Full preset ids are also accepted. */
export const GEM_CODES = {
  D: 'diamond',
  M: 'moissanite',
  SB: 'sapphire-blue',
  SP: 'sapphire-pink',
  RB: 'ruby',
  EM: 'emerald',
  AM: 'amethyst',
  TB: 'topaz-blue',
  CT: 'citrine'
};

// Spelled-out metal aliases. `mode` 'sub' = substring match anywhere in the
// lowercased name chain (safe for words length ≥ 4); 'word' = whole-token match
// only (for short, otherwise-ambiguous abbreviations). Order is most-specific
// first. Legacy platinum/silver/sterling collapse to white-gold.
const METAL_ALIASES = [
  ['gunmetal', 'sub', 'gunmetal'],
  ['gun', 'word', 'gunmetal'],
  ['rhodium', 'sub', 'black-rhodium'],
  ['black', 'sub', 'black-rhodium'],
  ['tantalum', 'sub', 'tantalum'],
  ['tant', 'word', 'tantalum'],
  ['yellow', 'sub', 'yellow-gold'],
  ['yg', 'word', 'yellow-gold'],
  ['rose', 'sub', 'rose-gold'],
  ['pink', 'word', 'rose-gold'],
  ['rg', 'word', 'rose-gold'],
  ['white', 'sub', 'white-gold'],
  ['wg', 'word', 'white-gold'],
  // legacy → white
  ['platinum', 'sub', 'white-gold'],
  ['plat', 'word', 'white-gold'],
  ['pt', 'word', 'white-gold'],
  ['sterling', 'sub', 'white-gold'],
  ['silver', 'sub', 'white-gold'],
  ['925', 'word', 'white-gold']
];

// Section tokens → canonical param section + compact-code slot. Shank is the
// "base", head/setting/prong/etc is the "top", and details/accent/pavé form
// their own slot. `gem: true` marks a stone-bearing slot.
const SECTION_ALIASES = [
  ['shank', { section: 'shank', slot: 'base' }],
  ['setting', { section: 'head', slot: 'top' }],
  ['basket', { section: 'head', slot: 'top' }],
  ['prong', { section: 'head', slot: 'top' }],
  ['crown', { section: 'head', slot: 'top' }],
  ['head', { section: 'head', slot: 'top' }],
  ['gallery', { section: 'details', slot: 'details' }],
  ['accent', { section: 'details', slot: 'details' }],
  ['melee', { section: 'details', slot: 'details' }],
  ['pave', { section: 'details', slot: 'details' }],
  ['detail', { section: 'details', slot: 'details' }],
  ['band', { section: 'band', slot: 'base' }],
  ['stone', { section: 'stone', slot: null, gem: true }],
  ['gem', { section: 'gem', slot: null, gem: true }]
];

/**
 * Resolve a spelled-out gem alias from the name. Sapphire defaults to blue
 * unless "pink" is present; topaz defaults to blue. Returns a preset id or null.
 *
 * @param {string} joined - lowercased, space-joined name chain
 */
function matchGemAlias(joined) {
  if (joined.includes('moissanite') || joined.includes('moiss')) return 'moissanite';
  if (joined.includes('diamond')) return 'diamond';
  if (joined.includes('sapphire')) return joined.includes('pink') ? 'sapphire-pink' : 'sapphire-blue';
  if (joined.includes('ruby')) return 'ruby';
  if (joined.includes('emerald')) return 'emerald';
  if (joined.includes('amethyst')) return 'amethyst';
  if (joined.includes('topaz')) return 'topaz-blue';
  if (joined.includes('citrine')) return 'citrine';
  return null;
}

/** @param {string} joined @param {Set<string>} tokens */
function matchMetalAlias(joined, tokens) {
  for (const [pat, mode, id] of METAL_ALIASES) {
    if (mode === 'sub' ? joined.includes(pat) : tokens.has(pat)) return id;
  }
  return null;
}

/** @param {string} joined @param {Set<string>} tokens */
function matchSection(joined, tokens) {
  for (const [pat, info] of SECTION_ALIASES) {
    // 'dia'-style ambiguity isn't a concern here; section words are ≥ 3 chars
    // and meaningful as substrings within compound names like "Diamond_Halo".
    if (joined.includes(pat) || tokens.has(pat)) return info;
  }
  return null;
}

/** @param {string} joined @param {Set<string>} tokens */
function matchPart(joined, tokens) {
  // Band-ish first, mirroring ringParts.js so the two detectors never disagree.
  if (joined.includes('wedding') || tokens.has('mb') || tokens.has('wb') || joined.includes('band')) {
    return 'band';
  }
  if (joined.includes('engagement') || joined.includes('ering') || tokens.has('er') || tokens.has('eng') || joined.includes('ring')) {
    return 'engagement';
  }
  return null;
}

/**
 * Decompose a compact metal code into base/top/details preset ids.
 *   1 letter  → solid (base = top = details)
 *   2 letters → base + top, details left to the baked default
 *   3 letters → base + top + details
 * Returns null if any letter isn't a known metal code.
 *
 * @param {string} code
 * @returns {{ base: string, top: string, details: string | null } | null}
 */
export function parseMetalCode(code) {
  if (!code) return null;
  const c = String(code).trim().toUpperCase();
  if (!c || c.length > 3) return null;
  const ids = [];
  for (const ch of c) {
    const id = METAL_CODES[ch];
    if (!id) return null;
    ids.push(id);
  }
  return {
    base: ids[0],
    top: ids.length >= 2 ? ids[1] : ids[0],
    details: ids.length >= 3 ? ids[2] : ids.length === 1 ? ids[0] : null
  };
}

/** Pick the preset for a given slot out of a compact metal code. */
function metalForSlot(code, slot) {
  const dec = parseMetalCode(code);
  if (!dec) return null;
  return dec[slot || 'base'] ?? null;
}

/**
 * Build the name chain for a material: its own name, then the host mesh and
 * every ancestor up to — but not including — the object that was added to the
 * scene. Stopping before the added root keeps a generic wrapper name
 * ("Scene" / "RootNode") from injecting stray tokens.
 *
 * @param {import('three').Material | null} material
 * @param {import('three').Object3D | null} mesh
 * @param {import('three').Object3D | null} addedRoot
 * @returns {string[]}
 */
export function buildNameChain(material, mesh, addedRoot = null) {
  const names = [];
  if (material && material.name) names.push(material.name);
  let node = mesh;
  while (node && node !== addedRoot) {
    if (node.name) names.push(node.name);
    node = node.parent;
  }
  return names;
}

/**
 * Parse a material's role from its name chain.
 *
 * @param {string[]} names
 * @returns {{ part: ('engagement'|'band'|null), section: (string|null),
 *            slot: ('base'|'top'|'details'|null), kind: ('metal'|'gem'),
 *            presetId: (string|null) } | null}
 */
export function parseMaterialRole(names) {
  if (!names || names.length === 0) return null;
  const joined = names.join(' ').toLowerCase();
  const tokens = new Set(joined.split(/[^a-z0-9]+/).filter(Boolean));

  const sectionInfo = matchSection(joined, tokens);
  const metalAlias = matchMetalAlias(joined, tokens);
  const gemAlias = matchGemAlias(joined);
  const part = matchPart(joined, tokens);

  // A spelled-out alias or a recognised section is a strong signal; a part
  // token alone is weak (it only narrows piece, not appearance).
  const strongSignal = !!sectionInfo || !!metalAlias || !!gemAlias;
  if (!strongSignal && !part) return null;

  let kind = null;
  let presetId = null;

  if (gemAlias) {
    kind = 'gem';
    presetId = gemAlias;
  } else if (metalAlias) {
    kind = 'metal';
    presetId = metalAlias;
  } else if (strongSignal) {
    // Only consult short CODE tokens once a stronger signal is established.
    const gemCode = matchCode(tokens, GEM_CODES);
    if (gemCode) {
      kind = 'gem';
      presetId = GEM_CODES[gemCode];
    } else {
      const metalCode = matchCode(tokens, METAL_CODES);
      if (metalCode) {
        kind = 'metal';
        presetId = metalForSlot(metalCode, sectionInfo ? sectionInfo.slot : null);
      }
    }
  }

  if (!kind) {
    // No colour token — infer kind from the section's nature so URL params can
    // still target it, but leave presetId null (keeps the heuristic in charge).
    kind = sectionInfo && sectionInfo.gem ? 'gem' : 'metal';
  }

  return {
    part,
    section: sectionInfo ? sectionInfo.section : null,
    slot: sectionInfo ? sectionInfo.slot : null,
    kind,
    presetId
  };
}

/** Whole-token lookup in a code map (keys are upper-case). */
function matchCode(tokens, map) {
  for (const tok of tokens) {
    const up = tok.toUpperCase();
    if (Object.prototype.hasOwnProperty.call(map, up)) return up;
  }
  return null;
}

/**
 * Resolve the effective preset for a role, layering a runtime URL selection on
 * top of the baked default. Precedence (first hit wins):
 *   1. per-part-section param  (er-shank, er-head, er-details, mb-band, …)
 *   2. per-section param       (shank, head, details, band  /  stone)
 *   3. per-piece compact code  (er / mb, decomposed by slot  /  per-part stone)
 *   4. global compact code     (metal, decomposed by slot    /  global stone)
 *   5. baked default from the GLB name (role.presetId)
 *
 * @param {ReturnType<typeof parseMaterialRole>} role
 * @param {object | null} selection - shape from readMaterialSelectionFromUrl()
 * @returns {{ presetId: string | null, kind: ('metal'|'gem'|null) }}
 */
export function resolveEffectivePreset(role, selection) {
  if (!role) return { presetId: null, kind: null };
  const sel = selection || {};
  const { part, section, slot, kind } = role;
  const pieceKey = part === 'engagement' ? 'er' : part === 'band' ? 'mb' : null;

  if (kind === 'gem') {
    if (part && sel.stones && sel.stones[part]) return { presetId: sel.stones[part], kind };
    if (sel.stoneId) return { presetId: sel.stoneId, kind };
    return { presetId: role.presetId, kind };
  }

  // metal
  if (pieceKey && section && sel.partSections) {
    const v = sel.partSections[`${pieceKey}-${section}`];
    if (v) return { presetId: v, kind };
  }
  if (section && sel.sections && sel.sections[section]) {
    return { presetId: sel.sections[section], kind };
  }
  if (pieceKey) {
    const code = pieceKey === 'er' ? sel.erCode : sel.mbCode;
    const v = code ? metalForSlot(code, slot) : null;
    if (v) return { presetId: v, kind };
  }
  if (sel.metalCode) {
    const v = metalForSlot(sel.metalCode, slot);
    if (v) return { presetId: v, kind };
  }
  return { presetId: role.presetId, kind };
}
