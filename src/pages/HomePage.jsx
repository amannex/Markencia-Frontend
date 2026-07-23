import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SERVICES, STATS, WHY_US_POINTS, PROCESS_STEPS, INDUSTRIES, TESTIMONIALS } from '../data/staticData';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import SectionHead from '../components/ui/SectionHead';
import CTASection from '../components/sections/CTASection';
import styles from './HomePage.module.css';

export default function HomePage() {
  const testiRef = useRef(null);

  useEffect(() => {
    const container = testiRef.current;
    if (!container) return;

    let animationFrameId;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += 1;
        // Seamless loop trick if we duplicate items (but we won't duplicate for simplicity, just bounce or reset)
        // Let's just reset to 0 when reaching the end, or implement a smooth bounce.
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrameId = requestAnimationFrame(scroll);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause, { passive: true });
    container.addEventListener('touchend', resume);
    container.addEventListener('wheel', pause, { passive: true });

    // Resume after wheeling stops (simple timeout)
    let wheelTimeout;
    const handleWheel = () => {
      pause();
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(resume, 1000);
    };
    container.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
      container.removeEventListener('touchstart', pause);
      container.removeEventListener('touchend', resume);
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Markencia | AI-Powered Creative Marketing Agency</title>
        <meta name="description" content="Scale your brand with AI-driven creative marketing. We combine predictive analytics, automation, and viral creativity to build unstoppable growth systems." />
        <link rel="canonical" href="https://markencia.com/" />
      </Helmet>
      {/* ── 1. HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroShape1} aria-hidden="true" />
        <div className={styles.heroShape2} aria-hidden="true" />
        <div className={styles.heroContainer}>
          <div className="mk-hero-badge">Welcome to the Future of Marketing</div>
          <h1 className={styles.heroTitle}>
            Scale Your Brand with{' '}
            <span className={styles.heroAccent}>AI-Driven</span>{' '}
            Creative Marketing
          </h1>
          <p className={styles.heroSubtitle}>
            We combine predictive analytics, automation, and viral creativity to build
            unstoppable growth systems for modern brands.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/contact" className={styles.btnPrimary} id="hero-cta-strategy">
              Get Your Free AI Strategy
            </Link>
            <a href="#services" className={styles.btnSecondary} id="hero-cta-services">
              Explore Services
            </a>
          </div>
        </div>
      </section>



      {/* ── 2. SERVICES ── */}
      <section className="mk-section" id="services">
        <div className="mk-container">
          <SectionHead
            centered
            title='Our <span class="mk-highlight-text">AI-Powered</span> Arsenal'
            subtitle="Data-backed strategies designed to scale your business predictably."
          />
          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY US ── */}
      <section className="mk-section mk-bg-texture">
        <div className={`mk-container ${styles.whyWrapper}`}>
          <div className={styles.whyContent}>
            <h2>
              The <span className="mk-highlight-text">Unfair Advantage</span> for Your Business
            </h2>
            <p>
              We don't just run ads; we engineer growth ecosystems. By leveraging
              bleeding-edge AI and relentless automation, we leave traditional agencies in the dust.
            </p>
            <ul className={styles.whyList}>
              {WHY_US_POINTS.map((p) => (
                <li key={p.title}>
                  <strong>{p.title}</strong> {p.body}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.whyVisual}>
            <div className={styles.glassPanel}>
              <div className={styles.comparisonRow}>
                <h4>Traditional Agency</h4>
                <div className={styles.barTrack}>
                  <div className={styles.barSlow} />
                </div>
              </div>
              <div className={styles.comparisonRow}>
                <h4>Markencia (AI-Driven)</h4>
                <div className={styles.barTrack}>
                  <div className={styles.barFast} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PROCESS ── */}
      <section className="mk-section">
        <div className="mk-container">
          <SectionHead
            centered
            title='Our <span class="mk-highlight-text">Growth Framework</span>'
            subtitle="A methodical, 4-step system to turn total strangers into raving fans."
          />
          <div className={styles.timeline}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* ── 6. INDUSTRIES ── */}
      <section className="mk-section mk-bg-texture">
        <div className="mk-container">
          <SectionHead
            centered
            title='Industries We <span class="mk-highlight-text">Dominate</span>'
            subtitle="Precision-engineered strategies built for high-growth sectors."
          />
          <div className={styles.industryGrid}>
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className={styles.indCard}>
                <span>{ind.icon}</span> {ind.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ── */}
      <section className="mk-section">
        <div className="mk-container">
          <SectionHead
            centered
            title='Don&apos;t Just Take <span class="mk-highlight-text">Our Word</span> For It'
            subtitle="Hear from ambitious founders who scaled with Markencia."
          />
          <div className={styles.testiGrid} ref={testiRef}>
            {/* Duplicating testimonials to allow seamless infinite scrolling */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
              <TestimonialCard key={`${t.id}-${index}`} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <CTASection />
    </>
  );
}
