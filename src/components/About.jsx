import React from 'react';

const About = () => {
  return (
    <section className="section" id="about" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header text-left" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot"></span>
            <span>ABOUT GROW BIRD</span>
          </div>
          <h2 className="section-title" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
            We Help Businesses <br /><span className="text-gradient">Grow Digitally</span>
          </h2>
          <div style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Grow Bird is a digital marketing agency helping businesses build a strong online presence through creative marketing, modern websites, engaging content and AI-powered solutions.
            </p>
            <p>
              We focus on practical strategies that help businesses reach the right audience, build trust and generate real growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
