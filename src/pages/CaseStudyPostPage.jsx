import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import styles from './CaseStudyPostPage.module.css';
import CTASection from '../components/sections/CTASection';

export default function CaseStudyPostPage() {
  const { slug } = useParams();
  return (
    <>
      <Helmet>
        <title>Case Study: {slug} | Markencia</title>
        <meta name="description" content="An in-depth analysis of how Markencia delivered exceptional results for this client." />
        <link rel="canonical" href={`https://markencia.com/case-studies/${slug}`} />
      </Helmet>
      <section className={styles.hero} style={{ background: 'linear-gradient(135deg, #003818, #FFB400)' }}>
        <div className="mk-container">
          <Link to="/case-studies" className={styles.back}>← Back to Case Studies</Link>
          <span className={styles.category}>Case Study</span>
          <h1 className={styles.title}>Case Study: {slug}</h1>
          <div className={styles.meta}><span>Markencia</span><span>•</span><span>In-depth Analysis</span></div>
        </div>
      </section>
      <section className={styles.articleSection}>
        <div className="mk-container">
          <div className={styles.articleBody}>
            <p className={styles.lead}>This case study is fetched from your WordPress backend via the WP REST API. Full case study content will be rendered here once the ACF to REST API connection is active.</p>
            <p>The complete routing, navigation, and layout infrastructure is in place and fully functional for all case study pages.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
