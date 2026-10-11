import '../styles/index.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata = {
  metadataBase: new URL('https://markencia.com'),
  title: {
    default: 'Markencia | AI Consultancy & Software Development Company',
    template: '%s | Markencia',
  },
  description:
    'Turn business bottlenecks into AI-powered systems. Markencia designs autonomous workflows, custom WordPress web engineering, and enterprise AI systems to help teams scale.',
  keywords: [
    'AI Consultancy',
    'Software Development Company',
    'AI Systems',
    'Business Automation',
    'WordPress Development',
    'CMS Migration',
    'Workflow Automation',
    'Enterprise AI',
    'Markencia',
  ],
  openGraph: {
    title: 'Markencia | AI Consultancy & Software Development Company',
    description:
      'Turn business bottlenecks into AI-powered systems. Autonomous workflow automation, custom WordPress engineering, and enterprise AI systems.',
    url: 'https://markencia.com',
    siteName: 'Markencia',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markencia | AI Consultancy & Software Development Company',
    description:
      'Turn business bottlenecks into AI-powered systems. Autonomous workflow automation, custom WordPress engineering, and enterprise AI systems.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
