import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/staticData';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Sticky header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')} role="banner">
      <div className={styles.container} ref={menuRef}>
        {/* Logo */}
        <Link to="/" className={styles.logo} title="Markencia Home">
          <span className={styles.logoText}>Markencia</span>
          <span className={styles.logoDot}>.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Primary Navigation" id="nav-links">
          {NAV_LINKS.filter(l => l.label !== 'Contact').map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <Link to="/contact" className={styles.ctaBtn}>Free AI Strategy</Link>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
            id="hamburger-btn"
          >
            <span className={[styles.bar, mobileOpen ? styles.barOpen1 : ''].join(' ')} />
            <span className={[styles.bar, mobileOpen ? styles.barOpen2 : ''].join(' ')} />
            <span className={[styles.bar, mobileOpen ? styles.barOpen3 : ''].join(' ')} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={[styles.mobileMenu, mobileOpen ? styles.mobileOpen : ''].join(' ')}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => [styles.mobileLink, isActive ? styles.active : ''].join(' ')}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/contact" className={styles.mobileCta}>Free AI Strategy</Link>
      </nav>
    </header>
  );
}
