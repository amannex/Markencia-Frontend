export default async function sitemap() {
  const baseUrl = 'https://markencia.com';
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/our-works',
    '/blogs',
    '/pricing',
    '/career',
    '/faqs',
    '/contact',
    '/testimonials',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticRoutes];
}
