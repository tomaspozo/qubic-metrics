export interface QubicStats {
  date: string;
  timestamp: string;
  circulatingSupply: number;
  activeAddresses: number;
  price: number;
  marketCap: number;
  epoch: number;
  currentTick: number;
  ticksInCurrentEpoch: number;
  emptyTicksInCurrentEpoch: number;
  epochTickQuality: number;
  burnedQus: number;
}

export interface GithubStatsOverview {
  commits: number;
  contributors: number;
  openIssues: number;
  closedIssues: number;
  branches: number;
  releases: number;
  starsCount: number;
  watchersCount: number;
}

export interface GithubStatsHistory extends GithubStatsOverview {
  date: string;
}

export interface QubicLIStats {
  date: string;
  minScore: number;
  maxScore: number;
  averageScore: number;
  estimatedIts: number;
  solutionsPerHour: number;
  solutionsPerHourCalculated: number;
  difficulty: number;
  allTimeSolutionsPerHour: number;
  allTimeSolutionsPerHourCalculated: number;
}

export interface QubicLIScoresStats extends QubicLIStats {
  id: string;
  timestamp: string;
}

export type DateRange = "7D" | "30D" | "3M" | "1Y" | "ALL";
