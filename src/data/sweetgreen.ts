import type { CompanyData } from "./types";

export const sweetgreenData: CompanyData = {
  name: "Sweetgreen",
  ticker: "SG",
  exchange: "NYSE",
  slug: "sweetgreen",
  color: "hsl(140, 60%, 40%)",
  industry: "Consumer Discretionary",
  sector: "Restaurants",
  quarter: "Q4 2025",
  earningsDate: "2026-03-06",
  lastUpdated: "March 6, 2026",
  kpis: [
    { title: "Q4 Revenue", value: "$173M", change: "+23% YoY", positive: true },
    { title: "Same-Store Sales", value: "+7%", change: "vs +4% prior Q", positive: true },
    { title: "Restaurant Count", value: "236", change: "+30 net new in FY2025", positive: true },
    { title: "FY2025 Revenue", value: "$660M", change: "+21% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Sweetgreen is a fast-casual restaurant chain focused on healthy, real food at scale. The company is investing in automation (Infinite Kitchen) to drive labor efficiency and margin expansion while accelerating unit growth. Still early innings with 236 locations vs. 3,000+ TAM.",
      bullets: [
        "Revenue growing 21%+ YoY driven by unit expansion and same-store sales growth",
        "Infinite Kitchen automation reducing labor costs and improving throughput",
        "Long runway — 236 restaurants today vs. 3,000+ potential US locations",
        "Restaurant-level margins improving as automation scales",
        "Healthy eating secular trend — brand resonates with younger demographics",
      ],
      whatMustGoRight: "Unit economics must continue improving with Infinite Kitchen rollout. Same-store sales growth must hold as macro pressures consumer spending. Path to GAAP profitability must become clearer as scale builds.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "You overpay for a pre-profit restaurant chain during a consumer slowdown. Infinite Kitchen capex is front-loaded with uncertain payback. Competition from Chipotle, Cava, and others intensifies.",
      watchSignals: [
        "Same-store sales growth turns negative",
        "Infinite Kitchen rollout delays or cost overruns",
        "Restaurant-level margins stop improving",
        "Consumer discretionary spending weakens materially",
        "Management dilutes shareholders with continued stock-based compensation",
      ],
    },
    verdict: [
      "Sweetgreen is a high-conviction early-stage growth story in fast casual dining. The Infinite Kitchen automation technology is a genuine differentiator that could drive industry-leading unit economics over time.",
      "At current valuation, the stock prices in significant future growth. The thesis depends on successful automation rollout, continued unit expansion, and eventual GAAP profitability. Position sized accordingly as a speculative growth holding.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 410, revenueGrowth: "+24%", type: "actual" },
      { name: "FY2023", revenue: 490, revenueGrowth: "+20%", type: "actual" },
      { name: "FY2024", revenue: 545, revenueGrowth: "+11%", type: "actual" },
      { name: "FY2025", revenue: 660, revenueGrowth: "+21%", type: "actual" },
      { name: "FY2026E", revenue: 800, revenueGrowth: "+21%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2025", revenue: 155, growth: "+18%", type: "actual" },
      { name: "Q2 2025", revenue: 170, growth: "+20%", type: "actual" },
      { name: "Q3 2025", revenue: 162, growth: "+22%", type: "actual" },
      { name: "Q4 2025", revenue: 173, growth: "+23%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2026E revenue ($M)",
    quarterlySubtitle: "FY2025 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2023", netIncome: -120, ebitdaMargin: -8, grossMargin: 25 },
      { name: "FY2024", netIncome: -80, ebitdaMargin: -3, grossMargin: 27 },
      { name: "FY2025", netIncome: -45, ebitdaMargin: 1, grossMargin: 29 },
      { name: "FY2026E", netIncome: -10, ebitdaMargin: 4, grossMargin: 31 },
    ],
    quarterly: [
      { name: "Q1 2025", netIncome: -15, ebitdaMargin: -2 },
      { name: "Q2 2025", netIncome: -10, ebitdaMargin: 1 },
      { name: "Q3 2025", netIncome: -12, ebitdaMargin: 0 },
      { name: "Q4 2025", netIncome: -8, ebitdaMargin: 3 },
    ],
    footnotes: [
      { label: "Restaurant-Level Margin:", value: "~20%", note: "Improving with Infinite Kitchen automation" },
      { label: "Path to Profitability:", value: "FY2026–2027", note: "Targeting adjusted EBITDA positive" },
    ],
  },
  keyMetrics: [
    { label: "Restaurant Count", value: "236", sub: "Added 30 net new in FY2025. Long-term target of 3,000+ US locations.", accent: "success" },
    { label: "Same-Store Sales", value: "+7%", sub: "Q4 2025 — driven by menu innovation and digital ordering growth.", accent: "success" },
    { label: "Restaurant-Level Margin", value: "~20%", sub: "Improving with Infinite Kitchen — target 25%+ at maturity.", accent: "blue" },
    { label: "Digital Mix", value: "~65%", sub: "Digital ordering as % of revenue — industry-leading engagement.", accent: "success" },
    { label: "Infinite Kitchen", value: "12 locations", sub: "Automated makeline reducing labor by ~30%. Accelerating rollout in 2026.", accent: "blue" },
  ],
  marketPenetration: {
    tam: { percentage: "<1%", market: "~$60B US fast-casual market", description: "Sweetgreen has 236 locations in a US fast-casual market with room for 3,000+ units. Minimal penetration today." },
    enterprise: {
      items: [
        { label: "Current Locations", value: 8, display: "236" },
        { label: "TAM Locations", value: 100, display: "3,000+" },
      ],
      description: "Less than 8% penetrated against long-term US location target.",
    },
    upsell: {
      description: "Expanding menu, catering, and loyalty program drive higher average check and frequency.",
      tiers: [
        { label: "Digital Orders", detail: "~65% of revenue — high engagement" },
        { label: "Loyalty Members", detail: "Growing — drives repeat visits" },
        { label: "Catering", detail: "Early-stage revenue stream" },
      ],
    },
    funnel: {
      steps: [
        { label: "US Fast-Casual TAM", value: "$60B+", width: 100, accent: "bg-chart-blue" },
        { label: "Sweetgreen Revenue", value: "$660M", width: 12, accent: "bg-chart-amber" },
        { label: "Digital Revenue", value: "~$430M", width: 8, accent: "bg-success" },
      ],
      description: "Tiny share of the US fast-casual market with a long unit growth runway.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Fidelity", shares: 15_000_000, marketValue: 82_000_000, pct: 12.5, type: "Investment Advisor", filed: "2025-12-31" },
      { name: "Vanguard Group", shares: 8_500_000, marketValue: 46_500_000, pct: 7.1, type: "Index Fund", filed: "2025-12-31" },
      { name: "BlackRock", shares: 7_200_000, marketValue: 39_400_000, pct: 6.0, type: "Index Fund", filed: "2025-12-31" },
      { name: "Jonathan Neman (CEO)", shares: 5_000_000, marketValue: 27_350_000, pct: 4.2, type: "Individual/CEO", filed: "2025-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Fidelity", sub: "12.5%" },
      { label: "Institutional Ownership", value: "~70%" },
      { label: "Insider Ownership", value: "~8%" },
    ],
  },
  customerRetention: {
    ndr: { value: "N/A", description: "Restaurant business — measured by same-store sales growth rather than NDR. SSS +7% in Q4 2025." },
    regional: [
      { name: "Northeast", value: 250, fill: "hsl(var(--chart-blue))" },
      { name: "West Coast", value: 200, fill: "hsl(var(--success))" },
      { name: "Southeast", value: 120, fill: "hsl(var(--chart-amber))" },
      { name: "Midwest", value: 90, fill: "hsl(var(--danger))" },
    ],
    tier10k: [
      { year: "2023", value: 195, type: "actual" },
      { year: "2024", value: 206, type: "actual" },
      { year: "2025", value: 236, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by region ($M). Restaurant count used as growth proxy.",
    tier10kTitle: "Restaurant Count",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2026 Revenue", value: "$790–810M", details: ["+20% YoY at midpoint", "30+ net new restaurant openings"], accent: "success" },
      { title: "FY2026 Adj. EBITDA", value: "Positive", details: ["Targeting first full-year EBITDA positive", "Infinite Kitchen driving margin expansion"], accent: "blue" },
      { title: "Infinite Kitchen Rollout", value: "25+ locations", details: ["Doubling automated locations in 2026", "Targeting all new builds with automation"], accent: "blue" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 5.47,
    emas: [
      { label: "50 EMA", value: 6.80 },
      { label: "200 EMA", value: 9.20 },
    ],
    rsi: 32.1,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"We believe Sweetgreen can be a generational company. Infinite Kitchen is not just about efficiency — it\'s about consistently delivering a better guest experience at scale."',
      author: "Jonathan Neman, CEO",
    },
    insights: [
      { title: "Infinite Kitchen — the moat builder", text: "Automated makeline technology reduces labor costs ~30% and improves consistency. If successfully scaled, this creates a structural cost advantage vs. peers.", color: "success" },
      { title: "Consumer spending risk", text: "As a premium fast-casual brand ($14+ average check), Sweetgreen is vulnerable to consumer trade-down in a recession. Same-store sales could turn negative.", color: "danger" },
      { title: "Unit growth acceleration", text: "30+ net new openings in FY2025 with plans to accelerate. New markets like Texas and Florida showing strong performance.", color: "blue" },
      { title: "Stock-based compensation", text: "SBC remains elevated as a percentage of revenue, diluting existing shareholders. Must decline as the company scales toward profitability.", color: "amber" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Piper Sandler", rating: "Overweight", target: "$12", sentiment: "bullish", note: "Infinite Kitchen a game-changer for unit economics" },
      { firm: "Morgan Stanley", rating: "Equal Weight", target: "$8", sentiment: "neutral", note: "Valuation demanding for pre-profit restaurant chain" },
    ],
    meanTarget: "$10",
    currentPrice: "$5.47",
    upside: "+83% upside",
  },
  news: [
    { headline: "Sweetgreen reports Q4 revenue of $173M, up 23% YoY with improving margins", source: "Sweetgreen IR", tag: "Earnings", date: "Mar 6, 2026", url: "https://www.sweetgreen.com" },
    { headline: "Infinite Kitchen technology expands to 12 locations — all new builds to include automation", source: "Bloomberg", tag: "Technology", date: "Feb 2026", url: "https://www.bloomberg.com" },
    { headline: "Sweetgreen accelerates Southeast expansion with 8 new Texas locations planned", source: "Nation's Restaurant News", tag: "Growth", date: "Jan 2026", url: "https://www.nrn.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "SG", quantity: 2500, avgPrice: 5.47, currentPrice: 5.47 },
    ],
  },
};
