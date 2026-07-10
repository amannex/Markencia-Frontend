// ============================================================
// MARKENCIA — Blog Fallback Data & Mapping Service
// ============================================================

/**
 * Returns detailed, rich mock HTML content for fallback blog posts.
 * This simulates the WordPress REST API response body.
 */
export function getStaticPostContent(slug) {
  switch (slug) {
    case 'death-of-traditional-advertising':
      return `
        <h2>The Paradigm Shift in Digital Acquisition</h2>
        <p>For over a decade, digital media buying relied on a predictable loop: set up broad demographic targeting, craft a few variations of creative, let the platform optimize for a week, and manually adjust bids. It was slow, tedious, and highly dependent on the gut feelings of individual media buyers.</p>
        <p>Today, that loop is broken. The explosion of real-time user signals, combined with privacy-focused tracking changes (like iOS 14.5+), has made manual tweaking obsolete. Media buying is now an algorithmic game, and the future belongs to those who build with <strong>Predictive AI</strong>.</p>
        
        <h2>How Predictive AI Outperforms Human Media Buyers</h2>
        <p>Predictive AI does not look at what happened last week; it predicts what will happen in the next 10 seconds. Here is how it works under the hood:</p>
        <ul>
          <li><strong>Real-time Signal Processing:</strong> Evaluating thousands of browser, device, and behavioral cues simultaneously.</li>
          <li><strong>Dynamic Bid Adjustments:</strong> Modifying budget allocation instantly based on the likelihood of conversion.</li>
          <li><strong>Multi-Touch Attribution Mapping:</strong> Mapping complex user paths to understand the exact touchpoints that drive sales, rather than relying on last-click data.</li>
        </ul>
        <p>By leveraging machine learning models, businesses running campaigns through Markencia have seen an average conversion rate increase of <strong>3x</strong> and a <strong>40% drop in cost-per-acquisition (CPA)</strong>.</p>

        <blockquote>
          "The future of digital advertising is not about who can write the best copy or configure the best bidding rules; it is about who can feed the algorithm the cleanest data."
          <cite>— Alex Mercer, Founder of Markencia</cite>
        </blockquote>

        <h2>Feeding the Machine: First-Party Data & CAPI</h2>
        <p>To benefit from predictive AI, you must change how you send data to ad networks. Third-party cookies are dying. Instead, modern architectures rely on:</p>
        <h3>1. Conversions API (CAPI)</h3>
        <p>Direct server-to-server integration that bypasses browser ad blockers and network restrictions, ensuring Meta, Google, and TikTok receive 100% of conversion events.</p>
        <h3>2. First-Party Identity Resolution</h3>
        <p>Using secure customer profiles to match offline transactions back to online ad interactions, feeding the ad network's machine learning model with high-quality signals.</p>

        <h2>Summary: Adapt or Get Left Behind</h2>
        <p>Traditional agencies that charge hefty retainer fees to manually adjust bids are dinosaurs. The new standard is automated, AI-driven media buying that scales campaigns dynamically. By integrating WordPress backends directly with advanced Conversion APIs, you build an unstoppable revenue engine.</p>
      `;

    case 'conversion-rate-optimization-b2b-saas':
      return `
        <h2>The B2B SaaS Leaky Funnel</h2>
        <p>Most B2B SaaS companies focus 90% of their marketing budget on top-of-funnel traffic: SEO, Google Ads, and LinkedIn sponsorships. Yet, the average SaaS conversion rate from visitor to signup is less than 2%. You are spending thousands of dollars to bring users to a page, only to let 98% of them walk away.</p>
        <p>Conversion Rate Optimization (CRO) is the highest leverage activity in growth marketing. If you double your conversion rate from 2% to 4%, you double your pipeline with <em>zero</em> increase in ad spend. Here are three tested, high-impact CRO hacks you can deploy today.</p>

        <h2>1. Eliminate Multi-Field Friction in Signup Forms</h2>
        <p>Every additional field on your lead form reduces conversions by 10%. Yet, sales teams love asking for company size, job title, industry, and phone number. The solution is simple: <strong>implement dynamic enrichment</strong>.</p>
        <p>By asking only for a business email address, and using enrichment APIs (like Clearbit or ZoomInfo) in the background, you can capture full company profiles without forcing visitors to fill out a 10-field questionnaire.</p>

        <h2>2. Dynamic, Contextual Case Studies</h2>
        <p>Social proof only works when it is relevant. If a healthcare software buyer lands on your page, showing them a testimonial from a fintech startup does not build trust. You need to personalize what they see.</p>
        <p>Using basic IP lookup or search queries, dynamically swap out testimonials and case studies to match the visitor's industry. A healthcare prospect should see healthcare results; an e-commerce brand should see e-commerce metrics.</p>

        <blockquote>
          "Relevance is the ultimate conversion driver. If you can make a visitor feel like your software was custom-built for their exact niche, they will convert."
          <cite>— Sarah Jenkins, Chief Strategy Officer</cite>
        </blockquote>

        <h2>3. Optimize Core Web Vitals (Lighthouse Performance)</h2>
        <p>A delay of just 1 second in page load time can reduce conversions by 7%. If your landing page has a slow Largest Contentful Paint (LCP) score or heavy JS bundles, users will bounce before they even read your headline.</p>
        <p>For WordPress or headless setups, ensure you are lazy loading non-critical scripts, preloading hero media, and utilizing edge caching (like Cloudflare) to deliver sub-second response times worldwide.</p>
      `;

    case 'scaling-google-ads-cookieless':
      return `
        <h2>The New Privacy Era</h2>
        <p>With third-party cookies phased out and browser restrictions like Apple's ITP (Intelligent Tracking Prevention) tightening, the digital advertising landscape has changed forever. Tracking users across the web to serve target ads is no longer viable.</p>
        <p>However, this is not the end of Google Ads. It is simply a transition from tracking-based ad delivery to <strong>model-based ad delivery</strong>. Here is how you can continue to scale your campaigns in this cookieless environment.</p>

        <h2>Google Consent Mode v2: A Non-Negotiable Setup</h2>
        <p>Google Consent Mode v2 allows you to adjust how Google tags behave based on the consent status of your users. If a user rejects cookies, Google uses advanced behavioral modeling to fill in the data gaps, recovering up to 70% of lost conversions.</p>

        <h2>Leveraging Enhanced Conversions</h2>
        <p>Enhanced Conversions sends hashed, first-party data (like email addresses, names, and phone numbers) from your checkout or signup pages directly to Google in a secure, privacy-compliant manner. Google matches this data against logged-in Google accounts to attribute conversions that would have otherwise been lost.</p>

        <h2>Building a Server-Side GTM Container</h2>
        <p>Instead of loading multiple marketing tags (Google, Meta, LinkedIn) directly in the client's browser, load a single server-side Google Tag Manager (GTM) container. This architecture provides:</p>
        <ul>
          <li><strong>Faster Load Speeds:</strong> Less JavaScript running on the user's browser.</li>
          <li><strong>Data Control:</strong> You choose exactly what data is sent to which network.</li>
          <li><strong>Longer Cookie Lifetimes:</strong> Server-set cookies bypass browser limitations, maintaining attribution tracking for up to 30 days.</li>
        </ul>

        <blockquote>
          "First-party data is the new gold. The brands that invest in collecting, cleansing, and syncing their customer data directly with ad platforms will thrive in the cookieless future."
          <cite>— David Chen, Head of AI & Automation</cite>
        </blockquote>
      `;

    case 'building-reusable-content-engine':
      return `
        <h2>The Content Burnout Problem</h2>
        <p>Creating content is exhausting. Many marketing teams spend weeks writing a single, high-quality whitepaper, publish it once on their blog, share it on LinkedIn, and then let it collect dust. This is an inefficient use of creative capital.</p>
        <p>A premium marketing strategy relies on a <strong>Reusable Content Engine</strong>: turning one cornerstone piece of content into 40+ micro-assets across all social channels with minimal extra effort.</p>

        <h2>The Hub-and-Spoke Content Model</h2>
        <p>The core concept is simple: write one long-form, comprehensive piece of content (the "Hub") and break it down into smaller, platform-specific pieces (the "Spokes").</p>
        
        <h2>How to Turn 1 Article into 40 Assets</h2>
        <p>Here is the exact step-by-step framework we use at Markencia:</p>
        <ol>
          <li><strong>The Article (1 Hub):</strong> A 2,000-word deep dive on a specific industry topic.</li>
          <li><strong>The Newsletter (1 Spoke):</strong> A distilled, conversational summary sent to your email list.</li>
          <li><strong>LinkedIn Carousels (5 Spokes):</strong> Visual slideshows highlighting key charts or takeaways from the article.</li>
          <li><strong>X Threads (3 Spokes):</strong> Engaging, short-form text threads summarizing specific sections.</li>
          <li><strong>Video Scripts (3 Spokes):</strong> distil key sections into scripts for 60-second Reels, Shorts, or TikTok videos.</li>
        </ol>

        <blockquote>
          "Don't build more content; build more value from the content you already have."
          <cite>— Alex Mercer, Founder of Markencia</cite>
        </blockquote>

        <h2>Automating the Workflow with AI</h2>
        <p>By using custom AI models, you can automate the distillation process. Feed your finished blog article into a tailored prompt that automatically outputs social media copy, X threads, and newsletter versions in your brand's voice in seconds.</p>
      `;

    case 'scalefactor-story':
      return `
        <h2>The Background</h2>
        <p>ScaleFactor, an emerging B2B fintech startup, came to Markencia with a common problem: they had raised their seed round and built an incredible product, but their customer acquisition costs (CAC) were unsustainably high. They were stuck at $50k Monthly Recurring Revenue (MRR), relying mostly on founder-led sales and word-of-mouth.</p>
        <p>They needed a scalable, predictable way to acquire qualified customers and 5x their MRR to secure their Series A funding. Here is the case study of how we took them from $50k to $250k MRR in just 6 months.</p>

        <h2>The Strategy: High-Intent Paid Funnels</h2>
        <p>We realized ScaleFactor's target market (CFOs and finance directors) did not hang out on social media looking to buy software. They only searched for solutions when they had an active pain point (e.g., end-of-month reporting delays, audit preparation issues).</p>
        <p>Instead of broad awareness campaigns, we built a high-intent capture engine:</p>
        <ul>
          <li><strong>Google Search Capture:</strong> Targeting hyper-specific, long-tail terms like "automated month-end close software" or "real-time cash flow dashboard SaaS".</li>
          <li><strong>Interactive Demo Funnels:</strong> Replacing standard PDF whitepapers with a interactive product tour (using platforms like Navattic), allowing prospects to experience the software's value in under 2 minutes.</li>
          <li><strong>Predictive Meta Retargeting:</strong> Retargeting visitors who completed the interactive tour with case studies showing exactly how similar companies reduced close times by 5 days.</li>
        </ul>

        <blockquote>
          "In B2B SaaS, the best ad is a product that speaks for itself. By giving prospects immediate, frictionless access to a self-guided tour, we qualified leads before they even booked a call."
          <cite>— Sarah Jenkins, Chief Strategy Officer</cite>
        </blockquote>

        <h2>The Results</h2>
        <p>Within 180 days, the growth ecosystem delivered:</p>
        <ul>
          <li><strong>MRR Increase:</strong> Scaled MRR from $50,000 to $250,000.</li>
          <li><strong>CPA Reduction:</strong> Reduced Customer Acquisition Cost by 45%.</li>
          <li><strong>Lead Velocity:</strong> Increased demo booking volume by 320%.</li>
        </ul>
        <p>ScaleFactor successfully raised their $15M Series A shortly after, citing their predictable acquisition engine as a key driver of investor confidence.</p>
      `;

    default:
      return `<p>Full content will be dynamically fetched and rendered here from your WordPress posts.</p>`;
  }
}

