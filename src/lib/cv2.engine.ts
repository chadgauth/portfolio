// CV2 functional engine (no DOM). Pure utilities to index, filter, and sort data.
// Consumes the normalized schema in src/data/cv2.schema.ts and datasets like src/data/cv2.data.ts

import type {
  CV2Data,
  CV2Experience,
  CV2Achievement,
  DateRange,
} from '../data/cv2.schema';

// ---------- Indices ----------
export interface CV2Indices {
  expById: Map<string, CV2Experience>;
  // Experience -> Set of skill slugs (primary + supporting + achievements)
  expSkills: Map<string, Set<string>>;
  // Skill -> Set of experience ids
  skillToExps: Map<string, Set<string>>;
  // Skill -> Set of achievement IDs (qualified as expId#achId)
  skillToAchievements: Map<string, Set<string>>;
  // Experience -> Map(achievementId -> Set(skill))
  expAchievementSkills: Map<string, Map<string, Set<string>>>;
}

// What tier a matching experience falls into when filtering by selected skills
export type MatchTier = 'primary' | 'supporting' | 'related';

export interface MatchMeta {
  expId: string;
  matchedSkills: Set<string>;
  tier: MatchTier;
  matchedAchievementIds: Set<string>; // achievements that include at least one selected skill
}

export interface FilterResult {
  ordered: CV2Experience[];     // sorted experiences
  matches: Map<string, MatchMeta>; // by expId
}

// ---------- Build Indices ----------
export function buildIndices(data: CV2Data): CV2Indices {
  const expById = new Map<string, CV2Experience>();
  const expSkills = new Map<string, Set<string>>();
  const skillToExps = new Map<string, Set<string>>();
  const skillToAchievements = new Map<string, Set<string>>();
  const expAchievementSkills = new Map<string, Map<string, Set<string>>>();

  for (const exp of data.experiences) {
    expById.set(exp.id, exp);

    const skills = new Set<string>([
      ...(exp.primarySkills ?? []),
      ...(exp.supportingSkills ?? []),
    ]);

    const achSkillMap = new Map<string, Set<string>>();

    for (const ach of exp.achievements) {
      const s = new Set<string>(ach.skills ?? []);
      achSkillMap.set(ach.id, s);
      s.forEach((slug) => {
        // skill->achievements
        const key = `${exp.id}#${ach.id}`;
        if (!skillToAchievements.has(slug)) skillToAchievements.set(slug, new Set());
        skillToAchievements.get(slug)!.add(key);
        // skill->exps
        if (!skillToExps.has(slug)) skillToExps.set(slug, new Set());
        skillToExps.get(slug)!.add(exp.id);
      });
      // experience-level union
      s.forEach((slug) => skills.add(slug));
    }

    expAchievementSkills.set(exp.id, achSkillMap);
    expSkills.set(exp.id, skills);

    // Ensure primary/supporting are represented in skill->exps
    (exp.primarySkills ?? []).forEach((slug) => {
      if (!skillToExps.has(slug)) skillToExps.set(slug, new Set());
      skillToExps.get(slug)!.add(exp.id);
    });
    (exp.supportingSkills ?? []).forEach((slug) => {
      if (!skillToExps.has(slug)) skillToExps.set(slug, new Set());
      skillToExps.get(slug)!.add(exp.id);
    });
  }

  return { expById, expSkills, skillToExps, skillToAchievements, expAchievementSkills };
}

// ---------- Utilities ----------
export function computeSkillCounts(indices: CV2Indices): Map<string, number> {
  const counts = new Map<string, number>();
  indices.skillToExps.forEach((set, skill) => counts.set(skill, set.size));
  return counts;
}

export function parseISO(date?: string | null): number {
  if (!date) return Date.now();
  const t = Date.parse(date);
  return Number.isNaN(t) ? Date.now() : t;
}

export function recencyScore(period: DateRange): number {
  // Higher is more recent. End date preferred; if null, treat as now.
  const end = parseISO(period.end ?? null);
  const start = parseISO(period.start);
  // Weight toward end, with start as slight tie breaker
  return end * 1.0 + start * 0.001;
}

// ---------- Tiering ----------
export function classifyTier(exp: CV2Experience, matched: Set<string>): MatchTier {
  // If any matched skill is in primary -> primary
  const prim = new Set(exp.primarySkills ?? []);
  const supp = new Set(exp.supportingSkills ?? []);
  let hasPrimary = false;
  let hasSupp = false;

  for (const s of matched) {
    if (prim.has(s)) hasPrimary = true;
    if (supp.has(s)) hasSupp = true;
  }

  if (hasPrimary) return 'primary';
  if (hasSupp) return 'supporting';
  return 'related';
}

