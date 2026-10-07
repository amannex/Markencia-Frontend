'use client';

import Link from 'next/link';
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
                High-value teams get buried in low-value operational work—exporting files, re-entering records, and repeating the exact same tasks every single day.
              </p>
            </div>

            {/* Visual Cue: Cyclic task flow Export Data → Format Sheet → Email Report → Repeat ↻ */}
            <div className={styles.visualCueWrapper}>
              <div className={styles.cyclicFlowCue} aria-label="Cyclic task workflow: Export Data to Format Sheet to Email Report and Repeat">
                <div className={styles.flowNode} title="Export Data">
                  <div className={styles.flowIconTile}>
                    <ExportDataIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Export</span>
                </div>
                <div className={styles.flowConnector} aria-hidden="true">
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={styles.flowNode} title="Format Sheet">
                  <div className={styles.flowIconTile}>
                    <FormatSheetIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Format</span>
                </div>
                <div className={styles.flowConnector} aria-hidden="true">
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={styles.flowNode} title="Email Report">
                  <div className={styles.flowIconTile}>
                    <EmailReportIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Report</span>
                </div>
                <div className={styles.flowConnector} aria-hidden="true">
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={`${styles.flowNode} ${styles.repeatNode}`} title="Repeat Loop">
                  <div className={`${styles.flowIconTile} ${styles.repeatTile}`}>
                    <RepeatCycleIcon />
                  </div>
                  <span className={`${styles.flowNodeLabel} ${styles.repeatNodeLabel}`}>
                    Repeat <span className={styles.repeatSymbol} aria-hidden="true">&#x21BB;</span>
                  </span>
                </div>
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
                Instead of systems talking to each other, your team has to manually forward messages, copy-paste numbers, and update different software by hand.
              </p>
            </div>

            {/* Visual Cue: Fragmented flow Spreadsheet → Email → WhatsApp → Software */}
            <div className={styles.visualCueWrapper}>
              <div className={styles.fragmentedFlowCue} aria-label="Manual data flow from Spreadsheet to Email to WhatsApp to Software">
                <div className={styles.flowNode} title="Spreadsheet">
                  <div className={styles.flowIconTile}>
                    <SpreadsheetIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Sheets</span>
                </div>
                <div className={styles.flowConnector} aria-hidden="true">
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={styles.flowNode} title="Email">
                  <div className={styles.flowIconTile}>
                    <EmailIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Email</span>
                </div>
                <div className={styles.flowConnector} aria-hidden="true">
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={styles.flowNode} title="WhatsApp">
                  <div className={styles.flowIconTile}>
                    <WhatsAppIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>WhatsApp</span>
                </div>
                <div className={styles.flowConnector} aria-hidden="true">
                  <span className={styles.flowLine} />
                  <span className={styles.flowArrow}>&rarr;</span>
                </div>
                <div className={styles.flowNode} title="Software">
                  <div className={styles.flowIconTile}>
                    <SoftwareIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Software</span>
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
                Critical business data exists, but it's trapped across scattered files and outdated sheets. Leaders spend days waiting for manual reports instead of acting on real-time insights.
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
                You pay for separate apps for CRM, billing, and operations, but none of them sync automatically. Your team wastes hours switching tabs and re-entering the same information.
              </p>
            </div>

            {/* Visual Cue: Disconnected tools with broken sync gaps */}
            <div className={styles.visualCueWrapper}>
              <div className={styles.disconnectedToolsCue} aria-label="Disconnected tools: CRM, Billing, Support, and Operations with no data sync">
                <div className={styles.flowNode} title="CRM">
                  <div className={styles.flowIconTile}>
                    <CrmIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>CRM</span>
                </div>
                <div className={styles.brokenConnector} aria-hidden="true" title="No sync">
                  <span className={styles.brokenLine} />
                  <span className={styles.brokenCross}>&times;</span>
                  <span className={styles.brokenLine} />
                </div>
                <div className={styles.flowNode} title="Billing">
                  <div className={styles.flowIconTile}>
                    <BillingIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Billing</span>
                </div>
                <div className={styles.brokenConnector} aria-hidden="true" title="No sync">
                  <span className={styles.brokenLine} />
                  <span className={styles.brokenCross}>&times;</span>
                  <span className={styles.brokenLine} />
                </div>
                <div className={styles.flowNode} title="Support">
                  <div className={styles.flowIconTile}>
                    <SupportIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Support</span>
                </div>
                <div className={styles.brokenConnector} aria-hidden="true" title="No sync">
                  <span className={styles.brokenLine} />
                  <span className={styles.brokenCross}>&times;</span>
                  <span className={styles.brokenLine} />
                </div>
                <div className={styles.flowNode} title="Operations">
                  <div className={styles.flowIconTile}>
                    <OpsIcon />
                  </div>
                  <span className={styles.flowNodeLabel}>Ops</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className={styles.bottomArea}>
          <Link href="/contact" className={styles.ctaButton} id="bottlenecks-cta-button">
            <span>Identify Your Bottlenecks</span>
            <span className={styles.ctaArrow} aria-hidden="true">&rarr;</span>
          </Link>
          <p className={styles.ctaSubtext}>
            Free 30-minute diagnostic session with our operational team
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── ILLUSTRATION ICONS FOR CARD 02 ── */

function SpreadsheetIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="sheetGrad" x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <filter id="sheetShadow" x="3" y="3" width="30" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#047857" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Background document */}
      <rect x="6" y="4" width="24" height="28" rx="4" fill="url(#sheetGrad)" filter="url(#sheetShadow)" />
      {/* Top right folded corner effect */}
      <path d="M22 4L30 12H24C22.8954 12 22 11.1046 22 10V4Z" fill="#34D399" />
      <path d="M22 4L30 12V4H22Z" fill="#065F46" fillOpacity="0.25" />

      {/* Main Grid Table Card */}
      <rect x="9.5" y="13.5" width="17" height="15" rx="2" fill="#FFFFFF" />
      {/* Header bar of table */}
      <rect x="9.5" y="13.5" width="17" height="4" rx="1.5" fill="#059669" />

      {/* Grid columns and rows */}
      <line x1="15" y1="13.5" x2="15" y2="28.5" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="20.5" y1="13.5" x2="20.5" y2="28.5" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="9.5" y1="21" x2="26.5" y2="21" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="9.5" y1="24.5" x2="26.5" y2="24.5" stroke="#E2E8F0" strokeWidth="1" />

      {/* Highlighted active cell */}
      <rect x="15" y="17.5" width="5.5" height="3.5" fill="#A7F3D0" />
      <rect x="20.5" y="21" width="6" height="3.5" fill="#D1FAE5" />

      {/* Mini Sheet 'X' / Grid symbol badge in top-left */}
      <rect x="8.5" y="6.5" width="7" height="5" rx="1" fill="#FFFFFF" />
      <path d="M10 8L14 10.5M14 8L10 10.5" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="emailGrad" x1="4" y1="10" x2="32" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="emailFlapGrad" x1="5" y1="12" x2="31" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <filter id="emailShadow" x="2" y="5" width="32" height="29" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#1E3A8A" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Letter popping out of envelope */}
      <rect x="9.5" y="5.5" width="17" height="14" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
      <line x1="12.5" y1="8.5" x2="20.5" y2="8.5" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="12.5" y1="11.5" x2="23.5" y2="11.5" stroke="#60A5FA" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="12.5" y1="14.5" x2="18.5" y2="14.5" stroke="#CBD5E1" strokeWidth="1.3" strokeLinecap="round" />

      {/* Main Envelope Body */}
      <rect x="4.5" y="12" width="27" height="19" rx="3.5" fill="url(#emailGrad)" filter="url(#emailShadow)" />

      {/* Envelope interior fold shadow */}
      <path d="M4.5 13.5L18 23.5L31.5 13.5V27.5C31.5 29.433 29.933 31 28 31H8C6.067 31 4.5 29.433 4.5 27.5V13.5Z" fill="#1E40AF" fillOpacity="0.35" />

      {/* Diagonal envelope crease lines */}
      <path d="M5 29.5L14 20" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />
      <path d="M31 29.5L22 20" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />

      {/* Top Envelope Flap */}
      <path d="M4.5 13C4.5 12.1716 5.17157 11.5 6 11.5H30C30.8284 11.5 31.5 12.1716 31.5 13L18.832 21.8676C18.3283 22.2202 17.6717 22.2202 17.168 21.8676L4.5 13Z" fill="url(#emailFlapGrad)" stroke="#93C5FD" strokeWidth="0.8" />

      {/* Notification badge / alert dot */}
      <circle cx="28.5" cy="11.5" r="3.2" fill="#EF4444" />
      <circle cx="28.5" cy="11.5" r="1.3" fill="#FFFFFF" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="waGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#25D366" />
          <stop offset="100%" stopColor="#128C7E" />
        </linearGradient>
        <filter id="waShadow" x="2" y="2" width="32" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#075E54" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Background rounded squircle tile */}
      <rect x="4.5" y="4.5" width="27" height="27" rx="7.5" fill="url(#waGrad)" filter="url(#waShadow)" />

      {/* Subtle glossy top curve */}
      <path d="M5.5 10C5.5 7.51472 7.51472 5.5 10 5.5H26C28.4853 5.5 30.5 7.51472 30.5 10V13C30.5 13 24 9.5 18 9.5C12 9.5 5.5 13 5.5 13V10Z" fill="#FFFFFF" fillOpacity="0.18" />

      {/* Official WhatsApp Brand Sign (Distinct speech bubble with tail + handset) */}
      <g transform="translate(8.2, 8.2) scale(0.82)">
        <path
          fill="#FFFFFF"
          d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.895-.798-1.5-1.783-1.675-2.084-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.051-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.492-.507-.676-.516l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.908 1.228 3.109.15.2 2.12 3.237 5.136 4.54.717.31 1.277.495 1.714.634.72.229 1.375.196 1.893.12.577-.086 1.78-.727 2.03-1.43.251-.702.251-1.303.176-1.43-.075-.127-.275-.202-.576-.352zM12.022 21.6c-1.874 0-3.626-.525-5.127-1.432l-.367-.22-3.808.999 1.017-3.712-.24-.383A9.566 9.566 0 012.44 12.02C2.44 6.74 6.742 2.44 12.022 2.44c2.56 0 4.966 1 6.776 2.81 1.81 1.81 2.81 4.22 2.81 6.77 0 5.28-4.302 9.58-9.586 9.58zm8.17-17.75C18.016 1.674 15.116.6 12.022.6 5.72.6.6 5.72.6 12.022c0 2.01.525 3.978 1.525 5.71L.6 23.4l5.834-1.53c1.666.91 3.543 1.39 5.588 1.39 6.303 0 11.422-5.12 11.422-11.42 0-3.05-1.004-5.99-3.252-8.242z"
        />
      </g>
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="softGrad" x1="4" y1="5" x2="32" y2="31" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter id="softShadow" x="2" y="3" width="32" height="30" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#0F172A" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Window Body */}
      <rect x="4.5" y="5.5" width="27" height="25" rx="4" fill="url(#softGrad)" filter="url(#softShadow)" />
      <rect x="5" y="6" width="26" height="24" rx="3.5" stroke="#334155" strokeWidth="1" />

      {/* Title bar header */}
      <rect x="4.5" y="5.5" width="27" height="7" rx="4" fill="#334155" />
      <rect x="4.5" y="8.5" width="27" height="4" fill="#334155" />

      {/* Window Traffic Lights */}
      <circle cx="8" cy="9" r="1.4" fill="#EF4444" />
      <circle cx="11.5" cy="9" r="1.4" fill="#F59E0B" />
      <circle cx="15" cy="9" r="1.4" fill="#10B981" />

      {/* Mini Sidebar */}
      <rect x="7" y="15" width="5.5" height="13" rx="1.5" fill="#1E293B" />
      <line x1="8.5" y1="17.5" x2="11" y2="17.5" stroke="#64748B" strokeWidth="1" strokeLinecap="round" />
      <line x1="8.5" y1="20.5" x2="11" y2="20.5" stroke="#64748B" strokeWidth="1" strokeLinecap="round" />
      <line x1="8.5" y1="23.5" x2="10" y2="23.5" stroke="#64748B" strokeWidth="1" strokeLinecap="round" />

      {/* Code / Terminal Command Symbol */}
      <path d="M15.5 17L17.5 19L15.5 21" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="19.5" y1="19" x2="26.5" y2="19" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />

      {/* Mini Dashboard Widget / Progress / API Block */}
      <rect x="15.5" y="23" width="12" height="4" rx="1.5" fill="#0284C7" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="0.8" />
      <line x1="17.5" y1="25" x2="24" y2="25" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/* ── ILLUSTRATION ICONS FOR CARD 01 (REPETITIVE WORK) ── */

function ExportDataIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="exportGrad" x1="5" y1="4" x2="31" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <filter id="exportShadow" x="3" y="3" width="30" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#B45309" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Background document / table tile */}
      <rect x="5.5" y="4.5" width="25" height="27" rx="4" fill="url(#exportGrad)" filter="url(#exportShadow)" />

      {/* Table paper sheet inner */}
      <rect x="8.5" y="8" width="19" height="20" rx="2.5" fill="#FFFFFF" />

      {/* Header bar */}
      <rect x="8.5" y="8" width="19" height="5" rx="1.5" fill="#FEF3C7" />
      <circle cx="11.5" cy="10.5" r="1.2" fill="#F59E0B" />
      <line x1="15" y1="10.5" x2="24" y2="10.5" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" />

      {/* Data rows */}
      <line x1="11" y1="16" x2="19" y2="16" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="19.5" x2="17" y2="19.5" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="23" x2="18" y2="23" stroke="#CBD5E1" strokeWidth="1.2" strokeLinecap="round" />

      {/* Outward export circle badge */}
      <circle cx="23.5" cy="22.5" r="5" fill="#D97706" />
      <circle cx="23.5" cy="22.5" r="4" fill="#F59E0B" />
      {/* Export download arrow */}
      <path d="M23.5 20V24.5M23.5 24.5L21.5 22.5M23.5 24.5L25.5 22.5" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FormatSheetIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="formatGrad" x1="5" y1="4" x2="31" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <filter id="formatShadow" x="3" y="3" width="30" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#5B21B6" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Background container tile */}
      <rect x="5.5" y="4.5" width="25" height="27" rx="4" fill="url(#formatGrad)" filter="url(#formatShadow)" />

      {/* White document body */}
      <rect x="8.5" y="8" width="19" height="20" rx="2.5" fill="#FFFFFF" />

      {/* Top purple tab */}
      <rect x="13" y="6.5" width="10" height="3.5" rx="1.5" fill="#DDD6FE" stroke="#8B5CF6" strokeWidth="0.8" />

      {/* Table grid lines */}
      <line x1="8.5" y1="13.5" x2="27.5" y2="13.5" stroke="#EDE9FE" strokeWidth="1" />
      <line x1="8.5" y1="18.5" x2="27.5" y2="18.5" stroke="#EDE9FE" strokeWidth="1" />
      <line x1="8.5" y1="23.5" x2="27.5" y2="23.5" stroke="#EDE9FE" strokeWidth="1" />
      <line x1="17.5" y1="13.5" x2="17.5" y2="28" stroke="#EDE9FE" strokeWidth="1" />

      {/* Highlighted manual edit cell */}
      <rect x="10" y="14.5" width="6.5" height="3" rx="0.8" fill="#C4B5FD" />
      <rect x="18.5" y="19.5" width="7.5" height="3" rx="0.8" fill="#DDD6FE" />

      {/* Edit pen / cursor indicator */}
      <circle cx="23.5" cy="11.5" r="4" fill="#6D28D9" />
      <path d="M22 12.8L24.5 10.3M24.5 10.3L25.2 11M24.5 10.3L23.2 9" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function EmailReportIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="reportGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <filter id="reportShadow" x="2" y="3" width="32" height="31" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#0369A1" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Background tile */}
      <rect x="5.5" y="5" width="25" height="26" rx="4" fill="url(#reportGrad)" filter="url(#reportShadow)" />

      {/* Report card */}
      <rect x="8.5" y="8" width="19" height="18" rx="2" fill="#FFFFFF" />

      {/* Mini Bar Chart inside report */}
      <rect x="11" y="17" width="2.5" height="5" rx="0.6" fill="#BAE6FD" />
      <rect x="14.8" y="14" width="2.5" height="8" rx="0.6" fill="#38BDF8" />
      <rect x="18.5" y="11.5" width="2.5" height="10.5" rx="0.6" fill="#0284C7" />
      <line x1="10" y1="22.5" x2="22" y2="22.5" stroke="#CBD5E1" strokeWidth="0.8" />

      {/* Dispatch dispatch badge */}
      <circle cx="23.5" cy="21.5" r="5" fill="#0369A1" />
      <path d="M21 21.5L25.5 19.5L23.5 24L22.8 22.3L21 21.5Z" fill="#FFFFFF" />
    </svg>
  );
}

