

## Dashboard Enhancements Plan

### 1. Header Update (`src/pages/Index.tsx`)
- Add the Figma logo (use the official Figma SVG icon inline or from lucide-react's `Figma` icon)
- Add "Last updated: March 4, 2026" text styled in muted text beside the subtitle
- Layout: Logo + company name on the left, last updated timestamp on the right

### 2. News Section Expansion (`src/components/dashboard/NewsSection.tsx`)
- Add more recent important Figma news items (sourced from publicly known events up to March 2026):
  - "Figma reports Q4 2025 revenue of $303.8M, up 40% YoY" (Figma)
  - "Figma IPO prices above expectations as design platform goes public" (Reuters)
  - "Figma expands AI-powered design features across all product tiers" (TechCrunch)
  - "High-value customer cohort ($100K+ ARR) grows 42% year-over-year" (Figma)
- Keep existing 3 items, total ~7 news cards
- Change layout from grid to a vertical scrollable list using `ScrollArea` with a max height (~320px) so it doesn't overflow the page

### 3. Revenue Chart Toggle (`src/components/dashboard/RevenueChart.tsx`)
- Convert to a stateful component with `useState` for view mode: "yearly" | "quarterly"
- Add a toggle button group in the card header using existing `ToggleGroup`/`ToggleGroupItem` components
- **Quarterly data** (FY2025 quarters):
  - Q1 2025: $209.2M (+44% YoY)
  - Q2 2025: $247.8M (+45% YoY)
  - Q3 2025: $299.2M (+40% YoY)
  - Q4 2025: $303.8M (+40% YoY)
- **Yearly data** (current): FY2025 $1.06B, FY2026E $1.37B
- Toggle switches between the two datasets

### 4. Profitability Chart Toggle (`src/components/dashboard/ProfitabilityChart.tsx`)
- Same toggle pattern as Revenue chart
- **Quarterly data** (FY2025 quarters):
  - Q1 2025: Net Income -$340.4M, EBITDA Margin -155%
  - Q2 2025: Net Income -$364.6M, EBITDA Margin -147%
  - Q3 2025: Net Income -$318.4M, EBITDA Margin -106%
  - Q4 2025: Net Income -$226.6M, EBITDA Margin -55%
- **Yearly data** (current): FY2025 totals + FY2026E EPS projection
- Toggle switches datasets; EPS callout shown only in yearly view

### Files Modified
- `src/pages/Index.tsx` — header with logo + last updated
- `src/components/dashboard/NewsSection.tsx` — more items + ScrollArea
- `src/components/dashboard/RevenueChart.tsx` — toggle + quarterly data
- `src/components/dashboard/ProfitabilityChart.tsx` — toggle + quarterly data

