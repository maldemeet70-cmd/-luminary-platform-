// ====== DATA ======
const products = [
  {id:1,type:'ebook',emoji:'📖',title:'The Creator Economy Blueprint',desc:'Master the art of monetising your knowledge in 2026.',price:29,old:49,badge:'hot',bg:'ebook'},
  {id:2,type:'ebook',emoji:'💡',title:'AI Marketing Mastery Guide',desc:'Use AI tools to 10x your marketing campaigns effortlessly.',price:19,old:39,badge:'sale',bg:'ebook'},
  {id:3,type:'music',emoji:'🎵',title:'Lo-Fi Study Beats Pack',desc:'24 premium lo-fi tracks — royalty-free forever.',price:15,old:25,badge:'new',bg:'music'},
  {id:4,type:'music',emoji:'🎸',title:'Epic Cinematic Soundscapes',desc:'12 orchestral tracks perfect for videos and reels.',price:35,old:59,badge:'hot',bg:'music'},
  {id:5,type:'photo',emoji:'🖼️',title:'Urban Aesthetic Photo Collage',desc:'200 high-res urban photos — perfect for branding.',price:12,old:24,badge:'sale',bg:'photo'},
  {id:6,type:'photo',emoji:'🌅',title:'Golden Hour Presets + Photos',desc:'50 Lightroom presets and 150 golden-hour shots.',price:22,old:40,badge:'new',bg:'photo'},
  {id:7,type:'video',emoji:'🎬',title:'Motion Graphics Pack Vol.1',desc:'50 premium AE & Premiere Pro motion graphics.',price:45,old:80,badge:'hot',bg:'video'},
  {id:8,type:'video',emoji:'✨',title:'Social Media Video Templates',desc:'30 editable video templates for every platform.',price:28,old:50,badge:'new',bg:'video'},
];

const blogPosts = [
  {cat:'eBook Launch',emoji:'📖',bg:'mkt1',title:'How I Made $10k From My First eBook in 30 Days',desc:'A step-by-step breakdown of the exact strategy that turned a Google Doc into a 4-figure product.',author:'Sarah M.',time:'8 min read'},
  {cat:'Music Release',emoji:'🎵',bg:'mkt2',title:'The 5-Step Formula to Selling Music Online Without a Label',desc:'Independent artists are making bank without labels. Here is the playbook they are using on Luminary.',author:'James O.',time:'6 min read'},
  {cat:'Case Study',emoji:'🚀',bg:'mkt3',title:'From Zero to 1,000 Customers: The Luminary Effect',desc:'Three creators share how they built thriving digital businesses from scratch using one platform.',author:'Priya S.',time:'12 min read'},
];

const plans = [
  {name:'Starter',price:0,period:'Free forever',features:['1 Digital Product','Basic Analytics','AI Chatbot (50 msgs/mo)','Community Access','✗ Custom Storefront','✗ Priority Support','✗ Advanced Marketing'],btn:'Get Started',featured:false},
  {name:'Pro',price:29,period:'per month',features:['Unlimited Products','Advanced Analytics','AI Chatbot (Unlimited)','Custom Storefront','Email Marketing Suite','Priority Support','✗ White-label'],btn:'Start Free Trial',featured:true},
  {name:'Enterprise',price:99,period:'per month',features:['Everything in Pro','Team Collaboration','White-label Platform','Dedicated Manager','Custom Integrations','SLA 99.9% Uptime','Revenue Share Program'],btn:'Contact Sales',featured:false},
];

const metrics = [
  {label:'Total Revenue',value:'$48,290',num:'$48,290',change:'+23.4% this month',color:'var(--accent)'},
  {label:'Products Sold',value:'1,847',num:'1847',change:'+15.2% this month',color:'var(--accent2)'},
  {label:'Active Users',value:'3,291',num:'3291',change:'+31.8% this month',color:'var(--pink)'},
  {label:'Conversion Rate',value:'4.7%',num:'4.7%',change:'+0.8% this month',color:'var(--green)'},
];

