import React from 'react';

const CtaSection = () => {
  return (
    <section className="section" style={{ background: 'var(--tech-blue)', color: '#ffffff', padding: '6rem 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#ffffff' }}>
          Ready to Grow Your Business?
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Let's build a digital presence that works for your business.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary btn-lg" onClick={() => window.location.href='#contact'} style={{ background: '#ffffff', color: 'var(--tech-blue)' }}>
            <span>Start a Conversation</span>
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary btn-lg" onClick={() => window.location.href='#services'} style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff' }}>
            <span>View Our Services</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
