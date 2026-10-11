'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SERVICES_LIST } from '../../data/services';
import styles from './ServiceDetailPage.module.css';

export default function ServiceDetailPage({ data }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!data) return null;

  const {
    slug,
    hero,
    whatIsIt,
    whoNeedsIt,
    problemsSolved,
    whatWeBuild,
    process,
    examples,
    technologies,
    faqs,
    cta,
  } = data;

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Find related services (excluding current)
  const relatedServices = SERVICES_LIST.filter(
    (s) => s.slug !== slug && !s.alternateSlugs?.includes(slug)
  ).slice(0, 3);

  return (
    <div className={styles.pageWrapper}>
      {/* ──────────────────────────────────────────────
         BREADCRUMBS
      ────────────────────────────────────────────── */}
      <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
        <div className="mk-container">
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
            </li>
            <li className={styles.breadcrumbSeparator} aria-hidden="true">
              /
            </li>
            <li className={styles.breadcrumbItem}>
              <Link href="/services" className={styles.breadcrumbLink}>
                Services
              </Link>
            </li>
            <li className={styles.breadcrumbSeparator} aria-hidden="true">
              /
            </li>
            <li className={styles.breadcrumbItem} aria-current="page">
              <span className={styles.breadcrumbCurrent}>{hero.badge}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ──────────────────────────────────────────────
         01 — HERO SECTION
      ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBackgroundGrid} aria-hidden="true" />
        <div className={`mk-container ${styles.heroContent}`}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.eyebrowDot} />
            <span>{hero.badge}</span>
          </div>

          <h1 className={styles.heroTitle}>
            {hero.title}{' '}
            <span className={styles.titleHighlight}>{hero.titleHighlight}</span>
          </h1>

          <p className={styles.heroSubtitle}>{hero.subtitle}</p>

          <div className={styles.heroCtaGroup}>
            <Link href={hero.primaryCta.href} className={styles.primaryBtn}>
              {hero.primaryCta.label} <span>&rarr;</span>
            </Link>
            <a href={hero.secondaryCta.href} className={styles.secondaryBtn}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className={styles.metricsGrid}>
            {hero.metrics.map((metric, idx) => (
              <div key={idx} className={styles.metricCard}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>

          <p className={styles.trustBar}>{hero.trustText}</p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         02 — WHAT IS IT?
      ────────────────────────────────────────────── */}
      <section id="what-is-it" className={styles.whatIsItSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{whatIsIt.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{whatIsIt.heading}</h2>
            <p className={styles.sectionDescription}>{whatIsIt.description}</p>
          </div>

          <div className={styles.whatNarrativeCard}>
            <div className={styles.whatParagraphs}>
              {whatIsIt.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className={styles.pillarsGrid}>
            {whatIsIt.pillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarIcon} aria-hidden="true">
                  {pillar.icon}
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         03 — WHO NEEDS IT?
      ────────────────────────────────────────────── */}
      <section id="who-needs-it" className={styles.whoNeedsItSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{whoNeedsIt.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{whoNeedsIt.heading}</h2>
            <p className={styles.sectionDescription}>{whoNeedsIt.description}</p>
          </div>

          <div className={styles.profilesGrid}>
            {whoNeedsIt.profiles.map((profile, idx) => (
              <div key={idx} className={styles.profileCard}>
                <span className={styles.profileTag}>{profile.tag}</span>
                <h3 className={styles.profileTitle}>{profile.title}</h3>

                <div className={styles.symptomsTitle}>Common Pain Symptoms:</div>
                <ul className={styles.symptomsList}>
                  {profile.symptoms.map((symptom, sIdx) => (
                    <li key={sIdx} className={styles.symptomItem}>
                      {symptom}
                    </li>
                  ))}
                </ul>

                <div className={styles.solutionBox}>
                  <span className={styles.solutionLabel}>Markencia Engineering:</span>
                  <div className={styles.solutionText}>{profile.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         04 — WHAT PROBLEMS DOES IT SOLVE?
      ────────────────────────────────────────────── */}
      <section id="problems-solved" className={styles.problemsSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{problemsSolved.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{problemsSolved.heading}</h2>
            <p className={styles.sectionDescription}>{problemsSolved.description}</p>
          </div>

          <div className={styles.comparisonsGrid}>
            {problemsSolved.comparisons.map((comp, idx) => (
              <div key={idx} className={styles.comparisonCard}>
                <div className={styles.problemHalf}>
                  <div className={styles.problemPill}>
                    <span aria-hidden="true">⚠️</span> The Traditional Bottleneck
                  </div>
                  <h3 className={styles.problemTitleText}>{comp.problem}</h3>
                  <p className={styles.problemDescText}>{comp.problemDesc}</p>
                </div>
                <div className={styles.solutionHalf}>
                  <div className={styles.solutionPill}>
                    <span aria-hidden="true">✓</span> Markencia Architecture
                  </div>
                  <h3 className={styles.solutionTitleText}>{comp.solution}</h3>
                  <p className={styles.solutionDescText}>{comp.solutionDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         05 — WHAT DOES MARKENCIA ACTUALLY BUILD?
      ────────────────────────────────────────────── */}
      <section id="what-we-build" className={styles.whatWeBuildSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{whatWeBuild.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{whatWeBuild.heading}</h2>
            <p className={styles.sectionDescription}>{whatWeBuild.description}</p>
          </div>

          <div className={styles.deliverablesList}>
            {whatWeBuild.deliverables.map((item) => (
              <div key={item.number} className={styles.deliverableCard}>
                <div className={styles.deliverableNumber}>{item.number}</div>
                <div className={styles.deliverableMain}>
                  <h3 className={styles.deliverableTitle}>{item.title}</h3>
                  <p className={styles.deliverableDescription}>{item.description}</p>
                </div>
                <div className={styles.deliverableFeatures}>
                  <div className={styles.featuresHeader}>Architecture Specs:</div>
                  <ul className={styles.featuresList}>
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className={styles.featureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         06 — PROCESS (METHODOLOGY)
      ────────────────────────────────────────────── */}
      <section id="process" className={styles.processSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{process.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{process.heading}</h2>
            <p className={styles.sectionDescription}>{process.description}</p>
          </div>

          <div className={styles.stepsTimeline}>
            {process.steps.map((step) => (
              <div key={step.step} className={styles.stepCard}>
                <div className={styles.stepBadge}>{step.step}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <div className={styles.stepOutput}>
                    <span>Milestone Output:</span> {step.output}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         07 — EXAMPLES & DEPLOYMENTS
      ────────────────────────────────────────────── */}
      <section id="examples" className={styles.examplesSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{examples.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{examples.heading}</h2>
            <p className={styles.sectionDescription}>{examples.description}</p>
          </div>

          <div className={styles.casesGrid}>
            {examples.cases.map((c, idx) => (
              <div key={idx} className={styles.caseCard}>
                <div className={styles.caseHeader}>
                  <span className={styles.caseBadge}>{c.badge}</span>
                  <h3 className={styles.caseClient}>{c.client}</h3>
                </div>

                <div className={styles.caseBlock}>
                  <span className={styles.caseBlockLabel}>The Challenge:</span>
                  <p className={styles.caseBlockText}>{c.challenge}</p>
                </div>

                <div className={styles.caseBlock}>
                  <span className={styles.caseBlockLabel}>Markencia Engineering:</span>
                  <p className={styles.caseBlockText}>{c.solution}</p>
                </div>

                <div className={styles.caseResults}>
                  <span className={styles.caseResultsLabel}>Verified Outcomes:</span>
                  <ul className={styles.caseResultsList}>
                    {c.results.map((res, rIdx) => (
                      <li key={rIdx} className={styles.caseResultItem}>
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         08 — TECHNOLOGIES
      ────────────────────────────────────────────── */}
      <section id="technologies" className={styles.techSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{technologies.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{technologies.heading}</h2>
            <p className={styles.sectionDescription}>{technologies.description}</p>
          </div>

          <div className={styles.techCategoriesGrid}>
            {technologies.categories.map((cat, idx) => (
              <div key={idx} className={styles.techCategoryCard}>
                <h3 className={styles.techCategoryName}>{cat.name}</h3>
                <div className={styles.techBadgeList}>
                  {cat.items.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         09 — FAQS ACCORDION
      ────────────────────────────────────────────── */}
      <section id="faqs" className={styles.faqsSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{faqs.eyebrow}</span>
            <h2 className={styles.sectionHeading}>{faqs.heading}</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.items.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={[styles.faqItem, isOpen ? styles.faqItemOpen : ''].join(' ')}
                >
                  <button
                    type="button"
                    className={styles.faqQuestionButton}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.q}</span>
                    <span
                      className={[
                        styles.faqChevron,
                        isOpen ? styles.faqChevronRotated : '',
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className={styles.faqAnswerPanel}
                      role="region"
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
         10 — RELATED ARCHITECTURE SERVICES
      ────────────────────────────────────────────── */}
      <section className={styles.relatedSection}>
        <div className="mk-container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Ecosystem Architecture</span>
            <h2 className={styles.sectionHeading}>Explore Related Services</h2>
            <p className={styles.sectionDescription}>
              Discover how our other engineering disciplines connect with your growth engine.
            </p>
          </div>

          <div className={styles.relatedGrid}>
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={styles.relatedCard}
              >
                <span className={styles.relatedCardBadge}>{service.hero.badge}</span>
                <h3 className={styles.relatedCardTitle}>{service.hero.title}</h3>
                <p className={styles.relatedCardDesc}>{service.whatIsIt.description}</p>
                <div className={styles.relatedCardLink}>
                  Explore Architecture <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
         11 — FINAL CTA
      ────────────────────────────────────────────── */}
      <section className={styles.finalCtaSection}>
        <div className={`mk-container ${styles.finalCtaContent}`}>
          <div className={styles.finalCtaEyebrow}>{cta.eyebrow}</div>
          <h2 className={styles.finalCtaHeading}>{cta.heading}</h2>
          <p className={styles.finalCtaSubtitle}>{cta.subtitle}</p>

          <Link href={cta.buttonHref} className={styles.finalCtaBtn}>
            {cta.buttonText} <span>&rarr;</span>
          </Link>

          {cta.secondaryHref && (
            <div className={styles.finalCtaSecondaryLink}>
              <a href={cta.secondaryHref} target="_blank" rel="noopener noreferrer">
                {cta.secondaryText}
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