/**
 * Maps a raw WordPress REST API post to the clean internal data structure.
 */
export function mapWordPressPost(wpPost) {
  const authorName = wpPost._embedded?.author?.[0]?.name || 'Markencia Team';
  const authorAvatar = wpPost._embedded?.author?.[0]?.avatar_urls?.['96'] || null;
  const authorBio = wpPost._embedded?.author?.[0]?.description || 'AI, Automation, and WordPress development specialists at Markencia.';
  
  const featuredImage = wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
  const imageAlt = wpPost._embedded?.['wp:featuredmedia']?.[0]?.alt_text || wpPost.title?.rendered || '';

  const terms = wpPost._embedded?.['wp:term']?.[0] || [];
  const category = terms.length > 0 ? terms[0].name : 'Insights';

  const textContent = wpPost.content?.rendered || '';
  const wordCount = textContent.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  return {
    id: wpPost.id,
    slug: wpPost.slug,
    title: wpPost.title?.rendered || '',
    excerpt: wpPost.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
    content: textContent,
    date: new Date(wpPost.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    author: authorName,
    authorAvatar,
    authorBio,
    readTime,
    category,
    featuredImage,
    imageAlt,
    gradient: 'linear-gradient(135deg, #003818, #001f0d)'
  };
}

/**
 * Maps a local static post by adding rich HTML content.
 */
export function mapStaticPost(staticPost) {
  return {
    ...staticPost,
    content: getStaticPostContent(staticPost.slug),
    authorAvatar: null,
    authorBio: 'AI, Automation, and WordPress development specialists at Markencia.',
    featuredImage: null,
    imageAlt: staticPost.title
  };
}
