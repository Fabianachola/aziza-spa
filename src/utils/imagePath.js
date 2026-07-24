// src/utils/imagePath.js
// Resolves /images/... paths correctly in dev AND after `vite build` / `vue-cli-service build`
// so deploying to a sub-path (GitHub Pages, /app/, etc.) never breaks image URLs.

const BASE = (import.meta?.env?.BASE_URL ?? process.env.BASE_URL ?? '/').replace(/\/+$/, '/');

export function img(path) {
  if (!path) return '';
  // Absolute URL? leave it alone
  if (/^(https?:)?\/\//i.test(path)) return path;
  // Data URI? leave it
  if (path.startsWith('data:')) return path;
  // Strip any leading slash so we can safely join with BASE
  const clean = path.replace(/^\/+/, '');
  return `${BASE}${clean}`;
}
