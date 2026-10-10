import { getAllPosts } from '../services/blog/wordpress';
import { BLOG_POSTS, CASE_STUDIES } from '../data/staticData';

export default async function sitemap() {
  const baseUrl = 'https://markencia.com';
  const now = new Date();

  // 1. Core Primary & Secondary Static Routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Core Services & Solutions
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/business-automation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/wordpress-development`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/cms-migration`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-systems`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/workflow-automation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // High-Intent Regional Landing Page
    {
      url: `${baseUrl}/noida`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Commercial & Portfolio Pillars
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-works`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Company & Information
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // 2. Case Studies (Static & Dynamic)
  const caseStudySlugs = new Set([
    ...CASE_STUDIES.map((cs) => cs.slug),
    'scalefactor-story',
  ]);

  const caseStudyRoutes = Array.from(caseStudySlugs).map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Blog Posts (Fetch Live from WordPress REST API + Static Fallbacks)
  const blogRoutesMap = new Map();

  // Seed with static fallback posts
  BLOG_POSTS.forEach((post) => {
    if (post.slug) {
      blogRoutesMap.set(post.slug, {
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  });

  // Hydrate with live WordPress posts if reachable
  try {
    const { posts } = await getAllPosts({ per_page: 100 });
    if (Array.isArray(posts) && posts.length > 0) {
      posts.forEach((post) => {
        if (post.slug) {
          blogRoutesMap.set(post.slug, {
            url: `${baseUrl}/blogs/${post.slug}`,
            lastModified: post.modified ? new Date(post.modified) : now,
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        }
      });
    }
  } catch (error) {
    console.warn('[sitemap] Failed to fetch live WordPress posts for sitemap:', error?.message);
  }

  const blogRoutes = Array.from(blogRoutesMap.values());

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
