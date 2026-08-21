import React, { useEffect } from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    if (!btn) return;
    
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="btn-loader" style="width:16px;height:16px;border:2px solid #fff;border-top-color:transparent;border-radius:50%;display:inline-block;animation:spin 1s linear infinite;"></span><span>Sending...</span>`;
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = `<span>Request Sent Successfully</span>`;
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-secondary');
      btn.style.background = 'var(--accent-green)';
      btn.style.color = '#fff';
      e.target.reset();
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-secondary');
        btn.style = '';
      }, 3000);
    }, 1500);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-col">
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="section-title text-left">
              Let's Build Your <br /><span className="text-gradient">Digital Future.</span>
            </h2>
            <p className="contact-lead">
              Ready to upgrade your digital presence and scale your customer acquisition? Book a free discovery call with our growth team today.
            </p>

            <div className="contact-details-wrap">
              <div className="contact-detail-row">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="detail-label">Direct Line</div>
                  <div className="detail-value">+1 (555) 019-8234</div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="detail-label">Email Us</div>
                  <div className="detail-value">growth@growbird.co</div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="detail-label">Headquarters</div>
                  <div className="detail-value">120 Innovation Blvd<br/>Tech District, CA 94103</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <div className="glass-card contact-form-card">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>Request a Proposal</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>Fill out the form below and we'll get back to you within 24 hours.</p>

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name <span className="required">*</span></label>
                    <input type="text" className="form-input" id="firstName" name="firstName" required placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name <span className="required">*</span></label>
                    <input type="text" className="form-input" id="lastName" name="lastName" required placeholder="Doe" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="workEmail">Work Email <span className="required">*</span></label>
                  <input type="email" className="form-input" id="workEmail" name="workEmail" required placeholder="john@company.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Services You Need Help With <span className="required">*</span></label>
                  <div className="service-pills-wrap">
                    <input type="checkbox" id="svcWeb" className="service-pill-checkbox" name="services[]" value="website" />
                    <label htmlFor="svcWeb" className="service-pill-label">Website</label>

                    <input type="checkbox" id="svcSeo" className="service-pill-checkbox" name="services[]" value="seo" />
                    <label htmlFor="svcSeo" className="service-pill-label">SEO</label>

                    <input type="checkbox" id="svcAds" className="service-pill-checkbox" name="services[]" value="ads" />
                    <label htmlFor="svcAds" className="service-pill-label">Paid Ads</label>

                    <input type="checkbox" id="svcBrand" className="service-pill-checkbox" name="services[]" value="branding" />
                    <label htmlFor="svcBrand" className="service-pill-label">Branding</label>

                    <input type="checkbox" id="svcSocial" className="service-pill-checkbox" name="services[]" value="social" />
                    <label htmlFor="svcSocial" className="service-pill-label">Social Media</label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea className="form-textarea" id="message" name="message" placeholder="Tell us about your project goals..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', height: '54px' }}>
                  <span>Submit Request</span>
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
