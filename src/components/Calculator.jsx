import React, { useState } from 'react';

const Calculator = () => {
  const [stage, setStage] = useState('growing');
  const [goal, setGoal] = useState('leads');
  const [budget, setBudget] = useState('steady');

  const calculateGrowth = () => {
    let score = 96;
    let strategy = 'Omnichannel Growth Engine & Performance Scaling';
    let channels = 'Google & Meta Ads • Full SEO Architecture • Video Production • AI Workflows';

    if (stage === 'startup') {
      score -= 12;
      strategy = 'Foundational Market Entry & Brand Validation';
      channels = 'Brand Identity • High-Converting Landing Page • Targeted Paid Social • Local SEO Setup';
    }
    
    if (goal === 'brand') {
      strategy = 'Authority Positioning & Brand Dominance';
      channels = 'Premium Web Experience • High-End Video Production • Content Marketing • PR';
    } else if (goal === 'scale') {
      score += 2;
      strategy = 'Aggressive Market Expansion & Market Share Acquisition';
      channels = 'Enterprise SEO • Multi-Platform Ad Scaling • Advanced Analytics • AI Growth Systems';
    }

    if (budget === 'fast') {
      score -= 5;
    } else if (budget === 'long') {
      score += 3;
    }

    return { score: Math.min(score, 99), strategy, channels };
  };

  const { score, strategy, channels } = calculateGrowth();

  return (
    <section className="section-tight" id="calculator" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="calculator-card">
          <div className="calculator-grid">
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>
                <span className="dot"></span>
                <span>GROWTH ESTIMATOR</span>
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-pure)', marginBottom: '1rem' }}>
                Plan Your Digital Growth Roadmap
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Select your business stage and key objective to see how Grow Bird structures a customized strategy mix.
              </p>

              <div className="form-group">
                <label className="form-label" htmlFor="calcStage">Business Stage</label>
                <select className="form-select" id="calcStage" value={stage} onChange={e => setStage(e.target.value)}>
                  <option value="startup">Startup / New Business</option>
                  <option value="growing">Growing Brand / Established</option>
                  <option value="local">Local Business / Service Provider</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="calcGoal">Primary Growth Objective</label>
                <select className="form-select" id="calcGoal" value={goal} onChange={e => setGoal(e.target.value)}>
                  <option value="leads">Customer Inquiries & Lead Generation</option>
                  <option value="brand">Brand Awareness & Credibility</option>
                  <option value="scale">Full-Scale Digital Dominance</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="calcBudget">Target Timeline</label>
                <select className="form-select" id="calcBudget" value={budget} onChange={e => setBudget(e.target.value)}>
                  <option value="fast">Immediate Acceleration (1–3 Months)</option>
                  <option value="steady">Structured Scale (3–6 Months)</option>
                  <option value="long">Long-Term Compounding (6–12 Months)</option>
                </select>
              </div>
            </div>

            <div className="calc-output-box">
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '0.5rem', fontWeight: 700 }}>
                Strategy Readiness Score
              </div>
              <div className="calc-output-val">{score}%</div>
              
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginTop: '1.25rem', textAlign: 'left' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: 700 }}>Recommended Strategy</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-pure)', marginBottom: '1rem' }}>{strategy}</div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: 700 }}>Suggested Channel Focus</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-green)', lineHeight: 1.5, fontWeight: 600 }}>{channels}</div>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
                <span>Discuss This Strategy</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
