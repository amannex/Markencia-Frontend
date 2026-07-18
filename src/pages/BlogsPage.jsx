import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/staticData';
import BlogCard from '../components/ui/BlogCard';
import styles from './BlogsPage.module.css';

export default function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState('All Articles');
  const [search, setSearch] = useState('');

  const filtered = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeFilter === 'All Articles' || post.category === activeFilter;
    const matchesSearch =
      !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Journal & Insights | Markencia</title>
        <meta name="description" content="Data-backed strategies, deep dives, and expert perspectives on AI-driven marketing and growth." />
        <link rel="canonical" href="https://markencia.com/blogs" />
      </Helmet>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="mk-container">
          <div className={styles.heroContent}>
            <div className="mk-hero-badge">Insights & Strategy</div>
            <h1 className={styles.heroTitle}>
              The <span className={styles.accent}>Markencia</span> Journal
            </h1>
            <p className={styles.heroSubtitle}>
              Deep dives into AI marketing, data-driven revenue growth, and the strategies
              shaping the future of digital client acquisition.
            </p>
            <div className={styles.searchBar}>
              <input
                type="text"
                id="blog-search"
                placeholder="Search the journal..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search articles"
              />
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={`mk-section mk-bg-texture ${styles.blogGridSection}`}>
        <div className="mk-container">
          {/* Filters */}
          <div className={styles.filters}>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={[styles.filterBtn, activeFilter === cat ? styles.active : ''].join(' ')}
                onClick={() => setActiveFilter(cat)}
                type="button"
                id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} featured={post.featured && activeFilter === 'All Articles'} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyStateIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className={styles.emptyStateTitle}>
                {BLOG_POSTS.length === 0 ? "Journal Coming Soon" : "No Articles Found"}
              </h3>
              <p className={styles.emptyStateSubtitle}>
                {BLOG_POSTS.length === 0 
                  ? "We're currently writing our latest insights. Check back soon for deep dives into AI marketing and strategies." 
                  : "We couldn't find any articles matching your search or category filter. Try clearing your search or checking other categories."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className={`mk-section ${styles.newsletter}`}>
        <div className="mk-container">
          <div className={styles.newsletterBox}>
            <h2>Stay Ahead of the <span className="mk-accent-text">Curve</span></h2>
            <p>Join 10,000+ marketers and founders receiving our weekly teardowns on AI operations, paid media tactics, and growth engineering.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your best email address" required id="newsletter-email" aria-label="Email for newsletter" />
              <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
