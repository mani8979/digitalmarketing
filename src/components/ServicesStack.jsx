import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ServicesStack = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const isMobile = () => window.innerWidth <= 768;
    const cards = gsap.utils.toArray('.stack-card');
    
    if (!cards.length) return;

    const getPeek = () => (isMobile() ? 10 : 20);
    const getScaleStep = () => (isMobile() ? 0.018 : 0.028);

    function stackPose(index) {
      return {
        y: index * getPeek(),
        scale: 1 - index * getScaleStep(),
      };
    }

    // Initial stacking set with clean baseline
    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: cards.length - i,
        y: () => stackPose(i).y,
        scale: () => stackPose(i).scale,
        opacity: () => (i === 0 ? 1 : Math.max(0.75 - i * 0.06, 0.45)),
        rotate: 0,
        transformOrigin: '50% 0%',
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${cards.length * (isMobile() ? window.innerHeight * 0.72 : window.innerHeight * 0.68)}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to({}, { duration: 0.15 });

    const flying = cards.slice(0, -1);

    flying.forEach((card, i) => {
      const time = tl.duration() + 0.1;
      const behind = cards.slice(i + 1);

      tl.to(
        card,
        {
          y: () => -window.innerHeight * 0.7,
          rotate: isMobile() ? -4 : -8,
          scale: 0.94,
          opacity: 0,
          ease: 'power2.inOut',
          duration: 0.9,
        },
        time
      );

      behind.forEach((bCard, bIdx) => {
        tl.to(
          bCard,
          {
            y: () => stackPose(bIdx).y,
            scale: () => stackPose(bIdx).scale,
            opacity: () => (bIdx === 0 ? 1 : Math.max(0.75 - bIdx * 0.06, 0.45)),
            ease: 'power1.out',
            duration: 0.9,
          },
          time
        );
      });

      tl.to({}, { duration: 0.15 });
    });

    tl.to({}, { duration: 0.2 });

  }, { scope: containerRef });

  return (
    <section className="services-stack-section" id="services" ref={containerRef} style={{ position: 'relative' }}>
      <div className="stack__header">
        <div className="section-eyebrow">
          <span className="dot"></span>
          <span>OUR SERVICES • STACK DECK</span>
        </div>
        <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
          Everything Your Business Needs to <span className="text-gradient">Grow Digitally</span>
        </h2>
        <p className="section-description" style={{ maxWidth: '680px', margin: '0 auto' }}>
          From strategy and branding to websites, advertising and AI — scroll through our connected growth services below.
        </p>
      </div>

      <div className="stack__stage">
        <div className="stack__deck" id="servicesStackDeck">
          
          <article className="stack-card" data-tone="1" data-service-id="1">
            <div className="stack-card__content">
              <div>
                <div className="stack-card__top">
                  <h3 className="stack-card__title">Digital Marketing</h3>
                  <span className="stack-card__index">01</span>
                </div>
                <p className="stack-card__lede">Targeted Reach • Compounding Visibility</p>
                <p className="stack-card__body">
                  Build brand visibility and reach the right audience through result-focused digital marketing strategies engineered to scale customer acquisition.
                </p>
                <div className="stack-card__tags">
                  <span className="stack-card__tag">Full-Funnel Strategy</span>
                  <span className="stack-card__tag">Audience Mapping</span>
                  <span className="stack-card__tag">ROI Tracking</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-sm service-learn-btn" data-service-id="1">
                  <span>Explore Deliverables & Scope</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="stack-card__media">
              <div className="stack-card__frame">
                <div className="stack-card__frame-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="stack-card__frame-subtitle">Result-Focused Campaigns</div>
                <div className="stack-card__frame-scope">Engineered around your actual business revenue objectives.</div>
              </div>
            </div>
          </article>

          <article className="stack-card" data-tone="2" data-service-id="2">
            <div className="stack-card__content">
              <div>
                <div className="stack-card__top">
                  <h3 className="stack-card__title">Social Media Marketing</h3>
                  <span className="stack-card__index">02</span>
                </div>
                <p className="stack-card__lede">Engaging Content • Active Community</p>
                <p className="stack-card__body">
                  Create and manage engaging social media content that keeps brands active, professional, and connected with customers across Instagram, LinkedIn and Facebook.
                </p>
                <div className="stack-card__tags">
                  <span className="stack-card__tag">Content Calendar</span>
                  <span className="stack-card__tag">Feed Aesthetic</span>
                  <span className="stack-card__tag">Community Growth</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-sm service-learn-btn" data-service-id="2">
                  <span>Explore Deliverables & Scope</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="stack-card__media">
              <div className="stack-card__frame">
                <div className="stack-card__frame-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  </svg>
                </div>
                <div className="stack-card__frame-subtitle">Brand Authority & Voice</div>
                <div className="stack-card__frame-scope">Consistent, authentic visual storytelling across every feed.</div>
              </div>
            </div>
          </article>

          <article className="stack-card" data-tone="3" data-service-id="3">
            <div className="stack-card__content">
              <div>
                <div className="stack-card__top">
                  <h3 className="stack-card__title">Website Design & Dev</h3>
                  <span className="stack-card__index">03</span>
                </div>
                <p className="stack-card__lede">High Performance • Conversion Optimized</p>
                <p className="stack-card__body">
                  Modern, responsive, and conversion-focused websites designed to turn visitors into customers. Built for speed, mobile perfection, and search visibility.
                </p>
                <div className="stack-card__tags">
                  <span className="stack-card__tag">Next-Gen UI/UX</span>
                  <span className="stack-card__tag">Mobile-First</span>
                  <span className="stack-card__tag">Lead Funnels</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-sm service-learn-btn" data-service-id="3">
                  <span>Explore Deliverables & Scope</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="stack-card__media">
              <div className="stack-card__frame">
                <div className="stack-card__frame-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="stack-card__frame-subtitle">24/7 Digital Growth Engine</div>
                <div className="stack-card__frame-scope">Crafted to inspire immediate trust and capture qualified inquiries.</div>
              </div>
            </div>
          </article>

          <article className="stack-card" data-tone="4" data-service-id="4">
            <div className="stack-card__content">
              <div>
                <div className="stack-card__top">
                  <h3 className="stack-card__title">Search Engine Optimization</h3>
                  <span className="stack-card__index">04</span>
                </div>
                <p className="stack-card__lede">Google Search Dominance • High-Intent Traffic</p>
                <p className="stack-card__body">
                  Improve search visibility and help potential customers discover your business on Google when they are actively seeking your services.
                </p>
                <div className="stack-card__tags">
                  <span className="stack-card__tag">Keyword Discovery</span>
                  <span className="stack-card__tag">Technical SEO</span>
                  <span className="stack-card__tag">Local Google Maps</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-sm service-learn-btn" data-service-id="4">
                  <span>Explore Deliverables & Scope</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="stack-card__media">
              <div className="stack-card__frame">
                <div className="stack-card__frame-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div className="stack-card__frame-subtitle">Compounding Organic Reach</div>
                <div className="stack-card__frame-scope">Sustainable customer flow that grows stronger every month.</div>
              </div>
            </div>
          </article>

          <article className="stack-card" data-tone="5" data-service-id="5">
            <div className="stack-card__content">
              <div>
                <div className="stack-card__top">
                  <h3 className="stack-card__title">Google & Meta Ads</h3>
                  <span className="stack-card__index">05</span>
                </div>
                <p className="stack-card__lede">Precision Targeting • High Return on Ad Spend</p>
                <p className="stack-card__body">
                  Reach the right audience through targeted advertising campaigns built around business goals, high-converting creatives, and continuous bid optimization.
                </p>
                <div className="stack-card__tags">
                  <span className="stack-card__tag">Search & Display</span>
                  <span className="stack-card__tag">Instagram Ads</span>
                  <span className="stack-card__tag">A/B Testing</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-sm service-learn-btn" data-service-id="5">
                  <span>Explore Deliverables & Scope</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="stack-card__media">
              <div className="stack-card__frame">
                <div className="stack-card__frame-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="stack-card__frame-subtitle">Predictable Acquisition</div>
                <div className="stack-card__frame-scope">Convert high-intent paid traffic with optimized cost-per-lead.</div>
              </div>
            </div>
          </article>

          <article className="stack-card" data-tone="6" data-service-id="6">
            <div className="stack-card__content">
              <div>
                <div className="stack-card__top">
                  <h3 className="stack-card__title">AI Solutions & Automation</h3>
                  <span className="stack-card__index">06</span>
                </div>
                <p className="stack-card__lede">Smarter Workflows • Supercharged Efficiency</p>
                <p className="stack-card__body">
                  Use modern AI tools to improve business processes, content creation, customer communication and operational productivity across your marketing pipeline.
                </p>
                <div className="stack-card__tags">
                  <span className="stack-card__tag">AI Assistants</span>
                  <span className="stack-card__tag">Lead Qualification</span>
                  <span className="stack-card__tag">Workflow Automation</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-sm service-learn-btn" data-service-id="6">
                  <span>Explore Deliverables & Scope</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="stack-card__media">
              <div className="stack-card__frame">
                <div className="stack-card__frame-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div className="stack-card__frame-subtitle">Next-Gen Intelligence</div>
                <div className="stack-card__frame-scope">Automate repetitive tasks and respond to prospects in real time.</div>
              </div>
            </div>
          </article>

          <article className="stack-card" data-tone="7" data-service-id="7">
            <div className="stack-card__content">
              <div>
                <div className="stack-card__top">
                  <h3 className="stack-card__title">Video Editing & Reels</h3>
                  <span className="stack-card__index">07</span>
                </div>
                <p className="stack-card__lede">Scroll-Stopping Hooks • High Retention Motion</p>
                <p className="stack-card__body">
                  Create professional videos, viral reels and promotional content designed to capture instant attention, explain complex offers, and drive shares.
                </p>
                <div className="stack-card__tags">
                  <span className="stack-card__tag">Short-Form Reels</span>
                  <span className="stack-card__tag">Motion Graphics</span>
                  <span className="stack-card__tag">Viral Pacing</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-sm service-learn-btn" data-service-id="7">
                  <span>Explore Deliverables & Scope</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="stack-card__media">
              <div className="stack-card__frame">
                <div className="stack-card__frame-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <div className="stack-card__frame-subtitle">High-Impact Visuals</div>
                <div className="stack-card__frame-scope">Capture attention in the first 3 seconds and keep viewers hooked.</div>
              </div>
            </div>
          </article>

          <article className="stack-card" data-tone="8" data-service-id="8">
            <div className="stack-card__content">
              <div>
                <div className="stack-card__top">
                  <h3 className="stack-card__title">Branding & Graphic Design</h3>
                  <span className="stack-card__index">08</span>
                </div>
                <p className="stack-card__lede">Memorable Identities • Cohesive Visual Systems</p>
                <p className="stack-card__body">
                  Create memorable brand identities, logos, social creatives and consistent visual systems that make your business instantly recognizable and trusted.
                </p>
                <div className="stack-card__tags">
                  <span className="stack-card__tag">Logo & Logomarks</span>
                  <span className="stack-card__tag">Brand Guidelines</span>
                  <span className="stack-card__tag">Design Systems</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary btn-sm service-learn-btn" data-service-id="8">
                  <span>Explore Deliverables & Scope</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
            <div className="stack-card__media">
              <div className="stack-card__frame">
                <div className="stack-card__frame-icon">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  </svg>
                </div>
                <div className="stack-card__frame-subtitle">Premium Positioning</div>
                <div className="stack-card__frame-scope">Elevate market perception with modern, cohesive brand aesthetics.</div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default ServicesStack;
