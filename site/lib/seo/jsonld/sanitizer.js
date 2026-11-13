// site/lib/seo/jsonld/sanitizer.js - Zero-rates compliance and safety sanitizer for Schema.org JSON-LD

const FORBIDDEN_KEYS = new Set([
  'price',
  'pricerange',
  'offers',
  'hasoffercatalog',
  'offer',
  'rating',
  'reviewrating',
  'aggregaterating',
  'review',
  'reviews',
]);

const FORBIDDEN_TYPES = new Set([
  'offer',
  'offercatalog',
  'aggregaterating',
  'rating',
  'review',
]);

/**
 * Deeply sanitizes any structured data payload to strictly enforce the Zero Rates Policy
 * and prevent XSS script breakouts.
 *
 * @param {any} node
 * @returns {any} Sanitized node
 */
export function sanitizeSchemaNode(node) {
  if (node === null || node === undefined) return undefined;

  if (Array.isArray(node)) {
    const cleanedArray = node
      .map(sanitizeSchemaNode)
      .filter((item) => item !== undefined);
    return cleanedArray.length > 0 ? cleanedArray : undefined;
  }

  if (typeof node === 'object') {
    const result = {};

    // Check @type violations
    if (node['@type']) {
      const typeStr = String(node['@type']).toLowerCase();
      if (FORBIDDEN_TYPES.has(typeStr)) {
        return undefined; // Drop node entirely
      }
    }

    for (const [key, value] of Object.entries(node)) {
      const lowerKey = key.toLowerCase();
      if (FORBIDDEN_KEYS.has(lowerKey)) {
        continue; // Strictly omit commercial prices, offers, and review scores
      }

      const cleanedValue = sanitizeSchemaNode(value);
      if (cleanedValue !== undefined) {
        result[key] = cleanedValue;
      }
    }

    return Object.keys(result).length > 0 ? result : undefined;
  }

  if (typeof node === 'string') {
    return node.replace(/</g, '\\u003c');
  }

  return node;
}

