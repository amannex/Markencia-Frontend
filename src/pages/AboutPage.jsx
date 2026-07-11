import { Helmet } from 'react-helmet-async';
import { TEAM_MEMBERS, CORE_VALUES, ABOUT_STATS } from '../data/staticData';
import SectionHead from '../components/ui/SectionHead';
import CTASection from '../components/sections/CTASection';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Markencia</title>
        <meta name="description" content="We are a collective of data scientists, creative strategists, and growth hackers united by one goal: engineering predictable revenue for our partners." />
        <link rel="canonical" href="https://markencia.com/about" />
      </Helmet>
      {/* ── 1. HERO ── */}
      <section className={styles.hero}>
        <div className="mk-container">
          <div className={styles.heroContent}>
            <div className="mk-hero-badge">Our Story</div>
            <h1 className={styles.heroTitle}>
              Redefining the <span className={styles.accent}>Agency</span> Model
            </h1>
            <p className={styles.heroSubtitle}>
              We are a collective of data scientists, creative strategists, and growth hackers
              united by one goal: engineering predictable revenue for our partners.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. MISSION ── */}
      <section className="mk-section mk-bg-texture">
        <div className={`mk-container ${styles.missionWrapper}`}>
          <div className={styles.missionImage}>
            <div className={styles.glassCard}>
              <div className={styles.quoteIcon}>"</div>
              <h3>Marketing is no longer just art. It's a precise science driven by data and AI.</h3>
              <p>– The Markencia Manifesto</p>
            </div>
          </div>
          <div className={styles.missionText}>
            <h2>
              Driven by <span className="mk-highlight-text">Intelligence</span>, Fueled by Creativity
            </h2>
            <p>
              At Markencia, we saw the fundamental flaw in traditional marketing agencies: they guess.
              They spend your money on 'brand awareness' without accountability for revenue.
            </p>
            <p>
              We built Markencia to be the antidote. By merging cutting-edge artificial intelligence
              with deep human psychology, we create conversion systems that are scalable, predictable,
              and highly profitable.
            </p>
            <div className={styles.statsMini}>
              {ABOUT_STATS.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <h4>{s.value}</h4>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CORE VALUES ── */}
      <section className="mk-section">
        <div className="mk-container">
          <SectionHead
            centered
            title='Our Core <span class="mk-highlight-text">Principles</span>'
            subtitle="The DNA of our agency. How we think, operate, and deliver exceptional results."
          />
          <div className={styles.valuesGrid}>
            {CORE_VALUES.map((v) => (
              <div key={v.number} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.number}</div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TEAM ── */}
      <section className="mk-section mk-bg-texture">
        <div className="mk-container">
          <SectionHead
            centered
            title='Meet the <span class="mk-highlight-text">Architects</span>'
            subtitle="The leaders orchestrating the next era of digital marketing."
          />
          <div className={styles.teamGrid}>
            {TEAM_MEMBERS.map((m) => (
              <div key={m.id} className={styles.teamMember}>
                <div className={styles.teamPhoto}>{m.initials}</div>
                <h3>{m.name}</h3>
                <span className={styles.teamRole}>{m.role}</span>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <CTASection />
    </>
  );
}
