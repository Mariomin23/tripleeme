#!/bin/bash
# Generate SVG placeholders for missing portfolio images

for i in 5 6; do
  cat > "portfolio-${i}.webp" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <rect width="600" height="400" fill="#0D1117"/>
  <rect x="1" y="1" width="598" height="398" fill="none" stroke="rgba(124,58,237,0.3)" stroke-width="1"/>
  <circle cx="300" cy="170" r="40" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.4)" stroke-width="1"/>
  <text x="300" y="177" text-anchor="middle" fill="rgba(124,58,237,0.7)" font-family="sans-serif" font-size="28">⬡</text>
  <text x="300" y="240" text-anchor="middle" fill="rgba(240,244,255,0.5)" font-family="sans-serif" font-size="16" font-weight="600">Proyecto ${i}</text>
  <text x="300" y="265" text-anchor="middle" fill="rgba(240,244,255,0.25)" font-family="sans-serif" font-size="12">TripleEme Portfolio</text>
</svg>
SVGEOF
done
