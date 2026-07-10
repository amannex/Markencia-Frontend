// ============================================================
// BlogComments.jsx
// Comments section mock. In a real WP headless setup, this
// would fetch from wp-json/wp/v2/comments and post to it.
// ============================================================

import styles from './BlogComments.module.css';

export default function BlogComments() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Comments functionality coming soon!');
  };

  return (
    <div className={styles.comments} aria-label="Comments">
      <h3 className={styles.title}>Comments</h3>

      <div className={styles.empty}>
        No comments yet. Be the first to share your thoughts!
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          placeholder="Write a comment..."
          aria-label="Write a comment"
          required
        />
        <button type="submit" className={styles.submitBtn}>
          Post Comment
        </button>
      </form>
    </div>
  );
}
