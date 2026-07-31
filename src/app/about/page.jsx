import AboutPage from '../../pages/AboutPage';

export const metadata = {
  title: 'About Us',
  description:
    'We are a collective of data scientists, creative strategists, and growth hackers united by one goal: engineering predictable revenue for our partners.',
  alternates: {
    canonical: 'https://markencia.com/about',
  },
};

export default function Page() {
  return <AboutPage />;
}
