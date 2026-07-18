import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import CTASection from '../components/sections/CTASection';
import styles from './WorksPage.module.css';
import { WORKS_CATEGORIES, WORKS } from '../data/staticData';

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredWorks = activeFilter === 'All Projects'
    ? WORKS
    : WORKS.filter(w => w.category === activeFilter);

  const featuredWorks = WORKS.filter(w => w.isFeatured);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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

      {/* Featured Work Section */}
      {featuredWorks.length > 0 && (
        <section className={styles.featuredSectionWrapper}>
          <div className="mk-container">  
            <div className={styles.featuredSection}>
              <div className={styles.featuredHeader}>
                <h2 className={styles.featuredHeadline}>Featured Work</h2>
                <div className={styles.scrollButtons}>
                  <button className={styles.scrollBtn} onClick={scrollLeft} aria-label="Scroll left">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button className={styles.scrollBtn} onClick={scrollRight} aria-label="Scroll right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
              <div className={styles.featuredScrollContainer} ref={scrollContainerRef}>
                {featuredWorks.map(w => (
                  <div key={`featured-${w.title}`} className={`${styles.workItems} ${styles.featuredCard}`}>
                    <div className={styles.workImg} style={{ position: 'relative', background: w.gradient, display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                      {w.image && (
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${w.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4, mixBlendMode: 'overlay' }} />
                      )}
                      <span className={styles.workImgText}>{w.title}</span>
                    </div>
                    <div className={styles.workOverlay}>
                      <div className={styles.workInfo}>
                        <span className={styles.workCategory}>{w.category}</span>
                        <h3 style={{ margin: '0.5rem 0 0.2rem', fontSize: '1.1rem' }}>{w.title}</h3>
                        <a href={w.link} target="_blank" rel="noopener noreferrer" className={styles.workLink}>View Project <span className={styles.arrow}>↗</span></a>
                      </div> 
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Main section of grid projects */}
      <section className="mk-section mk-bg-texture">
        <div className="mk-container">  
          {/* Filters */}
          <div className={styles.filtersWrapper}>
            <h3 className={styles.filterLabel}>Explore by Category</h3>
            
            {/* Desktop Filters */}
            <div className={styles.filtersDesktop}>
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

            {/* Mobile Dropdown Filter */}
            <div className={styles.filtersMobile}>
              <select 
                className={styles.filterDropdown}
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                aria-label="Filter by category"
              >
                {WORKS_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Main Project grid */}
          {filteredWorks.length > 0 ? (
            <div className={styles.simpleGrid}>
              {filteredWorks.map((w) => (
                <div key={w.title} className={`${styles.workItems} ${w.isLarge ? styles.largeItems : ''}`.trim()}>
                  <div className={styles.workImg} style={{ position: 'relative', background: w.gradient, display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                    {w.image && (
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${w.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4, mixBlendMode: 'overlay' }} />
                    )}
                    <span className={styles.workImgText}>{w.title}</span>
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
