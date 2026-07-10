// ============================================================
// PostAuthor.jsx
// Author bio card displayed at the bottom of the article body.
// Shows an avatar (photo or generated initials), name, and bio.
//
// Props:
//   post {Object} — post.author, post.authorAvatar, post.authorBio
// ============================================================

import styles from './PostAuthor.module.css';

/**
 * Generates a one-or-two-letter abbreviation from a full name.
 * "Alex Mercer" → "AM"
 */
function getInitials(name = '') {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function PostAuthor({ post }) {
  const { author, authorAvatar, authorBio } = post;
  if (!author) return null;

  return (
    <aside className={styles.card} aria-label="Article author">
      {/* Avatar: photo or generated initials */}
      {authorAvatar ? (
        <img
          src={authorAvatar}
          alt={author}
          className={styles.avatar}
          width={64}
          height={64}
          loading="lazy"
        />
      ) : (
        <div className={styles.avatar} aria-hidden="true">
          {getInitials(author)}
        </div>
      )}

      <div className={styles.info}>
        <p className={styles.label}>Written by</p>
        <p className={styles.name}>{author}</p>
        {authorBio && <p className={styles.bio}>{authorBio}</p>}
      </div>
    </aside>
  );
}
