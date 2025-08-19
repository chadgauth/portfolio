// CV2 data contracts and demo data (UI consumes this; no DOM or behavior here)

export interface CV2Achievement {
  title: string;
  description: string;
  technologies: string[];
}

export interface CV2Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  impact: number; // 1-10
  stack: string[];
  achievements: CV2Achievement[]; // keep 2-4 per role for density
}

export interface CV2Skill {
  name: string;
  count: number; // number of roles using it
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'DevOps' | 'API' | 'Other';
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

// Demo data (MVP slice). Replace with real data once UI is validated.
export const mockExperiences: CV2Experience[] = [
  {
    id: 'techcorp-senior',
    title: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'Austin, TX',
    startDate: '2023',
    endDate: 'Present',
    impact: 9,
    stack: ['React', 'TypeScript', 'Node.js', 'AWS', 'GraphQL', 'PostgreSQL'],
    achievements: [
      {
        title: 'Real-time Data Pipeline Architecture',
        description:
          'Designed and implemented a real-time data processing pipeline handling 10M+ events/day with sub-100ms latency',
        technologies: ['Apache Kafka', 'Redis', 'TypeScript', 'AWS Lambda'],
      },
      {
        title: 'Micro-frontend Platform Migration',
        description:
          'Led architectural redesign from monolith to micro-frontends, reducing deployment time by 80% and improving team autonomy',
        technologies: ['React', 'Webpack Module Federation', 'Docker', 'Kubernetes'],
      },
    ],
  },
  {
    id: 'startupco-fullstack',
    title: 'Full Stack Developer',
    company: 'StartupCo',
    location: 'Remote',
    startDate: '2022',
    endDate: '2023',
    impact: 8,
    stack: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'FastAPI', 'Redis'],
    achievements: [
      {
        title: 'Zero-downtime Database Migration System',
        description:
          'Built automated migration framework enabling schema changes without service interruption for 50k+ daily active users',
        technologies: ['PostgreSQL', 'Python', 'FastAPI', 'Docker'],
      },
      {
        title: 'Performance Optimization Initiative',
        description:
          'Reduced API response times by 60% through query optimization, caching strategies, and database indexing improvements',
        technologies: ['Redis', 'PostgreSQL', 'Python', 'Monitoring'],
      },
    ],
  },
  {
    id: 'designstudio-frontend',
    title: 'Frontend Engineer',
    company: 'DesignStudio',
    location: 'San Francisco, CA',
    startDate: '2021',
    endDate: '2022',
    impact: 7,
    stack: ['React', 'CSS', 'JavaScript', 'Figma', 'Webpack', 'Storybook'],
    achievements: [
      {
        title: 'Design System Implementation',
        description:
          'Created comprehensive design system with 50+ reusable components, reducing development time by 40% across 3 product teams',
        technologies: ['React', 'Storybook', 'CSS-in-JS', 'TypeScript'],
      },
      {
        title: 'Accessibility Compliance Overhaul',
        description:
          'Led WCAG 2.1 AA compliance initiative, implementing automated testing and achieving 100% accessibility score',
        technologies: ['React', 'Jest', 'Cypress', 'Screen Readers'],
      },
    ],
  },
];

export const mockSkills: CV2Skill[] = [
  { name: 'React', count: 3, category: 'Frontend', level: 'Expert' },
  { name: 'TypeScript', count: 2, category: 'Frontend', level: 'Expert' },
  { name: 'Node.js', count: 1, category: 'Backend', level: 'Advanced' },
  { name: 'Python', count: 2, category: 'Backend', level: 'Advanced' },
  { name: 'PostgreSQL', count: 3, category: 'Database', level: 'Expert' },
  { name: 'AWS', count: 1, category: 'Cloud', level: 'Advanced' },
  { name: 'Docker', count: 2, category: 'DevOps', level: 'Advanced' },
  { name: 'GraphQL', count: 1, category: 'API', level: 'Intermediate' },
];