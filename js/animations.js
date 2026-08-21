/**
 * GROW BIRD — Animations, Intro Loader & Smooth Interactions (animations.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initIntroLoader();
  initLenisSmoothScroll();
  initCounters();
  initCardSpotlight();
  initCapabilityTabs();
});

/**
 * 0. Outfit-style Intro Loader Animation (High-Contrast White & Emerald)
 */
function initIntroLoader() {
  const loader = document.getElementById('introLoader');
  const counterEl = document.querySelector('.loader-count p');
  const brandEl = document.querySelector('.loader-brand');
  const titleEl = document.querySelector('.loader-title');

  if (!loader) return;

  // Safety fallback
  const safetyTimeout = setTimeout(() => {
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => loader.remove(), 500);
    }
  }, 4000);

  if (typeof gsap === 'undefined') {
    clearTimeout(safetyTimeout);
    loader.remove();
    return;
  }

  // Split title text characters manually with explicit bright white and vibrant emerald
  if (titleEl) {
    titleEl.innerHTML = `
      <span class="char-span" style="display:inline-block; color:#FFFFFF !important; text-shadow:0 6px 30px rgba(0,0,0,0.9);">G</span>
      <span class="char-span" style="display:inline-block; color:#FFFFFF !important; text-shadow:0 6px 30px rgba(0,0,0,0.9);">R</span>
      <span class="char-span" style="display:inline-block; color:#FFFFFF !important; text-shadow:0 6px 30px rgba(0,0,0,0.9);">O</span>
      <span class="char-span" style="display:inline-block; color:#FFFFFF !important; text-shadow:0 6px 30px rgba(0,0,0,0.9);">W</span>
      <span style="display:inline-block; width: 0.35em;"></span>
      <span class="bird-word" style="display:inline-block;">
        <span class="char-span" style="display:inline-block; color:#10E599 !important; text-shadow:0 0 30px rgba(16,229,153,0.8);">B</span>
        <span class="char-span" style="display:inline-block; color:#10E599 !important; text-shadow:0 0 30px rgba(16,229,153,0.8);">I</span>
        <span class="char-span" style="display:inline-block; color:#10E599 !important; text-shadow:0 0 30px rgba(16,229,153,0.8);">R</span>
        <span class="char-span" style="display:inline-block; color:#10E599 !important; text-shadow:0 0 30px rgba(16,229,153,0.8);">D</span>
      </span>
    `;
  }

  const chars = document.querySelectorAll('.loader-title .char-span');

  // Initial GSAP setup
  gsap.set('.loader-card', {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
    rotate: (i) => [8, -4, -10, 9, -7, 5][i % 6],
  });

  gsap.set(chars, {
    yPercent: 100,
    opacity: 0,
    rotation: 12,
    transformOrigin: '0% 100%',
  });

  if (counterEl) gsap.set(counterEl, { yPercent: 100, opacity: 0 });

  const tl = gsap.timeline({
    delay: 0.15,
    onComplete: () => {
      clearTimeout(safetyTimeout);
      loader.remove();
    }
  });

  // 1. Cards pop in
  tl.to('.loader-card', {
    scale: 1,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 0.8,
    ease: 'power3.inOut',
    stagger: 0.12,
  });

  // 2. Brand visibility and reveal
  tl.set(brandEl, { visibility: 'visible' }, 0.25);

  tl.to(chars, {
    yPercent: 0,
    opacity: 1,
    rotation: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.04,
  }, 0.25);

  if (counterEl) {
    tl.to(counterEl, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '<');

    // 3. Counter tick to 100
    tl.to({ value: 0 }, {
      value: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate() {
        counterEl.textContent = String(Math.round(this.targets()[0].value)).padStart(3, '0');
      },
    }, '<0.2');
  }

  // 4. Characters slide up out
  tl.to(chars, {
    yPercent: -100,
    opacity: 0,
    rotation: -10,
    duration: 0.55,
    ease: 'power3.in',
    stagger: 0.03,
  }, 2.3);

  if (counterEl) {
    tl.to(counterEl, { yPercent: -100, opacity: 0, duration: 0.55, ease: 'power3.in' }, 2.3);
  }

  // 5. Cards shrink
  tl.to('.loader-card', {
    scale: 0,
    clipPath: 'polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)',
    duration: 0.7,
    ease: 'power3.inOut',
    stagger: -0.06,
  }, 2.5);

  // 6. Loader lifts up to reveal white page
  tl.to('.loader', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    duration: 0.75,
    ease: 'power3.inOut',
  }, 3.0);
}

