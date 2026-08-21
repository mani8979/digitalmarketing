import React from 'react';

const TrustPillars = () => {
  return (
    <section className="section trust-section" id="trust">
      <div className="container">
        <div className="trust-intro-box">
          <h2 className="trust-main-heading">
            Your Business Deserves More Than Just an Online Presence.
          </h2>
          <p className="trust-lead-text">
            It needs visibility, trust, customers and measurable growth.
          </p>
          <p className="trust-subtext">
            Grow Bird combines marketing, design, technology and AI to create digital experiences that help businesses move forward.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-number">01</div>
            <h3 className="pillar-title">Strategy First</h3>
            <p className="pillar-desc">
              We analyze your market, define your unique advantage, and build targeted roadmaps before touching a single ad or creative asset.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">02</div>
            <h3 className="pillar-title">Creative Execution</h3>
            <p className="pillar-desc">
              Stand out with high-end visual design, captivating reels, and compelling messaging that inspires instant trust in your brand.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">03</div>
            <h3 className="pillar-title">AI Powered</h3>
            <p className="pillar-desc">
              Leverage state-of-the-art AI tools for rapid content generation, workflow automation, and data-driven marketing optimization.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">04</div>
            <h3 className="pillar-title">Growth Focused</h3>
            <p className="pillar-desc">
              Every website, campaign, and post is engineered with a singular objective: driving real business opportunities and measurable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPillars;
