import styles from './SectionHead.module.css';

/**
 * SectionHead — consistent section title + subtitle pair
 * Used across nearly every section on the site
 */
export default function SectionHead({ badge, title, subtitle, centered = false, light = false }) {
  return (
    <div className={[styles.head, centered ? styles.centered : '', light ? styles.light : ''].filter(Boolean).join(' ')}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
