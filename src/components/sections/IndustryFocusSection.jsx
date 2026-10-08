'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './IndustryFocusSection.module.css';

const INDUSTRIES_DATA = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    subheading: 'IN REAL ESTATE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M13 3l6 4v14" />
        <path d="M9 10h1" />
        <path d="M9 14h1" />
        <path d="M9 18h1" />
        <path d="M15 10h1" />
        <path d="M15 14h1" />
        <path d="M15 18h1" />
      </svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v2" />
      </svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
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
              AI solutions work best when built around 
            </span>{' '}
            <span className={styles.headingLine2}>
              <span className={styles.headingHighlight}>your business.</span>
            </span>
          </h2>
        </div>

        {/* ── DESKTOP & TABLET TWO EQUAL-WIDTH COLUMNS ── */}
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
                    className={`${styles.navCard} ${isActive ? styles.navCardActive : ''}`}
                    onClick={() => setActiveId(ind.id)}
                  >
                    <div className={styles.navCardLeft}>
                      <div className={styles.iconBox} aria-hidden="true">
                        {ind.icon}
                      </div>
                      <span className={styles.navTitle}>{ind.title}</span>
                    </div>
                    <span className={styles.navArrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: AI Opportunities Panel */}
          <div
            className={`${styles.panel} ${styles.fadeContent}`}
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
                <span className={styles.ctaArrow} aria-hidden="true">
                  &rarr;
                </span>
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
                  <div className={styles.accordionHeaderLeft}>
                    <div className={styles.accordionIconBox} aria-hidden="true">
                      {ind.icon}
                    </div>
                    <span className={styles.accordionTitle}>{ind.title}</span>
                  </div>
                  <span className={styles.accordionToggleIcon} aria-hidden="true">
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
                        <span className={styles.ctaArrow} aria-hidden="true">
                          &rarr;
                        </span>
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
