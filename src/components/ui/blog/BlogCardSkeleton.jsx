// ============================================================
// BlogCardSkeleton.jsx
// Shimmer loading placeholder for individual blog cards.
// ============================================================

import styles from './BlogCardSkeleton.module.css';

function Bone({ className }) {
  return <div className={`${styles.shimmer} ${className}`} aria-hidden="true" />;
}

export default function BlogCardSkeleton({ featured = false }) {
  return (
    <div
      className={[styles.card, featured ? styles.featured : ''].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <div className={`${styles.imageWrapper} ${styles.shimmer}`} />
      <div className={styles.content}>
        <Bone className={styles.lineMeta} />
        <Bone className={styles.lineTitle1} />
        <Bone className={styles.lineTitle2} />
        <Bone className={styles.lineExcerpt1} />
        <Bone className={styles.lineExcerpt2} />
        <Bone className={styles.lineReadMore} />
      </div>
    </div>
  );
}
