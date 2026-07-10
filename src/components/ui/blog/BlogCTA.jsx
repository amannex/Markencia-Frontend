import styles from './BlogCTA.module.css';

export default function BlogCTA({ category }) {
  // Normalize category for matching
  const cat = (category || '').toLowerCase();

  // Default / Generic content
  let title = "Ready to scale your business?";
  let subtitle = "Let our experts help you build a strategy that drives real growth.";
  let btnText = "Get in Touch";
  let btnLink = "/contact";

  // Context-aware matching
  if (cat.includes('wordpress') || cat.includes('web')) {
    title = "Need help migrating?";
    subtitle = "Our WordPress experts can seamlessly transition your site with zero downtime.";
    btnText = "Book Consultation";
    btnLink = "/contact";
  } else if (cat.includes('seo') || cat.includes('search')) {
    title = "Get SEO Audit";
    subtitle = "Want to rank higher? Get a comprehensive technical and content audit of your website.";
    btnText = "Get SEO Audit";
    btnLink = "/contact";
  } else if (cat.includes('automation') || cat.includes('ai')) {
    title = "Let's automate your business.";
    subtitle = "Save hundreds of hours per month with custom AI workflows.";
    btnText = "Book a Demo";
    btnLink = "/contact";
  }

  return (
    <div className={styles.ctaWrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <a href={btnLink} className={styles.button}>
        {btnText}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  );
}
