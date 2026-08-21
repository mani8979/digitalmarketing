import React from 'react';

const WhoWeHelp = () => {
  const audiences = [
    {
      title: 'Small Businesses',
      desc: 'Helping local businesses build visibility and attract customers online.',
      icon: '🏪'
    },
    {
      title: 'Real Estate',
      desc: 'Digital marketing and websites designed to generate quality enquiries.',
      icon: '🏢'
    },
    {
      title: 'Interior & Construction',
      desc: 'Creative digital solutions that showcase projects and build trust.',
      icon: '🏗️'
    },
    {
      title: 'Solar Businesses',
      desc: 'Marketing and lead-generation solutions for growing solar businesses.',
      icon: '☀️'
    },
    {
      title: 'Local Businesses',
      desc: 'Helping local brands become more visible and competitive online.',
      icon: '📍'
    },
    {
      title: 'Professionals & Startups',
      desc: 'Building strong digital identities for professionals and emerging businesses.',
      icon: '🚀'
    }
  ];

  return (
    <section className="section" id="who-we-help" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>INDUSTRIES & AUDIENCES</span>
          </div>
          <h2 className="section-title">
            We Help Businesses <span className="text-gradient">Grow Online</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
          {audiences.map((item, index) => (
            <div key={index} className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', transition: 'transform 0.2s ease' }}>
              <div style={{ fontSize: '2rem', lineHeight: '1' }}>{item.icon}</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
