import ContactPage from '../../pages/ContactPage';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Markencia to scale your brand with AI-driven creative marketing.',
  alternates: {
    canonical: 'https://markencia.com/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}
