// ============================================================
// PostBody.jsx
// Renders the processed article HTML using Tailwind Typography
// (prose) classes for rich typographic styling.
// ============================================================

import styles from './PostBody.module.css';

export default function PostBody({ content }) {
  if (!content) return null;

  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
