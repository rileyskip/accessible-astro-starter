export type ExperienceEntry = {
  title: string
  company: string
  period: string
  bullets: string[]
}

export type EducationEntry = {
  degree: string
  school: string
  period: string
}

export type ToolGroup = {
  category: string
  items: string[]
}

export const contact = {
  phone: '334-390-1674',
  email: 'ryskipperdev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ryskipper/',
  portfolio: 'https://rileyskip.vercel.app/',
}

export const toolGroups: ToolGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5'],
  },
  {
    category: 'Styling',
    items: ['Sass', 'Bootstrap', 'Tailwind CSS', 'CSS3'],
  },
  {
    category: 'System Design',
    items: ['Figma', 'Adobe Creative Cloud'],
  },
  {
    category: 'DevOps',
    items: ['AWS', 'Docker', 'CI/CD pipelines', 'GitLab'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Accessibility',
    items: ['WCAG 2.2 compliance', 'Deque', 'Adobe'],
  },
  {
    category: 'CMS',
    items: ['Drupal', 'WordPress'],
  },
  {
    category: 'UX Research & Testing',
    items: ['Google Analytics', 'Moz Pro', 'Lighthouse'],
  },
]

export const experience: ExperienceEntry[] = [
  {
    title: 'Drupal Web Developer',
    company: 'Rutgers University',
    period: 'May 2022 – Current',
    bullets: [
      'Building dynamic Drupal templates and custom themes across websites for enhanced content publishing.',
      'Spearheading WCAG 2.1 compliance initiatives through UI component updates, reporting, and documentation.',
      'Interface designer and Co-developer of a Next.js application using React and Tailwind CSS.',
      'Routine bug resolutions through systematic QA testing and local environment debugging with Docker/Lando.',
      'Collaborating with cross-functional teams using GitLab for version control.',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'Legal Associations Management',
    period: 'Aug 2021 – May 2022',
    bullets: [
      'Developed and maintained WordPress sites for legal associations, ensuring uptime and responsiveness.',
      'Implemented custom algorithms using Oxygen Builder and jQuery.',
      'Led QA testing and wireframing in Figma, collaborating with stakeholders to deliver user-centric designs.',
      'Improved organic search rankings through monthly SEO optimization using Moz Pro and Alexa.',
    ],
  },
  {
    title: 'Search Engine Optimization Consultant',
    company: 'Philadelphia Printworks',
    period: 'Jan 2021 – Mar 2021',
    bullets: [
      'Monitored interaction trends through reporting and implemented SEO strategies.',
      'Debugged code on the Shopify CMS platform.',
      'Reported and resolved errors using Google Analytics and Lighthouse.',
    ],
  },
  {
    title: 'Freelance Web Designer and Developer',
    company: 'Eclipse Inspection',
    period: 'Jun 2020 – Sep 2020',
    bullets: [
      'Collaborated with the client on brand identity, including color scheme, logo, font, website layout, and architecture.',
      'Designed and deployed a CMS-built site for handoff and long-term client maintenance.',
      'Implemented SEO using Google Analytics.',
    ],
  },
  {
    title: 'UX/UI Intern',
    company: 'Philadelphia Printworks',
    period: 'Apr 2019 – Oct 2019',
    bullets: [
      'Monitored and reported interaction trends in Google Analytics.',
      'Implemented SEO strategies and updated website architecture based on user trends.',
      'Collaborated on a web navigation redesign for improved UX.',
    ],
  },
]

export const education: EducationEntry[] = [
  {
    degree: 'Internet & Web Development B.S.',
    school: 'Arizona State University',
    period: '2017 – 2019',
  },
  {
    degree: 'Web Design A.A.S.',
    school: 'Camden County College',
    period: '2015 – 2017',
  },
]
