import type { CompanyData } from "./types";
import nikeLogo from "@/assets/logos/nike.png";

export const nikeData: CompanyData = {
  name: "Nike",
  ticker: "NKE",
  exchange: "NYSE",
  slug: "nike",
  color: "hsl(0, 0%, 10%)",
  logo: nikeLogo,
  industry: "Consumer Discretionary",
  sector: "Footwear & Apparel",
  quarter: "Q3 FY2026",
  earningsDate: "2026-04-01",
  lastUpdated: "April 1, 2026",
  kpis: [
    { title: "Q3 FY2026 Revenue", value: "$11.3B", change: "Flat YoY (reported)", positive: false },
    { title: "Diluted EPS", value: "$0.35", change: "-35% YoY", positive: false, subtitle: "Includes $230M severance charges" },
    { title: "Gross Margin", value: "40.2%", change: "-130bps YoY", positive: false },
    { title: "Nike Direct Revenue", value: "Down 7%", change: "Digital -9%, Stores -5%", positive: false },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Nike is the world's most iconic athletic brand executing a multi-quarter turnaround under CEO Elliott Hill. Running is up 20%+, innovation is back (Nike Mind sold out globally), and wholesale partnerships are accelerating — especially in North America.",
      bullets: [
        "World's #1 athletic brand — $35.4B 9-month revenue with global scale across 190+ countries",
        "Running up 20%+ in Q3 — proof the 'sport offense' strategy is working",
        "Nike Mind platform sold out in all geographies — 2M+ consumers on waitlist, production doubled",
        "North America wholesale grew 11% — shelf space being reclaimed from competitors",
        "Investor Day planned for Fall 2026 to share long-term vision at Knight Campus",
        "Win Now actions expected to complete by end of calendar year 2026",
      ],
      whatMustGoRight: "Sportswear turnaround must follow running's success. Greater China cleanup (Q4 guided -20%) must lead to healthier growth. Tariff headwinds (~300bps gross margin impact) must be mitigated. Innovation pipeline must scale beyond initial sell-outs.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Nike's turnaround is 'taking longer than we'd like' per management. Sportswear declined double-digits, Greater China is being intentionally managed down, and $230M in severance charges signal the cost reset isn't done. EMEA marketplace is highly promotional.",
      watchSignals: [
        "Sportswear still declining double-digits — largest portfolio segment dragging results",
        "Greater China guided -20% in Q4 — structural marketplace cleanup ongoing",
        "EMEA decoupling from North America recovery — sell-through below expectations",
        "Gross margin under pressure: 300bps tariff hit in North America",
        "Converse revenue down 35% — brand still in early-stage recovery",
        "Digital still 'too promotional' per CFO — full-price realization not yet achieved",
      ],
    },
    verdict: [
      "Nike is in the middle innings of its turnaround under CEO Elliott Hill. Q3 FY2026 revenue was flat at $11.3B on a reported basis (down 3% currency-neutral), with North America (+3%) and wholesale (+11%) leading the recovery while Greater China (-10% CN) and Converse (-35%) weigh on results.",
      "The bull case is strengthening: Running is up 20%+, Nike Mind and Aero-FIT demonstrate innovation is back, and North America drove positive growth across all channels in February for the first time in two years. Wholesale order books are growing and shelf space is being reclaimed.",
      "However, execution is uneven. Sportswear (the largest portfolio segment) declined double-digits, EMEA is lagging, and a $230M severance charge signals more cost restructuring ahead. Management guided Q4 revenue -2% to -4% with gross margin inflection expected in Q2 FY2027. Fall Investor Day will be the key catalyst for re-rating.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2023", revenue: 51217, revenueGrowth: "+10%", type: "actual" },
      { name: "FY2024", revenue: 51362, revenueGrowth: "+0.3%", type: "actual" },
      { name: "FY2025", revenue: 46710, revenueGrowth: "-9%", type: "actual" },
      { name: "FY2026E", revenue: 46800, revenueGrowth: "+0.2%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q4 FY2025", revenue: 11607, growth: "-8%", type: "actual" },
      { name: "Q1 FY2026", revenue: 12355, growth: "+7%", type: "actual" },
      { name: "Q2 FY2026", revenue: 11792, growth: "-5%", type: "actual" },
      { name: "Q3 FY2026", revenue: 11279, growth: "0%", type: "actual" },
    ],
    yearlySubtitle: "FY2023–FY2026E revenue ($M)",
    quarterlySubtitle: "Recent quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2023", netIncome: 5140, ebitdaMargin: 15.8, grossMargin: 44.6 },
      { name: "FY2024", netIncome: 5698, ebitdaMargin: 16.5, grossMargin: 44.6 },
      { name: "FY2025", netIncome: 3008, ebitdaMargin: 12.0, grossMargin: 43.0 },
      { name: "FY2026E", netIncome: 2600, ebitdaMargin: 10.5, grossMargin: 41.0 },
    ],
    quarterly: [
      { name: "Q4 FY2025", netIncome: 794, ebitdaMargin: 11.8 },
      { name: "Q1 FY2026", netIncome: 794, ebitdaMargin: 12.5 },
      { name: "Q2 FY2026", netIncome: 725, ebitdaMargin: 11.0 },
      { name: "Q3 FY2026", netIncome: 520, ebitdaMargin: 5.6 },
    ],
    footnotes: [
      { label: "Q3 FY2026 EPS:", value: "$0.35", note: "Down 35% YoY — includes $230M employee severance charges" },
      { label: "Gross Margin:", value: "40.2%", note: "Down 130bps YoY reported — 300bps headwind from US tariffs" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin", value: "40.2%", sub: "Q3 FY2026 — down 130bps YoY reported. ~300bps impact from US tariffs. Inflection expected Q2 FY2027.", accent: "amber", monitor: true },
    { label: "Nike Running", value: "+20%", sub: "Running up 20%+ in Q3 — leading the sport offense. Proof point that turnaround strategy works.", accent: "success" },
    { label: "Wholesale", value: "+11% NA", sub: "North America wholesale grew 11%. Order books growing, shelf space being reclaimed from competitors.", accent: "success" },
    { label: "Inventory", value: "$7.5B", sub: "Down 1% YoY, units down mid-single-digits. Closeout units low and mix healthy in North America.", accent: "blue" },
    { label: "Sportswear", value: "Down DD", sub: "Sportswear declined double-digits — largest portfolio segment still a headwind. City offense being deployed.", accent: "amber", monitor: true },
    { label: "Greater China", value: "-10% CN", sub: "Intentionally managed down. Guided -20% in Q4. New leadership, marketplace cleanup through FY2027.", accent: "amber", monitor: true },
  ],
  marketPenetration: {
    tam: { percentage: "~12%", market: "$400B global athletic footwear & apparel", description: "Nike is the clear market leader. Running and football gaining share; sportswear losing ground to competitors." },
    enterprise: {
      items: [
        { label: "Countries", value: 95, display: "190+" },
        { label: "Brand Awareness", value: 99, display: "#1 Global" },
      ],
      description: "Nike operates in 190+ countries. North America leads the recovery; EMEA and Greater China still working through marketplace cleanup.",
    },
    upsell: {
      description: "Sport offense driving growth in running (+20%), football, and basketball. Innovation platforms (Nike Mind, Aero-FIT) scaling across sports and price points.",
      tiers: [
        { label: "Footwear", detail: "$7.4B Q3 revenue — running and football accelerating" },
        { label: "Apparel", detail: "$3.2B Q3 revenue — Aero-FIT expanding to multiple sports" },
        { label: "Equipment", detail: "$468M Q3 revenue — stable across geographies" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global Athletic Market", value: "$400B+", width: 100, accent: "bg-chart-blue" },
        { label: "Nike Inc Revenue (9mo)", value: "$35.4B", width: 30, accent: "bg-chart-amber" },
        { label: "North America", value: "$5.0B Q3", width: 15, accent: "bg-success" },
        { label: "Greater China", value: "$1.6B Q3", width: 5, accent: "bg-danger" },
      ],
      description: "Nike's $35.4B 9-month revenue. North America leads recovery at +3% while Greater China undergoes intentional marketplace cleanup at -10%.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 112_000_000, marketValue: 5_936_000_000, pct: 8.5, type: "Index Fund", filed: "2025-12-31" },
      { name: "BlackRock", shares: 95_000_000, marketValue: 5_035_000_000, pct: 7.2, type: "Index Fund", filed: "2025-12-31" },
      { name: "State Street", shares: 52_000_000, marketValue: 2_756_000_000, pct: 3.9, type: "Index Fund", filed: "2025-12-31" },
      { name: "Capital Research", shares: 45_000_000, marketValue: 2_385_000_000, pct: 3.4, type: "Investment Advisor", filed: "2025-12-31" },
      { name: "Phil Knight / Swoosh", shares: 305_000_000, marketValue: 16_165_000_000, pct: 23.1, type: "Insider / Founder", filed: "2025-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Phil Knight / Swoosh", sub: "23.1%" },
      { label: "Institutional Ownership", value: "~65%" },
      { label: "Insider Ownership", value: "~24%" },
    ],
  },
  customerRetention: {
    ndr: { value: "N/A", description: "Nike is a consumer brand — retention measured through repeat purchase rates and membership engagement. Nike membership has 160M+ members globally." },
    regional: [
      { name: "North America", value: 5026, fill: "hsl(var(--chart-blue))" },
      { name: "EMEA", value: 2874, fill: "hsl(var(--success))" },
      { name: "Greater China", value: 1615, fill: "hsl(var(--chart-amber))" },
      { name: "APLA", value: 1490, fill: "hsl(var(--danger))" },
    ],
    tier10k: [
      { year: "2023", value: 51217, type: "actual" },
      { year: "2024", value: 51362, type: "actual" },
      { year: "2025", value: 46710, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by geography ($M, Q3 FY2026). North America +3%, EMEA +2% reported, Greater China -7% reported, APLA +1% reported.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "Q4 FY2026 Revenue", value: "Down 2–4% YoY", details: ["Modest growth in North America", "Greater China down ~20% (marketplace cleanup)", "~2pt FX benefit"], accent: "amber" },
      { title: "Q4 Gross Margin", value: "Down 25–75bps", details: ["Includes ~250bps from US tariffs", "Underlying margin improvement continuing"], accent: "amber" },
      { title: "Calendar Year Outlook", value: "Revenue down low-single-digits", details: ["NA gains offset by China & Converse declines", "Gross margin inflection expected Q2 FY2027", "Earnings expected flattish over next 9 months"], accent: "blue" },
      { title: "Investor Day", value: "Fall 2026", details: ["Knight Campus, Beaverton", "Full long-term guidance to be provided", "Win Now actions expected complete by year-end"], accent: "success" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 53.03,
    emas: [
      { label: "50 EMA", value: 68.50 },
      { label: "100 EMA", value: 72.30 },
      { label: "200 EMA", value: 78.50 },
    ],
    rsi: 32.5,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"We are not simply fixing what needs to be fixed. We are building brand by brand, sport by sport, country by country, partner by partner. We are reshaping our marketplace, rewiring how we operate, and investing in the technology platforms that will help us serve more consumers better."',
      author: "Elliott Hill, President & CEO — Q3 FY2026 Earnings Call",
    },
    insights: [
      { title: "Sport offense working", text: "Running up 20%+, football growing, basketball up high-single-digits. Sport dimensions are proof the strategy works — but they represent less than half the portfolio today.", color: "success" },
      { title: "Innovation breakthrough", text: "Nike Mind (150+ patents, sold out globally, 2M waitlist) and Aero-FIT (200% airflow improvement) are scalable platforms across sports and price points. Production doubling for next two seasons.", color: "success" },
      { title: "Cost restructuring", text: "$230M severance charge in Q3 — supply chain and technology workforce reductions. Shifting from fixed to variable cost structure. Benefits expected FY2027-FY2028.", color: "blue" },
      { title: "EMEA headwinds", text: "EMEA decoupled from NA recovery — sell-through below plan, promotions elevated, Middle East disruption. New regional leader Cesar Garcia (25yr veteran) driving marketplace reset.", color: "amber" },
      { title: "China managed decline", text: "Greater China down 10% CN with Q4 guided -20%. Intentionally reducing sell-in, cleaning digital marketplace, rebuilding brand through sport. Expect headwinds through FY2027.", color: "danger" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Goldman Sachs", rating: "Buy", target: "$75", sentiment: "bullish" },
      { firm: "J.P. Morgan", rating: "Overweight", target: "$72", sentiment: "bullish" },
      { firm: "Bank of America", rating: "Neutral", target: "$65", sentiment: "neutral" },
      { firm: "Barclays", rating: "Equal Weight", target: "$60", sentiment: "neutral", note: "Turnaround taking longer" },
      { firm: "Evercore ISI", rating: "Outperform", target: "$70", sentiment: "bullish" },
    ],
    meanTarget: "$68",
    currentPrice: "$53",
    upside: "+28% upside",
  },
  news: [
    { headline: "Nike reports Q3 FY2026 revenue of $11.3B, flat YoY as turnaround progresses unevenly", source: "Nike", tag: "Earnings", date: "Apr 1, 2026", url: "https://investors.nike.com" },
    { headline: "Nike Mind platform sells out globally — 2M+ consumers on waitlist, production doubled", source: "Nike", tag: "Innovation", date: "Apr 1, 2026", url: "https://investors.nike.com" },
    { headline: "Nike takes $230M severance charge to reset supply chain and technology cost base", source: "Bloomberg", tag: "Restructuring", date: "Apr 1, 2026", url: "https://www.bloomberg.com" },
    { headline: "Nike Running up 20%+ in Q3 — sport offense strategy showing clear results", source: "Nike", tag: "Strategy", date: "Apr 1, 2026", url: "https://investors.nike.com" },
    { headline: "Nike announces Fall 2026 Investor Day at Knight Campus — long-term guidance to come", source: "Nike", tag: "Investor Day", date: "Apr 1, 2026", url: "https://investors.nike.com" },
    { headline: "Greater China guided -20% in Q4 as Nike accelerates marketplace cleanup", source: "Reuters", tag: "China", date: "Apr 1, 2026", url: "https://www.reuters.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "NKE", quantity: 1000, avgPrice: 53.03, currentPrice: 53.03 },
    ],
  },
};