/**
 * 1. Lenis Smooth Scroll
 */
function initLenisSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

/**
 * 2. Animated Numerical Counters
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = target % 1 !== 0;
        const duration = 1600;
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

  counters.forEach(c => counterObserver.observe(c));
}

/**
 * 3. Interactive Card Spotlight Effect on Mouse Move
 */
function initCardSpotlight() {
  const cards = document.querySelectorAll('.glass-card, .bento-card, .pillar-card, .stack-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * 4. Interactive Capabilities Tabs Switcher
 */
function initCapabilityTabs() {
  const tabButtons = document.querySelectorAll('.cap-tab-btn');
  const showcasePanel = document.getElementById('capabilityShowcasePanel');

  const capabilitiesData = {
    branding: {
      title: 'Branding & Graphic Design',
      desc: 'Create a memorable brand identity that positions your business as an industry leader. We develop distinctive visual systems, modern logos, and brand guidelines that evoke immediate trust.',
      features: [
        'Logo & Visual Identity Design',
        'Brand Guidelines & Color Harmonies',
        'Social Media Creative Templates',
        'Marketing Collaterals & Print Assets'
      ]
    },
    social: {
      title: 'Social Media Marketing',
      desc: 'Build an active and engaging presence across Instagram, LinkedIn, and Facebook. We design content calendars, produce reels, and foster a connected community around your brand.',
      features: [
        'Content Strategy & Scheduling',
        'Engaging Reels & Short-form Video',
        'Community Engagement & Outreach',
        'Platform-specific Growth Optimization'
      ]
    },
    website: {
      title: 'Website Design & Development',
      desc: 'Modern, responsive, and conversion-focused websites designed to turn visitors into paying customers. Built for speed, mobile excellence, and seamless search engine performance.',
      features: [
        'Custom High-Performance UI/UX Design',
        'Mobile-First Responsive Layouts',
        'Conversion Rate Optimization (CRO)',
        'Fast Load Times & Core Web Vitals Ready'
      ]
    },
    advertising: {
      title: 'Google & Meta Ads',
      desc: 'Reach your ideal audience with precision targeted advertising. We design high-converting ad creatives, build optimized landing funnels, and manage ad spend for maximum return.',
      features: [
        'Targeted Google Search & Display Campaigns',
        'High-Converting Meta (Instagram/Facebook) Ads',
        'Audience Segmentation & Retargeting',
        'Continuous A/B Testing & Bid Optimization'
      ]
    },
    content: {
      title: 'Video Editing & Content Creation',
      desc: 'Capture attention in seconds with high-retention video content, captivating short-form reels, and compelling copywriting tailored to your target audience.',
      features: [
        'High-Retention Video Editing & Motion Graphics',
        'Viral Reel & Short-Form Storyboarding',
        'Copywriting for Landing Pages & Ads',
        'Content Asset Library for Brand Consistency'
      ]
    },
    ai: {
      title: 'AI Solutions & Automation',
      desc: 'Integrate modern AI tools to streamline business operations, automate customer communications, and scale content production with superhuman efficiency.',
      features: [
        'AI-Powered Customer Engagement Bots',
        'Automated Content & Research Workflows',
        'Smart Lead Qualification & Routing',
        'Data-Driven Growth Forecasting'
      ]
    }
  };

  if (!tabButtons.length || !showcasePanel) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-cap');
      const data = capabilitiesData[key];
      if (!data) return;

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      showcasePanel.style.opacity = '0';
      showcasePanel.style.transform = 'translateY(10px)';
      showcasePanel.style.transition = 'all 0.25s ease';

      setTimeout(() => {
        const titleEl = showcasePanel.querySelector('.cap-panel-title');
        const descEl = showcasePanel.querySelector('.cap-panel-desc');
        const listEl = showcasePanel.querySelector('.cap-feature-list');

        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.desc;
        if (listEl) {
          listEl.innerHTML = data.features.map(f => `
            <li class="cap-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${f}</span>
            </li>
          `).join('');
        }

        showcasePanel.style.opacity = '1';
        showcasePanel.style.transform = 'translateY(0)';
      }, 250);
    });
  });
}
