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
    startDate: "Dec 2023",
    endDate: "May 2025",
    impact: 10,
    highlights: [
      "Built and deployed a high-performance, real-time filtering system capable of handling thousands of dynamic filters on the front end, enabling instant cross-intersections of data such as high-scoring news impact analysis by readership, platform, and tier",
      "Replaced ESLint with Biome, cutting lint/format cycles from ~30–60s to under 5s",
      "Reduced CI build times for the front-end by 70% in the first week by adopting PNPM and optimizing GitHub Action caching",
      "Founded PixelPress, a Storybook-based component library aligned with Figma designs to validate UX pre-API and reduce rework",
      "Championed GraphQL adoption with GQL.tada for type-safe contracts, reducing runtime errors and version mismatches",
      "Shifted release process from stage/main branches to tag-based deployments, cutting merge conflicts and increasing release reliability",
      "Integrated AI-assisted code reviews (ellipsis.dev) to automate 50% of routine fixes, accelerating delivery cycles",
      "Modeled Postgres schema improvements (partitioning and normalization) and tuned Postgres parameters on Aurora SSD, delivering faster query performance and improving customer-facing load times",
      "Mentored contract and senior engineers, increasing team delivery velocity and ownership",
      "Stack: React, TypeScript, Python, Biome, GraphQL (gql.tada), PostgreSQL (Aurora), AWS, Terraform, GitHub Actions, PNPM, Vite, Storybook, Figma"
    ]
  },
  {
    id: "crowdstreet-2022",
    title: "Senior Software Engineer & Team Lead",
    company: "CrowdStreet",
    location: "Austin, TX",
    startDate: "Jun 2022",
    endDate: "Oct 2023",
    impact: 9,
    highlights: [
      "Migrated the front-end codebase into an Nx monorepo with task graph caching, cutting build times from ~3 minutes to under 20 seconds",
      "Automated local setup and CI tasks with custom shell scripts, eliminating repetitive steps and accelerating developer onboarding",
      "Tuned ESLint rules based on developer feedback, reducing error debt and improving code quality across the repo",
      "Refactored NGINX configurations, removing 2,000+ lines of redundant code and enabling rapid global updates",
      "Reduced bundle sizes by ~30% through dependency refactoring and added snapshot tests that uncovered 30+ hidden bugs",
      "Built Nx generators to standardize scaffolding and enforce consistent project structure",
      "Implemented screenshot-based regression testing with Cypress to safeguard critical UX flows in the pipeline",
      "Directed a cross-functional team to deliver an unplanned product MVP within two sprints, meeting executive expectations",
      "Mentored five engineers in Chrome DevTools workflows and front-end performance best practices",
      "Stack: React, TypeScript, Nx, NGINX, Azure, Terraform, Bitbucket/GitHub Actions, ESLint, Jest, Cypress"
    ]
  },
  {
    id: "cognizant-2021",
    title: "Associate Lead Consultant",
    company: "Cognizant Softvision",
    location: "Austin, TX",
    startDate: "Apr 2021",
    endDate: "Jun 2022",
    impact: 8,
    highlights: [
      "Built a greenfield Angular application integrated with a custom DBMS and launched on schedule",
      "Drove SEO strategy to achieve page‑1 ranking for target keywords, increasing organic traffic",
      "Led accessibility and UX overhaul that increased active usage and task completion rates",
      "Partnered with design to deliver responsive layouts and component library patterns",
      "Remediated vulnerabilities in a critical banking app to meet financial compliance",
      "Stack: Angular 13, TypeScript, Node.js, REST APIs, Azure, GitHub Actions"
    ]
  },
  {
    id: "progressive-2018-senior",
    title: "IT Applications Developer Senior",
    company: "Progressive Insurance",
    location: "Austin, TX",
    startDate: "Jun 2018",
    endDate: "Mar 2021",
    impact: 9,
    highlights: [
      "Delivered four Angular applications supporting thousands of claims representatives while mentoring peers",
      "Designed AWS Lambda + Redis locking system for concurrent workload management across thousands of users",
      "Designed and delivered a WebSocket + ElastiCache architecture used by thousands of claims reps, saving minutes per user per day",
      "Shipped an on-call Docsify documentation portal in under a week, enabling fast search and lowering incident time-to-resolution",
      "Championed accessibility upgrades (screen reader support, keyboard navigation)",
      "Standardized team practices and onboarded engineers via pairing and training, raising domain-wide contribution velocity",
      "Mentored interns leading to immediate offers and strong performance feedback",
      "Stack: Angular 8–11, .NET Core, Node.js, WebSockets, Redis/ElastiCache, AWS (Lambda), Docsify"
    ]
  },
  {
    id: "progressive-2014-mid",
    title: "IT Applications Developer (Associate/Mid)",
    company: "Progressive Insurance",
    location: "Colorado Springs, CO",
    startDate: "Jan 2014",
    endDate: "Jun 2018",
    impact: 8,
    highlights: [
      "Delivered a photo viewer app saving ~130 employee hours/day within a two‑month Agile cycle",
      "Remediated hundreds of deprecated APIs/org‑wide to eliminate security risks and enable IE11 upgrades",
      "Designed a custom video player that unlocked a new claims video workflow",
      "Recognized org‑wide for CSS expertise via an interactive crash course",
      "Stack: .NET Framework, JavaScript, CSS, SQL Server, REST, Agile/Scrum"
    ]
  },
  {
    id: "earlier-2010-2013",
    title: "Earlier Experience (GE ITLP, University, Freelance)",
    company: "GE (ITLP), Gannon University, Independent",
    location: "Erie, PA",
    startDate: "2010",
    endDate: "2013",
    impact: 6,
    highlights: [
      "GE ITLP: Built a responsive Rails portal; applied Lean tools to improve process efficiency",
      "Developed a dynamic Excel dashboard using Microsoft's BI tools to transform SQL data into actionable insights for head of sourcing",
      "Tutoring: Installed a Cobol licensing server; improved pass rates via tailored instruction",
      "Freelance: WordPress/CMS builds; achieved 2–3x SEO conversion improvements",
      "Stack: Ruby on Rails, WordPress, MySQL, HTML/CSS/JS, Lean, Microsoft BI"
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
      "Contributed to Roo Code (open-source IDE extension), improving UI/UX interaction and simplifying component architecture",
      "Designed and launched multiple small-scale websites for individuals and small businesses, including custom forms, photo galleries, and responsive layouts"
    ]
  }
];

