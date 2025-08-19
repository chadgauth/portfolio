// CV2 "perfect" data structures (no arbitrary 'impact' field)
// Focus: filterability, sortability, and explicit evidence mapping
// This file defines TYPES ONLY (no UI, no DOM, no behavior)

export type ISODate = string; // e.g., '2025-08-19'

// Skill taxonomy
export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'devops'
  | 'api'
  | 'data'
  | 'security'
  | 'testing'
  | 'leadership'
  | 'design'
  | 'other';

export interface CV2Skill {
  slug: string;        // kebab-case id: 'react', 'aws-lambda'
  label: string;       // display: 'React', 'AWS Lambda'
  category: SkillCategory;
}

// Structured time range for sorting/recency
export interface DateRange {
  start: ISODate;      // ISO date string
  end?: ISODate | null; // null => present
}

// Employment context (facets useful for filters)
// No 'impact' scalar; instead: scope/complexity + evidenced outcomes
export type EmploymentType = 'full-time' | 'contract' | 'consulting' | 'freelance';
export type WorkMode = 'onsite' | 'remote' | 'hybrid';

// Scope/Complexity are categorical (used for derived ordering, not displayed as numbers)
export type ScopeLevel = 'individual' | 'team' | 'org' | 'multi-org';
export type ComplexityLevel = 'low' | 'medium' | 'high' | 'very-high';

// Outcomes are structured, comparable and optional
export type OutcomeKind =
  | 'performance'   // latency, throughput
  | 'reliability'   // errors, incidents
  | 'cost'          // cloud cost, infra cost
  | 'revenue'       // ARR, conversion uplift
  | 'quality'       // defects, test coverage
  | 'efficiency'    // time saved, cycle time
  | 'engagement'    // usage metrics
  | 'security'      // vulns, compliance
  | 'other';

export type OutcomeUnit =
  | 'ms'
  | 's'
  | 'req/s'
  | '%'
  | 'count'
  | '$'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'points'
  | 'score'
  | 'text';

// Direction indicates desired movement for interpretation
export type OutcomeDirection = 'increase' | 'decrease' | 'target';

// Metric representation without forcing a single numeric
export interface OutcomeMetric {
  kind: OutcomeKind;
  unit: OutcomeUnit;
  direction: OutcomeDirection; // e.g., 'decrease' latency, 'increase' conversion
  before?: number;             // optional baseline
  after?: number;              // optional result
  delta?: number;              // explicit change if known
  note?: string;               // human-friendly qualifier when numbers aren't perfect
}

// Achievement: the atomic evidence unit tying skills to outcomes
export interface CV2Achievement {
  id: string;                  // unique id within experience
  oneLiner: string;            // concise statement of value delivered
  details?: string;            // optional deeper description
  skills: string[];            // skill slugs used in this achievement
  outcomes?: OutcomeMetric[];  // structured results (optional but encouraged)
  links?: { label: string; href: string }[]; // optional public artifacts
  complexity?: ComplexityLevel;
  scope?: ScopeLevel;
}

// Experience: role at a company with achievements
export interface CV2Experience {
  id: string;
  role: string;                // 'Senior Software Engineer'
  company: string;
  location?: string;
  period: DateRange;
  employmentType?: EmploymentType;
  mode?: WorkMode;

  // Skills central to the role for quick filtering/faceting
  primarySkills: string[];     // slugs, 3–8 recommended
  supportingSkills?: string[]; // slugs, optional

  // Evidence
  achievements: CV2Achievement[]; // 2–6 recommended

  // Optional tags for filtering/sorting (product area, domain, industry)
  domains?: string[];          // e.g., 'fintech', 'ecommerce', 'analytics'
  productAreas?: string[];     // e.g., 'platform', 'dx', 'identity', 'growth'
}

// Top-level dataset: normalized skills + experiences
export interface CV2Data {
  skills: CV2Skill[];
  experiences: CV2Experience[];
}

// --------- Design Principles (Doc Notes) ---------
// 1) No arbitrary 'impact' scalar. Relevance is derived in the ENGINE via:
//    - Recency: period.end/start with decay
//    - Evidence strength: count and richness of achievements referencing the selected skills
//    - Scope/Complexity tiers (categorical, mapped to bands internally – never shown as numbers)
//    - Outcome presence/quality (metrics provided > just prose)
//
// 2) Skills are normalized by slug and referenced everywhere by slug.
//    This enables fast AND/OR set operations during filtering.
//
// 3) Achievements are the join-table between skills and experiences,
//    allowing the UI to highlight only relevant lines when a skill is active.
//
// 4) Sorting emits tiers (Primary/Strong/Supporting) instead of numbers to avoid "fake scores".
//
// 5) All fields are optional enough to support partial data during authoring,
//    but structured enough to power strong filtering and desktop-first layouts.
//
// 6) The ENGINE (src/lib/cv2.engine.ts) will:
//    - build indices: skill->achievements, skill->experiences, experience->skills
//    - compute recency weights and tier classifications (not surfaced as raw numbers)
//    - expose pure functions for filtering/sorting without DOM concerns.
//
// Keep this file types-only. Mock/example data lives in src/data/cv2.mock.ts.