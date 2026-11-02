export type Language = 'en' | 'zh' | 'es' | 'fr';

export interface TranslationSchema {
  brandName: string;
  brandSubtitle: string;
  nav: {
    services: string;
    portfolio: string;
    whyUs: string;
    growth: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    cta: string;
    scrollHint: string;
  };
  services: {
    headerTagline: string;
    tag: string;
    title: string;
    subtitle: string;
    exploreWork: string;
    learnDetails: string;
    items: {
      id: string;
      title: string;
      description: string;
      details: string[];
      techStack: string[];
      impactMetric: string;
    }[];
  };
  portfolio: {
    tag: string;
    title: string;
    subtitle: string;
    viewProjects: string;
    laptopHeader: string;
    phoneHeader: string;
    demoTag: string;
  };
  whyUs: {
    tag: string;
    title: string;
    subtitle: string;
    commitmentTag: string;
    missionHeadline: string;
    pillars: {
      title: string;
      description: string;
      highlight: string;
    }[];
    stats: {
      satisfaction: string;
      onTime: string;
    };
  };
  growth: {
    tag: string;
    title: string;
    subtitle: string;
    cta: string;
    roiBtnShow: string;
    roiBtnHide: string;
    stat1Label: string;
    stat1Sub: string;
    stat2Label: string;
    stat2Sub: string;
    stat3Label: string;
    stat3Sub: string;
    calculatorTitle: string;
    monthlyBudgetLabel: string;
    teamSizeLabel: string;
    leadsResult: string;
    revenueResult: string;
    hoursResult: string;
  };
  footer: {
    headline: string;
    cta: string;
    inquiriesTitle: string;
    callTitle: string;
    globalTitle: string;
    globalLocs: string;
    copyright: string;
    links: {
      services: string;
      portfolio: string;
      whyUs: string;
      privacy: string;
    };
  };
  modal: {
    discoveryTitle: string;
    discoverySubtitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formCompany: string;
    formService: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    successTitle: string;
    successDesc: string;
    returnBtn: string;
    specTitle: string;
    deliverablesTitle: string;
    techTitle: string;
    requestPropBtn: string;
    galleryTitle: string;
    gallerySub: string;
    buildSimilarBtn: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    brandName: 'VANESSA IRIS',
    brandSubtitle: 'DIGITAL BUSINESS SOLUTIONS',
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      whyUs: 'Why Us',
      growth: 'Growth',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    hero: {
      headline: 'Your Partner in Digital Growth',
      subtitle: 'Web · AI · Automation · Marketing',
      cta: "Let's Grow Together",
      scrollHint: 'Scroll to explore',
    },
    services: {
      headerTagline: 'Smarter Solutions. Stronger Growth.',
      tag: 'End-to-End Capabilities',
      title: 'Our Services',
      subtitle: 'A full-service AI agency, helping you build, automate and scale your business.',
      exploreWork: 'Explore Our Work',
      learnDetails: 'Learn Details & Specs',
      items: [
        {
          id: 'web-dev',
          title: 'Web Development & Landing Pages',
          description: 'High-converting custom web applications, responsive landing pages, and enterprise web solutions built for peak performance.',
          details: [
            'Custom React, Next.js & Vite web applications with sub-second page loads',
            'High-converting sales landing pages optimized for desktop & mobile UX',
            'SEO-hardened architecture with JSON-LD schema & OpenGraph card setups',
            'Headless CMS integrations, custom database schemas & API backends',
          ],
          techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js', 'PostgreSQL'],
          impactMetric: 'Average 3.4x conversion lift across client campaigns',
        },
        {
          id: 'ai-solutions',
          title: 'AI Solutions & Chatbots',
          description: 'Custom AI agents, intelligent customer support chatbots, and proprietary LLM workflows designed for business automation.',
          details: [
            'Custom Retrieval-Augmented Generation (RAG) trained on company data',
            '24/7 autonomous customer service & sales qualification chatbots',
            'Internal knowledge base assistants for instant employee answer lookup',
            'Custom Gemini API integrations with function calling & structured output',
          ],
          techStack: ['Gemini 2.5/3 SDK', 'TypeScript', 'Vector DB', 'Express', 'Python'],
          impactMetric: 'Reduces customer support response time by 88%',
        },
        {
          id: 'automation-crm',
          title: 'Marketing Automation & CRM Systems',
          description: 'End-to-end workflow automation connecting your sales, marketing, and operational tools for effortless scaling.',
          details: [
            'Automated lead routing & instant SMS / email lead response sequences',
            'CRM integration & bi-directional sync (HubSpot, Salesforce, Pipedrive)',
            'Automated invoice generation, onboarding workflows & contract dispatch',
            'Custom Zapier, Make.com, & custom webhook middleware endpoints',
          ],
          techStack: ['Make.com', 'Zapier', 'HubSpot API', 'Node.js', 'Webhooks'],
          impactMetric: 'Saves 25+ staff hours per week in manual entry',
        },
        {
          id: 'digital-marketing',
          title: 'Digital Marketing & Lead Generation',
          description: 'Data-driven performance campaigns, multi-channel customer acquisition funnels, and conversion rate optimization.',
          details: [
            'Targeted Search (Google Ads) & Social (Meta, LinkedIn) campaign management',
            'High-intent lead magnet funnels & interactive quote calculators',
            'Conversion Rate Optimization (CRO) A/B testing & heat-mapping analytics',
            'Full-funnel attribution tracking & real-time revenue analytics dashboards',
          ],
          techStack: ['Google Ads', 'Meta Pixel', 'GA4', 'PostHog', 'A/B Testing Tools'],
          impactMetric: '+245% increase in qualified inbound lead volume',
        },
        {
          id: 'ai-video-content',
          title: 'AI Video & Content Creation',
          description: 'Next-generation generative AI video production, brand visual asset scaling, and hyper-personalized video outreach.',
          details: [
            'High-definition AI video commercials & social media ad creatives',
            'Synthetic voiceover cloning & multilingual localized video rendering',
            'Automated video clipping & repurposing for TikTok, Reels & Shorts',
            'Custom AI product graphics & brand style consistency enforcement',
          ],
          techStack: ['Omni / Gemini Video', 'ElevenLabs', 'Runway', 'Photoshop AI'],
          impactMetric: '10x faster video output at 80% lower production cost',
        },
      ],
    },
    portfolio: {
      tag: 'Client Showcase & Demos',
      title: 'Our Portfolio',
      subtitle: 'Explore our demo projects and see what we can build for your business.',
      viewProjects: 'View Projects',
      laptopHeader: 'Elevate Your Business',
      phoneHeader: 'Your Beauty, Our Priority',
      demoTag: 'Enterprise Solution',
    },
    whyUs: {
      tag: 'The Vanessa Iris Standard',
      title: 'Why Choose Vanessa Iris?',
      subtitle: 'We combine deep technical expertise with strategic execution to build solutions that drive measurable ROI.',
      commitmentTag: 'Our Commitment',
      missionHeadline: 'Your Success is Our Mission.',
      pillars: [
        {
          title: 'Innovative Solutions',
          description: 'Stay ahead with the latest AI technology.',
          highlight: 'Cutting-edge LLM & Automation',
        },
        {
          title: 'Personalized Approach',
          description: 'Solutions tailored to your business needs.',
          highlight: 'Custom Architecture & Strategy',
        },
        {
          title: 'Reliable Support',
          description: 'From planning to ongoing support.',
          highlight: '24/7 Dedicated Ops & SLA',
        },
      ],
      stats: {
        satisfaction: '99.8% Client Satisfaction Rate',
        onTime: '100% On-Time Project Delivery',
      },
    },
    growth: {
      tag: 'Measurable Outcomes',
      title: 'Turn Ideas Into Real Growth',
      subtitle: 'From a stunning website to intelligent automation, we help businesses attract more customers and work smarter.',
      cta: 'Get in Touch',
      roiBtnShow: 'Estimate Your ROI',
      roiBtnHide: 'Hide ROI Calculator',
      stat1Label: '+245%',
      stat1Sub: 'More Leads',
      stat2Label: '+180%',
      stat2Sub: 'Sales Growth',
      stat3Label: '-70%',
      stat3Sub: 'Manual Work',
      calculatorTitle: 'Custom Growth Estimator',
      monthlyBudgetLabel: 'Monthly Digital Spend:',
      teamSizeLabel: 'Team Size (Manual Work Operations):',
      leadsResult: 'Leads Generated',
      revenueResult: "Est. Add'l Revenue",
      hoursResult: 'Hours Saved/Wk',
    },
    footer: {
      headline: "Let's Build Something Great Together",
      cta: 'Contact Us',
      inquiriesTitle: 'Direct Inquiries',
      callTitle: 'Schedule a Call',
      globalTitle: 'Global Delivery',
      globalLocs: 'San Francisco · London · Remote',
      copyright: '© 2026 Digital Business Solutions. All rights reserved.',
      links: {
        services: 'Services',
        portfolio: 'Portfolio',
        whyUs: 'Why Us',
        privacy: 'Privacy & Contact',
      },
    },
    modal: {
      discoveryTitle: 'Let\'s Scale Your Business',
      discoverySubtitle: 'Fill out the details below and we will prepare a tailored AI & Growth proposal for your business.',
      formName: 'Your Name *',
      formEmail: 'Work Email *',
      formPhone: 'Phone Number',
      formCompany: 'Company Name',
      formService: 'Primary Service Interest',
      formMessage: 'Project Details / Goals',
      formSubmit: 'Submit Discovery Request',
      formSubmitting: 'Generating Custom Proposal...',
      successTitle: 'Discovery Request Received!',
      successDesc: 'Our senior technical strategist at Vanessa Iris will contact you within 4 hours to review your roadmap.',
      returnBtn: 'Return to Website',
      specTitle: 'Service Specification',
      deliverablesTitle: 'Core Deliverables & Capabilities',
      techTitle: 'Technologies & Integration Tools',
      requestPropBtn: 'Request Proposal for This Service',
      galleryTitle: 'Client Success Stories & Demos',
      gallerySub: 'Real-world applications engineered by Vanessa Iris Digital Business Solutions.',
      buildSimilarBtn: 'Build Similar App',
    },
  },

