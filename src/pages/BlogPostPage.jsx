import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/staticData';
import CTASection from '../components/sections/CTASection';
import styles from './BlogPostPage.module.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/blogs" className={styles.backBtn}>← Back to Journal</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} style={{ background: post.gradient }}>
        <div className="mk-container">
          <Link to="/blogs" className={styles.back}>← Back to Journal</Link>
          <span className={styles.category}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            {post.author && <span>By {post.author}</span>}
            <span>•</span>
            <span>{post.date}</span>
            {post.readTime && <><span>•</span><span>{post.readTime}</span></>}
          </div>
        </div>
      </section>

      {/* Article body (static content) */}
      <section className={styles.articleSection}>
        <div className="mk-container">
          <div className={styles.articleBody}>
            <p className={styles.lead}>{post.excerpt}</p>
            <p>
              This article is served from your WordPress backend via the WP REST API. Once ACF to REST API
              is active and the API connection is established, the full article content will be dynamically
              fetched and rendered here from your WordPress posts.
            </p>
            <p>
              For now, this page demonstrates the complete routing and component structure of the headless
              React frontend. All URL patterns, metadata, navigation, and layout components are fully operational.
            </p>
            <blockquote className={styles.quote}>
              "The future of marketing belongs to those who can combine data intelligence with human creativity."
              <cite>— Markencia</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
