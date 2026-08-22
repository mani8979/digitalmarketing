import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#hero',      label: 'Home',        id: 'hero' },
  { href: '#about',     label: 'About',       id: 'about' },
  { href: '#services',  label: 'Services',    id: 'services' },
  { href: '#portfolio', label: 'Our Work',    id: 'portfolio' },
  { href: '#process',   label: 'How We Work', id: 'process' },
  { href: '#contact',   label: 'Contact',     id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" style={{ zIndex: 1002 }}>
        <div className="container navbar-container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <a href="#hero" className="brand-logo" aria-label="Grow Bird Home" onClick={closeMenu} style={{ padding: 0 }}>
              <img
                src="/logo.png"
                alt="Grow Bird Smart Marketing Real Growth"
                style={{ height: '44px', width: 'auto', maxWidth: '160px', objectFit: 'contain', display: 'block', flexShrink: 0 }}
              />
            </a>
            {/* Tagline below logo */}
            <img
              src="/tagline.jpg"
              alt="Smart Marketing. Real Growth. — Digital Marketing Agency"
              style={{
                display: 'block',
                height: '22px',
                width: 'auto',
                maxWidth: '200px',
                objectFit: 'contain',
                marginTop: '3px',
              }}
            />
          </div>

          <nav className="nav-menu" aria-label="Primary Navigation">
            {NAV_LINKS.map(({ href, label, id }) => (
              <a key={id} href={href} className={`nav-link${activeSection === id ? ' active' : ''}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="btn btn-primary btn-sm" onClick={() => window.location.href = '#contact'}>
              <span>Get Started</span>
              <span className="btn-arrow" aria-hidden="true">?</span>
            </button>
            <button className={`hamburger-btn ${menuOpen ? 'active' : ''}`} id="hamburgerBtn"
              aria-label="Toggle Mobile Menu" aria-expanded={menuOpen} onClick={toggleMenu}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} aria-hidden="true"></div>
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`} id="mobileNavDrawer" aria-hidden={!menuOpen}>
        <nav className="mobile-nav-links">
          {NAV_LINKS.map(({ href, label, id }) => (
            <a key={id} href={href} className={`mobile-nav-link${activeSection === id ? ' active' : ''}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
        <button className="btn btn-primary btn-lg" onClick={() => { closeMenu(); window.location.href = '#contact'; }}
          style={{ width: '100%', maxWidth: '300px' }}>
          <span>Get Started</span>
          <span className="btn-arrow">?</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
