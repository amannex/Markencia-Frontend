import '../styles/index.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
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
