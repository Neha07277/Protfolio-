export const profile = {
  name: 'Neha Pal',
  title: 'Full-Stack Software Developer & Technical Coordinator',
  location: 'Mumbai, Maharashtra',
  status: 'Open to full-time roles & high-impact projects',
  tagline:
    'I architect scalable full-stack web applications and robust enterprise data pipelines — specializing in MERN, PERN, and reliable business system integrations.',
  email: 'neha.pal072002@gmail.com',
  phone: '+91 98673 80182',
  github: 'https://github.com/Neha07277',
  linkedin: 'https://www.linkedin.com/in/neha-pal-8b6a2521b/',
  resume: '/resume.pdf',
}

export const stats = [
  {
    value: '4+',
    label: 'Production Systems',
    detail: 'WorkEye, ERPNext Sync, CRM, & Mobile App',
  },
  {
    value: 'Dual',
    label: 'Developer + Coordinator',
    detail: 'Full-stack engineering & developer team leadership',
  },
  {
    value: '9.2+',
    label: 'Academic Distinction',
    detail: 'MCA (CGPA 9.06) & B.Sc. IT (CGPA 9.27)',
  },
  {
    value: '100%',
    label: 'End-to-End Delivery',
    detail: 'From schema architecture to polished responsive UI',
  },
]

export const services = [
  {
    title: 'Full-Stack Web Engineering',
    tag: 'MERN & PERN',
    description:
      'Engineering high-performance web applications using React, Node.js, Express, and PostgreSQL/MySQL with focus on speed, responsiveness, and clean architecture.',
  },
  {
    title: 'Enterprise Sync & Middleware',
    tag: 'Real-Time Sync',
    description:
      'Connecting disparate business tools like Tally Prime, ERPNext, CRMs, and third-party APIs with reliable, schema-mapped bi-directional data flow.',
  },
  {
    title: 'Technical Project Coordination',
    tag: 'Team Leadership',
    description:
      'Bridging design, engineering, and stakeholder delivery — scoping technical specs, sprint tracking, resolving blockers, and keeping concurrent deliverables on schedule.',
  },
]

export const about = {
  intro:
    'Full-stack developer (MERN/PERN) and Technical Project Coordinator with hands-on production experience building and scaling features across four live software products at Rajlaxmi Solutions — an employee productivity tracking suite, an enterprise CRM, a Tally–ERPNext bi-directional middleware, and an Android client for Tally Prime.',
  highlights: [
    'Dual-role strength: writing clean, production-grade code while coordinating a developer team, keeping sprints on track, and mentoring junior engineers.',
    'Comfortable owning complex features end-to-end: database modeling, RESTful API design, authentication, and fluid responsive frontend interfaces.',
    'Proven track record integrating enterprise software, Facebook Graph API, and real-time synchronization pipelines under strict reliability demands.',
  ],
  education: [
    'MCA — TIMSCDR, University of Mumbai (CGPA 9.06)',
    'B.Sc. IT — Ramanand Arya D.A.V. College, University of Mumbai (CGPA 9.27)',
  ],
}

export const skills = [
  {
    label: 'Languages',
    accent: 'amber',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
    items: ['JavaScript (ES6+)', 'SQL', 'Java (Core)'],
  },
  {
    label: 'Frontend',
    accent: 'cyan',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    items: ['React.js', 'Tailwind CSS', 'HTML5 / CSS3', 'Bootstrap', 'Framer Motion', 'Responsive UI'],
  },
  {
    label: 'Backend',
    accent: 'emerald',
    color: '#10b981',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'Middleware Architecture'],
  },
  {
    label: 'Database',
    accent: 'indigo',
    color: '#6366f1',
    gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Mongoose', 'Schema Design'],
  },
  {
    label: 'Integrations',
    accent: 'purple',
    color: '#a855f7',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
    items: ['Tally Prime XML/ODBC', 'ERPNext REST API', 'Facebook Lead Ads', 'Cloudinary API'],
  },
  {
    label: 'Tools & DevOps',
    accent: 'rose',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 via-rose-500/5 to-transparent',
    items: ['Git & GitHub', 'Postman', 'VS Code', 'Docker (Basic)', 'CI/CD Pipelines', 'Vercel'],
  },
]

