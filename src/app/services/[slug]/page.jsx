import { notFound } from 'next/navigation';
import ServiceDetailPage from '../../../components/services/ServiceDetailPage';
import {
  getAllServiceSlugs,
  getServiceDataBySlug,
} from '../../../data/services';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = getServiceDataBySlug(resolvedParams?.slug);

  if (!data) {
    return {
      title: 'Service Not Found | Markencia',
    };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
    alternates: {
      canonical: data.meta.canonical,
    },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: data.meta.canonical,
      siteName: 'Markencia',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.meta.title,
      description: data.meta.description,
    },
  };
}

export default async function ServiceRoutePage({ params }) {
  const resolvedParams = await params;
  const data = getServiceDataBySlug(resolvedParams?.slug);

  if (!data) {
    notFound();
  }

  // Generate JSON-LD Structured Data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.hero.title,
    description: data.meta.description,
    provider: {
      '@type': 'Organization',
      name: 'Markencia',
      url: 'https://markencia.com',
      logo: 'https://markencia.com/logo.png',
      telephone: '+91-6395543772',
    },
    areaServed: 'Worldwide',
    url: data.meta.canonical,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://markencia.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://markencia.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.hero.badge,
        item: data.meta.canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailPage data={data} />
    </>
  );
}
