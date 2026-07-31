import BlogsPage from '../../pages/BlogsPage';

export const metadata = {
  title: 'Journal & Insights | Markencia',
  description:
    'Data-backed strategies, deep dives, and expert perspectives on AI-driven marketing and growth.',
  alternates: {
    canonical: 'https://markencia.com/blogs',
  },
};

export default function Page() {
  return <BlogsPage />;
}