const chartData = [
  {month:'Sep',val:60},{month:'Oct',val:75},{month:'Nov',val:55},{month:'Dec',val:90},
  {month:'Jan',val:80},{month:'Feb',val:95},{month:'Mar',val:85},{month:'Apr',val:100},
];

const rewards = [
  {icon:'🎁',title:'Free eBook',desc:'Redeem for any $19 eBook',pts:200},
  {icon:'🎵',title:'Music Pack',desc:'Unlock a lo-fi music bundle',pts:350},
  {icon:'⭐',title:'Pro Month Free',desc:'One month Pro subscription',pts:750},
];

const chatResponses = {
  'pricing':['Our plans start at $0 forever! Pro is $29/mo with unlimited products and advanced analytics. Enterprise is $99/mo with team features. 🚀','All paid plans include a 14-day free trial — no credit card needed!'],
  'ebook':['We have 2 amazing eBooks: "Creator Economy Blueprint" ($29) and "AI Marketing Mastery" ($19). Both are instant downloads! 📖','Check out our Store section to browse all eBooks and get 10% off with code LUMINARY10!'],
  'music':['We offer royalty-free music packs! "Lo-Fi Study Beats" ($15) and "Epic Cinematic Soundscapes" ($35). Perfect for content creators! 🎵'],
  'photo':['Our photo packs include urban aesthetics and golden hour presets. Prices start at just $12! 🖼️'],
  'video':['Check out our Motion Graphics Pack ($45) and Social Media Video Templates ($28). Perfect for any creator! 🎬'],
  'support':['I am here 24/7 to help! You can also email us at hello@luminary.app or check our docs. 💙'],
  'refund':['We offer a 30-day money-back guarantee on all products. No questions asked! Just email support@luminary.app 😊'],
  'features':['Luminary includes: Content Studio, Digital Storefront, AI Marketing, Analytics Dashboard, Rewards System, and this chatbot! 🌟'],
  'recommend':['Based on popular demand, I recommend: 📖 Creator Economy Blueprint for beginners, 🎵 Lo-Fi Beats for content makers, 🎬 Motion Graphics for video creators!'],
  'default':['Great question! I am here to help you find the perfect product or plan. Try asking about pricing, products, features, or recommendations! 😊','I can help you with: pricing plans, product recommendations, refund policy, and platform features. What would you like to know?'],
};

const suggestions = ['💰 Pricing','📖 eBooks','🎵 Music','🎬 Videos','🌟 Features','🎁 Recommend'];

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  renderProducts('all');
  renderBlog();
  renderPricing();
  renderMetrics();
  renderChart();
  renderRewards();
  initQR();
  initMarquee();
  animateCounters();
  initScrollFade();
  initChatbot();
  setTimeout(showRewardToast, 4000);
});

// ====== PARTICLES ======
function initParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 10 + 's';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.width = p.style.height = (1 + Math.random() * 3) + 'px';
    container.appendChild(p);
  }
}

// ====== MARQUEE ======
function initMarquee() {
  const items = ['✦ Content Creation','✦ AI Marketing','✦ Digital Store','✦ Analytics','✦ Gamification','✦ eBooks','✦ Music','✦ Photo Packs','✦ Video Content','✦ Subscriptions'];
  const track = document.getElementById('marqueeTrack');
  const doubled = [...items, ...items];
  track.innerHTML = doubled.map(i => `<span class="marquee-item">${i}</span>`).join('');
}

// ====== COUNTER ANIMATION ======
function animateCounters() {
  animateNum('countUsers', 0, 12847, 2000, ',');
  animateNum('countProducts', 0, 89420, 2000, ',');
  animateNum('countRevenue', 0, 4200000, 2000, '$', 'M');
}

function animateNum(id, from, to, duration, prefix='', suffix='') {
  const el = document.getElementById(id);
  if (!el) return;
  const step = (to - from) / (duration / 16);
  let current = from;
  const timer = setInterval(() => {
    current = Math.min(current + step, to);
    if (suffix === 'M') {
      el.textContent = prefix + (current / 1000000).toFixed(1) + 'M+';
    } else {
      el.textContent = prefix + Math.floor(current).toLocaleString() + '+';
    }
    if (current >= to) clearInterval(timer);
  }, 16);
}

