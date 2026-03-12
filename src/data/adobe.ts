import type { CompanyData } from "./types";
import adobeLogo from "@/assets/logos/adobe.png";

export const adobeData: CompanyData = {
  name: "Adobe",
  ticker: "ADBE",
  exchange: "NASDAQ",
  slug: "adobe",
  color: "hsl(0, 100%, 50%)",
  logo: adobeLogo,
  industry: "Technology",
  sector: "Creative & Document Software",
  quarter: "Q1 FY2026",
  earningsDate: "2026-03-12",
  lastUpdated: "March 12, 2026",
  kpis: [
    { title: "Q1 FY2026 Revenue", value: "$6.40B", change: "+11% YoY", positive: true },
    { title: "Non-GAAP EPS", value: "$6.06", change: "+19% YoY", positive: true, subtitle: "Beat estimates" },
    { title: "Total Adobe ARR", value: "$26.06B", change: "+10.9% YoY", positive: true },
    { title: "Q2 Revenue Guide", value: "$6.43–6.48B", change: "FY26 targets reaffirmed", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Adobe is the dominant platform for creative professionals, document workflows, and digital marketing — three categories where switching costs are extremely high and AI is expanding the addressable market. Adobe is embedding generative AI (Firefly) natively into tools that 850M+ monthly active users already use. CEO Shantanu Narayen announced transition after 18 years, with the board searching for a successor.",
      bullets: [
        "Total Adobe ARR of $26.06B growing 10.9% YoY — subscription model with 88%+ gross margins",
        "850M+ monthly active users across Acrobat, Creative Cloud, Express, and Firefly — 17% YoY MAU growth",
        "Creative Premium MAU crossed 80M, growing 50% YoY — massive new user acquisition",
        "Generative credit consumption grew 45%+ QoQ — video generative actions growing 8x YoY",
        "Firefly ARR exceeded $250M — AI-first applications ARR more than tripled YoY",
        "Q1 record operating cash flow of $2.96B — funding $25B buyback authorization",
        "Enterprise all-apps and GenStudio ARR each grew 30%+ YoY — strong enterprise demand",
      ],
      whatMustGoRight: "AI monetization must accelerate ARR growth as freemium users convert. Traditional stock business declining faster than expected — generative AI must replace that revenue. CEO transition must be smooth with right successor maintaining innovation pace. SEMrush acquisition expected to close Q2.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Adobe trades at a premium for a company growing revenue at 11%. The risk is that AI commoditizes creative tools faster than Adobe can monetize, the CEO transition disrupts execution, or the stock business decline accelerates without offsetting AI revenue.",
      watchSignals: [
        "Total Adobe ARR growth decelerating below 10%",
        "Traditional stock business declining faster than AI revenue replaces it",
        "Freemium MAU growth not converting to paid subscriptions",
        "CEO transition creating strategic uncertainty or executive departures",
        "Canva or other AI-native tools gaining enterprise creative share",
        "Non-GAAP operating margin compressing below 45%",
        "Q2 guidance implies sequential deceleration in non-GAAP EPS",
      ],
    },
    verdict: [
      "Adobe delivered a strong Q1 FY2026 with $6.40B revenue (+11% YoY), record operating cash flow of $2.96B, and non-GAAP EPS of $6.06 (+19% YoY). The business is executing well across all three customer segments with particular strength in AI-first applications which more than tripled YoY.",
      "The most significant development is CEO Shantanu Narayen's announced transition after 18 years. While the board search is underway, this introduces execution risk during a critical AI transformation period. The traditional stock business is also declining faster than expected, though generative AI usage (45% QoQ credit consumption growth) is ramping to offset.",
      "At current levels, the key question remains valuation vs. growth trajectory. FY26 revenue growth target of 10.2% is reaffirmed, with AI monetization expected to accelerate through the year. The 850M+ MAU base and rapidly growing Firefly ecosystem ($250M+ ARR) provide a strong foundation, but the CEO transition adds near-term uncertainty.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2023", revenue: 19410, revenueGrowth: "+10%", type: "actual" },
      { name: "FY2024", revenue: 21505, revenueGrowth: "+11%", type: "actual" },
      { name: "FY2025", revenue: 23600, revenueGrowth: "+10%", type: "actual" },
      { name: "FY2026E", revenue: 26000, revenueGrowth: "+10%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q2 FY2025", revenue: 5710, growth: "+10%", type: "actual" },
      { name: "Q3 FY2025", revenue: 5890, growth: "+11%", type: "actual" },
      { name: "Q4 FY2025", revenue: 6100, growth: "+11%", type: "actual" },
      { name: "Q1 FY2026", revenue: 6400, growth: "+11%", type: "actual" },
    ],
    yearlySubtitle: "FY2023–FY2026E revenue ($M)",
    quarterlySubtitle: "Recent quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2023", netIncome: 5350, ebitdaMargin: 45.8, grossMargin: 88.2 },
      { name: "FY2024", netIncome: 5900, ebitdaMargin: 46.5, grossMargin: 88.7 },
      { name: "FY2025", netIncome: 6500, ebitdaMargin: 47.0, grossMargin: 89.0 },
      { name: "FY2026E", netIncome: 7200, ebitdaMargin: 47.5, grossMargin: 89.2 },
    ],
    quarterly: [
      { name: "Q2 FY2025", netIncome: 1570, ebitdaMargin: 46.8 },
      { name: "Q3 FY2025", netIncome: 1620, ebitdaMargin: 47.1 },
      { name: "Q4 FY2025", netIncome: 1700, ebitdaMargin: 47.5 },
      { name: "Q1 FY2026", netIncome: 1770, ebitdaMargin: 47.4 },
    ],
    footnotes: [
      { label: "Q1 FY2026 GAAP EPS:", value: "$4.60", note: "+11% YoY — GAAP operating margin 37.8%" },
      { label: "Q1 FY2026 Non-GAAP EPS:", value: "$6.06", note: "+19% YoY — Non-GAAP operating margin 47.4%" },
      { label: "Q2 FY2026 Non-GAAP EPS Guide:", value: "$5.80–$5.85", note: "Non-GAAP operating margin ~44.5%" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin", value: "~89%", sub: "FY2025 — among the highest in software. Subscription model drives exceptional unit economics.", accent: "success" },
    { label: "Total Adobe ARR", value: "$26.06B", sub: "Growing 10.9% YoY — subscription revenue of $6.17B in Q1, +13% YoY.", accent: "success" },
    { label: "Monthly Active Users", value: "850M+", sub: "Across Acrobat, Creative Cloud, Express, and Firefly — 17% YoY growth. Creative Premium MAU 80M+ (+50% YoY).", accent: "success" },
    { label: "Operating Cash Flow", value: "$2.96B", sub: "Q1 FY2026 record — funds buybacks from $25B authorization ($3.89B remaining).", accent: "blue" },
    { label: "Firefly ARR", value: "$250M+", sub: "Grew 75% QoQ. Generative credit consumption up 45%+ QoQ. Video gen actions 8x YoY.", accent: "blue" },
    { label: "Stock Business Decline", value: "Accelerating", sub: "Traditional stock declining faster than expected. Strategy: provide choice between stock and generative AI.", accent: "amber", monitor: true },
  ],
  marketPenetration: {
    tam: { percentage: "~8%", market: "$300B+ creative, document & CX TAM", description: "Adobe addresses a $300B+ total addressable market across creative tools, document management, digital experience, and marketing automation. AI is expanding this TAM significantly." },
    enterprise: {
      items: [
        { label: "Fortune 100", value: 99, display: "99 of 100" },
        { label: "Express in F500", value: 99, display: "99% of US F500" },
      ],
      description: "Adobe products are embedded in virtually every large enterprise. Express is now used in 99% of US Fortune 500 companies.",
    },
    upsell: {
      description: "AI-powered features (Firefly, Acrobat AI Assistant, GenStudio) create massive upsell opportunities. Acrobat Studio upgrades off to a strong start.",
      tiers: [
        { label: "Business Professionals & Consumers", detail: "$1.78B Q1 subscription revenue — +15% YoY" },
        { label: "Creative & Marketing Professionals", detail: "$4.39B Q1 subscription revenue — +11% YoY" },
        { label: "AI-First Applications", detail: "ARR more than tripled YoY — Firefly, GenStudio, LM Optimizer" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global Knowledge Workers", value: "1.5B+", width: 100, accent: "bg-chart-blue" },
        { label: "Monthly Active Users", value: "850M+", width: 65, accent: "bg-chart-amber" },
        { label: "Creative Premium MAU", value: "80M+", width: 20, accent: "bg-success" },
        { label: "Paid Subscribers", value: "~35M", width: 10, accent: "bg-danger" },
      ],
      description: "Adobe surpassed 850M+ MAUs across its ecosystem with 17% YoY growth. Creative Premium MAU crossed 80M (+50% YoY), creating a massive conversion funnel.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 38_500_000, marketValue: 16_500_000_000, pct: 8.8, type: "Index Fund", filed: "2025-12-31" },
      { name: "BlackRock", shares: 33_200_000, marketValue: 14_230_000_000, pct: 7.6, type: "Index Fund", filed: "2025-12-31" },
      { name: "State Street", shares: 18_900_000, marketValue: 8_100_000_000, pct: 4.3, type: "Index Fund", filed: "2025-12-31" },
      { name: "FMR LLC (Fidelity)", shares: 15_800_000, marketValue: 6_770_000_000, pct: 3.6, type: "Investment Advisor", filed: "2025-12-31" },
      { name: "T. Rowe Price", shares: 12_500_000, marketValue: 5_360_000_000, pct: 2.9, type: "Investment Advisor", filed: "2025-12-31" },
      { name: "Capital Research", shares: 10_200_000, marketValue: 4_370_000_000, pct: 2.3, type: "Investment Advisor", filed: "2025-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Vanguard Group", sub: "8.8%" },
      { label: "Institutional Ownership", value: "~85%" },
      { label: "Buyback Auth Remaining", value: "$3.89B" },
    ],
  },
  customerRetention: {
    ndr: { value: "110%+", description: "Net revenue retention above 110% reflects strong upsell within existing accounts. Enterprise customers with ARR >$10M grew 20%+ YoY." },
    regional: [
      { name: "Americas", value: 14200, fill: "hsl(var(--chart-blue))" },
      { name: "EMEA", value: 5900, fill: "hsl(var(--success))" },
      { name: "APAC", value: 3500, fill: "hsl(var(--chart-amber))" },
    ],
    tier10k: [
      { year: "2023", value: 19410, type: "actual" },
      { year: "2024", value: 21505, type: "actual" },
      { year: "2025", value: 23600, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by region ($M). Americas represents ~60% of total revenue.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "Q2 FY2026 Revenue", value: "$6.43–6.48B", details: ["Business professionals & consumers: $1.80–1.82B", "Creative & marketing professionals: $4.41–4.44B"], accent: "blue" },
      { title: "Q2 Non-GAAP EPS", value: "$5.80–$5.85", details: ["Non-GAAP operating margin ~44.5%", "Non-GAAP tax rate ~18%"], accent: "blue" },
      { title: "FY2026 Revenue Growth", value: "10.2%", details: ["Targets reaffirmed", "AI monetization expected to accelerate through the year", "SEMrush acquisition expected to close Q2"], accent: "success" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 273.71,
    emas: [
      { label: "50 EMA", value: 340.20 },
      { label: "200 EMA", value: 420.80 },
    ],
    rsi: 28.5,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"Our mission to empower everyone to create represents an even larger opportunity in the AI era. We surpassed 850 million monthly active users, achieving 17% year over year growth — a clear indication that we have both strong usage and a foundation for monetization."',
      author: "Shantanu Narayen, CEO (announced transition after 18 years)",
    },
    insights: [
      { title: "CEO transition", text: "Shantanu Narayen announced he will step down as CEO after 18 years and 100 earnings calls. Board searching for successor. He will remain as Chair. Critical transition during AI transformation.", color: "amber" },
      { title: "AI-first apps tripling", text: "ARR from AI-first applications (Firefly, GenStudio, LM Optimizer, Brand Concierge) more than tripled YoY. Firefly ARR exceeded $250M, growing 75% QoQ.", color: "success" },
      { title: "Stock business declining", text: "Traditional standalone stock business saw steeper decline than expected. Adobe's strategy: provide customers choice between stock and generative AI for creative workflows.", color: "danger" },
      { title: "Enterprise AI momentum", text: "All-apps and GenStudio ARR each grew 30%+ YoY. AEP platform processing 35T+ segment evaluations daily. 650+ customer trials for LM Optimizer, Sites Optimizer, and Brand Concierge.", color: "blue" },
      { title: "Agentic web opportunity", text: "LLM traffic to retail sites increased 7x during 2025 holidays, with 31% higher conversion and 254% more revenue per visit. Adobe LM Optimizer and Brand Concierge address this new channel.", color: "success" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Morgan Stanley", rating: "Overweight", target: "$580", sentiment: "bullish" },
      { firm: "Goldman Sachs", rating: "Buy", target: "$550", sentiment: "bullish" },
      { firm: "Barclays", rating: "Equal Weight", target: "$470", sentiment: "neutral", note: "Growth concerns" },
    ],
    meanTarget: "$533",
    currentPrice: "$274",
    upside: "+95% upside",
  },
  news: [
    { headline: "Adobe CEO Shantanu Narayen announces transition after 18 years — board searching for successor", source: "Adobe", tag: "Leadership", date: "Mar 12, 2026", url: "https://www.adobe.com/investor-relations" },
    { headline: "Adobe reports Q1 FY2026 revenue of $6.40B (+11% YoY), record operating cash flow of $2.96B", source: "Adobe", tag: "Earnings", date: "Mar 12, 2026", url: "https://www.adobe.com/investor-relations" },
    { headline: "Adobe surpasses 850M monthly active users — Creative Premium MAU crosses 80M (+50% YoY)", source: "Adobe", tag: "Growth", date: "Mar 12, 2026", url: "https://www.adobe.com" },
    { headline: "Firefly ARR exceeds $250M as AI-first application revenue triples YoY", source: "Adobe", tag: "AI", date: "Mar 12, 2026", url: "https://www.adobe.com" },
    { headline: "Adobe launches Acrobat and Express for ChatGPT — expands into conversational AI platforms", source: "Bloomberg", tag: "Product", date: "Feb 2026", url: "https://www.bloomberg.com" },
    { headline: "Adobe expects SEMrush acquisition to close in Q2 FY2026 pending regulatory approval", source: "Reuters", tag: "M&A", date: "Mar 12, 2026", url: "https://www.reuters.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "ADBE", quantity: 100, avgPrice: 278, currentPrice: 273.71 },
    ],
  },
  history: [
    {
      date: "2025-03-12",
      quarter: "Q1 FY2025",
      summary: "Revenue $5.71B (+10% YoY), Non-GAAP EPS $5.08, Digital Media ARR $17.6B (+12% YoY). FY2025 revenue guidance $23.2–23.4B. Firefly surpassed 16B+ generated images.",
    },
  ],
};
