import React from 'react';

const Services = () => {
  return (
    <section className="section" id="services" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>OUR SERVICES</span>
          </div>
          <h2 className="section-title">
            Everything Your Business Needs to <span className="text-gradient">Grow Digitally</span>
          </h2>
        </div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          
          <div className="glass-card service-card-simple" style={{ padding: '2.5rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div className="card-icon-box" style={{ marginBottom: '1.5rem', width: '48px', height: '48px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>Digital Marketing</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Build brand visibility and reach the right audience through result-focused digital marketing strategies.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-pure)' }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Social Media Marketing</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> SEO</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Google Ads</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Meta Ads</li>
            </ul>
          </div>

          <div className="glass-card service-card-simple" style={{ padding: '2.5rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div className="card-icon-box" style={{ marginBottom: '1.5rem', width: '48px', height: '48px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>Creative Solutions</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Create memorable brand identities and highly engaging visual content that makes your business stand out.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-pure)' }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Graphic Design</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Video Editing</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Reels & Short Videos</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Branding & Logo Design</li>
            </ul>
          </div>

          <div className="glass-card service-card-simple" style={{ padding: '2.5rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <div className="card-icon-box" style={{ marginBottom: '1.5rem', width: '48px', height: '48px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>Web & Technology</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Modern websites and intelligent automated systems designed to optimize conversions and scale efficiency.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-pure)' }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Website Design & Dev</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Landing Pages</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> AI Solutions</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Business Automation</li>
            </ul>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .service-card-simple:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
        }
      `}} />
    </section>
  );
};

export default Services;
