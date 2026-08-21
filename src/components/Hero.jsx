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
            {/* Floating AI Badge Top */}
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

            {/* Main Interactive Dashboard Graphic */}
            <div className="hero-visual-card glass-card glow-card-top">
              <div className="hero-card-header">
                <div className="hero-card-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2">
                    <path d="M3 3v18h18"></path>
                    <path d="M18 9l-5 5-4-4-6 6"></path>
                  </svg>
                  <span>Growth Engine Telemetry</span>
                </div>
                <div className="status-live">Live Analytics</div>
              </div>

              {/* Dynamic Growth SVG Chart */}
              <div className="growth-chart-box">
                <svg className="growth-chart-svg" viewBox="0 0 400 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFillLight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGradLight" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(15,23,42,0.06)" strokeDasharray="3,3" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(15,23,42,0.06)" strokeDasharray="3,3" />
                  <line x1="0" y1="140" x2="400" y2="140" stroke="rgba(15,23,42,0.06)" strokeDasharray="3,3" />

                  {/* Area Fill */}
                  <path d="M 0 160 Q 90 140 180 90 T 360 25 L 400 20 L 400 180 L 0 180 Z" fill="url(#chartFillLight)" />
                  {/* Curved Growth Stroke */}
                  <path className="chart-line" d="M 0 160 Q 90 140 180 90 T 360 25 L 400 20" fill="none" stroke="url(#lineGradLight)" strokeWidth="3.5" strokeLinecap="round" />

                  {/* Indicator Point Pulse */}
                  <circle cx="360" cy="25" r="5" fill="#059669" filter="drop-shadow(0 0 6px #059669)" />
                </svg>
              </div>

              {/* Trusted Process Sequence */}
              <div className="hero-process-row" style={{ display: 'flex', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Creative</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>•</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Strategy</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>•</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Technology</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>•</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-green)' }}>Growth</div>
              </div>
            </div>

            {/* Floating Conversion Badge Bottom */}
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
    </section>
  );
};

export default Hero;
