export const profile = {
  name: 'Neha Pal',
  title: 'Full-Stack Software Developer',
  location: 'Mumbai, India',
  tagline:
    'I build full-stack web applications and the integrations that connect them — MERN, PERN, and REST APIs.',
  email: 'neha.pal072002@gmail.com',
  phone: '+91 98673 80182',
  github: 'https://github.com/Neha07277',
  linkedin: 'https://www.linkedin.com/in/neha-pal-8b6a2521b/',
  resume: '/resume.pdf',
}

export const about = {
  intro:
    'Full-stack developer (MERN/PERN) with 5+ months of professional experience building production features across four live software products — an employee productivity tracker, a CRM, a Tally–ERPNext middleware, and an Android app for Tally Prime.',
  highlights: [
    'Hands-on with React, Node.js, Express, and REST API integration, plus experience coordinating a small developer team and keeping delivery on schedule.',
    'Comfortable owning a feature end-to-end — from data model to UI to production sync.',
  ],
  education: [
    'MCA — University of Mumbai (CGPA 9.06)',
    'B.Sc. IT — University of Mumbai (CGPA 9.27)',
  ],
}

export const skills = [
  { label: 'Languages', items: ['JavaScript'] },
  { label: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js'] },
  { label: 'Database', items: ['MySQL', 'PostgreSQL'] },
  {
    label: 'Integrations',
    items: ['REST APIs', 'Tally Prime', 'ERPNext', 'Facebook Lead Ads'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker (basic)', 'CI/CD (basic)'],
  },
]

export const experience = [
  {
    role: 'Software Developer',
    note: 'Technical Project Coordinator (dual role)',
    company: 'Rajlaxmi Solutions Pvt. Ltd.',
    period: 'March 2026 – Present',
    location: 'Mumbai',
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
      'Built check-in/check-out, periodic screenshot capture, and productivity-tracking features for WorkEye, an employee productivity monitoring system.',
      'Developed a Tally Prime – ERPNext middleware that transfers and synchronizes business data between the two systems in production use.',
      'Built CRM lead-management features — import, assignment, and follow-up/deal tracking — and integrated Facebook Lead Ads for automatic lead capture.',
      'Building an Android app from scratch (Tally Connect) for viewing Tally Prime sales, purchases, and invoices and creating vouchers on mobile, with real-time two-way sync.',
      'Coordinate a team of intern developers across all four products — tracking deadlines, surfacing blockers, and reporting status to the Team Lead.',
    ],
  },
]

export const projects = [
  {
    title: 'WorkEye — Employee Productivity Tracking System',
    type: 'Professional',
    status: 'Client project, code private',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    bullets: [
      'Built check-in/check-out attendance flow.',
      'Implemented periodic screenshot capture for activity monitoring.',
      'Developed productivity-tracking and reporting features.',
    ],
    links: [
      { label: 'Client project, code private', href: null },
    ],
  },
  {
    title: 'Tally Prime — ERPNext Middleware',
    type: 'Professional',
    status: 'Client project, code private',
    stack: ['Node.js', 'Express.js', 'REST APIs', 'ERPNext', 'Tally Prime'],
    bullets: [
      'Built middleware to transfer and synchronize business data between Tally Prime and ERPNext.',
      'Handled data mapping and sync reliability between two systems with different schemas.',
    ],
    links: [
      { label: 'Client project, code private', href: null },
    ],
  },
  {
    title: 'CRM — Customer Relationship Management',
    type: 'Professional',
    status: 'Client project, code private',
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Facebook Graph API'],
    bullets: [
      'Built lead management: import, assignment, follow-ups, and deal management.',
      'Integrated Facebook Lead Ads for automatic lead capture.',
    ],
    links: [
      { label: 'Client project, code private', href: null },
    ],
  },
  {
    title: 'Tally Connect — Android App',
    type: 'Professional',
    status: 'In development',
    stack: ['Android', 'REST APIs', 'Tally Prime'],
    bullets: [
      'Building an Android app from scratch to view Tally Prime data (sales, purchases, invoices) and create vouchers on mobile.',
      'Implementing real-time two-way sync with Tally Prime.',
    ],
    links: [
      { label: 'In development', href: null },
    ],
  },
  {
    title: 'Connectify — Full-Stack Social Networking App',
    type: 'Personal',
    status: '2025',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Cloudinary'],
    bullets: [
      'Implemented signup/login, profile management, and user connections using React and REST APIs.',
      'Modeled user and connection data in MongoDB Atlas with Mongoose.',
      'Integrated Cloudinary for image uploads and JWT for secure access.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Neha07277/connectify' },
    ],
  },
  {
    title: 'LearnSync — Student Project Management Platform',
    type: 'Academic',
    status: '2024 – 25',
    stack: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js'],
    bullets: [
      'Built a platform for mentor–student collaboration, task tracking, and progress monitoring.',
      "Implemented a To-Do module, project upload flow, and status-update workflow.",
      'Added mentor feedback and review features.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Neha07277/Learnsync' },
      { label: 'Live', href: 'https://learnsync-ivory.vercel.app/' },
    ],
  },
]

export const education = [
  {
    degree: 'MCA',
    school: 'TIMSCDR, University of Mumbai',
    years: '2024 – 2026',
    note: 'CGPA 9.06',
  },
  {
    degree: 'B.Sc. IT',
    school: 'Ramanand Arya D.A.V. College, University of Mumbai',
    years: '2020 – 2023',
    note: 'CGPA 9.27',
  },
]

export const credentials = {
  certifications: [
    'NPTEL — Programming in Java (Elite + Top 5%), Apr 2025',
    'SQL and Relational Databases 101 — IBM, Aug 2025',
    'AWS Essentials — Udemy, Sept 2025',
  ],
  achievements: [
    '3rd Place — ICAIM 2025 Hackathon, TIMSCDR Mumbai',
    'Co-presented a research poster at ICAIM',
  ],
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]