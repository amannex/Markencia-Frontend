import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NAV_LINKS, MEGA_MENU_SERVICES } from '../../data/staticData';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  
  const { pathname } = useLocation();
  const menuRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Close mobile menu and mega menu on route change
  useEffect(() => { 
    setMobileOpen(false); 
    setServicesOpenDesktop(false);
    setServicesOpenMobile(false);
  }, [pathname]);

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

  const handleMouseEnter = () => {
    clearTimeout(hideTimeoutRef.current);
    setServicesOpenDesktop(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setServicesOpenDesktop(false);
    }, 150); // slight delay to prevent flickering
  };

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
          {NAV_LINKS.filter(l => l.label !== 'Contact').map((link) => {
            if (link.path === '/services') {
              return (
                <div 
                  key={link.path}
                  className={styles.megaMenuWrapper}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => [styles.navLink, isActive || servicesOpenDesktop ? styles.active : ''].join(' ')}
                  >
                    {link.label}
                    <ChevronDown className={[styles.chevron, servicesOpenDesktop ? styles.chevronOpen : ''].join(' ')} size={16} />
                  </NavLink>
                  
                  {/* Mega Menu Dropdown */}
                  <div className={[styles.megaMenuDropdown, servicesOpenDesktop ? styles.megaMenuOpen : ''].join(' ')}>
                    <div className={styles.megaMenuGrid}>
                      {MEGA_MENU_SERVICES.map((col, idx) => (
                        <div key={idx} className={styles.megaMenuColumn}>
                          <h4 className={styles.megaMenuCategory}>{col.category}</h4>
                          <ul className={styles.megaMenuList}>
                            {col.items.map(item => (
                              <li key={item.path}>
                                <Link to={item.path} className={styles.megaMenuItem}>
                                  <span className={styles.megaMenuIcon}>{item.icon}</span>
                                  <div>
                                    <span className={styles.megaMenuItemLabel}>{item.label}</span>
                                    <span className={styles.megaMenuItemDesc}>{item.desc}</span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => [styles.navLink, isActive ? styles.active : ''].join(' ')}
              >
                {link.label}
              </NavLink>
            );
          })}
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
        <div className={styles.mobileNavContainer}>
          {NAV_LINKS.map((link) => {
            if (link.path === '/services') {
              return (
                <div key={link.path} className={styles.mobileMegaMenuWrapper}>
                  <button 
                    className={styles.mobileLink} 
                    onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
                  >
                    {link.label}
                    <ChevronDown className={[styles.chevron, servicesOpenMobile ? styles.chevronOpen : ''].join(' ')} size={18} />
                  </button>
                  <div className={[styles.mobileMegaMenuDropdown, servicesOpenMobile ? styles.mobileMegaMenuOpen : ''].join(' ')}>
                    {MEGA_MENU_SERVICES.map((col, idx) => (
                      <div key={idx} className={styles.mobileMegaMenuColumn}>
                        <h4 className={styles.mobileMegaMenuCategory}>{col.category}</h4>
                        <ul className={styles.mobileMegaMenuList}>
                          {col.items.map(item => (
                            <li key={item.path}>
                              <Link to={item.path} className={styles.mobileMegaMenuItem}>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => [styles.mobileLink, isActive ? styles.active : ''].join(' ')}
              >
                {link.label}
              </NavLink>
            );
          })}
          <Link to="/contact" className={styles.mobileCta}>Free AI Strategy</Link>
        </div>
      </nav>
    </header>
  );
}
