import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from './src/data/staticData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://markencia.com';

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/case-studies',
  '/our-works',
  '/blogs',
  '/contact',
  '/pricing',
  '/career',
  '/faqs',
  '/testimonials'
];

// Combine all valid URLs
const dynamicRoutes = BLOG_POSTS.map(post => `/blogs/${post.slug}`);
const caseStudies = BLOG_POSTS.filter(post => post.category === 'Case Studies').map(post => `/case-studies/${post.slug}`);

const allRoutes = [...new Set([...staticRoutes, ...dynamicRoutes, ...caseStudies])];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

// Ensure public directory exists
const publicDir = path.resolve(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully at public/sitemap.xml');
