'use client';

import Link from 'next/link';
import styles from './WhatWeDoSection.module.css';

const CARDS_DATA = [
  {
    number: '01',
    title: 'AI Strategy',
    description: 'Identify high-impact AI opportunities across your business.',
    deliverableLabel: 'Focus Areas',
    items: [
      'AI readiness assessment',
      'Workflow automation',
      'AI roadmap',
      'Prototype development',
      'ROI prioritization',
    ],
  },
  {
    number: '02',
    title: 'Workflow Automation',
    description: 'Turn repetitive business processes into automated workflows.',
    deliverableLabel: 'Automated Operations',
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
    items: [
      'AI assistants',
      'n8n workflow',
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
    items: [
      'Websites',
      'CRM Migration',
      'APIs',
      'WordPress',
      'Internal tools',
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
            <span className={styles.headingLine1}>
              We don&apos;t just recommend AI tools.
            </span>
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

/* ── BULLET CHECK ICON ── */

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
