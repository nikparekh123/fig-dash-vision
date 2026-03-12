import type { CompanyData } from "./types";
import adobeLogo from "@/assets/logos/adobe.png";

export const adobeData: CompanyData = {
  name: "Adobe",
  ticker: "ADBE",
  exchange: "NASDAQ",
  slug: "adobe",
  color: "hsl(0, 100%, 50%)",
  logo: adobeLogo,
  sector: "Technology — Creative & Document Software",
  quarter: "Q1 FY2025",
  lastUpdated: "March 12, 2025",
  kpis: [
    { title: "Q1 FY2025 Revenue", value: "$5.71B", change: "+10% YoY", positive: true },
    { title: "Non-GAAP EPS", value: "$5.08", change: "Beat $4.97 est.", positive: true, subtitle: "+6%" },
    { title: "Digital Media ARR", value: "$17.6B", change: "+12% YoY", positive: true },
    { title: "FY2025 Revenue Guide", value: "$23.2–23.4B", change: "+10% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Adobe is the dominant platform for creative professionals, document workflows, and digital marketing — three categories where switching costs are extremely high and AI is expanding the addressable market rather than disrupting it. Adobe is embedding generative AI (Firefly) natively into tools that 30M+ paying subscribers already use daily.",
      bullets: [
        "Digital Media ARR of $17.6B growing 12% YoY — subscription model with 93%+ gross margins",
        "Firefly has generated 16B+ images since launch — AI is additive to the creative workflow, not a replacement",
        "Operating cash flow of $8.1B (FY2024) — massive free cash flow generation funding $8B+ in buybacks",
        "$23.2–23.4B FY2025 revenue guidance implies continued double-digit growth at scale",
        "Net revenue retention consistently above 110% — customers expand usage over time",
      ],
      whatMustGoRight: "AI monetization must translate into incremental ARR growth, not just feature additions. Creative Cloud must defend against free/cheap AI-native competitors (Canva, Midjourney). Document Cloud must maintain pricing power against commodity PDF alternatives.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "Adobe trades at a premium multiple for a company growing revenue at only 10%. The risk is that AI commoditizes creative tools faster than Adobe can monetize it, or that the subscription model faces pressure from cheaper alternatives.",
      watchSignals: [
        "Digital Media ARR growth decelerating below 10%",
        "Net new ARR declining quarter over quarter",
        "Firefly usage not converting to paid subscriptions",
        "Canva or other AI-native tools gaining enterprise share",
        "Document Cloud growth stalling as AI PDF tools proliferate",
        "Multiple compression if growth remains in single digits",
      ],
    },
    verdict: [
      "Adobe is a high-quality business with exceptional margins and cash flow generation. The subscription model with 93%+ gross margins creates durable economics. Digital Media ARR of $17.6B growing at 12% demonstrates the core creative franchise remains strong.",
      "The central question is valuation vs. growth. At ~25x forward earnings, the market is pricing Adobe as a compounder, not a growth stock. The 10% revenue growth rate needs to either accelerate (via AI monetization) or the multiple needs to compress to offer better entry points.",
      "Adobe's moat is real — deep workflow integration, massive training data advantage for Firefly, and enterprise-grade security/compliance. But investors should watch for signs that AI-native competitors can replicate 80% of Adobe's functionality at 20% of the cost.",
    ],
  },
  revenueChart: {
    yearly: [
      { name: "FY2022", revenue: 17610, revenueGrowth: "+12%", type: "actual" },
      { name: "FY2023", revenue: 19410, revenueGrowth: "+10%", type: "actual" },
      { name: "FY2024", revenue: 21505, revenueGrowth: "+11%", type: "actual" },
      { name: "FY2025E", revenue: 23300, revenueGrowth: "+8%", type: "estimate" },
    ],
    quarterly: [
      { name: "Q2 FY2024", revenue: 5310, growth: "+10%", type: "actual" },
      { name: "Q3 FY2024", revenue: 5410, growth: "+11%", type: "actual" },
      { name: "Q4 FY2024", revenue: 5610, growth: "+11%", type: "actual" },
      { name: "Q1 FY2025", revenue: 5710, growth: "+10%", type: "actual" },
    ],
    yearlySubtitle: "FY2022–FY2025E revenue ($M)",
    quarterlySubtitle: "Recent quarterly breakdown ($M)",
    showBillings: false,
  },
  profitabilityChart: {
    yearly: [
      { name: "FY2022", netIncome: 4760, ebitdaMargin: 44.5, grossMargin: 87.7 },
      { name: "FY2023", netIncome: 5350, ebitdaMargin: 45.8, grossMargin: 88.2 },
      { name: "FY2024", netIncome: 5900, ebitdaMargin: 46.5, grossMargin: 88.7 },
      { name: "FY2025E", netIncome: 6400, ebitdaMargin: 47.0, grossMargin: 89.0 },
    ],
    quarterly: [
      { name: "Q2 FY2024", netIncome: 1430, ebitdaMargin: 45.2 },
      { name: "Q3 FY2024", netIncome: 1480, ebitdaMargin: 46.1 },
      { name: "Q4 FY2024", netIncome: 1570, ebitdaMargin: 47.0 },
      { name: "Q1 FY2025", netIncome: 1490, ebitdaMargin: 46.3 },
    ],
    footnotes: [
      { label: "FY2024 Non-GAAP EPS:", value: "$18.42", note: "Strong adjusted earnings reflecting operating leverage" },
      { label: "FY2025 Non-GAAP EPS Guide:", value: "$20.20–$20.50", note: "Targeting continued EPS expansion" },
    ],
  },
  keyMetrics: [
    { label: "Gross Margin", value: "88.7%", sub: "FY2024 — among the highest in software. Subscription model drives exceptional unit economics.", accent: "success" },
    { label: "Digital Media ARR", value: "$17.6B", sub: "Growing 12% YoY — the core franchise. Creative Cloud + Document Cloud combined.", accent: "success" },
    { label: "Operating Cash Flow", value: "$8.1B", sub: "FY2024 — 38% OCF margin. Funds buybacks and R&D without leverage.", accent: "blue" },
    { label: "Share Buybacks", value: "$8B+", sub: "FY2024 — aggressive capital return shrinking float ~3% annually", accent: "blue" },
    { label: "Revenue Growth", value: "10%", sub: "Decelerating from 12% in FY2022. AI monetization needs to re-accelerate growth.", accent: "amber", monitor: true },
  ],
  marketPenetration: {
    tam: { percentage: "~8%", market: "$260B creative & document TAM", description: "Adobe addresses a $260B+ total addressable market across creative tools, document management, digital experience, and marketing automation." },
    enterprise: {
      items: [
        { label: "Fortune 100", value: 100, display: "100%" },
        { label: "Creative Professionals", value: 65, display: "30M+ paid" },
      ],
      description: "Adobe products are embedded in virtually every large enterprise and creative workflow globally.",
    },
    upsell: {
      description: "AI-powered features (Firefly, Acrobat AI Assistant) create upsell opportunities within existing subscriber base.",
      tiers: [
        { label: "Creative Cloud", detail: "$12.8B ARR — Photoshop, Illustrator, Premiere" },
        { label: "Document Cloud", detail: "$4.8B ARR — Acrobat, PDF, e-signatures" },
        { label: "Experience Cloud", detail: "$5.3B revenue — marketing & analytics" },
      ],
    },
    funnel: {
      steps: [
        { label: "Global Knowledge Workers", value: "1.5B+", width: 100, accent: "bg-chart-blue" },
        { label: "Creative Professionals", value: "70M+", width: 55, accent: "bg-chart-amber" },
        { label: "Adobe Paid Subscribers", value: "30M+", width: 25, accent: "bg-success" },
        { label: "All-Apps Subscribers", value: "~10M", width: 12, accent: "bg-danger" },
      ],
      description: "Adobe has 30M+ paid subscribers out of 70M+ creative professionals globally — significant room to convert free users and expand into adjacent knowledge worker categories via Document Cloud.",
    },
  },
  ownership: {
    shareholders: [
      { name: "Vanguard Group", shares: 38_500_000, marketValue: 16_500_000_000, pct: 8.8, type: "Index Fund", filed: "2024-12-31" },
      { name: "BlackRock", shares: 33_200_000, marketValue: 14_230_000_000, pct: 7.6, type: "Index Fund", filed: "2024-12-31" },
      { name: "State Street", shares: 18_900_000, marketValue: 8_100_000_000, pct: 4.3, type: "Index Fund", filed: "2024-12-31" },
      { name: "FMR LLC (Fidelity)", shares: 15_800_000, marketValue: 6_770_000_000, pct: 3.6, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "T. Rowe Price", shares: 12_500_000, marketValue: 5_360_000_000, pct: 2.9, type: "Investment Advisor", filed: "2024-12-31" },
      { name: "Capital Research", shares: 10_200_000, marketValue: 4_370_000_000, pct: 2.3, type: "Investment Advisor", filed: "2024-12-31" },
    ],
    summaryCards: [
      { label: "Largest Holder", value: "Vanguard Group", sub: "8.8%" },
      { label: "Institutional Ownership", value: "~85%" },
      { label: "Insider Ownership", value: "<1%" },
    ],
  },
  customerRetention: {
    ndr: { value: "110%+", description: "Net revenue retention above 110% reflects strong upsell within existing accounts, particularly as AI features drive adoption of higher-tier plans." },
    regional: [
      { name: "Americas", value: 12900, fill: "hsl(var(--chart-blue))" },
      { name: "EMEA", value: 5400, fill: "hsl(var(--success))" },
      { name: "APAC", value: 3200, fill: "hsl(var(--chart-amber))" },
    ],
    tier10k: [
      { year: "2022", value: 17610, type: "actual" },
      { year: "2023", value: 19410, type: "actual" },
      { year: "2024", value: 21505, type: "actual" },
    ],
    tier100k: [],
    ndrNote: "Revenue by region ($M). Americas represents ~60% of total revenue.",
    tier10kTitle: "Total Revenue ($M)",
    tier100kTitle: "",
  },
  guidance: {
    items: [
      { title: "FY2025 Revenue", value: "$23.2–23.4B", details: ["~10% growth at midpoint", "Digital Media and Experience Cloud both contributing"], accent: "blue" },
      { title: "FY2025 Non-GAAP EPS", value: "$20.20–$20.50", details: ["Operating leverage expanding margins", "Continued buyback support"], accent: "success" },
      { title: "Digital Media Net New ARR", value: "$2.1B+", details: ["Firefly and AI features driving incremental ARR", "Document Cloud AI Assistant contribution growing"], accent: "success" },
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
      text: '"Adobe Firefly is not just a feature — it is the foundation of a new creative paradigm. We are embedding AI across every product in our portfolio, making creativity more accessible while deepening the value for professionals."',
      author: "Shantanu Narayen, CEO",
    },
    insights: [
      { title: "AI moat is real", text: "Firefly trained on licensed content — legally safe for commercial use. 16B+ images generated. This is a competitive advantage no open-source model can replicate.", color: "success" },
      { title: "Growth deceleration", text: "Revenue growth has slowed from 12% to 10%. AI needs to re-accelerate growth or the premium multiple compresses.", color: "amber" },
      { title: "Canva threat", text: "Canva has 200M+ users and is moving upmarket into enterprise. Adobe must defend the prosumer segment while maintaining enterprise dominance.", color: "danger" },
      { title: "Buyback machine", text: "$8B+ annual buyback program shrinks float ~3% per year, providing meaningful EPS accretion independent of revenue growth.", color: "blue" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Morgan Stanley", rating: "Overweight", target: "$580", sentiment: "bullish" },
      { firm: "Goldman Sachs", rating: "Buy", target: "$550", sentiment: "bullish" },
      { firm: "Barclays", rating: "Equal Weight", target: "$470", sentiment: "neutral", note: "Growth concerns" },
    ],
    meanTarget: "$533",
    currentPrice: "$376",
    upside: "+42% upside",
  },
  news: [
    { headline: "Adobe reports Q1 FY2025 revenue of $5.71B, up 10% YoY, beating estimates", source: "Adobe", tag: "Earnings", date: "Mar 12, 2025", url: "https://www.adobe.com/investor-relations" },
    { headline: "Adobe Firefly surpasses 16 billion generated images since launch", source: "Adobe", tag: "AI", date: "Mar 10, 2025", url: "https://www.adobe.com" },
    { headline: "Digital Media ARR reaches $17.6B as AI features drive subscriber expansion", source: "Adobe", date: "Mar 12, 2025", url: "https://www.adobe.com/investor-relations" },
    { headline: "Adobe announces new Firefly Video model and AI-powered Premiere Pro features", source: "TechCrunch", date: "Feb 20, 2025", url: "https://techcrunch.com" },
    { headline: "Adobe expands Acrobat AI Assistant to all Document Cloud subscribers", source: "Bloomberg", date: "Jan 15, 2025", url: "https://www.bloomberg.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "ADBE", quantity: 100, avgPrice: 278, currentPrice: 375.50 },
    ],
  },
};
