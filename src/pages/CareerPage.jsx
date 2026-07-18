import { Helmet } from 'react-helmet-async';
import CTASection from '../components/sections/CTASection';
import styles from './CareerPage.module.css';

const OPENINGS = [
  { title: 'Senior Performance Marketing Manager', type: 'Full-time', location: 'Noida, India / Remote', dept: 'Marketing' },
  { title: 'AI/ML Engineer (Marketing Automation)', type: 'Full-time', location: 'Noida, India', dept: 'Technology' },
  { title: 'Content Strategist & Copywriter', type: 'Full-time / Contract', location: 'Remote', dept: 'Creative' },
  { title: 'Growth Hacker Intern', type: 'Internship', location: 'Noida, India', dept: 'Growth' },
];

export default function CareerPage() {
  return (
    <>
      <Helmet>
        <title>Careers | Markencia</title>
        <meta name="description" content="Join our collective of data scientists, creative strategists, and growth hackers." />
        <link rel="canonical" href="https://markencia.com/career" />
      </Helmet>
      <section className={styles.hero}>
        <div className="mk-container">
          <div className="mk-hero-badge">Join Our Team</div>
          <h1 className={styles.heroTitle}>Build the Future of <span className={styles.accent}>Marketing</span></h1>
          <p className={styles.heroSubtitle}>We're looking for brilliant, ambitious people who want to be at the intersection of AI and marketing.</p>
        </div>
      </section>
      <section className="mk-section">
        <div className="mk-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            {OPENINGS.map((job) => (
              <div key={job.title} style={{ padding: '2rem', border: '1px solid var(--mk-glass-border)', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', background: 'var(--mk-bg-card)', transition: 'all 0.3s' }}>
                <div>
                  <span style={{ color: 'var(--mk-secondary)', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{job.dept}</span>
                  <h3 style={{ margin: '0.4rem 0', fontSize: '1.1rem' }}>{job.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--mk-text-muted)' }}>{job.type} • {job.location}</p>
                </div>
                <a href="/contact" style={{ flexShrink: 0, padding: '0.65rem 1.4rem', background: 'var(--mk-primary)', color: '#fff', borderRadius: '50px', fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none', transition: 'all 0.3s' }}>Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection showForm={false} title={'Don\'t See a <span class="mk-highlight-text">Fit?</span>'} subtitle="We're always looking for exceptional talent. Send us your portfolio and tell us how you'd contribute." buttonText="Send Your Application" buttonHref="/contact" />
    </>
  );
}
