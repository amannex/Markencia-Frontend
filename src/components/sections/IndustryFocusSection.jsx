'use client';

import styles from './IndustryFocusSection.module.css';

const VERTICALS = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    workflows: [
      'Lead management',
      'Property inquiries',
      'Follow-ups',
    ],
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
  },
  {
    id: 'education',
    title: 'Education',
    workflows: [
      'Admissions',
      'Student support',
      'Content workflows',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    workflows: [
      'Appointments',
      'Communication',
      'Administrative workflows',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    workflows: [
      'Client onboarding',
      'Documents',
      'Reporting',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v2" />
      </svg>
    ),
  },
  {
    id: 'growing-businesses',
    title: 'Growing Businesses',
    workflows: [
      'Internal operations',
      'Automation and AI adoption',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
];

function CheckSmallIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.25L4.75 8.5L9.5 3.5" />
    </svg>
  );
}

export default function IndustryFocusSection() {
  return (
    <section className={styles.section} id="industries" aria-label="Built for the way your industry works">
      <div className={styles.container}>
        {/* ── TOP AREA (HEADLINE) ── */}
        <div className={styles.topArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span>INDUSTRY FOCUS</span>
          </div>

          <h2 className={styles.heading}>
            Built for the way your{' '}
            <span className={styles.headingHighlight}>industry works.</span>
          </h2>
        </div>

        {/* ── 5 VERTICAL CARDS ── */}
        <div className={styles.grid}>
          {VERTICALS.map((vertical) => (
            <article key={vertical.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox} aria-hidden="true">
                  {vertical.icon}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{vertical.title}</h3>

              <ul className={styles.workflowList}>
                {vertical.workflows.map((wf, idx) => (
                  <li key={idx} className={styles.workflowItem}>
                    <span className={styles.workflowCheck} aria-hidden="true">
                      <CheckSmallIcon />
                    </span>
                    <span className={styles.workflowText}>{wf}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
