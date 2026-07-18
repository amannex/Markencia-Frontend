import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import CTASection from '../components/sections/CTASection';
import styles from './FaqsPage.module.css';

const FAQS = [
  { q: 'What makes Markencia different from other marketing agencies?', a: "We don't just run ads—we engineer growth systems. By merging AI, automation, and deep creative strategy, we deliver measurable ROI, not vanity metrics. Every campaign is data-backed and tested." },
  { q: 'How quickly can I expect to see results?', a: 'Most clients see initial traction within the first 30-60 days. Significant revenue impact and full system optimization typically occurs within 90 days as we refine targeting, creatives, and funnels.' },
  { q: 'Do you work with businesses outside India?', a: 'Absolutely. While our headquarters is in Noida, we serve clients globally across SaaS, e-commerce, real estate, healthcare, and education sectors.' },
  { q: 'What is the minimum contract length?', a: 'We offer month-to-month engagements on our Starter plan. Our Growth and Enterprise plans require a 3-month minimum to allow enough time for our systems to optimize and deliver peak performance.' },
  { q: 'How do you report on campaign performance?', a: 'You get access to a live dashboard plus weekly reports covering all key metrics—ROAS, CPL, pipeline generated, and revenue attributed. We believe in radical transparency.' },
  { q: 'Can I integrate Markencia\'s systems with my existing CRM?', a: 'Yes. We integrate with HubSpot, Salesforce, Zoho, and most major CRM platforms. Our automation layer is built to plug into your existing infrastructure.' },
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Helmet>
        <title>FAQs | Markencia</title>
        <meta name="description" content="Frequently asked questions about Markencia's AI marketing services." />
        <link rel="canonical" href="https://markencia.com/faqs" />
      </Helmet>
      <section className={styles.hero}>
        <div className="mk-container">
          <div className="mk-hero-badge">Help Center</div>
          <h1 className={styles.heroTitle}>Frequently Asked <span className={styles.accent}>Questions</span></h1>
          <p className={styles.heroSubtitle}>Everything you need to know about Markencia and how we work.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-container">
          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <div key={i} className={[styles.faqItem, openIndex === i ? styles.open : ''].join(' ')}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  id={`faq-btn-${i}`}
                  type="button"
                >
                  {faq.q}
                  <span className={styles.faqChevron} aria-hidden="true">▾</span>
                </button>
                <div className={styles.faqAnswer} role="region" aria-labelledby={`faq-btn-${i}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection showForm={false} title='Still Have <span class="mk-highlight-text">Questions?</span>' subtitle="Our team is happy to answer any questions you have. Book a free 30-minute call." buttonText="Talk to Our Team" buttonHref="/contact" />
    </>
  );
}
