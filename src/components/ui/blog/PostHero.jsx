// ============================================================
// PostHero.jsx
// Full-bleed hero section for a single blog post.
// Renders the post category, title, and meta (author/date/time).
// Uses the featured image as background when available,
// falling back to the post's gradient colour.
//
// Props:
//   post        {Object} — Normalised post data from blogFallback.
//   readingTime {string} — e.g. "4 min read" from useReadingTime.
// ============================================================

import { Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock } from 'lucide-react';
import styles from './PostHero.module.css';

export default function PostHero({ post, readingTime }) {
  const hasFeaturedImage = Boolean(post.featuredImage);

  return (
    <section
      className={styles.hero}
      style={!hasFeaturedImage ? { background: post.gradient } : undefined}
      aria-label="Article header"
    >
      {/* Background image + dark overlay */}
      {hasFeaturedImage && (
        <div className={styles.bgWrapper} aria-hidden="true">
          <img
            src={post.featuredImage}
            alt={post.imageAlt}
            className={styles.bgImage}
            // High priority: this is the LCP candidate
            fetchpriority="high"
            decoding="async"
          />
          <div className={styles.overlay} />
        </div>
      )}

      <div className="mk-container" >
        <div className={styles.inner}>
          {/* Back navigation */}
          <Link to="/blogs" className={styles.back}>
            <ArrowLeft size={15} aria-hidden="true" />
            Back to Journal
          </Link>

          {/* Category badge */}
          <div>
            <span className={styles.category}>{post.category}</span>
          </div>

          {/* Title — h1 for SEO; one per page */}
          <h1 className={styles.title}>{post.title}</h1>

          {/* Meta: author • date • reading time */}
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <User size={14} aria-hidden="true" />
              {post.author}
            </span>

            <span className={styles.dot} aria-hidden="true">•</span>

            <span className={styles.metaItem}>
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={post.date}>{post.date}</time>
            </span>

            <span className={styles.dot} aria-hidden="true">•</span>

            <span className={styles.metaItem}>
              <Clock size={14} aria-hidden="true" />
              {readingTime}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
