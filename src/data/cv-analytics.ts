// CV Analytics & Smart Filtering Logic

import type { CV2Experience } from './cv2.schema';
import { experiences } from './cv2';

export interface SkillAnalytics {
  name: string;
  frequency: number;
  experiences: string[];
  avgImpact: number;
  recency: number; // Years since most recent use
  totalScore: number;
}

export interface ExperienceScore {
  id: string;
  relevanceScore: number;
  skillMatches: string[];
  impactBonus: number;
  recencyBonus: number;
}

export interface ExperienceMetrics {
  totalYears: number;
  companies: number;
  technologies: number;
  latestRole: string;
  latestCompany: string;
  topImpact: number;
}

// Analyze all skills across experiences
export function analyzeSkills(): SkillAnalytics[] {
  const skillMap = new Map<string, {
    count: number;
    experiences: string[];
    impacts: number[];
    lastUsed: number; // Experience index (0 = most recent)
  }>();

  // Process all experiences
  experiences.forEach((exp, expIndex) => {
    const allSkills = [
      ...(exp.primarySkills || []),
      ...(exp.supportingSkills || []),
      ...exp.achievements.flatMap((a) => a.skills)
    ];

    // Deduplicate skills within this experience
    const uniqueSkills = [...new Set(allSkills)];

    uniqueSkills.forEach(skill => {
      if (!skillMap.has(skill)) {
        skillMap.set(skill, {
          count: 0,
          experiences: [],
          impacts: [],
          lastUsed: expIndex
        });
      }

      const skillData = skillMap.get(skill)!;
      skillData.count++;
      skillData.experiences.push(exp.id);
      skillData.impacts.push(8);
      skillData.lastUsed = Math.min(skillData.lastUsed, expIndex);
    });
  });

  // Convert to SkillAnalytics array
  const analytics: SkillAnalytics[] = [];
  
  skillMap.forEach((data, skillName) => {
    const avgImpact = data.impacts.reduce((sum, impact) => sum + impact, 0) / data.impacts.length;
    const recency = data.lastUsed; // 0 = most recent, higher = older
    
    // Calculate total score for ranking
    const frequencyScore = data.count * 2;
    const impactScore = avgImpact * 1.5;
    const recencyScore = Math.max(0, 10 - recency) * 1.2; // Newer = higher score
    const totalScore = frequencyScore + impactScore + recencyScore;

    analytics.push({
      name: skillName,
      frequency: data.count,
      experiences: data.experiences,
      avgImpact,
      recency,
      totalScore
    });
  });

  // Sort by total score (highest first)
  return analytics.sort((a, b) => b.totalScore - a.totalScore);
}

// Get skills that should be shown in smart filters (2+ experiences)
export function getSmartFilterSkills(): string[] {
  const analytics = analyzeSkills();
  return analytics
    .filter(skill => skill.frequency >= 2)
    .map(skill => skill.name);
}

// Get top skills by frequency for prominent display
export function getTopSkills(limit: number = 10): SkillAnalytics[] {
  const analytics = analyzeSkills();
  return analytics
    .filter(skill => skill.frequency >= 2)
    .slice(0, limit);
}

// Calculate relevance score for an experience given selected skills
export function calculateRelevanceScore(exp: CV2Experience, selectedSkills: string[]): number {
  if (selectedSkills.length === 0) return 0;

  const allExpSkills = [
    ...(exp.primarySkills || []),
    ...(exp.supportingSkills || []),
    ...exp.achievements.flatMap((a) => a.skills)
  ];

  const uniqueExpSkills = [...new Set(allExpSkills)];
  const skillMatches = selectedSkills.filter(skill => uniqueExpSkills.includes(skill));

  // Get skill analytics for frequency bonus
  const skillAnalytics = analyzeSkills();
  const skillFrequencyMap = new Map(skillAnalytics.map(s => [s.name, s.frequency]));

  // Calculate score components
  const skillMatchScore = skillMatches.length * 2.0;
  const impactScore = 8 * 1.5;
  const recencyBonus = getRecencyBonus(exp);
  const frequencyBonus = skillMatches.reduce((sum, skill) => {
    return sum + (skillFrequencyMap.get(skill) || 1) * 0.8;
  }, 0);

  return skillMatchScore + impactScore + recencyBonus + frequencyBonus;
}

