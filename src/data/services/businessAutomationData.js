export const BUSINESS_AUTOMATION_DATA = {
  slug: 'business-automation',
  alternateSlugs: ['workflow-automation'],
  meta: {
    title: 'Business & Workflow Automation Services | Markencia',
    description:
      'Eliminate manual operational bottlenecks with custom enterprise workflow automation, event-driven webhooks, and multi-system API synchronizations built by Markencia.',
    keywords: [
      'business automation services',
      'workflow automation agency',
      'enterprise process automation',
      'n8n workflow development',
      'custom API integration',
      'CRM ERP automation',
      'operations automation India',
      'webhook architecture',
    ],
    canonical: 'https://markencia.com/services/business-automation',
  },
  hero: {
    badge: 'Enterprise Workflow Architecture',
    title: 'Autonomous Business & Workflow Automation',
    titleHighlight: 'Engineered for Scale',
    subtitle:
      'We design and deploy event-driven automation pipelines, API synchronization hubs, and multi-agent workflow engines that eliminate manual human lag, reduce operational overhead, and connect your entire business stack into an autonomous engine.',
    primaryCta: {
      label: 'Book Automation Architecture Audit',
      href: '/contact?service=business-automation',
    },
    secondaryCta: {
      label: 'Explore Real-World Deployments',
      href: '#examples',
    },
    metrics: [
      { value: '94%', label: 'Reduction in manual task latency' },
      { value: '100%', label: 'Data accuracy & zero lost webhooks' },
      { value: '180+', label: 'Monthly operational hours recovered' },
      { value: '< 2s', label: 'Average end-to-end sync throughput' },
    ],
    trustText: 'Trusted by high-growth B2B platforms, D2C brands, and multi-location service operations.',
  },

  // 1. WHAT IS IT?
  whatIsIt: {
    eyebrow: 'System Definition',
    heading: 'What Is Enterprise Workflow Automation?',
    description:
      'Business automation is not a messy collection of disjointed Zapier zaps that break on silent API changes. At Markencia, it is a resilient, deterministic infrastructure layer engineered between your data sources, operations teams, and customer touchpoints.',
    paragraphs: [
      'Modern businesses rely on dozens of software tools—CRMs, ERPs, accounting software, communication channels, and databases. When these systems don’t communicate autonomously, your team becomes expensive human middleware, manually copying data, chasing invoices, and updating spreadsheets.',
      'We engineer production-grade workflow automation using event-driven webhooks, fault-tolerant orchestration engines (such as n8n and Temporal), and custom Node.js middleware. The result is a self-healing operational backbone that runs 24/7 with zero human intervention.',
    ],
    pillars: [
      {
        icon: '⚡',
        title: 'Event-Driven Real-Time Sync',
        desc: 'Instant data propagation across your CRM, billing, and fulfillment platforms within milliseconds of customer action.',
      },
      {
        icon: '🛡️',
        title: 'Zero-Data-Loss Architecture',
        desc: 'Built-in dead-letter queues, exponential backoff retries, and idempotency keys to ensure no lead or transaction is ever lost.',
      },
      {
        icon: '🔌',
        title: 'Custom API Middleware',
        desc: 'Direct integration with custom in-house software, legacy SQL databases, and closed third-party platforms with zero native connectors.',
      },
      {
        icon: '📊',
        title: 'Observability & Live Alerting',
        desc: 'Centralized health dashboards with instant Slack and email alerts if an external vendor API experiences downtime.',
      },
    ],
  },

  // 2. WHO NEEDS IT?
  whoNeedsIt: {
    eyebrow: 'Target Audience & Fit',
    heading: 'Who Needs Business & Workflow Automation?',
    description:
      'Our automation engineering is built specifically for organizations where manual execution has become the primary bottleneck to profitability and scaling.',
    profiles: [
      {
        tag: 'Scaling B2B Companies (15–200 Employees)',
        title: 'High-Volume Lead & Sales Pipelines',
        symptoms: [
          'Leads sit uncontacted in CRMs for hours due to manual assignment lags.',
          'Sales reps waste 35% of their working day creating proposals, updating fields, and sending follow-up emails.',
          'Disjointed data between HubSpot/Salesforce, Stripe, and internal communication channels.',
        ],
        solution: 'Automated 10-second lead enrichment, smart intent routing, and dynamic contract generation.',
      },
      {
        tag: 'D2C & E-Commerce Brands',
        title: 'Multi-Channel Fulfillment & Inventory',
        symptoms: [
          'Inventory mismatches across Shopify, Amazon, and offline warehouse ERPs.',
          'Customer returns, refunds, and address corrections requiring manual email exchanges.',
          'Delayed financial reconciliation between Razorpay/Stripe, 3PL shipping partners, and accounting books.',
        ],
        solution: 'Unified webhook bridge connecting orders, 3PL logistics, WhatsApp tracking updates, and accounting.',
      },
      {
        tag: 'Agencies & Professional Services',
        title: 'Client Onboarding & Project Setup',
        symptoms: [
          'New client signups take 3–5 business days to onboard, provision tools, and issue invoices.',
          'Project managers spend hours manually updating Jira, Asana, or Monday boards.',
          'Missed contract renewals and delayed milestone billing.',
        ],
        solution: 'One-click onboarding pipelines: instant workspace creation, NDA execution, billing setup, and kickoff alerts.',
      },
      {
        tag: 'Operations & Finance Teams',
        title: 'Repetitive Billing & Ledger Reconciliation',
        symptoms: [
          'End-of-month accounting requires days of exporting CSVs and manual cross-referencing.',
          'Manual payment reminders causing high DSO (Days Sales Outstanding) and overdue accounts.',
          'Frequent human data entry errors leading to tax calculation discrepancies.',
        ],
        solution: 'Automated ledger synchronization, dynamic payment reminder escalation, and bank reconciliation.',
      },
    ],
  },

  // 3. WHAT PROBLEMS DOES IT SOLVE?
  problemsSolved: {
    eyebrow: 'The Core Bottlenecks',
    heading: 'The Operational Pitfalls We Eliminate',
    description:
      'Compare how your business runs today against the deterministic efficiency of an automated Markencia architecture.',
    comparisons: [
      {
        problem: 'The "Human Middleware" Drain',
        problemDesc: 'Hiring full-time staff just to manually copy-paste leads from Meta Ads into spreadsheets, email marketing tools, and internal systems.',
        solution: 'Sub-Second Webhook Routing',
        solutionDesc: 'Leads are captured, enriched with firmographic data, and pushed to your CRM and reps within 10 seconds of submission.',
      },
      {
        problem: 'Fragile, Silent Zapier Failures',
        problemDesc: 'Third-party automations break without warning when an API changes, silently losing customer orders and leads for days.',
        solution: 'Fail-Safe Resilient Pipelines',
        solutionDesc: 'Custom error handling, automatic retry mechanisms, and instant dead-letter queue notifications prevent data loss.',
      },
      {
        problem: 'Linear Headcount Dependency',
        problemDesc: 'Doubling your transaction volume requires doubling your administrative headcount, suppressing operational profit margins.',
        solution: 'Sublinear Scaling Velocity',
        solutionDesc: 'Process 10x more orders, leads, and client actions without expanding administrative or data-entry payroll.',
      },
      {
        problem: 'Disjointed Customer Communication',
        problemDesc: 'Customers wait 24+ hours for simple invoice copies, order updates, or appointment rescheduling confirmations.',
        solution: 'Omnichannel Event Triggers',
        solutionDesc: 'Trigger automated WhatsApp, SMS, and email status updates the exact moment internal milestones occur.',
      },
    ],
  },

  // 4. WHAT DOES MARKENCIA ACTUALLY BUILD?
  whatWeBuild: {
    eyebrow: 'Concrete Deliverables',
    heading: 'What Does Markencia Actually Build?',
    description:
      'We don’t hand you disconnected SaaS recipes. We architect, code, and deploy comprehensive operational software systems customized to your exact workflows.',
    deliverables: [
      {
        number: '01',
        title: 'Lead Enrichment & Instant Dispatch Pipelines',
        description:
          'Real-time ingestion pipelines that capture inbound leads from landing pages, webhooks, or ad networks, instantly append revenue and contact data (via Apollo/Clearbit), score buying intent, and assign leads to the right rep with an immediate Slack/WhatsApp ping.',
        features: [
          'Sub-10 second end-to-end processing',
          'Automated WhatsApp/SMS confirmation to lead',
          'CRM deduplication & lifecycle stage updating',
          'Dynamic calendar routing based on rep availability',
        ],
      },
      {
        number: '02',
        title: 'Billing, Invoicing & Financial Reconciliation Hubs',
        description:
          'Bidirectional synchronization between payment gateways (Stripe, Razorpay, PayPal) and accounting platforms (Zoho Books, QuickBooks, Xero). Automatically generates GST/VAT-compliant invoices, triggers payment reminders, and logs bank deposits.',
        features: [
          'Automatic invoice generation upon successful checkout',
          'Smart failed payment dunning sequences',
          'Multi-currency exchange rate calculation',
          'Automated reconciliation reports emailed weekly',
        ],
      },
      {
        number: '03',
        title: 'Autonomous Client Onboarding & Provisioning Engines',
        description:
          'Eliminate the 48-hour onboarding lag. When a client signs a contract or makes their first deposit, our system auto-generates client folders in Google Drive, provisions Notion/Slack channels, creates billing profiles, and sends welcome kits.',
        features: [
          'Triggered directly by PandaDoc/DocuSign signatures',
          'Automated project management board generation (Asana/Jira)',
          'Automated client portal credential provisioning',
          'Role-based permissions assigned automatically',
        ],
      },
      {
        number: '04',
        title: 'Custom API Middleware & Webhook Gateways',
        description:
          'For companies with proprietary databases, on-premise ERPs, or niche tools lacking public integrations. We build dedicated Node.js/Python microservices that translate data formats, handle rate-limiting, and bridge your legacy systems.',
        features: [
          'Custom REST & GraphQL endpoints',
          'HMAC signature verification & security authorization',
          'Redis BullMQ queue management for high-load bursts',
          'Idempotent processing to prevent duplicate records',
        ],
      },
      {
        number: '05',
        title: 'Internal Ops Control Panels & Monitoring Dashboards',
        description:
          'A modern Next.js admin interface built specifically for your operations leadership. Monitor automation execution status, manually retry failed events with one click, and inspect real-time transaction throughput.',
        features: [
          'Live event stream logs with payload inspectors',
          'One-click manual retry triggers for edge-case errors',
          'Granular team permission levels and audit logs',
          'Real-time throughput metrics and SLA tracking',
        ],
      },
    ],
  },

  // 5. PROCESS
  process: {
    eyebrow: 'Our Methodology',
    heading: 'The 5-Stage Automation Engineering Protocol',
    description:
      'We follow a rigorous, battle-tested engineering process designed to deploy mission-critical automations without disrupting your ongoing business operations.',
    steps: [
      {
        step: '01',
        title: 'Workflow Audit & Bottleneck Mapping',
        description:
          'We deep-dive into your existing workflows, shadow team members, map every software tool, document data schemas, and identify the highest-ROI automation candidates.',
        output: 'Comprehensive Systems Architecture & Bottleneck Map',
      },
      {
        step: '02',
        title: 'Integration Blueprint & Schema Design',
        description:
          'We specify the exact data payloads, trigger events, webhook specifications, error fallbacks, and security authorizations before writing a single line of code.',
        output: 'Technical Specification Document & API Blueprint',
      },
      {
        step: '03',
        title: 'Pipeline Engineering & API Integration',
        description:
          'Our engineers construct the automation engines, write custom transformation functions, configure queuing systems, and link all endpoints in a staging sandbox.',
        output: 'Fully functional staging automation environment',
      },
      {
        step: '04',
        title: 'Edge-Case Stress Testing & Simulation',
        description:
          'We simulate real-world failure modes: network dropouts, malformed webhook payloads, third-party rate limits, and server timeouts to verify bulletproof error recovery.',
        output: 'Passed 100% test coverage with zero data leakage',
      },
      {
        step: '05',
        title: 'Zero-Downtime Deployment & SLA Monitoring',
        description:
          'We switch your production systems over with zero disruption, configure active telemetry alerts, deliver full team runbooks, and provide ongoing SLA maintenance.',
        output: 'Live autonomous pipelines with 24/7 monitoring',
      },
    ],
  },

  // 6. EXAMPLES / CASE STUDIES
  examples: {
    eyebrow: 'Proven Case Scenarios',
    heading: 'Real-World Automation Deployments',
    description:
      'Inspect how Markencia-built workflow automation systems solved concrete operational logjams for our clients.',
    cases: [
      {
        client: 'Global B2B SaaS & Tech Consultancy',
        badge: 'Lead & Proposal Automation',
        challenge:
          'Sales reps took an average of 4.5 hours to verify inbound enterprise leads, pull LinkedIn data, generate customized slide decks, and create NDAs. High-intent prospects were going cold.',
        solution:
          'Markencia engineered a unified event listener on HubSpot. The moment a tier-1 lead opts in, an automated pipeline verifies domain authority, generates a custom NDA via PandaDoc, creates an internal Slack deal room, and pings the assigned executive.',
        results: [
          'Lead-to-first-touch time decreased from 4.5 hours to 32 seconds',
          'Sales conversion rate on high-ticket leads surged by +34%',
          'Zero manual data entry required for the 18-person sales team',
        ],
      },
      {
        client: 'Multi-Channel D2C Apparel Brand',
        badge: 'Inventory & 3PL Logistics Hub',
        challenge:
          'Operating on Shopify, Amazon, and Myntra, the brand suffered frequent overselling and delayed shipping dispatches because inventory updates were manually synced twice a day in Excel.',
        solution:
          'Engineered a centralized webhook hub using n8n and Redis. Every order across any channel immediately decrements centralized stock, triggers automated pick-and-pack requests to Delhivery, and updates customer WhatsApp tracking.',
        results: [
          'Inventory sync latency reduced from 8 hours to under 2 seconds',
          'Eliminated stockout cancellation penalties by 99.8%',
          'Saved over 160 hours per month in manual warehouse spreadsheet updates',
        ],
      },
      {
        client: 'Multi-Location Healthcare & Diagnostics Provider',
        badge: 'Omnichannel Patient Scheduling',
        challenge:
          'Patients booking diagnostic tests frequently missed appointments due to lack of timely confirmation, while clinic receptionists spent 6 hours daily making manual confirmation calls.',
        solution:
          'Built an automated booking orchestration pipeline connecting their appointment database with the WhatsApp Business Cloud API, automated calendar reminders, and automated cancellation backfill triggers.',
        results: [
          'Patient appointment no-show rates dropped by 38%',
          'Recovered an estimated $42,000 in monthly unfulfilled clinic capacity',
          '100% automated booking confirmations with instant reschedule options',
        ],
      },
    ],
  },

  // 7. TECHNOLOGIES
  technologies: {
    eyebrow: 'Technology Ecosystem',
    heading: 'The Engineering Stack We Deploy',
    description:
      'We combine battle-tested orchestration engines, custom code, and enterprise-grade cloud infrastructure.',
    categories: [
      {
        name: 'Orchestration & Workflow Engines',
        items: ['n8n (Self-Hosted & Cloud)', 'Make / Integromat', 'Temporal.io', 'Zapier Enterprise', 'AWS Step Functions'],
      },
      {
        name: 'Custom Code & Middleware',
        items: ['Node.js & TypeScript', 'Python 3.12', 'FastAPI', 'Next.js API Routes', 'Docker Containerization'],
      },
      {
        name: 'Databases & Message Queues',
        items: ['PostgreSQL', 'Redis & BullMQ', 'Apache Kafka', 'Supabase', 'MongoDB'],
      },
      {
        name: 'Enterprise Platforms & APIs',
        items: ['HubSpot & Salesforce', 'Stripe & Razorpay', 'Shopify Plus', 'Zoho Books & QuickBooks', 'Slack & WhatsApp Cloud API'],
      },
      {
        name: 'Observability & Monitoring',
        items: ['Datadog', 'Sentry Error Tracking', 'Grafana', 'Prometheus', 'Better Stack Uptime'],
      },
    ],
  },

  // 8. FAQS
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Common Questions About Business Automation',
    items: [
      {
        q: 'What happens if a third-party API goes down or changes unexpectedly?',
        a: 'We design every automation with zero-data-loss resiliency. When an external API fails, our system captures the event, stores it in an isolated dead-letter queue, and executes exponential backoff retries. If the vendor remains down, your operations team receives an instant alert with full payload logs, and the failed action can be retried with one click once the vendor recovers.',
      },
      {
        q: 'Can you automate custom legacy software that lacks public APIs?',
        a: 'Yes. For proprietary or legacy software without standard REST/GraphQL endpoints, we engineer custom solutions such as direct SQL database triggers, secure FTP watchers, headless browser automation agents, or bespoke webhook bridges.',
      },
      {
        q: 'How does self-hosted n8n compare to tools like Zapier or Make?',
        a: 'While Zapier and Make are convenient for simple tasks, their task-based pricing models become prohibitively expensive at scale, and your sensitive company data resides on third-party servers. We frequently deploy self-hosted n8n or custom microservices on your own private cloud (AWS/GCP), giving you unlimited execution capacity, lower latency, and 100% data sovereignty.',
      },
      {
        q: 'How long does an enterprise automation deployment typically take?',
        a: 'Standard core workflow integrations (such as CRM-to-billing or lead dispatch pipelines) are typically built, tested, and live within 2 to 3 weeks. Comprehensive enterprise multi-system architectures usually roll out across 4 to 6 weeks, with phased milestone deployments so you begin seeing ROI immediately.',
      },
      {
        q: 'Will automation disrupt our ongoing operations during implementation?',
        a: 'Not at all. We build and test all pipelines in dedicated staging sandboxes using historical or synthetic data. Your live production systems are untouched until edge-case simulation is 100% verified, and cutover is performed with zero downtime.',
      },
      {
        q: 'How do you ensure data security, GDPR, and HIPAA compliance?',
        a: 'All data in transit is encrypted with TLS 1.3, and data at rest uses AES-256 encryption. We utilize role-based access control, enforce least-privilege API scopes, and never store sensitive customer PII unnecessarily. We build in full compliance with GDPR, SOC2, and relevant industry regulations.',
      },
    ],
  },

  // 9. CTA
  cta: {
    eyebrow: 'Stop Manual Operations',
    heading: 'Ready to Transform Your Business Into an Autonomous Engine?',
    subtitle:
      'Schedule a 30-minute Workflow Architecture Session with our senior engineers. We’ll audit your bottlenecks and map a high-impact automation blueprint.',
    buttonText: 'Schedule Architecture Audit',
    buttonHref: '/contact?service=business-automation',
    secondaryText: 'Speak with our technical leads directly via WhatsApp &rarr;',
    secondaryHref: 'https://wa.me/916395543772?text=Hi%20Markencia,%20I%20want%20to%20discuss%20business%20automation',
  },
};
