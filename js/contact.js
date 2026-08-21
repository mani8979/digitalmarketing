/**
 * GROW BIRD — Contact Form & Consultation Modals (contact.js)
 * "Let's Grow Your Business Together."
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initConsultationModal();
  initServiceDetailModal();
});

/**
 * Toast Notification Helper
 */
function showToast(title, message) {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4500);
}

/**
 * Contact Form Logic
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const businessName = document.getElementById('contactBusiness')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const phone = document.getElementById('contactPhone')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !businessName) {
      alert('Please provide your name, business name, and email address.');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
      <span>Connecting with Grow Bird...</span>
    `;

    setTimeout(() => {
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      showToast(
        'Inquiry Sent Successfully!',
        'Thank you! The Grow Bird team will review your business goals and reach out promptly.'
      );
    }, 900);
  });
}

/**
 * Consultation Modal System
 */
function initConsultationModal() {
  const modal = document.getElementById('consultationModal');
  const closeBtn = document.getElementById('consultationModalClose');
  const triggerBtns = document.querySelectorAll('[data-trigger-consultation]');
  const consultationForm = document.getElementById('consultationModalForm');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal();
      showToast(
        'Free Consultation Booked!',
        'We look forward to discussing your digital growth strategy.'
      );
      consultationForm.reset();
    });
  }
}

/**
 * Service Deep-Dive Modal
 */
function initServiceDetailModal() {
  const serviceModal = document.getElementById('serviceDetailModal');
  const closeBtn = document.getElementById('serviceDetailModalClose');
  const learnBtns = document.querySelectorAll('.service-learn-btn');

  const servicesInfo = {
    '1': {
      title: 'Digital Marketing',
      tagline: 'Result-Focused Growth Strategies',
      desc: 'Build sustained brand visibility and acquire the right audience through tailored, multi-channel digital marketing campaigns that align directly with your revenue objectives.',
      deliverables: [
        'Comprehensive Multi-Channel Strategy',
        'Audience Profiling & Buyer Persona Mapping',
        'Competitive Digital Market Analysis',
        'Transparent Monthly Reporting & KPIs'
      ],
      suitableFor: 'Startups, Local Businesses & Scaling Companies seeking structured, measurable customer acquisition.'
    },
    '2': {
      title: 'Social Media Marketing',
      tagline: 'Active, Engaging & Connected Brand Presence',
      desc: 'Create, schedule, and manage compelling content that establishes credibility, keeps your business top of mind, and fosters genuine engagement with your community.',
      deliverables: [
        'Strategic Content Calendars & Themes',
        'Custom High-Quality Feed Graphics & Stories',
        'Community Management & Engagement',
        'Performance Analytics & Reach Growth'
      ],
      suitableFor: 'Brands wanting a modern, active, and trustworthy social media voice on Instagram, LinkedIn, and Facebook.'
    },
    '3': {
      title: 'Website Design & Development',
      tagline: 'Modern, Responsive & Conversion-Focused',
      desc: 'High-performance websites engineered to captivate visitors and seamlessly guide them into taking action — turning clicks into qualified inquiries and sales.',
      deliverables: [
        'Bespoke Modern UI/UX Design System',
        'Mobile-First Responsive Web Development',
        'Conversion Funnel & Lead Capture Integration',
        'Lightning-Fast Speed & Technical SEO Setup'
      ],
      suitableFor: 'Businesses needing a professional 24/7 digital storefront that builds trust and drives conversions.'
    },
    '4': {
      title: 'Search Engine Optimization (SEO)',
      tagline: 'Rank Higher on Google & Capture Intent Traffic',
      desc: 'Improve search rankings for terms your prospective customers are actively typing, building dependable and compounding organic traffic over time.',
      deliverables: [
        'In-Depth Keyword & Competitor Research',
        'On-Page Optimization (Meta, Headers, Semantic Structure)',
        'Technical SEO (Speed, Mobile, Indexing, Architecture)',
        'Local SEO & Google Business Profile Setup'
      ],
      suitableFor: 'Companies wanting sustainable long-term search visibility without relying solely on paid ads.'
    },
    '5': {
      title: 'Google & Meta Ads',
      tagline: 'Targeted High-ROI Paid Advertising',
      desc: 'Accelerate business results with targeted paid advertising campaigns across Google Search, Display, Instagram, and Facebook, optimized for the lowest acquisition cost.',
      deliverables: [
        'Laser-Targeted Audience & Keyword Segmentation',
        'Compelling Ad Copywriting & Creative Design',
        'Landing Page A/B Testing & Funnel Setup',
        'Real-Time ROAS Tracking & Bid Optimization'
      ],
      suitableFor: 'Brands ready to rapidly scale lead generation and sales through predictable media buying.'
    },
    '6': {
      title: 'AI Solutions & Automation',
      tagline: 'Work Smarter, Move Faster & Scale Efficiently',
      desc: 'Harness modern AI tools to streamline internal workflows, automate customer inquiry handling, and unlock actionable insights from your marketing data.',
      deliverables: [
        'AI Chatbot & Lead Qualification Assistant',
        'Automated Content & Research Pipelines',
        'Smart Customer Support Workflows',
        'Operational AI Integration Guidance'
      ],
      suitableFor: 'Forward-thinking businesses looking to save hours of manual work and elevate responsiveness.'
    },
    '7': {
      title: 'Video Editing & Reels',
      tagline: 'High-Retention Visual Storytelling',
      desc: 'Produce captivating short-form videos, promotional reels, and brand explainers designed to capture attention in the first 3 seconds and drive virality.',
      deliverables: [
        'Fast-Paced Motion Graphics & Subtitling',
        'Viral Hooks, Storyboarding & Pacing',
        'Color Grading & Audio Enhancement',
        'Multi-Platform Video Format Exports (9:16, 16:9, 1:1)'
      ],
      suitableFor: 'Businesses looking to dominate Instagram Reels, TikTok, YouTube Shorts, and video ad placements.'
    },
    '8': {
      title: 'Branding & Graphic Design',
      tagline: 'Memorable Identities & Cohesive Visual Systems',
      desc: 'Shape an unforgettable identity that reflects your business values and commands premium positioning in your market across every touchpoint.',
      deliverables: [
        'Custom Logo Suites (Primary, Secondary, Monograms)',
        'Comprehensive Brand Guidelines & Color Palettes',
        'Typography Hierarchy & Asset Packages',
        'Marketing Collateral, Pitch Decks & Social Assets'
      ],
      suitableFor: 'Startups launching new ventures or existing companies seeking a refined, modern rebrand.'
    }
  };

  if (!serviceModal) return;

  learnBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-service-id');
      const info = servicesInfo[serviceId];
      if (!info) return;

      document.getElementById('serviceModalTitle').textContent = info.title;
      document.getElementById('serviceModalTagline').textContent = info.tagline;
      document.getElementById('serviceModalDesc').textContent = info.desc;
      document.getElementById('serviceModalDeliverables').innerHTML = info.deliverables.map(d => `<li>• ${d}</li>`).join('');
      document.getElementById('serviceModalSuitable').textContent = info.suitableFor;

      serviceModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeServiceModal = () => {
    serviceModal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeServiceModal);
  serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) closeServiceModal();
  });
}
