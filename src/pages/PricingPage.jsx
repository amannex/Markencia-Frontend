import { Helmet } from 'react-helmet-async';
import CTASection from '../components/sections/CTASection';
import SectionHead from '../components/ui/SectionHead';
import styles from './SharedPages.module.css';

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹25,000',
    period: '/month',
    desc: 'Perfect for small businesses taking their first step into AI marketing.',
    features: ['AI Market Research', '2 Ad Campaigns/month', 'Email Automation Setup', 'Monthly Report', 'Dedicated Account Manager'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹60,000',
    period: '/month',
    desc: 'For scaling businesses ready to go all-in on AI-driven revenue.',
    features: ['Full Predictive Analytics Suite', 'Unlimited Ad Campaigns', 'WhatsApp + Email Automation', 'Weekly Reports & Optimization', 'Landing Page Development', 'CRM Integration'],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Full-scale AI growth infrastructure for high-growth companies.',
    features: ['Everything in Growth', 'Custom AI Models', 'Dedicated Team of Specialists', 'Priority 24/7 Support', 'Quarterly Strategy Summits', 'White-label Solutions'],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing | Markencia</title>
        <meta name="description" content="Transparent pricing for AI-powered marketing growth systems." />
        <link rel="canonical" href="https://markencia.com/pricing" />
      </Helmet>
      <section className={styles.hero}>
        <div className="mk-container">
          <div className="mk-hero-badge">Simple Pricing</div>
          <h1 className={styles.heroTitle}>Investment That <span className={styles.accent}>Scales</span> With You</h1>
          <p className={styles.heroSubtitle}>Transparent pricing with no hidden fees. Pick the plan that matches your ambitions.</p>
        </div>
      </section>

      <section className="mk-section">
        <div className="mk-container">
          <div className={styles.pricingGrid}>
            {PRICING_PLANS.map((plan) => (
              <div key={plan.name} className={[styles.planCard, plan.popular ? styles.popular : ''].join(' ')}>
                {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className={styles.price}>{plan.price}<span>{plan.period}</span></div>
                <p>{plan.desc}</p>
                <ul className={styles.features}>
                  {plan.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href="/contact" className={[styles.planBtn, plan.popular ? styles.planBtnPrimary : styles.planBtnOutline].join(' ')}>{plan.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection showForm={false} title='Still Have <span class="mk-highlight-text">Questions?</span>' subtitle="Talk to our team and we'll build a custom plan around your exact goals." buttonText="Book a Free Call" buttonHref="/contact" />
    </>
  );
}
