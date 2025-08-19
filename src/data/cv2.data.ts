// CV2 normalized demo dataset using the new schema (no 'impact' field)
import type { CV2Data } from './cv2.schema';

export const cv2Data: CV2Data = {
  skills: [
    { slug: 'react', label: 'React', category: 'frontend' },
    { slug: 'typescript', label: 'TypeScript', category: 'frontend' },
    { slug: 'nodejs', label: 'Node.js', category: 'backend' },
    { slug: 'aws', label: 'AWS', category: 'cloud' },
    { slug: 'graphql', label: 'GraphQL', category: 'api' },
    { slug: 'postgresql', label: 'PostgreSQL', category: 'database' },
    { slug: 'kafka', label: 'Apache Kafka', category: 'data' },
    { slug: 'redis', label: 'Redis', category: 'database' },
    { slug: 'aws-lambda', label: 'AWS Lambda', category: 'cloud' },
    { slug: 'module-federation', label: 'Webpack Module Federation', category: 'frontend' },
    { slug: 'docker', label: 'Docker', category: 'devops' },
    { slug: 'kubernetes', label: 'Kubernetes', category: 'devops' },

    { slug: 'vue', label: 'Vue.js', category: 'frontend' },
    { slug: 'python', label: 'Python', category: 'backend' },
    { slug: 'fastapi', label: 'FastAPI', category: 'api' },

    { slug: 'css', label: 'CSS', category: 'frontend' },
    { slug: 'javascript', label: 'JavaScript', category: 'frontend' },
    { slug: 'figma', label: 'Figma', category: 'design' },
    { slug: 'webpack', label: 'Webpack', category: 'frontend' },
    { slug: 'storybook', label: 'Storybook', category: 'frontend' },

    { slug: 'testing-jest', label: 'Jest', category: 'testing' },
    { slug: 'testing-cypress', label: 'Cypress', category: 'testing' },
    { slug: 'a11y', label: 'Accessibility (WCAG 2.1)', category: 'design' },
  ],

  experiences: [
    {
      id: 'techcorp-senior',
      role: 'Senior Software Engineer',
      company: 'TechCorp',
      location: 'Austin, TX',
      period: { start: '2023-01-01', end: null },
      employmentType: 'full-time',
      mode: 'hybrid',
      domains: ['analytics', 'platform'],
      productAreas: ['dx', 'platform'],

      primarySkills: ['react', 'typescript', 'nodejs', 'aws', 'graphql', 'postgresql'],
      supportingSkills: ['kafka', 'redis', 'aws-lambda', 'docker', 'kubernetes', 'module-federation'],

      achievements: [
        {
          id: 'techcorp-pipeline',
          oneLiner: 'Built real-time data pipeline processing 10M+ events/day under 100ms latency.',
          details:
            'Architected streaming ingestion with exactly-once semantics, horizontal scaling, and backpressure controls.',
          skills: ['kafka', 'redis', 'typescript', 'aws-lambda', 'nodejs'],
          outcomes: [
            {
              kind: 'performance',
              unit: 'ms',
              direction: 'decrease',
              before: 350,
              after: 95,
              note: 'P99 latency measured in production',
            },
            { kind: 'reliability', unit: '%', direction: 'increase', after: 99.95, note: 'SLO achieved' },
          ],
          links: [],
          complexity: 'very-high',
          scope: 'org',
        },
        {
          id: 'techcorp-mfe',
          oneLiner:
            'Led migration to micro-frontends, enabling independent deploys and cutting release overhead.',
          details: 'Adopted Module Federation with shared runtime contracts and versioned adapters.',
          skills: ['react', 'module-federation', 'docker', 'kubernetes', 'typescript'],
          outcomes: [
            { kind: 'efficiency', unit: '%', direction: 'decrease', delta: 80, note: 'Deploy cycle time' },
            { kind: 'quality', unit: '%', direction: 'decrease', delta: 35, note: 'Release defects' },
          ],
          links: [],
          complexity: 'high',
          scope: 'team',
        },
      ],
    },

    {
      id: 'startupco-fullstack',
      role: 'Full Stack Developer',
      company: 'StartupCo',
      location: 'Remote',
      period: { start: '2022-01-01', end: '2022-12-31' },
      employmentType: 'full-time',
      mode: 'remote',
      domains: ['saas'],
      productAreas: ['growth', 'core-app'],

      primarySkills: ['vue', 'python', 'postgresql', 'docker', 'fastapi', 'redis'],
      supportingSkills: [],

      achievements: [
        {
          id: 'startupco-migrations',
          oneLiner: 'Implemented zero-downtime migration framework for 50k+ DAU.',
          details:
            'Built advisory and online migration phases, shadow reads, and controlled cutovers with smoke checks.',
          skills: ['postgresql', 'python', 'fastapi', 'docker'],
          outcomes: [
            { kind: 'reliability', unit: 'count', direction: 'decrease', delta: 12, note: 'Fewer incidents/qtr' },
            { kind: 'efficiency', unit: 'hours', direction: 'decrease', delta: 40, note: 'Ops time saved/qtr' },
          ],
          links: [],
          complexity: 'high',
          scope: 'team',
        },
        {
          id: 'startupco-perf',
          oneLiner: 'Reduced API response times by ~60% via caching and query optimization.',
          details:
            'Added per-endpoint caching, tuned indexes, and introduced background aggregation tasks.',
          skills: ['redis', 'postgresql', 'python'],
          outcomes: [
            { kind: 'performance', unit: '%', direction: 'decrease', delta: 60, note: 'Median latency' },
          ],
          links: [],
          complexity: 'medium',
          scope: 'individual',
        },
      ],
    },

    {
      id: 'designstudio-frontend',
      role: 'Frontend Engineer',
      company: 'DesignStudio',
      location: 'San Francisco, CA',
      period: { start: '2021-01-01', end: '2021-12-31' },
      employmentType: 'contract',
      mode: 'onsite',
      domains: ['design-system'],
      productAreas: ['platform', 'dx'],

      primarySkills: ['react', 'css', 'javascript', 'webpack', 'storybook', 'figma'],
      supportingSkills: ['typescript'],

      achievements: [
        {
          id: 'designstudio-ds',
          oneLiner:
            'Created a design system with 50+ reusable components used by 3 product teams.',
          details:
            'Wrote strong docs, established tokens, themes, and CI visual regression checks.',
          skills: ['react', 'storybook', 'typescript'],
          outcomes: [
            { kind: 'efficiency', unit: '%', direction: 'decrease', delta: 40, note: 'Dev time on UI tasks' },
          ],
          links: [],
          complexity: 'medium',
          scope: 'team',
        },
        {
          id: 'designstudio-a11y',
          oneLiner: 'Achieved WCAG 2.1 AA across key flows with automated checks.',
          details:
            'Integrated axe rules, keyboard support, focus management, and screen reader patterns.',
          skills: ['a11y', 'testing-jest', 'testing-cypress', 'react'],
          outcomes: [
            { kind: 'quality', unit: 'score', direction: 'increase', after: 100, note: 'Lighthouse A11y score' },
          ],
          links: [],
          complexity: 'medium',
          scope: 'team',
        },
      ],
    },
  ],
};