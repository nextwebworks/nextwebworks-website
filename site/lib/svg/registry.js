// site/lib/svg/registry.js - Central scene registry and dispatcher

import {
  BlogSceneGrowth,
  BlogSceneScoping,
  BlogSceneArchitecture,
  BlogSceneGeneral,
  ServiceSceneWebsites,
  ServiceSceneWebApps,
  ServiceSceneErps,
  ServiceSceneMobileApps,
  ServiceSceneCmsPlatforms,
  WorkSceneNwwCmsKit,
  WorkSceneClassymenu,
  WorkSceneCeramicsales,
  WorkSceneFallback,
} from './scenes/index.js';

function normalizeSlug(str = '') {
  return String(str).toLowerCase().trim();
}

export function renderSvgScene({ kind = 'blog', category = '', slug = '', prng }) {
  const normSlug = normalizeSlug(slug);
  const normCat = normalizeSlug(category);

  if (kind === 'service') {
    if (normSlug.includes('website') || normCat.includes('website')) return <ServiceSceneWebsites prng={prng} />;
    if (normSlug.includes('web-app') || normSlug.includes('portal') || normCat.includes('app')) return <ServiceSceneWebApps prng={prng} />;
    if (normSlug.includes('erp') || normCat.includes('erp')) return <ServiceSceneErps prng={prng} />;
    if (normSlug.includes('mobile') || normCat.includes('mobile')) return <ServiceSceneMobileApps prng={prng} />;
    if (normSlug.includes('cms') || normCat.includes('cms') || normCat.includes('no-code')) return <ServiceSceneCmsPlatforms prng={prng} />;
    return <ServiceSceneWebApps prng={prng} />;
  }

  if (kind === 'work') {
    if (normSlug.includes('cms-kit') || normSlug.includes('nww-cms')) return <WorkSceneNwwCmsKit prng={prng} />;
    if (normSlug.includes('classymenu') || normSlug.includes('dining')) return <WorkSceneClassymenu prng={prng} />;
    if (normSlug.includes('ceramicsales') || normSlug.includes('wholesale')) return <WorkSceneCeramicsales prng={prng} />;
    return <WorkSceneFallback prng={prng} />;
  }

  // Blog kind matching
  if (normCat.includes('growth') || normCat.includes('strategy') || normCat.includes('agency')) {
    return <BlogSceneGrowth prng={prng} />;
  }
  if (normCat.includes('scoping') || normCat.includes('scope') || normCat.includes('pricing') || normCat.includes('fixed')) {
    return <BlogSceneScoping prng={prng} />;
  }
  if (normCat.includes('arch') || normCat.includes('stack') || normCat.includes('next') || normCat.includes('web') || normCat.includes('headless')) {
    return <BlogSceneArchitecture prng={prng} />;
  }

  return <BlogSceneGeneral prng={prng} />;
}
