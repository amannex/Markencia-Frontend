// ============================================================
// MARKENCIA STATIC DATA
// Content mirrored from WordPress PHP templates
// Will be replaced progressively with live WP REST API calls
// ============================================================

export const SITE_INFO = {
  name: 'Markencia',
  tagline: 'AI-Powered Creative Marketing Agency',
  email: 'contact@markencia.com',
  phone: '+91 6395543772',
  address: 'Noida, Uttar Pradesh, India',
  social: {
    instagram: 'https://www.instagram.com/_markencia/',
    youtube: 'https://www.youtube.com/channel/UCpokzJAQqnw9sL7KLwQqaKg',
    linkedin: 'https://www.linkedin.com/company/markencio/?viewAsMember=true',
    reddit: ' https://www.reddit.com/user/Markencia/',
    x: 'https://x.com/markencia_',
  },
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Our Works', path: '/our-works' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 1,
    icon: '🧠',
    title: 'AI-Driven Marketing',
    description: 'Predictive analytics and customer behavior insights to fuel campaigns that actually convert.',
  },
  {
    id: 2,
    icon: '✨',
    title: 'Creative Campaigns',
    description: 'Viral content strategies and potent brand storytelling that establish market authority.',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Automation Systems',
    description: 'Seamless lead generation funnels, CRM integrations, and WhatsApp/Email automation.',
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Performance Marketing',
    description: 'High-ROI paid advertising on Meta & Google paired with aggressive conversion optimization.',
  },
  {
    id: 5,
    icon: '💻',
    title: 'Website & Funnel Dev',
    description: 'Lightning-fast WordPress landing pages and automated sales funnels optimized for conversions.',
  },
  {
    id: 6,
    icon: '🎯',
    title: 'Industry AI Solutions',
    description: 'Custom-tailored AI marketing frameworks designed specifically for your unique niche.',
  },
];

export const SERVICES_DETAIL = [
  {
    id: 1,
    icon: '🧠',
    title: 'AI-Driven Marketing Strategy',
    highlightWord: 'Marketing Strategy',
    description: 'Stop guessing. We utilize predictive analytics and deep behavioral learning to build roadmaps that guarantee ROI. Our AI models analyze millions of data points to find your most profitable audience segments.',
    features: ['Predictive Market Analysis', 'Competitor Intelligence Tracking', 'Customer Journey Mapping', 'Automated Persona Building'],
    visual: 'Strategic Growth',
    visualClass: 'mk-visual-1',
    reverse: false,
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Performance Marketing',
    highlightWord: 'Marketing',
    description: 'We craft hyper-targeted ad campaigns on Meta, Google, and TikTok that convert indifferent scrollers into paying customers. Our AI bidding algorithms ensure you get the lowest Cost Per Acquisition possible.',
    features: ['Omnichannel Ad Buying', 'Algorithmic Budget Optimization', 'Dynamic Creative Testing', 'High-Intent Search Campaigns'],
    visual: 'ROI Maximization',
    visualClass: 'mk-visual-2',
    reverse: true,
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Sales Funnels & Web Dev',
    highlightWord: 'Web Dev',
    description: 'Your website shouldn\'t just look pretty; it needs to be a ruthless sales machine. We build lightning-fast, high-converting landing pages and automated funnels optimized for seamless user experiences.',
    features: ['Conversion-Optimized Landing Pages', 'Automated Webinar Funnels', 'A/B Tested User Interfaces', 'E-commerce Store Optimization'],
    visual: 'Conversion Architecture',
    visualClass: 'mk-visual-3',
    reverse: false,
  },
  {
    id: 4,
    icon: '🤖',
    title: 'Intelligent Systems',
    highlightWord: 'Systems',
    description: 'Reclaim your time while skyrocketing sales. We deploy intelligent chatbots, WhatsApp automation, and personalized email sequences that nurture leads and close deals 24/7 without human intervention.',
    features: ['WhatsApp & SMS Automation', 'AI Chatbots & Support Systems', 'Dynamic Email Nurture Sequences', 'CRM & API Integrations'],
    visual: '24/7 Autopilot',
    visualClass: 'mk-visual-4',
    reverse: true,
  },
];

export const STATS = [
  { value: '3x', label: 'Average ROI Increase' },
  { value: '40%', label: 'Lower Cost Per Lead' },
  { value: '24/7', label: 'Automated Nurturing' },
  { value: '10k+', label: 'Leads Generated' },
];

export const WHY_US_POINTS = [
  {
    title: 'Machine-Level Precision',
    body: 'Algorithms find your perfect buyers faster than humans ever could.',
  },
  {
    title: 'Always-On Automation',
    body: 'Wake up to booked appointments and sales generated while you sleep.',
  },
  {
    title: 'Data-Backed Creativity',
    body: "We don't guess. Every campaign is tested, proven, and optimized for ROI.",
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Deep Research',
    description: 'We analyze your market, dissect competitors, and identify exactly what your ideal customer desires.',
  },
  {
    number: '02',
    title: 'AI Strategy',
    description: 'We map out the funnels, position the offer, and craft compelling messaging that triggers action.',
  },
  {
    number: '03',
    title: 'Rapid Execution',
    description: 'Landing pages drop, ad campaigns launch, and automated follow-ups are deployed flawlessly.',
  },
  {
    number: '04',
    title: 'Scale & Optimize',
    description: 'We monitor data in real-time, kill losing variants, and aggressively scale the winning campaigns.',
  },
];

