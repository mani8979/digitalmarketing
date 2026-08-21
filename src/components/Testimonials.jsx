import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Grow Bird understood our requirements and helped us present our business professionally online.",
      name: "Sarah Jenkins",
      role: "CEO, TechFlow Solutions"
    },
    {
      quote: "The lead generation funnel they built doubled our qualified inquiries in just 45 days.",
      name: "Marcus Chen",
      role: "Founder, Zenith Consulting"
    },
    {
      quote: "Finally a marketing agency that understands actual business metrics, not just vanity metrics.",
      name: "Elena Rodriguez",
      role: "Marketing Director, Elevate"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>CLIENT FEEDBACK</span>
          </div>
          <h2 className="section-title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="testimonial-carousel-container">
          <div className="testimonial-card-single">
            <div className="quote-icon">“</div>
            <p className="testimonial-quote">
              “{testimonials[currentIndex].quote}”
            </p>
            <div className="testimonial-author-box">
              <span className="author-name">{testimonials[currentIndex].name}</span>
              <span className="author-role">{testimonials[currentIndex].role}</span>
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Previous testimonial">←</button>
            <div id="carouselIndicators">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`carousel-indicator ${i === currentIndex ? 'active' : ''}`} 
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next} aria-label="Next testimonial">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
