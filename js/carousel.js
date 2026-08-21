/**
 * GROW BIRD — Testimonials Carousel (carousel.js)
 * "What Our Clients Say"
 */

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialCarousel();
});

function initTestimonialCarousel() {
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const quoteText = document.getElementById('testimonialQuote');
  const authorName = document.getElementById('testimonialAuthor');
  const authorRole = document.getElementById('testimonialRole');
  const indicatorsContainer = document.getElementById('carouselIndicators');

  if (!quoteText || !authorName || !authorRole) return;

  const testimonials = [
    {
      quote: '“Grow Bird understood our requirements and helped us present our business professionally online.”',
      author: 'Client Name (Placeholder)',
      role: 'Business Owner, Retail & Services'
    },
    {
      quote: '“The combination of strategic website design and targeted advertising gave our startup the visibility we were missing.”',
      author: 'Founder Name (Placeholder)',
      role: 'Co-Founder, Tech Startup'
    },
    {
      quote: '“From brand identity to automated AI workflows, Grow Bird helped us build a consistent and credible online presence.”',
      author: 'Director Name (Placeholder)',
      role: 'Managing Director, Professional Services'
    }
  ];

  let currentIndex = 0;
  let autoSlideInterval;

  // Create indicator dots
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = testimonials.map((_, idx) => `
      <span class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" style="
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${idx === 0 ? 'var(--accent-green)' : 'rgba(255, 255, 255, 0.2)'};
        margin: 0 4px;
        cursor: pointer;
        transition: all 0.3s ease;
      "></span>
    `).join('');
  }

  function updateSlide(index) {
    currentIndex = index;
    const item = testimonials[currentIndex];

    quoteText.style.opacity = '0';
    authorName.style.opacity = '0';
    authorRole.style.opacity = '0';

    setTimeout(() => {
      quoteText.textContent = item.quote;
      authorName.textContent = item.author;
      authorRole.textContent = item.role;

      quoteText.style.opacity = '1';
      authorName.style.opacity = '1';
      authorRole.style.opacity = '1';
    }, 200);

    // Update dots
    if (indicatorsContainer) {
      const dots = indicatorsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.style.background = 'var(--accent-green)';
          dot.style.width = '20px';
          dot.style.borderRadius = '4px';
        } else {
          dot.style.background = 'rgba(255, 255, 255, 0.2)';
          dot.style.width = '8px';
          dot.style.borderRadius = '50%';
        }
      });
    }
  }

  function nextSlide() {
    let next = (currentIndex + 1) % testimonials.length;
    updateSlide(next);
  }

  function prevSlide() {
    let prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSlide(prev);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  if (indicatorsContainer) {
    indicatorsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        updateSlide(idx);
      });
    });
  }

  // Auto rotation
  const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 6000);
  };
  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  startAutoSlide();

  const container = document.querySelector('.testimonial-carousel-container');
  if (container) {
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);
  }
}
