// Real CV data converted to CV2 schema format
import type { CV2Data, CV2Experience, CV2Achievement, CV2Skill } from './cv2.schema';
import { cvDataV2 } from './cv.ts';

// Helper function to convert dates to ISO format
function toISODate(dateStr: string): string {
  if (dateStr === 'Present') return '';
  
  // Convert "Dec 2023" to "2023-12-01"
  const parts = dateStr.split(' ');
  if (parts.length === 2) {
    const [month, year] = parts;
    const monthMap: { [key: string]: string } = {
      'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
      'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
      'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
    };
    return `${year}-${monthMap[month] || '01'}-01`;
  }
  
  // Just year
  return `${dateStr}-01-01`;
}

// Helper function to create skill slugs
function createSkillSlug(skill: string): string {
  return skill
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Build comprehensive skill list from all experiences
const allSkillsSet = new Set<string>();
cvDataV2.forEach(exp => {
  exp.stack.forEach(skill => allSkillsSet.add(skill));
  exp.highlights.forEach(highlight => {
    highlight.skillsFilter.forEach(skill => allSkillsSet.add(skill));
  });
});

// Skill categorization map
const skillCategoryMap: Record<CV2Skill['category'], string[]> = {
  frontend: ['React', 'Angular', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Storybook', 'Figma', 'Front-End', 'UI/UX', 'Responsive Design'],
  backend: ['Node.js', 'Python', '.NET', 'Ruby on Rails', 'Java'],
  database: ['PostgreSQL', 'Aurora', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Database'],
  cloud: ['AWS', 'Azure', 'Lambda', 'Serverless'],
  devops: ['CI/CD', 'GitHub Actions', 'Terraform', 'Docker', 'NGINX', 'Infrastructure', 'Shell Scripting', 'DevOps', 'Nx'],
  api: ['GraphQL', 'REST', 'API'],
  data: ['Analytics', 'Data', 'ETL', 'Visualization', 'BI', 'Tableau', 'Power BI', 'Spark', 'Hadoop', 'ML', 'Machine Learning'],
  testing: ['Jest', 'Cypress', 'Testing', 'Playwright', 'Vitest'],
  leadership: ['Leadership', 'Mentorship', 'Team', 'Management'],
  security: ['Security', 'OAuth', 'JWT', 'OIDC'],
  design: ['Accessibility', 'WCAG', 'Design', 'UX'],
  other: []
};

// Helper function to categorize a skill
function categorizeSkill(skill: string): CV2Skill['category'] {
  for (const [category, keywords] of Object.entries(skillCategoryMap)) {
    if (category === 'other') continue;
    if (keywords.some(keyword => skill.includes(keyword))) {
      return category as CV2Skill['category'];
    }
  }
  return 'other';
}

// Create skills with categories
const skills: CV2Skill[] = Array.from(allSkillsSet).map(skill => {
  const slug = createSkillSlug(skill);
  const category = categorizeSkill(skill);
  
  return {
    slug,
    label: skill,
    category
  };
});

// Convert experiences
const experiences: CV2Experience[] = cvDataV2.map(exp => {
  const primarySkills = exp.stack.slice(0, 8).map(createSkillSlug);
  const supportingSkills = exp.stack.slice(8).map(createSkillSlug);
  
  const achievements: CV2Achievement[] = exp.highlights.map((highlight, index) => {
    const achievementSkills = highlight.skillsFilter.map(createSkillSlug);
    
    // Try to extract outcomes from the text
    const outcomes: CV2Achievement['outcomes'] = [];
    const text = highlight.oneLiner + (highlight.furtherDetails || '');
    
    // Look for percentage improvements
    const percentMatch = text.match(/(\d+)%/g);
    if (percentMatch) {
      percentMatch.forEach(match => {
        const value = parseInt(match);
        outcomes.push({
          kind: text.includes('time') || text.includes('build') || text.includes('cycle') ? 'efficiency' : 'performance',
          unit: '%',
          direction: text.includes('reduc') || text.includes('cut') || text.includes('improv') ? 'decrease' : 'increase',
          delta: value,
          note: 'Extracted from description'
        });
      });
    }
    
    // Look for time improvements
    const timeMatch = text.match(/(\d+)\s*(s|second|minute|hour|day)s?/gi);
    if (timeMatch) {
      timeMatch.forEach(match => {
        const [, value, unit] = match.match(/(\d+)\s*(s|second|minute|hour|day)s?/i) || [];
        if (value) {
          outcomes.push({
            kind: 'efficiency',
            unit: unit.startsWith('s') ? 's' : unit.startsWith('m') ? 'minutes' : unit.startsWith('h') ? 'hours' : 'days',
            direction: 'decrease',
            after: parseInt(value),
            note: 'Time optimization'
          });
        }
      });
    }
    
    return {
      id: `${exp.id}-achievement-${index + 1}`,
      oneLiner: highlight.oneLiner,
      details: highlight.furtherDetails,
      skills: achievementSkills,
      outcomes: outcomes.length > 0 ? outcomes : undefined,
      complexity: text.includes('architect') || text.includes('design') || text.includes('build') ? 'high' : 'medium',
      scope: text.includes('org') || text.includes('company') ? 'org' : text.includes('team') ? 'team' : 'individual'
    };
  });
  
  // Determine domains and product areas
  const domains: string[] = [];
  const productAreas: string[] = [];
  
  if (exp.company.toLowerCase().includes('insurance')) domains.push('insurance');
  if (exp.company.toLowerCase().includes('bank') || exp.title.includes('bank')) domains.push('fintech');
  if (exp.title.toLowerCase().includes('senior') || exp.title.includes('lead')) domains.push('leadership');
  
  // Extract product areas from achievements
  const allText = exp.highlights.map(h => h.oneLiner + (h.furtherDetails || '')).join(' ').toLowerCase();
  if (allText.includes('platform') || allText.includes('infrastructure')) productAreas.push('platform');
  if (allText.includes('developer') || allText.includes('dx') || allText.includes('tool')) productAreas.push('dx');
  if (allText.includes('design') || allText.includes('component')) productAreas.push('design-system');
  if (allText.includes('growth') || allText.includes('conversion')) productAreas.push('growth');
  
  return {
    id: exp.id,
    role: exp.title,
    company: exp.company,
    location: exp.location,
    period: {
      start: toISODate(exp.startDate),
      end: exp.endDate === 'Present' ? null : toISODate(exp.endDate)
    },
    employmentType: 'full-time' as const,
    mode: exp.location === 'Remote' ? 'remote' as const : 'hybrid' as const,
    primarySkills,
    supportingSkills: supportingSkills.length > 0 ? supportingSkills : undefined,
    achievements,
    domains: domains.length > 0 ? domains : undefined,
    productAreas: productAreas.length > 0 ? productAreas : undefined
  };
});

export const realCV2Data: CV2Data = {
  skills,
  experiences
};