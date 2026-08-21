import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-grid">

          {/* Brand Column */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '1.25rem' }}>
              <img
                src="/logo.jpg"
                alt="Grow Bird Logo"
                style={{
                  width: '42px',
                  height: '42px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  flexShrink: 0,
                }}
              />
              <div className="brand-logo-text">
                <span className="grow">Grow</span>
                <span className="bird">Bird</span>
              </div>
            </div>
            <p className="footer-brand-bio">
              Smart Marketing. Real Growth.<br />
              We help businesses grow online through creative marketing, modern websites and AI-powered solutions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+919522298777" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#059669'}
                onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 95222 98777
              </a>
              <a href="https://wa.me/919522298777" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#25D366', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Madhurawada, Visakhapatnam - 530041
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">Digital Marketing</a></li>
              <li><a href="#services" className="footer-link">Website Development</a></li>
              <li><a href="#services" className="footer-link">Social Media</a></li>
              <li><a href="#services" className="footer-link">SEO</a></li>
              <li><a href="#services" className="footer-link">AI Solutions</a></li>
              <li><a href="#services" className="footer-link">Video Editing</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#portfolio" className="footer-link">Our Work</a></li>
              <li><a href="#process" className="footer-link">How We Work</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="footer-col-title">Stay Updated</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Get monthly marketing insights and growth tips delivered to your inbox.
            </p>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input
                type="email"
                placeholder="Your email address"
                required
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#F8FAFC',
                  fontSize: '0.9rem',
                  outline: 'none',
                  width: '100%',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#059669',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#047857'}
                onMouseLeave={e => e.currentTarget.style.background = '#059669'}
              >
                Subscribe →
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>&copy; 2026 Grow Bird. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#059669'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748B'}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#059669'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748B'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
