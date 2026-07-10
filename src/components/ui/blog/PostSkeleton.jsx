// ============================================================
// PostSkeleton.jsx
// Displayed while the blog post is being fetched.
// Mimics the final layout structure with shimmer placeholders
// so the page doesn't jump when real content arrives.
// ============================================================

import styles from './PostSkeleton.module.css';

// Small helper — compose shimmer + variant classes cleanly.
function Bone({ variant }) {
  return <div className={`${styles.shimmer} ${styles[variant]}`} aria-hidden="true" />;
}

export default function PostSkeleton() {
  return (
    <div aria-label="Loading article…" aria-busy="true" role="status">
      {/* Hero area */}
      <Bone variant="hero" />

      {/* Body lines */}
      <div className={styles.body}>
        <Bone variant="lineTitle" />
        <Bone variant="lineMeta" />
        <div className={styles.spacer} />

        {/* Simulate two paragraphs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Bone key={i} variant={i % 3 === 2 ? 'lineShort' : i % 3 === 1 ? 'lineMid' : 'lineFull'} />
        ))}
        <div className={styles.spacer} />
        {Array.from({ length: 4 }).map((_, i) => (
          <Bone key={`b${i}`} variant={i % 3 === 0 ? 'lineFull' : i % 3 === 1 ? 'lineMid' : 'lineShort'} />
        ))}
      </div>

      {/* Screen-reader text */}
      <span className="sr-only">Loading article content, please wait.</span>
    </div>
  );
}
