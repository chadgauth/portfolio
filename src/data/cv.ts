export interface CVItem {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  impact: number; // 1-10 scale for sorting by impact
  skills: {
    architecture: string[];
    technical: string[];
    development: string[];
    leadership: string[];
  };
  highlights: {
    text: string;
    relatedSkills: string[];
  }[];
}

export const cvData: CVItem[] = [
  {
    id: "handraise-2023",
    title: "SOFTWARE ENGINEER (FRONT END / FULL STACK)",
    company: "Handraise",
    location: "Remote",
    startDate: "2023-12",
    endDate: "present",
    impact: 9,
    skills: {
      architecture: ["API Architecture", "System Design", "Component Architecture", "AI/ML Systems"],
      technical: ["GraphQL/URQL", "TypeScript", "React"],
      development: ["Architecture Patterns", "Performance Optimization"],
      leadership: ["Technical Strategy", "Architecture Planning"]
    },
    highlights: [
      {
        text: "Architected and implemented a modern API layer using GraphQL/URQL, establishing strict contract enforcement and type safety across the full stack",
        relatedSkills: ["API Architecture", "GraphQL/URQL"]
      },
      {
        text: "Designed and implemented a scalable component architecture that improved development velocity by 40% and reduced UI inconsistencies by 60%",
        relatedSkills: ["Component Architecture", "System Design"]
      },
      {
        text: "Led the architecture and integration of AI systems, including custom LLM implementation for structured data processing and analysis",
        relatedSkills: ["AI/ML Systems", "Architecture Patterns"]
      }
    ]
  },
  {
    id: "crowdstreet-2022",
    title: "SENIOR SOFTWARE ENGINEER AND TEAM LEAD",
    company: "CrowdStreet",
    location: "Austin, TX",
    startDate: "2022-06",
    endDate: "2023-12",
    impact: 8,
    skills: {
      architecture: ["System Design", "Performance Architecture", "Distributed Systems"],
      technical: ["Build Systems", "OAuth", "Microservices"],
      development: ["Architecture Patterns", "System Testing"],
      leadership: ["Technical Leadership", "Architecture Planning"]
    },
    highlights: [
      {
        text: "Architected a distributed build system that reduced build times by 95% and improved development workflow efficiency",
        relatedSkills: ["Performance Architecture", "Build Systems"]
      },
      {
        text: "Redesigned system architecture to eliminate circular dependencies, resulting in 40% smaller bundle sizes and improved application performance",
        relatedSkills: ["System Design", "Architecture Patterns"]
      }
    ]
  },
  {
    id: "progressive-2018",
    title: "IT APPLICATIONS DEVELOPER SENIOR",
    company: "Progressive Insurance",
    location: "Austin, TX",
    startDate: "2018-06",
    endDate: "2021-03",
    impact: 9,
    skills: {
      architecture: ["Distributed Systems", "Real-time Architecture", "System Design"],
      technical: ["WebSocket", "Caching", "High-Scale Systems"],
      development: ["Architecture Patterns", "System Documentation"],
      leadership: ["Architecture Planning", "Team Leadership"]
    },
    highlights: [
      {
        text: "Architected and implemented a real-time distributed system using WebSocket and ElastiCache, serving thousands of concurrent users with sub-second latency",
        relatedSkills: ["Distributed Systems", "Real-time Architecture"]
      },
      {
        text: "Designed and implemented comprehensive system documentation and architecture decision records (ADRs) that reduced onboarding time by 50%",
        relatedSkills: ["System Documentation", "Architecture Planning"]
      }
    ]
  }
];

export const skillCategories = {
  "System Architecture": [
    "API Architecture",
    "System Design",
    "Component Architecture",
    "Distributed Systems",
    "Real-time Architecture",
    "Performance Architecture"
  ],
  "Technical Leadership": [
    "Architecture Planning",
    "Technical Leadership",
    "Technical Strategy"
  ],
  "Specialized Systems": [
    "AI/ML Systems",
    "High-Scale Systems",
    "Performance Optimization",
    "System Documentation"
  ]
};