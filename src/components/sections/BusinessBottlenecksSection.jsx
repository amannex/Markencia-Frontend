'use client';

import styles from './BusinessBottlenecksSection.module.css';

export default function BusinessBottlenecksSection() {
  return (
    <section className={styles.section} id="bottlenecks" aria-label="Business Problems and Operational Bottlenecks">
      <div className={styles.container}>
        {/* ── TOP AREA ── */}
        <div className={styles.topArea}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span>WHERE BUSINESS GETS STUCK</span>
          </div>

          <h2 className={styles.heading}>
            <span>
              Your business probably has more{' '}
              <span className={styles.headingHighlight}>automation</span>
            </span>{' '}
            <span className={styles.headingLine2}>opportunities than you think.</span>
          </h2>
        </div>

        {/* ── 4-CARD GRID (2 × 2 ON DESKTOP & TABLET, 1-COL ON MOBILE) ── */}
        <div className={styles.cardGrid}>
          {/* CARD 01: REPETITIVE WORK */}
          <article className={styles.card}>
            <div className={styles.cardAccentBar} aria-hidden="true" />
            <div className={styles.cardHeader}>
              <span className={styles.cardIndex}>01</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Repetitive Work</h3>
              <p className={styles.cardDescription}>
                Employees spend hours doing tasks that could be automated.
              </p>
            </div>

            {/* Visual Cue: Repeated sequence of horizontal task rows / duplicated markers */}
            <div className={styles.visualCueWrapper}>
              <div className={styles.repetitionCue} aria-hidden="true">
                {[1, 2, 3].map((item) => (
                  <div key={item} className={styles.repeatRow}>
                    <div className={styles.repeatCheckbox} />
                    <div className={styles.repeatLines}>
                      <span className={styles.repeatLinePrimary} />
                      <span className={styles.repeatLineSecondary} />
                    </div>
                    <span className={styles.repeatBadge}>Loop #{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* CARD 02: MANUAL PROCESSES */}
          <article className={styles.card}>
            <div className={styles.cardAccentBar} aria-hidden="true" />
            <div className={styles.cardHeader}>
              <span className={styles.cardIndex}>02</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Manual Processes</h3>
              <p className={styles.cardDescription}>
                Information moves between spreadsheets, emails, WhatsApp and software manually.
              </p>
            </div>

            {/* Visual Cue: Fragmented flow Spreadsheet → Email → WhatsApp → Software */}
            <div className={styles.visualCueWrapper}>
              <div className={styles.fragmentedFlowCue} aria-hidden="true">
                <div className={styles.flowNode}>
                  <span className={styles.nodeBox}>Spreadsheet</span>
                </div>
                <div className={styles.flowConnector}>
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={styles.flowNode}>
                  <span className={styles.nodeBox}>Email</span>
                </div>
                <div className={styles.flowConnector}>
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={styles.flowNode}>
                  <span className={styles.nodeBox}>WhatsApp</span>
                </div>
                <div className={styles.flowConnector}>
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={styles.flowNode}>
                  <span className={styles.nodeBox}>Software</span>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 03: SLOW DECISIONS */}
          <article className={styles.card}>
            <div className={styles.cardAccentBar} aria-hidden="true" />
            <div className={styles.cardHeader}>
              <span className={styles.cardIndex}>03</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Slow Decisions</h3>
              <p className={styles.cardDescription}>
                Important information exists, but isn't easily accessible when your team needs it.
              </p>
            </div>

            {/* Visual Cue: Minimal document stack with one highlighted piece of buried information */}
            <div className={styles.visualCueWrapper}>
              <div className={styles.docStackCue} aria-hidden="true">
                <div className={styles.docLayerBack} />
                <div className={styles.docLayerMid} />
                <div className={styles.docLayerFront}>
                  <div className={styles.docHeader}>
                    <span className={styles.docIndicator} />
                    <span className={styles.docTextMuted} />
                  </div>
                  <div className={styles.docHighlightedRow}>
                    <span className={styles.highlightBadge}>Key Metric</span>
                    <span className={styles.highlightText}>Locked in reporting lag</span>
                  </div>
                  <div className={styles.docSkeletonLine} />
                </div>
              </div>
            </div>
          </article>

          {/* CARD 04: TOOL OVERLOAD */}
          <article className={styles.card}>
            <div className={styles.cardAccentBar} aria-hidden="true" />
            <div className={styles.cardHeader}>
              <span className={styles.cardIndex}>04</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Tool Overload</h3>
              <p className={styles.cardDescription}>
                Your business has multiple tools, but they don't work together.
              </p>
            </div>

            {/* Visual Cue: Disconnected outlined blocks with gaps between them */}
            <div className={styles.visualCueWrapper}>
              <div className={styles.toolBlocksCue} aria-hidden="true">
                <div className={styles.toolBlock}>
                  <span className={styles.toolDot} />
                  <span className={styles.toolLabel}>CRM</span>
                </div>
                <div className={styles.brokenGap}>
                  <span className={styles.gapCross}>&times;</span>
                </div>
                <div className={styles.toolBlock}>
                  <span className={styles.toolDot} />
                  <span className={styles.toolLabel}>Billing</span>
                </div>
                <div className={styles.brokenGap}>
                  <span className={styles.gapCross}>&times;</span>
                </div>
                <div className={styles.toolBlock}>
                  <span className={styles.toolDot} />
                  <span className={styles.toolLabel}>Support</span>
                </div>
                <div className={styles.brokenGap}>
                  <span className={styles.gapCross}>&times;</span>
                </div>
                <div className={styles.toolBlock}>
                  <span className={styles.toolDot} />
                  <span className={styles.toolLabel}>Ops</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ── BOTTOM STATEMENT ── */}
        <div className={styles.bottomArea}>
          <div className={styles.bottomDivider} aria-hidden="true" />
          <div className={styles.bottomContent}>
            <h3 className={styles.bottomStatement}>
              We find these gaps{' '}
              <span className={styles.bottomEmphasis}>
                before recommending technology.
                <span className={styles.underlineAccent} aria-hidden="true" />
              </span>
            </h3>
            <p className={styles.bottomSupporting}>
              Because the right solution starts with the right problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
