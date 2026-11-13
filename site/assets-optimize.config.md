# Asset Optimization Configuration & Rationale

**Project:** Next Web Works (`nextwebworks-website`)  
**Timestamp:** 2026-11-11  
**Stock Ceiling:** 0 (Strict Zero Stock Policy enforced; in-house SVGs, schematics, and authentic photography only)

## Execution Command
```bash
node scripts/assets-optimizer/index.js \
  --input ../assets-source \
  --output public/assets \
  --image-format webp \
  --quality 75 \
  --max-size 61440 \
  --strict-max-size 102400 \
  --concurrency 4 \
  --responsive \
  --manifest-dir public/assets
```

## Manifest Summary
- Indexed assets: 3 in-house SVG covers for launch blog posts (`blog-playbook`, `blog-scoping`, `blog-headless`).
- Zero stock imagery allocated (`stock-provenance.json` verified with `stock_ceiling: 0`).
- In-house vector graphics (zero stock ceiling verified).
