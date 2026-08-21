import React from 'react';

const WhyUs = () => {
  return (
    <section className="section" id="why-us" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header text-left">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>WHY GROW BIRD</span>
          </div>
          <h2 className="section-title">
            We Don't Just Create Content. <br /><span className="text-gradient">We Build Growth.</span>
          </h2>
        </div>

        <div className="why-header-statement">
          <h3>Your business needs more than likes and followers.</h3>
          <p>It needs visibility, trust, customers and growth. That's where Grow Bird comes in.</p>
        </div>

        <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card bento-card" style={{ padding: '2rem' }}>
            <div>
              <div className="card-icon-box" style={{ marginBottom: '1.5rem', width: '40px', height: '40px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="bento-title" style={{ fontSize: '1.25rem' }}>Strategy First</h3>
              <p className="bento-desc">
                Every business needs a different strategy. We create solutions based on your goals, audience and industry rather than forcing cookie-cutter templates.
              </p>
            </div>
          </div>

          <div className="glass-card bento-card" style={{ padding: '2rem' }}>
            <div>
              <div className="card-icon-box" style={{ marginBottom: '1.5rem', width: '40px', height: '40px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="bento-title" style={{ fontSize: '1.25rem' }}>Creative Thinking</h3>
              <p className="bento-desc">
                We combine creativity with marketing to make your brand stand out and build a recognizable visual presence.
              </p>
            </div>
          </div>

          <div className="glass-card bento-card" style={{ padding: '2rem' }}>
            <div>
              <div className="card-icon-box" style={{ marginBottom: '1.5rem', width: '40px', height: '40px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="bento-title" style={{ fontSize: '1.25rem' }}>AI-Powered Solutions</h3>
              <p className="bento-desc">
                We use AI and modern technology to make marketing smarter, faster and more efficient.
              </p>
            </div>
          </div>

          <div className="glass-card bento-card" style={{ padding: '2rem' }}>
            <div>
              <div className="card-icon-box" style={{ marginBottom: '1.5rem', width: '40px', height: '40px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="bento-title" style={{ fontSize: '1.25rem' }}>Focused on Growth</h3>
              <p className="bento-desc">
                Our goal is not just likes and views — it's meaningful business growth and a stronger customer pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
