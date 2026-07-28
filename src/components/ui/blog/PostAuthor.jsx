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
  const { author, authorAvatar, authorBio, authorSocial = {} } = post;
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
        
        <div className={styles.socials}>
          {authorSocial.twitter && (
            <a href={authorSocial.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${author} on X`} className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          )}
          {authorSocial.linkedin && (
            <a href={authorSocial.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${author} on LinkedIn`} className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          )}
          {authorSocial.website && (
            <a href={authorSocial.website} target="_blank" rel="noopener noreferrer" aria-label={`${author}'s Website`} className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
