import { TESTIMONIALS } from '../data/staticData';
import TestimonialCard from '../components/ui/TestimonialCard';
import SectionHead from '../components/ui/SectionHead';
import CTASection from '../components/sections/CTASection';
import styles from './PlaceholderPage.module.css';

export default function TestimonialsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="mk-container">
          <div className="mk-hero-badge">Client Success</div>
          <h1 className={styles.heroTitle}>What Our Clients <span className={styles.accent}>Say</span></h1>
          <p className={styles.heroSubtitle}>Real results, real testimonials from founders and marketing leaders who scaled with Markencia.</p>
        </div>
      </section>
      <section className="mk-section">
        <div className="mk-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} {...t} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