  zh: {
    brandName: '凡妮莎·艾里斯',
    brandSubtitle: '数字化商业解决方案',
    nav: {
      services: '核心服务',
      portfolio: '成功案例',
      whyUs: '优势特色',
      growth: '业绩增长',
      contact: '联系我们',
      getStarted: '立即开始',
    },
    hero: {
      headline: '您数字化增长的战略伙伴',
      subtitle: '网站开发 · 人工智能 · 自动化流程 · 整合营销',
      cta: '携手共创增长',
      scrollHint: '向下滚动探索更多',
    },
    services: {
      headerTagline: '更明智的方案 · 更强劲的增长',
      tag: '全方位技术能力',
      title: '我们的服务',
      subtitle: '全方位 AI 赋能机构，助力企业构建、自动化与规模化拓展。',
      exploreWork: '探索我们的作品',
      learnDetails: '了解服务详情与规格',
      items: [
        {
          id: 'web-dev',
          title: '网站开发与落地页设计',
          description: '高转化率定制网页应用、响应式落地页及面向极致性能的企业级 Web 解决方案。',
          details: [
            '基于 React、Next.js 与 Vite 的定制 Web 应用，秒级页面加载速度',
            '针对桌面与移动端 UX 极致优化的高转化营销落地页',
            '全面加固的 SEO 架构，集成 JSON-LD 结构化数据与 OpenGraph 分享卡片',
            'Headless CMS 结合、定制数据库架构与 API 后端',
          ],
          techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js', 'PostgreSQL'],
          impactMetric: '客户营销活动平均转化率提升 3.4 倍',
        },
        {
          id: 'ai-solutions',
          title: 'AI 解决方案与智能客服',
          description: '定制化 AI 智能体、24/7 智能客服及面向企业自动化的专属大模型工作流。',
          details: [
            '基于企业专属数据训练的检索增强生成（RAG）系统',
            '24/7 全天候自主客户服务与销售线索筛选智能体',
            '内部知识库助理，实现员工疑问秒级智能查找',
            '定制 Gemini API 集成，支持函数调用与结构化输出',
          ],
          techStack: ['Gemini 2.5/3 SDK', 'TypeScript', '向量数据库', 'Express', 'Python'],
          impactMetric: '客户支持响应时间缩短 88%',
        },
        {
          id: 'automation-crm',
          title: '营销自动化与 CRM 系统',
          description: '全流程工作流无缝连接销售、营销与运营工具，助力企业无忧扩展。',
          details: [
            '自动化线索分发与即时 SMS / 电子邮件自动跟进序列',
            'CRM 系统深层集成与双向同步（HubSpot、Salesforce、Pipedrive）',
            '自动化账单生成、客户入职流程与合同签署发放',
            '定制 Zapier、Make.com 以及专属 Webhook 中间件接口',
          ],
          techStack: ['Make.com', 'Zapier', 'HubSpot API', 'Node.js', 'Webhooks'],
          impactMetric: '每周为团队节省 25+ 小时人工录入时间',
        },
        {
          id: 'digital-marketing',
          title: '数字营销与精准引流',
          description: '数据驱动的高绩效广告投放、多渠道获客漏斗及转化率优化。',
          details: [
            '精准搜索广告（Google Ads）与社交媒体（Meta, LinkedIn）投放管理',
            '高意向获客磁铁漏斗与互动式报价计算器',
            '转化率优化（CRO）A/B 测试与热力图行为分析',
            '全漏斗归因追踪与实时营收数据看板',
          ],
          techStack: ['Google Ads', 'Meta Pixel', 'GA4', 'PostHog', 'A/B 测试工具'],
          impactMetric: '合格潜在客户增长 +245%',
        },
        {
          id: 'ai-video-content',
          title: 'AI 视频与内容创作',
          description: '新一代生成式 AI 视频制作、品牌视觉资产扩展及个性化视频推广。',
          details: [
            '高清 AI 视频商业广告与社交媒体宣传短片创作',
            '合成声音克隆与多语言本地化视频渲染',
            '面向 TikTok、Reels 与 Shorts 的自动化视频剪辑与二次创作',
            '定制 AI 产品视觉图形与品牌统一风格保障',
          ],
          techStack: ['Omni / Gemini Video', 'ElevenLabs', 'Runway', 'Photoshop AI'],
          impactMetric: '视频产出速度提升 10 倍，制作成本降低 80%',
        },
      ],
    },
    portfolio: {
      tag: '精选展示与演示',
      title: '成功案例',
      subtitle: '浏览我们的演示项目，了解我们能为您的企业打造什么。',
      viewProjects: '查看案例',
      laptopHeader: '提升您的企业实力',
      phoneHeader: '您的美丽，我们的宗旨',
      demoTag: '企业级解决方案',
    },
    whyUs: {
      tag: '凡妮莎·艾里斯卓越标准',
      title: '为什么选择 Vanessa Iris？',
      subtitle: '我们将深厚的工程技术实力与战略执行力结合，打造能带来可衡量 ROI 的解决方案。',
      commitmentTag: '我们的承诺',
      missionHeadline: '您的成功，是我们的使命。',
      pillars: [
        {
          title: '创新解决方案',
          description: '时刻保持在最新 AI 技术的最前沿。',
          highlight: '前沿 LLM 与流程自动化',
        },
        {
          title: '定制化服务',
          description: '量身定制契合您业务需求的专属方案。',
          highlight: '定制架构与战略部署',
        },
        {
          title: '可靠全程支持',
          description: '从前期规划到后续持续运营全方位护航。',
          highlight: '24/7 专属运维与 SLA 保障',
        },
      ],
      stats: {
        satisfaction: '99.8% 客户满意度',
        onTime: '100% 按时交付率',
      },
    },
    growth: {
      tag: '可衡量的结果',
      title: '将创意转化为真实增长',
      subtitle: '从高端精致的网站到智能自动化，我们助力企业吸引更多客户，更高效地工作。',
      cta: '立即咨询',
      roiBtnShow: '测算您的投资回报',
      roiBtnHide: '隐藏回报计算器',
      stat1Label: '+245%',
      stat1Sub: '潜客增长',
      stat2Label: '+180%',
      stat2Sub: '销售额提升',
      stat3Label: '-70%',
      stat3Sub: '人工重复工作',
      calculatorTitle: '定制增长测算器',
      monthlyBudgetLabel: '每月数字营销预算：',
      teamSizeLabel: '团队规模（人工运营）：',
      leadsResult: '预计获取潜客',
      revenueResult: '预计新增营收',
      hoursResult: '每周节省小时',
    },
    footer: {
      headline: '让我们携手打造卓越未来',
      cta: '联系我们',
      inquiriesTitle: '直接咨询',
      callTitle: '预约沟通',
      globalTitle: '全球交付服务',
      globalLocs: '旧金山 · 伦敦 · 远程支持',
      copyright: '© 2026 凡妮莎·艾里斯 数字化商业解决方案。保留所有权利。',
      links: {
        services: '服务项目',
        portfolio: '案例展示',
        whyUs: '优势特色',
        privacy: '隐私与联系',
      },
    },
    modal: {
      discoveryTitle: '让我们助您的业务规模化增长',
      discoverySubtitle: '请填写下方信息，我们将为您定制一份专属的 AI 与增长方案。',
      formName: '您的姓名 *',
      formEmail: '工作邮箱 *',
      formPhone: '联系电话',
      formCompany: '公司名称',
      formService: '主要关注服务',
      formMessage: '项目详情与目标',
      formSubmit: '提交咨询申请',
      formSubmitting: '正在生成定制方案...',
      successTitle: '咨询申请已成功收到！',
      successDesc: '我们的高级技术顾问将在 4 小时内与您联系，梳理您的业务路线图。',
      returnBtn: '返回网站首页',
      specTitle: '服务规格说明',
      deliverablesTitle: '核心交付物与能力',
      techTitle: '所用技术与集成工具',
      requestPropBtn: '为该服务索取方案',
      galleryTitle: '客户成功案例与演示',
      gallerySub: '凡妮莎·艾里斯团队打造的真实企业级应用。',
      buildSimilarBtn: '开发类似应用',
    },
  },

