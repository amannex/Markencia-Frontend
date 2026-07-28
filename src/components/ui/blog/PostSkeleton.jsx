// ============================================================
// PostSkeleton.jsx
// High-fidelity shimmer skeleton displayed while a blog post
// is being fetched. Matches the 2-column layout (content + TOC)
// to prevent any layout shift.
// ============================================================

import styles from './PostSkeleton.module.css';

function Bone({ variant, dark = false }) {
  return (
    <div
      className={`${dark ? styles.shimmerDark : styles.shimmer} ${styles[variant] || ''}`}
      aria-hidden="true"
    />
  );
}

export default function PostSkeleton() {
  return (
    <div aria-label="Loading article…" aria-busy="true" role="status">
      {/* 1. Full-width Hero placeholder */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Bone variant="heroBadge" dark />
          <Bone variant="heroTitle1" dark />
          <Bone variant="heroTitle2" dark />
          <Bone variant="heroMeta" dark />
        </div>
      </section>

      {/* 2. 2-Column Article & Sidebar grid */}
      <section className={styles.articleSection}>
        <div className="mk-container" style={{ maxWidth: '1350px' }}>
          <div className={styles.layout}>
            {/* Main Content Column */}
            <main className={styles.mainContent}>
              <Bone variant="lineTitle" />
              <div className={styles.spacer} />

              {Array.from({ length: 5 }).map((_, i) => (
                <Bone key={i} variant={i % 3 === 2 ? 'lineShort' : i % 3 === 1 ? 'lineMid' : 'lineFull'} />
              ))}
              <div className={styles.spacer} />
              <Bone variant="lineTitle" />
              <div className={styles.spacer} />
              {Array.from({ length: 4 }).map((_, i) => (
                <Bone key={`b${i}`} variant={i % 3 === 0 ? 'lineFull' : i % 3 === 1 ? 'lineMid' : 'lineShort'} />
              ))}

              {/* Author Card Skeleton */}
              <div className={styles.authorCard}>
                <div className={`${styles.authorAvatar} ${styles.shimmer}`} />
                <div className={styles.authorInfo}>
                  <Bone variant="authorTitle" />
                  <Bone variant="authorBio1" />
                  <Bone variant="authorBio2" />
                </div>
              </div>
            </main>

            {/* Sticky Sidebar Column (Table of Contents Skeleton) */}
            <aside className={styles.sidebar}>
              <div className={styles.tocCard}>
                <Bone variant="tocHeader" />
                <div className={styles.spacer} />
                <Bone variant="tocItem1" />
                <Bone variant="tocItem2" />
                <Bone variant="tocItem3" />
                <Bone variant="tocItem4" />
                <Bone variant="tocItem5" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <span className="sr-only">Loading article content, please wait.</span>
    </div>
  );
}
