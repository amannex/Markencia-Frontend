export default async function sitemap() {
  const baseUrl = 'https://markencia.com';
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/business-automation',
    '/services/wordpress-development',
    '/services/cms-migration',
    '/services/ai-systems',
    '/case-studies',
    '/our-works',
    '/blogs',
    '/pricing',
    '/career',
    '/faqs',
    '/contact',
    '/testimonials',
    '/noida',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticRoutes];
}
