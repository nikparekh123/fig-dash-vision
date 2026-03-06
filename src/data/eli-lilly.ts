import type { CompanyData } from "./types";

export const eliLillyData: CompanyData = {
  name: "Eli Lilly",
  ticker: "LLY",
  exchange: "NYSE",
  slug: "eli-lilly",
  color: "hsl(0, 85%, 55%)",
  quarter: "Q4 2024",
  lastUpdated: "February 6, 2025",
  kpis: [
    { title: "Q4 Revenue", value: "$13.53B", change: "+45% YoY", positive: true },
    { title: "Adjusted EPS", value: "$5.32", change: "Beat $5.16 est.", positive: true, subtitle: "+3%" },
    { title: "Mounjaro Revenue", value: "$3.53B", change: "Q4 2024", positive: true },
    { title: "FY2024 Revenue", value: "$45.0B", change: "+32% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Eli Lilly is the undisputed leader in the GLP-1 revolution with Mounjaro (diabetes) and Zepbound (obesity). These drugs represent the largest new drug class in pharmaceutical history with a $100B+ addressable market.",
      bullets: [
        "45% Q4 revenue growth driven by Mounjaro ($3.53B) and Zepbound ($1.91B)",
        "FY2025 guidance: $58–$61B revenue (+29–35% YoY)",
        "Deep pipeline: 10+ Phase III assets across oncology, immunology, neurodegeneration",
        "Dominant GLP-1 market position with manufacturing scale-up underway",
      ],
      whatMustGoRight: "Manufacturing capacity must scale fast enough to meet demand. Insurance coverage for obesity must expand. Pipeline must deliver to justify premium valuation. Competition from Novo Nordisk must be managed.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Paying an extreme premium multiple for a company heavily dependent on two drugs. Patent cliffs, manufacturing challenges, and potential safety signals could destroy value rapidly.",
      watchSignals: [
        "GLP-1 safety concerns emerging from long-term studies",
        "Manufacturing capacity failing to meet demand",
        "Insurance pushback on obesity drug coverage",
        "Novo Nordisk or others gaining GLP-1 market share",
        "Pipeline failures in key Phase III trials",
      ],
    },
    verdict: [
      "Eli Lilly delivered exceptional FY2024 results with $45B revenue (+32%) and guided FY2025 to $58–$61B (+29–35%). Mounjaro and Zepbound are blockbusters — together they generated $11.1B in FY2024 from a near standing start.",
      "The GLP-1 market is projected to exceed $100B by 2030. Lilly's dual position in both diabetes (Mounjaro) and obesity (Zepbound) gives it unique leverage. Manufacturing is the binding constraint — $9B+ invested in capacity expansion.",
      "At ~60x forward earnings, Lilly is priced for near-flawless execution. The stock offers exceptional growth but minimal margin of safety. Any demand miss, safety signal, or pipeline setback could trigger a significant correction.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 28500, revenueGrowth: "+1%", type: "actual" },
      { name: "FY2023", revenue: 34100, revenueGrowth: "+20%", type: "actual" },
      { name: "FY2024", revenue: 45000, revenueGrowth: "+32%", type: "actual" },
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
      { label: "FY2025E Adjusted EPS:", value: "$22.50–$24.00", note: "Strong growth driven by GLP-1 volume ramp" },
      { label: "Manufacturing Investment:", value: "$9B+", note: "Capacity expansion across 5 new facilities" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin", value: "81%", sub: "FY2024 — premium pharma margins driven by innovative drug mix", accent: "success" },
    { label: "GLP-1 Revenue", value: "$11.1B", sub: "Mounjaro ($7.2B) + Zepbound ($3.9B) — FY2024 combined", accent: "success" },
    { label: "R&D Spend", value: "$11.5B", sub: "26% of revenue — investing heavily in pipeline (10+ Phase III assets)", accent: "blue" },
    { label: "Manufacturing CapEx", value: "$9B+", sub: "Massive capacity build-out to meet GLP-1 demand", accent: "amber", monitor: true },
    { label: "Free Cash Flow", value: "$4.2B", sub: "Growing rapidly as GLP-1 revenue scales", accent: "success" },
  ],
  marketPenetration: {
    tam: { percentage: "~11%", market: "$100B+ GLP-1 TAM by 2030", description: "Mounjaro/Zepbound addressing diabetes and obesity — a combined TAM projected to exceed $100B by 2030. Lilly has ~11% current penetration with massive room to grow." },
    enterprise: {
      items: [
        { label: "Diabetes Market Share", value: 35, display: "~35%" },
        { label: "Obesity Market Share", value: 45, display: "~45%" },
      ],
      description: "Dominant in both diabetes (Mounjaro) and obesity (Zepbound) GLP-1 markets, competing primarily with Novo Nordisk.",
    },
    upsell: {
      description: "Expanding indications beyond diabetes and obesity. MASH (liver disease), sleep apnea, and cardiovascular outcomes studies could unlock new patient populations.",
      tiers: [
        { label: "Diabetes (Mounjaro)", detail: "$7.2B FY2024 — type 2 diabetes" },
        { label: "Obesity (Zepbound)", detail: "$3.9B FY2024 — chronic weight management" },
        { label: "Pipeline Indications", detail: "MASH, sleep apnea, CV outcomes" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global Diabetics", value: "537M", width: 100, accent: "bg-chart-blue" },
        { label: "Treated with GLP-1", value: "~25M", width: 30, accent: "bg-chart-amber" },
        { label: "On Mounjaro", value: "~8M", width: 15, accent: "bg-success" },
        { label: "Obesity (Zepbound)", value: "~3M", width: 8, accent: "bg-danger" },
      ],
      description: "GLP-1 penetration is still early. 537M global diabetics, but only ~25M on GLP-1 therapy. Obesity market is even more nascent with hundreds of millions of potential patients.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 82_500_000, marketValue: 63_700_000_000, pct: 8.7, type: "Index Fund", filed: "2024-12-31" },
      { name: "BlackRock", shares: 67_800_000, marketValue: 52_340_000_000, pct: 7.1, type: "Index Fund", filed: "2024-12-31" },
      { name: "State Street", shares: 38_200_000, marketValue: 29_490_000_000, pct: 4.0, type: "Index Fund", filed: "2024-12-31" },
      { name: "Lilly Endowment", shares: 92_300_000, marketValue: 71_260_000_000, pct: 9.7, type: "Foundation", filed: "2024-12-31" },
      { name: "Capital Research", shares: 28_500_000, marketValue: 22_000_000_000, pct: 3.0, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "FMR LLC", shares: 22_100_000, marketValue: 17_060_000_000, pct: 2.3, type: "Investment Advisor", filed: "2024-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Lilly Endowment", sub: "9.7%" },
      { label: "Institutional Ownership", value: "~82%" },
      { label: "Lilly Endowment", value: "9.7%" },
    ],
  },
  customerRetention: {
    ndr: { value: "N/A", description: "Pharma doesn't use NDR. However, prescription refill rates for Mounjaro exceed 85% at 12 months — exceptional for a chronic therapy. Patient demand consistently outstrips supply." },
    regional: [
      { name: "United States", value: 32200, fill: "hsl(var(--chart-blue))" },
      { name: "International", value: 12800, fill: "hsl(var(--success))" },
    ],
    tier10k: [
      { year: "2022", value: 28500, type: "actual" },
      { year: "2023", value: 34100, type: "actual" },
      { year: "2024", value: 45000, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by geography ($M). US represents ~72% of total revenue, driven by higher drug pricing.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2025 Revenue", value: "$58–$61B", details: ["+29–35% YoY growth", "Driven by GLP-1 volume ramp"], accent: "success" },
      { title: "FY2025 Adjusted EPS", value: "$22.50–$24.00", details: ["Significant growth vs FY2024", "Operating leverage kicking in"], accent: "success" },
      { title: "Manufacturing Scale", value: "5 New Sites", details: ["$9B+ investment in capacity", "Expected online through 2026"], accent: "blue" },
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
      { title: "GLP-1 revolution", text: "Mounjaro and Zepbound are transformative drugs addressing diabetes and obesity — a combined $100B+ market by 2030.", color: "success" },
      { title: "Manufacturing constraint", text: "$9B+ invested in capacity expansion. Supply is currently the binding constraint on revenue growth.", color: "amber" },
      { title: "Pipeline depth", text: "10+ Phase III assets across oncology, immunology, and neurodegeneration. Donanemab (Alzheimer's) is a potential blockbuster.", color: "blue" },
      { title: "Pricing risk", text: "GLP-1 drugs face pricing pressure from payers, IRA negotiation, and political scrutiny on pharma pricing.", color: "danger" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Morgan Stanley", rating: "Overweight", target: "$1,050", sentiment: "bullish" },
      { firm: "Goldman Sachs", rating: "Buy", target: "$980", sentiment: "bullish" },
      { firm: "BMO Capital", rating: "Market Perform", target: "$800", sentiment: "neutral", note: "Valuation risk" },
    ],
    meanTarget: "$950",
    currentPrice: "$772",
    upside: "+23% upside",
  },
  news: [
    { headline: "Eli Lilly reports Q4 2024 revenue of $13.53B, up 45% driven by Mounjaro and Zepbound", source: "Eli Lilly", tag: "Earnings", date: "Feb 6, 2025", url: "https://investor.lilly.com" },
    { headline: "Lilly guides FY2025 revenue to $58–$61B, signaling continued GLP-1 momentum", source: "Eli Lilly", tag: "Guidance", date: "Feb 6, 2025", url: "https://investor.lilly.com" },
    { headline: "Zepbound sales surge to $1.91B in Q4, making it one of the fastest drug launches in history", source: "CNBC", date: "Feb 6, 2025", url: "https://www.cnbc.com" },
    { headline: "Lilly announces $9B manufacturing expansion to meet GLP-1 demand", source: "Reuters", date: "Jan 20, 2025", url: "https://www.reuters.com" },
    { headline: "FDA approves Zepbound for obstructive sleep apnea, expanding indications", source: "FDA", date: "Dec 20, 2024", url: "https://www.fda.gov" },
  ],
};
