'use client';

import { useState } from 'react';
import Link from 'next/link';
import CTASection from '../components/sections/CTASection';
import SectionHead from '../components/ui/SectionHead';
import styles from './CaseStudiesPage.module.css';
import { CASE_STUDIES, CASE_STUDIES_FILTERS } from '../data/staticData';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  const filteredCaseStudies = CASE_STUDIES.filter(cs => activeFilter === 'All Work' || cs.category === activeFilter);
  return (
    <>
      <section className={styles.hero}>
        <div className="mk-container">
          <div className="mk-hero-badge">Proof of Work</div>
          <h1 className={styles.heroTitle}>Real <span className={styles.accent}>Results</span>, Real Clients</h1>
          <p className={styles.heroSubtitle}>Deep-dive into the strategies, tactics, and AI systems we built to generate measurable growth for our partners.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-container">
          <div className={styles.filterBar}>
            {CASE_STUDIES_FILTERS.map(f => (
              <button 
                key={f} 
                className={`${styles.filterBtn} ${f === activeFilter ? styles.activeFilter : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className={styles.caseGrid}>
            {filteredCaseStudies.map(cs => (
              <div key={cs.id} className={styles.caseCard}>
                <div className={`${styles.cardHeader} ${styles[cs.bgClass]}`}>
                  <span className={styles.categoryPill}>{cs.category}</span>
                  <h2 className={styles.clientName}>{cs.client}</h2>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardHeadline}>{cs.headline}</h3>
                  <p className={styles.cardDesc}>{cs.description}</p>
                  
                  <div className={styles.statsBox}>
                    {cs.stats.map((stat, idx) => (
                      <div key={idx} className={styles.statItem}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={`/case-studies/${cs.slug}`} className={styles.readMore}>
                    Read Full Case Study <span className={styles.arrow}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection showForm={false} title='Want Results Like <span class="mk-highlight-text">These?</span>' subtitle="Let's engineer a growth system tailored specifically to your business." buttonText="Start Your Case Study" buttonHref="/contact" buttonVariant='ctaButton' />
    </>
  );
}
