'use client';

import React, { useState } from 'react';
import axios from 'axios';
import CTASection from '../components/sections/CTASection';
import SectionHead from '../components/ui/SectionHead';
import styles from './PricingPage.module.css';

// Prices must be in paise (1 INR = 100 paise)
const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹25,000',
    amountPaise: 2500000, // ₹25,000 × 100
    period: '/month',
    desc: 'Perfect for small businesses taking their first step into AI marketing.',
    features: ['AI Market Research', '2 Ad Campaigns/month', 'Email Automation Setup', 'Monthly Report', 'Dedicated Account Manager'],
    cta: 'Get Started',
    popular: false,
    isCustom: false,
  },
  {
    name: 'Growth',
    price: '₹60,000',
    amountPaise: 6000000, // ₹60,000 × 100
    period: '/month',
    desc: 'For scaling businesses ready to go all-in on AI-driven revenue.',
    features: ['Full Predictive Analytics Suite', 'Unlimited Ad Campaigns', 'WhatsApp + Email Automation', 'Weekly Reports & Optimization', 'Landing Page Development', 'CRM Integration'],
    cta: 'Most Popular',
    popular: true,
    isCustom: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    amountPaise: null,
    period: '',
    desc: 'Full-scale AI growth infrastructure for high-growth companies.',
    features: ['Everything in Growth', 'Custom AI Models', 'Dedicated Team of Specialists', 'Priority 24/7 Support', 'Quarterly Strategy Summits', 'White-label Solutions'],
    cta: 'Contact Us',
    popular: false,
    isCustom: true,
  },
];

/**
 * Dynamically load the Razorpay checkout.js script.
 * Safe to call multiple times — resolves immediately if already loaded.
 */
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload  = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function PricingPage() {

  // Track which plan is currently waiting on the API to prevent double-clicks
  const [loadingPlan, setLoadingPlan] = useState(null);

  const handlePlanSelection = async (plan) => {
    // Enterprise tier → forward to contact page
    if (plan.isCustom) {
      window.location.href = '/contact';
      return;
    }

    try {
      setLoadingPlan(plan.name);

      // 1. Load Razorpay checkout SDK
      const sdkLoaded = await loadRazorpayScript();
      if (!sdkLoaded) throw new Error('Razorpay SDK failed to load. Check your internet connection.');

      // 2. Ask our WordPress backend to create a Razorpay order
      const wpApiUrl = `${import.meta.env.VITE_WP_API_URL}/markencia/v1/create-razorpay-order`;
      const { data } = await axios.post(wpApiUrl, {
        amount:   plan.amountPaise,
        currency: 'INR',
        planName: plan.name,
      });

      if (!data.success || !data.orderId) {
        throw new Error('Invalid order response from server.');
      }

      // 3. Open the Razorpay payment modal
      const options = {
        key:         data.keyId,       // rzp_test_... (safe to use on frontend)
        amount:      data.amount,      // in paise (echoed back from Razorpay)
        currency:    data.currency,
        name:        'Markencia',
        description: `${plan.name} Plan — Monthly Subscription`,
        order_id:    data.orderId,
        theme:       { color: '#7C3AED' }, // Markencia purple

        // 4a. On payment success
        handler: function (response) {
          // TODO: Optionally verify payment on server-side via a /verify-payment endpoint
          alert(`✅ Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
          // window.location.href = '/thank-you'; // Redirect to a thank-you page
        },

        // 4b. Prefill user details if available
        prefill: {
          name:    '',
          email:   '',
          contact: '',
        },

        modal: {
          // 4c. On modal dismiss / failure
          ondismiss: function () {
            setLoadingPlan(null);
          },
        },
      };

      const rzp = new window.Razorpay(options);

      // Handle payment failures (card decline, etc.)
      rzp.on('payment.failed', function (response) {
        console.error('Razorpay payment failed:', response.error);
        alert(`❌ Payment Failed: ${response.error.description}`);
        setLoadingPlan(null);
      });

      rzp.open();

    } catch (error) {
      console.error('Razorpay Checkout Error:', error);
      alert('Could not initiate payment. Please try again or contact us.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <>
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

                <button
                  onClick={() => handlePlanSelection(plan)}
                  disabled={loadingPlan !== null}
                  className={[styles.planBtn, plan.popular ? styles.planBtnPrimary : styles.planBtnOutline].join(' ')}
                  style={{ width: '100%', cursor: 'pointer', border: 'none', textAlign: 'center' }}
                >
                  {loadingPlan === plan.name ? 'Connecting Securely...' : plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        showForm={false}
        title='Still Have <span class="mk-highlight-text">Questions?</span>'
        subtitle="Talk to our team and we'll build a custom plan around your exact goals."
        buttonText="Book a Free Call"
        buttonHref="/contact"
      />
    </>
  );
}

