export const AI_SYSTEMS_DATA = {
  slug: 'ai-systems',
  alternateSlugs: [],
  meta: {
    title: 'Enterprise AI Systems & Autonomous Agent Engineering | Markencia',
    description:
      'Production-grade enterprise AI engineering: custom RAG knowledge bases, autonomous multi-agent task orchestrators, and private fine-tuned LLMs deployed with security and deterministic precision.',
    keywords: [
      'enterprise AI development',
      'autonomous AI agents agency',
      'custom RAG development',
      'private LLM deployment',
      'AI engineering India',
      'enterprise chatbot integration',
      'LangChain LlamaIndex development',
      'AI systems architecture',
    ],
    canonical: 'https://markencia.com/services/ai-systems',
  },
  hero: {
    badge: 'Production-Grade AI Engineering',
    title: 'Enterprise AI Systems & Autonomous Agent Architectures',
    titleHighlight: 'Beyond Toy Chatbots',
    subtitle:
      'We engineer production-ready AI systems, Retrieval-Augmented Generation (RAG) knowledge engines, and autonomous multi-agent systems connected directly to your internal data and enterprise APIs. Achieve deterministic business execution with verified citations and zero hallucination.',
    primaryCta: {
      label: 'Book AI Systems Architecture Session',
      href: '/contact?service=ai-systems',
    },
    secondaryCta: {
      label: 'View Production AI Deployments',
      href: '#examples',
    },
    metrics: [
      { value: '0%', label: 'Proprietary data leakage to public models' },
      { value: '< 1.2s', label: 'Average semantic search response time' },
      { value: '70%+', label: 'Autonomous tier-1 inquiry resolution' },
      { value: '100%', label: 'Auditable citations & function execution' },
    ],
    trustText: 'Trusted by FinTech operators, legal consultancies, high-volume logistics firms, and enterprise SaaS companies.',
  },

  // 1. WHAT IS IT?
  whatIsIt: {
    eyebrow: 'System Definition',
    heading: 'What Are Enterprise AI Systems?',
    description:
      'Most businesses experiment with "toy AI"—isolated ChatGPT prompts and generic chatbots that hallucinate false facts, leak confidential data, and have zero ability to execute real actions in your databases.',
    paragraphs: [
      'Enterprise AI Systems built by Markencia are deterministic software engines engineered with strict guardrails, role-based security, and native API connectivity. We integrate state-of-the-art Large Language Models (LLMs) with your proprietary business data through Retrieval-Augmented Generation (RAG) and multi-agent orchestration.',
      'Our systems do not just chat—they act. An AI system can analyze a 200-page complex contract, cross-reference pricing tables in your SQL database, generate a legally compliant amendment, and trigger an approval email to your legal lead with full source citations in seconds.',
    ],
    pillars: [
      {
        icon: '🧠',
        title: 'Enterprise RAG Knowledge Engines',
        desc: 'Hybrid vector-and-keyword search across your PDFs, Notion docs, codebases, and databases with verifiable sentence-level citations.',
      },
      {
        icon: '🤖',
        title: 'Autonomous Multi-Agent Orchestrators',
        desc: 'Specialized agent teams (Researcher, Analyst, Writer, Code Reviewer) that execute complex multi-step workflows autonomously.',
      },
      {
        icon: '🔒',
        title: 'Private & Sovereign Model Hosting',
        desc: 'Self-hosted open-weights models (Llama 3, DeepSeek, Mistral) in your own private cloud (AWS/GCP) ensuring 100% data privacy.',
      },
      {
        icon: '⚡',
        title: 'Deterministic Function Calling & APIs',
        desc: 'Direct integration with your CRM, payment gateways, and databases to take real-world actions without human latency.',
      },
    ],
  },

  // 2. WHO NEEDS IT?
  whoNeedsIt: {
    eyebrow: 'Target Audience & Fit',
    heading: 'Who Needs Enterprise AI Systems?',
    description:
      'Our AI engineering is designed for organizations with high cognitive workloads, massive document archives, or high-volume customer interactions.',
    profiles: [
      {
        tag: 'Knowledge-Dense Industries (Legal, Finance, Healthcare, Real Estate)',
        title: 'Massive Unstructured Document Archives',
        symptoms: [
          'High-value professionals spending 15+ hours weekly searching through PDFs, policy docs, and historical filings.',
          'Delayed proposal drafting and compliance audits due to manual document synthesis.',
          'Fear of using public AI tools due to strict client confidentiality, HIPAA, or financial regulations.',
        ],
        solution: 'Air-gapped private RAG engines that query millions of document pages with verified page citations.',
      },
      {
        tag: 'High-Volume Customer Support & Operations',
        title: 'Repetitive Tier-1 & Tier-2 Support Inquiries',
        symptoms: [
          'Support team overwhelmed by repetitive questions regarding order status, returns, policies, and account settings.',
          'Slow response times (hours or days) leading to customer dissatisfaction and churn.',
          'High payroll costs for 24/7 coverage across international time zones.',
        ],
        solution: 'Autonomous AI action agents that verify identities, look up live database records, and resolve tickets instantly.',
      },
      {
        tag: 'Sales & Outbound Teams at Scale',
        title: 'Account Research & Hyper-Personalization',
        symptoms: [
          'Sales Development Reps (SDRs) spend 45 minutes manually researching each prospect before sending an email.',
          'Low response rates on generic email sequences sent via standard sales tools.',
          'High lead drop-off due to slow follow-up speed on website inquiries.',
        ],
        solution: 'Automated AI prospect research agents that synthesize company filings, news, and tech stacks into hyper-personalized pitches.',
      },
      {
        tag: 'Product Teams & SaaS Scale-Ups',
        title: 'AI Feature Integration into Software',
        symptoms: [
          'Need to add AI copilots, smart summaries, or natural-language query features to their existing SaaS platform.',
          'Struggling with high token latency, spiraling OpenAI API costs, and prompt injection attacks.',
          'In-house engineering team lacks specialized LLMOps and vector database experience.',
        ],
        solution: 'Full-cycle AI engineering: semantic caching, fine-tuning, latency optimization, and security guardrails.',
      },
    ],
  },

  // 3. WHAT PROBLEMS DOES IT SOLVE?
  problemsSolved: {
    eyebrow: 'The Core Bottlenecks',
    heading: 'The AI Traps & Operational Waste We Eliminate',
    description:
      'Compare standard generic AI tools with Markencia’s enterprise-grade AI architecture.',
    comparisons: [
      {
        problem: 'The "Hallucination & Fabrication" Risk',
        problemDesc: 'Public AI models invent plausible-sounding false information, fabricated case laws, and incorrect inventory numbers.',
        solution: 'Strict RAG Grounding & Rerankers',
        solutionDesc: 'We implement hybrid semantic search and rerankers that restrict AI responses strictly to your verified company ground truth with citations.',
      },
      {
        problem: 'Corporate Data Leakage Concerns',
        problemDesc: 'Employees pasting confidential contracts, financial models, and customer PII into public consumer chatbots that train public models.',
        solution: 'Zero-Retention & Private VPC Hosting',
        solutionDesc: 'We deploy enterprise-tier zero-data retention endpoints or host private models inside your dedicated AWS/GCP virtual private cloud.',
      },
      {
        problem: 'Passive Chatbots That Can’t Take Action',
        problemDesc: 'Chatbots that can only generate text suggestions but cannot actually update a CRM record, issue a refund, or book a calendar slot.',
        solution: 'Deterministic Tool Calling & APIs',
        solutionDesc: 'Our agents leverage secure function calling to execute authorized database writes, Stripe refunds, or ticket updates automatically.',
      },
      {
        problem: 'Spiraling API Token Costs & High Latency',
        problemDesc: 'Sending massive contexts to expensive frontier models on every single prompt, causing $5,000+ monthly bills and 8-second user wait times.',
        solution: 'Semantic Caching & Small Language Models',
        solutionDesc: 'We implement Redis semantic caching and route routine queries to fast, cost-effective small models (SLMs), slashing costs by 80%.',
      },
    ],
  },

  // 4. WHAT DOES MARKENCIA ACTUALLY BUILD?
  whatWeBuild: {
    eyebrow: 'Concrete Deliverables',
    heading: 'What Does Markencia Actually Build?',
    description:
      'We design, train, evaluate, and deploy end-to-end AI software tailored strictly to your business workflows.',
    deliverables: [
      {
        number: '01',
        title: 'Enterprise RAG (Retrieval-Augmented Generation) Engines',
        description:
          'Custom knowledge retrieval pipelines that ingest PDFs, Notion databases, Google Drive folders, and SQL warehouses into high-dimension vector databases. Enables instant, verifiable natural language search across company IP.',
        features: [
          'Hybrid search combining BM25 keyword matching and dense vector embeddings',
          'Cohere / BGE cross-encoder rerankers for top-1% retrieval precision',
          'Sentence-level document citations with direct source file links',
          'Automated daily incremental indexing as company files update',
        ],
      },
      {
        number: '02',
        title: 'Autonomous Multi-Agent Task Orchestrators',
        description:
          'Coordinated swarms of specialized AI agents built using LangGraph or CrewAI. Each agent has a dedicated role (e.g. Researcher, Financial Analyst, Compliance Officer, Formatter) collaborating to complete complex multi-stage tasks with human-in-the-loop review.',
        features: [
          'Deterministic state-machine transitions and fallbacks',
          'Human-in-the-loop checkpoint approvals for high-stakes decisions',
          'Self-correcting code execution and schema validation loops',
          'Comprehensive audit trails of agent reasoning steps',
        ],
      },
      {
        number: '03',
        title: 'Action-Oriented Conversational AI & Voice Agents',
        description:
          'Customer-facing and internal support agents integrated with live APIs. Capable of handling end-to-end interactions across Web, WhatsApp, and Voice (Twilio / ElevenLabs), querying databases, and executing verified operational actions.',
        features: [
          'Sub-800ms streaming responses with dynamic typing indicators',
          'Direct integration with Stripe, Shopify, Zendesk, and PostgreSQL',
          'Sentiment detection with instant seamless handoff to human agents',
          'Multilingual real-time translation across 40+ languages',
        ],
      },
      {
        number: '04',
        title: 'Private LLM Deployment & Sovereign Infrastructure',
        description:
          'For regulated industries requiring 100% data sovereignty. We deploy open-weights models (Meta Llama 3, Mistral, DeepSeek) on dedicated GPU infrastructure (AWS EC2 / RunPod / GCP) inside your private network with zero external data transmission.',
        features: [
          'vLLM high-throughput inference engine for 5x faster generation',
          'Full air-gapped security complying with SOC2, ISO 27001, and HIPAA',
          'Role-based access controls (RBAC) and employee permission tiers',
          'Custom fine-tuning with LoRA / QLoRA on company terminology',
        ],
      },
      {
        number: '05',
        title: 'LLMOps, Semantic Caching & Observability Dashboards',
        description:
          'Production-grade monitoring and guardrail infrastructure. We track token expenditure, latency percentiles, user feedback, and semantic similarity caches to prevent repetitive model billing.',
        features: [
          'GPTCache / Redis semantic caching to serve 30%+ queries instantly for $0',
          'LangSmith / Phoenix telemetry tracking every prompt and response',
          'NeMo Guardrails preventing jailbreaks, toxicity, and prompt injections',
          'Automated regression testing against historical benchmark evaluation sets',
        ],
      },
    ],
  },

  // 5. PROCESS
  process: {
    eyebrow: 'Our Methodology',
    heading: 'The 5-Stage AI Engineering Protocol',
    description:
      'We bring mathematical rigor and engineering standards to AI development to guarantee reliability, safety, and business value.',
    steps: [
      {
        step: '01',
        title: 'Data Feasibility & Threat Modeling',
        description:
          'We evaluate your proprietary datasets, examine data cleanliness, define security perimeters, and calculate estimated token throughput and ROI.',
        output: 'AI Feasibility Analysis & Technical Architecture Blueprint',
      },
      {
        step: '02',
        title: 'Vector Schema & Chunking Architecture',
        description:
          'We engineer custom data parsing pipelines, design semantic chunking strategies tailored to your document formats, and configure the vector database.',
        output: 'Operational Vector Database & Ingestion Pipeline',
      },
      {
        step: '03',
        title: 'Agent Logic & Tool Calling Integration',
        description:
          'Our engineers construct the prompt templates, state machines, function calling schemas, and API bridges in an isolated development environment.',
        output: 'Working Multi-Agent Staging Prototype',
      },
      {
        step: '04',
        title: 'Benchmark Evaluation & Guardrail Hardening',
        description:
          'We execute synthetic adversarial testing and benchmark evaluation (Ragas / TruLens) across hundreds of edge-case queries to mathematically measure accuracy.',
        output: 'Evaluation Report with > 95% Precision & Zero Hallucination Score',
      },
      {
        step: '05',
        title: 'Production Deployment & Observability Setup',
        description:
          'We deploy the system to production, configure semantic caching, set up real-time telemetry dashboards, and train your staff on prompt governance.',
        output: 'Live Enterprise AI System with Real-Time Observability',
      },
    ],
  },

  // 6. EXAMPLES / CASE STUDIES
  examples: {
    eyebrow: 'Proven Case Scenarios',
    heading: 'Real-World Enterprise AI Deployments',
    description:
      'Explore how Markencia engineered custom AI architectures to automate complex cognitive workflows and drive commercial efficiency.',
    cases: [
      {
        client: 'International Commercial Real Estate Advisory',
        badge: 'Enterprise Lease Contract RAG Engine',
        challenge:
          'Senior analysts spent 6+ hours reviewing 150-page commercial lease agreements to extract escalation clauses, termination rights, and maintenance obligations.',
        solution:
          'Engineered a private RAG system utilizing Qdrant vector search and Claude 3.5 Sonnet. The system parses multi-column legal tables, highlights clauses, and generates comparative executive briefs.',
        results: [
          'Contract analysis time dropped from 6 hours to 4 minutes',
          '99.8% extraction accuracy verified across 450 historical leases',
          'Firm doubled its deal underwriting capacity without hiring additional analysts',
        ],
      },
      {
        client: 'Fast-Growing B2B FinTech Platform',
        badge: 'Autonomous Action-Oriented Support Agent',
        challenge:
          'Experiencing 1,800 weekly tier-1 customer inquiries regarding transaction statuses, KYC verification holds, and API key configurations, resulting in a 14-hour support backlog.',
        solution:
          'Developed an intelligent action agent connected directly to their PostgreSQL database and Stripe API via secure function calling, complete with human-in-the-loop escalation.',
        results: [
          '71% of all tier-1 tickets resolved autonomously in under 30 seconds',
          'Support backlog dropped from 14 hours to 0',
          'Customer satisfaction (CSAT) rating increased from 3.7 to 4.8 / 5',
        ],
      },
      {
        client: 'Global Logistics & Supply Chain Operator',
        badge: 'Autonomous Customs Document Clearance Agent',
        challenge:
          'Customs declarations required manual matching between commercial invoices, bills of lading, and international HS tariff codes across 6 languages.',
        solution:
          'Deployed a multi-agent system that ingests scanned shipping manifests via OCR, cross-references international tariff databases, and automatically flags compliance anomalies.',
        results: [
          'Cleared 12,000+ monthly shipments with zero human data entry',
          'Customs documentation errors reduced by 94%',
          'Saved over $120,000 annually in port delay penalties',
        ],
      },
    ],
  },

  // 7. TECHNOLOGIES
  technologies: {
    eyebrow: 'Technology Ecosystem',
    heading: 'The AI Engineering Stack We Deploy',
    description:
      'We combine leading foundation models, vector databases, agent orchestration frameworks, and observability platforms.',
    categories: [
      {
        name: 'Foundation Models & Open Weights',
        items: ['OpenAI GPT-4o / o1', 'Anthropic Claude 3.5 Sonnet', 'Meta Llama 3.3 (70B)', 'DeepSeek V3 / R1', 'Mistral Large'],
      },
      {
        name: 'Agent Frameworks & Orchestration',
        items: ['LangChain & LangGraph', 'LlamaIndex', 'CrewAI', 'AutoGen', 'FastAPI & Python 3.12'],
      },
      {
        name: 'Vector Databases & Search',
        items: ['Qdrant', 'Pinecone', 'Weaviate', 'pgvector (PostgreSQL)', 'Milvus'],
      },
      {
        name: 'Inference & Deployment',
        items: ['vLLM High-Throughput Engine', 'Triton Inference Server', 'AWS Bedrock / SageMaker', 'RunPod / Lambda Labs GPUs'],
      },
      {
        name: 'LLMOps & Guardrails',
        items: ['LangSmith Observability', 'Arize Phoenix', 'NeMo Guardrails', 'GPTCache Semantic Caching', 'Ragas Evaluation'],
      },
    ],
  },

  // 8. FAQS
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Common Questions About Enterprise AI Systems',
    items: [
      {
        q: 'How do you guarantee that the AI system will not hallucinate false information?',
        a: 'We eliminate hallucinations by grounding the AI in a deterministic Retrieval-Augmented Generation (RAG) architecture. Rather than relying on the model’s internal general knowledge, we retrieve verified passages directly from your company’s source documents, cross-rank them using neural rerankers, and instruct the model with strict system prompts that require direct sentence-level citations. If the source material does not contain the answer, the model is configured to explicitly respond that information is unavailable rather than guessing.',
      },
      {
        q: 'Will our proprietary enterprise data be used to train public AI models?',
        a: 'Never. We enforce strict data privacy standards. When using commercial models (such as OpenAI or Anthropic), we configure enterprise zero-retention API contracts where your data is never retained, logged, or used for model training. For clients with sovereign compliance requirements, we deploy open-weights models (such as Llama 3 or DeepSeek) entirely inside your own private cloud or on-premise hardware.',
      },
      {
        q: 'Can AI agents execute real-world actions in our software, like sending emails or updating records?',
        a: 'Yes. Through secure tool calling and function execution, our agents are equipped with specific APIs (such as updating CRM deals, creating Zendesk tickets, issuing refunds, or sending Slack alerts). We implement strict schema validation and can configure human-in-the-loop checkpoints where high-stakes actions require one-click human approval before execution.',
      },
      {
        q: 'What are the ongoing monthly operating costs for enterprise AI systems?',
        a: 'Ongoing operating costs consist of cloud hosting (e.g. AWS/Vercel), vector database hosting (e.g. Pinecone/Qdrant starting around $50–$150/mo), and LLM API usage based on token consumption. By implementing semantic caching (which serves repeated queries for free) and small language models for routine tasks, we routinely optimize clients’ ongoing AI bills down to just a fraction of conventional SaaS software fees.',
      },
      {
        q: 'How long does an enterprise AI project take from kickoff to production deployment?',
        a: 'A focused RAG knowledge engine or customer support agent typically takes 3 to 4 weeks to prototype, evaluate, and launch into production. Complex multi-agent orchestrators with custom database integrations and sovereign cloud deployment usually require 6 to 8 weeks.',
      },
      {
        q: 'How do we measure the accuracy and performance of our AI system over time?',
        a: 'We integrate full LLMOps telemetry using platforms like LangSmith or Phoenix. Every interaction is logged with latency, token costs, user feedback ratings (thumbs up/down), and accuracy metrics. We also maintain automated regression test suites that run benchmark evaluations whenever model prompts or embeddings are updated.',
      },
    ],
  },

  // 9. CTA
  cta: {
    eyebrow: 'Transform With Intelligence',
    heading: 'Ready to Engineer Production-Grade AI for Your Business?',
    subtitle:
      'Schedule a 30-minute AI Systems Architecture Consultation with our senior engineers. We will analyze your workflows, evaluate data readiness, and map a production AI blueprint.',
    buttonText: 'Schedule AI Architecture Session',
    buttonHref: '/contact?service=ai-systems',
    secondaryText: 'Have a confidential AI question? Chat directly with our engineers &rarr;',
    secondaryHref: 'https://wa.me/916395543772?text=Hi%20Markencia,%20I%20want%20to%20discuss%20Enterprise%20AI%20systems',
  },
};
