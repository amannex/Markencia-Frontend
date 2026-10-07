'use client';

import Link from 'next/link';
import styles from './DifferentiatorSection.module.css';

const PIPELINE_STEPS = [
  {
    number: '01',
    title: 'Business',
    stage: 'Foundations',
    description: 'We understand your revenue model, core objectives, and team realities before touching any technology.',
  },
  {
    number: '02',
    title: 'Processes',
    stage: 'Mapping',
    description: 'We audit day-to-day operations, inter-team handoffs, and software tools in active use.',
  },
  {
    number: '03',
    title: 'Bottlenecks',
    stage: 'Diagnosis',
    description: 'We pinpoint manual friction, data leaks, duplicated tasks, and operational lag.',
  },
  {
    number: '04',
    title: 'Opportunities',
    stage: 'Prioritization',
    description: 'We calculate ROI potential and prioritize high-leverage areas ready for automation.',
  },
  {
    number: '05',
    title: 'AI / Automation',
    stage: 'Architecture',
    isAiStep: true,
    description: 'Only now do we engineer the exact AI assistants, agents, and automated workflows needed.',
  },
  {
    number: '06',
    title: 'Implementation',
    stage: 'Integration',
    description: 'We build, test, and integrate seamlessly into the systems your team already uses.',
  },
  {
    number: '07',
    title: 'Measurable Impact',
    stage: 'Outcome',
    description: 'Hours reclaimed, errors eliminated, and operational leverage clearly quantified.',
  },
];

export default function DifferentiatorSection() {
  return (
    <section className={styles.section} id="differentiator" aria-label="Our Core Differentiator">
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* ── LEFT COLUMN: EDITORIAL NARRATIVE & SIGNATURE CONSULTANCY POSITIONING ── */}
          <div className={styles.leftCol}>
            <div className={styles.stickyContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDash} aria-hidden="true" />
                <span>THE MARKENCIA DIFFERENTIATOR</span>
              </div>

              <h2 className={styles.heading}>
                <span className={styles.headingLine1}>We don&apos;t start with AI.</span>
                <span className={styles.headingLine2}>
                  We start with <span className={styles.headingHighlight}>your business.</span>
                </span>
              </h2>

              <p className={styles.leadText}>
                Most agencies rush to build tools for problems that don&apos;t exist. We take a different path—diagnosing your operations first so every system we build drives undeniable leverage.
              </p>



              <div className={styles.ctaWrapper}>
                <Link href="/contact" className={styles.ctaButton} id="differentiator-cta-btn">
                  <span>Audit Your Business First</span>
                  <span className={styles.ctaArrow} aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: THE 7-STEP DIAGNOSTIC PIPELINE ── */}
          <div className={styles.rightCol}>
            <div className={styles.pipelineHeader}>
              <span className={styles.pipelineBadge}>THE 7-STAGE PIPELINE</span>
              <p className={styles.pipelineSubtitle}>
                From operational reality to measurable impact
              </p>
            </div>

            <div className={styles.pipelineFlow}>
              {PIPELINE_STEPS.map((step, idx) => (
                <div key={step.number} className={styles.stepWrapper}>
                  <article className={`${styles.stepCard} ${step.isAiStep ? styles.stepCardHighlighted : ''}`}>
                    <div className={styles.stepTopRow}>
                      <span className={styles.stepNumber}>{step.number}</span>
                      <span className={`${styles.stepStage} ${step.isAiStep ? styles.stepStageAi : ''}`}>
                        {step.stage}
                      </span>
                    </div>

                    <h3 className={styles.stepTitle}>
                      {step.title}
                      {step.isAiStep && (
                        <span className={styles.aiTag}>Where AI Enters</span>
                      )}
                    </h3>

                    <p className={styles.stepDescription}>{step.description}</p>
                  </article>

                  {idx < PIPELINE_STEPS.length - 1 && (
                    <div className={styles.flowConnector} aria-hidden="true">
                      <div className={styles.connectorLine} />
                      <div className={styles.connectorArrow}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M7 2V12M7 12L3.5 8.5M7 12L10.5 8.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
