// ============================================================
// MARKENCIA — WordPress REST API Service (Blog Domain)
// ============================================================
// Production-grade service layer for the Blog feature.
// Uses native Fetch API with AbortController support,
// _embed for single-request hydration, and ACF field formatting.
//
// Every public function accepts an optional AbortSignal so that
// calling components can cancel in-flight requests on unmount,
// preventing state updates on unmounted React components.
// ============================================================

// ---- Configuration ----
// Base URL is injected via Vite env variable at build time.
// Falls back to local MAMP/XAMPP development server.
const BASE_URL = import.meta.env.VITE_WP_API_URL || 'http://localhost:8888/markencia/wp-json';
const WP   = `${BASE_URL}/wp/v2`;

// Default timeout (ms) for all API requests to prevent hanging fetches.
const DEFAULT_TIMEOUT_MS = 12000;

// ============================================================
// INTERNAL: Core Fetch Wrapper
// ============================================================

/**
 * Executes a fetch request against the WordPress REST API.
 *
 * Features:
 * - Automatic JSON parsing of the response body.
 * - Structured error objects containing status, statusText, and URL.
 * - AbortController integration: accepts an external signal and
 *   also applies a default timeout to prevent zombie requests.
 * - Returns both the parsed body and the raw Response headers,
 *   which is critical for extracting WP pagination headers
 *   (X-WP-Total, X-WP-TotalPages).
 *
 * @param {string}       endpoint  Full URL to fetch.
 * @param {Object}       options   Optional fetch overrides.
 * @param {AbortSignal}  [options.signal]  Caller-provided abort signal.
 * @returns {Promise<{ body: any, headers: Headers }>}
 */
