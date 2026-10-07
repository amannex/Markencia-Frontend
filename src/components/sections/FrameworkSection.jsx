'use client';

import styles from './FrameworkSection.module.css';

const FRAMEWORK_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business, workflows and operational challenges.',
  },
  {
    number: '02',
    title: 'Diagnose',
    description: 'Find the repetitive work and bottlenecks worth solving.',
  },
  {
    number: '03',
    title: 'Prioritize',
    description: 'Evaluate opportunities based on impact, complexity and ROI.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Implement the right combination of AI, automation and software.',
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'Measure results and continuously improve the system.',
  },
];

export default function FrameworkSection() {
  return (
    <section className={styles.section} id="process" aria-label="The Markencia Transformation Framework">
      <div className={styles.container}>
        {/* ── TOP AREA (HEADLINE) ── */}
        <div className={styles.topArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span>HOW WE WORK</span>
          </div>

          <h2 className={styles.heading}>
            The Markencia{' '}
            <span className={styles.headingHighlight}>Transformation</span>{' '}
            Framework
          </h2>
        </div>

        {/* ── 5-STEP TIMELINE GRID ── */}
        <div className={styles.timelineWrapper}>
          <div className={styles.connectingLine} aria-hidden="true" />

          <div className={styles.stepsGrid}>
            {FRAMEWORK_STEPS.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumberWrapper}>
                  <div className={styles.stepNumber}>{step.number}</div>
                </div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