// ---------- Filtering & Sorting ----------
// AND semantics: An experience qualifies if ALL selected skills appear in its union skill set
export function filterBySkills(
  indices: CV2Indices,
  selectedSkills: Set<string>
): { expIds: string[]; matches: Map<string, MatchMeta> } {
  const result: string[] = [];
  const matches = new Map<string, MatchMeta>();

  const allSelected = Array.from(selectedSkills);
  // If nothing selected => include all exps, with empty match meta
  if (allSelected.length === 0) {
    indices.expById.forEach((_exp, id) => {
      result.push(id);
      matches.set(id, { expId: id, matchedSkills: new Set(), tier: 'related', matchedAchievementIds: new Set() });
    });
    return { expIds: result, matches };
  }

  // Evaluate each experience
  indices.expById.forEach((exp, id) => {
    const unionSkills = indices.expSkills.get(id) ?? new Set<string>();
    const qualifies = allSelected.every((s) => unionSkills.has(s));
    if (!qualifies) return;

    // What specifically matched and where?
    const matchedSkills = new Set<string>(allSelected.filter((s) => unionSkills.has(s)));

    // Which achievements contain any of the selected skills?
    const achMap = indices.expAchievementSkills.get(id) ?? new Map<string, Set<string>>();
    const matchedAchIds = new Set<string>();
    achMap.forEach((achSkills, achId) => {
      for (const s of allSelected) {
        if (achSkills.has(s)) {
          matchedAchIds.add(achId);
          break;
        }
      }
    });

    const tier = classifyTier(exp, matchedSkills);
    matches.set(id, { expId: id, matchedSkills, tier, matchedAchievementIds: matchedAchIds });
    result.push(id);
  });

  return { expIds: result, matches };
}

export interface SortOptions {
  tieBreak?: 'company' | 'role' | 'start' | 'end';
}

export function sortForDesktop(
  data: CV2Data,
  indices: CV2Indices,
  expIds: string[],
  selectedSkills: Set<string>,
  opts: SortOptions = {}
): CV2Experience[] {
  const hasSelection = selectedSkills.size > 0;

  return expIds
    .map((id) => indices.expById.get(id)!)
    .sort((a, b) => {
      // If skills selected, rank by tier then by richness of evidence then recency
      if (hasSelection) {
        const aUnion = indices.expSkills.get(a.id) ?? new Set();
        const bUnion = indices.expSkills.get(b.id) ?? new Set();

        const aPrim = countInSet(a.primarySkills ?? [], selectedSkills);
        const bPrim = countInSet(b.primarySkills ?? [], selectedSkills);
        if (aPrim !== bPrim) return bPrim - aPrim;

        const aSupp = countInSet(a.supportingSkills ?? [], selectedSkills);
        const bSupp = countInSet(b.supportingSkills ?? [], selectedSkills);
        if (aSupp !== bSupp) return bSupp - aSupp;

        // Achievement richness: how many achievements reference selected skills
        const aAchRich = achievementMatchCount(a, selectedSkills);
        const bAchRich = achievementMatchCount(b, selectedSkills);
        if (aAchRich !== bAchRich) return bAchRich - aAchRich;
      }

      // Recency (always a useful desktop signal)
      const aRec = recencyScore(a.period);
      const bRec = recencyScore(b.period);
      if (aRec !== bRec) return bRec - aRec;

      // Tie-breakers
      switch (opts.tieBreak) {
        case 'company':
          return a.company.localeCompare(b.company);
        case 'role':
          return a.role.localeCompare(b.role);
        case 'start':
          return parseISO(b.period.start) - parseISO(a.period.start);
        case 'end':
          return parseISO(b.period.end ?? null) - parseISO(a.period.end ?? null);
        default:
          return 0;
      }
    });
}

function countInSet(list: string[], selected: Set<string>): number {
  let c = 0;
  for (const s of list) if (selected.has(s)) c++;
  return c;
}

function achievementMatchCount(exp: CV2Experience, selected: Set<string>): number {
  let c = 0;
  for (const ach of exp.achievements) {
    if (ach.skills?.some((s) => selected.has(s))) c++;
  }
  return c;
}

// ---------- High-level: filter + rank ----------
export function filterAndRank(
  data: CV2Data,
  indices: CV2Indices,
  selectedSkills: Set<string>,
  opts: SortOptions = {}
): FilterResult {
  const { expIds, matches } = filterBySkills(indices, selectedSkills);
  const ordered = sortForDesktop(data, indices, expIds, selectedSkills, opts);
  return { ordered, matches };
}