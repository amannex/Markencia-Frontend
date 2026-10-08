import Link from 'next/link';
import { STATS } from '../data/staticData';
import CTASection from '../components/sections/CTASection';
import BusinessBottlenecksSection from '../components/sections/BusinessBottlenecksSection';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import FrameworkSection from '../components/sections/FrameworkSection';
import IndustryFocusSection from '../components/sections/IndustryFocusSection';
import BusinessStagesSection from '../components/sections/BusinessStagesSection';
import styles from './HomePage.module.css';

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

      {/* ── 5. RESULTS ── */}
      <section className={styles.results}>
        <div className="mk-container">
          <div className={styles.resultsWrapper}>
            <div className={styles.resultText}>
              <h2>
                We Sell <span className="mk-accent-text">Results</span>, Not Retainers.
              </h2>
              <p>
                Your business doesn't need more "brand awareness"—it needs qualified leads,
                lower acquisition costs, and explosive revenue growth. That is exactly what we deliver.
              </p>
            </div>
            <div className={styles.statsGrid}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.statBox}>
                  <h3 className="mk-accent-text">{stat.value}</h3>
                  <p>{stat.label}</p>
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

      {/* ── 8. CTA ── */}
      <CTASection />
    </>
  );
}
