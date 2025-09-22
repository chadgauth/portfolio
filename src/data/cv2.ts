import type {
  CV2Data,
  CV2Skill,
  CV2Experience,
} from './cv2.schema';

// Helper to convert date strings like "Dec 2023" to ISO '2023-12-01'
function parseDate(dateStr: string): string {
  if (dateStr === 'Present') return new Date().toISOString().split('T')[0];
  const months: Record<string, string> = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };
  const parts = dateStr.split(' ');
  if (parts.length === 2) {
    const month = months[parts[0]];
    const year = parts[1];
    return `${year}-${month}-01`;
  }
  // For years like "2010", assume Jan 1
  return `${dateStr}-01-01`;
}

// Skills array - normalized from cv.ts skillCategories
export const skills: CV2Skill[] = [
  // Frontend
  { slug: 'react', label: 'React', category: 'frontend' },
  { slug: 'angular', label: 'Angular', category: 'frontend' },
  { slug: 'typescript', label: 'TypeScript', category: 'frontend' },
  { slug: 'javascript', label: 'JavaScript', category: 'frontend' },
  { slug: 'css', label: 'CSS', category: 'frontend' },
  { slug: 'tailwind', label: 'Tailwind', category: 'frontend' },
  { slug: 'html5', label: 'HTML5', category: 'frontend' },
  { slug: 'redux', label: 'Redux', category: 'frontend' },
  { slug: 'react-query', label: 'React Query', category: 'frontend' },
  { slug: 'zustand', label: 'Zustand', category: 'frontend' },
  { slug: 'graphql', label: 'GraphQL', category: 'frontend' },
  { slug: 'rest-apis', label: 'REST APIs', category: 'frontend' },
  { slug: 'responsive-design', label: 'Responsive Design', category: 'frontend' },
  { slug: 'accessibility', label: 'Accessibility (WCAG 2.1)', category: 'frontend' },
  { slug: 'performance-optimization', label: 'Performance Optimization', category: 'frontend' },
  { slug: 'lazy-loading', label: 'Lazy Loading', category: 'frontend' },
  { slug: 'code-splitting', label: 'Code Splitting', category: 'frontend' },
  { slug: 'caching', label: 'Caching', category: 'frontend' },
  { slug: 'material-ui', label: 'Material UI', category: 'frontend' },
  { slug: 'storybook', label: 'Storybook', category: 'frontend' },
  { slug: 'nx', label: 'Nx', category: 'frontend' },
  { slug: 'lighthouse', label: 'Lighthouse', category: 'frontend' },
  { slug: 'bundle-analyzer', label: 'Bundle Analyzer', category: 'frontend' },

  // Backend
  { slug: 'nodejs', label: 'Node.js', category: 'backend' },
  { slug: 'python', label: 'Python', category: 'backend' },
  { slug: 'express', label: 'Express', category: 'backend' },
  { slug: 'postgresql', label: 'PostgreSQL', category: 'backend' },
  { slug: 'aurora', label: 'Aurora', category: 'backend' },
  { slug: 'mysql', label: 'MySQL', category: 'backend' },
  { slug: 'sql-server', label: 'SQL Server', category: 'backend' },
  { slug: 'mongodb', label: 'MongoDB', category: 'backend' },
  { slug: 'api-design', label: 'API Design', category: 'backend' },
  { slug: 'database-optimization', label: 'Database Optimization', category: 'backend' },
  { slug: 'microservices', label: 'Microservices', category: 'backend' },
  { slug: 'dotnet-core', label: '.NET Core', category: 'backend' },
  { slug: 'dotnet-framework', label: '.NET Framework', category: 'backend' },
  { slug: 'java', label: 'Java', category: 'backend' },
  { slug: 'ruby-on-rails', label: 'Ruby on Rails', category: 'backend' },
  { slug: 'redis', label: 'Redis/ElastiCache', category: 'backend' },
  { slug: 'websockets', label: 'WebSockets', category: 'backend' },

  // Cloud/DevOps
  { slug: 'aws', label: 'AWS', category: 'cloud' },
  { slug: 'azure', label: 'Azure', category: 'cloud' },
  { slug: 'terraform', label: 'Terraform', category: 'cloud' },
  { slug: 'ci-cd', label: 'CI/CD', category: 'devops' },
  { slug: 'github-actions', label: 'GitHub Actions', category: 'devops' },
  { slug: 'azure-devops', label: 'Azure DevOps', category: 'devops' },
  { slug: 'bitbucket-pipelines', label: 'Bitbucket Pipelines', category: 'devops' },
  { slug: 'docker', label: 'Docker', category: 'devops' },
  { slug: 'infrastructure-as-code', label: 'Infrastructure as Code', category: 'devops' },
  { slug: 'performance-monitoring', label: 'Performance Monitoring', category: 'devops' },
  { slug: 'system-architecture', label: 'System Architecture', category: 'devops' },
  { slug: 'nginx', label: 'NGINX', category: 'devops' },
  { slug: 'cloudfront', label: 'CloudFront/CDN', category: 'devops' },
  { slug: 'rds', label: 'RDS/Aurora Postgres', category: 'devops' },
  { slug: 'aws-lambda', label: 'AWS Lambda', category: 'devops' },
  { slug: 'serverless', label: 'Serverless', category: 'devops' },

  // Developer Experience
  { slug: 'biome', label: 'Biome', category: 'other' },
  { slug: 'eslint', label: 'ESLint', category: 'other' },
  { slug: 'shell-scripting', label: 'Shell Scripting', category: 'other' },
  { slug: 'code-review-automation', label: 'Code Review Automation', category: 'other' },

  // Testing
  { slug: 'jest', label: 'Jest', category: 'testing' },
  { slug: 'vitest', label: 'Vitest', category: 'testing' },
  { slug: 'cypress', label: 'Cypress', category: 'testing' },
  { slug: 'playwright', label: 'Playwright', category: 'testing' },
  { slug: 'react-testing-library', label: 'React Testing Library', category: 'testing' },
  { slug: 'snapshot-testing', label: 'Snapshot Testing', category: 'testing' },
  { slug: 'visual-regression-testing', label: 'Visual Regression Testing', category: 'testing' },
  { slug: 'contract-testing', label: 'Contract Testing', category: 'testing' },

  // Security
  { slug: 'oauth', label: 'OAuth 2.0/2.1', category: 'security' },
  { slug: 'oidc', label: 'OIDC', category: 'security' },
  { slug: 'jwt', label: 'JWT', category: 'security' },
  { slug: 'microsoft-entra-id', label: 'Microsoft Entra ID', category: 'security' },
  { slug: 'sso', label: 'SSO', category: 'security' },
  { slug: 'secure-cookies', label: 'Secure Cookies/Session Management', category: 'security' },

  // Leadership
  { slug: 'technical-leadership', label: 'Technical Leadership', category: 'leadership' },
  { slug: 'mentorship', label: 'Mentorship', category: 'leadership' },
  { slug: 'cross-functional-collaboration', label: 'Cross-functional Collaboration', category: 'leadership' },
  { slug: 'product-strategy', label: 'Product Strategy', category: 'leadership' },
  { slug: 'agile-development', label: 'Agile Development', category: 'leadership' },
  { slug: 'code-reviews', label: 'Code Reviews', category: 'leadership' },
  { slug: 'architecture-planning', label: 'Architecture Planning', category: 'leadership' },

  // Monitoring/Tools
  { slug: 'grafana', label: 'Grafana', category: 'other' },
  { slug: 'datadog', label: 'Datadog', category: 'other' },
  { slug: 'sentry', label: 'Sentry', category: 'other' },
  { slug: 'opentelemetry', label: 'OpenTelemetry', category: 'other' },
  { slug: 'lighthouse-ci', label: 'Lighthouse CI', category: 'other' },
  { slug: 'docsify', label: 'Docsify', category: 'other' },
  { slug: 'jira', label: 'Jira', category: 'other' },
  { slug: 'figma', label: 'Figma', category: 'other' },
  { slug: 'growthbook', label: 'Growthbook', category: 'other' },
  { slug: 'chrome-devtools', label: 'Chrome DevTools', category: 'other' },
  { slug: 'git', label: 'Git', category: 'other' },
  { slug: 'pnpm', label: 'PNPM', category: 'other' },
  { slug: 'vite', label: 'Vite', category: 'other' },

  // Other
  { slug: 'seo', label: 'SEO', category: 'other' },
  { slug: 'wordpress', label: 'WordPress', category: 'other' },
  { slug: 'machine-learning', label: 'Machine Learning', category: 'data' },
  { slug: 'lean', label: 'Lean', category: 'other' },
  { slug: 'gql-tada', label: 'gql.tada', category: 'frontend' },
  { slug: 'ellipsis-dev', label: 'ellipsis.dev', category: 'other' },
  { slug: 'pixelpress', label: 'PixelPress', category: 'other' },
  { slug: 'fastapi', label: 'FastAPI', category: 'backend' },
  { slug: 'dagster', label: 'Dagster', category: 'backend' },
  { slug: 'strawberry-graphql', label: 'Strawberry GraphQL', category: 'backend' },
  { slug: 'django', label: 'Django', category: 'backend' },
];

