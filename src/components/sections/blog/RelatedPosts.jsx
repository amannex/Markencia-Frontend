// ============================================================
// RelatedPosts.jsx
// Displays a grid of blog posts related to the current article.
// Reuses the existing BlogCard component to keep card styles
// consistent with the blog listing page.
//
// Props:
//   posts           {Array}  — Normalised post objects.
//   currentCategory {string} — Category name, used for section label.
// ============================================================

import BlogCard from '../../ui/BlogCard';
import styles from './RelatedPosts.module.css';

export default function RelatedPosts({ posts = [], currentCategory }) {
  // Render nothing when there are no related posts to show.
  if (!posts.length) return null;

  return (
    <section className={styles.section} aria-labelledby="related-posts-heading">
      <div className="mk-container" style={{ maxWidth: '1350px' }}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            {currentCategory ? `More in ${currentCategory}` : 'Continue Reading'}
          </span>
          <h2 id="related-posts-heading" className={styles.title}>
            You May Also Like
          </h2>
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
