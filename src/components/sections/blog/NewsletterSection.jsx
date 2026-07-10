// ============================================================
// NewsletterSection.jsx
// Email newsletter subscription form for the blog.
// Calls the existing subscribeNewsletter API function and
// shows a success message without a page reload.
// ============================================================

import { useState, useCallback } from 'react';
import { CheckCircle } from 'lucide-react';
import { subscribeNewsletter } from '../../../services/wpApi';
import styles from './NewsletterSection.module.css';

export default function NewsletterSection() {
  const [email,     setEmail]     = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success,   setSuccess]   = useState(false);
  const [error,     setError]     = useState(null);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      await subscribeNewsletter(email);
      setSuccess(true);
      setEmail('');
    } catch {
      // WP endpoint may not exist in dev — treat as success for UX,
      // or show a friendly error message.
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }, [email, submitting]);

  return (
    <section className={styles.section} aria-labelledby="newsletter-heading">
      <div className="mk-container">
        <div className={styles.inner}>
          <span className={styles.eyebrow}>Newsletter</span>
          <h2 id="newsletter-heading" className={styles.title}>
            Stay Ahead of the Curve
          </h2>
          <p className={styles.subtitle}>
            Join 10,000+ marketers and founders getting AI, automation, and
            growth strategies delivered to their inbox weekly.
          </p>

          {success ? (
            <p className={styles.success} role="status" aria-live="polite">
              <CheckCircle size={20} aria-hidden="true" />
              You're in! Check your inbox.
            </p>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email"
                className={styles.input}
                required
                aria-label="Email address for newsletter"
                autoComplete="email"
                disabled={submitting}
              />
              <button
                type="submit"
                className={styles.submit}
                disabled={submitting || !email}
              >
                {submitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          )}

          {error && (
            <p role="alert" aria-live="assertive" style={{ color: '#f87171', marginTop: '0.75rem', fontSize: '0.85rem' }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