export const experience = [
  {
    role: 'Software Developer',
    note: 'Technical Project Coordinator (Dual Role)',
    company: 'Rajlaxmi Solutions Pvt. Ltd.',
    period: 'March 2026 – Present',
    location: 'Mumbai, India',
    badge: 'Dual Role • High Impact',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'PostgreSQL',
      'REST APIs',
      'Tally Prime',
      'ERPNext',
      'Android',
      'Facebook Lead Ads',
    ],
    points: [
      'Engineered check-in/check-out, periodic background screenshot capture, and detailed productivity-analytics modules for WorkEye employee monitoring system.',
      'Architected and deployed a mission-critical Tally Prime – ERPNext middleware that automates business data synchronization across differing corporate schemas.',
      'Constructed complete CRM lead management engine: lead import, dynamic sales team assignment, follow-up queues, and webhook integration with Facebook Lead Ads.',
      'Spearheading development of Tally Connect Android application from scratch for mobile voucher creation and live 2-way financial synchronization.',
      'Directly coordinate developer interns across all four live products: managing sprint backlogs, running daily standups, resolving technical roadblocks, and reporting delivery metrics to the Team Lead.',
    ],
  },
]

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'client', label: 'Client & Enterprise' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'academic', label: 'Academic & Hackathon' },
]

