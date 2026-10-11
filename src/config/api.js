// ============================================================
// MARKENCIA — Multi-Environment API & CMS Configuration
// ============================================================
// Centralized configuration for both Local Development & Production.
// Next.js automatically sets process.env.NODE_ENV:
// - 'development' when running: npm run dev
// - 'production'  when running: npm run build / on Vercel
// ============================================================

export const WP_ENVIRONMENTS = {
  // Local development WordPress backend (MAMP, LocalWP, XAMPP, Docker)
  development: 'http://localhost:8888/wp-json',

  // Live production CMS backend (Hostinger)
  production: 'https://cms.markencia.com/wp-json',
};

/**
 * TOGGLE FOR LOCAL DEVELOPMENT:
 * - false: When running `npm run dev`, fetch from your local WordPress (localhost:8888).
 * - true:  When running `npm run dev`, fetch directly from the live cms.markencia.com backend.
 *
 * (Note: Production builds will ALWAYS use the production CMS regardless of this toggle).
 */
export const USE_LIVE_CMS_IN_DEV = false;

// Determine environment
const isDev = process.env.NODE_ENV === 'development';

// 1. Check if an explicit env variable is set (via .env.local, .env.development, or Vercel dashboard)
// 2. Otherwise, automatically resolve based on the active environment
const resolvedDefault = isDev
  ? (USE_LIVE_CMS_IN_DEV ? WP_ENVIRONMENTS.production : WP_ENVIRONMENTS.development)
  : WP_ENVIRONMENTS.production;

export const WP_API_BASE_URL = (
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_WP_API_URL) ||
  resolvedDefault
).replace(/\/+$/, '');

export const WP_ENDPOINTS = {
  base: WP_API_BASE_URL,
  wpV2: `${WP_API_BASE_URL}/wp/v2`,
  posts: `${WP_API_BASE_URL}/wp/v2/posts`,
  categories: `${WP_API_BASE_URL}/wp/v2/categories`,
  tags: `${WP_API_BASE_URL}/wp/v2/tags`,
  comments: `${WP_API_BASE_URL}/wp/v2/comments`,
  faqs: `${WP_API_BASE_URL}/wp/v2/faqs`,
  contactForm: `${WP_API_BASE_URL}/contact-form-7/v1/contact-forms/9/feedback`,
  newsletter: `${WP_API_BASE_URL}/markencia/v1/newsletter`,
};

// Helpful helper to inspect which environment is currently active
export const API_ENV_INFO = {
  isDevelopment: isDev,
  activeUrl: WP_API_BASE_URL,
  environment: isDev ? 'development' : 'production',
};
