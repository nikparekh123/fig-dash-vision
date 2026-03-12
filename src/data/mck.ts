import type { CompanyData } from "./types";
import mckChart from "@/assets/charts/mck-chart.png";

export const mckData: CompanyData = {
  name: "McKesson Corporation",
  ticker: "MCK",
  exchange: "NYSE",
  slug: "mck",
  color: "hsl(220, 65%, 50%)",
  sector: "Healthcare — Pharmaceutical Distribution",
  quarter: "Q3 FY2025",
  lastUpdated: "February 5, 2025",
  kpis: [
    { title: "Q3 Revenue", value: "$95.3B", change: "+19% YoY", positive: true },
    { title: "Adjusted EPS", value: "$8.03", change: "Beat $7.49 est.", positive: true, subtitle: "+7%" },
    { title: "FY2025E Revenue", value: "$370B+", change: "+15% YoY", positive: true },
    { title: "Adj. Operating Profit", value: "$1.3B", change: "+12% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "McKesson is the largest pharmaceutical distributor in the US, serving as the critical infrastructure connecting drug manufacturers to pharmacies and hospitals. The business benefits from immense scale and growing specialty drug volumes.",
      bullets: [
        "Largest US pharma distributor — ~35% market share",
        "GLP-1/specialty drug boom driving volume growth acceleration",
        "Aggressive capital return — $4B+ annual buybacks shrinking float",
        "US Pharmaceutical segment revenue up 21% YoY in Q3",
      ],
      whatMustGoRight: "Drug pricing spreads must remain stable. GLP-1 volume growth must continue. Opioid litigation settlements must remain within expected parameters.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Pharmaceutical distribution is a low-margin, high-volume business. Drug pricing reform could compress already thin margins. Opioid litigation overhang remains.",
      watchSignals: [
        "Drug pricing legislation compressing distribution margins",
        "GLP-1 supply normalization reducing volume tailwinds",
        "Opioid settlement costs exceeding expectations",
        "Customer concentration risk — large pharmacy chains negotiating tighter terms",
        "Generic drug deflation accelerating",
      ],
    },
    verdict: [
      "McKesson is the essential plumbing of the US healthcare system. As the largest pharma distributor, it moves ~35% of all drugs sold in the US. Revenue of $370B+ is massive but margins are razor-thin (~1% net margin) — this is a throughput business.",
      "The current growth cycle is being supercharged by GLP-1 drugs (Ozempic, Mounjaro, etc.) which are high-priced specialty medications flowing through McKesson's distribution network. This tailwind could persist for years.",
      "Capital allocation is excellent — management is aggressively buying back shares, shrinking the float, and growing EPS faster than revenue. The stock has been a steady compounder, up significantly over the past 5 years.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2023", revenue: 276700, revenueGrowth: "+5%", type: "actual" },
      { name: "FY2024", revenue: 308900, revenueGrowth: "+12%", type: "actual" },
      { name: "FY2025E", revenue: 370000, revenueGrowth: "+20%", type: "estimate" },
      { name: "FY2026E", revenue: 400000, revenueGrowth: "+8%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 FY25", revenue: 79300, growth: "+7%", type: "actual" },
      { name: "Q2 FY25", revenue: 93700, growth: "+21%", type: "actual" },
      { name: "Q3 FY25", revenue: 95300, growth: "+19%", type: "actual" },
      { name: "Q4 FY25E", revenue: 101700, growth: "+18%", type: "estimate" },
    ],
    yearlySubtitle: "FY2023–FY2026E revenue ($M). McKesson fiscal year ends March.",
    quarterlySubtitle: "FY2025 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2023", netIncome: 3560, ebitdaMargin: 2.1, grossMargin: 5.2 },
      { name: "FY2024", netIncome: 3020, ebitdaMargin: 1.9, grossMargin: 4.9 },
      { name: "FY2025E", netIncome: 4100, ebitdaMargin: 2.0, grossMargin: 5.0 },
      { name: "FY2026E", netIncome: 4500, ebitdaMargin: 2.1, grossMargin: 5.1 },
    ],
    quarterly: [
      { name: "Q1 FY25", netIncome: 850, ebitdaMargin: 1.8 },
      { name: "Q2 FY25", netIncome: 1050, ebitdaMargin: 2.0 },
      { name: "Q3 FY25", netIncome: 1100, ebitdaMargin: 2.1 },
      { name: "Q4 FY25E", netIncome: 1100, ebitdaMargin: 2.0 },
    ],
    footnotes: [
      { label: "FY2025 Adj. EPS Guidance:", value: "$32.55–$33.05", note: "Raised from $31.75–$32.55" },
      { label: "Opioid Settlements:", value: "$8.1B total", note: "Being paid over 18 years — manageable annual impact" },
    ],
  },
  keyMetrics: [
    { label: "Adjusted EPS", value: "$32.80E", sub: "FY2025 — buybacks + volume growth driving double-digit EPS growth", accent: "success" },
    { label: "Net Margin", value: "~1.1%", sub: "Thin margins typical of distribution — enormous revenue base compensates", accent: "amber", monitor: true },
    { label: "Share Buybacks", value: "$4B+", sub: "Annual buyback program — share count declining ~7% per year", accent: "blue" },
    { label: "US Pharma Segment", value: "~90% of revenue", sub: "Core distribution business driving growth through specialty drug volumes", accent: "success" },
    { label: "GLP-1 Tailwind", value: "Strong", sub: "Ozempic/Mounjaro distribution volumes accelerating — high-value throughput", accent: "success" },
  ],
  marketPenetration: {
    tam: { percentage: "~35%", market: "$600B+ US pharma distribution", description: "McKesson is the largest of three major US pharma distributors (with AmerisourceBergen and Cardinal Health), handling ~35% of all US drug distribution." },
    enterprise: {
      items: [
        { label: "US Pharmacies Served", value: 80, display: "40,000+" },
        { label: "Health Systems", value: 60, display: "Major networks" },
      ],
      description: "Serves approximately 40,000+ pharmacies, hospitals, and health systems across the US and Canada.",
    },
    upsell: {
      description: "Expanding from core distribution into oncology, specialty pharmacy, and biopharma services.",
      tiers: [
        { label: "US Pharmaceutical", detail: "$330B+ — core distribution" },
        { label: "Prescription Technology Solutions", detail: "$1.3B — tech-enabled services" },
        { label: "Medical-Surgical Solutions", detail: "$3.2B — medical supplies" },
      ],
    },
    funnel: {
      steps: [
        { label: "US Rx Market", value: "$600B+", width: 100, accent: "bg-chart-blue" },
        { label: "McKesson Distribution", value: "$330B+", width: 55, accent: "bg-chart-amber" },
        { label: "Specialty/Oncology", value: "$50B+", width: 15, accent: "bg-success" },
        { label: "Tech Solutions", value: "$1.3B", width: 5, accent: "bg-danger" },
      ],
      description: "McKesson captures ~35% of US pharma distribution. Specialty and oncology represent the highest-growth, highest-margin segments.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 10_800_000, marketValue: 10_200_000_000, pct: 8.9, type: "Index Fund", filed: "2024-12-31" },
      { name: "BlackRock", shares: 9_500_000, marketValue: 8_970_000_000, pct: 7.8, type: "Index Fund", filed: "2024-12-31" },
      { name: "State Street", shares: 5_600_000, marketValue: 5_290_000_000, pct: 4.6, type: "Index Fund", filed: "2024-12-31" },
      { name: "Capital World", shares: 4_800_000, marketValue: 4_530_000_000, pct: 3.9, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "Wellington Mgmt", shares: 3_900_000, marketValue: 3_680_000_000, pct: 3.2, type: "Investment Advisor", filed: "2024-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Vanguard Group", sub: "8.9%" },
      { label: "Institutional Ownership", value: "~88%" },
      { label: "Insider Ownership", value: "<1%" },
    ],
  },
  customerRetention: {
    ndr: { value: "99%+", description: "Pharmaceutical distribution contracts are deeply embedded — switching distributors is operationally complex and risky for pharmacies and hospitals." },
    regional: [
      { name: "US Pharmaceutical", value: 330000, fill: "hsl(var(--chart-blue))" },
      { name: "Rx Technology", value: 1300, fill: "hsl(var(--success))" },
      { name: "Medical-Surgical", value: 3200, fill: "hsl(var(--chart-amber))" },
    ],
    tier10k: [
      { year: "FY2023", value: 276700, type: "actual" },
      { year: "FY2024", value: 308900, type: "actual" },
      { year: "FY2025E", value: 370000, type: "estimate" },
    ],
    tier100k: [],
    ndrNote: "Revenue by segment ($M). US Pharmaceutical dominates at ~90% of total revenue.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2025 Adjusted EPS", value: "$32.55–$33.05", details: ["Raised guidance — GLP-1 volume tailwind", "Share buybacks contributing ~$2 to EPS growth"], accent: "success" },
      { title: "FY2025 Revenue", value: "$370B+", details: ["US Pharmaceutical segment growth of 15-19%", "Specialty distribution outpacing overall growth"], accent: "blue" },
      { title: "Free Cash Flow", value: "$4.5–$4.9B", details: ["Supports continued aggressive buyback program", "Stable dividend growth"], accent: "success" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 944.36,
    chartImage: mckChart,
    emas: [
      { label: "50 EMA", value: 904.28 },
      { label: "100 EMA", value: 861.14 },
      { label: "200 EMA", value: 801.36 },
    ],
    rsi: 53.42,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"McKesson\'s scale and operational excellence position us to benefit from the growing complexity of pharmaceutical distribution, particularly in specialty and oncology."',
      author: "Brian Tyler, CEO",
    },
    insights: [
      { title: "GLP-1 supercycle", text: "Ozempic, Mounjaro, and emerging GLP-1 drugs are high-priced specialty medications flowing through McKesson's network — a multi-year volume tailwind.", color: "success" },
      { title: "Buyback machine", text: "Share count declining ~7% annually through aggressive repurchases. One of the most consistent capital return programs in healthcare.", color: "blue" },
      { title: "Margin compression risk", text: "Distribution margins are already thin (~1%). Any pricing pressure from manufacturers or customers could significantly impact profitability.", color: "amber" },
      { title: "Opioid overhang fading", text: "$8.1B settlement being paid over 18 years. Annual impact is manageable and increasingly priced in by the market.", color: "success" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Baird", rating: "Outperform", target: "$680", sentiment: "bullish" },
      { firm: "Barclays", rating: "Overweight", target: "$660", sentiment: "bullish" },
      { firm: "Evercore ISI", rating: "Outperform", target: "$700", sentiment: "bullish" },
    ],
    meanTarget: "$680",
    currentPrice: "$944",
    upside: "-28% downside",
  },
  news: [
    { headline: "McKesson reports Q3 FY2025 revenue of $95.3B, up 19% driven by GLP-1 volumes", source: "McKesson", tag: "Earnings", date: "Feb 5, 2025", url: "https://www.mckesson.com" },
    { headline: "McKesson raises FY2025 adjusted EPS guidance to $32.55–$33.05", source: "McKesson", date: "Feb 5, 2025", url: "https://www.mckesson.com" },
    { headline: "GLP-1 drug distribution volumes continue to surge across major distributors", source: "Bloomberg", date: "Jan 20, 2025", url: "https://www.bloomberg.com" },
    { headline: "McKesson expands oncology network with new specialty pharmacy acquisitions", source: "Reuters", date: "Dec 12, 2024", url: "https://www.reuters.com" },
  ],
  positions: {
    status: "waiting",
    positions: [],
    note: "Monitoring — strong uptrend, price above all major EMAs",
  },
};
