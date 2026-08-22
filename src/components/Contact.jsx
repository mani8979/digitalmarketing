import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.firstName.value.trim();
    const lastName  = form.lastName.value.trim();
    const email     = form.workEmail.value.trim();
    const message   = form.message.value.trim();

    // Collect checked services
    const serviceCheckboxes = form.querySelectorAll('input[name="services[]"]:checked');
    const services = Array.from(serviceCheckboxes).map(cb => cb.value).join(', ') || 'Not specified';

    const waMessage =
      `Hello Grow Bird! 👋\n\n` +
      `*Name:* ${firstName} ${lastName}\n` +
      `*Email:* ${email}\n` +
      `*Services Needed:* ${services}\n` +
      (message ? `*Message:* ${message}\n` : '') +
      `\nLooking forward to hearing from you!`;

    const waUrl = `https://wa.me/919522298777?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    form.reset();
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-col">
            <div className="section-eyebrow">
              <span className="dot"></span>
              <span>LET'S WORK TOGETHER</span>
            </div>
            <h2 className="section-title text-left">
              Tell Us About <br /><span className="text-gradient">Your Business.</span>
            </h2>
            <p className="contact-lead">
              Whether you're starting from scratch or looking to grow faster — we're here to help. Share your goals and we'll come back with a clear plan.
            </p>

            <div className="contact-details-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>

              {/* Phone */}
              <a href="tel:+919522298777" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(5,150,105,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>Call Us</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>+91 95222 98777</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/919522298777" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(37,211,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>WhatsApp</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#25D366' }}>Chat with us →</div>
                </div>
              </a>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Our Office</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6 }}>
                    Plot No: 960, Beside Aditya Fortuner<br />
                    Near Kushi Shop, Midhilapuri Vuda Colony,<br />
                    Madhurawada, Visakhapatnam - 530041
                  </div>
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
