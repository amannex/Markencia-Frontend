export const CMS_MIGRATION_DATA = {
  slug: 'cms-migration',
  alternateSlugs: [],
  meta: {
    title: 'Enterprise CMS & Platform Migration Services | Markencia',
    description:
      'Risk-free, zero-downtime CMS migration for enterprise websites. We migrate Drupal, Joomla, Wix, Webflow, and legacy platforms to modern architectures with 100% SEO link equity preservation.',
    keywords: [
      'CMS migration services',
      'Drupal to WordPress migration',
      'Webflow to WordPress migration',
      'Wix to WordPress migration',
      'website migration agency',
      'SEO migration audit',
      'zero downtime CMS transfer',
      'CMS migration India',
    ],
    canonical: 'https://markencia.com/services/cms-migration',
  },
  hero: {
    badge: 'Risk-Free Platform Evolution',
    title: 'Zero-Downtime Enterprise CMS & Platform Migration',
    titleHighlight: 'Preserving 100% SEO Authority',
    subtitle:
      'Migrate your complex website, blog archives, and e-commerce stores from legacy or restrictive platforms (Drupal, Joomla, Wix, Squarespace, Webflow) to high-performance modern architectures with zero data loss, zero revenue downtime, and complete search ranking protection.',
    primaryCta: {
      label: 'Request CMS Migration Feasibility Audit',
      href: '/contact?service=cms-migration',
    },
    secondaryCta: {
      label: 'Inspect Migration Case Studies',
      href: '#examples',
    },
    metrics: [
      { value: '100%', label: 'SEO link equity preservation' },
      { value: '0 sec', label: 'Unplanned downtime during DNS cutover' },
      { value: '50k+', label: 'Articles & relational records migrated' },
      { value: '0', label: 'Broken 404 links or missing media' },
    ],
    trustText: 'Trusted by media groups, educational institutions, SaaS scale-ups, and corporate enterprises.',
  },

  // 1. WHAT IS IT?
  whatIsIt: {
    eyebrow: 'System Definition',
    heading: 'What Is Enterprise CMS Migration?',
    description:
      'A CMS migration is far more than copying and pasting pages. It is a complex data engineering and digital transformation process that moves your content, relational databases, user accounts, and media assets into a modern infrastructure.',
    paragraphs: [
      'Organizations outgrow proprietary website builders (like Wix, Squarespace, and Webflow) or find themselves stranded on obsolete open-source platforms (such as Drupal 7/8 or Joomla) that have reached end-of-life. These legacy systems restrict scalability, enforce expensive hosting fees, and present severe security risks.',
      'Markencia executes structured, automated ETL (Extract, Transform, Load) migrations. We write custom extraction scripts, map complex relational taxonomy schemas, optimize assets for modern WebP formats, and build rigorous 301 redirection matrices. Your new website launches with clean modern code, improved Core Web Vitals, and zero loss in hard-earned search rankings.',
    ],
    pillars: [
      {
        icon: '🔄',
        title: 'Automated ETL Extraction',
        desc: 'Custom Python and Node.js ingestion scripts that extract raw databases, author relationships, metadata, and media libraries with 100% fidelity.',
      },
      {
        icon: '📈',
        title: '100% SEO Link Equity Defense',
        desc: 'Exhaustive pre-and-post migration crawler audits, regex 301 redirect mapping, and canonical tag preservation to prevent search traffic drops.',
      },
      {
        icon: '🗄️',
        title: 'Relational Schema Normalization',
        desc: 'Transforming messy legacy databases into semantic, future-proof custom post types, structured fields, and modern category hierarchies.',
      },
      {
        icon: '⚡',
        title: 'Zero-Downtime DNS Cutover',
        desc: 'Parallel staging environments and low-TTL DNS switching ensure your customers and checkout funnels never experience a second of downtime.',
      },
    ],
  },

  // 2. WHO NEEDS IT?
  whoNeedsIt: {
    eyebrow: 'Target Audience & Fit',
    heading: 'Who Needs Enterprise CMS Migration?',
    description:
      'We help businesses transition out of fragile, expensive, or outdated systems into modern, scalable platforms.',
    profiles: [
      {
        tag: 'Companies on Proprietary SaaS (Wix, Squarespace, HubSpot CMS)',
        title: 'Trapped on Expensive, Inflexible Builders',
        symptoms: [
          'Exorbitant monthly subscription costs that scale punitively with traffic or form submissions.',
          'Inability to write custom server code, integrate third-party APIs, or implement advanced database logic.',
          'Sluggish page load speeds caused by un-optimizable proprietary SaaS codebases.',
        ],
        solution: 'Migration to open-source modern WordPress or Headless Next.js for complete ownership and zero licensing fees.',
      },
      {
        tag: 'Enterprises on End-of-Life Drupal 7/8 or Joomla',
        title: 'Security Vulnerabilities & Legacy Tech Debt',
        symptoms: [
          'Drupal 7 end-of-life status creating critical compliance, PCI-DSS, and security liabilities.',
          'Finding experienced developers to maintain outdated legacy PHP versions is increasingly expensive and rare.',
          'Content editing interfaces are intimidating, slow, and frustrating for internal marketing teams.',
        ],
        solution: 'Automated database extraction and modern CMS re-platforming with intuitive block editor tooling.',
      },
      {
        tag: 'High-Growth Brands Outgrowing Webflow',
        title: 'CMS Item Caps & Database Limits',
        symptoms: [
          'Hitting Webflow’s hard limit of 10,000 or 20,000 CMS items, preventing organic content scaling.',
          'Need complex user roles, dynamic gated memberships, or multi-language localization.',
          'Astronomical tier pricing and slow dynamic collection rendering on large datasets.',
        ],
        solution: 'Seamless migration of Webflow collections and assets to an unlimited, high-speed custom CMS.',
      },
      {
        tag: 'Multi-Brand Consolidations & Mergers',
        title: 'Fragmented Subdomains & Disparate Platforms',
        symptoms: [
          'Operating 4 different websites across 3 separate CMSs following acquisitions or regional expansion.',
          'Fragmented analytics, disjointed customer journeys, and multiple hosting bills.',
          'Brand inconsistency and duplicate operational maintenance overhead.',
        ],
        solution: 'Consolidation of disparate websites into a single, unified multisite platform with centralized governance.',
      },
    ],
  },

  // 3. WHAT PROBLEMS DOES IT SOLVE?
  problemsSolved: {
    eyebrow: 'The Core Bottlenecks',
    heading: 'The Migration Traps We Protect You From',
    description:
      'Amateur migrations frequently destroy search rankings and lose customer data. Here is how Markencia’s engineering prevents catastrophe.',
    comparisons: [
      {
        problem: 'The Dreaded "SEO Traffic Cliff"',
        problemDesc: 'Amateur migrations change URL structures without 301 redirects, resulting in 404 errors, lost backlinks, and 50%+ organic traffic drops.',
        solution: 'Mathematical 1:1 Redirect Mapping',
        solutionDesc: 'We crawl 100% of legacy URLs with Screaming Frog and map every link to its exact modern counterpart with strict 301 permanent redirects.',
      },
      {
        problem: 'Data Corruption & Missing Media Assets',
        problemDesc: 'Exporting raw XML or CSV files often corrupts author attributions, broken image embed links, and custom taxonomy tags.',
        solution: 'Custom Programmatic ETL Pipelines',
        solutionDesc: 'Custom Node.js/Python scripts extract, sanitize HTML entities, download and convert images to WebP, and verify database integrity.',
      },
      {
        problem: 'Costly E-Commerce Business Downtime',
        problemDesc: 'Taking down the live website for hours during the migration, causing lost orders, broken carts, and customer frustration.',
        solution: 'Parallel Staging & Instant Cutover',
        solutionDesc: 'Your existing site remains 100% live while the new site is built on staging. A final delta sync and low-TTL DNS switch ensure zero downtime.',
      },
      {
        problem: 'Mangled Mobile Layouts & Broken Formatting',
        problemDesc: 'Migrated blog articles looking deformed due to legacy inline styles, font tags, and broken shortcodes from old themes.',
        solution: 'Automated HTML Sanitization',
        solutionDesc: 'We run regex parsers that strip obsolete inline CSS, fix broken iframe embeds, and convert legacy markup into clean responsive blocks.',
      },
    ],
  },

  // 4. WHAT DOES MARKENCIA ACTUALLY BUILD?
  whatWeBuild: {
    eyebrow: 'Concrete Deliverables',
    heading: 'What Does Markencia Actually Build?',
    description:
      'Our migration service is an end-to-end engineering operation including custom software scripts, redirect engines, and staging audits.',
    deliverables: [
      {
        number: '01',
        title: 'Automated ETL Data Extraction & Normalization Scripts',
        description:
          'Bespoke Python or Node.js migration engines that connect to your legacy database or APIs, pull every post, page, user, custom field, and comment, clean out junk markup, and map them into the new schema.',
        features: [
          'Handles 100,000+ relational database rows effortlessly',
          'Sanitizes outdated HTML4 inline styles and corrupt characters',
          'Preserves original publishing timestamps and author attributions',
          'Converts proprietary page-builder shortcodes into native blocks',
        ],
      },
      {
        number: '02',
        title: 'Exhaustive 301 Redirect & SEO Link Equity Engine',
        description:
          'A mathematically audited redirect mapping architecture. We extract all indexed URLs from Google Search Console and legacy sitemaps, constructing regex rules and 1-to-1 redirect tables deployed at the Cloudflare edge.',
        features: [
          'Zero 404 errors on legacy indexed backlinks',
          'Cloudflare edge redirects for < 20ms server response',
          'Automatic lowercase normalization and trailing-slash matching',
          'Full schema markup migration (Article, FAQ, Breadcrumb, Product)',
        ],
      },
      {
        number: '03',
        title: 'High-Resolution Media & Asset Ingestion Pipeline',
        description:
          'We download all hosted images, PDFs, videos, and attachments from your legacy host, optimize them using modern WebP/AVIF compression, update all embedded image URLs, and offload them to an enterprise CDN.',
        features: [
          'Automated WebP conversion reducing asset weight by ~65%',
          'Re-links internal image URLs inside post content automatically',
          'Preserves original image alt text and metadata for image SEO',
          'Hosted on Cloudflare R2 / AWS S3 for lightning-fast delivery',
        ],
      },
      {
        number: '04',
        title: 'Modernized Content Model & Custom Field Architecture',
        description:
          'We don’t just copy your old messy setup—we clean it up. We design an intuitive, scalable content model using Advanced Custom Fields (ACF Pro) or native Custom Post Types tailored to how your team actually works today.',
        features: [
          'Modular custom fields with input validation guardrails',
          'Clean taxonomy hierarchy (Categories, Tags, Custom Taxonomies)',
          'Role-based permissions for writers, editors, and admins',
          'Support for multilingual content localization (WPML / Polylang)',
        ],
      },
      {
        number: '05',
        title: 'Side-by-Side Automated Staging & Crawler Verification Suite',
        description:
          'A complete staging testing environment where we run automated crawling comparisons between your legacy and new site. We verify URL parity, title tags, meta descriptions, OpenGraph tags, and canonical consistency.',
        features: [
          'Screaming Frog crawl parity comparison reports',
          'Side-by-side visual regression testing across screen sizes',
          'Automated form submission and lead webhook validation',
          'E-commerce test transactions and webhook confirmation runs',
        ],
      },
    ],
  },

  // 5. PROCESS
  process: {
    eyebrow: 'Our Methodology',
    heading: 'The 6-Phase Zero-Loss Migration Roadmap',
    description:
      'We manage every phase with military precision so you can transition platforms without stress, downtime, or lost revenue.',
    steps: [
      {
        step: '01',
        title: 'Comprehensive SEO & Database Discovery',
        description:
          'We crawl 100% of your legacy site, extract top-ranking keyword pages from Google Search Console, document custom post types, and analyze database schemas.',
        output: 'Complete Legacy URL Inventory & SEO Asset Audit',
      },
      {
        step: '02',
        title: 'Target Architecture & Schema Design',
        description:
          'We configure the target CMS, design the new database schema, set up custom post types, and establish brand design tokens.',
        output: 'Modern Schema Blueprint & Staging Environment',
      },
      {
        step: '03',
        title: 'Automated ETL Extraction & Staging Import',
        description:
          'Our custom migration scripts extract, sanitize, and import content, authors, taxonomies, and media assets into the staging environment.',
        output: 'Full Content Staging Build with Verified Relational Data',
      },
      {
        step: '04',
        title: 'Crawler Parity Audit & 301 Redirect Matrix',
        description:
          'We run deep crawler simulations to verify every legacy URL maps cleanly to the new structure with zero broken links or orphan pages.',
        output: 'Complete 301 Redirect Ruleset & Crawler Parity Verification',
      },
      {
        step: '05',
        title: 'Delta Synchronization & Zero-Downtime DNS Cutover',
        description:
          'We run a final delta sync to capture any new articles or orders published on the live site, lower DNS TTL, and execute a seamless cutover during off-peak hours.',
        output: 'Live Zero-Downtime Production Launch',
      },
      {
        step: '06',
        title: '30-Day Post-Launch SEO Surveillance & Indexation Monitoring',
        description:
          'Our SEO engineers actively monitor Google Search Console, tracking indexation rates, server response codes, and ranking stability daily for 30 days.',
        output: 'Post-Migration Ranking Stability & Health Report',
      },
    ],
  },

  // 6. EXAMPLES / CASE STUDIES
  examples: {
    eyebrow: 'Proven Case Scenarios',
    heading: 'Real-World CMS Migration Deployments',
    description:
      'See how Markencia successfully migrated complex enterprise websites with zero data loss and increased organic search performance.',
    cases: [
      {
        client: 'Enterprise HR Tech Platform',
        badge: 'Drupal 7 to Custom Modern CMS',
        challenge:
          'Stranded on an aging Drupal 7 install with 6,200+ blog articles, whitepapers, and customer case studies. Faced urgent security compliance deadlines and expensive developer maintenance.',
        solution:
          'Engineered a custom Python database ETL pipeline that extracted all nodes, taxonomy terms, and PDF assets into a modern WordPress Gutenberg architecture with edge Cloudflare 301 redirects.',
        results: [
          'Zero 404 errors across 6,200+ legacy URLs',
          'Organic Google search impressions grew +31% within 60 days',
          'Content publishing velocity tripled for the marketing team',
        ],
      },
      {
        client: 'High-Growth D2C Wellness Brand',
        badge: 'Wix to Scalable WooCommerce',
        challenge:
          'Outgrew Wix due to slow checkout loading speeds (6.1s), restrictive payment gateway rules, and inability to integrate with their regional warehouse logistics ERP.',
        solution:
          'Extracted 1,400 product SKUs, customer purchase records, and reviews. Migrated to custom WooCommerce with Razorpay and Delhivery automated fulfillment webhooks.',
        results: [
          'Checkout load time decreased from 6.1s to 850ms',
          'Online store conversion rate surged by +38%',
          'Saved over $9,000 annually on third-party SaaS plugin fees',
        ],
      },
      {
        client: 'B2B Renewable Energy Consultancy',
        badge: 'Webflow to WordPress Headless',
        challenge:
          'Hit Webflow’s hard 10,000 CMS item ceiling with their knowledge library, forcing them onto enterprise tiers costing over $18,000/year while still restricting custom features.',
        solution:
          'Migrated all Webflow collections to a custom WordPress backend coupled with a Next.js frontend, unlocking unlimited records, custom search filtering, and self-hosted speed.',
        results: [
          'Overcame CMS item limitations with 25,000+ new records indexed',
          'Eliminated $18k/year Webflow subscription overhead',
          'Page load speed improved by 62%',
        ],
      },
    ],
  },

  // 7. TECHNOLOGIES
  technologies: {
    eyebrow: 'Technology Ecosystem',
    heading: 'The Migration Engineering Stack We Deploy',
    description:
      'We leverage robust data extraction tools, modern crawler suites, and cloud edge infrastructure.',
    categories: [
      {
        name: 'Extraction & Data Pipelines',
        items: ['Python 3 & Pandas', 'Node.js & Cheerio', 'WP All Import Pro', 'SQL Data Mappings', 'REST & GraphQL Ingestion'],
      },
      {
        name: 'Legacy Platforms We Migrate From',
        items: ['Drupal 7, 8 & 9', 'Joomla', 'Webflow', 'Wix & Squarespace', 'HubSpot CMS', 'Magento 1/2', 'Legacy Monolithic WP'],
      },
      {
        name: 'Target CMS Platforms',
        items: ['Modern WordPress (Gutenberg)', 'Headless WordPress + Next.js', 'Sanity / Strapi', 'WooCommerce', 'Shopify Plus'],
      },
      {
        name: 'SEO Crawling & Parity Auditing',
        items: ['Screaming Frog SEO Spider', 'Google Search Console API', 'Ahrefs', 'Sitebulb Crawler', 'DeepCrawl'],
      },
      {
        name: 'Edge Redirection & Infrastructure',
        items: ['Cloudflare Edge Workers', 'Nginx 301 Rulesets', 'AWS S3 & CloudFront', 'Cloudflare R2 Asset Storage'],
      },
    ],
  },

  // 8. FAQS
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Common Questions About CMS Migration',
    items: [
      {
        q: 'Will our website lose organic Google rankings or SEO traffic during the migration?',
        a: 'When executed properly with Markencia, you will not lose SEO traffic. In fact, most of our clients see an increase in search rankings post-launch due to improved page speed and cleaner schema markup. We achieve this by crawling 100% of legacy URLs, maintaining identical URL paths wherever possible, implementing strict 301 redirects for any altered routes, and preserving all canonical tags, headings, and metadata.',
      },
      {
        q: 'Will our live website experience downtime while you build the new platform?',
        a: 'Zero seconds of downtime. Your existing website remains 100% active and operational on your current host throughout the entire build and migration testing. Once the new platform is thoroughly tested on staging and client-approved, we run a quick delta sync for new content and switch DNS in off-peak hours.',
      },
      {
        q: 'How long does a typical enterprise CMS migration take from start to finish?',
        a: 'A standard website migration (500 to 2,000 pages) typically takes 3 to 4 weeks. Complex enterprise platforms with tens of thousands of relational records, user accounts, multilingual setups, or custom e-commerce logic typically require 6 to 8 weeks to ensure thorough staging audits and regression testing.',
      },
      {
        q: 'Can you migrate customer accounts, passwords, and past order histories?',
        a: 'Yes. Customer profiles, order histories, billing addresses, and transactional records can be migrated cleanly. Because password hashing algorithms vary between systems (e.g. Drupal vs WordPress vs Shopify), we implement secure cryptographic password fallback hooks or automated one-click password reset invitations for users.',
      },
      {
        q: 'What happens to internal links inside blog posts and older content?',
        a: 'We run automated regex scripts across your entire database that detect all legacy internal links and automatically update them to point to the new URL structure, ensuring your visitors never encounter 404 errors or redundant redirects while reading.',
      },
      {
        q: 'How do you test and verify the migration before flipping the switch?',
        a: 'We conduct full side-by-side crawl parity checks using Screaming Frog. We compare status codes, title tags, meta descriptions, image embeds, and canonical tags across every single page. Only when crawl reports show 100% parity do we initiate DNS cutover.',
      },
    ],
  },

  // 9. CTA
  cta: {
    eyebrow: 'Migrate Without Risk',
    heading: 'Planning to Upgrade Your CMS Without Losing Search Traffic?',
    subtitle:
      'Schedule a free CMS Migration Feasibility Assessment. Our technical leads will analyze your current URL inventory, identify edge cases, and map a zero-risk migration plan.',
    buttonText: 'Request Migration Feasibility Audit',
    buttonHref: '/contact?service=cms-migration',
    secondaryText: 'Discuss your migration timeline directly on WhatsApp &rarr;',
    secondaryHref: 'https://wa.me/916395543772?text=Hi%20Markencia,%20I%20want%20to%20discuss%20CMS%20migration',
  },
};
