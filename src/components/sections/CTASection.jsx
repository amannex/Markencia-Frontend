import { useState } from 'react';
import Button from '../ui/Button';
import styles from './CTASection.module.css';

/**
 * CTASection — reusable CTA with optional form or single link button.
 * Appears on Home, About, Services, etc.
 */
export default function CTASection({
  title = 'Ready to <span class="mk-highlight-text">Automate</span> Your Growth?',
  subtitle = "Stop wasting money on outdated marketing. Let's build an AI-powered system that prints revenue.",
  showForm = true,
  buttonText = 'Book Your Strategy Call',
  buttonHref = '/contact',
  disclaimer = 'No commitments. Just pure value and actionable strategies.',
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to WP REST API contact endpoint
    setSubmitted(true);
  };

  return (
    <section className={`mk-section ${styles.section}`} id="cta">
      <div className="mk-container">
        <div className={styles.box}>
          {/* Background glow */}
          <div className={styles.glowLeft} aria-hidden="true" />
          <div className={styles.glowRight} aria-hidden="true" />

          <div className={styles.content}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p>{subtitle}</p>

            {showForm ? (
              submitted ? (
                <div className={styles.success}>
                  <span>🎉</span>
                  <p>Thanks! We'll reach out within 24 hours.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    id="cta-name"
                    aria-label="Your name"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id="cta-email"
                    aria-label="Your work email"
                  />
                  <Button type="submit" variant="primary">
                    Claim Free Strategy Session
                  </Button>
                </form>
              )
            ) : (
              <Button href={buttonHref} variant="primary">
                {buttonText}
              </Button>
            )}

            {showForm && !submitted && (
              <p className={styles.disclaimer}>{disclaimer}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
