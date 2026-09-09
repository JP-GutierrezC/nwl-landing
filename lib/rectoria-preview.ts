/**
 * Rectoría launch gate.
 *
 * Until `NEXT_PUBLIC_RECTORIA_PUBLIC=true` is set, /rectoria is a private
 * preview: the middleware only serves it to browsers that arrived once via
 * `/rectoria?preview=<token>` (which sets a cookie), the footer link, sitemap
 * entry and llms.txt mention stay out, and the page is marked noindex.
 *
 * To launch: set NEXT_PUBLIC_RECTORIA_PUBLIC=true in Vercel and redeploy.
 * Everything below reads the flag at build time (NEXT_PUBLIC_ is inlined).
 */
export const RECTORIA_PUBLIC = process.env.NEXT_PUBLIC_RECTORIA_PUBLIC === 'true';

export const RECTORIA_PREVIEW_COOKIE = 'nwl_rectoria_preview';
export const RECTORIA_PREVIEW_PARAM = 'preview';

/** Middleware-only: the token the preview link carries. Override with RECTORIA_PREVIEW_TOKEN. */
export function rectoriaPreviewToken(): string {
  return process.env.RECTORIA_PREVIEW_TOKEN || 'nwl-rectoria-2026';
}
