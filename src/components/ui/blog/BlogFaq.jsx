import { useState } from 'react';
import styles from './BlogFaq.module.css';

export default function BlogFaq({ faqs = [] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Frequently Asked Questions">
      <h3 className={styles.title}>Frequently Asked Questions</h3>
      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <details key={index} className={styles.details} name="blog-faqs">
            <summary className={styles.summary}>
              <span className={styles.question}>{faq.question}</span>
              <span className={styles.icon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className={styles.answerWrapper}>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
