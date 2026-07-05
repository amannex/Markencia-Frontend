import CTASection from '../components/sections/CTASection';
import styles from './PlaceholderPage.module.css';

const WORKS = [
  { title: 'Markencia Brand Identity', category: 'Branding', gradient: 'linear-gradient(135deg, #003818, #FFB400)' },
  { title: 'SaaS Landing Page Funnel', category: 'Web Design', gradient: 'linear-gradient(135deg, #0f172a, #334155)' },
  { title: 'AI Chatbot UI/UX', category: 'Product Design', gradient: 'linear-gradient(135deg, #FFB400, #ff6b35)' },
  { title: 'E-commerce Conversion Redesign', category: 'Web Design', gradient: 'linear-gradient(135deg, #475569, #0f172a)' },
  { title: 'Healthcare Lead Gen Campaign', category: 'Performance Marketing', gradient: 'linear-gradient(135deg, #003818, #005c28)' },
  { title: 'Real Estate WhatsApp Funnel', category: 'Automation', gradient: 'linear-gradient(135deg, #e09200, #003818)' },
];

export default function WorksPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="mk-container">
          <div className="mk-hero-badge">Portfolio</div>
          <h1 className={styles.heroTitle}>Our <span className={styles.accent}>Works</span></h1>
          <p className={styles.heroSubtitle}>A showcase of campaigns, designs, and growth systems we've engineered for ambitious brands.</p>
        </div>
      </section>
      <section className="mk-section">
        <div className="mk-container">
          <div className={styles.simpleGrid}>
            {WORKS.map((w) => (
              <div key={w.title} className={styles.simpleCard}>
                <div style={{ background: w.gradient, borderRadius: '12px', height: '140px', marginBottom: '1.2rem' }} />
                <span style={{ color: 'var(--mk-secondary)', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{w.category}</span>
                <h3 style={{ margin: '0.5rem 0 0', fontSize: '1.1rem' }}>{w.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection showForm={false} title='Ready to Join Our <span class="mk-highlight-text">Portfolio?</span>' subtitle="Let's create something remarkable together." buttonText="Start a Project" buttonHref="/contact" />
    </>
  );
}
