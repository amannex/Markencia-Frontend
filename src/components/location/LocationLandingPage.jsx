'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NOIDA_LOCATION_DATA } from '../../data/locations/noidaData';
import styles from './LocationLandingPage.module.css';

export default function LocationLandingPage({ data = NOIDA_LOCATION_DATA }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const {
    hero,
    problemsSection,
    signatureSection,
    servicesSection,
    industriesSection,
    processSection,
    caseStudiesSection,
    faqSection,
    finalCta,
  } = data;

  return (
    <div className={styles.pageWrapper}>
      {/* ──────────────────────────────────────────────
         01 — HERO SECTION
      ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBackgroundGrid} aria-hidden="true" />
        <div className={`mk-container ${styles.heroContent}`}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.eyebrowDot} />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className={styles.heroTitle}>{hero.h1}</h1>

          <p className={styles.heroSubtitle}>{hero.subheading}</p>

          <div className={styles.heroCtaGroup}>
            <Link href={hero.primaryCta.href} className={styles.primaryBtn}>
              {hero.primaryCta.label} <span>&rarr;</span>
            </Link>
            <a href={hero.secondaryCta.href} className={styles.secondaryBtn}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className={styles.trustBar}>
            <span className={styles.trustText}>{hero.trustLine}</span>
            {hero.localBadge && (
              <span className={styles.localBadgeText}>📍 {hero.localBadge}</span>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         02 — LOCAL BUSINESS PROBLEM
      ────────────────────────────────────────────── */}
      <section className={styles.problemsSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{problemsSection.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{problemsSection.heading}</h2>
            <p className={styles.sectionDescription}>{problemsSection.description}</p>
          </div>

          <div className={styles.problemsGrid}>
            {problemsSection.problems.map((problem) => (
              <div key={problem.number} className={styles.problemCard}>
                <div className={styles.problemNumber}>{problem.number}</div>
                <h3 className={styles.problemTitle}>{problem.title}</h3>
                <p className={styles.problemDesc}>{problem.description}</p>
                <div className={styles.problemImpact}>
                  <span>⚠️</span> {problem.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         03 — WHAT MARKENCIA SOLVES (SIGNATURE PILLARS)
      ────────────────────────────────────────────── */}
      <section id="solutions" className={styles.signatureSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{signatureSection.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{signatureSection.heading}</h2>
            <p className={styles.sectionDescription}>{signatureSection.subheading}</p>
          </div>

          <div className={styles.pillarsGrid}>
            {signatureSection.pillars.map((pillar) => (
              <div key={pillar.id} className={styles.pillarCard}>
                <div className={styles.pillarTag}>{pillar.tag}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>

                <ul className={styles.pillarHighlights}>
                  {pillar.highlights.map((item, idx) => (
                    <li key={idx} className={styles.pillarHighlightItem}>
                      <span className={styles.pillarCheckIcon}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href={pillar.cta.href} className={styles.pillarCtaLink}>
                  {pillar.cta.label} <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         04 — SERVICES SECTION
      ────────────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{servicesSection.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{servicesSection.heading}</h2>
            <p className={styles.sectionDescription}>{servicesSection.description}</p>
          </div>

          <div className={styles.servicesGrid}>
            {servicesSection.services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
                <Link href={service.href} className={styles.serviceLink}>
                  Explore capability &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         05 — INDUSTRIES SECTION
      ────────────────────────────────────────────── */}
      <section className={styles.industriesSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{industriesSection.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{industriesSection.heading}</h2>
            <p className={styles.sectionDescription}>{industriesSection.description}</p>
          </div>

          <div className={styles.industriesGrid}>
            {industriesSection.industries.map((ind, index) => (
              <div key={index} className={styles.industryCard}>
                <div className={styles.industryHeader}>
                  <span className={styles.industryIcon}>{ind.icon}</span>
                  <h3 className={styles.industryTitle}>{ind.title}</h3>
                </div>
                <p className={styles.industryDesc}>{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         06 — HOW WE WORK (PROCESS)
      ────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionEyebrow} ${styles.processEyebrow}`}>
              {processSection.eyebrow}
            </span>
            <h2 className={`${styles.sectionHeading} ${styles.processHeading}`}>
              {processSection.heading}
            </h2>
            <p className={`${styles.sectionDescription} ${styles.processDescription}`}>
              {processSection.description}
            </p>
          </div>

          <div className={styles.processStepsGrid}>
            {processSection.steps.map((step) => (
              <div key={step.step} className={styles.processStepCard}>
                <div className={styles.stepBadge}>{step.step}</div>
                <h3 className={styles.stepName}>{step.name}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         07 — CASE STUDIES (SELECTED WORK)
      ────────────────────────────────────────────── */}
      <section className={styles.caseStudiesSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{caseStudiesSection.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{caseStudiesSection.heading}</h2>
            <p className={styles.sectionDescription}>{caseStudiesSection.description}</p>
          </div>

          <div className={styles.projectsGrid}>
            {caseStudiesSection.projects.map((item, idx) => (
              <div key={idx} className={styles.projectCard}>
                <div className={styles.projectCategory}>{item.category}</div>
                <h3 className={styles.projectName}>{item.project}</h3>

                <div className={styles.whatWeBuiltBadge}>
                  <strong>What We Built:</strong> {item.whatWeBuilt}
                </div>

                <div className={styles.projectDetailBlock}>
                  <div className={styles.detailLabel}>The Challenge</div>
                  <p className={styles.detailContent}>{item.challenge}</p>
                </div>

                <div className={styles.projectDetailBlock}>
                  <div className={styles.detailLabel}>The Approach</div>
                  <p className={styles.detailContent}>{item.approach}</p>
                </div>

                <Link href={item.linkHref} className={styles.projectCtaLink}>
                  {item.linkText} <span>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         08 — FAQ SECTION
      ────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{faqSection.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{faqSection.heading}</h2>
            <p className={styles.sectionDescription}>{faqSection.description}</p>
          </div>

          <div className={styles.faqContainer}>
            {faqSection.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${index}`}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqChevron} aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className={styles.faqAnswer}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                    >
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         09 — FINAL CTA SECTION
      ────────────────────────────────────────────── */}
      <section className={styles.finalCtaSection}>
        <div className={`mk-container ${styles.finalCtaContainer}`}>
          <h2 className={styles.finalCtaHeadline}>{finalCta.headline}</h2>
          <p className={styles.finalCtaSubheading}>{finalCta.subheading}</p>

          <div>
            <Link href={finalCta.primaryButton.href} className={styles.finalCtaBtn}>
              {finalCta.primaryButton.label} <span>&rarr;</span>
            </Link>
          </div>

          <p className={styles.finalCtaSupporting}>{finalCta.supportingNote}</p>
        </div>
      </section>
    </div>
  );
}