// Experiences transformed from cvDataV2
export const experiences: CV2Experience[] = [
  {
    id: "handraise-2023",
    role: "Software Engineer",
    company: "Handraise",
    location: "Austin, TX",
    period: {
      start: parseDate("Dec 2023"),
      end: parseDate("May 2025")
    },
    employmentType: 'full-time',
    mode: 'remote',
    primarySkills: ['react', 'typescript', 'python', 'biome', 'graphql', 'postgresql', 'aws', 'terraform', 'github-actions', 'pnpm', 'vite', 'storybook', 'figma', 'fastapi', 'dagster', 'strawberry-graphql', 'django'],
    supportingSkills: ['performance-optimization', 'database-optimization', 'mentorship'],
    achievements: [
      {
        id: "handraise-filtering-system",
        oneLiner: "Built and deployed a high-performance, real-time filtering system handling thousands of dynamic filters for instant cross-intersections",
        details: "Challenge: The analytics platform needed to handle dynamic filtering across large datasets for real-time insights. Action: Built a high-performance filtering system using client-side computation to process intersections instantly. Result: Achieved responsive, low-latency cross-intersections of readership, platform, and tier data. Learning: Optimizing client-side logic can deliver complex data operations without server overhead.",
        skills: ['react', 'typescript', 'performance-optimization'],
        outcomes: [{
          kind: 'performance',
          unit: 'ms',
          direction: 'decrease',
          note: 'Instant cross-intersections of data'
        }],
        complexity: 'high',
        scope: 'team'
      },
      {
        id: "handraise-biome-adoption",
        oneLiner: "Replaced ESLint with Biome, cutting lint/format cycles from ~30–60s to under 5s",
        details: "Challenge: Inconsistent code formatting and slow linting cycles were causing developer friction. Action: Replaced ESLint with Biome for unified formatting and linting, configured for local and CI environments. Result: Reduced lint/format cycles from 30-60 seconds to under 5 seconds, improving feedback speed. Learning: Modern tooling like Biome can significantly enhance developer experience and productivity.",
        skills: ['biome', 'eslint', 'ci-cd', 'developer-experience'],
        outcomes: [{
          kind: 'efficiency',
          unit: 's',
          direction: 'decrease',
          before: 45,
          after: 5
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "handraise-ci-optimization",
        oneLiner: "Reduced CI build times by ~70% via PNPM and optimized GitHub Actions caching",
        details: "Challenge: Slow CI builds were bottleneck for rapid development iterations. Action: Adopted PNPM for faster dependency resolution and optimized GitHub Actions caching strategies. Result: Cut build times by 70%, enabling quicker deployments. Learning: Strategic package management and caching are key to efficient CI/CD pipelines.",
        skills: ['pnpm', 'github-actions', 'ci-cd', 'caching'],
        outcomes: [{
          kind: 'efficiency',
          unit: '%',
          direction: 'decrease',
          delta: 70,
          note: 'Build time reduction'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "handraise-pixelpress",
        oneLiner: "Founded PixelPress, a Storybook-based component library aligned with Figma to validate UX pre-API and reduce rework",
        details: "Challenge: Lack of design system consistency and slow UX validation in development. Action: Founded PixelPress, a Storybook-based component library aligned with Figma designs. Result: Enabled pre-API UX validation and reduced rework through reusable components. Learning: Integrating design tools with development workflows prevents costly redesigns.",
        skills: ['storybook', 'figma', 'design-systems', 'component-library'],
        complexity: 'high',
        scope: 'team'
      },
      {
        id: "handraise-graphql-adoption",
        oneLiner: "Championed GraphQL adoption with gql.tada for type-safe contracts, reducing runtime errors and version mismatches",
        details: "Challenge: API versioning issues and runtime errors from type mismatches. Action: Championed GraphQL adoption with gql.tada for type-safe contracts. Result: Reduced runtime errors and version mismatches, improving API reliability. Learning: Type-safe GraphQL contracts prevent common integration issues.",
        skills: ['graphql', 'gql-tada', 'typescript'],
        outcomes: [{
          kind: 'reliability',
          unit: 'count',
          direction: 'decrease',
          note: 'Runtime errors and version mismatches'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "handraise-release-process",
        oneLiner: "Shifted from stage/main branches to tag-based deployments, increasing release reliability and reducing merge conflicts",
        details: "Challenge: Frequent merge conflicts and unreliable releases from branch-based deployments. Action: Shifted to tag-based deployments for immutable releases. Result: Increased release reliability and reduced merge conflicts. Learning: Tag-based deployments provide better stability and predictability in release management.",
        skills: ['github-actions', 'release-management', 'ci-cd'],
        outcomes: [{
          kind: 'reliability',
          unit: '%',
          direction: 'increase',
          note: 'Release reliability'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "handraise-ai-reviews",
        oneLiner: "Integrated AI-assisted code reviews (ellipsis.dev) to automate ~50% of routine fixes",
        details: "Challenge: Manual code review bottlenecks and missed issues. Action: Integrated AI-assisted code reviews (ellipsis.dev) for automated routine fixes. Result: Automated ~50% of routine fixes, freeing up reviewer time. Learning: AI tools can augment human reviews for more efficient code quality assurance.",
        skills: ['ai-tooling', 'code-review-automation', 'ellipsis-dev'],
        outcomes: [{
          kind: 'efficiency',
          unit: '%',
          direction: 'increase',
          delta: 50,
          note: 'Automated routine fixes'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "handraise-postgres-tuning",
        oneLiner: "Modeled Postgres schema (partitioning/normalization) and tuned Aurora SSD params for faster queries and improved load times",
        details: "Challenge: Slow query performance impacting load times. Action: Modeled Postgres schema with partitioning/normalization and tuned Aurora SSD parameters. Result: Improved query performance and faster load times. Learning: Proper database schema design and tuning are crucial for performance.",
        skills: ['postgresql', 'aurora', 'database-optimization'],
        outcomes: [{
          kind: 'performance',
          unit: 'ms',
          direction: 'decrease',
          note: 'Query performance and load times'
        }],
        complexity: 'high',
        scope: 'team'
      },
      {
        id: "handraise-mentorship",
        oneLiner: "Mentored contract and senior engineers, increasing team delivery velocity and ownership",
        details: "Challenge: Team needed to increase delivery velocity and ownership. Action: Mentored contract and senior engineers through guidance and training. Result: Enhanced team delivery velocity and individual ownership. Learning: Effective mentorship accelerates team growth and productivity.",
        skills: ['mentorship', 'leadership'],
        outcomes: [{
          kind: 'efficiency',
          unit: '%',
          direction: 'increase',
          note: 'Team delivery velocity'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "handraise-ml-fastapi",
        oneLiner: "Integrated ML model consumption via FastAPI endpoints for real-time predictions",
        details: "Challenge: Need for real-time ML predictions in the analytics platform. Action: Integrated ML model consumption via FastAPI endpoints. Result: Enabled low-latency inference for real-time analytics. Learning: FastAPI provides efficient RESTful interfaces for ML model serving.",
        skills: ['python', 'fastapi', 'machine-learning'],
        outcomes: [{
          kind: 'performance',
          unit: 'ms',
          direction: 'decrease',
          note: 'Low-latency inference'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "handraise-dagster-integration",
        oneLiner: "Made ML models available to Dagster pipelines for automated data workflows",
        details: "Challenge: ML models needed automated data workflows. Action: Integrated FastAPI-served ML models into Dagster pipelines. Result: Enabled scheduled model retraining and automated data processing. Learning: Orchestration tools like Dagster streamline ML operations.",
        skills: ['python', 'dagster', 'fastapi', 'machine-learning'],
        complexity: 'high',
        scope: 'team'
      },
      {
        id: "handraise-strawberry-graphql",
        oneLiner: "Implemented GraphQL API with Strawberry for flexible ML model querying",
        details: "Challenge: Flexible querying of ML model data required. Action: Implemented GraphQL API with Strawberry for type-safe access. Result: Provided flexible, type-safe querying of ML predictions and analytics. Learning: GraphQL with Strawberry simplifies complex data API design.",
        skills: ['python', 'strawberry-graphql', 'graphql'],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "handraise-django-migrations",
        oneLiner: "Managed database schema evolution with Django migrations for ML data storage",
        details: "Utilized Django ORM and migrations to handle schema changes for storing ML model metadata, training data, and prediction results.",
        skills: ['python', 'django', 'database-optimization'],
        complexity: 'medium',
        scope: 'team'
      }
    ],
    domains: ['analytics', 'platform'],
    productAreas: ['platform', 'dx']
  },
  {
    id: "crowdstreet-2022",
    role: "Senior Software Engineer & Team Lead",
    company: "CrowdStreet",
    location: "Austin, TX",
    period: {
      start: parseDate("Jun 2022"),
      end: parseDate("Oct 2023")
    },
    employmentType: 'full-time',
    mode: 'remote',
    primarySkills: ['react', 'typescript', 'nx', 'nginx', 'azure', 'terraform', 'bitbucket', 'github-actions', 'eslint', 'jest', 'cypress'],
    supportingSkills: ['mentorship', 'leadership', 'performance-optimization'],
    achievements: [
      {
        id: "crowdstreet-nx-monorepo",
        oneLiner: "Migrated front-end to an Nx monorepo with task graph caching, cutting builds from ~3m to <20s",
        details: "Challenge: Slow builds from monolith frontend structure. Action: Migrated to Nx monorepo with task graph caching. Result: Reduced builds from 3 minutes to under 20 seconds. Learning: Nx monorepos with caching dramatically improve build performance.",
        skills: ['nx', 'task-graph-caching', 'monorepo', 'developer-experience'],
        outcomes: [{
          kind: 'efficiency',
          unit: 's',
          direction: 'decrease',
          before: 180,
          after: 20
        }],
        complexity: 'high',
        scope: 'team'
      },
      {
        id: "crowdstreet-automation",
        oneLiner: "Automated local setup and CI tasks with custom shell scripts, accelerating onboarding",
        details: "Challenge: Manual setup and CI tasks slowing onboarding. Action: Created custom shell scripts for automation. Result: Accelerated onboarding and CI processes. Learning: Automation scripts reduce friction in development workflows.",
        skills: ['shell-scripting', 'ci-cd', 'developer-experience'],
        outcomes: [{
          kind: 'efficiency',
          unit: 'hours',
          direction: 'decrease',
          note: 'Onboarding time'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "crowdstreet-eslint-tuning",
        oneLiner: "Tuned ESLint rules based on developer feedback, reducing error debt and improving code quality",
        details: "Challenge: ESLint rules causing unnecessary errors and low code quality. Action: Tuned rules based on developer feedback. Result: Reduced error debt and improved code quality. Learning: Developer feedback is essential for effective linting configuration.",
        skills: ['eslint', 'code-quality', 'developer-experience'],
        outcomes: [{
          kind: 'quality',
          unit: 'count',
          direction: 'decrease',
          note: 'Error debt'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "crowdstreet-nginx-refactor",
        oneLiner: "Refactored 2,000+ lines of NGINX into reusable blocks, enabling rapid global updates",
        details: "Challenge: Hard to maintain 2000+ lines of NGINX config. Action: Refactored into reusable blocks. Result: Enabled rapid global updates and easier maintenance. Learning: Modular configuration improves scalability and maintainability.",
        skills: ['nginx', 'refactoring', 'infrastructure'],
        outcomes: [{
          kind: 'efficiency',
          unit: 'count',
          direction: 'decrease',
          delta: 2000,
          note: 'Lines of code'
        }],
        complexity: 'medium',
        scope: 'org'
      },
      {
        id: "crowdstreet-bundle-optimization",
        oneLiner: "Reduced bundle sizes by ~30% and added snapshot tests uncovering 30+ hidden bugs",
        details: "Challenge: Large bundle sizes impacting performance. Action: Optimized bundles and added snapshot tests. Result: 30% bundle size reduction and uncovered 30 hidden bugs. Learning: Bundle analysis and testing reveal performance and quality issues.",
        skills: ['bundle-analysis', 'snapshot-testing', 'jest', 'performance-optimization'],
        outcomes: [
          {
            kind: 'performance',
            unit: '%',
            direction: 'decrease',
            delta: 30,
            note: 'Bundle size'
          },
          {
            kind: 'quality',
            unit: 'count',
            direction: 'increase',
            delta: 30,
            note: 'Bugs uncovered'
          }
        ],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "crowdstreet-nx-generators",
        oneLiner: "Built Nx generators to standardize scaffolding and enforce consistent project structure",
        details: "Challenge: Inconsistent project structure across teams. Action: Built Nx generators for scaffolding. Result: Standardized project structure and enforced consistency. Learning: Code generators ensure uniform development practices.",
        skills: ['nx', 'generators', 'scaffolding', 'developer-experience'],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "crowdstreet-visual-regression",
        oneLiner: "Implemented screenshot-based regression testing with Cypress for critical UX flows",
        details: "Challenge: UI regressions in critical flows. Action: Implemented Cypress screenshot-based testing. Result: Automated detection of UX changes. Learning: Visual regression testing prevents UI degradation.",
        skills: ['cypress', 'visual-regression-testing', 'testing'],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "crowdstreet-mvp-delivery",
        oneLiner: "Directed a cross-functional team to deliver an unplanned MVP within two sprints",
        details: "Challenge: Urgent need for unplanned MVP. Action: Led cross-functional team to deliver within two sprints. Result: Successful MVP launch on time. Learning: Agile leadership enables rapid delivery under pressure.",
        skills: ['leadership', 'agile', 'product-delivery'],
        complexity: 'high',
        scope: 'team'
      },
      {
        id: "crowdstreet-mentorship-devtools",
        oneLiner: "Mentored five engineers in Chrome DevTools workflows and front-end performance best practices",
        details: "Challenge: Team lacked Chrome DevTools expertise. Action: Mentored five engineers in DevTools and performance best practices. Result: Improved team debugging and optimization skills. Learning: Hands-on mentorship builds practical technical skills.",
        skills: ['mentorship', 'performance-optimization', 'chrome-devtools'],
        complexity: 'medium',
        scope: 'team'
      }
    ],
    domains: ['fintech'],
    productAreas: ['platform', 'dx']
  },
  {
    id: "cognizant-2021",
    role: "Associate Lead Consultant",
    company: "Cognizant Softvision",
    location: "Austin, TX",
    period: {
      start: parseDate("Apr 2021"),
      end: parseDate("Jun 2022")
    },
    employmentType: 'contract',
    mode: 'onsite',
    primarySkills: ['angular', 'typescript', 'nodejs', 'rest-apis', 'azure', 'github-actions'],
    supportingSkills: ['accessibility', 'ux', 'seo', 'security'],
    achievements: [
      {
        id: "cognizant-angular-app",
        oneLiner: "Built and launched a greenfield Angular 13 application integrated with a custom DBMS",
        details: "Challenge: Need for new application with custom DBMS integration. Action: Built greenfield Angular 13 application. Result: Successful launch with integrated data management. Learning: Angular provides robust framework for complex web applications.",
        skills: ['angular', 'typescript', 'rest-apis'],
        complexity: 'high',
        scope: 'team'
      },
      {
        id: "cognizant-accessibility-ux",
        oneLiner: "Led accessibility & UX overhaul (WCAG compliance), boosting active usage and task completion",
        details: "Challenge: Poor accessibility impacting user engagement. Action: Led WCAG compliance overhaul. Result: Increased active usage and task completion. Learning: Accessibility improvements directly enhance user experience.",
        skills: ['accessibility', 'ux', 'design-systems'],
        outcomes: [{
          kind: 'engagement',
          unit: '%',
          direction: 'increase',
          note: 'Active usage and task completion'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "cognizant-seo",
        oneLiner: "Achieved page‑1 search ranking via SEO strategy and front‑end performance optimization",
        details: "Challenge: Low search rankings affecting visibility. Action: Implemented SEO strategy and performance optimization. Result: Achieved page-1 search ranking. Learning: SEO and performance are critical for online visibility.",
        skills: ['seo', 'performance-optimization', 'front-end'],
        outcomes: [{
          kind: 'engagement',
          unit: 'points',
          direction: 'target',
          after: 1,
          note: 'Search ranking'
        }],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "cognizant-security",
        oneLiner: "Remediated vulnerabilities in a critical banking app to meet financial compliance",
        details: "Challenge: Security vulnerabilities in banking app. Action: Remediated vulnerabilities to meet compliance. Result: Achieved financial compliance standards. Learning: Security remediation is essential for regulated applications.",
        skills: ['security', 'vulnerability-remediation', 'compliance'],
        complexity: 'high',
        scope: 'team'
      },
      {
        id: "cognizant-responsive-design",
        oneLiner: "Partnered with design to deliver responsive layouts and component patterns",
        skills: ['responsive-design', 'component-library', 'design-systems'],
        complexity: 'medium',
        scope: 'team'
      }
    ],
    domains: ['banking'],
    productAreas: ['platform']
  },
  {
    id: "progressive-2018-senior",
    role: "IT Applications Developer Senior",
    company: "Progressive Insurance",
    location: "Austin, TX",
    period: {
      start: parseDate("Jun 2018"),
      end: parseDate("Mar 2021")
    },
    employmentType: 'full-time',
    mode: 'onsite',
    primarySkills: ['angular', 'dotnet-core', 'nodejs', 'websockets', 'redis', 'aws-lambda', 'docsify'],
    supportingSkills: ['accessibility', 'mentorship', 'performance-optimization'],
    achievements: [
      {
        id: "progressive-angular-apps",
        oneLiner: "Delivered four Angular applications supporting thousands of claims representatives while mentoring peers",
        skills: ['angular', 'mentorship', 'front-end'],
        outcomes: [{
          kind: 'engagement',
          unit: 'count',
          direction: 'target',
          after: 4000,
          note: 'Users supported'
        }],
        complexity: 'high',
        scope: 'org'
      },
      {
        id: "progressive-lambda-redis",
        oneLiner: "Designed AWS Lambda + Redis locking system for concurrent workload management across thousands of users",
        skills: ['aws-lambda', 'redis', 'concurrency'],
        outcomes: [{
          kind: 'performance',
          unit: 'count',
          direction: 'target',
          after: 1000,
          note: 'Concurrent users'
        }],
        complexity: 'high',
        scope: 'org'
      },
      {
        id: "progressive-websockets",
        oneLiner: "Designed and delivered a WebSocket + ElastiCache architecture saving minutes per user per day",
        skills: ['websockets', 'redis', 'performance-optimization'],
        outcomes: [{
          kind: 'efficiency',
          unit: 'minutes',
          direction: 'decrease',
          delta: 1,
          note: 'Per user per day'
        }],
        complexity: 'high',
        scope: 'org'
      },
      {
        id: "progressive-docsify",
        oneLiner: "Shipped a Docsify on-call documentation portal in under a week, reducing incident time-to-resolution",
        skills: ['docsify', 'developer-experience', 'knowledge-management'],
        outcomes: [{
          kind: 'efficiency',
          unit: 'hours',
          direction: 'decrease',
          note: 'Incident time-to-resolution'
        }],
        complexity: 'low',
        scope: 'org'
      },
      {
        id: "progressive-accessibility",
        oneLiner: "Championed accessibility upgrades (screen reader support, keyboard navigation)",
        skills: ['accessibility', 'front-end'],
        complexity: 'medium',
        scope: 'org'
      },
      {
        id: "progressive-team-practices",
        oneLiner: "Standardized team practices and onboarded engineers via pairing and training",
        skills: ['mentorship', 'team-practices', 'onboarding'],
        complexity: 'medium',
        scope: 'team'
      }
    ],
    domains: ['insurance'],
    productAreas: ['platform']
  },
  {
    id: "progressive-2014-mid",
    role: "IT Applications Developer (Associate/Mid)",
    company: "Progressive Insurance",
    location: "Colorado Springs, CO",
    period: {
      start: parseDate("Jan 2014"),
      end: parseDate("Jun 2018")
    },
    employmentType: 'full-time',
    mode: 'onsite',
    primarySkills: ['dotnet-framework', 'javascript', 'css', 'sql-server', 'rest', 'agile'],
    supportingSkills: ['front-end', 'security', 'training'],
    achievements: [
      {
        id: "progressive-photo-viewer",
        oneLiner: "Built a photo viewer app saving ~130 employee hours/day within a two‑month Agile cycle",
        skills: ['dotnet', 'front-end', 'agile'],
        outcomes: [{
          kind: 'efficiency',
          unit: 'hours',
          direction: 'decrease',
          delta: 130,
          note: 'Per day'
        }],
        complexity: 'medium',
        scope: 'org'
      },
      {
        id: "progressive-api-remediation",
        oneLiner: "Remediated hundreds of deprecated APIs org‑wide, improving security and enabling browser upgrades",
        skills: ['dotnet', 'security', 'deprecated-api-remediation'],
        outcomes: [{
          kind: 'security',
          unit: 'count',
          direction: 'decrease',
          note: 'Deprecated APIs'
        }],
        complexity: 'medium',
        scope: 'org'
      },
      {
        id: "progressive-video-player",
        oneLiner: "Designed a custom video player that unlocked a new claims video workflow",
        skills: ['javascript', 'front-end', 'video'],
        complexity: 'medium',
        scope: 'org'
      },
      {
        id: "progressive-css-training",
        oneLiner: "Recognized as internal CSS Guru for org-wide UI training via an interactive crash course",
        skills: ['css', 'training', 'mentorship'],
        complexity: 'low',
        scope: 'org'
      }
    ],
    domains: ['insurance'],
    productAreas: ['platform']
  },
  {
    id: "earlier-2010-2013",
    role: "Earlier Experience (GE ITLP, University, Freelance)",
    company: "GE (ITLP), Gannon University, Independent",
    location: "Erie, PA",
    period: {
      start: parseDate("2010"),
      end: parseDate("2013")
    },
    employmentType: 'freelance',
    mode: 'onsite',
    primarySkills: ['ruby-on-rails', 'wordpress', 'mysql', 'html', 'css', 'javascript', 'lean', 'microsoft-bi'],
    supportingSkills: ['mentorship', 'seo'],
    achievements: [
      {
        id: "ge-itlp-rails",
        oneLiner: "GE ITLP: Built a responsive Rails portal; applied Lean tools to improve process efficiency",
        skills: ['ruby-on-rails', 'lean'],
        complexity: 'medium',
        scope: 'team'
      },
      {
        id: "ge-dashboard",
        oneLiner: "Developed a dynamic Excel dashboard using Microsoft's BI tools to transform SQL data into actionable insights for head of sourcing",
        skills: ['microsoft-bi', 'sql', 'data-visualization'],
        complexity: 'medium',
        scope: 'individual'
      },
      {
        id: "university-tutoring",
        oneLiner: "Tutoring: Installed a Cobol licensing server; improved student pass rates via tailored instruction",
        skills: ['server-setup', 'mentorship', 'education'],
        complexity: 'low',
        scope: 'individual'
      },
      {
        id: "freelance-wordpress",
        oneLiner: "Freelance: WordPress/CMS builds; achieved 2–3x SEO conversion improvements",
        skills: ['wordpress', 'seo', 'front-end'],
        outcomes: [{
          kind: 'revenue',
          unit: '%',
          direction: 'increase',
          delta: 200,
          note: 'SEO conversion'
        }],
        complexity: 'low',
        scope: 'individual'
      }
    ],
    domains: ['education', 'manufacturing'],
    productAreas: ['platform']
  },
  {
    id: "additional-projects",
    role: "Additional Projects",
    company: "Independent",
    location: "Austin, TX",
    period: {
      start: parseDate("2010"),
      end: null
    },
    employmentType: 'freelance',
    mode: 'remote',
    primarySkills: ['python', 'machine-learning', 'react', 'typescript', 'wordpress', 'html', 'css'],
    supportingSkills: ['open-source', 'ui-ux'],
    achievements: [
      {
        id: "ml-real-estate",
        oneLiner: "Used machine learning for Austin real estate analysis, launching an Airbnb with projected 25% annual ROI",
        skills: ['machine-learning', 'python', 'data-analysis'],
        outcomes: [{
          kind: 'revenue',
          unit: '%',
          direction: 'increase',
          delta: 25,
          note: 'Annual ROI'
        }],
        complexity: 'medium',
        scope: 'individual'
      },
      {
        id: "roo-code-contribution",
        oneLiner: "Contributed to Roo Code (open-source IDE extension), improving UI/UX interaction and simplifying component architecture",
        skills: ['open-source', 'ui-ux', 'developer-experience'],
        complexity: 'medium',
        scope: 'individual'
      },
      {
        id: "small-websites",
        oneLiner: "Designed and launched multiple small-scale websites with custom forms, galleries, and responsive layouts",
        skills: ['front-end', 'wordpress', 'responsive-design'],
        complexity: 'low',
        scope: 'individual'
      }
    ],
    domains: ['real-estate', 'open-source'],
    productAreas: ['platform']
  }
];

// Export the complete CV2 data
export const cv2Data: CV2Data = {
  skills,
  experiences
};