import React, { useEffect, useRef, useState } from 'react';

const Ecosystem = () => {
  const wrapRef = useRef(null);
  const hubRef = useRef(null);
  const svgRef = useRef(null);
  const nodesRef = useRef([]);

  const [activeNode, setActiveNode] = useState(null);

  const nodeData = {
    branding: {
      title: 'Branding & Identity',
      text: 'Builds authentic recognition, credibility, and brand authority so potential customers remember and trust your business immediately.'
    },
    website: {
      title: 'Website & Digital Experience',
      text: 'Acts as the 24/7 conversion engine of your business, turning organic and paid traffic into qualified leads and paying customers.'
    },
    social: {
      title: 'Social Media Marketing',
      text: 'Fosters continuous community engagement and brand loyalty across social platforms, keeping your business top-of-mind.'
    },
    seo: {
      title: 'Search Engine Optimization (SEO)',
      text: 'Captures high-intent customers actively searching for your solutions on Google, creating compounding long-term organic traffic.'
    },
    ads: {
      title: 'Targeted Google & Meta Ads',
      text: 'Accelerates immediate market reach and customer acquisition through laser-focused audience targeting and ROI-optimized campaigns.'
    },
    content: {
      title: 'Content & High-Impact Reels',
      text: 'Delivers educational, entertaining, and persuasive messaging that demonstrates value and drives engagement across all touchpoints.'
    },
    ai: {
      title: 'AI Solutions & Automation',
      text: 'Optimizes customer response times, automates operational workflows, and scales marketing efficiency using intelligent AI systems.'
    },
    analytics: {
      title: 'Data & Growth Analytics',
      text: 'Tracks KPIs, conversion funnels, and customer journeys to make informed, data-driven optimizations across the entire strategy.'
    }
  };

  useEffect(() => {
    const drawConnectorLines = () => {
      if (!wrapRef.current || !hubRef.current || !svgRef.current) return;

      const wrap = wrapRef.current;
      const hub = hubRef.current;
      const svgContainer = svgRef.current;
      const nodes = nodesRef.current;

      const wrapRect = wrap.getBoundingClientRect();
      const hubRect = hub.getBoundingClientRect();
      const hubCenterX = hubRect.left + hubRect.width / 2 - wrapRect.left;
      const hubCenterY = hubRect.top + hubRect.height / 2 - wrapRect.top;

      svgContainer.setAttribute('viewBox', `0 0 ${wrapRect.width} ${wrapRect.height}`);
      svgContainer.innerHTML = '';

      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.innerHTML = `
        <linearGradient id="lineGradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#2563EB" stop-opacity="0.3"/>
        </linearGradient>
        <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" stop-opacity="1"/>
          <stop offset="100%" stop-color="#059669" stop-opacity="0.9"/>
        </linearGradient>
      `;
      svgContainer.appendChild(defs);

      nodes.forEach((node, idx) => {
        if (!node) return;
        const nodeRect = node.getBoundingClientRect();
        const nodeCenterX = nodeRect.left + nodeRect.width / 2 - wrapRect.left;
        const nodeCenterY = nodeRect.top + nodeRect.height / 2 - wrapRect.top;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const midX = (hubCenterX + nodeCenterX) / 2;
        const midY = (hubCenterY + nodeCenterY) / 2;
        const d = `M ${hubCenterX} ${hubCenterY} Q ${midX + (idx % 2 === 0 ? 15 : -15)} ${midY} ${nodeCenterX} ${nodeCenterY}`;

        const key = node.getAttribute('data-node');

        path.setAttribute('d', d);
        path.setAttribute('stroke', activeNode === key ? 'url(#lineGradActive)' : 'url(#lineGradDefault)');
        path.setAttribute('stroke-width', activeNode === key ? '3' : '1.75');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-dasharray', '5, 5');

        svgContainer.appendChild(path);
      });
    };

    drawConnectorLines();
    window.addEventListener('resize', drawConnectorLines);
    return () => window.removeEventListener('resize', drawConnectorLines);
  }, [activeNode]);

  const handleNodeEnter = (key) => {
    setActiveNode(key);
  };

  const handleHubClick = () => {
    setActiveNode(null);
  };

  return (
    <section className="section ecosystem-section" id="ecosystem">
      <div className="container ecosystem-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot"></span>
            <span>CONNECTED GROWTH SYSTEM</span>
          </div>
          <h2 className="section-title">
            One Strategy. <span className="text-gradient">Every Digital Touchpoint.</span>
          </h2>
          <p className="section-description">
            We bring your brand, content, technology and marketing together into one connected growth strategy.
          </p>
        </div>

        <div className="ecosystem-visual-wrap" ref={wrapRef}>
          <svg className="ecosystem-svg-lines" ref={svgRef} aria-hidden="true"></svg>

          <div 
            className="ecosystem-center-hub" 
            ref={hubRef} 
            tabIndex="0" 
            role="button" 
            onClick={handleHubClick}
          >
            <span className="hub-brand-name">Grow Bird Hub</span>
            <span className="hub-title">YOUR BUSINESS</span>
          </div>

          {[
            { id: 'branding', icon: '✦', label: 'Branding', pos: 1 },
            { id: 'website', icon: '💻', label: 'Website', pos: 2 },
            { id: 'social', icon: '📱', label: 'Social Media', pos: 3 },
            { id: 'seo', icon: '🔍', label: 'SEO', pos: 4 },
            { id: 'ads', icon: '🎯', label: 'Ads', pos: 5 },
            { id: 'content', icon: '🎬', label: 'Content', pos: 6 },
            { id: 'ai', icon: '⚡', label: 'AI', pos: 7 },
            { id: 'analytics', icon: '📊', label: 'Analytics', pos: 8 },
          ].map((item, idx) => (
            <div 
              key={item.id}
              className={`ecosystem-node node-pos-${item.pos} ${activeNode === item.id ? 'active' : ''}`} 
              data-node={item.id} 
              tabIndex="0" 
              role="button"
              onMouseEnter={() => handleNodeEnter(item.id)}
              onClick={() => handleNodeEnter(item.id)}
              ref={el => nodesRef.current[idx] = el}
            >
              <div className="ecosystem-node-icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="ecosystem-detail-card">
          {activeNode && nodeData[activeNode] ? (
            <>
              <div className="ecosystem-detail-title">{nodeData[activeNode].title}</div>
              <p className="ecosystem-detail-text">{nodeData[activeNode].text}</p>
            </>
          ) : (
            <>
              <div className="ecosystem-detail-title">One Connected Strategy</div>
              <p className="ecosystem-detail-text">
                Click or hover over any digital touchpoint above to see how Grow Bird connects branding, technology, and marketing into a unified engine.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
