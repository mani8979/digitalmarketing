import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const charsRef = useRef([]);
  const [count, setCount] = useState(0);

  useGSAP(() => {
    // Safety fallback
    const safetyTimeout = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.transition = 'opacity 0.5s ease';
        loaderRef.current.style.opacity = '0';
        loaderRef.current.style.pointerEvents = 'none';
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }
    }, 4000);

    const chars = charsRef.current;
    
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

    if (counterRef.current) gsap.set(counterRef.current, { yPercent: 100, opacity: 0 });

    const tl = gsap.timeline({
      delay: 0.15,
      onComplete: () => {
        clearTimeout(safetyTimeout);
        if (onComplete) onComplete();
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
    tl.set('.loader-brand', { visibility: 'visible' }, 0.25);

    tl.to(chars, {
      yPercent: 0,
      opacity: 1,
      rotation: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.04,
    }, 0.25);

    if (counterRef.current) {
      tl.to(counterRef.current, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '<');

      // 3. Counter tick to 100
      tl.to({ value: 0 }, {
        value: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate() {
          setCount(Math.round(this.targets()[0].value));
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

    if (counterRef.current) {
      tl.to(counterRef.current, { yPercent: -100, opacity: 0, duration: 0.55, ease: 'power3.in' }, 2.3);
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
    tl.to(loaderRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 0.75,
      ease: 'power3.inOut',
    }, 3.0);

  }, { scope: loaderRef });

  return (
    <div className="loader" id="introLoader" aria-label="Loading Grow Bird" ref={loaderRef}>
      <div className="loader-card"><img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&h=800&q=80" alt="Strategy" /></div>
      <div className="loader-card"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&h=800&q=80" alt="Design" /></div>
      <div className="loader-card"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=800&q=80" alt="Growth" /></div>
      <div className="loader-card"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=800&q=80" alt="Collaboration" /></div>
      <div className="loader-card"><img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&h=800&q=80" alt="Website" /></div>
      <div className="loader-card"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&h=800&q=80" alt="AI Technology" /></div>

      <div className="loader-brand" style={{ visibility: 'hidden' }}>
        <h1 className="loader-title">
          <span className="char-span" style={{ display:'inline-block', color:'#FFFFFF', textShadow:'0 6px 30px rgba(0,0,0,0.9)' }} ref={el => charsRef.current[0] = el}>G</span>
          <span className="char-span" style={{ display:'inline-block', color:'#FFFFFF', textShadow:'0 6px 30px rgba(0,0,0,0.9)' }} ref={el => charsRef.current[1] = el}>R</span>
          <span className="char-span" style={{ display:'inline-block', color:'#FFFFFF', textShadow:'0 6px 30px rgba(0,0,0,0.9)' }} ref={el => charsRef.current[2] = el}>O</span>
          <span className="char-span" style={{ display:'inline-block', color:'#FFFFFF', textShadow:'0 6px 30px rgba(0,0,0,0.9)' }} ref={el => charsRef.current[3] = el}>W</span>
          <span style={{ display:'inline-block', width: '0.35em' }}></span>
          <span className="bird-word" style={{ display:'inline-block' }}>
            <span className="char-span" style={{ display:'inline-block', color:'#10E599', textShadow:'0 0 30px rgba(16,229,153,0.8)' }} ref={el => charsRef.current[4] = el}>B</span>
            <span className="char-span" style={{ display:'inline-block', color:'#10E599', textShadow:'0 0 30px rgba(16,229,153,0.8)' }} ref={el => charsRef.current[5] = el}>I</span>
            <span className="char-span" style={{ display:'inline-block', color:'#10E599', textShadow:'0 0 30px rgba(16,229,153,0.8)' }} ref={el => charsRef.current[6] = el}>R</span>
            <span className="char-span" style={{ display:'inline-block', color:'#10E599', textShadow:'0 0 30px rgba(16,229,153,0.8)' }} ref={el => charsRef.current[7] = el}>D</span>
          </span>
        </h1>
        <div className="loader-count"><p ref={counterRef}>{String(count).padStart(3, '0')}</p></div>
      </div>
    </div>
  );
};

export default Loader;
