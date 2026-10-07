'use client';

import Link from 'next/link';
import styles from './WhatWeDoSection.module.css';

const CARDS_DATA = [
  {
    number: '01',
    title: 'AI Strategy',
    description: 'Identify high-impact AI opportunities across your business.',
    deliverableLabel: 'Focus Areas',
    icon: <StrategyIcon />,
    items: [
      'AI readiness assessment',
      'Use-case discovery',
      'AI roadmap',
      'ROI prioritization',
    ],
  },
  {
    number: '02',
    title: 'Workflow Automation',
    description: 'Turn repetitive business processes into automated workflows.',
    deliverableLabel: 'Automated Operations',
    icon: <WorkflowIcon />,
    items: [
      'Lead management',
      'Data entry',
      'Reporting',
      'Notifications',
      'Approvals',
    ],
  },
  {
    number: '03',
    title: 'AI Systems',
    description: 'Build AI-powered tools around your business.',
    deliverableLabel: 'Custom Intelligence',
    icon: <AiSystemsIcon />,
    items: [
      'AI assistants',
      'Knowledge systems',
      'AI agents',
      'Document intelligence',
      'Custom AI applications',
    ],
  },
  {
    number: '04',
    title: 'Digital Infrastructure',
    description: 'Connect AI to the systems your business already uses.',
    deliverableLabel: 'Integrated Stack',
    icon: <InfrastructureIcon />,
    items: [
      'Websites',
      'CRM',
      'APIs',
      'WordPress',
      'Internal tools',
      'Databases',
    ],
  },
];

export default function WhatWeDoSection() {
  return (
    <section className={styles.section} id="services" aria-label="What Markencia Actually Does">
      <div className={styles.container}>
        {/* ── TOP AREA (HEADLINE) ── */}
        <div className={styles.topArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span>WHAT MARKENCIA ACTUALLY DOES</span>
          </div>

          <h2 className={styles.heading}>
            <span>We don&apos;t just recommend AI tools. </span>
            <span className={styles.headingLine2}>
              We design systems around how your business{' '}
              <span className={styles.headingHighlight}>actually works.</span>
            </span>
          </h2>
        </div>

        {/* ── 4 CARDS GRID (4-COL ON DESKTOP, 2-COL TABLET, 1-COL MOBILE) ── */}
        <div className={styles.cardGrid}>
          {CARDS_DATA.map((card) => (
            <article key={card.number} className={styles.card}>
              <div className={styles.cardAccentBar} aria-hidden="true" />

              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>{card.number}</span>
                <div className={styles.iconTile} aria-hidden="true">
                  {card.icon}
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>

              <div className={styles.deliverablesArea}>
                <div className={styles.deliverablesHeader}>
                  <span className={styles.deliverablesLabel}>{card.deliverableLabel}</span>
                  <span className={styles.deliverablesLine} aria-hidden="true" />
                </div>

                <ul className={styles.itemList}>
                  {card.items.map((item, idx) => (
                    <li key={idx} className={styles.item}>
                      <span className={styles.itemBullet} aria-hidden="true">
                        <CheckIcon />
                      </span>
                      <span className={styles.itemText}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className={styles.bottomArea}>
          <Link href="/contact" className={styles.ctaButton} id="what-we-do-cta-button">
            <span>Build Your AI Roadmap</span>
            <span className={styles.ctaArrow} aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── BESPOKE MODERN ICONS ── */

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 6.25L4.75 8.5L9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer target ring */}
      <circle cx="14" cy="14" r="11" stroke="#004523" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="3 3" />
      {/* Mid ring */}
      <circle cx="14" cy="14" r="7.5" stroke="#004523" strokeWidth="1.6" />
      {/* Bullseye center */}
      <circle cx="14" cy="14" r="3" fill="#FFB800" />
      {/* Compass crosshairs */}
      <path d="M14 2V5" stroke="#004523" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 23V26" stroke="#004523" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 14H5" stroke="#004523" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M23 14H26" stroke="#004523" strokeWidth="1.6" strokeLinecap="round" />
      {/* Dynamic trajectory node */}
      <path d="M14 14L20.5 7.5" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20.5" cy="7.5" r="1.75" fill="#004523" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top flow node */}
      <rect x="3" y="4" width="8" height="6" rx="2" fill="#004523" fillOpacity="0.1" stroke="#004523" strokeWidth="1.5" />
      {/* Bottom right flow node */}
      <rect x="17" y="18" width="8" height="6" rx="2" fill="#004523" fillOpacity="0.1" stroke="#004523" strokeWidth="1.5" />
      {/* Central automation gear/lightning */}
      <path
        d="M11 7H15.5C17.7091 7 19.5 8.79086 19.5 11V18"
        stroke="#004523"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 21H12.5C10.2909 21 8.5 19.2091 8.5 17V10"
        stroke="#004523"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      {/* Lightning trigger symbol */}
      <path
        d="M15 11.5L12.5 15.5H15.5L14 19"
        stroke="#FFB800"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Action pulse dots */}
      <circle cx="7" cy="7" r="1.25" fill="#004523" />
      <circle cx="21" cy="21" r="1.25" fill="#FFB800" />
    </svg>
  );
}

function AiSystemsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central brain/neural core */}
      <rect x="7" y="7" width="14" height="14" rx="4" fill="#004523" fillOpacity="0.08" stroke="#004523" strokeWidth="1.5" />
      {/* Chip circuit pins */}
      <path d="M11 3V7M17 3V7M11 21V25M17 21V25M3 11H7M3 17H7M21 11H25M21 17H25" stroke="#004523" strokeWidth="1.4" strokeLinecap="round" />
      {/* Neural node spark */}
      <circle cx="14" cy="14" r="2.5" fill="#004523" />
      <circle cx="14" cy="14" r="4.5" stroke="#FFB800" strokeWidth="1.2" strokeOpacity="0.75" />
      {/* AI Intelligence Sparkle in top right */}
      <path
        d="M20 5L20.8 7.2L23 8L20.8 8.8L20 11L19.2 8.8L17 8L19.2 7.2L20 5Z"
        fill="#FFB800"
      />
    </svg>
  );
}

function InfrastructureIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Server/Database top disk */}
      <ellipse cx="14" cy="6.5" rx="9" ry="3" fill="#004523" fillOpacity="0.1" stroke="#004523" strokeWidth="1.5" />
      {/* Middle disk */}
      <path d="M5 6.5V13.5C5 15.1569 9.02944 16.5 14 16.5C18.9706 16.5 23 15.1569 23 13.5V6.5" stroke="#004523" strokeWidth="1.5" />
      {/* Bottom disk */}
      <path d="M5 13.5V20.5C5 22.1569 9.02944 23.5 14 23.5C18.9706 23.5 23 22.1569 23 20.5V13.5" stroke="#004523" strokeWidth="1.5" />
      {/* Connection node / API bus */}
      <path d="M14 6.5V23.5" stroke="#FFB800" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
      <circle cx="14" cy="14" r="2" fill="#FFB800" />
      {/* Mini status indicator */}
      <circle cx="20" cy="13.5" r="1.2" fill="#004523" />
      <circle cx="20" cy="20.5" r="1.2" fill="#004523" />
    </svg>
  );
}
