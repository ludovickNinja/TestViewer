// ----------------------------------------------------------------------------
// PartSelector.js
// ----------------------------------------------------------------------------
// Floating chip dropdown that lets the customer choose which part of the
// model is visible when a GLB contains both an engagement ring and a matching
// band: "Engagement Ring", "Matching Band", or "Show Both".
//
// Only mount this component when both parts are present in the GLB. When
// only one is present there's nothing to choose between.
// ----------------------------------------------------------------------------

const OPTIONS = [
  { value: 'all', label: 'Show Both' },
  { value: 'engagement', label: 'Engagement Ring' },
  { value: 'band', label: 'Matching Band' }
];

/**
 * @param {{
 *   initial?: 'engagement' | 'band' | 'all',
 *   onChange: (value: 'engagement' | 'band' | 'all') => void
 * }} options
 * @returns {{
 *   element: HTMLElement,
 *   setValue: (value: 'engagement' | 'band' | 'all') => void,
 * }}
 */
export function createPartSelector({ initial = 'all', onChange }) {
  const el = document.createElement('label');
  el.className = 'nc-part-selector';

  const text = document.createElement('span');
  text.className = 'nc-part-selector__label';
  text.textContent = 'View';
  el.appendChild(text);

  const select = document.createElement('select');
  select.className = 'nc-part-selector__select';
  select.setAttribute('aria-label', 'Show engagement ring, matching band, or both');
  for (const opt of OPTIONS) {
    const o = document.createElement('option');
    o.value = opt.value;
    o.textContent = opt.label;
    select.appendChild(o);
  }
  select.value = initial;
  el.appendChild(select);

  select.addEventListener('change', () => {
    onChange(/** @type {'engagement' | 'band' | 'all'} */ (select.value));
  });

  return {
    element: el,
    setValue(value) {
      if (select.value !== value) select.value = value;
    }
  };
}
