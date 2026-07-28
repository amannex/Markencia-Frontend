// ============================================================
// SingleBlog.jsx — Blog Post Page Orchestrator
// ============================================================
// Responsibilities: fetch, state, SEO, layout assembly.
// This file contains ZERO visual UI — all rendering is
// delegated to purpose-built child components.
//
// Data flow:
//   1. Fetch post from WP REST API (AbortController on unmount).
//   2. On API failure → fall back to mapStaticPost().
//   3. Feed raw content to hooks (reading time, ToC, progress).
//   4. Stamp heading IDs into content via injectHeadingIds().
//   5. Pass derived state as props to child components.
//   6. Fetch related posts independently (non-blocking).
// ============================================================

import { lazy, Suspense, useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// ── Services ────────────────────────────────────────────────
import { getPostBySlug, getRelatedPosts, getFaqsBySearch } from '../../services/blog/wordpress';
import { mapWordPressPost } from '../../services/blogFallback';

// ── Blog domain hooks ────────────────────────────────────────
import { useReadingTime }                          from '../../hooks/blog/useReadingTime';
import { useScrollProgress }                       from '../../hooks/blog/useScrollProgress';
import { useTableOfContents, injectHeadingIds }   from '../../hooks/blog/useTableOfContents';
import { useCopyLink }                             from '../../hooks/blog/useCopyLink';

// ── Atomic UI components (blog) ──────────────────────────────
import ReadingProgressBar from '../../components/ui/blog/ReadingProgressBar';
import PostHero           from '../../components/ui/blog/PostHero';
import PostBody           from '../../components/ui/blog/PostBody';
import PostAuthor         from '../../components/ui/blog/PostAuthor';
import PostShare          from '../../components/ui/blog/PostShare';
import PostSkeleton       from '../../components/ui/blog/PostSkeleton';
import PostError          from '../../components/ui/blog/PostError';
import TableOfContents    from '../../components/ui/blog/TableOfContents';
import BlogCTA            from '../../components/ui/blog/BlogCTA';
import BlogFaq            from '../../components/ui/blog/BlogFaq';
import RelatedPosts from '../../components/sections/blog/RelatedPosts';
import NewsletterSection from '../../components/sections/blog/NewsletterSection';


// ── Layout stylesheet (grid columns only — no visual styles) ─
import styles from './SingleBlog.module.css';

// ── Lazy-loaded heavy panels (code-split, loaded after paint) ─
// BlogAiAssistant and BlogComments are intentionally deferred:
//   • AI panel requires its own JS bundle (chat state machine).
//   • Comments must wait for post ID before fetching threads.
// Suspense fallback is null — each component owns its skeleton.
const BlogAiAssistant = lazy(() => import('../../components/sections/blog/BlogAiAssistant'));
const BlogComments    = lazy(() => import('../../components/sections/blog/BlogComments'));

// ============================================================
// Component
// ============================================================
export default function SingleBlog() {
  const { slug } = useParams();

  // ── Core data state ──────────────────────────────────────
  const [post, setPost]               = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [fetchError, setFetchError]   = useState(null);

  // ── Primary fetch: post by slug ──────────────────────────
  // A single AbortController handles both the post fetch and
  // the subsequent related-posts fetch within the same effect.
  useEffect(() => {
    if (!slug) return;

    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    setFetchError(null);
    setPost(null);
    setRelatedPosts([]);

    async function load() {
      let resolvedPost = null;

      try {
        // Primary: live WordPress REST API
        const wpData = await getPostBySlug(slug, { signal });
        resolvedPost = mapWordPressPost(wpData);
      } catch (err) {
        if (err.name === 'AbortError') return; // Component unmounted — bail.

        setFetchError('No blog posts found at the moment. Check back soon!');
        setLoading(false);
        return;
      }

      setPost(resolvedPost);
      setLoading(false);

      // Automated FAQ Lookup: if no FAQs were manually selected for this article,
      // dynamically query the WP REST API for FAQs matching the post title keywords!
      if (resolvedPost && (!resolvedPost.faqs || resolvedPost.faqs.length === 0)) {
        try {
          const keywords = (resolvedPost.title || '')
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .split(/\s+/)
            .filter((word) => word.length > 3)
            .slice(0, 3)
            .join(' ');

          if (keywords) {
            const matchingFaqs = await getFaqsBySearch({ search: keywords, per_page: 5, signal });
            if (matchingFaqs.length > 0) {
              setPost((prev) => prev ? { ...prev, faqs: matchingFaqs } : prev);
            }
          }
        } catch {
          // Non-blocking: leave post.faqs as-is if search is offline
        }
      }

      // Related posts: non-blocking — a failure never blocks the article.
      // getRelatedPosts returns a raw array of WP objects (with _embed),
      // so we map each one through mapWordPressPost for a consistent shape.
      try {
        const rawRelated = await getRelatedPosts(resolvedPost, { count: 3, signal });
        setRelatedPosts(rawRelated.map(mapWordPressPost));
      } catch {
        setRelatedPosts([]);
      }

    }

    load();

    // Abort all in-flight requests when slug changes or unmounts.
    return () => controller.abort();
  }, [slug]);

  // ── Domain hooks (run after post is resolved) ────────────
  // Reading time derives from raw HTML content.
  const { text: readingTime, minutes } = useReadingTime(post?.content ?? '');

  // Scroll progress tracks the full document (no container ref).
  const scrollProgress = useScrollProgress();

  // ToC parses HTML string (Mode A) — no live DOM ref needed
  // because PostBody stamps the IDs via injectHeadingIds below.
  const { headings, activeId, scrollToHeading } = useTableOfContents({
    htmlContent: post?.content ?? '',
  });

  // Copy link state for PostShare.
  const { copied, copy } = useCopyLink();

  // ── Processed content: inject heading IDs ───────────────
  // Must run after `headings` is derived so the ID list matches
  // the exact order the regex parsed them.
  const processedContent = useMemo(() => {
    if (!post?.content || headings.length === 0) return post?.content ?? '';
    return injectHeadingIds(post.content, headings);
  }, [post?.content, headings]);

  // ── SEO meta values (memoised to prevent Helmet thrash) ─
  const seoTitle       = post ? (post.seo?.title || `${post.title} | Markencia Journal`) : 'Markencia Journal';
  const seoDescription = post?.seo?.description ?? post?.excerpt ?? '';
  const seoUrl         = typeof window !== 'undefined' ? window.location.href : '';
  const seoImage       = post?.seo?.ogImage || post?.featuredImage || null;
  const twitterCard    = post?.seo?.twitterCard || 'summary_large_image';

  // ── Early returns ────────────────────────────────────────
  if (loading) return <PostSkeleton />;
  if (fetchError || !post) return <PostError message={fetchError} />;

  // ── Layout ───────────────────────────────────────────────
  return (
    <div>
      {/* ── SEO ── */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description"        content={seoDescription} />
        <meta property="og:title"       content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type"        content="article" />
        <meta property="og:url"         content={seoUrl} />
        {seoImage && <meta property="og:image" content={seoImage} />}
        <meta name="twitter:card"        content={twitterCard} />
        <meta name="twitter:title"       content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        {seoImage && <meta name="twitter:image" content={seoImage} />}
      </Helmet>

      {/* ── Reading progress indicator (fixed, above header) ── */}
      <ReadingProgressBar progress={scrollProgress} />

      {/* ── Hero: category, title, meta, featured image ── */}
      <PostHero post={post} readingTime={readingTime} minutes={minutes} />

      {/* ── Article body + sidebar grid ── */}
      <section className={styles.articleSection} style={{ paddingTop: '0.5rem' }}>
        <div className="mk-container" style={{ maxWidth: '1350px' }}>
          <div className={styles.layout}>

            {/* Main content column */}
            <main className={styles.mainContent} id="article-body" role="main">
              <PostBody 
                content={processedContent} 
                ctaNode={<BlogCTA category={post.category} />}
              />

              <BlogFaq faqs={post.faqs} />

              <PostAuthor post={post} />

              <div style={{ marginTop: '3rem'}}>
                <PostShare
                  post={post}
                  copied={copied}
                  onCopy={copy}
                />
              </div>

              {/* Comments — deferred; resolves after paint */}
              <Suspense fallback={null}>
                <BlogComments postId={post.id} postSlug={post.slug} />
              </Suspense>
            </main>

            {/* Sticky sidebar column */}
            <aside className={styles.sidebar} role="complementary" aria-label="Article tools">
              <div className={styles.sidebarSticky}>
                <TableOfContents
                  headings={headings}
                  activeId={activeId}
                  onItemClick={scrollToHeading}
                />

                {/* AI assistant — deferred; heaviest bundle */}
                <Suspense fallback={null}>
                  <BlogAiAssistant post={post} />
                </Suspense>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Below-fold sections ── */}
      <RelatedPosts posts={relatedPosts} currentCategory={post.category} />
      <NewsletterSection />
    </div>
  );
}
