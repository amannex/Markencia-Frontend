'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './IndustryFocusSection.module.css';

const INDUSTRIES_DATA = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    subheading: 'IN REAL ESTATE',
    opportunities: [
      {
        title: 'Lead Qualification',
        description:
          'Automatically qualify property enquiries based on budget, location, and requirements.',
      },
      {
        title: 'Lead Follow-up',
        description:
          'Automate personalized follow-ups across WhatsApp, email, and CRM.',
      },
      {
        title: 'Document Processing',
        description:
          'Extract and organize information from property documents.',
      },
      {
        title: 'Customer Support',
        description:
          'Handle common tenant/buyer questions automatically.',
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    subheading: 'IN EDUCATION',
    opportunities: [
      {
        title: 'Admissions',
        description:
          'Automate enquiry handling, qualification, and follow-ups.',
      },
      {
        title: 'Student Support',
        description:
          'AI assistants for common academic and administrative queries.',
      },
      {
        title: 'Content Operations',
        description:
          'Accelerate content creation, assessments, and knowledge management.',
      },
      {
        title: 'Internal Workflows',
        description:
          'Automate repetitive administrative processes.',
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subheading: 'IN HEALTHCARE',
    opportunities: [
      {
        title: 'Patient Communication',
        description:
          'Automate appointment reminders and routine communication.',
      },
      {
        title: 'Administrative Workflows',
        description:
          'Reduce repetitive administrative work.',
      },
      {
        title: 'Document Processing',
        description:
          'Extract and organize information from documents.',
      },
      {
        title: 'Support & Routing',
        description:
          'Direct routine queries to the appropriate workflow or team.',
      },
    ],
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    subheading: 'IN PROFESSIONAL SERVICES',
    opportunities: [
      {
        title: 'Client Onboarding',
        description:
          'Streamline client intake, KYC verification, and initial engagement setup.',
      },
      {
        title: 'Document & Contract Review',
        description:
          'Extract and organize key clauses and information from client documents.',
      },
      {
        title: 'Knowledge Retrieval',
        description:
          'Instant AI search across past deliverables, briefs, and internal SOPs.',
      },
      {
        title: 'Reporting & Insights',
        description:
          'Automate recurring client reports, billable summaries, and KPI tracking.',
      },
    ],
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    subheading: 'IN E-COMMERCE',
    opportunities: [
      {
        title: 'Customer Support',
        description:
          'Handle order tracking, returns, and buyer questions automatically 24/7.',
      },
      {
        title: 'Catalog Operations',
        description:
          'Automate product descriptions, category tagging, and attribute management.',
      },
      {
        title: 'Review & Feedback Analysis',
        description:
          'Extract actionable customer sentiment and feedback trends in real time.',
      },
      {
        title: 'Cart Recovery & Retention',
        description:
          'Automate contextual follow-ups and personalized retention campaigns.',
      },
    ],
  },
  {
    id: 'saas-technology',
    title: 'SaaS & Technology',
    subheading: 'IN SAAS & TECHNOLOGY',
    opportunities: [
      {
        title: 'User Onboarding',
        description:
          'Guide new signups through personalized setup and activation workflows.',
      },
      {
        title: 'Ticket Triage & Routing',
        description:
          'Categorize, troubleshoot, and route technical support requests instantly.',
      },
      {
        title: 'Documentation Maintenance',
        description:
          'Keep technical knowledge bases, FAQs, and developer docs continuously updated.',
      },
      {
        title: 'Churn Prevention',
        description:
          'Identify drop-offs in product engagement and trigger automated interventions.',
      },
    ],
  },
];

export default function IndustryFocusSection() {
  const [activeId, setActiveId] = useState(INDUSTRIES_DATA[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState(INDUSTRIES_DATA[0].id);

  const activeIndustry =
    INDUSTRIES_DATA.find((ind) => ind.id === activeId) || INDUSTRIES_DATA[0];

  const toggleMobileAccordion = (id) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className={styles.section}
      id="industries"
      aria-label="Industry Focus: AI Opportunities by Industry"
    >
      <div className={styles.container}>
        {/* ── TOP AREA (HEADLINE) ── */}
        <div className={styles.topArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span>INDUSTRY FOCUS</span>
          </div>

          <h2 className={styles.heading}>
            <span className={styles.headingLine1}>
              AI works best when it fits your business.
            </span>{' '}
            <span className={styles.headingLine2}>
              We identify opportunities and build{' '}
              <span className={styles.headingHighlight}>intelligent solutions.</span>
            </span>
          </h2>
        </div>

        {/* ── DIVIDER ── */}
        <div className={styles.divider} aria-hidden="true" />

        {/* ── DESKTOP & TABLET TWO-COLUMN LAYOUT ── */}
        <div className={styles.desktopLayout}>
          {/* Left Column: Industries Navigation */}
          <div className={styles.navColumn}>
            <div className={styles.columnEyebrow}>INDUSTRIES</div>
            <div className={styles.navList} role="tablist" aria-label="Industries">
              {INDUSTRIES_DATA.map((ind) => {
                const isActive = ind.id === activeId;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    role="tab"
                    id={`tab-${ind.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${ind.id}`}
                    className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                    onClick={() => setActiveId(ind.id)}
                  >
                    <span className={styles.navArrow} aria-hidden="true">
                      {isActive ? '→' : ''}
                    </span>
                    <span className={styles.navLabel}>{ind.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: AI Opportunities */}
          <div
            className={`${styles.contentColumn} ${styles.fadeContent}`}
            key={activeIndustry.id}
            id={`panel-${activeIndustry.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeIndustry.id}`}
          >
            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrow}>AI OPPORTUNITIES</span>
              <h3 className={styles.panelTitle}>{activeIndustry.subheading}</h3>
            </div>

            {/* Opportunities Grid */}
            <div className={styles.opportunitiesGrid}>
              {activeIndustry.opportunities.map((opp, idx) => (
                <div key={idx} className={styles.oppCard}>
                  <div className={styles.oppCardTop}>
                    <span className={styles.oppBullet} aria-hidden="true" />
                    <h4 className={styles.oppTitle}>{opp.title}</h4>
                  </div>
                  <p className={styles.oppDesc}>{opp.description}</p>
                </div>
              ))}
            </div>

            {/* Explore CTA */}
            <div className={styles.panelFooter}>
              <Link
                href={`/contact?industry=${encodeURIComponent(activeIndustry.title)}`}
                className={styles.exploreCta}
                id={`explore-desktop-${activeIndustry.id}`}
              >
                <span>Explore this industry</span>
                <span className={styles.ctaArrow} aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── MOBILE ACCORDION LAYOUT ── */}
        <div className={styles.mobileAccordion} aria-label="Industries Accordion">
          {INDUSTRIES_DATA.map((ind) => {
            const isExpanded = expandedMobileId === ind.id;
            return (
              <div
                key={ind.id}
                className={`${styles.accordionItem} ${
                  isExpanded ? styles.accordionItemOpen : ''
                }`}
              >
                <button
                  type="button"
                  className={styles.accordionHeader}
                  aria-expanded={isExpanded}
                  aria-controls={`accordion-content-${ind.id}`}
                  onClick={() => toggleMobileAccordion(ind.id)}
                >
                  <span className={styles.accordionTitle}>{ind.title}</span>
                  <span className={styles.accordionIcon} aria-hidden="true">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                {isExpanded && (
                  <div
                    id={`accordion-content-${ind.id}`}
                    className={styles.accordionBody}
                  >
                    <div className={styles.accordionEyebrow}>
                      AI OPPORTUNITIES {ind.subheading}
                    </div>

                    <div className={styles.accordionOppList}>
                      {ind.opportunities.map((opp, idx) => (
                        <div key={idx} className={styles.accordionOppCard}>
                          <div className={styles.oppCardTop}>
                            <span className={styles.oppBullet} aria-hidden="true" />
                            <h4 className={styles.oppTitle}>{opp.title}</h4>
                          </div>
                          <p className={styles.oppDesc}>{opp.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className={styles.accordionFooter}>
                      <Link
                        href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                        className={styles.exploreCta}
                        id={`explore-mobile-${ind.id}`}
                      >
                        <span>Explore this industry</span>
                        <span className={styles.ctaArrow} aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
