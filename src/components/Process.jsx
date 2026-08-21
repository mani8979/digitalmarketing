import React from 'react';

const Process = () => {
  return (
    <section className="section" id="process" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>HOW WE WORK</span>
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
          <div className="process-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            <div className="process-step-card">
              <span className="step-num-badge">01</span>
              <h3 className="step-title">Understand</h3>
              <p className="step-description">
                We understand your business, audience and goals.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">02</span>
              <h3 className="step-title">Strategize</h3>
              <p className="step-description">
                We create a clear digital strategy designed around your objectives.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">03</span>
              <h3 className="step-title">Create</h3>
              <p className="step-description">
                We build content, campaigns and digital experiences that represent your brand.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">04</span>
              <h3 className="step-title">Launch</h3>
              <p className="step-description">
                We put your brand in front of the right audience.
              </p>
            </div>

            <div className="process-step-card">
              <span className="step-num-badge">05</span>
              <h3 className="step-title">Grow</h3>
              <p className="step-description">
                We analyse, optimize and continuously improve.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default Process;
