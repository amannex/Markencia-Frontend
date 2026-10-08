import Link from 'next/link';
import BusinessBottlenecksSection from '../components/sections/BusinessBottlenecksSection';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import FrameworkSection from '../components/sections/FrameworkSection';
import IndustryFocusSection from '../components/sections/IndustryFocusSection';
import BusinessStagesSection from '../components/sections/BusinessStagesSection';
import styles from './HomePage.module.css';

const BUSINESS_IMPACTS = [
  {
    number: '01',
    title: 'Automate repetitive work and remove operational friction.',
    description:
      'Reduce the time your team spends on routine tasks, identify slow processes, and redesign them with smarter workflows and automation.',
  },
  {
    number: '02',
    title: 'Bring your systems together.',
    description:
      'Connect your tools, data, and workflows so information moves seamlessly across your business.',
  },
  {
    number: '03',
    title: 'Create infrastructure that grows with you.',
    description:
      'Build flexible digital systems that support increasing complexity without adding unnecessary overhead.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroShape1} aria-hidden="true" />
        <div className={styles.heroShape2} aria-hidden="true" />
        <div className={styles.heroContainer}>
          <div className="mk-hero-badge">AI &amp; DIGITAL TRANSFORMATION CONSULTANCY</div>
          <h1 className={styles.heroTitle}>
            Turn Business Bottlenecks Into{' '}
            <span className={styles.heroAccent}>AI-Powered</span>{' '}
            Systems.
          </h1>
          <p className={styles.heroSubtitle}>
            We help businesses identify repetitive work, streamline operations, and implement
            AI-powered systems that save time, reduce costs, and help teams scale.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className={styles.btnPrimary} id="hero-cta-strategy">
              Book an AI Strategy Call &rarr;
            </Link>
            <a href="#bottlenecks" className={styles.btnSecondary} id="hero-cta-services">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. BUSINESS BOTTLENECKS & OPERATIONAL PROBLEMS ── */}
      <BusinessBottlenecksSection />



      {/* ── 3. WHAT MARKENCIA ACTUALLY DOES ── */}
      <WhatWeDoSection />

      {/* ── 4. AI TRANSFORMATION FRAMEWORK ── */}
      <FrameworkSection />

      {/* ── 5. THE BUSINESS IMPACT ── */}
      <section className={styles.results} aria-label="The Business Impact: Turn AI Into Operational Advantage">
        <div className="mk-container">
          <div className={styles.resultsWrapper}>
            <div className={styles.resultText}>
              <h2>
                Turn AI Into <span className="mk-accent-text">Operational Advantage.</span>
              </h2>
              <p>
                The right AI systems don&apos;t just add another tool to your stack. They reduce manual work, connect your operations, and give your team more capacity to focus on what matters.
              </p>
              <Link href="/contact" className={styles.impactCta} id="business-impact-cta">
                <span>See How We Can Help</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className={styles.statsGrid}>
              {BUSINESS_IMPACTS.map((item) => (
                <div key={item.number} className={styles.impactCard}>
                  <h3 className={styles.impactCardTitle}>{item.title}</h3>
                  <p className={styles.impactCardDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. INDUSTRY FOCUS ── */}
      <IndustryFocusSection />

      {/* ── 7. SOLUTIONS BY STAGE ── */}
      <BusinessStagesSection />
    </>
  );
}
