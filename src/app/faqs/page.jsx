import FaqsPage from '../../pages/FaqsPage';

export const metadata = {
  title: 'FAQs',
  description:
    "Frequently asked questions about Markencia's AI marketing services.",
  alternates: {
    canonical: 'https://markencia.com/faqs',
  },
};

export default function Page() {
  return <FaqsPage />;
}
