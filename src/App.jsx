import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

import './styles/main.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/responsive.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import WhoWeHelp from './components/WhoWeHelp';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import CtaSection from './components/CtaSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className="bg-grid-texture"></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <WhoWeHelp />
        <Portfolio />
        <Process />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      
      <button className="back-to-top" id="backToTop" aria-label="Back to Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </>
  );
}

export default App;