export const INDUSTRIES = [
  { icon: '💻', label: 'SaaS & Tech' },
  { icon: '🛍️', label: 'E-commerce' },
  { icon: '🏢', label: 'Real Estate' },
  { icon: '🩺', label: 'Healthcare' },
  { icon: '🎓', label: 'Education & Coaches' },
  { icon: '🏬', label: 'Local Businesses' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    stars: 5,
    review: '"Markencia completely re-engineered our sales funnel. Their automation systems cut our cost-per-acquisition by 40% in just two months. Absolute game-changers."',
    name: 'Sarah Jenkins',
    role: 'Founder, TechScale SaaS',
    initials: 'SJ',
  },
  {
    id: 2,
    stars: 5,
    review: '"Their creative ad campaigns brought us a massive influx of qualified leads. The AI-driven approach is miles ahead of any other agency we\'ve worked with."',
    name: 'David Chen',
    role: 'CMO, Elevate E-commerce',
    initials: 'DC',
  },
  {
    id: 3,
    stars: 5,
    review: '"I used to spend hours sending manual follow-ups. Markencia built a WhatsApp and Email engine that now closes deals for me while I sleep."',
    name: 'Elena Rodriguez',
    role: 'Real Estate Broker',
    initials: 'ER',
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Alex Mercer',
    role: 'Founder & CEO',
    bio: 'Former tech lead turned marketing polymath, pioneering AI-integrated growth models.',
    initials: 'AM',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Chief Strategy Officer',
    bio: 'Master of behavioral economics and high-converting funnel architecture.',
    initials: 'SJ',
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Head of AI & Automation',
    bio: 'Data science savant building our proprietary predictive ad-buying algorithms.',
    initials: 'DC',
  },
];

export const CORE_VALUES = [
  {
    number: '01',
    title: 'Radical Transparency',
    description: 'No vanity metrics. We report on what matters: pipeline, revenue, and ROI. If something isn\'t working, we tell you and we fix it.',
  },
  {
    number: '02',
    title: 'AI-First Mindset',
    description: 'We leverage automation and machine learning to achieve what previously took entire teams months to accomplish.',
  },
  {
    number: '03',
    title: 'Relentless Execution',
    description: 'Strategy is useless without precise execution. We move fast, break things, and optimize rapidly to find the winning formula.',
  },
];

export const ABOUT_STATS = [
  { value: '$50M+', label: 'Client Revenue Generated' },
  { value: '98%', label: 'Client Retention Rate' },
];

export const BLOG_CATEGORIES = ['All Articles', 'AI Automation', 'Growth Strategy', 'Paid Media', 'Case Studies'];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'death-of-traditional-advertising',
    category: 'AI Automation',
    title: 'The Death of Traditional Advertising: Why Predictive AI is the New Standard',
    excerpt: 'How machine learning algorithms are outperforming human media buyers by 300% and what it means for the future of your agency\'s paid acquisition engine.',
    author: 'Alex Mercer',
    date: 'Oct 24, 2024',
    readTime: '8 min read',
    featured: true,
    gradient: 'linear-gradient(135deg, #003818, #001f0d)',
  },
  {
    id: 2,
    slug: 'conversion-rate-optimization-b2b-saas',
    category: 'Growth Strategy',
    title: '3 Conversion Rate Optimization Hacks for B2B SaaS',
    excerpt: 'Stop losing high-intent traffic. Implement these three friction-reducing strategies to double your lead volume in 30 days.',
    author: 'Sarah Jenkins',
    date: 'Oct 18, 2024',
    readTime: '5 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #FFB400, #b37e00)',
  },
  {
    id: 3,
    slug: 'scaling-google-ads-cookieless',
    category: 'Paid Media',
    title: 'Scaling Google Ads in a Cookieless World',
    excerpt: 'Navigating the new privacy landscape with enhanced conversions and first-party data architecture.',
    author: 'David Chen',
    date: 'Oct 10, 2024',
    readTime: '6 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #0f172a, #334155)',
  },
  {
    id: 4,
    slug: 'building-reusable-content-engine',
    category: 'Growth Strategy',
    title: 'Building a Reusable Content Engine',
    excerpt: 'How to turn one cornerstone piece of content into 40+ micro-assets across all social channels with zero extra effort.',
    author: 'Alex Mercer',
    date: 'Oct 02, 2024',
    readTime: '4 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #475569, #cbd5e1)',
  },
  {
    id: 5,
    slug: 'scalefactor-story',
    category: 'Case Studies',
    title: 'From $50k to $250k MRR: The ScaleFactor Story',
    excerpt: 'A breakdown of the exact funnel and ad creative we used to 5x a fintech startup\'s revenue in just 6 months.',
    author: 'Sarah Jenkins',
    date: 'Sep 28, 2024',
    readTime: '10 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #003818, #FFB400)',
  },
];

export const FOOTER_LINKS = {
  capabilities: [
    { label: 'AI Marketing', path: '/services' },
    { label: 'Creative Campaigns', path: '/services' },
    { label: 'Sales Funnels', path: '/services' },
    { label: 'Lead Automation', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Careers', path: '/career' },
  ],
  contact: [
    { label: 'contact@markencia.com', path: 'mailto:contact@markencia.com', external: true },
    { label: '+91 6395543772', path: 'tel:+916395543772', external: true },
    { label: 'Help & FAQs', path: '/faqs' },
    { label: 'Documentations', path: '/documentations' },
  ],
};

export const CONTACT_INTERESTS = [
  { value: 'AI Marketing', label: 'AI Marketing Strategy' },
  { value: 'Lead Gen', label: 'Automated Lead Generation' },
  { value: 'Web Design', label: 'Web & Funnel Design' },
  { value: 'Other', label: 'Other / General Inquiry' },
];
