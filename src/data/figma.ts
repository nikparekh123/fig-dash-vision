import type { CompanyData } from "./types";
import figmaLogo from "@/assets/logos/figma.png";

export const figmaData: CompanyData = {
  name: "Figma",
  ticker: "FIG",
  exchange: "NYSE",
  slug: "figma",
  color: "hsl(262, 83%, 58%)",
  logo: figmaLogo,
  industry: "Technology",
  sector: "Design Software",
  quarter: "Q4 2025",
  earningsDate: "2026-03-04",
  lastUpdated: "March 4, 2026",
  kpis: [
    { title: "Q4 Revenue", value: "$303.8M", change: "+40% YoY", positive: true },
    { title: "Adjusted EPS", value: "$0.08", change: "Beat $0.06 est.", positive: true, subtitle: "+33%" },
    { title: "GAAP Net Loss", value: "-$226.6M", change: "Q4 2025", positive: false },
    { title: "FY2025 Revenue", value: "$1.06B", change: "+41% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: 'Figma is becoming the operating system for digital product development. It is not a design tool — it is the platform where the full lifecycle of building software happens, from whiteboard to shipped code.',
      bullets: [
        "41% revenue growth, $1.66B cash, zero debt",
        "136% NDR — customers reliably spend more over time",
        "23% FCF margin ($242.7M) — real cash generation at scale",
        "12% Non-GAAP operating margin ($129.5M)",
      ],
      whatMustGoRight: "AI credit billing transition (March 2026) must not trigger material churn. Non-GAAP margins must expand as the platform matures. New products (Sites, Make, Buzz, Draw) need to achieve adoption.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Paying a high price for a business whose core monetization model is structurally threatened by the same technology it is trying to monetize.",
      watchSignals: [
        "NDR declining below 120%",
        "Gross margin continuing to fall from 82.4%",
        "Billings growth decelerating faster than revenue growth",
        "Customer backlash against AI credit billing (March 2026)",
        "Competitor bundling full AI design at no additional cost",
      ],
      quote: '"...there could be a decrease in the number of designers, developers, and other collaborators that use our platform if such individuals are able to significantly increase their efficiency through the use of AI capabilities alongside or instead of our platform."',
      quoteSource: "Figma 10-K Risk Factors",
    },
    verdict: [
      'Figma\'s GAAP financials look alarming (-$1.25B net loss), but the headline number is distorted by $1.364B in stock-based compensation — the vast majority from a one-time IPO-triggered RSU vesting event ($975.7M). Strip that out and the underlying business generated $129.5M in Non-GAAP operating income at a 12% margin, with $242.7M in free cash flow.',
      'The central tension: AI is both Figma\'s growth engine and its existential risk. It drives product expansion but compresses gross margins (cost of revenue +112%) and threatens the per-seat pricing model the business is built on. The March 2026 AI credit billing rollout is the next critical test.',
      'Investors need conviction that Figma can successfully navigate the transition from a per-seat design tool to a usage-based platform OS — while managing $759M in unrecognized CEO compensation that will weigh on GAAP results for years to come.',
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2023", revenue: 505, billings: 600, revenueGrowth: "+48%", billingsGrowth: "~est.", type: "actual" },
      { name: "FY2024", revenue: 749, billings: 877, revenueGrowth: "+48%", billingsGrowth: "+46%", type: "actual" },
      { name: "FY2025", revenue: 1056, billings: 1270, revenueGrowth: "+41%", billingsGrowth: "+45%", type: "actual" },
      { name: "FY2026E", revenue: 1370, billings: null, revenueGrowth: "+29%", billingsGrowth: null, type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2025", revenue: 209.2, growth: "+44%", type: "actual" },
      { name: "Q2 2025", revenue: 247.8, growth: "+45%", type: "actual" },
      { name: "Q3 2025", revenue: 299.2, growth: "+40%", type: "actual" },
      { name: "Q4 2025", revenue: 303.8, growth: "+40%", type: "actual" },
    ],
    yearlySubtitle: "FY2023–FY2026E revenue & billings ($M)",
    quarterlySubtitle: "FY2025 quarterly breakdown ($M)",
    showBillings: true,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2024", netIncome: -74.7, ebitdaMargin: null, grossMargin: 88.3, nonGaapOpIncome: null },
      { name: "FY2025", netIncome: -1250, ebitdaMargin: -120.7, grossMargin: 82.4, nonGaapOpIncome: 129.5 },
      { name: "FY2026E", netIncome: null, ebitdaMargin: null, grossMargin: null, nonGaapOpIncome: null },
    ],
    quarterly: [
      { name: "Q1 2025", netIncome: -340.4, ebitdaMargin: -155 },
      { name: "Q2 2025", netIncome: -364.6, ebitdaMargin: -147 },
      { name: "Q3 2025", netIncome: -318.4, ebitdaMargin: -106 },
      { name: "Q4 2025", netIncome: -226.6, ebitdaMargin: -55 },
    ],
    footnotes: [
      { label: "FY2026E Projected EPS:", value: "$0.25", note: "Path to profitability" },
      { label: "FY2025 Non-GAAP Operating Income:", value: "$129.5M", note: "12% margin (vs. GAAP loss of -$1.25B driven by $1.364B SBC)" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin (GAAP)", value: "82.4%", sub: "FY2025 — down from 88.3% in FY2024. AI inference costs compressing margins.", accent: "amber", monitor: true },
    { label: "Free Cash Flow Margin", value: "23%", sub: "$242.7M FCF — first year of clean generation at scale", accent: "success" },
    { label: "Cash & Securities", value: "$1.66B", sub: "Zero debt. Includes $73.7M Bitcoin ETF. Ample runway.", accent: "blue" },
    { label: "Deferred Revenue", value: "$595M", sub: "Up from $381M — contractually committed future revenue already billed", accent: "amber" },
    { label: "Non-GAAP Op. Income", value: "$129.5M", sub: "12% Non-GAAP operating margin in FY2025", accent: "success" },
  ],
  marketPenetration: {
    tam: { percentage: "~3%", market: "$33B market", description: "~$1B revenue against a $33B addressable market. Massive expansion runway, especially in collaborative tools like FigJam and new products (Sites, Make)." },
    enterprise: {
      items: [
        { label: "Fortune 500", value: 95, display: "95%" },
        { label: "Forbes Global 2000", value: 78, display: "78%" },
      ],
      description: "High adoption rate but low average spend — signals room for significant upsell within existing enterprise accounts.",
    },
    upsell: {
      description: "2/3 of customers are non-designers concentrated in free or lower-priced tiers. Massive potential to upsell to higher-value plans.",
      tiers: [
        { label: "Free/Low tier", detail: "~12.5M users at $0–$5/mo" },
        { label: "Paid customers", detail: "540K at standard plans" },
        { label: "High-value", detail: "11,906 at >$10K ARR" },
      ],
    },
    funnel: {
      steps: [
        { label: "Monthly Active Users", value: "13M+", width: 100, accent: "bg-chart-blue" },
        { label: "Paid Customers", value: "540K", width: 72, accent: "bg-chart-amber" },
        { label: ">$10K ARR", value: "11,906", width: 32, accent: "bg-success" },
        { label: ">$100K ARR", value: "1,119", width: 12, accent: "bg-danger" },
      ],
      description: "Conversion from free to paid is ~4%. Only 2.2% of paid customers reach >$10K ARR — highlighting the expansion opportunity within the existing base.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Index Ventures", shares: 61_737_449, marketValue: 1_829_897_988, pct: 13.996, type: "Venture Capital", filed: "2025-09-30" },
      { name: "Greylock Partners", shares: 58_420_365, marketValue: 1_731_579_619, pct: 13.244, type: "Venture Capital", filed: "2025-12-31" },
      { name: "IA Capital Advisors", shares: 57_658_069, marketValue: 1_708_985_165, pct: 13.071, type: "Private Equity", filed: "2025-12-31" },
      { name: "Kleiner Perkins", shares: 47_447_138, marketValue: 1_406_333_170, pct: 10.756, type: "Private Equity", filed: "2026-02-25" },
      { name: "Sequoia Capital", shares: 34_004_169, marketValue: 1_007_883_569, pct: 7.708, type: "Venture Capital", filed: "2026-02-23" },
      { name: "Andreessen Horowitz", shares: 16_246_129, marketValue: 481_535_264, pct: 3.683, type: "Venture Capital", filed: "2025-12-31" },
      { name: "Kris Rasmussen", shares: 10_348_509, marketValue: 306_729_807, pct: 2.346, type: "Individual", filed: "2026-03-01" },
      { name: "FMR LLC", shares: 9_429_463, marketValue: 279_489_283, pct: 2.138, type: "Investment Advisor", filed: "2025-12-31" },
      { name: "JPMorgan Chase", shares: 6_643_939, marketValue: 196_926_352, pct: 1.506, type: "Bank", filed: "2025-12-31" },
      { name: "ICONIQ Capital", shares: 5_793_569, marketValue: 171_721_385, pct: 1.313, type: "Family Office", filed: "2025-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Index Ventures", sub: "14.0%" },
      { label: "VC Ownership", value: "38.6%" },
      { label: "Insider (Individual)", value: "2.3%" },
    ],
  },
  customerRetention: {
    ndr: { value: "136%", description: "Customers are not only sticking around but spending more — a strong signal of product-market fit and expansion revenue." },
    regional: [
      { name: "United States", value: 491.5, fill: "hsl(var(--chart-blue))" },
      { name: "International", value: 564.2, fill: "hsl(var(--success))" },
    ],
    tier10k: [
      { year: "2023", value: 7200, type: "actual" },
      { year: "2024", value: 10500, type: "actual" },
      { year: "2025", value: 11906, type: "actual" },
    ],
    tier100k: [
      { year: "2023", value: 600, type: "actual" },
      { year: "2024", value: 788, type: "actual" },
      { year: "2025", value: 1119, type: "actual" },
    ],
    ndrNote: 'NDR methodology note: Calculated only on customers with >$10K ARR — a self-selecting cohort of the healthiest accounts.',
    tier10kTitle: "Customers >$10K ARR",
    tier100kTitle: "Customers >$100K ARR",
  },
  guidance: {
    items: [
      { title: "Q1 2026 Guidance", value: "$315–317M", details: ["Consensus est. ~$305M", "Beats consensus by ~$10–12M"], accent: "blue" },
      { title: "FY2026 Revenue", value: "$1.37B", details: ["Range: $1.366B–$1.374B", "Midpoint: $1.370B (+29% YoY)"], accent: "success" },
      { title: "FY2026 EPS (Est.)", value: "$0.25", details: ["Analysts project profitability in FY2026", "Path to Profitability"], accent: "success" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 27.84,
    emas: [
      { label: "50 EMA", value: 30.35 },
      { label: "100 EMA", value: 38.95 },
    ],
    rsi: 38.2,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"Today, virtually every business is becoming a software business, and AI has made software easier than ever to create. We have a massive opportunity in front of us, and we intend to capture it. We\'re willing to take big swings if we truly believe in them."',
      author: "Dylan Field, CEO",
    },
    insights: [
      { title: "AI: Double-edged sword", text: "Drives revenue growth but compresses margins — cost of revenue grew 112% vs 41% revenue growth.", color: "amber" },
      { title: "~3% TAM penetration", text: "$33B addressable market with only ~$1B in revenue signals a long runway for growth.", color: "blue" },
      { title: "8 products, 1,886 employees", text: "Execution risk: multi-product expansion while managing AI billing model launch in March 2026.", color: "danger" },
      { title: "FedRAMP authorized", text: "Received FedRAMP authorization in early 2025, opening the U.S. federal government market.", color: "success" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "RBC", rating: "Neutral", target: "$31", sentiment: "bearish" },
      { firm: "Stifel", rating: "Hold", target: "—", sentiment: "neutral", note: "AI margin risks" },
      { firm: "Piper Sandler", rating: "Overweight", target: "$35", sentiment: "bullish" },
    ],
    meanTarget: "$46.44",
    currentPrice: "$28.80",
    upside: "+61% upside",
  },
  news: [
    { headline: "Figma to offer optional AI credit subscriptions for admins starting March 11, 2026", source: "Figma", tag: "New", date: "Mar 4, 2026", url: "https://www.figma.com/blog" },
    { headline: "Figma IPO prices above expectations as design platform goes public on NYSE", source: "Reuters", tag: "IPO", date: "Feb 27, 2026", url: "https://www.reuters.com/technology" },
    { headline: "Figma reports Q4 2025 revenue of $303.8M, up 40% year-over-year", source: "Figma", date: "Feb 20, 2026", url: "https://investor.figma.com" },
    { headline: "Figma expands AI-powered design features across all product tiers", source: "TechCrunch", date: "Feb 12, 2026", url: "https://techcrunch.com" },
    { headline: "High-value customer cohort ($100K+ ARR) grows 42% year-over-year", source: "Figma", date: "Feb 8, 2026", url: "https://investor.figma.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "FIG", quantity: 4000, avgPrice: 29.73, currentPrice: 27.84 },
    ],
  },
};
