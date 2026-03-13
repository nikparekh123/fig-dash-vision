import type { CompanyData } from "./types";
import geoLogo from "@/assets/logos/geo.png";

export const geoData: CompanyData = {
  name: "The GEO Group",
  ticker: "GEO",
  exchange: "NYSE",
  slug: "geo",
  logo: geoLogo,
  color: "hsl(210, 70%, 35%)",
  industry: "Industrials",
  sector: "Correctional & Detention Facilities",
  quarter: "Q4 2025",
  earningsDate: "2026-02-20",
  lastUpdated: "February 20, 2026",
  kpis: [
    { title: "Q4 Revenue", value: "$620M", change: "+8% YoY", positive: true },
    { title: "Adjusted EPS", value: "$0.42", change: "+20% YoY", positive: true },
    { title: "FY2025 Revenue", value: "$2.42B", change: "+6% YoY", positive: true },
    { title: "Facility Utilization", value: "~85%", change: "Improving", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "GEO Group is the largest private operator of correctional, detention, and reentry facilities in the US. The company benefits from a favorable policy environment, rising immigration enforcement, and structural capacity constraints in the public system. Transitioning from REIT back to C-corp, enabling debt paydown and capital flexibility.",
      bullets: [
        "Largest private prison and detention operator — structural demand from ICE and federal agencies",
        "Facility utilization improving toward 85%+ — significant operating leverage",
        "C-corp conversion unlocks capital allocation flexibility — aggressive debt paydown",
        "BI (electronic monitoring) segment growing with alternative-to-detention programs",
        "Political tailwinds under current administration favoring private facility usage",
      ],
      whatMustGoRight: "Policy environment must remain favorable. Debt reduction must continue to delever the balance sheet. ICE contract renewals and expansions must materialize. Public perception risk must be manageable.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Political winds shift — a future administration cancels private prison contracts. ESG pressures intensify, limiting institutional ownership. Debt remains too high if revenue disappoints.",
      watchSignals: [
        "Federal policy reversal on private detention facilities",
        "ICE contract cancellations or non-renewals",
        "Debt/EBITDA fails to decline below 4x",
        "ESG-driven divestment accelerates",
        "State-level bans on private prisons expand",
        "Facility utilization declines below 75%",
      ],
    },
    verdict: [
      "GEO Group is a contrarian value play benefiting from a favorable political environment and structural demand for detention capacity. The company is aggressively paying down debt and improving utilization, which should drive meaningful earnings growth.",
      "The key risk is binary policy exposure — the thesis depends on the current administration's stance continuing. Position sized as a tactical holding with clear catalysts (debt reduction, contract wins) and clear exit triggers (policy reversal).",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 2270, revenueGrowth: "+3%", type: "actual" },
      { name: "FY2023", revenue: 2350, revenueGrowth: "+4%", type: "actual" },
      { name: "FY2024", revenue: 2280, revenueGrowth: "-3%", type: "actual" },
      { name: "FY2025", revenue: 2420, revenueGrowth: "+6%", type: "actual" },
      { name: "FY2026E", revenue: 2650, revenueGrowth: "+10%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2025", revenue: 580, growth: "+4%", type: "actual" },
      { name: "Q2 2025", revenue: 600, growth: "+5%", type: "actual" },
      { name: "Q3 2025", revenue: 620, growth: "+7%", type: "actual" },
      { name: "Q4 2025", revenue: 620, growth: "+8%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2026E revenue ($M)",
    quarterlySubtitle: "FY2025 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2023", netIncome: 120, ebitdaMargin: 18, grossMargin: 28 },
      { name: "FY2024", netIncome: 95, ebitdaMargin: 16, grossMargin: 26 },
      { name: "FY2025", netIncome: 160, ebitdaMargin: 20, grossMargin: 30 },
      { name: "FY2026E", netIncome: 220, ebitdaMargin: 23, grossMargin: 32 },
    ],
    quarterly: [
      { name: "Q1 2025", netIncome: 32, ebitdaMargin: 18 },
      { name: "Q2 2025", netIncome: 38, ebitdaMargin: 19 },
      { name: "Q3 2025", netIncome: 42, ebitdaMargin: 20 },
      { name: "Q4 2025", netIncome: 48, ebitdaMargin: 22 },
    ],
    footnotes: [
      { label: "Net Debt:", value: "~$1.8B", note: "Aggressively paying down — target <$1.5B by FY2026" },
      { label: "C-Corp Conversion:", value: "Completed", note: "Enables retained earnings for debt paydown" },
    ],
  },
  keyMetrics: [
    { label: "Facility Utilization", value: "~85%", sub: "Improving from ~75% in FY2023. Operating leverage kicks in above 80%.", accent: "success" },
    { label: "Net Debt", value: "~$1.8B", sub: "Down from $2.4B peak. Target <$1.5B by end of FY2026.", accent: "amber" },
    { label: "ICE Contracts", value: "~40%", sub: "Of total revenue. Core demand driver — contract renewals and expansions.", accent: "blue" },
    { label: "BI Segment", value: "$400M+", sub: "Electronic monitoring growing with alternative-to-detention programs.", accent: "success" },
    { label: "Beds Capacity", value: "~80,000", sub: "Largest private operator. Reactivating idle facilities as demand increases.", accent: "blue" },
  ],
  marketPenetration: {
    tam: { percentage: "~15%", market: "US private corrections & detention", description: "GEO operates ~80,000 beds across the US, Australia, and South Africa. Dominant position in US private detention." },
    enterprise: {
      items: [
        { label: "US Facilities", value: 70, display: "95+" },
        { label: "International", value: 15, display: "10+" },
      ],
      description: "Facilities across US, Australia, and South Africa. Largest private operator globally.",
    },
    upsell: {
      description: "Reactivating idle facilities, expanding BI electronic monitoring, and adding reentry services.",
      tiers: [
        { label: "Secure Services", detail: "Correctional & detention — ~60% of revenue" },
        { label: "BI Monitoring", detail: "Electronic monitoring — ~17% of revenue" },
        { label: "Reentry Services", detail: "Community-based programs — ~23% of revenue" },
      ],
    },
    funnel: {
      steps: [
        { label: "Total Bed Capacity", value: "~80,000", width: 100, accent: "bg-chart-blue" },
        { label: "Utilized Beds", value: "~68,000", width: 85, accent: "bg-chart-amber" },
        { label: "ICE Beds", value: "~32,000", width: 40, accent: "bg-success" },
      ],
      description: "Facility utilization improving — reactivating idle capacity as federal demand increases.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 18_000_000, marketValue: 316_800_000, pct: 11.2, type: "Index Fund", filed: "2025-12-31" },
      { name: "BlackRock", shares: 14_500_000, marketValue: 255_200_000, pct: 9.0, type: "Index Fund", filed: "2025-12-31" },
      { name: "State Street", shares: 6_800_000, marketValue: 119_680_000, pct: 4.2, type: "Index Fund", filed: "2025-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Vanguard Group", sub: "11.2%" },
      { label: "Institutional Ownership", value: "~65%" },
      { label: "Insider Ownership", value: "~3%" },
    ],
  },
  customerRetention: {
    ndr: { value: "N/A", description: "Government contract-based business. Revenue stability driven by contract renewals and facility utilization rates." },
    regional: [
      { name: "Secure Services", value: 1450, fill: "hsl(var(--chart-blue))" },
      { name: "BI Monitoring", value: 410, fill: "hsl(var(--success))" },
      { name: "Reentry", value: 560, fill: "hsl(var(--chart-amber))" },
    ],
    tier10k: [
      { year: "2023", value: 2350, type: "actual" },
      { year: "2024", value: 2280, type: "actual" },
      { year: "2025", value: 2420, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by segment ($M).",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2026 Revenue", value: "$2.6–2.7B", details: ["+8-10% YoY", "ICE contract expansions and facility reactivations"], accent: "success" },
      { title: "FY2026 Adj. EBITDA", value: "$550–580M", details: ["Margin expansion from utilization improvement", "BI segment growth"], accent: "success" },
      { title: "Debt Reduction", value: "$300M+", details: ["Target net debt below $1.5B", "C-corp structure enabling retained earnings"], accent: "blue" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 17.60,
    emas: [
      { label: "50 EMA", value: 15.80 },
      { label: "200 EMA", value: 13.20 },
    ],
    rsi: 58.4,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"Our facilities and services are critical infrastructure for the federal government. We are focused on delivering high-quality services while strengthening our balance sheet through disciplined capital allocation."',
      author: "George Zoley, Executive Chairman",
    },
    insights: [
      { title: "Policy tailwind", text: "Current administration has expanded use of private detention facilities. ICE demand is at multi-year highs, driving facility reactivations and contract expansions.", color: "success" },
      { title: "Binary political risk", text: "A change in administration could reverse private prison policies. This is the single largest risk — the stock would reprice significantly on policy reversal signals.", color: "danger" },
      { title: "Debt deleveraging", text: "Aggressive debt paydown from C-corp conversion. Net debt declining from $2.4B peak toward $1.5B target. Each turn of leverage reduction unlocks equity value.", color: "blue" },
      { title: "ESG headwinds", text: "Several major banks and institutional investors have divested from private prison operators. This limits the investor base and creates an overhang.", color: "amber" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Wedbush", rating: "Outperform", target: "$25", sentiment: "bullish", note: "Policy environment and utilization improvement drive upside" },
      { firm: "Noble Capital", rating: "Outperform", target: "$22", sentiment: "bullish", note: "Debt paydown and margin expansion undervalued" },
    ],
    meanTarget: "$23.50",
    currentPrice: "$17.60",
    upside: "+34% upside",
  },
  news: [
    { headline: "GEO Group reports Q4 revenue of $620M with improving facility utilization", source: "GEO Group IR", tag: "Earnings", date: "Feb 20, 2026", url: "https://www.geogroup.com" },
    { headline: "ICE detention demand hits multi-year high — GEO reactivates additional facilities", source: "Reuters", tag: "Operations", date: "Feb 2026", url: "https://www.reuters.com" },
    { headline: "GEO Group reduces net debt by $200M in FY2025 following C-corp conversion", source: "Bloomberg", tag: "Balance Sheet", date: "Jan 2026", url: "https://www.bloomberg.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "GEO", quantity: 1000, avgPrice: 17.60, currentPrice: 17.60 },
    ],
  },
};
