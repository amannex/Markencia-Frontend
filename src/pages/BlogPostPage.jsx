import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Link2, 
  Check, 
  Share2,
  BookOpen
} from 'lucide-react';
import { BLOG_POSTS } from '../data/staticData';
import { getPostBySlug } from '../services/wpApi';
import { mapWordPressPost, mapStaticPost } from '../services/blogFallback';
import CTASection from '../components/sections/CTASection';
import styles from './BlogPostPage.module.css';

// ============================================================
// SUB-COMPONENT: ReadingProgressBar (Isolated Performance)
// Calculates scroll position dynamically and updates width
// ============================================================
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setProgress(scrolled);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    calculateScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={styles.progressBar} 
      style={{ width: `${progress}%` }} 
      role="progressbar" 
      aria-valuemin="0" 
      aria-valuemax="100" 
      aria-valuenow={Math.round(progress)}
      aria-label="Reading progress"
    />
  );
}

// ============================================================
// MAIN COMPONENT: BlogPostPage
// ============================================================
export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState('');

  // 1. Dynamic WP REST API Fetching with Static Fallback
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setErrorState(false);

    async function loadPost() {
      try {
        // Try fetching from the live WordPress REST API
        const wpData = await getPostBySlug(slug);
        if (isMounted) {
          setPost(mapWordPressPost(wpData));
          setLoading(false);
        }
      } catch (err) {
        console.warn(`WP REST API fetch failed for slug "${slug}", falling back to static local data:`, err.message);
        
        // Find matching local static post
        const staticMatch = BLOG_POSTS.find((p) => p.slug === slug);
        if (isMounted) {
          if (staticMatch) {
            setPost(mapStaticPost(staticMatch));
          } else {
            setErrorState(true);
          }
          setLoading(false);
        }
      }
    }

    loadPost();
    return () => { isMounted = false; };
  }, [slug]);

  // 2. Parse headings for Table of Contents (ToC)
  const headings = useMemo(() => {
    if (!post || !post.content) return [];
    
    // Parse h2 and h3 elements using regex
    const regex = /<h([23])[^>]*>(.*?)<\/h\1>/gi;
    const items = [];
    let match;
    let index = 0;
    
    const stripTags = (text) => text.replace(/<[^>]*>/g, '').trim();

    while ((match = regex.exec(post.content)) !== null) {
      const level = parseInt(match[1], 10);
      const rawText = match[2];
      const text = stripTags(rawText);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `heading-${index}`;
      items.push({ id, text, level });
      index++;
    }
    return items;
  }, [post]);

  // 3. Inject IDs into post HTML content for ToC scrolling
  const processedHtmlContent = useMemo(() => {
    if (!post || !post.content) return '';
    if (headings.length === 0) return post.content;

    let index = 0;
    return post.content.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, content) => {
      const heading = headings[index++];
      if (heading && !attrs.includes('id=')) {
        return `<h${level}${attrs} id="${heading.id}">${content}</h${level}>`;
      }
      return match;
    });
  }, [post, headings]);

  // 4. Scroll Spy: Highlight active heading in ToC
  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px', // Triggers when heading sits near the top
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeadingId(entry.target.id);
        }
      });
    }, observerOptions);

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => {
      headings.forEach((h) => {
        const el = document.getElementById(h.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [headings, processedHtmlContent]);

  // 5. Related reads (Up to 3 posts in the same category)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS
      .filter((p) => p.category === post.category && p.slug !== post.slug)
      .slice(0, 3);
  }, [post]);

  // 6. Copy Link Handler
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 7. Social Links
  const shareUrl = window.location.href;
  const shareTitle = post?.title || 'Markencia Journal';

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  // 8. Loading Skeleton UI
  if (loading) {
    return (
      <div className={styles.skeletonContainer}>
        <div className="mk-container">
          <div className={styles.skeletonBack} />
          <div className={styles.skeletonHero}>
            <div className={styles.skeletonBadge} />
            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonMeta} />
          </div>
          <div className={styles.skeletonGrid}>
            <div className={styles.skeletonBody}>
              <div className={styles.skeletonImage} />
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLine} style={{ width: '90%' }} />
              <div className={styles.skeletonLine} style={{ width: '80%' }} />
              <div className={styles.skeletonLine} style={{ width: '95%' }} />
              <div className={styles.skeletonLine} style={{ width: '60%' }} />
            </div>
            <div className={styles.skeletonSidebar}>
              <div className={styles.skeletonCard} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 9. Post Not Found UI (Error state)
  if (errorState || !post) {
    return (
      <div className={styles.notFound}>
        <Helmet>
          <title>Article Not Found | Markencia</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <h1>Article Not Found</h1>
        <p>The journal post you are looking for does not exist or has been relocated.</p>
        <Link to="/blogs" className={styles.backBtn}>
          <ArrowLeft size={16} /> Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Markencia Journal</title>
        <meta name="description" content={post.excerpt} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${post.title} | Markencia`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.featuredImage && <meta name="twitter:image" content={post.featuredImage} />}
      </Helmet>

      {/* Reading Progress Indicator */}
      <ReadingProgressBar />

      {/* Post Hero Section */}
      <section className={styles.hero} style={!post.featuredImage ? { background: post.gradient } : undefined}>
        {post.featuredImage && (
          <div className={styles.heroBgWrapper}>
            <img 
              src={post.featuredImage} 
              alt={post.imageAlt} 
              className={styles.heroBgImage} 
              fetchpriority="high"
            />
            <div className={styles.heroOverlay} />
          </div>
        )}
        <div className="mk-container">
          <div className={styles.heroInner}>
            <Link to="/blogs" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to Journal
            </Link>
            <span className={styles.categoryBadge}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <span className={styles.metaSeparator}>•</span>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <span className={styles.metaSeparator}>•</span>
              <div className={styles.metaItem}>
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body Section */}
      <section className={styles.articleSection}>
        <div className="mk-container">
          <div className={styles.gridContainer}>
            {/* Main Content Column */}
            <main className={styles.mainContent} role="main">
              <article>
                {/* Excerpt Summary */}
                {post.excerpt && (
                  <p className={styles.excerptLead}>{post.excerpt}</p>
                )}

                {/* Prose Content (WP HTML) */}
                <div 
                  className="prose prose-lg max-w-none prose-emerald prose-headings:font-mk-heading prose-headings:font-bold prose-p:font-mk-body prose-blockquote:border-l-4 prose-blockquote:border-mk-secondary prose-blockquote:bg-mk-bg-alt prose-blockquote:rounded-r-md prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic"
                  dangerouslySetInnerHTML={{ __html: processedHtmlContent }}
                />
              </article>

              {/* Share widget for mobile view */}
              <div className={styles.mobileShareSection}>
                <h4>Share this Insight</h4>
                <div className={styles.shareButtonsRow}>
                  <a href={twitterShare} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on X (Twitter)">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href={linkedinShare} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on LinkedIn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={facebookShare} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on Facebook">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <button onClick={handleCopyLink} className={styles.shareBtn} aria-label="Copy link to clipboard">
                    {copied ? <Check size={18} className="text-emerald-500" /> : <Link2 size={18} />}
                  </button>
                  {navigator.share && (
                    <button 
                      onClick={() => navigator.share({ title: shareTitle, url: shareUrl })} 
                      className={styles.shareBtn} 
                      aria-label="Share via system panel"
                    >
                      <Share2 size={18} />
                    </button>
                  )}
                </div>
              </div>

              {/* Author Bio Card */}
              <div className={styles.authorCard}>
                {post.authorAvatar ? (
                  <img src={post.authorAvatar} alt={post.author} className={styles.authorAvatar} />
                ) : (
                  <div className={styles.authorInitials}>
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className={styles.authorInfo}>
                  <h3>About {post.author}</h3>
                  <p>{post.authorBio}</p>
                </div>
              </div>
            </main>

            {/* Sidebar Column (Desktop sticky features) */}
            <aside className={styles.sidebarColumn} role="complementary" aria-label="Article helper bar">
              <div className={styles.stickyContainer}>
                {/* Dynamic Table of Contents */}
                {headings.length > 0 && (
                  <div className={styles.sidebarWidget}>
                    <h3 className={styles.widgetTitle}>
                      <BookOpen size={16} className="text-mk-secondary" />
                      Table of Contents
                    </h3>
                    <nav aria-label="Table of Contents">
                      <ul className={styles.tocList}>
                        {headings.map((h) => (
                          <li 
                            key={h.id} 
                            className={`${styles.tocItem} ${h.level === 3 ? styles.tocSubItem : ''}`}
                          >
                            <a 
                              href={`#${h.id}`}
                              className={`${styles.tocLink} ${activeHeadingId === h.id ? styles.tocLinkActive : ''}`}
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              {h.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}

                {/* Sidebar Social Share Widget */}
                <div className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>Share Article</h3>
                  <div className={styles.shareGrid}>
                    <a href={twitterShare} target="_blank" rel="noopener noreferrer" className={styles.sidebarShareLink}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <span>Twitter / X</span>
                    </a>
                    <a href={linkedinShare} target="_blank" rel="noopener noreferrer" className={styles.sidebarShareLink}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                    <a href={facebookShare} target="_blank" rel="noopener noreferrer" className={styles.sidebarShareLink}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                    </a>
                    <button onClick={handleCopyLink} className={styles.sidebarShareLinkButton}>
                      {copied ? (
                        <>
                          <Check size={16} className="text-emerald-500" /> 
                          <span className="text-emerald-500">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Link2 size={16} /> <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Reads Section */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="mk-container">
            <h2 className={styles.relatedTitle}>Related Insights</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((r) => (
                <article key={r.id} className={styles.relatedCard}>
                  <div className={styles.relatedCardMedia} style={{ background: r.gradient }} />
                  <div className={styles.relatedCardContent}>
                    <span className={styles.relatedCardCategory}>{r.category}</span>
                    <h3>
                      <Link to={`/blogs/${r.slug}`}>{r.title}</Link>
                    </h3>
                    <p>{r.excerpt}</p>
                    <Link to={`/blogs/${r.slug}`} className={styles.relatedCardReadMore}>
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global CTA Section */}
      <CTASection />
    </>
  );
}
