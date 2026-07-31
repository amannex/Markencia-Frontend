import ServicesPage from '../../pages/ServicesPage';

export const metadata = {
  title: 'Our Services',
  description:
    'Precision-engineered marketing services designed to scale your business predictably.',
  alternates: {
    canonical: 'https://markencia.com/services',
  },
};

export default function Page() {
  return <ServicesPage />;
}
