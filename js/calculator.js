/**
 * GROW BIRD — Interactive Growth Estimator (calculator.js)
 * "Smart Marketing. Real Growth."
 */

document.addEventListener('DOMContentLoaded', () => {
  initGrowthCalculator();
});

function initGrowthCalculator() {
  const stageSelect = document.getElementById('calcStage');
  const goalSelect = document.getElementById('calcGoal');
  const budgetSelect = document.getElementById('calcBudget');
  const outputScore = document.getElementById('calcScore');
  const outputStrategy = document.getElementById('calcStrategy');
  const outputChannels = document.getElementById('calcChannels');

  if (!stageSelect || !goalSelect || !budgetSelect || !outputScore) return;

  function calculateGrowthPlan() {
    const stage = stageSelect.value;
    const goal = goalSelect.value;
    const budget = budgetSelect.value;

    let score = '88%';
    let strategy = 'Full-Funnel Organic & Paid Hybrid';
    let channels = 'Website Redesign • Google Ads • SEO Foundation • Short-Form Content';

    if (stage === 'startup') {
      if (goal === 'leads') {
        score = '92%';
        strategy = 'High-Speed Lead Generation & Landing Page Testing';
        channels = 'Conversion Landing Page • Meta Ads • Retargeting • AI Chat Assistant';
      } else if (goal === 'brand') {
        score = '85%';
        strategy = 'Authority Branding & Multi-Platform Launch';
        channels = 'Brand Identity • Social Media Calendar • Promotional Reels • PR Assets';
      } else {
        score = '94%';
        strategy = 'Lean AI Growth & Automated Inbound Funnel';
        channels = 'Modern Website • AI Lead Routing • Search Engine Optimization (SEO)';
      }
    } else if (stage === 'growing') {
      if (goal === 'scale') {
        score = '96%';
        strategy = 'Omnichannel Growth Engine & Performance Scaling';
        channels = 'Google & Meta Ads • Full SEO Architecture • Video Production • AI Workflows';
      } else {
        score = '90%';
        strategy = 'Brand Optimization & Customer Retention Loop';
        channels = 'Custom Website UI/UX • Social Content System • Email Automation';
      }
    } else { // local business
      score = '95%';
      strategy = 'Local Dominance & High-Trust Inbound Acquisition';
      channels = 'Local SEO & Google Business • Targeted Meta Ads • Mobile-First Website • Video Reels';
    }

    outputScore.textContent = score;
    outputStrategy.textContent = strategy;
    outputChannels.textContent = channels;
  }

  stageSelect.addEventListener('change', calculateGrowthPlan);
  goalSelect.addEventListener('change', calculateGrowthPlan);
  budgetSelect.addEventListener('change', calculateGrowthPlan);

  calculateGrowthPlan();
}