// ====== SCROLL FADE ======
function initScrollFade() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: 0.1});
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ====== PRODUCTS ======
function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img ${p.bg}">
        <span style="font-size:3.5rem;position:relative;z-index:2">${p.emoji}</span>
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>` : ''}
      </div>
      <div class="product-info">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="price-row">
          <div><span class="price">$${p.price}</span><span class="price-old">$${p.old}</span></div>
          <button class="btn-buy" onclick="buyProduct(${p.id})">Buy Now</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(type, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(type);
}

function buyProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('purchaseEmoji').textContent = p.emoji;
  document.getElementById('purchaseTitle').textContent = p.title;
  document.getElementById('purchasePrice').textContent = '$' + p.price;
  openModal('purchaseModal');
  addPoints(50);
}

// ====== BLOG ======
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  grid.innerHTML = blogPosts.map(b => `
    <div class="blog-card">
      <div class="blog-img ${b.bg}"><span style="font-size:3rem">${b.emoji}</span></div>
      <div class="blog-body">
        <div class="blog-tag">${b.cat}</div>
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <div class="blog-meta"><span>✍️ ${b.author}</span><span>·</span><span>⏱ ${b.time}</span></div>
      </div>
    </div>
  `).join('');
}

// ====== PRICING ======
function renderPricing() {
  const grid = document.getElementById('pricingGrid');
  grid.innerHTML = plans.map(p => `
    <div class="pricing-card ${p.featured ? 'featured' : ''}">
      ${p.featured ? '<div class="pricing-badge">⭐ Most Popular</div>' : ''}
      <div class="plan-name">${p.name}</div>
      <div class="plan-price">${p.price === 0 ? '<sup></sup>Free' : `<sup>$</sup>${p.price}`}</div>
      <div class="plan-period">${p.period}</div>
      <ul class="plan-features">
        ${p.features.map(f => `<li class="${f.startsWith('✗') ? 'no' : ''}">${f.replace('✗ ','')}</li>`).join('')}
      </ul>
      <button class="btn ${p.featured ? 'btn-primary' : 'btn-ghost'}" style="width:100%;padding:.8rem;border-radius:10px;font-size:.9rem" onclick="openModal('signupModal')">${p.btn}</button>
    </div>
  `).join('');
}

// ====== ANALYTICS ======
function renderMetrics() {
  const grid = document.getElementById('metricsGrid');
  grid.innerHTML = metrics.map(m => `
    <div class="metric-card">
      <div class="metric-num" style="color:${m.color}">${m.value}</div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-change">▲ ${m.change}</div>
    </div>
  `).join('');
}

function renderChart() {
  const bars = document.getElementById('chartBars');
  const max = Math.max(...chartData.map(d => d.val));
  bars.innerHTML = chartData.map(d => `
    <div class="bar" style="height:${(d.val/max)*100}%" title="$${d.val}k">
      <span class="bar-label">${d.month}</span>
    </div>
  `).join('');
}

// ====== REWARDS / GAMIFICATION ======
let userPoints = 425;

function renderRewards() {
  const display = document.getElementById('pointsDisplay');
  const fill = document.getElementById('progressFill');
  const label = document.getElementById('progressLabel');
  const list = document.getElementById('rewardsList');

  animateNum('pointsDisplay', 0, userPoints, 1500);
  fill.style.width = Math.min((userPoints / 1000) * 100, 100) + '%';
  label.textContent = `${userPoints} / 1000 pts to Gold`;

  list.innerHTML = rewards.map(r => `
    <div class="reward-item">
      <div class="reward-icon">${r.icon}</div>
      <div class="reward-info">
        <h4>${r.title}</h4>
        <p>${r.pts} pts needed</p>
      </div>
      <button class="btn-claim" onclick="claimReward('${r.title}',${r.pts})" ${userPoints >= r.pts ? '' : 'disabled style="opacity:.4;cursor:not-allowed"'}>
        ${userPoints >= r.pts ? 'Claim' : `${r.pts - userPoints} more`}
      </button>
    </div>
  `).join('');
}

function addPoints(pts) {
  userPoints += pts;
  renderRewards();
  showToast(`+${pts} Luminary Points earned! 🎮`);
}

function claimReward(title, pts) {
  if (userPoints >= pts) {
    userPoints -= pts;
    renderRewards();
    showToast(`🎁 "${title}" reward claimed! Check your email.`);
  }
}

function showRewardToast() {
  showToast('🎮 You have 425 Luminary Points! Scroll to Analytics to redeem.');
}

// ====== QR CODE ======
function initQR() {
  new QRCode(document.getElementById('qrContainer'), {
    text: window.location.href || 'https://luminary.app',
    width: 104,
    height: 104,
    colorDark: '#7c3aed',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
}

function downloadCard() {
  const canvas = document.querySelector('#qrContainer canvas');
  if (!canvas) { showToast('QR code ready to share!'); return; }
  const link = document.createElement('a');
  link.download = 'luminary-business-card.png';
  link.href = canvas.toDataURL();
  link.click();
  showToast('Business card downloaded! 📇');
}

// ====== VIDEO PROMO ======
function playPromo() {
  document.getElementById('promoVideo').style.display = 'block';
  document.getElementById('playBtn').style.display = 'none';
}

// ====== FEEDBACK ======
function submitFeedback(e) {
  e.preventDefault();
  const name = document.getElementById('fbName').value;
  const rating = document.querySelector('input[name="rating"]:checked');
  if (!rating) { showToast('Please select a star rating! ⭐'); return; }
  showToast(`Thank you, ${name}! Your ${rating.value}-star feedback was submitted. 🙏`);
  addPoints(100);
  e.target.reset();
}

// ====== CHATBOT ======
let chatOpen = false;
let chatInitialized = false;

function initChatbot() {
  const sugg = document.getElementById('chatSuggestions');
  sugg.innerHTML = suggestions.map(s => `<span class="chip" onclick="sendSuggestion('${s}')">${s}</span>`).join('');
}

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chatPanel');
  panel.classList.toggle('open', chatOpen);
  if (chatOpen && !chatInitialized) {
    chatInitialized = true;
    setTimeout(() => addBotMsg("Hi! I'm Luminary AI 🤖 — your personal guide to the platform. How can I help you today?"), 300);
    setTimeout(() => addBotMsg("I can help with 💰 pricing, 📦 products, 🎁 recommendations, or any questions you have!"), 1200);
  }
}

function sendSuggestion(text) {
  document.getElementById('chatInput').value = text.replace(/[^\w\s]/g,'').trim();
  sendMessage();
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  addUserMsg(text);
  input.value = '';
  const key = Object.keys(chatResponses).find(k => text.toLowerCase().includes(k));
  const responses = chatResponses[key] || chatResponses['default'];
  const reply = responses[Math.floor(Math.random() * responses.length)];
  setTimeout(() => {
    addBotMsg(reply);
    addPoints(5);
  }, 700 + Math.random() * 500);
}

function addBotMsg(text) {
  const div = document.createElement('div');
  div.className = 'msg msg-bot';
  div.textContent = text;
  const msgs = document.getElementById('chatMessages');
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMsg(text) {
  const div = document.createElement('div');
  div.className = 'msg msg-user';
  div.textContent = text;
  const msgs = document.getElementById('chatMessages');
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// ====== MODALS ======
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

function loginUser() {
  closeModal('loginModal');
  showToast('Welcome back! Signed in successfully. 🎉');
  addPoints(25);
}

function signupUser() {
  closeModal('signupModal');
  showToast('Account created! 14-day free trial started. 🚀');
  addPoints(250);
}

function completePurchase() {
  closeModal('purchaseModal');
  showToast('Purchase complete! Check your email for the download link. 📧');
  addPoints(100);
}

function formatCard(input) {
  let v = input.value.replace(/\D/g,'').substring(0,16);
  input.value = v.replace(/(.{4})/g,'$1 ').trim();
}

// ====== TOAST ======
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ====== NAV SCROLL ======
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 50 ? 'rgba(6,7,15,0.97)' : 'rgba(6,7,15,0.85)';
});
