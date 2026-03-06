

# Plan: Multi-Company Dashboard with Landing Page

## Overview
Transform the app from a single Figma dashboard into a multi-company platform. After login, users land on a company selector page with large cards. Clicking a card navigates to that company's earnings dashboard. A top navigation bar allows moving between the landing page and company pages.

## Architecture

```text
/                  → Landing page (company cards grid)
/company/:slug     → Company dashboard (current Figma layout, reused for all)
```

## Companies
- **Figma** (NYSE: FIG) — existing data kept as-is
- **Netflix** (NASDAQ: NFLX) — new, data sourced from public financials
- **Cigna** (NYSE: CI) — new, data sourced from public financials
- **Eli Lilly** (NYSE: LLY) — new, data sourced from public financials

## File Changes

### New Files
| File | Purpose |
|---|---|
| `src/pages/Landing.tsx` | Company selector grid with large logo cards |
| `src/pages/CompanyDashboard.tsx` | Generic dashboard page that loads company-specific data by slug |
| `src/components/Navbar.tsx` | Top navigation bar (logo, company name breadcrumb, sign out) |
| `src/data/companies.ts` | Central data file: all company configs + financial data for each company |
| `src/data/figma.ts` | Figma-specific data (extracted from current hardcoded components) |
| `src/data/netflix.ts` | Netflix financial data (same structure as Figma) |
| `src/data/cigna.ts` | Cigna financial data |
| `src/data/eli-lilly.ts` | Eli Lilly financial data |

### Modified Files
| File | Change |
|---|---|
| `src/App.tsx` | Add `/company/:slug` route, change `/` to Landing page |
| `src/pages/Index.tsx` | Remove — replaced by `Landing.tsx` |
| `src/components/dashboard/*.tsx` | Refactor all 12 dashboard components to accept data as props instead of hardcoded values |

### Data Structure
Each company data file exports a single object conforming to a `CompanyData` interface:

```typescript
interface CompanyData {
  name: string;
  ticker: string;
  exchange: string;
  slug: string;
  logoIcon: string; // lucide icon name or emoji
  color: string;
  quarter: string;
  lastUpdated: string;
  kpis: KpiData[];
  summary: SummaryData;
  revenueChart: RevenueData;
  profitabilityChart: ProfitabilityData;
  keyMetrics: MetricData[];
  marketPenetration: MarketPenetrationData;
  ownership: OwnershipData;
  customerRetention: RetentionData;
  guidance: GuidanceData;
  technicalAnalysis: TechnicalData;
  strategicInsights: InsightsData;
  analysts: AnalystData;
  news: NewsItem[];
}
```

### Landing Page Design
- Grid of large cards (2 columns on desktop, 1 on mobile)
- Each card shows: company logo/icon, company name, ticker, exchange, latest quarter
- Cards have hover effects and link to `/company/:slug`
- Dark theme consistent with existing design

### Navigation Bar
- Fixed top bar with:
  - App logo/name on left
  - Breadcrumb: "Dashboard" / "Company Name" when on a company page
  - Sign Out button on right
- Appears on all authenticated pages

### Data for Netflix, Cigna, Eli Lilly
All data will be hardcoded using publicly available financial information (10-K filings, earnings reports). Each company follows the exact same dashboard template as Figma — same sections, same chart types, just different numbers and text.

## Execution Order
1. Create the shared `CompanyData` type and data files
2. Refactor all dashboard components to accept props
3. Create `CompanyDashboard.tsx` that loads data by slug and renders components
4. Create `Landing.tsx` with company cards
5. Create `Navbar.tsx`
6. Update `App.tsx` routes
7. Delete old `Index.tsx`

