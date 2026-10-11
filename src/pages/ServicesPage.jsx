'use client';

// ServicesPage view component
import Link from 'next/link';
import { SERVICES_DETAIL } from '../data/staticData';
import { SERVICES_LIST } from '../data/services';
import CTASection from '../components/sections/CTASection';
import styles from './ServicesPage.module.css';

export default function ServicesPage() {
  return (
    <>
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
              We don't just offer disconnected services; we engineer resilient digital architectures.
              Explore our core disciplines across workflow automation, WordPress, CMS migration, and enterprise AI.
            </p>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className={styles.architecturePillarsSection}>
        <div className="mk-container">
          <div className={styles.archHeader}>
            <span className={styles.archEyebrow}>Core Systems Architecture</span>
            <h2 className={styles.archHeading}>Enterprise Service Disciplines</h2>
            <p className={styles.archSubtitle}>
              Engineered software systems designed to eliminate operational friction and scale revenue predictably.
            </p>
          </div>

          <div className={styles.archGrid}>
            {SERVICES_LIST.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={styles.archCard}
              >
                <div className={styles.archCardBadge}>{service.hero.badge}</div>
                <h3 className={styles.archCardTitle}>{service.hero.title}</h3>
                <p className={styles.archCardDesc}>{service.whatIsIt.description}</p>
                <div className={styles.archCardMetrics}>
                  {service.hero.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className={styles.archMiniMetric}>
                      <span className={styles.archMetricVal}>{m.value}</span>
                      <span className={styles.archMetricLbl}>{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.archCardAction}>
                  Explore Architecture <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services listing */}
      <section className="mk-section">
        <div className="mk-container">
          {SERVICES_DETAIL.map((service) => (
            <div
              key={service.id}
              className={[styles.serviceItem, service.reverse ? styles.reverse : ''].join(' ')}
            >
              <div className={styles.serviceContent}>
                <div className={styles.serviceIcon}>
                  <span className={styles.iconInner}>{service.icon}</span>
                </div>
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