// Get recency bonus based on experience position in timeline
function getRecencyBonus(exp: CV2Experience): number {
  const expIndex = experiences.findIndex(e => e.id === exp.id);
  return Math.max(0, 10 - expIndex) * 1.2;
}

// Sort experiences by relevance for filtered view
export function sortByRelevance(experiences: CV2Experience[], selectedSkills: string[]): CV2Experience[] {
  if (selectedSkills.length === 0) {
    return [...experiences]; // Return chronological order
  }

  return [...experiences].sort((a, b) => {
    const scoreA = calculateRelevanceScore(a, selectedSkills);
    const scoreB = calculateRelevanceScore(b, selectedSkills);
    return scoreB - scoreA; // Highest relevance first
  });
}

// Filter experiences that match ALL selected skills
export function filterExperiences(experiences: CV2Experience[], selectedSkills: string[]): CV2Experience[] {
  if (selectedSkills.length === 0) {
    return experiences;
  }

  return experiences.filter(exp => {
    const allExpSkills = [
      ...(exp.primarySkills || []),
      ...(exp.supportingSkills || []),
      ...exp.achievements.flatMap((a) => a.skills)
    ];

    const uniqueExpSkills = [...new Set(allExpSkills)];

    // Check if ALL selected skills are present in this experience
    return selectedSkills.every(skill => uniqueExpSkills.includes(skill));
  });
}

// Get overall experience metrics for header
export function getExperienceMetrics(): ExperienceMetrics {
  const currentYear = new Date().getFullYear();

  // Calculate total years (approximate)
  const earliestYear = 2010; // Based on CV data
  const totalYears = currentYear - earliestYear;

  // Count unique companies
  const companies = new Set(experiences.map(exp => exp.company)).size;

  // Count unique technologies
  const allTech = experiences.flatMap(exp => [
    ...(exp.primarySkills || []),
    ...(exp.supportingSkills || []),
    ...exp.achievements.flatMap((a) => a.skills)
  ]);
  const technologies = new Set(allTech).size;

  // Get latest role info
  const latest = experiences[0]; // Assuming chronological order

  // Get top impact score
  const topImpact = 10;

  return {
    totalYears,
    companies,
    technologies,
    latestRole: latest.role,
    latestCompany: latest.company,
    topImpact
  };
}

// Search experiences by query across all content
export function searchExperiences(experiences: CV2Experience[], query: string): CV2Experience[] {
  if (!query.trim()) {
    return experiences;
  }

  const lowercaseQuery = query.toLowerCase();

  return experiences.filter(exp => {
    // Search in title, company, stack, and highlight content
    const searchableContent = [
      exp.role,
      exp.company,
      exp.location,
      ...(exp.primarySkills || []),
      ...(exp.supportingSkills || []),
      ...exp.achievements.flatMap(a => [a.oneLiner, a.details || '', ...a.skills])
    ].join(' ').toLowerCase();

    return searchableContent.includes(lowercaseQuery);
  });
}

// Get skill frequency for display
export function getSkillFrequency(skillName: string): number {
  const analytics = analyzeSkills();
  const skill = analytics.find(s => s.name === skillName);
  return skill ? skill.frequency : 0;
}

// Get matching skills for an experience (for highlighting)
export function getMatchingSkills(exp: CV2Experience, selectedSkills: string[]): string[] {
  const allExpSkills = [
    ...(exp.primarySkills || []),
    ...(exp.supportingSkills || []),
    ...exp.achievements.flatMap((a) => a.skills)
  ];

  const uniqueExpSkills = [...new Set(allExpSkills)];
  return selectedSkills.filter(skill => uniqueExpSkills.includes(skill));
}

// Get impact level for styling
export function getImpactLevel(impact: number): 'high' | 'medium' | 'standard' {
  if (impact >= 9) return 'high';
  if (impact >= 7) return 'medium';
  return 'standard';
}