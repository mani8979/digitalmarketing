import React from 'react';

const CtaSection = () => {
  return (
    <section
      className="section"
      style={{ background: 'var(--tech-blue)', padding: '6rem 0', textAlign: 'center' }}
    >
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#ffffff' }}>
          Ready to Grow Your Business?
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Let's build a digital presence that works for your business.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => window.location.href = '#contact'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#ffffff', color: 'var(--tech-blue)',
              fontWeight: 700, fontSize: '1rem',
              padding: '0.9rem 2rem', borderRadius: '8px',
              border: 'none', cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start a Conversation →
          </button>
          <button
            onClick={() => window.location.href = '#services'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'transparent', color: '#ffffff',
              fontWeight: 700, fontSize: '1rem',
              padding: '0.9rem 2rem', borderRadius: '8px',
              border: '2px solid rgba(255,255,255,0.5)', cursor: 'pointer',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#ffffff'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}
          >
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
