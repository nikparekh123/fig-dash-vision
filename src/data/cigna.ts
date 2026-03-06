import type { CompanyData } from "./types";

export const cignaData: CompanyData = {
  name: "The Cigna Group",
  ticker: "CI",
  exchange: "NYSE",
  slug: "cigna",
  color: "hsl(210, 75%, 40%)",
  quarter: "Q4 2024",
  lastUpdated: "January 30, 2025",
  kpis: [
    { title: "Q4 Revenue", value: "$66.8B", change: "+27% YoY", positive: true },
    { title: "Adjusted EPS", value: "$7.73", change: "Beat $7.45 est.", positive: true, subtitle: "+4%" },
    { title: "Net Income", value: "$1.2B", change: "Q4 2024", positive: true },
    { title: "FY2024 Revenue", value: "$247.1B", change: "+27% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Cigna is a diversified healthcare services company with a dominant PBM (pharmacy benefit manager) business through Evernorth. The Evernorth segment drives growth and creates recurring, high-volume revenue.",
      bullets: [
        "27% revenue growth to $247.1B driven by Evernorth Health Services",
        "Adjusted EPS of $28.81 for FY2024 — strong cash earnings",
        "Aggressive $10B+ buyback program — significant capital return",
        "Healthcare services model provides recession-resistant revenue",
      ],
      whatMustGoRight: "PBM regulatory scrutiny must remain manageable. Evernorth must maintain client retention. Medical cost trends (MLR) must stay within guidance range.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "PBM business faces increasing regulatory scrutiny and pricing pressure. Medical loss ratios could expand if healthcare utilization surges. The massive revenue number masks thin margins.",
      watchSignals: [
        "PBM regulation tightening (FTC investigation ongoing)",
        "Medical loss ratio expanding above 85%",
        "Client losses in Evernorth segment",
        "Generic drug pricing pressure accelerating",
        "Integration challenges from acquisitions",
      ],
    },
    verdict: [
      "Cigna's headline revenue of $247.1B is enormous but misleading — the vast majority flows through Evernorth's PBM business as pass-through drug costs. The actual margin profile is thin: net income of $3.4B on $247B revenue is a 1.4% net margin.",
      "The investment thesis rests on Evernorth's scale advantages and Cigna Healthcare's stable insurance earnings. The $10B+ buyback program is aggressively returning capital, shrinking share count and boosting EPS.",
      "Key risk: PBM regulation. The FTC is actively investigating PBM practices, and Congress has proposed legislation that could fundamentally alter the business model. Investors need conviction that Cigna's diversified model can weather regulatory headwinds.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 180600, revenueGrowth: "+4%", type: "actual" },
      { name: "FY2023", revenue: 195300, revenueGrowth: "+8%", type: "actual" },
      { name: "FY2024", revenue: 247100, revenueGrowth: "+27%", type: "actual" },
      { name: "FY2025E", revenue: 260000, revenueGrowth: "+5%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q1 2024", revenue: 57300, growth: "+25%", type: "actual" },
      { name: "Q2 2024", revenue: 60400, growth: "+26%", type: "actual" },
      { name: "Q3 2024", revenue: 62600, growth: "+28%", type: "actual" },
      { name: "Q4 2024", revenue: 66800, growth: "+27%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2025E revenue ($M)",
    quarterlySubtitle: "FY2024 quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2022", netIncome: 6700, ebitdaMargin: 5.8, grossMargin: 12.5 },
      { name: "FY2023", netIncome: 5200, ebitdaMargin: 4.9, grossMargin: 11.8 },
      { name: "FY2024", netIncome: 3400, ebitdaMargin: 4.2, grossMargin: 10.9 },
      { name: "FY2025E", netIncome: 5500, ebitdaMargin: 4.8, grossMargin: 11.2 },
    ],
    quarterly: [
      { name: "Q1 2024", netIncome: 1200, ebitdaMargin: 4.5 },
      { name: "Q2 2024", netIncome: 800, ebitdaMargin: 3.8 },
      { name: "Q3 2024", netIncome: 200, ebitdaMargin: 2.1 },
      { name: "Q4 2024", netIncome: 1200, ebitdaMargin: 4.6 },
    ],
    footnotes: [
      { label: "FY2024 Adjusted EPS:", value: "$28.81", note: "Strong adjusted earnings despite GAAP net income decline" },
      { label: "FY2025 EPS Guidance:", value: "$29.50+", note: "Targeting continued adjusted EPS growth" },
    ],
  },
  keyMetrics: [
    { label: "Adjusted EPS", value: "$28.81", sub: "FY2024 — strong cash earnings power despite lower GAAP income", accent: "success" },
    { label: "Net Margin", value: "1.4%", sub: "Thin margins reflect PBM pass-through revenue model", accent: "amber", monitor: true },
    { label: "Share Buybacks", value: "$10B+", sub: "Aggressive capital return program — shrinking float rapidly", accent: "blue" },
    { label: "Medical Loss Ratio", value: "82.1%", sub: "Within target range. Rising utilization is a key risk to monitor.", accent: "amber", monitor: true },
    { label: "Evernorth Revenue", value: "$197B", sub: "80% of total revenue — the engine of Cigna's business", accent: "success" },
  ],
  marketPenetration: {
    tam: { percentage: "~6%", market: "$4.3T US healthcare", description: "$247B revenue in a $4.3T US healthcare market. Growth driven by PBM market share gains and healthcare services expansion." },
    enterprise: {
      items: [
        { label: "Covered Lives", value: 75, display: "190M+" },
        { label: "Employer Clients", value: 85, display: "Fortune 500 coverage" },
      ],
      description: "Evernorth serves 190M+ covered lives through its PBM and specialty pharmacy services.",
    },
    upsell: {
      description: "Cross-selling healthcare and PBM services to existing clients. Behavioral health and specialty pharmacy are growth vectors.",
      tiers: [
        { label: "Evernorth (PBM)", detail: "$197B revenue — pharmacy benefits" },
        { label: "Cigna Healthcare", detail: "$50B revenue — insurance & services" },
        { label: "Specialty Pharmacy", detail: "High-growth, high-margin segment" },
      ],
    },
    funnel: {
      steps: [
        { label: "US Insured Population", value: "300M+", width: 100, accent: "bg-chart-blue" },
        { label: "Covered Lives", value: "190M+", width: 63, accent: "bg-chart-amber" },
        { label: "Cigna Healthcare Members", value: "19.8M", width: 12, accent: "bg-success" },
        { label: "Specialty Pharmacy", value: "Growing", width: 8, accent: "bg-danger" },
      ],
      description: "Evernorth's PBM reach (190M+ lives) far exceeds Cigna Healthcare's direct insurance membership (19.8M) — creating massive cross-sell opportunity.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 25_800_000, marketValue: 7_200_000_000, pct: 9.8, type: "Index Fund", filed: "2024-12-31" },
      { name: "BlackRock", shares: 20_500_000, marketValue: 5_720_000_000, pct: 7.8, type: "Index Fund", filed: "2024-12-31" },
      { name: "State Street", shares: 12_200_000, marketValue: 3_403_000_000, pct: 4.6, type: "Index Fund", filed: "2024-12-31" },
      { name: "Capital Research", shares: 10_800_000, marketValue: 3_013_000_000, pct: 4.1, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "T. Rowe Price", shares: 8_900_000, marketValue: 2_483_000_000, pct: 3.4, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "Wellington Mgmt", shares: 7_500_000, marketValue: 2_092_000_000, pct: 2.8, type: "Investment Advisor", filed: "2024-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Vanguard Group", sub: "9.8%" },
      { label: "Institutional Ownership", value: "~87%" },
      { label: "Insider Ownership", value: "<1%" },
    ],
  },
  customerRetention: {
    ndr: { value: "95%+", description: "Client retention rate across Evernorth and Cigna Healthcare segments remains above 95%, reflecting deep integration with employer benefit systems." },
    regional: [
      { name: "Evernorth", value: 197000, fill: "hsl(var(--chart-blue))" },
      { name: "Cigna Healthcare", value: 50100, fill: "hsl(var(--success))" },
    ],
    tier10k: [
      { year: "2022", value: 180600, type: "actual" },
      { year: "2023", value: 195300, type: "actual" },
      { year: "2024", value: 247100, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by segment ($M). Evernorth includes PBM pass-through drug costs.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2025 Adjusted EPS", value: "$29.50+", details: ["Growth driven by buybacks and Evernorth scale", "Adjusted income from operations growth of 5%+"], accent: "success" },
      { title: "FY2025 Revenue", value: "$260B+", details: ["Continued Evernorth growth", "Stable Cigna Healthcare membership"], accent: "blue" },
      { title: "Capital Return", value: "$10B+", details: ["Share repurchases + dividends", "Increased quarterly dividend"], accent: "success" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 269.97,
    emas: [
      { label: "50 EMA", value: 285.40 },
      { label: "200 EMA", value: 310.20 },
    ],
    rsi: 38.2,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"Our diversified portfolio of businesses positions us well for long-term growth. Evernorth continues to be a growth engine, and our healthcare services model provides stability and scale."',
      author: "David Cordani, CEO",
    },
    insights: [
      { title: "PBM dominance", text: "Evernorth is one of the three largest PBMs in the US, processing billions of prescriptions annually. Scale creates pricing power.", color: "success" },
      { title: "Regulatory overhang", text: "FTC investigation into PBM practices could lead to structural changes in drug pricing. Legislation risk is real.", color: "danger" },
      { title: "Buyback machine", text: "$10B+ annual buyback program is shrinking float rapidly — a key EPS growth driver independent of revenue growth.", color: "blue" },
      { title: "MLR pressure", text: "Rising healthcare utilization post-COVID is pushing medical loss ratios higher. Must stay within 82-84% range.", color: "amber" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Barclays", rating: "Overweight", target: "$380", sentiment: "bullish" },
      { firm: "UBS", rating: "Buy", target: "$365", sentiment: "bullish" },
      { firm: "Jefferies", rating: "Hold", target: "$310", sentiment: "neutral", note: "PBM headwinds" },
    ],
    meanTarget: "$352",
    currentPrice: "$270",
    upside: "+30% upside",
  },
  news: [
    { headline: "Cigna reports FY2024 revenue of $247.1B, up 27% YoY driven by Evernorth growth", source: "Cigna", tag: "Earnings", date: "Jan 30, 2025", url: "https://newsroom.thecignagroup.com" },
    { headline: "FTC continues investigation into PBM pricing practices", source: "Reuters", date: "Jan 15, 2025", url: "https://www.reuters.com" },
    { headline: "Cigna increases quarterly dividend and announces $10B buyback expansion", source: "Cigna", date: "Jan 10, 2025", url: "https://newsroom.thecignagroup.com" },
    { headline: "Evernorth Health Services wins new large employer PBM contracts", source: "Bloomberg", date: "Dec 20, 2024", url: "https://www.bloomberg.com" },
    { headline: "Cigna Healthcare expands virtual care offerings across all plan types", source: "CNBC", date: "Dec 5, 2024", url: "https://www.cnbc.com" },
  ],
};
