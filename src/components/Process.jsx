import React from 'react';

const Process = () => {
  return (
    <section className="section" id="process" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>OUR WORKFLOW</span>
          </div>
          <h2 className="section-title">
            From Idea to <span className="text-gradient">Growth</span>
          </h2>
          <p className="section-description">
            A simple process built around understanding your business first.
          </p>
        </div>

        <div className="process-timeline-wrap">
          <div className="process-connecting-line" aria-hidden="true"></div>
          <div className="process-grid">
            <div className="process-step-card">
              <span className="step-num-badge">01</span>
              <h3 className="step-title">Understand</h3>
              <p className="step-description">
                First, we understand your business, goals, customers and challenges.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">02</span>
              <h3 className="step-title">Plan</h3>
              <p className="step-description">
                We create a digital strategy designed specifically for your business.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">03</span>
              <h3 className="step-title">Create</h3>
              <p className="step-description">
                Our team develops the content, designs, website and campaigns your brand needs.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">04</span>
              <h3 className="step-title">Launch</h3>
              <p className="step-description">
                We put your digital strategy into action and reach your target audience.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">05</span>
              <h3 className="step-title">Optimize</h3>
              <p className="step-description">
                We analyze performance and continuously improve the strategy.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">06</span>
              <h3 className="step-title">Grow</h3>
              <p className="step-description">
                The ultimate goal is simple — help your business grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
