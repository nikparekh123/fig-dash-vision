import type { CompanyData } from "./types";

export const netflixData: CompanyData = {
  name: "Netflix",
  ticker: "NFLX",
  exchange: "NASDAQ",
  slug: "netflix",
  color: "hsl(0, 75%, 50%)",
  quarter: "Q4 2025",
  lastUpdated: "January 21, 2026",
  kpis: [
    { title: "Q4 Revenue", value: "$12.05B", change: "+18% YoY", positive: true },
    { title: "EPS", value: "$6.26", change: "Beat $5.87 est.", positive: true, subtitle: "+7%" },
    { title: "Paid Members", value: "325M", change: "+16% YoY", positive: true },
    { title: "FY2025 Revenue", value: "$45.2B", change: "+16% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Netflix is the undisputed global leader in streaming entertainment with 325M+ paid members. It has successfully pivoted from content-only to a diversified platform with ads, gaming, and live events.",
      bullets: [
        "16% revenue growth at $45.2B scale — remarkable for a mature platform",
        "29.5% operating margin — up 3pts YoY, targeting 31.5% in 2026",
        "Ad tier growing 2.5x YoY to $1.5B+ — new high-margin revenue stream",
        "Warner Bros. acquisition adds HBO/DC content moat",
      ],
      whatMustGoRight: "Warner Bros. integration must go smoothly. Ad tier must continue scaling without cannibalizing premium subs. Content spend must remain disciplined while maintaining engagement.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Paying a premium multiple for a business where subscriber growth is decelerating and content costs are rising. Competition from YouTube, TikTok, and gaming intensifies for attention share.",
      watchSignals: [
        "Subscriber growth decelerating below 10% YoY",
        "Content cost inflation outpacing revenue growth",
        "Ad tier cannibalization of premium subscriptions",
        "Warner Bros. integration execution risk ($5B+ deal)",
        "Regulatory pressure on content market dominance",
      ],
    },
    verdict: [
      "Netflix delivered a strong FY2025 with $45.2B revenue (+16%) and 29.5% operating margin. The ad-supported tier is the fastest-growing revenue stream at $1.5B+, validating the strategy shift.",
      "The Warner Bros. acquisition is transformative — adding HBO, DC, and Harry Potter IP. But integration risk is real at this scale. The combined content library creates an unmatched moat if executed well.",
      "At ~40x forward earnings, the market is pricing in continued execution. The key question: can Netflix maintain 15%+ revenue growth while expanding margins to 31.5%+ in 2026?",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 31600, revenueGrowth: "+6%", type: "actual" },
      { name: "FY2023", revenue: 33700, revenueGrowth: "+7%", type: "actual" },
      { name: "FY2024", revenue: 39000, revenueGrowth: "+16%", type: "actual" },
      { name: "FY2025", revenue: 45200, revenueGrowth: "+16%", type: "actual" },
      { name: "FY2026E", revenue: 51000, revenueGrowth: "+13%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2025", revenue: 10540, growth: "+13%", type: "actual" },
      { name: "Q2 2025", revenue: 10960, growth: "+15%", type: "actual" },
      { name: "Q3 2025", revenue: 11650, growth: "+17%", type: "actual" },
      { name: "Q4 2025", revenue: 12050, growth: "+18%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2026E revenue ($M)",
    quarterlySubtitle: "FY2025 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2023", netIncome: 5400, ebitdaMargin: 25, grossMargin: 40.5 },
      { name: "FY2024", netIncome: 7900, ebitdaMargin: 28.5, grossMargin: 42.8 },
      { name: "FY2025", netIncome: 10200, ebitdaMargin: 29.5, grossMargin: 44.2 },
      { name: "FY2026E", netIncome: 12500, ebitdaMargin: 31.5, grossMargin: 46.0 },
    ],
    quarterly: [
      { name: "Q1 2025", netIncome: 2370, ebitdaMargin: 27 },
      { name: "Q2 2025", netIncome: 2450, ebitdaMargin: 28 },
      { name: "Q3 2025", netIncome: 2680, ebitdaMargin: 30 },
      { name: "Q4 2025", netIncome: 2700, ebitdaMargin: 33 },
    ],
    footnotes: [
      { label: "FY2026E Operating Margin Target:", value: "31.5%", note: "+2pts expansion YoY" },
      { label: "FY2025 Free Cash Flow:", value: "~$8B", note: "Strong cash generation supporting buybacks" },
    ],
  },
  keyMetrics: [
    { label: "Operating Margin", value: "29.5%", sub: "FY2025 — up from 26.7% in FY2024. Targeting 31.5% in 2026.", accent: "success" },
    { label: "Ad Revenue", value: "$1.5B+", sub: "Ad tier revenue grew 2.5x YoY — fastest growing segment", accent: "success" },
    { label: "Free Cash Flow", value: "~$8B", sub: "Strong cash generation enabling buybacks and acquisitions", accent: "blue" },
    { label: "Content Spend", value: "$17B", sub: "FY2025 content amortization — disciplined spend growth", accent: "amber" },
    { label: "Paid Members", value: "325M", sub: "Crossed 325M milestone in Q4 2025, +16% YoY", accent: "success" },
  ],
  marketPenetration: {
    tam: { percentage: "~20%", market: "~1.6B broadband households", description: "325M paid members out of ~1.6B global broadband households. Significant room for growth in Asia-Pacific, Africa, and ad-tier conversions." },
    enterprise: {
      items: [
        { label: "Markets Available", value: 90, display: "190+" },
        { label: "Ad Tier Countries", value: 60, display: "12" },
      ],
      description: "Ad tier launched in 12 markets — significant expansion opportunity as more countries onboard.",
    },
    upsell: {
      description: "Massive opportunity to convert ad-tier users to premium and expand ad revenue per user.",
      tiers: [
        { label: "Ad-supported", detail: "~60M members on ad tier" },
        { label: "Standard", detail: "~180M members" },
        { label: "Premium", detail: "~85M members at highest ARPU" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global Broadband HH", value: "1.6B", width: 100, accent: "bg-chart-blue" },
        { label: "Netflix Members", value: "325M", width: 55, accent: "bg-chart-amber" },
        { label: "Premium Tier", value: "~85M", width: 20, accent: "bg-success" },
        { label: "Ad Tier", value: "~60M", width: 15, accent: "bg-danger" },
      ],
      description: "~20% global broadband penetration. Ad tier is the fastest-growing segment, enabling low-price market entry.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 74_200_000, marketValue: 72_900_000_000, pct: 8.2, type: "Index Fund", filed: "2025-12-31" },
      { name: "BlackRock", shares: 60_100_000, marketValue: 59_050_000_000, pct: 6.6, type: "Index Fund", filed: "2025-12-31" },
      { name: "State Street", shares: 32_500_000, marketValue: 31_940_000_000, pct: 3.6, type: "Index Fund", filed: "2025-12-31" },
      { name: "FMR LLC (Fidelity)", shares: 28_800_000, marketValue: 28_300_000_000, pct: 3.2, type: "Investment Advisor", filed: "2025-12-31" },
      { name: "Capital Research", shares: 24_500_000, marketValue: 24_080_000_000, pct: 2.7, type: "Investment Advisor", filed: "2025-12-31" },
      { name: "T. Rowe Price", shares: 18_200_000, marketValue: 17_890_000_000, pct: 2.0, type: "Investment Advisor", filed: "2025-12-31" },
      { name: "Reed Hastings", shares: 3_200_000, marketValue: 3_144_000_000, pct: 0.35, type: "Individual/Founder", filed: "2025-12-31" },
      { name: "Ted Sarandos", shares: 1_100_000, marketValue: 1_081_000_000, pct: 0.12, type: "Individual/CEO", filed: "2025-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Vanguard Group", sub: "8.2%" },
      { label: "Institutional Ownership", value: "~80%" },
      { label: "Insider Ownership", value: "<1%" },
    ],
  },
  customerRetention: {
    ndr: { value: "N/A", description: "Netflix reports subscriber churn rather than NDR. Monthly churn remains below 2.5% — industry-leading retention driven by content breadth." },
    regional: [
      { name: "UCAN", value: 16200, fill: "hsl(var(--chart-blue))" },
      { name: "EMEA", value: 12800, fill: "hsl(var(--success))" },
      { name: "APAC", value: 9500, fill: "hsl(var(--chart-amber))" },
      { name: "LATAM", value: 6700, fill: "hsl(var(--danger))" },
    ],
    tier10k: [
      { year: "2023", value: 260, type: "actual" },
      { year: "2024", value: 301, type: "actual" },
      { year: "2025", value: 325, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Subscriber count in millions. UCAN = US + Canada. Revenue distribution by region in $M.",
    tier10kTitle: "Paid Memberships (M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2026 Revenue", value: "$51B", details: ["~+13% YoY growth", "Accelerating ad revenue contribution"], accent: "success" },
      { title: "FY2026 Op. Margin", value: "31.5%", details: ["+2pts expansion vs FY2025", "Driven by scale and ad mix"], accent: "success" },
      { title: "Warner Bros. Close", value: "H2 2026", details: ["Pending regulatory approval", "~$5B+ deal value"], accent: "blue" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 982.50,
    emas: [
      { label: "50 EMA", value: 935.20 },
      { label: "200 EMA", value: 780.40 },
    ],
    rsi: 62.3,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"We\'re focused on building the world\'s best entertainment platform. Our goal is to be the first choice for entertainment — not just in streaming, but across all forms of storytelling."',
      author: "Ted Sarandos, Co-CEO",
    },
    insights: [
      { title: "Ad tier inflection", text: "Ad revenue hit $1.5B+ in 2025, growing 2.5x YoY. This high-margin stream could contribute 10%+ of revenue by 2027.", color: "success" },
      { title: "Warner Bros. acquisition", text: "Transformative deal adding HBO, DC Universe, and Harry Potter IP — but integration risk is significant.", color: "blue" },
      { title: "Content cost discipline", text: "$17B content spend is growing slower than revenue — key to margin expansion thesis.", color: "amber" },
      { title: "Live events & gaming", text: "NFL, WWE, and gaming expanding Netflix beyond scripted content. New monetization vectors.", color: "success" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Goldman Sachs", rating: "Buy", target: "$1,100", sentiment: "bullish" },
      { firm: "JP Morgan", rating: "Overweight", target: "$1,050", sentiment: "bullish" },
      { firm: "Morgan Stanley", rating: "Equal Weight", target: "$950", sentiment: "neutral", note: "Valuation stretched" },
    ],
    meanTarget: "$1,050",
    currentPrice: "$982",
    upside: "+7% upside",
  },
  news: [
    { headline: "Netflix crosses 325M paid memberships, beats Q4 2025 revenue estimates", source: "Netflix", tag: "Earnings", date: "Jan 20, 2026", url: "https://ir.netflix.com" },
    { headline: "Netflix announces Warner Bros. Discovery acquisition for streaming dominance", source: "Reuters", tag: "M&A", date: "Jan 15, 2026", url: "https://www.reuters.com" },
    { headline: "Netflix ad tier surpasses $1.5B in annual revenue", source: "Bloomberg", date: "Jan 10, 2026", url: "https://www.bloomberg.com" },
    { headline: "Netflix expands live sports with NFL and WWE deal extensions", source: "CNBC", date: "Dec 18, 2025", url: "https://www.cnbc.com" },
    { headline: "Netflix gaming downloads surpass 100M, signaling platform expansion", source: "TechCrunch", date: "Dec 5, 2025", url: "https://techcrunch.com" },
  ],
};
