// ============================================================
// MARKENCIA — Forms & Newsletter Service
// Handles contact form submissions and newsletter subscriptions
// ============================================================

const BASE_URL = import.meta.env.VITE_WP_API_URL || 'http://localhost:8888/wp-json/';

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

// ---- Contact Form Submission ----
// Submits to Contact Form 7 REST API endpoint
export async function submitContactForm(formData) {
  // CF7 requires FormData instead of JSON
  const form = new FormData();
  
  // CF7 explicitly requires these hidden system fields to process the REST API request
  form.append('_wpcf7', '9');
  form.append('_wpcf7_unit_tag', 'wpcf7-f9-p1-o1');
  form.append('_wpcf7_container_post', '0');

  Object.keys(formData).forEach(key => {
    form.append(key, formData[key]);
  });

  // Standard fetch is used here because CF7 needs multipart/form-data with boundaries
  const response = await fetch(`${BASE_URL}/contact-form-7/v1/contact-forms/9/feedback`, {
    method: 'POST',
    body: form,
  });

  // CF7 returns 400 Bad Request if validation fails, so we parse the JSON response first
  const data = await response.json().catch(() => null);

  if (!response.ok && (!data || !data.status)) {
    throw new Error(`CF7 Error: ${response.status} ${response.statusText}`);
  }
  
  return data;
}

// ---- Newsletter Subscription ----
export async function subscribeNewsletter(email) {
  return apiFetch(`${BASE_URL}/markencia/v1/newsletter`, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}
