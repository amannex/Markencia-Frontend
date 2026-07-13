import { Helmet } from 'react-helmet-async';
import CTASection from '../components/sections/CTASection';
import SectionHead from '../components/ui/SectionHead';
import styles from './SharedPages.module.css';

const CASE_STUDIES = [
  { title: 'From $50k to $250k MRR in 6 Months', client: 'ScaleFactor Fintech', category: 'SaaS', result: '5x Revenue Growth', gradient: 'linear-gradient(135deg, #003818, #FFB400)' },
  { title: '40% Lower CPA for E-commerce Brand', client: 'Elevate Store', category: 'E-commerce', result: '40% CPA Reduction', gradient: 'linear-gradient(135deg, #FFB400, #b37e00)' },
  { title: 'WhatsApp Automation Driving 200+ Leads/Day', client: 'RealEstate Pro', category: 'Real Estate', result: '200+ Daily Leads', gradient: 'linear-gradient(135deg, #0f172a, #334155)' },
  { title: 'SaaS Trial Conversion Up 80% with AI Funnel', client: 'TechScale SaaS', category: 'SaaS', result: '80% Conversion Lift', gradient: 'linear-gradient(135deg, #003818, #005c28)' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies | Markencia</title>
        <meta name="description" content="Discover how we've helped leading brands scale their revenue through AI and data-driven marketing." />
        <link rel="canonical" href="https://markencia.com/case-studies" />
      </Helmet>
      <section className={styles.hero}>
        <div className="mk-container">
          <div className="mk-hero-badge">Proof of Work</div>
          <h1 className={styles.heroTitle}>Real <span className={styles.accent}>Results</span>, Real Clients</h1>
          <p className={styles.heroSubtitle}>Deep-dive into the strategies, tactics, and AI systems we built to generate measurable growth for our partners.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-container">
          <div className={styles.simpleGrid}>
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className={styles.simpleCard}>
                <div style={{ background: cs.gradient, borderRadius: '12px', height: '120px', marginBottom: '1.5rem' }} />
                <span style={{ color: 'var(--mk-secondary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{cs.category}</span>
                <h3 style={{ margin: '0.6rem 0', fontSize: '1.2rem' }}>{cs.title}</h3>
                <p style={{ margin: '0 0 1rem', fontSize: '0.92rem' }}>{cs.client}</p>
                <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(0,56,24,0.08)', borderRadius: '50px', color: 'var(--mk-primary)', fontSize: '0.85rem', fontWeight: '700' }}>{cs.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection showForm={false} title='Want Results Like <span class="mk-highlight-text">These?</span>' subtitle="Let's engineer a growth system tailored specifically to your business." buttonText="Start Your Case Study" buttonHref="/contact" />
    </>
  );
}
