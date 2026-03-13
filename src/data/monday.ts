import type { CompanyData } from "./types";

export const mondayData: CompanyData = {
  name: "monday.com",
  ticker: "MNDY",
  exchange: "NASDAQ",
  slug: "monday",
  color: "hsl(350, 80%, 50%)",
  industry: "Technology",
  sector: "Work Management Software",
  quarter: "Q4 2025",
  earningsDate: "2026-02-10",
  lastUpdated: "February 10, 2026",
  kpis: [
    { title: "Q4 Revenue", value: "$268M", change: "+28% YoY", positive: true },
    { title: "Non-GAAP EPS", value: "$1.02", change: "+35% YoY", positive: true },
    { title: "FY2025 Revenue", value: "$972M", change: "+29% YoY", positive: true },
    { title: "Net Revenue Retention", value: "112%", change: "Stable", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "monday.com is a work operating system that serves as a horizontal platform for project management, CRM, dev workflows, and service management. The multi-product strategy is working — CRM and Dev products are scaling rapidly, expanding TAM beyond traditional work management.",
      bullets: [
        "Revenue approaching $1B growing 29% YoY — rare combination of scale and growth",
        "Multi-product platform: Work Management, CRM, Dev, and Service — each addressable market $10B+",
        "Net revenue retention at 112% — strong expansion within existing customers",
        "Rule of 40+ company — combining growth and profitability",
        "225,000+ customers with minimal concentration risk",
        "AI features (monday AI) driving upsell and engagement",
      ],
      whatMustGoRight: "Enterprise upmarket motion must continue — $50K+ ARR customers growing 40%+. CRM must gain share vs. Salesforce/HubSpot. AI monetization must become a growth driver. International expansion must sustain.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Premium valuation for a company entering a growth deceleration phase. Enterprise competition from Microsoft, Atlassian, and Asana intensifies. CRM market is brutally competitive.",
      watchSignals: [
        "Revenue growth decelerates below 20%",
        "Net revenue retention drops below 108%",
        "CRM product fails to gain meaningful share",
        "Enterprise customer growth ($50K+ ARR) slows",
        "Free cash flow margin compresses",
        "Management increases spending without revenue acceleration",
      ],
    },
    verdict: [
      "monday.com is executing a successful platform expansion strategy. The move from single-product work management to a multi-product suite (CRM, Dev, Service) is driving durable growth and expanding the addressable market from $15B to $50B+.",
      "At ~15x forward revenue, the stock is priced for continued execution. The multi-product strategy de-risks the single-product concentration, and AI features provide an additional growth lever. Holding as a core growth position with strong fundamentals.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 519, revenueGrowth: "+68%", type: "actual" },
      { name: "FY2023", revenue: 729, revenueGrowth: "+41%", type: "actual" },
      { name: "FY2024", revenue: 752, revenueGrowth: "+3%", type: "actual" },
      { name: "FY2025", revenue: 972, revenueGrowth: "+29%", type: "actual" },
      { name: "FY2026E", revenue: 1220, revenueGrowth: "+26%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2025", revenue: 224, growth: "+26%", type: "actual" },
      { name: "Q2 2025", revenue: 238, growth: "+27%", type: "actual" },
      { name: "Q3 2025", revenue: 242, growth: "+29%", type: "actual" },
      { name: "Q4 2025", revenue: 268, growth: "+28%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2026E revenue ($M)",
    quarterlySubtitle: "FY2025 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2023", netIncome: -60, ebitdaMargin: 5, grossMargin: 87 },
      { name: "FY2024", netIncome: -20, ebitdaMargin: 12, grossMargin: 88 },
      { name: "FY2025", netIncome: 50, ebitdaMargin: 18, grossMargin: 89 },
      { name: "FY2026E", netIncome: 120, ebitdaMargin: 22, grossMargin: 89 },
    ],
    quarterly: [
      { name: "Q1 2025", netIncome: 8, ebitdaMargin: 15 },
      { name: "Q2 2025", netIncome: 12, ebitdaMargin: 17 },
      { name: "Q3 2025", netIncome: 14, ebitdaMargin: 18 },
      { name: "Q4 2025", netIncome: 16, ebitdaMargin: 21 },
    ],
    footnotes: [
      { label: "Free Cash Flow Margin:", value: "~25%", note: "Strong cash generation — FCF positive since FY2023" },
      { label: "Non-GAAP Operating Margin:", value: "~18%", note: "Expanding as scale grows — Rule of 40+ company" },
    ],
  },
  keyMetrics: [
    { label: "Net Revenue Retention", value: "112%", sub: "Stable expansion within existing accounts. Enterprise NRR higher at ~120%.", accent: "success" },
    { label: "Customers", value: "225,000+", sub: "Broad base with minimal concentration. $50K+ ARR customers growing 40%+ YoY.", accent: "success" },
    { label: "Gross Margin", value: "~89%", sub: "Best-in-class for SaaS. Subscription-driven recurring revenue.", accent: "success" },
    { label: "CRM Revenue", value: "Growing 50%+", sub: "Fastest-growing product line. Competing with Salesforce and HubSpot at lower price points.", accent: "blue" },
    { label: "Free Cash Flow", value: "~$245M", sub: "~25% FCF margin. Funding growth without dilution.", accent: "success" },
  ],
  marketPenetration: {
    tam: { percentage: "~2%", market: "$50B+ work management & CRM TAM", description: "monday.com addresses a $50B+ TAM across work management, CRM, dev tools, and service management. Multi-product strategy expanding addressable market." },
    enterprise: {
      items: [
        { label: "$50K+ ARR Customers", value: 40, display: "2,500+" },
        { label: "$100K+ ARR Customers", value: 20, display: "800+" },
      ],
      description: "Enterprise motion gaining traction. $50K+ ARR customers growing 40%+ YoY.",
    },
    upsell: {
      description: "Multi-product adoption driving expansion. Customers using 2+ products have 30%+ higher NRR.",
      tiers: [
        { label: "Work Management", detail: "Core product — largest revenue contributor" },
        { label: "monday CRM", detail: "Fastest-growing — 50%+ YoY" },
        { label: "monday Dev", detail: "Developer workflows — early traction" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global TAM", value: "$50B+", width: 100, accent: "bg-chart-blue" },
        { label: "monday Revenue", value: "$972M", width: 15, accent: "bg-chart-amber" },
        { label: "Enterprise ($50K+)", value: "$500M+", width: 8, accent: "bg-success" },
      ],
      description: "~2% market penetration with a multi-product platform expanding the addressable market.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 4_200_000, marketValue: 326_760_000, pct: 8.8, type: "Index Fund", filed: "2025-12-31" },
      { name: "BlackRock", shares: 3_800_000, marketValue: 295_640_000, pct: 8.0, type: "Index Fund", filed: "2025-12-31" },
      { name: "Roy Mann (Co-CEO)", shares: 2_500_000, marketValue: 194_500_000, pct: 5.3, type: "Individual/CEO", filed: "2025-12-31" },
      { name: "Eran Zinman (Co-CEO)", shares: 2_300_000, marketValue: 178_940_000, pct: 4.8, type: "Individual/CEO", filed: "2025-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Vanguard Group", sub: "8.8%" },
      { label: "Institutional Ownership", value: "~75%" },
      { label: "Insider Ownership", value: "~15%" },
    ],
  },
  customerRetention: {
    ndr: { value: "112%", description: "Stable net revenue retention reflecting healthy expansion within existing accounts. Enterprise customers retain at ~120%+." },
    regional: [
      { name: "Americas", value: 530, fill: "hsl(var(--chart-blue))" },
      { name: "EMEA", value: 310, fill: "hsl(var(--success))" },
      { name: "APAC", value: 132, fill: "hsl(var(--chart-amber))" },
    ],
    tier10k: [
      { year: "2023", value: 729, type: "actual" },
      { year: "2024", value: 752, type: "actual" },
      { year: "2025", value: 972, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by region ($M). Americas represents ~55% of total revenue.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2026 Revenue", value: "$1.2–1.24B", details: ["+24-28% YoY", "Multi-product adoption accelerating"], accent: "success" },
      { title: "FY2026 Non-GAAP OI Margin", value: "20-22%", details: ["Expanding from ~18% in FY2025", "Operating leverage improving"], accent: "success" },
      { title: "CRM Target", value: "$200M+ ARR", details: ["Growing 50%+ YoY", "Gaining share in SMB/mid-market"], accent: "blue" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 77.78,
    emas: [
      { label: "50 EMA", value: 82.50 },
      { label: "200 EMA", value: 95.00 },
    ],
    rsi: 42.3,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"monday.com is becoming the work operating system for organizations of all sizes. Our multi-product strategy is working — customers are adopting CRM, Dev, and Service alongside Work Management, creating deeper platform stickiness."',
      author: "Roy Mann & Eran Zinman, Co-CEOs",
    },
    insights: [
      { title: "Multi-product flywheel", text: "CRM growing 50%+ YoY, Dev gaining traction. Customers using 2+ products have 30%+ higher NRR. Platform stickiness increasing with each additional product.", color: "success" },
      { title: "Enterprise upmarket motion", text: "$50K+ ARR customers growing 40%+ YoY. Enterprise deals are larger, stickier, and expanding. Still early — significant room to move upmarket.", color: "blue" },
      { title: "AI as growth lever", text: "monday AI features driving engagement and upsell. AI assistant, automated workflows, and predictive insights differentiate the platform.", color: "success" },
      { title: "Competition intensifying", text: "Microsoft (Planner/Project), Atlassian (Jira), Asana, and Smartsheet all competing. CRM faces Salesforce and HubSpot. Must continue innovating to justify premium.", color: "amber" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Goldman Sachs", rating: "Buy", target: "$110", sentiment: "bullish", note: "Multi-product platform with durable 25%+ growth" },
      { firm: "Barclays", rating: "Overweight", target: "$105", sentiment: "bullish", note: "CRM traction validates platform strategy" },
      { firm: "Piper Sandler", rating: "Overweight", target: "$100", sentiment: "bullish", note: "Rule of 40+ with improving unit economics" },
    ],
    meanTarget: "$105",
    currentPrice: "$77.78",
    upside: "+35% upside",
  },
  news: [
    { headline: "monday.com reports Q4 revenue of $268M, up 28% YoY — FY2025 revenue hits $972M", source: "monday.com IR", tag: "Earnings", date: "Feb 10, 2026", url: "https://www.monday.com" },
    { headline: "monday CRM surpasses $150M ARR growing 50%+ YoY — gaining SMB and mid-market share", source: "Bloomberg", tag: "Product", date: "Feb 2026", url: "https://www.bloomberg.com" },
    { headline: "monday.com launches AI-powered workflow automation — 'monday AI' available across all products", source: "TechCrunch", tag: "AI", date: "Jan 2026", url: "https://www.techcrunch.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "MNDY", quantity: 500, avgPrice: 77.78, currentPrice: 77.78 },
    ],
  },
};
