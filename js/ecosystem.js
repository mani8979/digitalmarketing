/**
 * GROW BIRD — Growth Ecosystem Interactive Hub (ecosystem.js) - Pure White Theme
 * "One Strategy. Every Digital Touchpoint."
 */

document.addEventListener('DOMContentLoaded', () => {
  initEcosystemHub();
});

function initEcosystemHub() {
  const hub = document.getElementById('ecosystemCenterHub');
  const nodes = document.querySelectorAll('.ecosystem-node');
  const svgLinesContainer = document.getElementById('ecosystemSvgLines');
  const detailCard = document.getElementById('ecosystemDetailCard');

  if (!nodes.length || !svgLinesContainer) return;

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

  /**
   * Draw dynamic SVG connector lines from center hub to each node
   */
  function drawConnectorLines() {
    const wrap = document.querySelector('.ecosystem-visual-wrap');
    if (!wrap || !hub) return;

    const wrapRect = wrap.getBoundingClientRect();
    const hubRect = hub.getBoundingClientRect();
    const hubCenterX = hubRect.left + hubRect.width / 2 - wrapRect.left;
    const hubCenterY = hubRect.top + hubRect.height / 2 - wrapRect.top;

    svgLinesContainer.setAttribute('viewBox', `0 0 ${wrapRect.width} ${wrapRect.height}`);
    svgLinesContainer.innerHTML = '';

    // Create defs for gradients and markers
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
    svgLinesContainer.appendChild(defs);

    nodes.forEach((node, idx) => {
      const nodeRect = node.getBoundingClientRect();
      const nodeCenterX = nodeRect.left + nodeRect.width / 2 - wrapRect.left;
      const nodeCenterY = nodeRect.top + nodeRect.height / 2 - wrapRect.top;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const midX = (hubCenterX + nodeCenterX) / 2;
      const midY = (hubCenterY + nodeCenterY) / 2;
      const d = `M ${hubCenterX} ${hubCenterY} Q ${midX + (idx % 2 === 0 ? 15 : -15)} ${midY} ${nodeCenterX} ${nodeCenterY}`;

      path.setAttribute('d', d);
      path.setAttribute('stroke', 'url(#lineGradDefault)');
      path.setAttribute('stroke-width', '1.75');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-dasharray', '5, 5');
      path.setAttribute('id', `connector-${node.getAttribute('data-node')}`);
      path.classList.add('ecosystem-connector-line');

      svgLinesContainer.appendChild(path);
    });
  }

  drawConnectorLines();
  window.addEventListener('resize', drawConnectorLines);

  /**
   * Node interaction handler
   */
  nodes.forEach(node => {
    const activateNode = () => {
      const key = node.getAttribute('data-node');
      const data = nodeData[key];
      if (!data) return;

      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      document.querySelectorAll('.ecosystem-connector-line').forEach(line => {
        line.setAttribute('stroke', 'url(#lineGradDefault)');
        line.setAttribute('stroke-width', '1.75');
      });
      const activeLine = document.getElementById(`connector-${key}`);
      if (activeLine) {
        activeLine.setAttribute('stroke', 'url(#lineGradActive)');
        activeLine.setAttribute('stroke-width', '3');
      }

      if (detailCard) {
        detailCard.innerHTML = `
          <div class="ecosystem-detail-title">${data.title}</div>
          <p class="ecosystem-detail-text">${data.text}</p>
        `;
      }
    };

    node.addEventListener('mouseenter', activateNode);
    node.addEventListener('click', activateNode);
  });

  if (hub) {
    hub.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.ecosystem-connector-line').forEach(line => {
        line.setAttribute('stroke', 'url(#lineGradDefault)');
        line.setAttribute('stroke-width', '1.75');
      });
      if (detailCard) {
        detailCard.innerHTML = `
          <div class="ecosystem-detail-title">One Connected Strategy</div>
          <p class="ecosystem-detail-text">Click or hover over any digital touchpoint to see how Grow Bird connects branding, technology, and marketing into a unified growth engine.</p>
        `;
      }
    });
  }
}
