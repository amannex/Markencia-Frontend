// ============================================================
// MARKENCIA — WordPress REST API Service
// Base URL is read from environment variable VITE_WP_API_URL
// Falls back to static data when the API is unavailable
// ============================================================

const BASE_URL = import.meta.env.VITE_WP_API_URL || 'http://localhost:8888/markencia/wp-json';

const WP_API = `${BASE_URL}/wp/v2`;
const ACF_API = `${BASE_URL}/acf/v3`;

// ---- Generic fetch helper ----
async function apiFetch(url, options = {}) {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`WP API Error: ${response.status} ${response.statusText} — ${url}`);
  }
  return response.json();
}

// ---- Posts ----
export async function getPosts(params = {}) {
  const query = new URLSearchParams({
    _embed: true,
    per_page: 10,
    ...params,
  });
  return apiFetch(`${WP_API}/posts?${query}`);
}

export async function getPostBySlug(slug) {
  const data = await apiFetch(`${WP_API}/posts?slug=${slug}&_embed=true`);
  if (!data || data.length === 0) throw new Error(`Post not found: ${slug}`);
  return data[0];
}

// ---- Pages ----
export async function getPageBySlug(slug) {
  const data = await apiFetch(`${WP_API}/pages?slug=${slug}&_embed=true&acf_format=standard`);
  if (!data || data.length === 0) throw new Error(`Page not found: ${slug}`);
  return data[0];
}

// ---- ACF Fields ----
export async function getAcfFields(postType, id) {
  return apiFetch(`${ACF_API}/${postType}/${id}`);
}

// ---- Media ----
export async function getMedia(id) {
  return apiFetch(`${WP_API}/media/${id}`);
}

// ---- Contact Form Submission ----
// Submits to a custom WP REST API endpoint added via functions.php
export async function submitContactForm(formData) {
  return apiFetch(`${BASE_URL}/markencia/v1/contact`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

// ---- Newsletter Subscription ----
export async function subscribeNewsletter(email) {
  return apiFetch(`${BASE_URL}/markencia/v1/newsletter`, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}
