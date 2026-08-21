import React from 'react';

const WhyUs = () => {
  return (
    <section className="section" id="why-us" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header text-left">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>THE GROW BIRD ADVANTAGE</span>
          </div>
          <h2 className="section-title">
            We Don't Just Create Content. <br /><span className="text-gradient">We Build Growth.</span>
          </h2>
        </div>

        <div className="why-header-statement">
          <h3>Your business needs more than likes and followers.</h3>
          <p>It needs visibility, trust, customers and growth. That's where Grow Bird comes in.</p>
        </div>

        <div className="bento-grid">
          <div className="glass-card bento-card bento-col-7">
            <div>
              <div className="card-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="bento-title">Customized Strategy</h3>
              <p className="bento-desc">
                Every business is different. We create strategies based on your goals, audience and industry rather than forcing cookie-cutter templates.
              </p>
            </div>
            <div className="bento-graphic-preview" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-green)', fontWeight: 700 }}>Tailored Audience Mapping</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Goal-Driven Roadmap ✓</div>
            </div>
          </div>

          <div className="glass-card bento-card bento-col-5">
            <div>
              <div className="card-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="bento-title">Creative Thinking</h3>
              <p className="bento-desc">
                We combine creativity, technology and marketing to make your brand stand out and build a recognizable visual presence.
              </p>
            </div>
            <div className="bento-graphic-preview" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center', fontWeight: 600 }}>
              Distinctive Visual Systems & Storytelling
            </div>
          </div>

          <div className="glass-card bento-card bento-col-4">
            <div>
              <div className="card-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="bento-title">AI-Powered Approach</h3>
              <p className="bento-desc">
                We use modern AI tools and technology to make marketing smarter, faster and more efficient.
              </p>
            </div>
            <div className="bento-graphic-preview" style={{ fontSize: '0.8rem', color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              // Intelligent Automated Systems
            </div>
          </div>

          <div className="glass-card bento-card bento-col-4">
            <div>
              <div className="card-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="bento-title">Business-Focused</h3>
              <p className="bento-desc">
                We focus on how digital marketing can contribute to actual business growth and customer pipeline.
              </p>
            </div>
            <div className="bento-graphic-preview" style={{ fontSize: '0.8rem', color: 'var(--text-primary)', textAlign: 'center', fontWeight: 600 }}>
              Revenue & Lead Generation Focus
            </div>
          </div>

          <div className="glass-card bento-card bento-col-4">
            <div>
              <div className="card-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <h3 className="bento-title">Affordable Solutions</h3>
              <p className="bento-desc">
                Professional digital services designed for startups, local businesses and growing companies.
              </p>
            </div>
            <div className="bento-graphic-preview" style={{ fontSize: '0.8rem', color: 'var(--accent-green)', textAlign: 'center', fontWeight: 700 }}>
              High Value • Clear Pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