  es: {
    brandName: 'VANESSA IRIS',
    brandSubtitle: 'SOLUCIONES DIGITALES',
    nav: {
      services: 'Servicios',
      portfolio: 'Portafolio',
      whyUs: 'Por Qué Elegirnos',
      growth: 'Crecimiento',
      contact: 'Contacto',
      getStarted: 'Comenzar',
    },
    hero: {
      headline: 'Su Socio para el Crecimiento Digital',
      subtitle: 'Web · IA · Automatización · Marketing',
      cta: 'Crezcamos Juntos',
      scrollHint: 'Deslice para explorar',
    },
    services: {
      headerTagline: 'Soluciones más Inteligentes. Crecimiento más Fuerte.',
      tag: 'Capacidades Integrales',
      title: 'Nuestros Servicios',
      subtitle: 'Una agencia integral de IA que le ayuda a construir, automatizar y escalar su negocio.',
      exploreWork: 'Explorar Nuestro Trabajo',
      learnDetails: 'Ver Detalles y Especificaciones',
      items: [
        {
          id: 'web-dev',
          title: 'Desarrollo Web y Páginas de Aterrizaje',
          description: 'Aplicaciones web personalizadas de alta conversión, páginas de aterrizaje adaptables y soluciones web empresariales optimizadas.',
          details: [
            'Aplicaciones web personalizadas en React, Next.js y Vite con carga rápida',
            'Páginas de ventas optimizadas para experiencia de usuario en móvil y escritorio',
            'Arquitectura SEO avanzada con esquemas JSON-LD y tarjetas OpenGraph',
            'Integraciones con CMS Headless, bases de datos y APIs',
          ],
          techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js', 'PostgreSQL'],
          impactMetric: 'Aumento promedio de 3.4x en conversión de campañas',
        },
        {
          id: 'ai-solutions',
          title: 'Soluciones de IA y Chatbots',
          description: 'Agentes de IA personalizados, chatbots inteligentes de atención al cliente y flujos de trabajo de LLM para automatización empresarial.',
          details: [
            'Sistemas RAG personalizados entrenados con datos de su empresa',
            'Chatbots de servicio al cliente y calificación de ventas 24/7',
            'Asistentes de base de conocimientos interna para consultas inmediatas',
            'Integraciones de API Gemini con llamadas a funciones y salidas estructuradas',
          ],
          techStack: ['Gemini 2.5/3 SDK', 'TypeScript', 'Vector DB', 'Express', 'Python'],
          impactMetric: 'Reduce el tiempo de respuesta en soporte en un 88%',
        },
        {
          id: 'automation-crm',
          title: 'Automatización de Marketing y Sistemas CRM',
          description: 'Automatización de flujos de trabajo de extremo a extremo que conecta sus herramientas de ventas, marketing y operaciones.',
          details: [
            'Enrutamiento automático de prospectos y secuencias SMS / correo electrónico',
            'Sincronización bidireccional con CRM (HubSpot, Salesforce, Pipedrive)',
            'Facturación automatizada, flujos de integración de clientes y contratos',
            'Conectores personalizados en Zapier, Make.com y webhooks',
          ],
          techStack: ['Make.com', 'Zapier', 'HubSpot API', 'Node.js', 'Webhooks'],
          impactMetric: 'Ahorra más de 25 horas semanales de trabajo manual',
        },
        {
          id: 'digital-marketing',
          title: 'Marketing Digital y Generación de Clientes',
          description: 'Campañas de rendimiento impulsadas por datos, embudos de adquisición multicanal y optimización de conversión.',
          details: [
            'Gestión de campañas en Google Ads, Meta y LinkedIn',
            'Embudos de captación de prospectos y calculadoras interactivas',
            'Pruebas A/B de optimización de conversión (CRO) y mapas de calor',
            'Seguimiento de atribución y tableros de métricas en tiempo real',
          ],
          techStack: ['Google Ads', 'Meta Pixel', 'GA4', 'PostHog', 'Herramientas A/B'],
          impactMetric: '+245% de incremento en clientes potenciales cualificados',
        },
        {
          id: 'ai-video-content',
          title: 'Video IA y Creación de Contenido',
          description: 'Producción de video generativo con IA de última generación, escalado de activos visuales de marca y alcance en video.',
          details: [
            'Comerciales en video IA de alta definición y anuncios para redes',
            'Clonación de voz sintética y renderizado de video multilingüe',
            'Edición y reutilización automática de contenido para TikTok, Reels y Shorts',
            'Gráficos de producto personalizados con IA y consistencia de marca',
          ],
          techStack: ['Omni / Gemini Video', 'ElevenLabs', 'Runway', 'Photoshop AI'],
          impactMetric: 'Producción de video 10 veces más rápida a un 80% menor costo',
        },
      ],
    },
    portfolio: {
      tag: 'Demostraciones y Casos de Éxito',
      title: 'Nuestro Portafolio',
      subtitle: 'Explore nuestros proyectos de demostración y vea lo que podemos construir para su empresa.',
      viewProjects: 'Ver Proyectos',
      laptopHeader: 'Eleve su Empresa',
      phoneHeader: 'Su Belleza, Nuestra Prioridad',
      demoTag: 'Solución Empresarial',
    },
    whyUs: {
      tag: 'El Estándar Vanessa Iris',
      title: '¿Por Qué Elegir Vanessa Iris?',
      subtitle: 'Combinamos experiencia técnica con ejecución estratégica para soluciones con ROI medible.',
      commitmentTag: 'Nuestro Compromiso',
      missionHeadline: 'Su Éxito es Nuestra Misión.',
      pillars: [
        {
          title: 'Soluciones Innovadoras',
          description: 'Manténgase a la vanguardia con la última tecnología de IA.',
          highlight: 'Modelos LLM y Automatización',
        },
        {
          title: 'Enfoque Personalizado',
          description: 'Soluciones diseñadas a la medida de sus necesidades comerciales.',
          highlight: 'Arquitectura y Estrategia a Medida',
        },
        {
          title: 'Soporte Confiable',
          description: 'Desde la planificación hasta el soporte continuo.',
          highlight: 'Operaciones 24/7 y SLA Garantizado',
        },
      ],
      stats: {
        satisfaction: '99.8% Tasa de Satisfacción',
        onTime: '100% Entrega Puntual',
      },
    },
    growth: {
      tag: 'Resultados Medibles',
      title: 'Convierta las Ideas en Crecimiento Real',
      subtitle: 'Desde un sitio web impactante hasta la automatización inteligente, ayudamos a las empresas a atraer más clientes y trabajar de forma más inteligente.',
      cta: 'Ponerse en Contacto',
      roiBtnShow: 'Estimar su ROI',
      roiBtnHide: 'Ocultar Calculadora',
      stat1Label: '+245%',
      stat1Sub: 'Más Prospectos',
      stat2Label: '+180%',
      stat2Sub: 'Ventas',
      stat3Label: '-70%',
      stat3Sub: 'Trabajo Manual',
      calculatorTitle: 'Calculadora de Crecimiento',
      monthlyBudgetLabel: 'Presupuesto Digital Mensual:',
      teamSizeLabel: 'Tamaño del Equipo (Operaciones):',
      leadsResult: 'Prospectos Generados',
      revenueResult: 'Ingresos Adicionales Est.',
      hoursResult: 'Horas Ahorradas/Sem',
    },
    footer: {
      headline: 'Construyamos Algo Grandioso Juntos',
      cta: 'Contáctenos',
      inquiriesTitle: 'Consultas Directas',
      callTitle: 'Programar una Llamada',
      globalTitle: 'Cobertura Global',
      globalLocs: 'San Francisco · Londres · Remoto',
      copyright: '© 2026 Soluciones Digitales Vanessa Iris. Todos los derechos reservados.',
      links: {
        services: 'Servicios',
        portfolio: 'Portafolio',
        whyUs: 'Por Qué Elegirnos',
        privacy: 'Privacidad y Contacto',
      },
    },
    modal: {
      discoveryTitle: 'Escalemos su Negocio',
      discoverySubtitle: 'Complete sus datos y prepararemos una propuesta de IA y crecimiento a la medida.',
      formName: 'Su Nombre *',
      formEmail: 'Correo Corporativo *',
      formPhone: 'Teléfono',
      formCompany: 'Empresa',
      formService: 'Servicio de Interés',
      formMessage: 'Detalles del Proyecto',
      formSubmit: 'Enviar Solicitud',
      formSubmitting: 'Generando Propuesta...',
      successTitle: '¡Solicitud Recibida!',
      successDesc: 'Nuestro equipo se pondrá en contacto con usted en menos de 4 horas.',
      returnBtn: 'Volver al Sitio Web',
      specTitle: 'Especificación del Servicio',
      deliverablesTitle: 'Entregables Principales',
      techTitle: 'Tecnologías e Integración',
      requestPropBtn: 'Solicitar Propuesta',
      galleryTitle: 'Casos de Éxito y Demos',
      gallerySub: 'Aplicaciones reales desarrolladas por Vanessa Iris.',
      buildSimilarBtn: 'Construir App Similar',
    },
  },

