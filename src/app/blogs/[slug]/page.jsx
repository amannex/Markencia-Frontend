import SingleBlog from '../../../pages/blog/SingleBlog';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug} | Markencia Journal`,
    description: 'Read the latest insights and data-backed strategies from Markencia.',
    alternates: {
      canonical: `https://markencia.com/blogs/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <SingleBlog slug={slug} />;
}
