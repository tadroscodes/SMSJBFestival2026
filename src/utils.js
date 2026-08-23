// Builds an asset URL that respects Vite's `base` config (see vite.config.js).
// Use this any time you reference a file from /public in a component —
// plain "/images/..." strings will break once deployed under a subpath
// like https://<username>.github.io/coptic-festival/.
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL // e.g. "/coptic-festival/" or "/"
  return base + path.replace(/^\//, '')
}