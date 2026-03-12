import type { CompanyData } from "./types";
import issLogo from "@/assets/logos/integrated-sensor.png";

export const integratedSensorData: CompanyData = {
  name: "Integrated Sensor Solutions",
  ticker: "ISS",
  exchange: "OTC",
  slug: "integrated-sensor",
  color: "hsl(195, 70%, 42%)",
  logo: issLogo,
  sector: "Industrials — MEMS Sensors",
  quarter: "Q4 2024",
  lastUpdated: "February 15, 2025",
  kpis: [
    { title: "Q4 Revenue", value: "$8.2M", change: "+12% YoY", positive: true },
    { title: "EPS", value: "$0.15", change: "In line", positive: true },
    { title: "Gross Margin", value: "52%", change: "+2pts YoY", positive: true },
    { title: "FY2024 Revenue", value: "$30.5M", change: "+14% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Integrated Sensor Solutions is a niche manufacturer of high-precision MEMS sensors used in industrial, automotive, and medical applications. Small-cap with high margins and growing end-market demand.",
      bullets: [
        "14% revenue growth in a specialized sensor market",
        "52% gross margin — premium product positioning",
        "Growing automotive and medical sensor demand",
        "Debt-free balance sheet with $12M cash",
      ],
      whatMustGoRight: "Must win new design-ins with Tier 1 automotive OEMs. Medical device approvals must proceed on schedule. Must scale manufacturing without margin compression.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Small-cap with limited liquidity and customer concentration risk. A single lost contract could materially impact revenue. Technology commoditization is an ever-present threat.",
      watchSignals: [
        "Loss of a top-3 customer",
        "Gross margin declining below 45%",
        "Competitor pricing pressure in MEMS sensors",
        "Delayed automotive program launches",
        "Supply chain disruptions for specialty materials",
      ],
    },
    verdict: [
      "Integrated Sensor Solutions is a classic small-cap niche play — high margins, growing end markets, but limited scale and liquidity. The 52% gross margin reflects genuine pricing power in specialized MEMS sensors.",
      "The automotive sensor market is projected to grow 8-10% annually through 2030, driven by electrification and ADAS adoption. ISS is well-positioned but needs to scale.",
      "At current valuations, the stock offers potential upside if automotive design wins materialize, but the OTC listing and low volume make this a higher-risk position requiring patience.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 22.5, revenueGrowth: "+8%", type: "actual" },
      { name: "FY2023", revenue: 26.8, revenueGrowth: "+19%", type: "actual" },
      { name: "FY2024", revenue: 30.5, revenueGrowth: "+14%", type: "actual" },
      { name: "FY2025E", revenue: 35.0, revenueGrowth: "+15%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2024", revenue: 7.0, growth: "+11%", type: "actual" },
      { name: "Q2 2024", revenue: 7.5, growth: "+13%", type: "actual" },
      { name: "Q3 2024", revenue: 7.8, growth: "+15%", type: "actual" },
      { name: "Q4 2024", revenue: 8.2, growth: "+12%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2025E revenue ($M)",
    quarterlySubtitle: "FY2024 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2022", netIncome: 2.8, ebitdaMargin: 18, grossMargin: 48 },
      { name: "FY2023", netIncome: 3.5, ebitdaMargin: 20, grossMargin: 50 },
      { name: "FY2024", netIncome: 4.2, ebitdaMargin: 22, grossMargin: 52 },
      { name: "FY2025E", netIncome: 5.5, ebitdaMargin: 24, grossMargin: 54 },
    ],
    quarterly: [
      { name: "Q1 2024", netIncome: 0.8, ebitdaMargin: 18 },
      { name: "Q2 2024", netIncome: 1.0, ebitdaMargin: 20 },
      { name: "Q3 2024", netIncome: 1.1, ebitdaMargin: 22 },
      { name: "Q4 2024", netIncome: 1.3, ebitdaMargin: 24 },
    ],
    footnotes: [
      { label: "FY2025E Gross Margin Target:", value: "54%", note: "Continued margin expansion from product mix" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin", value: "52%", sub: "FY2024 — premium margins in specialty sensors", accent: "success" },
    { label: "Cash Position", value: "$12M", sub: "Zero debt. Conservative balance sheet.", accent: "blue" },
    { label: "R&D Spend", value: "$4.5M", sub: "15% of revenue — investing in next-gen MEMS", accent: "blue" },
    { label: "Customer Concentration", value: "Top 3 = 45%", sub: "Moderate concentration risk — diversifying", accent: "amber", monitor: true },
    { label: "Backlog", value: "$18M", sub: "Growing backlog provides revenue visibility", accent: "success" },
  ],
  marketPenetration: {
    tam: { percentage: "~0.3%", market: "$12B MEMS sensor market", description: "$30.5M revenue in a $12B global MEMS sensor market. Niche positioning in high-precision industrial and automotive segments." },
    enterprise: {
      items: [
        { label: "Automotive OEMs", value: 15, display: "8 OEMs" },
        { label: "Medical Device Co.", value: 10, display: "5 partners" },
      ],
      description: "Established relationships with automotive OEMs and medical device manufacturers.",
    },
    upsell: {
      description: "Cross-selling sensor modules across automotive, medical, and industrial verticals.",
      tiers: [
        { label: "Automotive", detail: "$14M — pressure & motion sensors" },
        { label: "Medical", detail: "$9M — precision diagnostic sensors" },
        { label: "Industrial", detail: "$7.5M — process control sensors" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global MEMS Market", value: "$12B", width: 100, accent: "bg-chart-blue" },
        { label: "High-Precision Segment", value: "$2B", width: 35, accent: "bg-chart-amber" },
        { label: "ISS Revenue", value: "$30.5M", width: 8, accent: "bg-success" },
      ],
      description: "Targeting the high-precision segment of the MEMS market where margins are highest and competition is limited.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Founder / CEO", shares: 2_500_000, marketValue: 15_000_000, pct: 22.0, type: "Individual/Founder", filed: "2024-12-31" },
      { name: "Renaissance Technologies", shares: 800_000, marketValue: 4_800_000, pct: 7.0, type: "Hedge Fund", filed: "2024-12-31" },
      { name: "Dimensional Fund", shares: 600_000, marketValue: 3_600_000, pct: 5.3, type: "Index Fund", filed: "2024-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Founder / CEO", sub: "22%" },
      { label: "Institutional Ownership", value: "~25%" },
      { label: "Insider Ownership", value: "~28%" },
    ],
  },
  customerRetention: {
    ndr: { value: "105%", description: "Customers expand sensor orders as their end products ramp production. Retention is high due to design-in switching costs." },
    regional: [
      { name: "North America", value: 18.3, fill: "hsl(var(--chart-blue))" },
      { name: "Europe", value: 8.2, fill: "hsl(var(--success))" },
      { name: "Asia", value: 4.0, fill: "hsl(var(--chart-amber))" },
    ],
    tier10k: [
      { year: "2022", value: 22.5, type: "actual" },
      { year: "2023", value: 26.8, type: "actual" },
      { year: "2024", value: 30.5, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by region ($M).",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2025 Revenue", value: "$35M", details: ["+15% YoY growth target", "New automotive design wins ramping"], accent: "success" },
      { title: "Gross Margin Target", value: "54%", details: ["Product mix improvement", "Manufacturing efficiency gains"], accent: "success" },
      { title: "New Products", value: "2 Launches", details: ["Next-gen automotive MEMS sensor", "Medical-grade pressure sensor"], accent: "blue" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 6.00,
    emas: [
      { label: "50 EMA", value: 5.75 },
      { label: "200 EMA", value: 5.20 },
    ],
    rsi: 52.4,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"Our focus on high-precision MEMS sensors positions us at the intersection of automotive electrification, medical innovation, and industrial automation — three secular growth trends that will drive demand for decades."',
      author: "CEO, Integrated Sensor Solutions",
    },
    insights: [
      { title: "Automotive tailwind", text: "EV and ADAS adoption driving 8-10% annual growth in automotive sensor demand. ISS is winning new design-ins.", color: "success" },
      { title: "Medical expansion", text: "Two new FDA-cleared sensor products in pipeline. Medical margins exceed 60%.", color: "blue" },
      { title: "Scale challenge", text: "At $30M revenue, ISS must scale to attract institutional capital and improve liquidity.", color: "amber" },
      { title: "Customer concentration", text: "Top 3 customers represent 45% of revenue — a loss would be material.", color: "danger" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Craig-Hallum", rating: "Buy", target: "$9", sentiment: "bullish" },
      { firm: "Roth Capital", rating: "Buy", target: "$8", sentiment: "bullish", note: "Automotive upside" },
    ],
    meanTarget: "$8.50",
    currentPrice: "$6.00",
    upside: "+42% upside",
  },
  news: [
    { headline: "ISS reports Q4 2024 revenue of $8.2M, up 12% YoY", source: "ISS", tag: "Earnings", date: "Feb 15, 2025", url: "#" },
    { headline: "ISS wins new MEMS sensor design-in with European automotive OEM", source: "ISS", date: "Jan 22, 2025", url: "#" },
    { headline: "ISS receives FDA clearance for next-generation medical pressure sensor", source: "ISS", date: "Dec 10, 2024", url: "#" },
  ],
  positions: {
    status: "waiting",
    positions: [],
    note: "Position pending entry — evaluating entry point after recent automotive design win",
  },
};
