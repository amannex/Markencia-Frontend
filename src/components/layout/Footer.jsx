import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_INFO, FOOTER_LINKS } from '../../data/staticData';
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

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to WP API
    setSubmitted(true);
  };

  return (
    <footer className={styles.footer}>
      {/* Giant background text */}
      <div className={styles.giantText} aria-hidden="true">Markencia</div>

      {/* Glowing orbs */}
      <div className={`${styles.glow} ${styles.glow1}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glow2}`} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Brand col */}
          <div className={styles.brandCol}>
            <h3 className={styles.brandName}>
              Markencia<span className={styles.brandDot}>.</span>
            </h3>
            <p className={styles.brandDesc}>
              The AI-powered creative agency scaling modern brands through automation, data, and design. We don't just run ads; we engineer growth.
            </p>

            {!submitted ? (
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
            )}
          </div>

          {/* Links cols */}
          <div className={styles.linksWrapper}>
            <div className={styles.linksCol}>
              <h4>Capabilities</h4>
              <ul>
                {FOOTER_LINKS.capabilities.map((l) => (
                  <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className={styles.linksCol}>
              <h4>Company</h4>
              <ul>
                {FOOTER_LINKS.company.map((l) => (
                  <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
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
                      : <Link to={l.path}>{l.label}</Link>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
