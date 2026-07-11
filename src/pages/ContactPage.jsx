import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { CONTACT_INTERESTS, SITE_INFO } from '../data/staticData';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to WP REST API custom endpoint
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Markencia</title>
        <meta name="description" content="Get in touch with Markencia to scale your brand with AI-driven creative marketing." />
        <link rel="canonical" href="https://markencia.com/contact" />
      </Helmet>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="mk-container">
          <div className={styles.heroContent}>
            <div className="mk-hero-badge">Get In Touch</div>
            <h1 className={styles.heroTitle}>
              Let's Build Your <span className={styles.accent}>Growth</span> Engine
            </h1>
            <p className={styles.heroSubtitle}>
              Ready to stop guessing and start scaling? Connect with our team of AI growth specialists
              to discover how Markencia can engineer predictable revenue for your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Main */}
      <section className="mk-section mk-bg-texture">
        <div className={`mk-container ${styles.wrapper}`}>
          {/* Info column */}
          <div className={styles.info}>
            <h2>We're Here to <span className="mk-highlight-text">Help</span></h2>
            <p>Whether you have a question about our services, pricing, or want to explore an AI strategy session, our team is ready to answer all your questions.</p>

            <div className={styles.infoCards}>
              {/* Email */}
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href={`mailto:${SITE_INFO.email}`}>{SITE_INFO.email}</a>
                  <span>We aim to reply within 24 hours.</span>
                </div>
              </div>
              {/* Phone */}
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <a href={`tel:${SITE_INFO.phone.replace(/\s/g, '')}`}>{SITE_INFO.phone}</a>
                  <span>Mon–Fri from 9am to 6pm IST.</span>
                </div>
              </div>
              {/* Location */}
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Headquarters</h4>
                  <p>{SITE_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formContainer}>
            {submitted ? (
              <div className={styles.success}>
                <span>🎉</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" name="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" placeholder="Acme Corp" value={form.company} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="interest">What are you interested in?</label>
                  <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                    {CONTACT_INTERESTS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us about your project goals..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className={styles.submitBtn} id="contact-submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
