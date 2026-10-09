// ============================================================
// MARKENCIA — Site Settings & Identity Service (WordPress REST API)
// ============================================================

import { WP_API_BASE_URL } from '../../config/api.js';

const DEFAULT_FAVICON_URL =
  'https://cms.markencia.com/wp-content/uploads/2026/10/Markencia-logo.png';

/**
 * Fetches the site identity settings and favicon from WordPress REST API.
 * 1. Checks the root /wp-json/ endpoint which exposes `site_icon_url`.
 * 2. If not found or if offline, falls back to the configured logo URL.
 *
 * @returns {Promise<{ name: string, description: string, faviconUrl: string, logoUrl: string }>}
 */
export async function getSiteIdentity() {
  try {
    const res = await fetch(`${WP_API_BASE_URL}/`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
    });

    if (res.ok) {
      const data = await res.json();
      const faviconUrl = data?.site_icon_url || DEFAULT_FAVICON_URL;

      return {
        name: data?.name || 'Markencia',
        description: data?.description || 'Open minds. Solid engineering',
        faviconUrl: faviconUrl,
        logoUrl: DEFAULT_FAVICON_URL,
      };
    }
  } catch (err) {
    console.warn(
      '[getSiteIdentity] Failed to fetch site identity from WordPress REST API:',
      err.message
    );
  }

  return {
    name: 'Markencia',
    description: 'Open minds. Solid engineering',
    faviconUrl: DEFAULT_FAVICON_URL,
    logoUrl: DEFAULT_FAVICON_URL,
  };
}

/**
 * Convenience helper to fetch just the favicon URL from the REST API.
 * @returns {Promise<string>}
 */
export async function getSiteFavicon() {
  const identity = await getSiteIdentity();
  return identity.faviconUrl;
}
