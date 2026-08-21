import React from 'react';

const Portfolio = () => {
  return (
    <section className="section" id="portfolio" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>OUR WORK</span>
          </div>
          <h2 className="section-title">
            We're building digital experiences that turn <span className="text-gradient">ideas into growth.</span>
          </h2>
          <p className="section-description">
            From websites and branding to social media campaigns, videos and digital advertising — we create digital experiences that represent businesses professionally.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem', marginBottom: '2rem' }}>
          <button className="btn btn-primary btn-lg" onClick={() => window.location.href='#contact'}>
            <span>Start a Project</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
