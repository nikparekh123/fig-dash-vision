import type { CompanyData } from "./types";
import isrgChart from "@/assets/charts/isrg-chart.png";
import isrgLogo from "@/assets/logos/isrg.png";

export const isrgData: CompanyData = {
  name: "Intuitive Surgical",
  ticker: "ISRG",
  exchange: "NASDAQ",
  slug: "isrg",
  color: "hsl(200, 70%, 45%)",
  logo: isrgLogo,
  industry: "Healthcare",
  sector: "Medical Devices / Robotic Surgery",
  quarter: "Q4 2024",
  earningsDate: "2025-01-23",
  lastUpdated: "January 23, 2025",
  kpis: [
    { title: "Q4 Revenue", value: "$2.41B", change: "+25% YoY", positive: true },
    { title: "EPS", value: "$2.21", change: "Beat $1.82 est.", positive: true, subtitle: "+21%" },
    { title: "da Vinci Procedures", value: "+18%", change: "YoY growth", positive: true },
    { title: "Installed Base", value: "9,539", change: "+14% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Intuitive Surgical is the dominant player in robotic-assisted surgery with its da Vinci platform. The installed base creates a razor/blade model — each system generates recurring instrument and accessory revenue.",
      bullets: [
        "25% revenue growth in Q4 2024 — procedure volume acceleration",
        "9,539 installed systems worldwide creating durable recurring revenue",
        "da Vinci 5 launch driving upgrade cycle and new market expansion",
        "~80% gross margins — premium medical device economics",
      ],
      whatMustGoRight: "da Vinci 5 adoption must accelerate. Procedure growth must sustain 15%+ rates. Competition from Medtronic Hugo and J&J Ottava must remain limited.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Valuation is extremely rich at 60x+ forward earnings. Competitive robotic platforms are emerging. Hospital capital budgets could tighten in a recession.",
      watchSignals: [
        "da Vinci 5 adoption slower than expected",
        "Competitive systems gaining meaningful market share",
        "Hospital CapEx budgets contracting",
        "Procedure growth decelerating below 12%",
        "Regulatory issues with new platform",
      ],
    },
    verdict: [
      "Intuitive Surgical is a best-in-class medical device company with a dominant moat in robotic surgery. The installed base of 9,500+ systems creates a powerful recurring revenue stream through instruments and accessories.",
      "The da Vinci 5 launch represents both opportunity and risk — it's the most significant platform upgrade in years, potentially driving a massive upgrade cycle, but execution must be flawless.",
      "The valuation remains the key concern. At 60x+ forward earnings, the stock prices in near-perfect execution. Any stumble in procedure growth or competitive dynamics could drive significant multiple compression.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 6220, revenueGrowth: "+9%", type: "actual" },
      { name: "FY2023", revenue: 7120, revenueGrowth: "+14%", type: "actual" },
      { name: "FY2024", revenue: 8550, revenueGrowth: "+20%", type: "actual" },
      { name: "FY2025E", revenue: 10200, revenueGrowth: "+19%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2024", revenue: 1890, growth: "+11%", type: "actual" },
      { name: "Q2 2024", revenue: 2010, growth: "+14%", type: "actual" },
      { name: "Q3 2024", revenue: 2040, growth: "+17%", type: "actual" },
      { name: "Q4 2024", revenue: 2410, growth: "+25%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2025E revenue ($M)",
    quarterlySubtitle: "FY2024 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2022", netIncome: 1560, ebitdaMargin: 32.5, grossMargin: 67.4 },
      { name: "FY2023", netIncome: 1800, ebitdaMargin: 33.8, grossMargin: 68.2 },
      { name: "FY2024", netIncome: 2280, ebitdaMargin: 35.1, grossMargin: 69.5 },
      { name: "FY2025E", netIncome: 2800, ebitdaMargin: 36.0, grossMargin: 70.0 },
    ],
    quarterly: [
      { name: "Q1 2024", netIncome: 480, ebitdaMargin: 33.0 },
      { name: "Q2 2024", netIncome: 530, ebitdaMargin: 34.2 },
      { name: "Q3 2024", netIncome: 560, ebitdaMargin: 35.5 },
      { name: "Q4 2024", netIncome: 710, ebitdaMargin: 37.1 },
    ],
    footnotes: [
      { label: "FY2024 EPS:", value: "$6.40", note: "Strong earnings growth driven by procedure volume" },
      { label: "FY2025 EPS Est.:", value: "$7.80", note: "da Vinci 5 cycle expected to accelerate growth" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin", value: "69.5%", sub: "Premium margins reflecting instrument/accessory mix", accent: "success" },
    { label: "Installed Base", value: "9,539", sub: "Systems worldwide — each generating recurring revenue", accent: "blue" },
    { label: "Procedure Growth", value: "+18%", sub: "YoY — acceleration from prior quarters", accent: "success" },
    { label: "da Vinci 5 Placements", value: "Ramping", sub: "Next-gen platform in early commercial rollout", accent: "amber", monitor: true },
    { label: "Forward P/E", value: "~62x", sub: "Premium valuation — prices in near-perfect execution", accent: "amber", monitor: true },
  ],
  marketPenetration: {
    tam: { percentage: "~15%", market: "$60B surgical robotics", description: "Intuitive dominates surgical robotics with ~80% market share. TAM expanding as new procedure types adopt robotic assistance." },
    enterprise: {
      items: [
        { label: "Installed Systems", value: 95, display: "9,539" },
        { label: "Countries", value: 70, display: "67" },
      ],
      description: "Global presence across 67 countries with deepening penetration in general surgery and thoracic procedures.",
    },
    upsell: {
      description: "Expanding from core urology/gynecology into general surgery, thoracic, and head & neck procedures.",
      tiers: [
        { label: "Instruments & Accessories", detail: "~60% of revenue — recurring per-procedure" },
        { label: "Systems", detail: "~25% of revenue — da Vinci 5 upgrade cycle" },
        { label: "Services", detail: "~15% of revenue — growing installed base" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global Surgical Procedures", value: "300M+", width: 100, accent: "bg-chart-blue" },
        { label: "Robotic-Eligible", value: "~20M", width: 30, accent: "bg-chart-amber" },
        { label: "da Vinci Procedures", value: "2.3M", width: 12, accent: "bg-success" },
        { label: "da Vinci 5 Procedures", value: "Ramping", width: 4, accent: "bg-danger" },
      ],
      description: "Massive penetration opportunity — only ~12% of robotic-eligible procedures currently use da Vinci systems.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 40_200_000, marketValue: 19_300_000_000, pct: 8.5, type: "Index Fund", filed: "2024-12-31" },
      { name: "BlackRock", shares: 35_800_000, marketValue: 17_200_000_000, pct: 7.6, type: "Index Fund", filed: "2024-12-31" },
      { name: "State Street", shares: 18_500_000, marketValue: 8_900_000_000, pct: 3.9, type: "Index Fund", filed: "2024-12-31" },
      { name: "Capital Research", shares: 15_200_000, marketValue: 7_300_000_000, pct: 3.2, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "Baillie Gifford", shares: 12_800_000, marketValue: 6_150_000_000, pct: 2.7, type: "Investment Advisor", filed: "2024-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Vanguard Group", sub: "8.5%" },
      { label: "Institutional Ownership", value: "~86%" },
      { label: "Insider Ownership", value: "<1%" },
    ],
  },
  customerRetention: {
    ndr: { value: "98%+", description: "Hospitals rarely remove da Vinci systems once installed. The razor/blade model creates deep switching costs — trained surgeons, workflow integration, and instrument dependencies." },
    regional: [
      { name: "Instruments & Accessories", value: 5100, fill: "hsl(var(--chart-blue))" },
      { name: "Systems", value: 2150, fill: "hsl(var(--success))" },
      { name: "Services", value: 1300, fill: "hsl(var(--chart-amber))" },
    ],
    tier10k: [
      { year: "2022", value: 6220, type: "actual" },
      { year: "2023", value: 7120, type: "actual" },
      { year: "2024", value: 8550, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by segment ($M). Instruments & Accessories is the largest and most recurring segment.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2025 Procedure Growth", value: "13-16%", details: ["da Vinci 5 driving new procedure adoption", "General surgery expansion"], accent: "success" },
      { title: "FY2025 Revenue", value: "$10B+", details: ["System placements accelerating", "Instrument revenue per procedure growing"], accent: "blue" },
      { title: "Gross Margin Target", value: "68-70%", details: ["Mix shift toward higher-margin instruments", "da Vinci 5 initially dilutive to system margins"], accent: "success" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 479.27,
    chartImage: isrgChart,
    emas: [
      { label: "50 EMA", value: 510.03 },
      { label: "100 EMA", value: 516.55 },
      { label: "200 EMA", value: 514.52 },
    ],
    rsi: 37.68,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"da Vinci 5 represents a generational leap in surgical robotics. The feedback from surgeons has been extraordinary, and we\'re seeing strong demand across all specialties."',
      author: "Gary Guthart, CEO",
    },
    insights: [
      { title: "da Vinci 5 cycle", text: "The most significant platform upgrade in a decade. Multi-port flexibility, force feedback, and cloud connectivity create compelling upgrade economics.", color: "success" },
      { title: "Competitive moat", text: "20+ years of surgeon training data, 12M+ procedures, and deep hospital integration create nearly insurmountable switching costs.", color: "blue" },
      { title: "Valuation risk", text: "At 60x+ forward earnings, any deceleration in growth could trigger significant multiple compression. Market expects near-perfection.", color: "danger" },
      { title: "Emerging competition", text: "Medtronic Hugo and J&J Ottava are years behind but represent credible long-term threats, especially in price-sensitive markets.", color: "amber" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Goldman Sachs", rating: "Buy", target: "$580", sentiment: "bullish" },
      { firm: "Morgan Stanley", rating: "Overweight", target: "$560", sentiment: "bullish" },
      { firm: "Barclays", rating: "Equal Weight", target: "$500", sentiment: "neutral", note: "Valuation concern" },
    ],
    meanTarget: "$547",
    currentPrice: "$479",
    upside: "+14% upside",
  },
  news: [
    { headline: "Intuitive Surgical reports Q4 revenue of $2.41B, up 25% YoY", source: "Intuitive Surgical", tag: "Earnings", date: "Jan 23, 2025", url: "https://isrg.intuitive.com" },
    { headline: "da Vinci 5 receives expanded FDA clearance for additional procedure types", source: "FDA", date: "Feb 10, 2025", url: "https://www.fda.gov" },
    { headline: "Intuitive expands manufacturing capacity to meet da Vinci 5 demand", source: "Reuters", date: "Jan 15, 2025", url: "https://www.reuters.com" },
    { headline: "Robotic surgery adoption accelerating in community hospitals", source: "Modern Healthcare", date: "Dec 18, 2024", url: "https://www.modernhealthcare.com" },
  ],
  positions: {
    status: "waiting",
    positions: [],
    note: "Monitoring for pullback entry — valuation remains stretched",
  },
};
