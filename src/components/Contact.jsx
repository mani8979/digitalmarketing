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
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                We're ready to learn about your business and discuss how our strategies can help you scale.
              </p>

              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', width: '100%', justifyContent: 'center', padding: '1rem', border: '1px solid #25D366', color: '#25D366', background: 'rgba(37, 211, 102, 0.05)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span style={{ fontWeight: 700 }}>Chat on WhatsApp</span>
              </a>
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
