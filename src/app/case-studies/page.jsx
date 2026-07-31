import CaseStudiesPage from '../../pages/CaseStudiesPage';

export const metadata = {
  title: 'Case Studies',
  description:
    "Discover how we've helped leading brands scale their revenue through AI and data-driven marketing.",
  alternates: {
    canonical: 'https://markencia.com/case-studies',
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
