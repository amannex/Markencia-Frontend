import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <section className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.code}>4<span className={styles.glitch}>0</span>4</div>
        <h1>Page Not Found</h1>
        <p>Looks like this page got lost in our AI algorithms. Let's get you back on track.</p>
        <div className={styles.actions}>
          <Link to="/" className={styles.btnPrimary} id="404-home-link">Go Back Home</Link>
          <Link to="/contact" className={styles.btnOutline} id="404-contact-link">Contact Support</Link>
        </div>
      </div>
    </section>
  );
}
