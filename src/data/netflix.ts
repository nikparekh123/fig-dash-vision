import type { CompanyData } from "./types";
import netflixLogo from "@/assets/logos/netflix.png";

export const netflixData: CompanyData = {
  name: "Netflix",
  ticker: "NFLX",
  exchange: "NASDAQ",
  slug: "netflix",
  color: "hsl(0, 75%, 50%)",
  logo: netflixLogo,
  quarter: "Q4 2025",
  lastUpdated: "March 9, 2026",
  kpis: [
    { title: "Q4 Revenue", value: "$12.05B", change: "+18% YoY", positive: true },
    { title: "EPS", value: "$6.26", change: "Beat $5.87 est.", positive: true, subtitle: "+7%" },
    { title: "Paid Members", value: "325M", change: "+16% YoY", positive: true },
    { title: "FY2025 Revenue", value: "$45.2B", change: "+16% YoY", positive: true },
  ],
  summary: {
    lynchPitch: {
      title: "The Lynch Pitch — Why Own This?",
      description: "Netflix is converting from a subscriber-growth story into a free cash flow compounding machine, while simultaneously opening a second revenue stream (advertising) that is still in the early innings of monetization. With 325M+ paid members and $9.5B FCF, this is a rare combination of scale, pricing power, and an emerging high-growth business unit.",
      bullets: [
        "Pricing power intact — US prices up only +16% since 2022 vs 70%+ for Disney+ and 80%+ for Apple TV+",
        "Ad tier at 60M+ subs generating $1.5B in 2025, expected to double to ~$3B in 2026 — still early innings",
        "$2.8B WBD breakup fee windfall — balance sheet strengthened without taking on debt",
        "Net debt/EBITDA just 0.3x with $9B cash — underlevered for a company generating $9.5B+ FCF",
        "TV time share below 10% in all major markets — massive remaining TAM",
      ],
      whatMustGoRight: "Ad monetization must scale — CPMs must rise, fill rates improve, and targeting deepen. Engagement must at minimum hold flat (viewing hours grew only +1-2% in 2025). Content spend discipline must be maintained as sports/live costs escalate to ~$19.8B cash costs in 2026.",
    },
    mungerInvert: {
      title: "The Munger Invert — How Could You Lose?",
      description: "You overpay at 38x trailing / 30x forward EPS for a platform whose engagement growth has structurally stalled. Viewing hours grew only +1% in 1H25 and +2% in 2H25. Ad revenue is engagement-dependent inventory — flat engagement caps the ad revenue growth that the valuation depends on.",
      watchSignals: [
        "Ad revenue comes in below $2.5B in 2026 (vs $3B consensus)",
        "US subscriber net adds go negative in any quarter",
        "Management announces new large-scale M&A or material leverage increase",
        "Cash content costs exceed $21B in 2026-2027 driven by sports rights",
        "Engagement hours decline YoY in Netflix's semi-annual report",
        "AI content platform (e.g. ByteDance Seedance-derived) launches with meaningful US viewing share",
      ],
      quote: '"Netflix\'s lack of engagement growth is not because of content quality... This issue in fact seems structural since this engagement issue is not limited to Netflix and the only services seen consistent growth in engagement are free services like YouTube, Roku and Tubi."',
      quoteSource: "Barclays, March 2026",
    },
    verdict: [
      "Netflix walked away from WBD and the stock regained $30-40/share overnight — a 14% single-day re-rating. The $2.8B breakup fee is a windfall, regulatory overhang has lifted, and Bloomberg estimates 50bps of margin drag from M&A is now removed from the 31.5% OI margin guide.",
      "The advertising business is being valued by the market as a side note, not as a second engine. At $1.5B in 2025 growing 100%+ annually with 60M+ ad-tier subs, it is approaching material scale — yet most valuation analysis uses a blended multiple that does not isolate this growth.",
      "At 30x forward earnings, Netflix must grow into its valuation every year. The thesis fails if AI-generated content floods consumer attention, if engagement declines force a content spend spiral at diminishing returns, or if management re-engages in transformative M&A. This is not cheap — but rare platforms with pricing power, FCF yield, and an unlocked second revenue stream seldom are.",
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
      { label: "FY2025 Free Cash Flow:", value: "$9.5B", note: "Per JP Morgan — strong cash generation enabling buybacks" },
      { label: "Net Debt / EBITDA:", value: "0.3x", note: "Underlevered balance sheet — $9B cash vs $13.5B debt" },
      { label: "FY2025 ROE:", value: "42.8%", note: "Exceptional capital efficiency" },
    ],
  },
  keyMetrics: [
    { label: "Free Cash Flow", value: "$9.5B", sub: "FY2025A (JP Morgan). Company guides ~$11B in FY2026. Supports buybacks and optionality.", accent: "success" },
    { label: "Net Debt / EBITDA", value: "0.3x", sub: "Underlevered at $4.4B net debt. $9B cash, $13.5B LT debt. Balance sheet is a source of strength.", accent: "success" },
    { label: "Content Amortization", value: "$16.4B", sub: "36.3% of FY2025 revenue — declining as % of rev as scale grows. Cash costs surging to ~$19.8B in 2026.", accent: "amber" },
    { label: "Ad Revenue", value: "$1.5B", sub: "FY2025 — grew 2.5x YoY. Expected to double to ~$3B in 2026. 60M+ ad-tier subs (18.2% of total).", accent: "blue" },
    { label: "ROE", value: "42.8%", sub: "FY2025A — exceptional capital efficiency. Shareholders' equity $26.6B.", accent: "success" },
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
      { title: "FY2026 Revenue", value: "$51.4B", details: ["+13.9% YoY (Barclays est.)", "Driven by pricing, ads, and sub growth"], accent: "success" },
      { title: "FY2026 OI Margin", value: "32.1%", details: ["Up from 29.5% in FY2025", "50bps M&A drag now removed from guide"], accent: "success" },
      { title: "FY2026 Ad Revenue", value: "~$3B", details: ["2x YoY from $1.5B in FY2025", "CPM improvement + ad-tier sub growth"], accent: "blue" },
      { title: "FY2026 FCF", value: "~$11B", details: ["Company guidance", "Up from $9.5B in FY2025"], accent: "success" },
      { title: "Cash Content Costs", value: "~$19.8B", details: ["+10% YoY — above 6-7% historical avg", "Sports, live content, podcasts driving increase"], accent: "amber" },
    ],
  },
  technicalAnalysis: {
    currentPrice: 96.24,
    emas: [
      { label: "50 EMA", value: 89.50 },
      { label: "200 EMA", value: 78.40 },
    ],
    rsi: 62.3,
  },
  strategicInsights: {
    ceoQuote: {
      text: '"Netflix has more room to raise US prices in 2026 and lift revenue growth now that its Warner deal is off the table, removing potential regulatory overhang. We also see a tailwind for operating margin given the 50 bps of M&A drag that management factored into its 31.5% guidance."',
      author: "Bloomberg Intelligence, March 2026",
    },
    insights: [
      { title: "Engagement stall — the structural risk", text: "Viewing hours grew only +1% in 1H25 and +2% in 2H25. This is not a content quality issue — it's structural. Free services (YouTube, Tubi) are the only platforms with consistent engagement growth. Ad revenue is engagement-dependent inventory.", color: "danger" },
      { title: "Ad monetization — the second engine", text: "Ad revenue hit $1.5B in 2025 (2.5x YoY) with 60M+ ad-tier subs. Expected to double to ~$3B in 2026. Still under-monetized vs. total revenue — most valuation models don't isolate this growth.", color: "success" },
      { title: "Sports rights escalation", text: "Netflix will have no choice but to participate more actively in sports. Ad pricing for sports is growing exponentially. NFL, WWE, and live events are table stakes — but rights costs have no ceiling.", color: "amber" },
      { title: "AI disruption threat", text: "ByteDance's Seedance 2.0 and AI video generation models could lower barriers to content creation, fragment viewer attention, and erode the premium content differentiation that justifies Netflix's pricing advantage.", color: "danger" },
    ],
  },
  analysts: {
    analysts: [
      { firm: "Needham", rating: "Buy", target: "$120", sentiment: "bullish", note: "WBD walkaway is a positive — regain $30-40/share lost during bidding war" },
      { firm: "Barclays", rating: "Equal Weight", target: "$115", sentiment: "neutral", note: "Engagement stall is structural; ad growth needs sports investment" },
      { firm: "JP Morgan", rating: "Overweight", target: "$120", sentiment: "bullish", note: "325M+ subs, ad revenue doubling, strong FCF generation" },
    ],
    meanTarget: "$118",
    currentPrice: "$96",
    upside: "+23% upside",
  },
  news: [
    { headline: "Netflix walks away from Warner Bros. Discovery bid — receives $2.8B breakup fee", source: "Reuters", tag: "M&A", date: "Feb 27, 2026", url: "https://www.reuters.com" },
    { headline: "NFLX stock surges 14% in single day as WBD deal collapses — regains $30-40/share", source: "Bloomberg", tag: "Market", date: "Feb 27, 2026", url: "https://www.bloomberg.com" },
    { headline: "Netflix ad-supported tier surpasses $1.5B annual revenue with 60M+ subscribers", source: "JP Morgan Research", tag: "Advertising", date: "Mar 2, 2026", url: "https://www.jpmorgan.com" },
    { headline: "Barclays flags structural engagement stall — viewing hours grew only 1-2% in 2025", source: "Barclays", tag: "Research", date: "Mar 2, 2026", url: "https://www.barclays.com" },
    { headline: "Netflix cash content costs projected to surge to $19.8B in 2026 — sports and live driving increase", source: "Bloomberg Intelligence", tag: "Costs", date: "Mar 9, 2026", url: "https://www.bloomberg.com" },
  ],
  positions: {
    status: "live",
    positions: [
      { type: "stock", description: "NFLX", quantity: 1000, avgPrice: 85.81, currentPrice: 96.24 },
    ],
  },
};
