import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" style={{ zIndex: 1002 }}>
        <div className="container navbar-container">
          <a href="#hero" className="brand-logo" aria-label="Grow Bird Home" onClick={closeMenu} style={{ padding: 0 }}>
            <img
              src="/logo.png"
              alt="Grow Bird — Smart Marketing. Real Growth."
              style={{
                height: '44px',
                width: 'auto',
                maxWidth: '180px',
                objectFit: 'contain',
                display: 'block',
                flexShrink: 0,
              }}
            />
          </a>

          <nav className="nav-menu" aria-label="Primary Navigation">
            <a href="#hero" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Our Work</a>
            <a href="#process" className="nav-link">How We Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="btn btn-primary btn-sm" onClick={() => window.location.href='#contact'}>
              <span>Get Started</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
            <button 
              className={`hamburger-btn ${menuOpen ? 'active' : ''}`} 
              id="hamburgerBtn" 
              aria-label="Toggle Mobile Menu" 
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} aria-hidden="true"></div>
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`} id="mobileNavDrawer" aria-hidden={!menuOpen}>
        <nav className="mobile-nav-links">
          <a href="#hero" className="mobile-nav-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
          <a href="#services" className="mobile-nav-link" onClick={closeMenu}>Services</a>
          <a href="#portfolio" className="mobile-nav-link" onClick={closeMenu}>Our Work</a>
          <a href="#process" className="mobile-nav-link" onClick={closeMenu}>How We Work</a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
        </nav>
        <button className="btn btn-primary btn-lg" onClick={() => { closeMenu(); window.location.href='#contact'; }} style={{ width: '100%', maxWidth: '300px' }}>
          <span>Get Started</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