export const projects = [
  {
    title: 'WorkEye — Employee Productivity System',
    category: 'client',
    type: 'Enterprise',
    status: 'Client Production',
    tagline: 'Enterprise-grade employee monitoring with automated telemetry & attendance tracking',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    theme: {
      accent: '#38bdf8',
      accentDark: '#0284c7',
      gradient: 'from-cyan-500/25 via-blue-500/10 to-transparent',
      badge: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      glow: 'rgba(56, 189, 248, 0.35)',
      indicator: 'bg-cyan-400',
    },
    metric: 'Enterprise Monitored',
    bullets: [
      'Engineered automated clock-in/clock-out attendance logging with precise timestamp verification.',
      'Implemented background periodic desktop screenshot capture and activity logging.',
      'Designed executive productivity dashboards and historical activity reporting with interactive charts.',
    ],
    links: [{ label: 'Enterprise Client • Code Private', href: null }],
  },
  {
    title: 'Tally Prime — ERPNext Middleware',
    category: 'client',
    type: 'Enterprise',
    status: 'Client Production',
    tagline: 'High-reliability bi-directional synchronization bridge between accounting & ERP systems',
    stack: ['Node.js', 'Express.js', 'REST APIs', 'ERPNext', 'Tally Prime XML'],
    theme: {
      accent: '#34d399',
      accentDark: '#059669',
      gradient: 'from-emerald-500/25 via-teal-500/10 to-transparent',
      badge: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      glow: 'rgba(52, 211, 153, 0.35)',
      indicator: 'bg-emerald-400',
    },
    metric: 'Real-Time Sync Engine',
    bullets: [
      'Built automated middleware orchestrating data synchronization between Tally Prime and ERPNext.',
      'Implemented robust data transformation routines to map contrasting ledger schemas without data loss.',
      'Integrated comprehensive error recovery, retries, and audit logging for transactional accuracy.',
    ],
    links: [{ label: 'Enterprise Client • Code Private', href: null }],
  },
  {
    title: 'Enterprise CRM & Lead Automation',
    category: 'client',
    type: 'Enterprise',
    status: 'Client Production',
    tagline: 'Full-cycle customer relationship platform with automatic social lead capture',
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Facebook Graph API'],
    theme: {
      accent: '#c084fc',
      accentDark: '#7e22ce',
      gradient: 'from-purple-500/25 via-indigo-500/10 to-transparent',
      badge: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      glow: 'rgba(192, 132, 252, 0.35)',
      indicator: 'bg-purple-400',
    },
    metric: 'Instant Lead Ingestion',
    bullets: [
      'Engineered full customer pipeline: bulk lead import, automatic rep distribution, and deal stages.',
      'Integrated Facebook Graph API webhooks to automatically capture and convert incoming ad leads in real-time.',
      'Delivered scheduled follow-up reminders and customer conversation history logging.',
    ],
    links: [{ label: 'Enterprise Client • Code Private', href: null }],
  },
  {
    title: 'Tally Connect — Android App',
    category: 'client',
    type: 'Enterprise',
    status: 'Active Development',
    tagline: 'Native mobile client enabling real-time Tally Prime accounting operations on the road',
    stack: ['Android', 'REST APIs', 'Tally Prime', 'JSON Sync'],
    theme: {
      accent: '#fbbf24',
      accentDark: '#d97706',
      gradient: 'from-amber-500/25 via-orange-500/10 to-transparent',
      badge: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      glow: 'rgba(251, 191, 36, 0.35)',
      indicator: 'bg-amber-400',
    },
    metric: 'Mobile Voucher Creation',
    bullets: [
      'Building complete Android client to query live Tally sales, purchase ledgers, and invoice records.',
      'Crafted mobile voucher creation workflow with instant validation and two-way backend sync.',
      'Engineered offline-ready caching for field sales representatives.',
    ],
    links: [{ label: 'In Active Development', href: null }],
  },
  {
    title: 'Connectify — Social Networking Platform',
    category: 'fullstack',
    type: 'Personal',
    status: 'Shipped 2025',
    tagline: 'Modern MERN social networking application with rich media uploads & JWT security',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Cloudinary'],
    theme: {
      accent: '#f472b6',
      accentDark: '#db2777',
      gradient: 'from-pink-500/25 via-rose-500/10 to-transparent',
      badge: 'text-pink-400 border-pink-500/30 bg-pink-500/10',
      glow: 'rgba(244, 114, 182, 0.35)',
      indicator: 'bg-pink-400',
    },
    metric: 'Full MERN Stack',
    bullets: [
      'Implemented secure authentication flow using JSON Web Tokens (JWT) and encrypted password hashing.',
      'Created interactive social feed, profile customizer, and mutual connection relationship graphs.',
      'Integrated Cloudinary CDN for dynamic client image optimization and multi-format media hosting.',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/Neha07277/connectify' },
    ],
  },
  {
    title: 'LearnSync — Project Management Suite',
    category: 'academic',
    type: 'Academic',
    status: 'Shipped & Deployed',
    tagline: 'Mentor–student project coordination platform with milestone reviews and kanban flow',
    stack: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Vercel'],
    theme: {
      accent: '#818cf8',
      accentDark: '#4f46e5',
      gradient: 'from-indigo-500/25 via-violet-500/10 to-transparent',
      badge: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      glow: 'rgba(129, 140, 248, 0.35)',
      indicator: 'bg-indigo-400',
    },
    metric: 'Live Production App',
    bullets: [
      'Architected centralized academic hub for university mentorship, assignment milestones, and feedback.',
      'Built Kanban-style To-Do module, project asset repository, and automated submission timelines.',
      'Deployed on Vercel with PostgreSQL cloud database with sub-second response times.',
    ],
    links: [
      { label: 'GitHub Code', href: 'https://github.com/Neha07277/Learnsync' },
      { label: 'Live Demo', href: 'https://learnsync-ivory.vercel.app/' },
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school:
      'Thakur Institute of Management Studies, Career Development & Research (TIMSCDR), University of Mumbai',
    years: '2024 – 2026',
    note: 'CGPA 9.06 / 10.0',
    badge: 'Distinction',
  },
  {
    degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    school: 'Ramanand Arya D.A.V. College, University of Mumbai',
    years: '2020 – 2023',
    note: 'CGPA 9.27 / 10.0',
    badge: 'Top Tier Honors',
  },
]

export const credentials = {
  certifications: [
    { title: 'Programming in Java (Elite + Top 5%)', issuer: 'NPTEL', date: 'Apr 2025' },
    { title: 'SQL & Relational Databases 101', issuer: 'IBM', date: 'Aug 2025' },
    { title: 'AWS Cloud Essentials', issuer: 'Udemy', date: 'Sept 2025' },
  ],
  achievements: [
    { title: '3rd Place Award — ICAIM 2025 National Hackathon', org: 'TIMSCDR Mumbai', date: '2025' },
    { title: 'Co-presented Published Research Poster at ICAIM Conference', org: 'ICAIM', date: '2025' },
  ],
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]