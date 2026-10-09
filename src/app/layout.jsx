import '../styles/index.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { getSiteFavicon } from '../services/site/siteSettings';

export async function generateMetadata() {
  const faviconUrl = await getSiteFavicon();

  return {
    metadataBase: new URL('https://markencia.com'),
    title: {
      default: 'Markencia — AI-Powered Marketing Agency & Growth Solutions',
      template: '%s | Markencia',
    },
    description:
      'Markencia combines cutting-edge artificial intelligence with data-driven marketing strategies to scale brands, optimize conversions, and drive measurable ROI.',
    keywords: [
      'AI Marketing',
      'Growth Agency',
      'SEO',
      'Performance Marketing',
      'Markencia',
    ],
    icons: {
      icon: [
        { url: faviconUrl },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      shortcut: faviconUrl,
      apple: faviconUrl,
    },
    openGraph: {
      title: 'Markencia — AI-Powered Marketing Agency & Growth Solutions',
      description:
        'Data-driven marketing strategies powered by cutting-edge AI to scale your brand and drive ROI.',
      url: 'https://markencia.com',
      siteName: 'Markencia',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Markencia — AI-Powered Marketing Agency',
      description:
        'Data-driven marketing strategies powered by cutting-edge AI to scale your brand.',
    },
  };
}

export default async function RootLayout({ children }) {
  const faviconUrl = await getSiteFavicon();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={faviconUrl} sizes="any" />
        <link rel="apple-touch-icon" href={faviconUrl} />
      </head>
      <body suppressHydrationWarning>
        <div className="layout-root">
          <Header />
          <main id="main-content" className="main-content">
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
