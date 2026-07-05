import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';

export default function BlogCard({ post, featured = false }) {
  const { slug, category, title, excerpt, author, date, readTime, gradient } = post;

  return (
    <article className={[styles.card, featured ? styles.featured : ''].filter(Boolean).join(' ')}>
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder} style={{ background: gradient }} />
        <span className={styles.tag}>{category}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          {author && <span>By {author}</span>}
          {author && <span className={styles.sep}>•</span>}
          <span>{date}</span>
          {readTime && <><span className={styles.sep}>•</span><span>{readTime}</span></>}
        </div>
        {featured
          ? <h2 className={styles.title}><Link to={`/blogs/${slug}`}>{title}</Link></h2>
          : <h3 className={styles.title}><Link to={`/blogs/${slug}`}>{title}</Link></h3>
        }
        <p className={styles.excerpt}>{excerpt}</p>
        <Link to={`/blogs/${slug}`} className={styles.readMore}>Read Full Article →</Link>
      </div>
    </article>
  );
}
