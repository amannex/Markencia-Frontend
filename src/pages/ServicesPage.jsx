import { Helmet } from 'react-helmet-async';
import { SERVICES_DETAIL } from '../data/staticData';
import CTASection from '../components/sections/CTASection';
import styles from './ServicesPage.module.css';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Markencia</title>
        <meta name="description" content="Precision-engineered marketing services designed to scale your business predictably." />
        <link rel="canonical" href="https://markencia.com/services" />
      </Helmet>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="mk-container">
          <div className={styles.heroContent}>
            <div className="mk-hero-badge">Our Services</div>
            <h1 className={styles.heroTitle}>
              Engineered for{' '}
              <span className={styles.accent}>Your</span> Growth
            </h1>
            <p className={styles.heroSubtitle}>
              We don't just offer services; we build end-to-end growth ecosystems. Discover how
              our AI-driven strategies can scale your business to new heights.
            </p>
          </div>
        </div>
      </section>

      {/* Services listing */}
      <section className="mk-section mk-bg-texture">
        <div className="mk-container">
          {SERVICES_DETAIL.map((service) => (
            <div
              key={service.id}
              className={[styles.serviceItem, service.reverse ? styles.reverse : ''].join(' ')}
            >
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h2>
                  {service.title.replace(service.highlightWord, '')}{' '}
                  <span className="mk-highlight-text">{service.highlightWord}</span>
                </h2>
                <p>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className={`${styles.serviceVisual} ${styles[service.visualClass]}`}>
                <div className={styles.abstractCard}>{service.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your <span class='mk-highlight-text'>Growth Engine?</span>"
        subtitle="Stop wasting money on outdated marketing. Partner with Markencia and leverage AI to dominate your industry."
        showForm={false}
        buttonText="Book Your Strategy Call"
        buttonHref="/contact"
        buttonVariant="ctaButton"
      />
    </>
  );
}
