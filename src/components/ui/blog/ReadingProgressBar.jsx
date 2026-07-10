// ============================================================
// ReadingProgressBar.jsx
// Fixed bar beneath the header that fills left→right as the
// user scrolls through the article.
// Props:
//   progress {number} — 0 to 100, from useScrollProgress hook.
// ============================================================

import styles from './ReadingProgressBar.module.css';

export default function ReadingProgressBar({ progress }) {
  return (
    <div
      className={styles.bar}
      style={{ transform: `scaleX(${progress / 100})` }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Article reading progress"
    />
  );
}
