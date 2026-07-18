import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CTASection from '../components/sections/CTASection';
import styles from './WorksPage.module.css';
import { WORKS_CATEGORIES, WORKS } from '../data/staticData';

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredWorks = activeFilter === 'All Projects'
    ? WORKS
    : WORKS.filter(w => w.category === activeFilter);
  return (
    <>
      <Helmet>
        <title>Our Work | Markencia</title>
        <meta name="description" content="Explore our portfolio of cutting-edge marketing and design projects." />
        <link rel="canonical" href="https://markencia.com/our-works" />
      </Helmet>
      <section className={styles.hero}>
        <div className="mk-container">
          <div className="mk-hero-badge">Portfolio</div>
          <h1 className={styles.heroTitle}>Our Client <span className={styles.accent}>Success </span>Stories</h1>
          <p className={styles.heroSubtitle}>A showcase of campaigns, designs, and growth systems we've engineered for ambitious brands.</p>
        </div>
      </section>
      <section className="mk-section mk-bg-texture">
        <div className="mk-container">  
          {/* Filters */}
          <div className={styles.filters}>
            {WORKS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={[styles.filterBtn, activeFilter === cat ? styles.active : ''].join(' ')}
                onClick={() => setActiveFilter(cat)}
                type="button"
                id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
          {filteredWorks.length > 0 ? (
            <div className={styles.simpleGrid}>
              {filteredWorks.map((w) => (
                <div key={w.title} className={`${styles.workItems} ${w.isLarge ? styles.largeItems : ''}`.trim()}>
                  <div className={styles.workImg} style={{ background: w.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', fontWeight: 700 }}>
                    {w.title}
                  </div>
                  <div className={styles.workOverlay}>
                    <div className={styles.workInfo}>
                      <span className={styles.workCategory}>{w.category}</span>
                      <h3 style={{ margin: '0.5rem 0 0', fontSize: '1.1rem' }}>{w.title}</h3>
                      <p>{w.content.substring(0, 100)}</p>
                      <a href={w.link} target="_blank" rel="noopener noreferrer" className={styles.workLink}>View Project <span className={styles.arrow}>↗</span></a>
                    </div> 
                  </div>
                </div>  
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyStateIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className={styles.emptyStateTitle}>
                {WORKS.length === 0 ? "Portfolio Coming Soon" : "No Projects Found"}
              </h3>
              <p className={styles.emptyStateSubtitle}>
                {WORKS.length === 0 
                  ? "We're currently curating our best work. Check back soon to see our latest case studies and success stories." 
                  : "We haven't uploaded any projects for this specific category yet. Please try checking other categories."}
              </p>
            </div>
          )}
        </div>
      </section>
      <CTASection showForm={false} title='Ready to Join Our <span class="mk-highlight-text">Portfolio?</span>' subtitle="Let's create something remarkable together." buttonText="Start a Project" buttonHref="/contact" buttonVariant='ctaButton' />
    </>
  );
}