function RepeatCycleIcon() {
  return (
    <svg className={styles.repeatCycleIcon} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="repeatCycleGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#004523" />
        </linearGradient>
        <filter id="repeatCycleShadow" x="2" y="2" width="32" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#004523" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Background tile */}
      <rect x="4.5" y="4.5" width="27" height="27" rx="7.5" fill="url(#repeatCycleGrad)" filter="url(#repeatCycleShadow)" />

      {/* Subtle glossy top curve */}
      <path d="M5.5 10C5.5 7.51472 7.51472 5.5 10 5.5H26C28.4853 5.5 30.5 7.51472 30.5 10V13C30.5 13 24 9.5 18 9.5C12 9.5 5.5 13 5.5 13V10Z" fill="#FFFFFF" fillOpacity="0.18" />

      {/* Circular clockwise repeating loop arrows */}
      <g transform="translate(18, 18)">
        {/* Top arc (clockwise from left to right) */}
        <path d="M -6.5 0 A 6.5 6.5 0 0 1 6.5 -0.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        {/* Top arrowhead pointing downwards */}
        <path d="M 3.8 -2.2 L 6.5 1 L 9.2 -2.2" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

        {/* Bottom arc (clockwise from right to left) */}
        <path d="M 6.5 0 A 6.5 6.5 0 0 1 -6.5 0.5" stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" />
        {/* Bottom arrowhead pointing upwards */}
        <path d="M -3.8 2.2 L -6.5 -1 L -9.2 2.2" fill="none" stroke="#FFB800" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

        {/* Center dot */}
        <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

/* ── ILLUSTRATION ICONS FOR CARD 04 (TOOL OVERLOAD) ── */

function CrmIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="crmGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
        <filter id="crmShadow" x="2" y="2" width="32" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#3730A3" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect x="4.5" y="4.5" width="27" height="27" rx="7.5" fill="url(#crmGrad)" filter="url(#crmShadow)" />
      <path d="M5.5 10C5.5 7.51472 7.51472 5.5 10 5.5H26C28.4853 5.5 30.5 7.51472 30.5 10V13C30.5 13 24 9.5 18 9.5C12 9.5 5.5 13 5.5 13V10Z" fill="#FFFFFF" fillOpacity="0.18" />
      <circle cx="18" cy="14" r="4.2" fill="#FFFFFF" />
      <path d="M10 25.5C10 22 13.5 20.5 18 20.5C22.5 20.5 26 22 26 25.5V26.5H10V25.5Z" fill="#FFFFFF" fillOpacity="0.9" />
      <circle cx="24.5" cy="11.5" r="3.2" fill="#10B981" stroke="#4338CA" strokeWidth="1" />
      <path d="M23.5 11.5L24.2 12.2L25.8 10.6" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BillingIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="billingGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <filter id="billingShadow" x="2" y="2" width="32" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#064E3B" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect x="4.5" y="4.5" width="27" height="27" rx="7.5" fill="url(#billingGrad)" filter="url(#billingShadow)" />
      <path d="M5.5 10C5.5 7.51472 7.51472 5.5 10 5.5H26C28.4853 5.5 30.5 7.51472 30.5 10V13C30.5 13 24 9.5 18 9.5C12 9.5 5.5 13 5.5 13V10Z" fill="#FFFFFF" fillOpacity="0.18" />
      <rect x="8" y="11" width="20" height="14" rx="2.5" fill="#FFFFFF" />
      <rect x="8" y="14" width="20" height="3" fill="#065F46" />
      <rect x="11" y="19.5" width="4" height="2.5" rx="0.5" fill="#F59E0B" />
      <circle cx="23" cy="20.7" r="2.2" fill="#10B981" />
      <path d="M23 19.5V22M22.2 20.2H23.8" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="supportGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <filter id="supportShadow" x="2" y="2" width="32" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#075985" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect x="4.5" y="4.5" width="27" height="27" rx="7.5" fill="url(#supportGrad)" filter="url(#supportShadow)" />
      <path d="M5.5 10C5.5 7.51472 7.51472 5.5 10 5.5H26C28.4853 5.5 30.5 7.51472 30.5 10V13C30.5 13 24 9.5 18 9.5C12 9.5 5.5 13 5.5 13V10Z" fill="#FFFFFF" fillOpacity="0.18" />
      <path d="M10 18.5C10 14.0817 13.5817 10.5 18 10.5C22.4183 10.5 26 14.0817 26 18.5V22.5C26 23.6046 25.1046 24.5 24 24.5H23V19.5H25V18.5C25 14.634 21.866 11.5 18 11.5C14.134 11.5 11 14.634 11 18.5V19.5H13V24.5H12C10.8954 24.5 10 23.6046 10 22.5V18.5Z" fill="#FFFFFF" />
      <path d="M23 23.5V25C23 25.8284 22.3284 26.5 21.5 26.5H18" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="17.5" cy="26.5" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

function OpsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="opsGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <filter id="opsShadow" x="2" y="2" width="32" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#B45309" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect x="4.5" y="4.5" width="27" height="27" rx="7.5" fill="url(#opsGrad)" filter="url(#opsShadow)" />
      <path d="M5.5 10C5.5 7.51472 7.51472 5.5 10 5.5H26C28.4853 5.5 30.5 7.51472 30.5 10V13C30.5 13 24 9.5 18 9.5C12 9.5 5.5 13 5.5 13V10Z" fill="#FFFFFF" fillOpacity="0.18" />
      <circle cx="18" cy="18" r="4.5" stroke="#FFFFFF" strokeWidth="2.5" />
      <path d="M18 10V13M18 23V26M10 18H13M23 18H26M12.3 12.3L14.5 14.5M21.5 21.5L23.7 23.7M12.3 23.7L14.5 21.5M21.5 14.5L23.7 12.3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="18" r="2" fill="#FEF3C7" />
    </svg>
  );
}


