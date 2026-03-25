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
  quarter: "Q3 FY2025",
  earningsDate: "2025-03-20",
  lastUpdated: "March 20, 2025",
  kpis: [
    { title: "Q3 FY2025 Revenue", value: "$11.3B", change: "-9% YoY", positive: false },
    { title: "Diluted EPS", value: "$0.54", change: "-30% YoY", positive: false, subtitle: "Restructuring costs" },
    { title: "Gross Margin", value: "43.6%", change: "-330bps YoY", positive: false },
    { title: "DTC Revenue", value: "$4.7B", change: "-12% YoY", positive: false },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Nike is the world's most iconic athletic brand with unmatched global distribution, brand equity, and a new CEO (Elliott Hill) driving a back-to-basics turnaround. The stock has been cut in half from highs, pricing in significant pessimism.",
      bullets: [
        "World's #1 athletic brand — $51B annual revenue with global scale across 190+ countries",
        "New CEO Elliott Hill (Nike veteran) executing 'Win Now' turnaround strategy",
        "Rebalancing toward wholesale after over-rotating to DTC under prior leadership",
        "Innovation pipeline: Pegasus Premium, Vomero 18, Air Max Dn driving 'newness'",
        "Trading at multi-year low P/E — significant pessimism already priced in",
        "$4B+ annual share buyback program continues through downturn",
      ],
      whatMustGoRight: "Product innovation must reignite consumer demand. Wholesale partnerships must be rebuilt after years of channel conflict. China recovery must materialize. Margins must stabilize as promotional activity normalizes.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Nike's turnaround could take longer than expected. Brand heat has cooled significantly with Gen Z shifting toward New Balance, On, Hoka, and Asics. The promotional environment is intense and margins may not recover quickly.",
      watchSignals: [
        "Revenue declining more than -10% YoY for multiple quarters",
        "Gross margins failing to stabilize above 43%",
        "China revenue not recovering — macro headwinds persist",
        "Market share losses to New Balance, On Running, Hoka accelerating",
        "Inventory levels remaining elevated, forcing deeper markdowns",
        "CEO turnaround plan taking 3+ years to show results",
      ],
    },
    verdict: [
      "Nike is in the early innings of a turnaround under new CEO Elliott Hill, who rejoined after retiring in 2020. Q3 FY2025 revenue declined 9% YoY to $11.3B, with weakness across all geographies and channels — particularly DTC (-12%).",
      "The bull case rests on Nike's unmatched brand equity, global distribution, and innovation pipeline. Hill is resetting the strategy: pulling back from excessive DTC focus, rebuilding wholesale relationships, and investing in product innovation. Early signs are encouraging but it's very early.",
      "At ~$53/share, Nike trades at a significant discount to historical multiples. The risk/reward is attractive for patient investors who believe the brand's cultural relevance can be restored — but near-term results will likely remain ugly as the turnaround takes hold.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 46710, revenueGrowth: "+5%", type: "actual" },
      { name: "FY2023", revenue: 51217, revenueGrowth: "+10%", type: "actual" },
      { name: "FY2024", revenue: 51362, revenueGrowth: "+0.3%", type: "actual" },
      { name: "FY2025E", revenue: 46200, revenueGrowth: "-10%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q4 FY2024", revenue: 12614, growth: "-2%", type: "actual" },
      { name: "Q1 FY2025", revenue: 11589, growth: "-10%", type: "actual" },
      { name: "Q2 FY2025", revenue: 12355, growth: "-8%", type: "actual" },
      { name: "Q3 FY2025", revenue: 11274, growth: "-9%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2025E revenue ($M)",
    quarterlySubtitle: "Recent quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2022", netIncome: 5140, ebitdaMargin: 16.1, grossMargin: 46.0 },
      { name: "FY2023", netIncome: 5140, ebitdaMargin: 15.8, grossMargin: 44.6 },
      { name: "FY2024", netIncome: 5698, ebitdaMargin: 16.5, grossMargin: 44.6 },
      { name: "FY2025E", netIncome: 3200, ebitdaMargin: 12.0, grossMargin: 43.0 },
    ],
    quarterly: [
      { name: "Q4 FY2024", netIncome: 1503, ebitdaMargin: 17.2 },
      { name: "Q1 FY2025", netIncome: 1051, ebitdaMargin: 13.5 },
      { name: "Q2 FY2025", netIncome: 1160, ebitdaMargin: 14.2 },
      { name: "Q3 FY2025", netIncome: 794, ebitdaMargin: 11.8 },
    ],
    footnotes: [
      { label: "Q3 FY2025 EPS:", value: "$0.54", note: "Down 30% YoY — includes restructuring charges" },
      { label: "Gross Margin:", value: "43.6%", note: "Down 330bps YoY — promotional pressure and FX headwinds" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin", value: "43.6%", sub: "Q3 FY2025 — down 330bps YoY from promotional activity and FX. Must stabilize above 43%.", accent: "amber", monitor: true },
    { label: "DTC Revenue", value: "$4.7B", sub: "Down 12% YoY. Over-rotation to DTC under prior CEO being corrected — rebalancing to wholesale.", accent: "amber", monitor: true },
    { label: "Inventory", value: "$7.5B", sub: "Down from $8.5B peak — improving but still elevated. Cleaner inventory enables fewer markdowns.", accent: "blue" },
    { label: "Share Buybacks", value: "$4B+/yr", sub: "Continuing aggressive buyback program through the downturn — shrinking share count.", accent: "success" },
    { label: "Brand Heat", value: "Cooling", sub: "Losing cultural relevance to New Balance, On, Hoka with Gen Z. Innovation pipeline is the fix.", accent: "danger", monitor: true },
  ],
  marketPenetration: {
    tam: { percentage: "~12%", market: "$400B global athletic footwear & apparel", description: "Nike is the clear market leader in a $400B+ global athletic market, but share is being chipped away by insurgent brands." },
    enterprise: {
      items: [
        { label: "Countries", value: 95, display: "190+" },
        { label: "Brand Awareness", value: 99, display: "#1 Global" },
      ],
      description: "Nike operates in 190+ countries with the highest brand awareness of any athletic brand globally.",
    },
    upsell: {
      description: "Turnaround strategy focuses on rebuilding wholesale, accelerating innovation, and restoring brand heat through sport-led marketing.",
      tiers: [
        { label: "Footwear", detail: "$7.5B Q3 revenue — largest category" },
        { label: "Apparel", detail: "$3.1B Q3 revenue — lifestyle + performance" },
        { label: "Jordan Brand", detail: "$1.4B+ quarterly — cultural icon" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global Athletic Market", value: "$400B+", width: 100, accent: "bg-chart-blue" },
        { label: "Nike Revenue", value: "$51B", width: 30, accent: "bg-chart-amber" },
        { label: "Nike DTC", value: "$21B", width: 15, accent: "bg-success" },
        { label: "Nike Digital", value: "$12B", width: 8, accent: "bg-danger" },
      ],
      description: "Nike's $51B revenue makes it the clear #1 in athletic footwear and apparel. DTC represents ~40% of revenue, with digital growing.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 112_000_000, marketValue: 5_936_000_000, pct: 8.5, type: "Index Fund", filed: "2024-12-31" },
      { name: "BlackRock", shares: 95_000_000, marketValue: 5_035_000_000, pct: 7.2, type: "Index Fund", filed: "2024-12-31" },
      { name: "State Street", shares: 52_000_000, marketValue: 2_756_000_000, pct: 3.9, type: "Index Fund", filed: "2024-12-31" },
      { name: "Capital Research", shares: 45_000_000, marketValue: 2_385_000_000, pct: 3.4, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "Phil Knight / Swoosh", shares: 305_000_000, marketValue: 16_165_000_000, pct: 23.1, type: "Insider / Founder", filed: "2024-12-31" },
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
      { name: "North America", value: 4850, fill: "hsl(var(--chart-blue))" },
      { name: "EMEA", value: 3100, fill: "hsl(var(--success))" },
      { name: "Greater China", value: 1730, fill: "hsl(var(--chart-amber))" },
      { name: "APLA", value: 1594, fill: "hsl(var(--danger))" },
    ],
    tier10k: [
      { year: "2022", value: 46710, type: "actual" },
      { year: "2023", value: 51217, type: "actual" },
      { year: "2024", value: 51362, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by geography ($M, Q3 FY2025). North America remains the largest market.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2025 Outlook", value: "Revenue -10% YoY", details: ["All geographies declining", "Turnaround investments weigh on near-term profitability"], accent: "amber" },
      { title: "Gross Margin", value: "~43%", details: ["Promotional pressure continuing", "FX headwinds from strong dollar"], accent: "amber" },
      { title: "Turnaround Timeline", value: "FY2026–2027", details: ["Innovation pipeline ramping", "Wholesale partnerships being rebuilt", "Full results expected in 12-18 months"], accent: "blue" },
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
      text: '"We are taking aggressive steps to reposition Nike for the future. Our focus is on sport, innovation, and rebuilding the deep partnerships that made Nike great. This turnaround will take time, but our brand has never been more motivated."',
      author: "Elliott Hill, CEO (returned October 2024)",
    },
    insights: [
      { title: "CEO turnaround", text: "Elliott Hill, a 32-year Nike veteran, returned from retirement to lead the reset. He's rebuilding wholesale, re-investing in sport marketing, and cutting underperforming product lines.", color: "blue" },
      { title: "Innovation pipeline", text: "Pegasus Premium, Vomero 18, Air Max Dn, and new Jordan retros are generating buzz. Nike must prove it can innovate at scale again.", color: "success" },
      { title: "Competitive pressure", text: "On Running, Hoka, New Balance, and Asics are taking share — especially with younger consumers. Nike's Jordan brand fatigue is a real concern.", color: "danger" },
      { title: "China uncertainty", text: "Greater China revenue declined 15%+ — macro headwinds and local brand competition (Anta, Li Ning) are structural challenges.", color: "amber" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Morgan Stanley", rating: "Overweight", target: "$80", sentiment: "bullish" },
      { firm: "Goldman Sachs", rating: "Buy", target: "$75", sentiment: "bullish" },
      { firm: "Barclays", rating: "Equal Weight", target: "$62", sentiment: "neutral", note: "Turnaround risk" },
    ],
    meanTarget: "$72",
    currentPrice: "$53",
    upside: "+36% upside",
  },
  news: [
    { headline: "Nike reports Q3 FY2025 revenue of $11.3B, down 9% YoY as turnaround begins", source: "Nike", tag: "Earnings", date: "Mar 20, 2025", url: "https://investors.nike.com" },
    { headline: "CEO Elliott Hill outlines 'Win Now' strategy — rebuilding wholesale and sport focus", source: "Nike", tag: "Strategy", date: "Mar 20, 2025", url: "https://investors.nike.com" },
    { headline: "Nike gross margin drops 330bps to 43.6% amid promotional pressure", source: "Bloomberg", tag: "Margins", date: "Mar 20, 2025", url: "https://www.bloomberg.com" },
    { headline: "On Running and Hoka continue to take market share from Nike in running category", source: "Reuters", tag: "Competition", date: "Mar 10, 2025", url: "https://www.reuters.com" },
    { headline: "Nike membership surpasses 160M members globally — engagement metrics improving", source: "Nike", tag: "Digital", date: "Feb 2025", url: "https://investors.nike.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "NKE", quantity: 1000, avgPrice: 53.03, currentPrice: 53.03 },
    ],
  },
};
