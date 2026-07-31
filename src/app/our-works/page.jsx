import WorksPage from '../../pages/WorksPage';

export const metadata = {
  title: 'Our Work',
  description:
    'Explore our portfolio of cutting-edge marketing and design projects.',
  alternates: {
    canonical: 'https://markencia.com/our-works',
  },
};

export default function Page() {
  return <WorksPage />;
}
