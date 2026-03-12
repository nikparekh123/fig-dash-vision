import type { CompanyData } from "./types";
import eliLillyLogo from "@/assets/logos/eli-lilly.png";

export const eliLillyData: CompanyData = {
  name: "Eli Lilly",
  ticker: "LLY",
  exchange: "NYSE",
  slug: "eli-lilly",
  color: "hsl(0, 85%, 55%)",
  logo: eliLillyLogo,
  quarter: "Q4 2024",
  lastUpdated: "February 19, 2025",
  kpis: [
    { title: "FY2024 Revenue", value: "$45.0B", change: "+32% YoY", positive: true },
    { title: "Q4 Gross Margin", value: "82.2%", change: "+1.3pp YoY", positive: true },
    { title: "Operating Cash Flow", value: "$8.82B", change: "+108% YoY", positive: true, subtitle: "vs $4.24B in 2023" },
    { title: "FY2025 Guidance", value: "$58–$61B", change: "+32% midpoint", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Lilly owns the world's leading dual-action incretin drug (tirzepatide), which treats a global epidemic — obesity — that currently has no adequate solution at scale. The addressable market is enormous, the drug has demonstrated superior efficacy versus the closest competitor, and Lilly is just beginning to penetrate it.",
      bullets: [
        "Zepbound showed 47% greater relative weight loss vs Wegovy (semaglutide) head-to-head in SURMOUNT-5 Phase 3b trial",
        "FY2024 revenue $45.0B (+32% YoY) driven primarily by Mounjaro, Zepbound, and Verzenio",
        "Gross margin 82.2% — roughly $0.82 of every dollar flows to gross profit",
        "Operating cash flow doubled to $8.82B from $4.24B in 2023",
        "~55 new medicine candidates in clinical development or under regulatory review, plus oral GLP-1 (orforglipron) which could remove the injection barrier",
        "FY2025 guidance: $58–$61B revenue (~32% growth at midpoint)",
      ],
      whatMustGoRight: "Tirzepatide must hold its safety profile at scale. Lilly must build enough manufacturing to meet demand (targeting 1.6x salable incretin doses in H1 2025 vs H1 2024). Pricing must not collapse faster than volumes grow. Oral GLP-1 (orforglipron) must achieve comparable efficacy to injectable tirzepatide.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Paying an extreme multiple for a company whose growth is almost entirely dependent on one drug class. Lilly acknowledges directly: 'Dependence on relatively few products or product classes for a significant percentage of our total revenue and a consolidated supply chain.' If tirzepatide's trajectory disappoints — whether from safety data, pricing pressure, manufacturing failures, or superior competition — the premium unwinds dramatically.",
      watchSignals: [
        "Tirzepatide volume growth decelerating while pricing also falls — double pressure",
        "IRA negotiation targeting tirzepatide for early Medicare price negotiation",
        "Safety signals at scale — particularly cardiovascular, oncological, or psychiatric at population level",
        "Manufacturing expansion delays pushing revenue below guidance",
        "A well-differentiated oral GLP-1 from a competitor achieving commercial success ahead of orforglipron",
        "Rising debt ($33.6B) with declining operating cash flow conversion",
        "Proliferation of counterfeit or illegally compounded tirzepatide undermining pricing premium",
      ],
      quote: "Dependence on relatively few products or product classes for a significant percentage of our total revenue and a consolidated supply chain.",
      quoteSource: "Eli Lilly FY2024 10-K Risk Factors",
    },
    verdict: [
      "Lilly delivered exceptional FY2024 results: $45.0B revenue (+32%), gross margin 82.2%, and operating cash flow that doubled to $8.82B. Mounjaro and Zepbound are driving a rare fast-growth phase for a company this size, with FY2025 guided to $58–$61B (+32% at midpoint).",
      "The GLP-1 opportunity is generational — obesity has no adequate treatment at scale, and tirzepatide has proven superior efficacy vs semaglutide head-to-head. The pipeline (55 candidates) includes expansion into MASH, sleep apnea, heart failure, and kidney disease, plus the oral GLP-1 orforglipron which could dramatically expand the addressable population.",
      "The risks are concentrated: total debt surged to $33.6B (up $8.4B in 2024 alone, plus $6.5B more issued in Feb 2025), manufacturing is the binding constraint on revenue, and the IRA will eventually compress pricing on blockbusters. At a premium multiple, any disappointment on tirzepatide safety, supply, or pricing triggers a disproportionate correction. The thesis requires near-flawless execution across manufacturing scale-up, pipeline conversion, and pricing durability.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 28500, revenueGrowth: "+1%", type: "actual" },
      { name: "FY2023", revenue: 34100, revenueGrowth: "+20%", type: "actual" },
      { name: "FY2024", revenue: 45043, revenueGrowth: "+32%", type: "actual" },
      { name: "FY2025E", revenue: 59500, revenueGrowth: "+32%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2024", revenue: 8770, growth: "+26%", type: "actual" },
      { name: "Q2 2024", revenue: 11300, growth: "+36%", type: "actual" },
      { name: "Q3 2024", revenue: 11440, growth: "+42%", type: "actual" },
      { name: "Q4 2024", revenue: 13530, growth: "+45%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2025E revenue ($M)",
    quarterlySubtitle: "FY2024 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2022", netIncome: 6200, ebitdaMargin: 30, grossMargin: 77 },
      { name: "FY2023", netIncome: 5200, ebitdaMargin: 26, grossMargin: 79 },
      { name: "FY2024", netIncome: 8500, ebitdaMargin: 31, grossMargin: 81 },
      { name: "FY2025E", netIncome: 14500, ebitdaMargin: 35, grossMargin: 82 },
    ],
    quarterly: [
      { name: "Q1 2024", netIncome: 1200, ebitdaMargin: 22 },
      { name: "Q2 2024", netIncome: 2970, ebitdaMargin: 33 },
      { name: "Q3 2024", netIncome: 2020, ebitdaMargin: 28 },
      { name: "Q4 2024", netIncome: 2310, ebitdaMargin: 29 },
    ],
    footnotes: [
      { label: "Operating Cash Flow:", value: "$8.82B", note: "Doubled YoY from $4.24B — driven by GLP-1 revenue scale" },
      { label: "Total Debt:", value: "$33.6B", note: "Up $8.4B in 2024; additional $6.5B notes issued Feb 2025" },
      { label: "R&D Expense:", value: "$11.0B", note: "+18% YoY — includes Morphic acquisition ($3.35B IPR&D)" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin", value: "82.2%", sub: "Q4 2024 — +1.3pp YoY. ~$0.82 of every dollar flows to gross profit", accent: "success" },
    { label: "Operating Cash Flow", value: "$8.82B", sub: "FY2024 — doubled from $4.24B in 2023. Dramatic cash flow acceleration", accent: "success" },
    { label: "R&D Spend", value: "$11.0B", sub: "FY2024 — 18% increase YoY. 55 candidates in clinical development", accent: "blue" },
    { label: "Total Debt", value: "$33.6B", sub: "Up $8.4B in FY2024 + $6.5B notes issued Feb 2025. Net debt ~$30B (3.4x OCF)", accent: "amber", monitor: true },
    { label: "Incretin Capacity", value: "1.6× H1 target", sub: "Expects 1.6x salable incretin doses in H1 2025 vs H1 2024", accent: "blue" },
  ],
  marketPenetration: {
    tam: { percentage: "<5%", market: "Global Obesity & Diabetes TAM", description: "537M global diabetics, but only ~25M on GLP-1 therapy. Obesity market even more nascent with hundreds of millions of potential patients. Tirzepatide addresses both — the addressable market is generational in scale." },
    enterprise: {
      items: [
        { label: "GLP-1 Diabetes Share", value: 35, display: "~35%" },
        { label: "GLP-1 Obesity Share", value: 45, display: "~45%" },
      ],
      description: "Dominant in both diabetes (Mounjaro) and obesity (Zepbound) markets, competing primarily with Novo Nordisk's semaglutide. SURMOUNT-5 showed tirzepatide's 47% superior weight loss head-to-head.",
    },
    upsell: {
      description: "Tirzepatide is being studied across multiple additional indications, each representing a separate patient population and commercial label.",
      tiers: [
        { label: "Diabetes (Mounjaro)", detail: "Core franchise — type 2 diabetes" },
        { label: "Obesity (Zepbound)", detail: "Chronic weight management — FDA approved" },
        { label: "Sleep Apnea", detail: "FDA approved — expanding indications" },
        { label: "Pipeline", detail: "MASH, heart failure, kidney disease, CV outcomes" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global Diabetics", value: "537M", width: 100, accent: "bg-chart-blue" },
        { label: "Treated with GLP-1", value: "~25M", width: 30, accent: "bg-chart-amber" },
        { label: "On Mounjaro", value: "~8M", width: 15, accent: "bg-success" },
        { label: "Obesity (Zepbound)", value: "~3M", width: 8, accent: "bg-danger" },
      ],
      description: "GLP-1 penetration is still early. 537M global diabetics, only ~25M on GLP-1 therapy. Obesity market is even more nascent. Each approved indication unlocks a new patient funnel.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Lilly Endowment", shares: 92_300_000, marketValue: 71_260_000_000, pct: 9.7, type: "Foundation", filed: "2024-12-31" },
      { name: "Vanguard Group", shares: 82_500_000, marketValue: 63_700_000_000, pct: 8.7, type: "Index Fund", filed: "2024-12-31" },
      { name: "BlackRock", shares: 67_800_000, marketValue: 52_340_000_000, pct: 7.1, type: "Index Fund", filed: "2024-12-31" },
      { name: "State Street", shares: 38_200_000, marketValue: 29_490_000_000, pct: 4.0, type: "Index Fund", filed: "2024-12-31" },
      { name: "Capital Research", shares: 28_500_000, marketValue: 22_000_000_000, pct: 3.0, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "FMR LLC", shares: 22_100_000, marketValue: 17_060_000_000, pct: 2.3, type: "Investment Advisor", filed: "2024-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Lilly Endowment", sub: "9.7% — founding family foundation" },
      { label: "Institutional Ownership", value: "~82%" },
      { label: "Cash & Equivalents", value: "$3.27B", sub: "Dec 31, 2024" },
    ],
  },
  customerRetention: {
    ndr: { value: "85%+", description: "Pharma doesn't use traditional NDR. However, prescription refill rates for Mounjaro exceed 85% at 12 months — exceptional for a chronic therapy. Strong demand for incretin medicines continues to outpace supply increases." },
    regional: [
      { name: "United States", value: 32200, fill: "hsl(var(--chart-blue))" },
      { name: "International", value: 12800, fill: "hsl(var(--success))" },
    ],
    tier10k: [
      { year: "2022", value: 28500, type: "actual" },
      { year: "2023", value: 34100, type: "actual" },
      { year: "2024", value: 45043, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by geography ($M). US represents ~72% of total revenue — higher pricing drives US revenue share. International growth accelerating as GLP-1 access expands.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2025 Revenue", value: "$58–$61B", details: ["+29–35% YoY growth at midpoint ~32%", "Driven by GLP-1 volume ramp and pricing"], accent: "success" },
      { title: "Manufacturing Scale-Up", value: "1.6× doses", details: ["Target 1.6x salable incretin doses in H1 2025 vs H1 2024", "Supply remains the binding constraint on revenue growth"], accent: "blue" },
      { title: "IRA / Pricing Risk", value: "Monitor", details: ["Medicare price negotiation could target tirzepatide", "Inflation rebate obligations on Part B & Part D medicines", "Compounding pharmacy threat to pricing premium"], accent: "amber" },
      { title: "Balance Sheet", value: "$33.6B debt", details: ["Net debt ~$30B (3.4x operating cash flow)", "Additional $6.5B notes issued Feb 2025", "Serviceable at current trajectory but not conservative"], accent: "amber" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 772.00,
    emas: [
      { label: "50 EMA", value: 790.50 },
      { label: "200 EMA", value: 720.30 },
    ],
    rsi: 45.8,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"We are in the early innings of a generational opportunity in cardiometabolic health. Our investments in manufacturing, pipeline, and global access are designed to serve hundreds of millions of patients who need these medicines."',
      author: "David Ricks, CEO",
    },
    insights: [
      { title: "GLP-1 dominance proven", text: "SURMOUNT-5 showed tirzepatide's 47% greater weight loss vs semaglutide head-to-head. This is the strongest clinical differentiation in the class.", color: "success" },
      { title: "Manufacturing constraint", text: "Demand outpaces supply. Lilly is investing billions in capacity — targeting 1.6x salable incretin doses in H1 2025. Revenue is supply-limited, not demand-limited.", color: "amber" },
      { title: "Debt acceleration", text: "Total debt surged to $33.6B (+$8.4B in 2024) with another $6.5B issued in Feb 2025. Lilly is borrowing against future cash flows dependent on tirzepatide's continued success.", color: "danger" },
      { title: "IRA structural headwind", text: "Medicare price negotiation and inflation rebate obligations will compress margins on blockbusters over time. The window of full pricing power is finite.", color: "amber" },
      { title: "Oral GLP-1 optionality", text: "Orforglipron (oral GLP-1) could remove the injection barrier and dramatically expand the addressable population — but must achieve comparable efficacy.", color: "blue" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Morgan Stanley", rating: "Overweight", target: "$1,050", sentiment: "bullish", note: "GLP-1 leadership + pipeline optionality" },
      { firm: "Goldman Sachs", rating: "Buy", target: "$980", sentiment: "bullish" },
      { firm: "BMO Capital", rating: "Market Perform", target: "$800", sentiment: "neutral", note: "Valuation risk at current multiple" },
    ],
    meanTarget: "$950",
    currentPrice: "$772",
    upside: "+23% upside",
  },
  news: [
    { headline: "Eli Lilly FY2024 10-K: Revenue $45.0B (+32%), operating cash flow doubles to $8.82B", source: "SEC EDGAR", tag: "10-K", date: "Feb 19, 2025", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000059478&type=10-K" },
    { headline: "Lilly guides FY2025 revenue to $58–$61B, signaling continued GLP-1 momentum", source: "Eli Lilly", tag: "Guidance", date: "Feb 6, 2025", url: "https://investor.lilly.com" },
    { headline: "Lilly issues $6.5B in fixed-rate notes to fund manufacturing expansion and pipeline", source: "Eli Lilly", tag: "Debt", date: "Feb 2025", url: "https://investor.lilly.com" },
    { headline: "Total debt reaches $33.6B — up $8.4B in FY2024 as Lilly accelerates capacity build-out", source: "SEC EDGAR", tag: "Balance Sheet", date: "Feb 19, 2025", url: "https://www.sec.gov" },
    { headline: "FDA approves Zepbound for obstructive sleep apnea, expanding tirzepatide indications", source: "FDA", date: "Dec 20, 2024", url: "https://www.fda.gov" },
    { headline: "Zepbound shows 47% greater weight loss vs Wegovy in SURMOUNT-5 head-to-head trial", source: "Eli Lilly", tag: "Clinical", date: "2024", url: "https://investor.lilly.com" },
  ],
  positions: {
    status: "waiting",
    positions: [],
    note: "Position pending entry — awaiting pullback for better risk/reward. Current premium multiple offers minimal margin of safety.",
  },
};
