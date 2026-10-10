export default function robots() {
  const baseUrl = 'https://markencia.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/development/',
          '/*?*preview=true',
          '/*?*draft=true',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