export interface CVHighlightV2 {
  oneLiner: string;
  furtherDetails?: string;
  skillsFilter: string[];
}

export interface CVItemV2 {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  impact: number;
  stack: string[];
  highlights: CVHighlightV2[];
}

// New, filter-friendly dataset (does not replace existing cvData for backward compatibility)
export const cvDataV2: CVItemV2[] = [
  {
    id: "handraise-2023",
    title: "Software Engineer",
    company: "Handraise",
    location: "Austin, TX",
    startDate: "Dec 2023",
    endDate: "May 2025",
    impact: 10,
    stack: [
      "React", "TypeScript", "Python", "Biome", "GraphQL (gql.tada)", "PostgreSQL (Aurora)",
      "AWS", "Terraform", "GitHub Actions", "PNPM", "Vite", "Storybook", "Figma"
    ],
    highlights: [
      {
        oneLiner: "Built and deployed a high-performance, real-time filtering system handling thousands of dynamic filters for instant cross-intersections",
        furtherDetails: "Enabled analytical intersections across readership, platform, and tier with responsive, low-latency client-side computation.",
        skillsFilter: ["React", "TypeScript", "Performance Optimization"]
      },
      {
        oneLiner: "Replaced ESLint with Biome, cutting lint/format cycles from ~30–60s to under 5s",
        furtherDetails: "Standardized formatting and linting locally and in CI for faster feedback and reduced developer friction.",
        skillsFilter: ["Biome", "ESLint", "CI/CD", "Developer Experience"]
      },
      {
        oneLiner: "Reduced CI build times by ~70% via PNPM and optimized GitHub Actions caching",
        skillsFilter: ["PNPM", "GitHub Actions", "CI/CD", "Caching"]
      },
      {
        oneLiner: "Founded PixelPress, a Storybook-based component library aligned with Figma to validate UX pre-API and reduce rework",
        skillsFilter: ["Storybook", "Figma", "Design Systems", "Component Library"]
      },
      {
        oneLiner: "Championed GraphQL adoption with gql.tada for type-safe contracts, reducing runtime errors and version mismatches",
        skillsFilter: ["GraphQL", "gql.tada", "TypeScript"]
      },
      {
        oneLiner: "Shifted from stage/main branches to tag-based deployments, increasing release reliability and reducing merge conflicts",
        skillsFilter: ["GitHub Actions", "Release Management", "CI/CD"]
      },
      {
        oneLiner: "Integrated AI-assisted code reviews (ellipsis.dev) to automate ~50% of routine fixes",
        skillsFilter: ["AI Tooling", "Code Review Automation", "ellipsis.dev"]
      },
      {
        oneLiner: "Modeled Postgres schema (partitioning/normalization) and tuned Aurora SSD params for faster queries and improved load times",
        skillsFilter: ["PostgreSQL", "Aurora", "Database Optimization"]
      },
      {
        oneLiner: "Mentored contract and senior engineers, increasing team delivery velocity and ownership",
        skillsFilter: ["Mentorship", "Leadership"]
      }
    ]
  },
  {
    id: "crowdstreet-2022",
    title: "Senior Software Engineer & Team Lead",
    company: "CrowdStreet",
    location: "Austin, TX",
    startDate: "Jun 2022",
    endDate: "Oct 2023",
    impact: 9,
    stack: [
      "React", "TypeScript", "Nx", "NGINX", "Azure", "Terraform", "Bitbucket", "GitHub Actions", "ESLint", "Jest", "Cypress"
    ],
    highlights: [
      {
        oneLiner: "Migrated front-end to an Nx monorepo with task graph caching, cutting builds from ~3m to <20s",
        skillsFilter: ["Nx", "Task Graph Caching", "Monorepo", "Developer Experience"]
      },
      {
        oneLiner: "Automated local setup and CI tasks with custom shell scripts, accelerating onboarding",
        skillsFilter: ["Shell Scripting", "CI/CD", "Developer Experience"]
      },
      {
        oneLiner: "Tuned ESLint rules based on developer feedback, reducing error debt and improving code quality",
        skillsFilter: ["ESLint", "Code Quality", "Developer Experience"]
      },
      {
        oneLiner: "Refactored 2,000+ lines of NGINX into reusable blocks, enabling rapid global updates",
        skillsFilter: ["NGINX", "Refactoring", "Infrastructure"]
      },
      {
        oneLiner: "Reduced bundle sizes by ~30% and added snapshot tests uncovering 30+ hidden bugs",
        skillsFilter: ["Bundle Analysis", "Snapshot Testing", "Jest", "Performance Optimization"]
      },
      {
        oneLiner: "Built Nx generators to standardize scaffolding and enforce consistent project structure",
        skillsFilter: ["Nx", "Generators", "Scaffolding", "Developer Experience"]
      },
      {
        oneLiner: "Implemented screenshot-based regression testing with Cypress for critical UX flows",
        skillsFilter: ["Cypress", "Visual Regression Testing", "Testing"]
      },
      {
        oneLiner: "Directed a cross-functional team to deliver an unplanned MVP within two sprints",
        skillsFilter: ["Leadership", "Agile", "Product Delivery"]
      },
      {
        oneLiner: "Mentored five engineers in Chrome DevTools workflows and front-end performance best practices",
        skillsFilter: ["Mentorship", "Performance Optimization", "Chrome DevTools"]
      }
    ]
  },
  {
    id: "cognizant-2021",
    title: "Associate Lead Consultant",
    company: "Cognizant Softvision",
    location: "Austin, TX",
    startDate: "Apr 2021",
    endDate: "Jun 2022",
    impact: 8,
    stack: ["Angular 13", "TypeScript", "Node.js", "REST APIs", "Azure", "GitHub Actions"],
    highlights: [
      {
        oneLiner: "Built and launched a greenfield Angular 13 application integrated with a custom DBMS",
        skillsFilter: ["Angular", "TypeScript", "REST APIs"]
      },
      {
        oneLiner: "Led accessibility & UX overhaul (WCAG compliance), boosting active usage and task completion",
        skillsFilter: ["Accessibility (WCAG 2.1)", "UX", "Design Systems"]
      },
      {
        oneLiner: "Achieved page‑1 search ranking via SEO strategy and front‑end performance optimization",
        skillsFilter: ["SEO", "Performance Optimization", "Front-End"]
      },
      {
        oneLiner: "Remediated vulnerabilities in a critical banking app to meet financial compliance",
        skillsFilter: ["Security", "Vulnerability Remediation", "Compliance"]
      },
      {
        oneLiner: "Partnered with design to deliver responsive layouts and component patterns",
        skillsFilter: ["Responsive Design", "Component Library", "Design Systems"]
      }
    ]
  },
  {
    id: "progressive-2018-senior",
    title: "IT Applications Developer Senior",
    company: "Progressive Insurance",
    location: "Austin, TX",
    startDate: "Jun 2018",
    endDate: "Mar 2021",
    impact: 9,
    stack: ["Angular 8–11", ".NET Core", "Node.js", "WebSockets", "Redis/ElastiCache", "AWS Lambda", "Docsify"],
    highlights: [
      {
        oneLiner: "Delivered four Angular applications supporting thousands of claims representatives while mentoring peers",
        skillsFilter: ["Angular", "Mentorship", "Front-End"]
      },
      {
        oneLiner: "Designed AWS Lambda + Redis locking system for concurrent workload management across thousands of users",
        skillsFilter: ["AWS Lambda", "Redis/ElastiCache", "Concurrency"]
      },
      {
        oneLiner: "Designed and delivered a WebSocket + ElastiCache architecture saving minutes per user per day",
        skillsFilter: ["WebSockets", "Redis/ElastiCache", "Performance Optimization"]
      },
      {
        oneLiner: "Shipped a Docsify on-call documentation portal in under a week, reducing incident time-to-resolution",
        skillsFilter: ["Docsify", "Developer Experience", "Knowledge Management"]
      },
      {
        oneLiner: "Championed accessibility upgrades (screen reader support, keyboard navigation)",
        skillsFilter: ["Accessibility (WCAG 2.1)", "Front-End"]
      },
      {
        oneLiner: "Standardized team practices and onboarded engineers via pairing and training",
        skillsFilter: ["Mentorship", "Team Practices", "Onboarding"]
      }
    ]
  },
  {
    id: "progressive-2014-mid",
    title: "IT Applications Developer (Associate/Mid)",
    company: "Progressive Insurance",
    location: "Colorado Springs, CO",
    startDate: "Jan 2014",
    endDate: "Jun 2018",
    impact: 8,
    stack: [".NET Framework", "JavaScript", "CSS", "SQL Server", "REST", "Agile/Scrum"],
    highlights: [
      {
        oneLiner: "Built a photo viewer app saving ~130 employee hours/day within a two‑month Agile cycle",
        skillsFilter: [".NET", "Front-End", "Agile/Scrum"]
      },
      {
        oneLiner: "Remediated hundreds of deprecated APIs org‑wide, improving security and enabling browser upgrades",
        skillsFilter: [".NET", "Security", "Deprecated API Remediation"]
      },
      {
        oneLiner: "Designed a custom video player that unlocked a new claims video workflow",
        skillsFilter: ["JavaScript", "Front-End", "Video"]
      },
      {
        oneLiner: "Recognized as internal CSS Guru for org-wide UI training via an interactive crash course",
        skillsFilter: ["CSS", "Training", "Mentorship"]
      }
    ]
  },
  {
    id: "earlier-2010-2013",
    title: "Earlier Experience (GE ITLP, University, Freelance)",
    company: "GE (ITLP), Gannon University, Independent",
    location: "Erie, PA",
    startDate: "2010",
    endDate: "2013",
    impact: 6,
    stack: ["Ruby on Rails", "WordPress", "MySQL", "HTML", "CSS", "JavaScript", "Lean", "Microsoft BI"],
    highlights: [
      {
        oneLiner: "GE ITLP: Built a responsive Rails portal; applied Lean tools to improve process efficiency",
        skillsFilter: ["Ruby on Rails", "Lean"]
      },
      {
        oneLiner: "Developed a dynamic Excel dashboard using Microsoft's BI tools to transform SQL data into actionable insights for head of sourcing",
        skillsFilter: ["Microsoft BI", "SQL", "Data Visualization"]
      },
      {
        oneLiner: "Tutoring: Installed a Cobol licensing server; improved student pass rates via tailored instruction",
        skillsFilter: ["Server Setup", "Mentorship", "Education"]
      },
      {
        oneLiner: "Freelance: WordPress/CMS builds; achieved 2–3x SEO conversion improvements",
        skillsFilter: ["WordPress", "SEO", "Front-End"]
      }
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
    stack: ["Python", "Machine Learning", "React", "TypeScript", "WordPress", "HTML", "CSS"],
    highlights: [
      {
        oneLiner: "Used machine learning for Austin real estate analysis, launching an Airbnb with projected 25% annual ROI",
        skillsFilter: ["Machine Learning", "Python", "Data Analysis"]
      },
      {
        oneLiner: "Contributed to Roo Code (open-source IDE extension), improving UI/UX interaction and simplifying component structure",
        skillsFilter: ["Open Source", "UI/UX", "Developer Experience"]
      },
      {
        oneLiner: "Designed and launched multiple small-scale websites with custom forms, galleries, and responsive layouts",
        skillsFilter: ["Front-End", "WordPress", "Responsive Design"]
      }
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
      "React", "Angular (8–13)", "TypeScript", "JavaScript", "CSS", "Tailwind", "HTML5",
      "Redux", "React Query", "Zustand", "GraphQL", "REST APIs",
      "Responsive Design", "Accessibility (WCAG 2.1)", "Performance Optimization", "Lazy Loading", "Code Splitting", "Caching",
      "Material UI", "Storybook", "Nx", "Lighthouse", "Bundle Analyzer"
    ]
  },
  {
    name: "Back-End",
    skills: [
      "Node.js", "Python", "Express", "PostgreSQL", "Aurora", "MySQL", "SQL Server",
      "MongoDB", "API Design", "GraphQL", "Database Optimization", "Microservices",
      ".NET (Core/Framework)", "Java 8/11", "Ruby on Rails", "Redis/ElastiCache", "WebSockets"
    ]
  },
  {
    name: "DevOps/Cloud",
    skills: [
      "AWS", "Azure", "Terraform", "CI/CD", "GitHub Actions", "Azure DevOps", "Bitbucket Pipelines", "Docker",
      "Infrastructure as Code", "Performance Monitoring", "System Architecture",
      "NGINX", "CloudFront/CDN", "RDS/Aurora Postgres", "AWS Lambda", "Serverless"
    ]
  },
  {
    name: "Developer Experience",
    skills: [
      "Biome", "ESLint Tuning", "Nx Generators", "Task Graph Caching", "Shell Scripting", "Code Review Automation (ellipsis.dev)"
    ]
  },
  {
    name: "Testing & QA",
    skills: [
      "Jest", "Vitest", "Cypress", "Playwright", "React Testing Library",
      "Snapshot Testing", "Visual Regression Testing", "Contract Testing", "CI Test Parallelization/Caching"
    ]
  },
  {
    name: "Security & Identity",
    skills: [
      "OAuth 2.0/2.1", "OIDC", "JWT", "Microsoft Entra ID (B2C)",
      "SSO", "Secure Cookies/Session Management"
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
      "Grafana", "Datadog", "Sentry", "OpenTelemetry", "Lighthouse CI",
      "Docsify", "Jira", "Figma", "Growthbook", "Chrome DevTools", "Git", "PNPM", "Vite"
    ]
  }
];

// Top 10 skills for $185K+ platform/front-end/DX roles
export const keySkills = [
  "Angular",
  "Nx Monorepos",
  "React",
  "TypeScript",
  "Developer Experience",
  "Storybook",
  "Biome",
  "GitHub Actions",
  "Cypress",
  "Performance Optimization"
];

// Deep skills organized by category for expandable sections
export const deepSkillCategories = [
  {
    name: "Front-End",
    skills: [
      "Angular (8–13)", "React", "TypeScript", "JavaScript", "Nx", "Storybook",
      "Biome", "ESLint", "CSS", "Tailwind", "Redux", "React Query", "Zustand",
      "GraphQL", "REST APIs", "Responsive Design", "Accessibility (WCAG 2.1)",
      "Performance Optimization", "Lazy Loading", "Code Splitting", "Caching",
      "Material UI", "Lighthouse", "Bundle Analyzer"
    ]
  },
  {
    name: "Back-End",
    skills: [
      "Node.js", "Python", "Express", "PostgreSQL", "Aurora", "MySQL", "SQL Server",
      "MongoDB", "API Design", "GraphQL", "Database Optimization", "Microservices",
      ".NET (Core/Framework)", "Java 8/11", "Ruby on Rails", "Redis/ElastiCache", "WebSockets"
    ]
  },
  {
    name: "DevOps/DX",
    skills: [
      "GitHub Actions", "Azure DevOps", "Bitbucket Pipelines", "Terraform", "CI/CD",
      "Docker", "Infrastructure as Code", "Performance Monitoring", "System Architecture",
      "NGINX", "CloudFront/CDN", "RDS/Aurora Postgres", "AWS Lambda", "Serverless",
      "Shell Scripting", "PNPM", "Nx Generators", "Task Graph Caching", "Code Review Automation (ellipsis.dev)"
    ]
  },
  {
    name: "Testing",
    skills: [
      "Jest", "Vitest", "Cypress", "Playwright", "React Testing Library",
      "Snapshot Testing", "Visual Regression Testing", "Contract Testing", "CI Test Parallelization/Caching"
    ]
  },
  {
    name: "Other",
    skills: [
      "OAuth 2.0/2.1", "OIDC", "JWT", "Microsoft Entra ID (B2C)", "SSO", "Secure Cookies/Session Management",
      "Technical Leadership", "Team Mentorship", "Cross-functional Collaboration", "Product Strategy",
      "Agile Development", "Code Reviews", "Architecture Planning", "Grafana", "Datadog", "Sentry",
      "OpenTelemetry", "Lighthouse CI", "Docsify", "Jira", "Figma", "Growthbook", "Chrome DevTools",
      "Git", "Vite", "SEO", "WordPress", "Machine Learning", "Lean"
    ]
  }
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