'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './BusinessStagesSection.module.css';

const STAGES = [
  {
    id: 'small-business',
    number: '01',
    label: 'Stage 01 — Small Business',
    tabTitle: 'Small Business',
    teaser: 'Automate the work holding you back.',
    headline: 'Automate the work holding you back.',
    description:
      'Small businesses often lose valuable time to repetitive tasks, manual processes, spreadsheets, and disconnected tools. Markencia helps identify these bottlenecks and introduce practical AI-powered automation.',
    focusPoints: [
      'Automate repetitive work',
      'Reduce operational overhead',
      'Connect essential tools',
      'Build scalable processes',
    ],
    ctaText: 'Explore Small Business Solutions',
  },
  {
    id: 'growing-business',
    number: '02',
    label: 'Stage 02 — Growing Business',
    tabTitle: 'Growing Business',
    teaser: 'Connect the systems slowing you down.',
    headline: 'Connect the systems slowing you down.',
    description:
      'As businesses grow, disconnected systems and increasingly complex workflows can slow teams down. Markencia helps connect your systems, automate operations, and turn fragmented processes into intelligent workflows.',
    focusPoints: [
      'Connect business systems',
      'Automate cross-team workflows',
      'Integrate data and tools',
      'Improve operational efficiency',
    ],
    ctaText: 'Explore Growth Infrastructure',
  },
  {
    id: 'enterprise',
    number: '03',
    label: 'Stage 03 — Enterprise Organizations',
    tabTitle: 'Enterprise',
    teaser: 'Build the infrastructure for intelligent operations.',
    headline: 'Build the infrastructure for intelligent operations.',
    description:
      'Enterprise organizations need more than isolated AI tools. Markencia helps modernize existing infrastructure and integrate intelligent systems into complex business operations.',
    focusPoints: [
      'AI transformation strategy',
      'Intelligent infrastructure',
      'Enterprise workflow automation',
      'Scalable AI systems',
    ],
    ctaText: 'Explore Enterprise Transformation',
  },
];

function CheckSquareIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.25L4.75 8.5L9.5 3.5" />
    </svg>
  );
}

export default function BusinessStagesSection() {
  const [activeStageId, setActiveStageId] = useState(STAGES[0].id);

  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  return (
    <section className={styles.section} id="solutions-by-stage" aria-label="Solutions By Business Stage">
      <div className={styles.container}>
        {/* ── TOP AREA (HEADLINE & SUBHEADING) ── */}
        <div className={styles.topArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span>SOLUTIONS BY STAGE</span>
          </div>

          <h2 className={styles.heading}>
            Wherever your business is, there&apos;s{' '}
            <span className={styles.headingHighlight}>room to optimize.</span>
          </h2>
        </div>

        {/* ── 3 STAGE TABS (INTERACTIVE CATEGORIES) ── */}
        <div className={styles.tabsGrid} role="tablist" aria-label="Business Stages">
          {STAGES.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                role="tab"
                id={`tab-${stage.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${stage.id}`}
                className={`${styles.tabCard} ${isActive ? styles.tabCardActive : ''}`}
                onClick={() => setActiveStageId(stage.id)}
              >
                <div className={styles.tabTop}>
                  <span className={styles.tabNumber}>{stage.number}</span>
                </div>

                <div>
                  <h3 className={styles.tabTitle}>{stage.tabTitle}</h3>
                  <p className={styles.tabTeaser}>{stage.teaser}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── SUPPORTING CONTENT PANEL ── */}
        <div
          className={`${styles.panel} ${styles.fadeContent}`}
          key={activeStage.id}
          id={`panel-${activeStage.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeStage.id}`}
        >
          <div className={styles.panelGrid}>
            {/* Left: Narrative & Headline */}
            <div className={styles.narrativeCol}>
              <span className={styles.stageLabel}>{activeStage.label}</span>

              <h3 className={styles.stageHeadline}>{activeStage.headline}</h3>

              <p className={styles.stageDescription}>{activeStage.description}</p>

              <Link href="/contact" className={styles.ctaLink}>
                <span>{activeStage.ctaText}</span>
                <span className={styles.ctaArrow} aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Right: Focus Points */}
            <div className={styles.focusCol}>
              <div className={styles.focusHeader}>
                <span className={styles.focusHeaderTitle}>Key Operational Focus</span>
              </div>

              <ul className={styles.focusList}>
                {activeStage.focusPoints.map((point, idx) => (
                  <li key={idx} className={styles.focusItem}>
                    <span className={styles.focusIcon} aria-hidden="true">
                      <CheckSquareIcon />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
