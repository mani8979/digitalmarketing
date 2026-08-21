import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'web1',
      category: 'web',
      badge: 'Website Design',
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="1.5" style={{ margin: '0 auto 0.5rem auto' }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      previewTitle: 'SaaS & Growth Platform Interface',
      title: 'Modern Growth Web Platform',
      desc: 'High-performance responsive website engineered for lead generation and search visibility.',
      tags: ['Next-Gen UI/UX', 'SEO Ready', 'Speed Optimized']
    },
    {
      id: 'brand1',
      category: 'brand',
      badge: 'Brand Identity',
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--tech-blue)" strokeWidth="1.5" style={{ margin: '0 auto 0.5rem auto' }}>
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        </svg>
      ),
      previewTitle: 'Brand System & Logomark Design',
      title: 'Distinctive Visual Identity Suite',
      desc: 'End-to-end brand guidelines, vector logomarks, typography rules, and social kits.',
      tags: ['Logo Design', 'Color Harmonization', 'Brand Guide']
    },
    {
      id: 'social1',
      category: 'social',
      badge: 'Social Media',
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="1.5" style={{ margin: '0 auto 0.5rem auto' }}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        </svg>
      ),
      previewTitle: 'Cross-Platform Content Strategy',
      title: 'High-Engagement Content System',
      desc: 'Strategic feed designs, educational carousels, and monthly engagement workflows.',
      tags: ['Instagram & LinkedIn', 'Content Calendar', 'Community']
    },
    {
      id: 'ads1',
      category: 'ads',
      badge: 'Digital Campaign',
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--tech-blue)" strokeWidth="1.5" style={{ margin: '0 auto 0.5rem auto' }}>
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      previewTitle: 'Targeted Acquisition Funnel',
      title: 'Targeted Acquisition Campaign',
      desc: 'High-converting Meta & Google search ad funnels designed to minimize customer acquisition cost.',
      tags: ['Google Search', 'Meta Retargeting', 'A/B Testing']
    },
    {
      id: 'ai1',
      category: 'ai',
      badge: 'AI Solution',
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="1.5" style={{ margin: '0 auto 0.5rem auto' }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      previewTitle: 'Automated Lead Assistant Pipeline',
      title: 'Smart Automation & Lead Bot',
      desc: '24/7 AI-driven customer qualification, intelligent knowledge sync, and lead routing.',
      tags: ['AI Chatbots', 'CRM Sync', 'Workflow Automation']
    },
    {
      id: 'reels1',
      category: 'reels',
      badge: 'Content & Reels',
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--tech-blue)" strokeWidth="1.5" style={{ margin: '0 auto 0.5rem auto' }}>
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      ),
      previewTitle: 'High-Retention Promotional Reels',
      title: 'Promotional Motion & Video Series',
      desc: 'Dynamic short-form video edits with engaging captions, motion graphics, and high hook retention.',
      tags: ['Short-Form Video', 'Motion Design', 'Sound FX']
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="section" id="portfolio" style={{ background: '#F8FAFC' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>OUR WORK</span>
          </div>
          <h2 className="section-title">
            Ideas Into <span className="text-gradient">Digital Experiences.</span>
          </h2>
          <p className="section-description">
            From websites and branding to social media campaigns, videos and digital advertising — we create digital experiences that represent businesses professionally.
          </p>
        </div>

        <div className="portfolio-filter-bar">
          <button className={`portfolio-filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
          <button className={`portfolio-filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Website Design</button>
          <button className={`portfolio-filter-btn ${filter === 'brand' ? 'active' : ''}`} onClick={() => setFilter('brand')}>Brand Identity</button>
          <button className={`portfolio-filter-btn ${filter === 'social' ? 'active' : ''}`} onClick={() => setFilter('social')}>Social Media</button>
          <button className={`portfolio-filter-btn ${filter === 'ads' ? 'active' : ''}`} onClick={() => setFilter('ads')}>Digital Campaign</button>
          <button className={`portfolio-filter-btn ${filter === 'ai' ? 'active' : ''}`} onClick={() => setFilter('ai')}>AI Solution</button>
          <button className={`portfolio-filter-btn ${filter === 'reels' ? 'active' : ''}`} onClick={() => setFilter('reels')}>Content & Reels</button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div className="portfolio-card" key={project.id}>
              <div className="portfolio-preview">
                <span className="portfolio-preview-badge">{project.badge}</span>
                <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                  {project.icon}
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{project.previewTitle}</div>
                </div>
                <span className="portfolio-placeholder-label">[PROJECT PLACEHOLDER]</span>
              </div>
              <div className="portfolio-info">
                <div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">{project.desc}</p>
                </div>
                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span className="portfolio-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button className="btn btn-secondary btn-lg" data-trigger-consultation>
            <span>Explore Our Portfolio & Case Studies</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
