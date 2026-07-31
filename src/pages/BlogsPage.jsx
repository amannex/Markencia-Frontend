'use client';

import { useState, useEffect } from 'react';
import { getAllPosts } from '../services/blog/wordpress';
import { mapWordPressPost } from '../services/blogFallback';
import BlogCard from '../components/ui/BlogCard';
import BlogCardSkeleton from '../components/ui/blog/BlogCardSkeleton';
import styles from './BlogsPage.module.css';

export default function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState('All Articles');
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(['All Articles']);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, search]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts(retries = 1) {
      setLoading(true);
      try {
        const { posts: wpPosts } = await getAllPosts({
          _embed: true,
          per_page: 50,
          signal: controller.signal,
        });

        if (controller.signal.aborted) return;

        if (wpPosts && wpPosts.length > 0) {
          const mapped = wpPosts.map(mapWordPressPost);
          setPosts(mapped);

          const uniqueCategories = [
            'All Articles',
            ...new Set(mapped.map((post) => post.category).filter(Boolean)),
          ];
          setCategories(uniqueCategories);
        } else {
          setPosts([]);
          setCategories(['All Articles']);
        }
      } catch (err) {
        if (
          controller.signal.aborted ||
          err.name === 'AbortError' ||
          err.message?.includes('aborted') ||
          err.message?.includes('signal') ||
          err.message?.includes('cancelled')
        ) {
          return;
        }

        if (retries > 0) {
          setTimeout(() => {
            if (!controller.signal.aborted) fetchPosts(retries - 1);
          }, 600);
          return;
        }

        // Graceful fallback when WordPress API is not running locally
        console.warn('WordPress API unreachable on /blogs:', err.message);
        setPosts([]);
        setCategories(['All Articles']);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      controller.abort('Component unmounted');
    };
  }, []);

  const filtered = posts
    .filter((post) => {
      const matchesCategory =
        activeFilter === 'All Articles' || post.category === activeFilter;
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      // Always bring featured/sticky posts to the very top when viewing 'All Articles'
      if (activeFilter === 'All Articles') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
      }
      return 0;
    });

  // Calculate maximum 3 rows per page (9 columns total per page)
  const isFirstPageFeatured = activeFilter === 'All Articles' && Boolean(filtered[0]?.featured);
  const firstPageLimit = isFirstPageFeatured ? 8 : 9;
  const regularPageLimit = 9;

  let totalPages = 1;
  if (filtered.length <= firstPageLimit) {
    totalPages = 1;
  } else {
    totalPages = 1 + Math.ceil((filtered.length - firstPageLimit) / regularPageLimit);
  }

  const validPage = Math.min(currentPage, Math.max(1, totalPages));

  let currentPosts = [];
  if (validPage === 1) {
    currentPosts = filtered.slice(0, firstPageLimit);
  } else {
    const startIndex = firstPageLimit + (validPage - 2) * regularPageLimit;
    currentPosts = filtered.slice(startIndex, startIndex + regularPageLimit);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const gridSection = document.getElementById('blog-grid-section');
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
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
      <section id="blog-grid-section" className={`mk-section mk-bg-texture ${styles.blogGridSection}`}>
        <div className="mk-container">
          {/* Filters */}
          <div className={styles.filters}>
            {categories.map((cat) => (
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
          {loading ? (
            <div className={styles.grid}>
              {Array.from({ length: isFirstPageFeatured ? 8 : 9 }).map((_, i) => (
                <BlogCardSkeleton key={i} featured={i === 0 && activeFilter === 'All Articles'} />
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className={styles.grid}>
              {currentPosts.map((post) => (
                <BlogCard
                  key={post.id || post.slug}
                  post={post}
                  featured={validPage === 1 && post.featured && activeFilter === 'All Articles'}
                />
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
                {posts.length === 0 ? "No blog posts found at the moment" : "No Articles Found"}
              </h3>
              <p className={styles.emptyStateSubtitle}>
                {posts.length === 0 
                  ? "We're currently writing our latest insights. Check back soon for deep dives into AI marketing and strategies." 
                  : "We couldn't find any articles matching your search or category filter. Try clearing your search or checking other categories."}
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          {!loading && totalPages > 1 && (
            <div className={styles.pagination} role="navigation" aria-label="Blog pagination">
              <button
                type="button"
                className={styles.pageNavBtn}
                onClick={() => handlePageChange(Math.max(1, validPage - 1))}
                disabled={validPage === 1}
                aria-label="Previous page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span style={{ marginLeft: '4px' }}>Prev</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  className={[
                    styles.pageBtn,
                    validPage === pageNum ? styles.activePage : ''
                  ].join(' ')}
                  onClick={() => handlePageChange(pageNum)}
                  aria-label={`Page ${pageNum}`}
                  aria-current={validPage === pageNum ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              ))}

              <button
                type="button"
                className={styles.pageNavBtn}
                onClick={() => handlePageChange(Math.min(totalPages, validPage + 1))}
                disabled={validPage === totalPages}
                aria-label="Next page"
              >
                <span style={{ marginRight: '4px' }}>Next</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
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
