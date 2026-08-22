import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    // Simple counter animation for stats
    const duration = 1600;
    const counters = statsRef.current;
    
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-counter'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOut * target;

            el.textContent = `${prefix}${isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal)}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${target}${suffix}`;
            }
          };

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => {
      if (c) counterObserver.observe(c);
    });

    return () => counterObserver.disconnect();
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Content (Left) */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true"></span>
              <span>DIGITAL GROWTH AGENCY</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">Smart Marketing.</span>
              <span className="title-line title-highlight">Real Growth.</span>
            </h1>

            <p className="hero-subtitle">
              We help businesses build a powerful digital presence through smart marketing, creative content, modern websites and AI-powered solutions.
            </p>

            <p className="hero-statement">
              From visibility to customer growth, we build digital strategies designed around your business goals.
            </p>

            <div className="hero-cta-group">
              <button className="btn btn-primary btn-lg" onClick={() => window.location.href='#contact'}>
                <span>Get Started</span>
                <span className="btn-arrow">→</span>
              </button>
              <a href="#services" className="btn btn-secondary btn-lg">
                <span>View Our Services</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="hero-badges-strip">
              <div className="hero-badge-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Strategy-Led Execution</span>
              </div>
              <div className="hero-badge-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>AI-Powered Velocity</span>
              </div>
              <div className="hero-badge-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Measurable ROI</span>
              </div>
            </div>
          </div>

          {/* Hero Visual (Right) */}
          <div className="hero-visual-wrapper">

            {/* Main Dashboard Image */}
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'visible' }}>
              <img
                src="/hero-dashboard.jpg"
                alt="Grow Bird Marketing Dashboard — Multi-Metric Growth Analytics"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  display: 'block',
                  boxShadow: '0 24px 80px rgba(5,150,105,0.22), 0 4px 24px rgba(0,0,0,0.18)',
                  border: '1.5px solid rgba(5,150,105,0.18)',
                }}
              />

              {/* Floating AI Badge Top-Right */}
              <div className="floating-badge badge-top-right">
                <div className="card-icon-box" style={{ width: '34px', height: '34px', margin: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>AI SOLUTIONS</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-green)' }}>Smart Automation Active</div>
                </div>
              </div>

              {/* Floating Conversion Badge Bottom-Left */}
              <div className="floating-badge badge-bottom-left">
                <div className="card-icon-box" style={{ width: '34px', height: '34px', margin: 0, background: 'rgba(37,99,235,0.12)', color: '#2563EB' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <polyline points="16 11 18 13 22 9"></polyline>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>CONVERSION FUNNEL</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-pure)' }}>Turning Clicks Into Growth</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
