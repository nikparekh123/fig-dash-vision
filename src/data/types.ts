import { ReactNode } from "react";

export interface KpiItem {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  subtitle?: string;
}

export interface SummaryData {
  lynchPitch: {
    title: string;
    description: string;
    bullets: string[];
    whatMustGoRight: string;
  };
  mungerInvert: {
    title: string;
    description: string;
    watchSignals: string[];
    quote?: string;
    quoteSource?: string;
  };
  verdict: string[];
}

export interface RevenueYearlyItem {
  name: string;
  revenue: number;
  billings?: number | null;
  revenueGrowth: string;
  billingsGrowth?: string | null;
  type: "actual" | "estimate";
}

export interface RevenueQuarterlyItem {
  name: string;
  revenue: number;
  growth: string;
  type: "actual" | "estimate";
}

export interface RevenueChartData {
  yearly: RevenueYearlyItem[];
  quarterly: RevenueQuarterlyItem[];
  yearlySubtitle: string;
  quarterlySubtitle: string;
  showBillings: boolean;
}

export interface ProfitabilityYearlyItem {
  name: string;
  netIncome: number | null;
  ebitdaMargin: number | null;
  grossMargin?: number | null;
  nonGaapOpIncome?: number | null;
}

export interface ProfitabilityQuarterlyItem {
  name: string;
  netIncome: number;
  ebitdaMargin: number;
}

export interface ProfitabilityChartData {
  yearly: ProfitabilityYearlyItem[];
  quarterly: ProfitabilityQuarterlyItem[];
  footnotes?: { label: string; value: string; note: string }[];
}

export interface KeyMetricItem {
  label: string;
  value: string;
  sub: string;
  accent: "success" | "blue" | "amber";
  monitor?: boolean;
}

export interface FunnelStep {
  label: string;
  value: string;
  width: number;
  accent: string;
}

export interface MarketPenetrationData {
  tam: { percentage: string; market: string; description: string };
  enterprise: { items: { label: string; value: number; display: string }[]; description: string };
  upsell: { description: string; tiers: { label: string; detail: string }[] };
  funnel: { steps: FunnelStep[]; description: string };
}

export interface ShareholderItem {
  name: string;
  shares: number;
  marketValue: number;
  pct: number;
  type: string;
  filed: string;
}

export interface OwnershipData {
  shareholders: ShareholderItem[];
  summaryCards: { label: string; value: string; sub?: string }[];
}

export interface RetentionData {
  ndr: { value: string; description: string };
  regional: { name: string; value: number; fill: string }[];
  tier10k: { year: string; value: number; type: string }[];
  tier100k: { year: string; value: number; type: string }[];
  ndrNote?: string;
  tier10kTitle?: string;
  tier100kTitle?: string;
}

export interface GuidanceItem {
  title: string;
  value: string;
  details: string[];
  accent: "blue" | "success" | "amber";
}

export interface GuidanceData {
  items: GuidanceItem[];
}

export interface TechnicalData {
  currentPrice: number;
  emas: { label: string; value: number }[];
  rsi: number;
  chartImage?: string;
}

export interface InsightItem {
  title: string;
  text: string;
  color: "amber" | "blue" | "danger" | "success";
}

export interface StrategicInsightsData {
  ceoQuote: { text: string; author: string };
  insights: InsightItem[];
}

export interface AnalystItem {
  firm: string;
  rating: string;
  target: string;
  sentiment: "bullish" | "bearish" | "neutral";
  note?: string;
}

export interface AnalystData {
  analysts: AnalystItem[];
  meanTarget: string;
  currentPrice: string;
  upside: string;
}

export interface NewsItem {
  headline: string;
  source: string;
  tag?: string;
  date: string;
  url: string;
}

export interface PositionItem {
  type: "stock" | "put" | "call";
  description: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
}

export interface PositionData {
  status: "live" | "waiting";
  positions: PositionItem[];
  note?: string;
}

export interface CompanyData {
  name: string;
  ticker: string;
  exchange: string;
  slug: string;
  color: string;
  quarter: string;
  lastUpdated: string;
  kpis: KpiItem[];
  summary: SummaryData;
  revenueChart: RevenueChartData;
  profitabilityChart: ProfitabilityChartData;
  keyMetrics: KeyMetricItem[];
  marketPenetration: MarketPenetrationData;
  ownership: OwnershipData;
  customerRetention: RetentionData;
  guidance: GuidanceData;
  technicalAnalysis: TechnicalData;
  strategicInsights: StrategicInsightsData;
  analysts: AnalystData;
  news: NewsItem[];
  positions: PositionData;
}
