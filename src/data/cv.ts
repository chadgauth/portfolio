export interface CVItem {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  impact: number; // 1-10 scale for sorting by impact
  highlights: string[];
}

export const cvData: CVItem[] = [
  {
    id: "handraise-2023",
    title: "Software Engineer",
    company: "Handraise",
    location: "Austin, TX",
    startDate: "2023",
    endDate: "May 2025",
    impact: 10,
    highlights: [
      "Built and deployed a high-performance, real-time filtering system capable of handling thousands of dynamic filters on the front end, enabling instant cross-intersections of data such as high-scoring news impact analysis by readership, platform, and tier",
      "Reduced CI build times for the front-end by 70% in the first week by adopting PNPM and optimizing GitHub Action caching",
      "Partnered with product and design teams to define, build, and launch high-impact features, ensuring measurable improvements in usability",
      "Shifted release process from stage/main branches to tag-based deployments, cutting merge conflicts and increasing release reliability",
      "Integrated AI-assisted code reviews (ellipsis.dev) to automate 50% of routine fixes, accelerating delivery cycles",
      "Tuned Postgres parameters on Aurora SSD, delivering 10x faster query performance and improving customer-facing load times",
      "Mentored contract and senior engineers, increasing team delivery velocity and ownership"
    ]
  },
  {
    id: "crowdstreet-2022",
    title: "Senior Software Engineer & Team Lead",
    company: "CrowdStreet",
    location: "Austin, TX",
    startDate: "2022",
    endDate: "2023",
    impact: 9,
    highlights: [
      "Directed a cross-functional team to deliver an unplanned product MVP within two sprints, meeting executive expectations",
      "Refactored NGINX configurations, removing 2,000+ lines of redundant code and enabling rapid global updates",
      "Instituted front-end performance best practices, improving application responsiveness and developer productivity",
      "Led team training on Chrome DevTools and React patterns, raising code quality across the organization"
    ]
  },
  {
    id: "progressive-2013",
    title: "IT Applications Developer Senior",
    company: "Progressive Insurance",
    location: "Austin, TX",
    startDate: "2013",
    endDate: "2021",
    impact: 9,
    highlights: [
      "Reduced app loading times by 90%, saving ~3,500 hours annually in employee productivity",
      "Spearheaded enhancements that eliminated 130 cumulative employee-hours per day in manual workflows",
      "Championed mentorship programs, leading to successful intern conversions and internal promotions",
      "Mastered Angular and SQL rapidly to deliver critical projects on schedule"
    ]
  },
  {
    id: "additional-projects",
    title: "Additional Projects",
    company: "Independent",
    location: "Austin, TX",
    startDate: "2010",
    endDate: "Present",
    impact: 7,
    highlights: [
      "Applied machine learning to Austin real estate analysis, launching an Airbnb venture with projected 25% annual ROI",
      "Contributed to Roo Code (open-source IDE extension), improving UI/UX interaction and simplifying component architecture"
    ]
  }
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Front-End",
    skills: [
      "React", "TypeScript", "JavaScript", "CSS", "Tailwind", "HTML5", 
      "Redux", "GraphQL", "REST APIs", "Responsive Design", "Performance Optimization"
    ]
  },
  {
    name: "Back-End",
    skills: [
      "Node.js", "Python", "Express", "PostgreSQL", "Aurora", "MySQL", 
      "MongoDB", "API Design", "Database Optimization", "Microservices"
    ]
  },
  {
    name: "DevOps/Cloud",
    skills: [
      "AWS", "Azure", "Terraform", "CI/CD", "GitHub Actions", "Docker", 
      "Infrastructure as Code", "Performance Monitoring", "System Architecture"
    ]
  },
  {
    name: "Leadership & Product",
    skills: [
      "Technical Leadership", "Team Mentorship", "Cross-functional Collaboration", 
      "Product Strategy", "Agile Development", "Code Reviews", "Architecture Planning"
    ]
  },
  {
    name: "Monitoring & Tools",
    skills: [
      "Grafana", "Datadog", "Sentry", "Jira", "Figma", "Growthbook", 
      "Chrome DevTools", "Git", "PNPM", "Vite"
    ]
  }
];

export const coreCompetencies = [
  "Product-Focused Full-Stack Development",
  "Technical Leadership & Mentorship", 
  "CI/CD & DevOps Automation",
  "Cross-Functional Collaboration",
  "Scalable Architecture Design",
  "Cloud Infrastructure (AWS, Azure, Terraform)",
  "Database Optimization (Postgres, Aurora)",
  "AI Tooling Integration & Process Automation"
];

export const education = [
  {
    degree: "B.S. Information Systems",
    school: "Gannon University",
    period: "2008 – 2013"
  },
  {
    degree: "B.A. Theatre/Communication Arts", 
    school: "Gannon University",
    period: "2008 – 2013"
  }
];