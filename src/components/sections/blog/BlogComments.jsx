// ============================================================
// BlogComments.jsx
// Interactive comments section fetching and posting to
// WordPress REST API (/wp-json/wp/v2/comments).
// ============================================================

import { useState, useEffect } from 'react';
import { getCommentsByPostId, submitComment } from '../../../services/blog/wordpress';
import styles from './BlogComments.module.css';

export default function BlogComments({ postId, postSlug }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
  });

  useEffect(() => {
    if (!postId) return;
    const controller = new AbortController();

    async function fetchComments() {
      setLoading(true);
      try {
        const data = await getCommentsByPostId(postId, { signal: controller.signal });
        setComments(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setComments([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
    return () => controller.abort();
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.content.trim()) return;

    setSubmitting(true);
    setError('');

    try {
      if (postId) {
        const newComment = await submitComment({
          post: postId,
          author_name: formData.name || 'Anonymous',
          author_email: formData.email || 'guest@example.com',
          content: formData.content,
        });
        setComments((prev) => [...prev, newComment]);
      } else {
        // Local fallback if no WordPress ID is available
        const localComment = {
          id: Date.now(),
          author: formData.name || 'Anonymous',
          avatar: null,
          date: 'Just now',
          content: formData.content,
        };
        setComments((prev) => [...prev, localComment]);
      }

      setFormData({ name: '', email: '', content: '' });
    } catch (err) {
      setError(err.message || 'Could not post comment. Please try again.');
      // Add locally anyway if offline
      const fallbackComment = {
        id: Date.now(),
        author: formData.name || 'Anonymous',
        avatar: null,
        date: 'Just now',
        content: formData.content,
      };
      setComments((prev) => [...prev, fallbackComment]);
      setFormData({ name: '', email: '', content: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.comments} aria-label="Comments">
      <h3 className={styles.title}>
        Comments {comments.length > 0 && `(${comments.length})`}
      </h3>

      {loading && <div className={styles.empty}>Loading comments...</div>}

      {!loading && comments.length === 0 && (
        <div className={styles.empty}>
          No comments yet. Be the first to share your thoughts!
        </div>
      )}

      {!loading && comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map((item) => (
            <div key={item.id} className={styles.commentItem}>
              <div className={styles.commentHeader}>
                {item.avatar ? (
                  <img src={item.avatar} alt={item.author} className={styles.avatar} />
                ) : (
                  <div className={styles.avatar}>
                    {(item.author || 'A').charAt(0).toUpperCase()}
                  </div>
                )}
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.commentDate}>{item.date}</span>
                </div>
              </div>
              <div
                className={styles.commentBody}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name (optional)"
            className={styles.input}
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email (optional)"
            className={styles.input}
            aria-label="Your Email"
          />
        </div>

        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Write a comment..."
          aria-label="Write a comment"
          required
        />

        {error && <div style={{ color: 'red', fontSize: '0.85rem' }}>{error}</div>}

        <button type="submit" className={styles.submitBtn} disabled={submitting}>
          {submitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>
    </div>
  );
}