  fr: {
    brandName: 'VANESSA IRIS',
    brandSubtitle: 'SOLUTIONS DIGITALES',
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      whyUs: 'Pourquoi Nous',
      growth: 'Croissance',
      contact: 'Contact',
      getStarted: 'Commencer',
    },
    hero: {
      headline: 'Votre Partenaire pour la Croissance Digitale',
      subtitle: 'Web · IA · Automatisation · Marketing',
      cta: 'Grandissons Ensemble',
      scrollHint: 'Défilez pour explorer',
    },
    services: {
      headerTagline: 'Solutions plus Intelligentes. Croissance plus Forte.',
      tag: 'Compétences Globales',
      title: 'Nos Services',
      subtitle: 'Une agence IA complète pour vous aider à créer, automatiser et développer votre entreprise.',
      exploreWork: 'Explorer Nos Réalisations',
      learnDetails: 'Détails et Spécifications',
      items: [
        {
          id: 'web-dev',
          title: "Développement Web & Pages d'Atterrissage",
          description: "Applications web sur mesure à haute conversion, landing pages réactives et solutions web d'entreprise performantes.",
          details: [
            'Applications web personnalisées React, Next.js et Vite ultra rapides',
            'Landing pages optimisées pour le taux de conversion sur mobile et ordinateur',
            'Architecture SEO avancée avec schémas JSON-LD et cartes OpenGraph',
            'Intégration CMS Headless, bases de données et API',
          ],
          techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js', 'PostgreSQL'],
          impactMetric: 'Augmentation moyenne de 3,4x des conversions',
        },
        {
          id: 'ai-solutions',
          title: 'Solutions IA & Chatbots',
          description: 'Agents IA personnalisés, chatbots de service client intelligents et flux de travail LLM pour l automatisation.',
          details: [
            'Systèmes RAG personnalisés entraînés sur les données de votre entreprise',
            'Chatbots de service client et de qualification commerciale 24/7',
            'Assistants de base de connaissances interne pour les équipes',
            'Intégrations de l API Gemini avec appels de fonctions et sorties structurées',
          ],
          techStack: ['Gemini 2.5/3 SDK', 'TypeScript', 'Vector DB', 'Express', 'Python'],
          impactMetric: 'Réduit le temps de réponse du support de 88%',
        },
        {
          id: 'automation-crm',
          title: 'Automatisation Marketing & Systèmes CRM',
          description: 'Automatisation des flux de travail connectant vos outils de vente, marketing et opérations.',
          details: [
            'Routage automatique des prospects et séquences SMS / email instantanées',
            'Synchronisation bidirectionnelle avec CRM (HubSpot, Salesforce, Pipedrive)',
            'Facturation automatisée, intégration des nouveaux clients et contrats',
            'Webhooks sur mesure via Zapier, Make.com et serveurs dédiés',
          ],
          techStack: ['Make.com', 'Zapier', 'HubSpot API', 'Node.js', 'Webhooks'],
          impactMetric: 'Économise plus de 25h de travail manuel par semaine',
        },
        {
          id: 'digital-marketing',
          title: 'Marketing Digital & Génération de Prospects',
          description: "Campagnes de performance axées sur les données, tunnels d'acquisition multicanaux et optimisation de conversion.",
          details: [
            'Gestion de campagnes ciblées sur Google Ads, Meta et LinkedIn',
            'Tunnels de capture de prospects et calculatrices interactives',
            'Optimisation du taux de conversion (CRO), tests A/B et cartes de chaleur',
            'Tableaux de bord d attribution et suivi du chiffre d affaires en temps réel',
          ],
          techStack: ['Google Ads', 'Meta Pixel', 'GA4', 'PostHog', 'Outils A/B'],
          impactMetric: '+245% de hausse des prospects qualifiés',
        },
        {
          id: 'ai-video-content',
          title: 'Vidéo IA & Création de Contenu',
          description: "Production vidéo IA générative de nouvelle génération, déclinaison d'actifs visuels de marque et vidéos personnalisées.",
          details: [
            'Publicités vidéo IA haute définition et visuels pour réseaux sociaux',
            'Clonage de voix de synthèse et rendu vidéo multilingue',
            'Montage et réutilisation automatique pour TikTok, Reels et Shorts',
            'Graphismes produits IA et respect de la charte graphique',
          ],
          techStack: ['Omni / Gemini Video', 'ElevenLabs', 'Runway', 'Photoshop AI'],
          impactMetric: 'Production vidéo 10x plus rapide pour 80% de coût en moins',
        },
      ],
    },
    portfolio: {
      tag: 'Démonstrations & Réalisations',
      title: 'Notre Portfolio',
      subtitle: 'Découvrez nos projets de démonstration et voyez ce que nous pouvons concevoir pour votre entreprise.',
      viewProjects: 'Voir les Projets',
      laptopHeader: 'Élevez Votre Entreprise',
      phoneHeader: 'Votre Beauté, Notre Priorité',
      demoTag: 'Solution Entreprise',
    },
    whyUs: {
      tag: 'Le Standard Vanessa Iris',
      title: 'Pourquoi Choisir Vanessa Iris ?',
      subtitle: 'Nous associons expertise technique approfondie et exécution stratégique pour garantir un ROI mesurable.',
      commitmentTag: 'Notre Engagement',
      missionHeadline: 'Votre Succès est Notre Mission.',
      pillars: [
        {
          title: 'Solutions Innovantes',
          description: 'Restez à la pointe grâce à la toute dernière technologie IA.',
          highlight: 'Modeles LLM & Automatisation',
        },
        {
          title: 'Approche Personnalisée',
          description: 'Des solutions adaptées aux besoins spécifiques de votre entreprise.',
          highlight: 'Architecture & Stratégie Sur Mesure',
        },
        {
          title: 'Support Fiable',
          description: "De la planification initiale à l'accompagnement continu.",
          highlight: 'Support Opérationnel 24/7 & SLA',
        },
      ],
      stats: {
        satisfaction: '99,8% de Satisfaction Client',
        onTime: '100% de Projets Livrés à Temps',
      },
    },
    growth: {
      tag: 'Résultats Mesurables',
      title: 'Transformez vos Idées en Véritable Croissance',
      subtitle: "D'un site web d'exception à l'automatisation intelligente, nous aidons les entreprises à attirer plus de clients et à travailler plus efficacement.",
      cta: 'Prendre Contact',
      roiBtnShow: 'Estimer Votre ROI',
      roiBtnHide: 'Masquer la Calculatrice',
      stat1Label: '+245%',
      stat1Sub: 'De Prospects',
      stat2Label: '+180%',
      stat2Sub: 'De Ventes',
      stat3Label: '-70%',
      stat3Sub: 'De Travail Manuel',
      calculatorTitle: 'Estimateur de Croissance Sur Mesure',
      monthlyBudgetLabel: 'Budget Digital Mensuel :',
      teamSizeLabel: "Taille de l'Équipe (Opérations Manuelles) :",
      leadsResult: 'Prospects Générés',
      revenueResult: 'Revenu Additionnel Est.',
      hoursResult: 'Heures Économisées/Sem',
    },
    footer: {
      headline: 'Construisons Ensemble Quelque Chose de Grand',
      cta: 'Nous Contacter',
      inquiriesTitle: 'Demandes Directes',
      callTitle: 'Planifier un Appel',
      globalTitle: 'Présence Internationale',
      globalLocs: 'San Francisco · Londres · À distance',
      copyright: '© 2026 Solutions Digitales Vanessa Iris. Tous droits réservés.',
      links: {
        services: 'Services',
        portfolio: 'Portfolio',
        whyUs: 'Pourquoi Nous',
        privacy: 'Confidentialité & Contact',
      },
    },
    modal: {
      discoveryTitle: 'Développons Votre Entreprise',
      discoverySubtitle: 'Remplissez le formulaire ci-dessous et nous préparerons une proposition IA sur mesure.',
      formName: 'Votre Nom *',
      formEmail: 'Email Professionnel *',
      formPhone: 'Téléphone',
      formCompany: 'Nom de l Entreprise',
      formService: 'Service Principal Souhaité',
      formMessage: 'Détails du Projet',
      formSubmit: 'Envoyer la Demande',
      formSubmitting: 'Génération de la Proposition...',
      successTitle: 'Demande Bien Reçue !',
      successDesc: 'Notre expert technique vous recontactera sous 4 heures.',
      returnBtn: 'Retour au Site',
      specTitle: 'Spécification du Service',
      deliverablesTitle: 'Livrables Principaux',
      techTitle: 'Technologies & Intégrations',
      requestPropBtn: 'Demander une Proposition',
      galleryTitle: 'Histoires de Succès & Demos',
      gallerySub: 'Applications concrètes créées par Vanessa Iris.',
      buildSimilarBtn: 'Créer une App Similaire',
    },
  },
};
