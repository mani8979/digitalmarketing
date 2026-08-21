import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand-col">
          <div className="brand-logo" style={{ marginBottom: '1.25rem' }}>
            <div className="brand-logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18L9 11L14 15L21 6"></path>
                <path d="M15 6H21V12"></path>
              </svg>
            </div>
            <div className="brand-logo-text">
              <span className="grow">Grow</span>
              <span className="bird">Bird</span>
            </div>
          </div>
          <p className="footer-desc">
            Smart Marketing. Real Growth. <br/>
            We build digital ecosystems that turn visibility into measurable business revenue.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="LinkedIn">in</a>
            <a href="#" className="social-link" aria-label="Instagram">ig</a>
            <a href="#" className="social-link" aria-label="Twitter">tw</a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Services</h4>
          <nav className="footer-nav">
            <a href="#services" className="footer-link">Strategy & Consulting</a>
            <a href="#services" className="footer-link">Website Design</a>
            <a href="#services" className="footer-link">SEO & Content</a>
            <a href="#services" className="footer-link">Paid Advertising</a>
            <a href="#services" className="footer-link">AI Automation</a>
          </nav>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Company</h4>
          <nav className="footer-nav">
            <a href="#why-us" className="footer-link">About Us</a>
            <a href="#portfolio" className="footer-link">Our Work</a>
            <a href="#process" className="footer-link">Process</a>
            <a href="#contact" className="footer-link">Contact</a>
          </nav>
        </div>

        <div className="footer-newsletter-col">
          <h4 className="footer-heading">Stay Updated</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: 1.5 }}>
            Get marketing insights and growth strategies delivered to your inbox monthly.
          </p>
          <form className="footer-form" onSubmit={e => e.preventDefault()}>
            <input type="email" className="footer-input" placeholder="Email Address" required />
            <button type="submit" className="footer-submit-btn">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} Grow Bird Digital Agency. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
