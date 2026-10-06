'use client';

import { useState, useEffect } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight, ArrowDown, Bot, Check } from 'lucide-react';
import styles from './HeroWorkflow.module.css';

const ACTIONS = [
  { id: 'crm', label: 'CRM updated' },
  { id: 'score', label: 'Lead scored' },
  { id: 'context', label: 'Sales context generated' },
];

export default function HeroWorkflow() {
  const [activeStep, setActiveStep] = useState(0); // 0: Lead, 1: AI Qualifies, 2: Sales Notified
  const [subActionIndex, setSubActionIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prevStep) => {
        if (prevStep === 0) {
          setSubActionIndex(0);
          return 1;
        } else if (prevStep === 1) {
          return 2;
        } else {
          setSubActionIndex(0);
          return 0;
        }
      });
    }, activeStep === 1 ? 4000 : 2800);

    return () => clearInterval(interval);
  }, [isPaused, activeStep]);

  useEffect(() => {
    if (activeStep !== 1 || isPaused) {
      if (activeStep === 0) setSubActionIndex(0);
      if (activeStep === 2) setSubActionIndex(3);
      return;
    }

    setSubActionIndex(0);
    const t1 = setTimeout(() => setSubActionIndex(1), 700);
    const t2 = setTimeout(() => setSubActionIndex(2), 1600);
    const t3 = setTimeout(() => setSubActionIndex(3), 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [activeStep, isPaused]);

  const handleSelectStep = (index) => {
    setActiveStep(index);
    if (index === 0) setSubActionIndex(0);
    else if (index === 1) setSubActionIndex(3);
    else setSubActionIndex(3);
  };

  return (
    <div
      className={styles.workflowContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Markencia AI Automated Workflow"
    >
      {/* Main Workflow Visualization Nodes */}
      <div className={styles.nodesWrapper}>
        {/* STEP 1: BEFORE — LEAD COMES IN */}
        <div
          className={`${styles.workflowCard} ${styles.cardBefore} ${activeStep === 0 ? styles.cardActive : ''}`}
          onClick={() => handleSelectStep(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleSelectStep(0)}
          aria-label="Step 1: Before - Lead comes in"
        >
          <div className={styles.cardHeader}>
            <span className={styles.stepTag}>STEP 1 — BEFORE</span>
            <div className={styles.cardIconBox}>
              <Mail size={16} />
            </div>
          </div>

          <h3 className={styles.cardTitle}>Lead comes in</h3>
          <p className={styles.cardDesc}>A new customer inquiry arrives.</p>

          <div className={styles.cardFooter}>
            <span className={styles.statusPill}>Manual Intake</span>
          </div>
        </div>

        {/* CONNECTING ARROW 1 */}
        <div className={`${styles.connector} ${styles.connector1} ${activeStep === 0 ? styles.connectorActive : ''}`}>
          <div className={styles.connectorLine}>
            <span className={styles.travelSignal} aria-hidden="true" />
          </div>
          <ArrowRight className={styles.desktopArrow} size={15} aria-hidden="true" />
          <ArrowDown className={styles.mobileArrow} size={15} aria-hidden="true" />
        </div>

        {/* STEP 2: MARKENCIA AI SYSTEM — FOCAL POINT */}
        <div
          className={`${styles.workflowCard} ${styles.cardAiFocal} ${activeStep === 1 ? styles.cardAiActive : ''}`}
          onClick={() => handleSelectStep(1)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleSelectStep(1)}
          aria-label="Step 2: Markencia AI System - AI qualifies the lead"
        >
          <div className={styles.focalGlow} aria-hidden="true" />

          <div className={styles.cardHeader}>
            <span className={styles.stepTagAi}>
              <Sparkles size={11} className={styles.sparkleIcon} />
              STEP 2 — MARKENCIA AI SYSTEM
            </span>
            <div className={styles.cardIconBoxAi}>
              <Bot size={17} />
            </div>
          </div>

          <h3 className={styles.cardTitleAi}>AI qualifies the lead</h3>
          <p className={styles.cardDescAi}>
            AI understands the inquiry, evaluates it and determines the next action.
          </p>

          {/* Automated Actions List */}
          <div className={styles.automatedActionsBox}>
            <div className={styles.actionsLabel}>Automated Intelligence:</div>
            <ul className={styles.actionsList}>
              {ACTIONS.map((action, idx) => {
                const isChecked = activeStep > 1 || (activeStep === 1 && subActionIndex > idx);
                return (
                  <li
                    key={action.id}
                    className={`${styles.actionItem} ${isChecked ? styles.actionChecked : ''}`}
                  >
                    <span className={styles.checkIconWrapper}>
                      <Check size={12} strokeWidth={2.6} />
                    </span>
                    <span className={styles.actionText}>{action.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* CONNECTING ARROW 2 */}
        <div className={`${styles.connector} ${styles.connector2} ${activeStep === 1 ? styles.connectorActive : ''}`}>
          <div className={styles.connectorLine}>
            <span className={styles.travelSignal} aria-hidden="true" />
          </div>
          <ArrowRight className={styles.desktopArrow} size={15} aria-hidden="true" />
          <ArrowDown className={styles.mobileArrow} size={15} aria-hidden="true" />
        </div>

        {/* STEP 3: AFTER — SALES TEAM NOTIFIED */}
        <div
          className={`${styles.workflowCard} ${styles.cardAfter} ${activeStep === 2 ? styles.cardAfterActive : ''}`}
          onClick={() => handleSelectStep(2)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleSelectStep(2)}
          aria-label="Step 3: After - Sales team notified"
        >
          <div className={styles.cardHeader}>
            <span className={styles.stepTag}>STEP 3 — AFTER</span>
            <div className={styles.cardIconBox}>
              <CheckCircle2 size={16} />
            </div>
          </div>

          <h3 className={styles.cardTitle}>Sales team notified</h3>
          <p className={styles.cardDesc}>
            The right person receives the qualified lead with useful context.
          </p>

          <div className={styles.cardFooter}>
            <span className={`${styles.statusPill} ${activeStep === 2 ? styles.statusPillSuccess : ''}`}>
              {activeStep === 2 ? '✓ High-Intent Handoff' : 'Context-Enriched'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className={styles.workflowBottomBar}>
        <div
          className={`${styles.summaryPhase} ${activeStep === 0 ? styles.summaryPhaseActive : ''}`}
          onClick={() => handleSelectStep(0)}
        >
          Manual Process
        </div>
        <span className={styles.summaryArrow}>&rarr;</span>
        <div
          className={`${styles.summaryPhase} ${styles.summaryPhaseAi} ${activeStep === 1 ? styles.summaryPhaseActive : ''}`}
          onClick={() => handleSelectStep(1)}
        >
          AI + Automation
        </div>
        <span className={styles.summaryArrow}>&rarr;</span>
        <div
          className={`${styles.summaryPhase} ${activeStep === 2 ? styles.summaryPhaseActive : ''}`}
          onClick={() => handleSelectStep(2)}
        >
          Smarter Operations
        </div>
      </div>
    </div>
  );
}