async function wpFetch(endpoint, { signal: externalSignal, ...restOptions } = {}) {
  // Create an internal timeout controller.
  // If the caller also provides a signal we link them together
  // so that either one can abort the request.
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), DEFAULT_TIMEOUT_MS);

  // Combine the external signal (from React) with the internal timeout.
  // If the external signal fires first, it cancels the request.
  // If the timeout fires first, it cancels the request.
  const combinedSignal = externalSignal
    ? AbortSignal.any([externalSignal, timeoutController.signal])
    : timeoutController.signal;

  try {
    const response = await fetch(endpoint, {
      headers: { 'Accept': 'application/json' },
      signal: combinedSignal,
      ...restOptions,
    });

    if (!response.ok) {
      // Build a descriptive error from the WP REST API response.
      let errorBody = {};
      try {
        errorBody = await response.json();
      } catch {
        // Response body wasn't JSON; that's fine, we still have status.
      }
      const error = new Error(
        errorBody.message || `WordPress API Error: ${response.status} ${response.statusText}`
      );
      error.status = response.status;
      error.endpoint = endpoint;
      throw error;
    }

    const body = await response.json();
    return { body, headers: response.headers };
  } catch (err) {
    // Re-throw AbortError with a cleaner message for consumer hooks.
    if (err.name === 'AbortError') {
      const abortError = new Error('Request was cancelled.');
      abortError.name = 'AbortError';
      abortError.endpoint = endpoint;
      throw abortError;
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// ============================================================
// INTERNAL: Query String Builder
// ============================================================

/**
 * Builds a URLSearchParams string from a params object.
 * Automatically injects `_embed=true` for rich responses
 * and `acf_format=standard` for consistent ACF output.
 *
 * @param {Object} params  Key-value query parameters.
 * @returns {string}       Serialized query string (without leading `?`).
 */
function buildQuery(params = {}) {
  const defaults = {
    _embed: true,
    acf_format: 'standard',
  };

  // Merge defaults, then overrides. Filter out undefined/null values.
  const merged = { ...defaults, ...params };
  const filtered = Object.fromEntries(
    Object.entries(merged).filter(([, v]) => v !== undefined && v !== null)
  );

  return new URLSearchParams(filtered).toString();
}

// ============================================================
// PUBLIC API: Posts
// ============================================================

/**
 * Fetches a paginated list of blog posts.
 *
 * @param {Object}       [params]                   WP REST API query params.
 * @param {number}       [params.per_page=10]       Posts per page.
 * @param {number}       [params.page=1]            Current page number.
 * @param {number}       [params.categories]        Filter by category ID.
 * @param {number}       [params.tags]              Filter by tag ID.
 * @param {string}       [params.search]            Full-text search query.
 * @param {string}       [params.orderby='date']    Sort field.
 * @param {string}       [params.order='desc']      Sort direction.
 * @param {AbortSignal}  [params.signal]            AbortController signal.
 * @returns {Promise<{ posts: Array, total: number, totalPages: number }>}
 */
export async function getAllPosts({
  signal,
  per_page = 10,
  page = 1,
  categories,
  tags,
  search,
  orderby = 'date',
  order = 'desc',
  ...rest
} = {}) {
  const query = buildQuery({
    per_page,
    page,
    categories,
    tags,
    search,
    orderby,
    order,
    ...rest,
  });

  const { body, headers } = await wpFetch(`${WP}/posts?${query}`, { signal });

  return {
    posts: body,
    total: parseInt(headers.get('X-WP-Total') || '0', 10),
    totalPages: parseInt(headers.get('X-WP-TotalPages') || '0', 10),
  };
}

/**
 * Fetches a single post by its URL slug.
 * WordPress returns an array for slug queries — this extracts the first match.
 *
 * @param {string}       slug      The post URL slug.
 * @param {Object}       [options]
 * @param {AbortSignal}  [options.signal]  AbortController signal.
 * @returns {Promise<Object>}  The single post object with _embedded data.
 * @throws {Error}  If no post matches the given slug.
 */
export async function getPostBySlug(slug, { signal } = {}) {
  if (!slug || typeof slug !== 'string') {
    throw new Error('getPostBySlug: A valid slug string is required.');
  }

  const query = buildQuery({ slug });
  const { body } = await wpFetch(`${WP}/posts?${query}`, { signal });

  if (!Array.isArray(body) || body.length === 0) {
    const error = new Error(`Post not found: "${slug}"`);
    error.status = 404;
    throw error;
  }

  return body[0];
}

/**
 * Fetches posts related to a given post by shared category IDs.
 * Excludes the source post from the results.
 *
 * Strategy: Uses the first category of the source post to find siblings.
 * Falls back to latest posts if the source has no categories.
 *
 * @param {Object}       post                The source post object (must contain `categories` array and `id`).
 * @param {Object}       [options]
 * @param {number}       [options.count=3]   Number of related posts to return.
 * @param {AbortSignal}  [options.signal]    AbortController signal.
 * @returns {Promise<Array>}  Array of related post objects.
 */
export async function getRelatedPosts(post, { count = 3, signal } = {}) {
  if (!post || !post.id) {
    throw new Error('getRelatedPosts: A valid post object with an `id` is required.');
  }

  // Use the first category ID to find related content.
  // Category ID 1 is "Uncategorized" in WP — skip it if possible.
  const categoryIds = (post.categories || []).filter((id) => id !== 1);
  const primaryCategory = categoryIds.length > 0 ? categoryIds[0] : undefined;

  const query = buildQuery({
    per_page: count + 1, // Fetch one extra in case the source post appears
    exclude: post.id,
    ...(primaryCategory ? { categories: primaryCategory } : {}),
  });

  const { body } = await wpFetch(`${WP}/posts?${query}`, { signal });

  // Ensure we never return the source post and cap at requested count.
  return body.filter((p) => p.id !== post.id).slice(0, count);
}

// ============================================================
// PUBLIC API: Taxonomies
// ============================================================

/**
 * Fetches all blog categories.
 *
 * @param {Object}       [options]
 * @param {number}       [options.per_page=100]  Max categories to return.
 * @param {boolean}      [options.hide_empty=true]  Exclude categories with 0 posts.
 * @param {AbortSignal}  [options.signal]  AbortController signal.
 * @returns {Promise<Array>}  Array of category objects with id, name, slug, count.
 */
export async function getCategories({ per_page = 100, hide_empty = true, signal } = {}) {
  const query = buildQuery({
    per_page,
    hide_empty,
    // Categories don't need _embed or acf_format — override defaults.
    _embed: undefined,
    acf_format: undefined,
  });

  const { body } = await wpFetch(`${WP}/categories?${query}`, { signal });
  return body;
}

/**
 * Fetches all blog tags.
 *
 * @param {Object}       [options]
 * @param {number}       [options.per_page=100]  Max tags to return.
 * @param {boolean}      [options.hide_empty=true]  Exclude tags with 0 posts.
 * @param {AbortSignal}  [options.signal]  AbortController signal.
 * @returns {Promise<Array>}  Array of tag objects with id, name, slug, count.
 */
export async function getTags({ per_page = 100, hide_empty = true, signal } = {}) {
  const query = buildQuery({
    per_page,
    hide_empty,
    _embed: undefined,
    acf_format: undefined,
  });

  const { body } = await wpFetch(`${WP}/tags?${query}`, { signal });
  return body;
}
