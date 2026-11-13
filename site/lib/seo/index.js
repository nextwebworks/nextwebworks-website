// site/lib/seo/index.js - Unified barrel export for Next Web Works Technical SEO engine

export { SEO_CONFIG } from './config.js';
export { buildRouteMetadata } from './metadata/builder.js';
export {
  buildLinkedGraph,
  buildOrganizationNode,
  buildWebSiteNode,
  buildBreadcrumbNode,
  buildFAQNode,
} from './jsonld/graph.js';
export { sanitizeSchemaNode } from './jsonld/sanitizer.js';

