import CaseStudyPostPage from '../../../pages/CaseStudyPostPage';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `Case Study: ${slug} | Markencia`,
    description: 'An in-depth analysis of how Markencia delivered exceptional results for this client.',
    alternates: {
      canonical: `https://markencia.com/case-studies/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <CaseStudyPostPage slug={slug} />;
}
