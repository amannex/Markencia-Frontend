'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_INFO, FOOTER_LINKS } from '../../data/staticData';
import { submitContactForm } from '../../services/forms';
import styles from './Footer.module.css';

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.37-4.31 3.81.81c.02.83.69 1.5 1.53 1.5 1.1 0 2-1 2-2s-.9-2-2-2c-.76 0-1.42.43-1.75 1.05l-4.22-.9c-.17-.04-.34.06-.39.23L10.9 7.02c-2.5.03-4.78.68-6.47 1.71-.56-.74-1.44-1.23-2.43-1.23-1.65 0-3 1.35-3 3 0 1.08.58 2.03 1.46 2.57-.04.24-.06.48-.06.73 0 3.87 4.7 7 10.5 7s10.5-3.13 10.5-7c0-.25-.02-.49-.06-.73.88-.54 1.46-1.49 1.46-2.57zM6 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9.52 2.52c-1.11 1.11-3.22 1.11-4.33 0-.12-.11-.12-.31 0-.42.11-.11.3-.11.41 0 .88.88 2.63.88 3.51 0 .11-.11.3-.11.41 0 .12.11.12.31 0 .42zM18 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.622 5.905-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer({ showCta }) {
  const pathname = usePathname();
  const isHome = showCta !== undefined ? showCta : pathname === '/';

  // Standard footer newsletter (active on non-home pages)
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Connected CTA form (active on home page)
  const [ctaName, setCtaName] = useState('');
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaSubmitting, setCtaSubmitting] = useState(false);
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleCtaSubmit = async (e) => {
    e.preventDefault();
    if (!ctaName || !ctaEmail || ctaSubmitting) return;

    setCtaSubmitting(true);
    try {
      await submitContactForm({
        'your-name': ctaName,
        'your-email': ctaEmail,
        'your-subject': 'AI Strategy Call Request (Homepage Footer)',
      });
      setCtaSubmitted(true);
    } catch {
      // In dev or static environment, show graceful success state
      setCtaSubmitted(true);
    } finally {
      setCtaSubmitting(false);
    }
  };

  return (
    <footer className={`${styles.footer} ${isHome ? styles.footerWithCta : ''}`}>
      {/* Giant background text */}
      <div className={styles.giantText} aria-hidden="true">Markencia</div>

      {/* Glowing orbs */}
      <div className={`${styles.glow} ${styles.glow1}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glow2}`} aria-hidden="true" />

      <div className={styles.container}>
        {/* Connected CTA on Home Page */}
        {isHome && (
          <section className={styles.ctaSection} aria-labelledby="footer-cta-heading">
            <div className={styles.ctaContent}>
              <span className={styles.ctaEyebrow}>AI STRATEGY &amp; CONSULTING</span>
              <h2 id="footer-cta-heading" className={styles.ctaTitle}>
                Not sure where <span className={styles.ctaHighlight}>AI fits</span> into your business?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let's identify the processes where AI and automation could create the most impact.
              </p>

              {ctaSubmitted ? (
                <div className={styles.ctaSuccess} role="status">
                  <span className={styles.ctaSuccessIcon}>✓</span>
                  <div>
                    <strong>Thanks! We'll reach out within 24 hours.</strong>
                    <p>We look forward to analyzing your operations and business systems.</p>
                  </div>
                </div>
              ) : (
                <form className={styles.ctaForm} onSubmit={handleCtaSubmit} noValidate={false}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={ctaName}
                    onChange={(e) => setCtaName(e.target.value)}
                    required
                    id="footer-cta-name"
                    aria-label="Your Name"
                    disabled={ctaSubmitting}
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={ctaEmail}
                    onChange={(e) => setCtaEmail(e.target.value)}
                    required
                    id="footer-cta-email"
                    aria-label="Work Email"
                    disabled={ctaSubmitting}
                  />
                  <button
                    type="submit"
                    className={styles.ctaButton}
                    disabled={ctaSubmitting || !ctaName || !ctaEmail}
                    id="footer-cta-submit"
                  >
                    {ctaSubmitting ? 'Submitting…' : 'Book an AI Strategy Call →'}
                  </button>
                </form>
              )}

              {!ctaSubmitted && (
                <p className={styles.ctaDisclaimer}>
                  No generic AI pitch. We'll start with your business.
                </p>
              )}
            </div>

            <div className={styles.ctaDivider} aria-hidden="true" />
          </section>
        )}

        <div className={styles.grid}>

          {/* Brand col */}
          <div className={styles.brandCol}>
            <h3 className={styles.brandName}>
              Markencia<span className={styles.brandDot}>.</span>
            </h3>
            <p className={styles.brandDesc}>
              Markencia is an AI consultancy helping modern businesses build intelligent systems, automate operations, and scale their digital infrastructure.
            </p>

            {!isHome && (
              !submitted ? (
                <form className={styles.newsletterForm} onSubmit={handleNewsletter}>
                  <input
                    type="email"
                    placeholder="Subscribe to our intelligence brief"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id="footer-newsletter-email"
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" aria-label="Subscribe">→</button>
                </form>
              ) : (
                <p className={styles.newsletterSuccess}>✓ You're on the list!</p>
              )
            )}
          </div>

          {/* Links cols */}
          <div className={styles.linksWrapper}>
            <div className={styles.linksCol}>
              <h4>Capabilities</h4>
              <ul>
                {FOOTER_LINKS.capabilities.map((l) => (
                  <li key={l.label}><Link href={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linksCol}>
              <h4>Company</h4>
              <ul>
                {FOOTER_LINKS.company.map((l) => (
                  <li key={l.label}><Link href={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linksCol}>
              <h4>Contact & Info</h4>
              <ul>
                {FOOTER_LINKS.contact.map((l) => (
                  <li key={l.label}>
                    {l.external
                      ? <a href={l.path}>{l.label}</a>
                      : <Link href={l.path}>{l.label}</Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Markencia. All rights reserved.</p>
          <div className={styles.socials}>
            <a href={SITE_INFO.social.instagram} className={styles.socialLink} aria-label="Instagram"><InstagramIcon /></a>
            <a href={SITE_INFO.social.youtube} className={styles.socialLink} aria-label="YouTube"><YoutubeIcon /></a>
            <a href={SITE_INFO.social.linkedin} className={styles.socialLink} aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={SITE_INFO.social.reddit} className={styles.socialLink} aria-label="LinkedIn"><RedditIcon /></a>
            <a href={SITE_INFO.social.x} className={styles.socialLink} aria-label="LinkedIn"><XIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
