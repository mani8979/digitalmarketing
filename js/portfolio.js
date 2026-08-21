/**
 * GROW BIRD — Portfolio Showcase & Filters (portfolio.js)
 * "Ideas Into Digital Experiences."
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolio();
});

function initPortfolio() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('projectModalClose');

  if (!filterBtns.length || !portfolioCards.length) return;

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Project Modal Details
  const projectDetails = {
    web1: {
      title: 'Modern Growth Platform (Website Design)',
      tag: 'Website Design & Development',
      desc: 'A modern, high-performance responsive website engineered for lead generation, featuring fast load times, dynamic interactions, and search-optimized structure.',
      deliverables: ['UI/UX Wireframes & Prototypes', 'Responsive Frontend Development', 'Conversion Funnel Optimization', 'SEO-Ready Content Architecture'],
      impact: 'Placeholder project showcasing Grow Bird’s clean design architecture and conversion focus.'
    },
    brand1: {
      title: 'Distinctive Identity & Visual System (Brand Identity)',
      tag: 'Brand Identity & Strategy',
      desc: 'Complete brand identity suite designed to establish immediate credibility, including a modern logomark, custom color harmony, and versatile social media design templates.',
      deliverables: ['Primary & Secondary Brand Logos', 'Typography & Color Guidelines', 'Social Media Style Guides', 'Stationery & Digital Assets'],
      impact: 'Placeholder project highlighting Grow Bird’s strategic branding capabilities.'
    },
    social1: {
      title: 'High-Engagement Content System (Social Media)',
      tag: 'Social Media Marketing',
      desc: 'Structured social media content calendar featuring interactive carousels, trend-driven short-form reels, and community engagement workflows.',
      deliverables: ['Monthly Content Calendar', 'Short-form Reels & Motion Graphics', 'Hashtag & Audience Research', 'Performance Analytics Reports'],
      impact: 'Placeholder project demonstrating consistent visual storytelling across channels.'
    },
    ads1: {
      title: 'Targeted Acquisition Campaign (Digital Campaign)',
      tag: 'Google & Meta Ads',
      desc: 'Full-funnel paid advertising campaign across Google Search and Meta Ads with tailored ad creatives, audience segmentation, and A/B tested landing pages.',
      deliverables: ['High-CTR Ad Creatives & Copy', 'Audience Retargeting Framework', 'Conversion Tracking Setup', 'Ongoing Bid Optimization'],
      impact: 'Placeholder campaign illustrating strategic media buying and ROI tracking.'
    },
    ai1: {
      title: 'Smart Automation & Chat Workflow (AI Solution)',
      tag: 'AI Solutions & Automation',
      desc: 'Integration of an intelligent AI customer assistant that qualifies leads 24/7, answers business queries, and syncs directly with CRM systems.',
      deliverables: ['Custom AI Knowledge Base Setup', 'Instant Lead Qualification Bot', 'CRM & Workflow Integration', 'Automated Email Follow-up Chains'],
      impact: 'Placeholder workflow highlighting AI-powered efficiency for growing brands.'
    },
    reels1: {
      title: 'Promotional Motion & Reels Showcase (Content & Reels)',
      tag: 'Video Editing & Reels',
      desc: 'Dynamic, fast-paced video edits and promotional reels built to stop the scroll, present product value propositions, and drive organic reach.',
      deliverables: ['Scripting & Storyboard Review', 'Dynamic Transitions & Sound Design', 'Optimized 9:16 Vertical Video Formats', 'Brand Watermarking & Captions'],
      impact: 'Placeholder reel package showing high-retention video production.'
    }
  };

  portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const data = projectDetails[projectId];
      if (!data || !modalBackdrop) return;

      document.getElementById('modalProjectTag').textContent = data.tag;
      document.getElementById('modalProjectTitle').textContent = data.title;
      document.getElementById('modalProjectDesc').textContent = data.desc;
      document.getElementById('modalProjectDeliverables').innerHTML = data.deliverables.map(d => `<li>• ${d}</li>`).join('');
      document.getElementById('modalProjectImpact').textContent = data.impact;

      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
}
