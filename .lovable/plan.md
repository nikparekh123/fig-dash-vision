

# Plan: Update Netflix Narrative with Sell-Side Research Analysis

## Overview
Replace the current Netflix narrative data (summary, key metrics, guidance, strategic insights, analysts, news) with the detailed analysis provided from five sell-side research documents dated Feb 27 – Mar 9, 2026 — reflecting Netflix walking away from the WBD bid.

## Key Narrative Shifts
- **WBD deal is OFF** — old data references acquisition as active; must remove all WBD acquisition references and replace with deal walkaway + $2.8B breakup fee
- **Updated financials**: FY2025A = $45.2B revenue, 29.5% OI margin, $9.5B FCF, $9B cash, $13.5B debt
- **Engagement concern** is the new central bear case (viewing hours +1-2% only)
- **Ad revenue** $1.5B in 2025, expected to double to $3B in 2026
- **lastUpdated** changes to "March 9, 2026"

## Changes to `src/data/netflix.ts`

### `summary.lynchPitch`
- Description: FCF compounding machine + second revenue stream (advertising) in early innings
- Bullets: pricing power (only +16% since 2022 vs 70%+ for Disney+), ad tier 60M+ subs doubling revenue, $2.8B WBD breakup fee windfall, balance sheet strength (0.3x net debt/EBITDA), <10% TV time share in all major markets
- whatMustGoRight: Ad monetization must scale (CPMs, fill rates, targeting), engagement must hold flat minimum, content spend discipline maintained

### `summary.mungerInvert`
- Description: Overpaying at 38x trailing / 30x forward for stalling engagement growth; structural flat viewing hours caps ad revenue
- watchSignals: Ad revenue <$2.5B in 2026, US net adds go negative, new large M&A, cash content >$21B, engagement hours decline YoY, AI content platform launches with US viewing share
- Quote from Barclays on engagement being structural

### `summary.verdict`
- Post-WBD walkaway framing: stock regained $30-40/share, $2.8B windfall, removed regulatory overhang
- Ad business under-valued as second engine
- At 30x forward, must grow into valuation every year; thesis fails if AI floods attention or engagement declines force content spend spiral

### `keyMetrics`
- Update FCF to ~$9.5B (JP Morgan), add Net Debt 0.3x EBITDA, content amort $16.4B (36.3% of rev), ROE 42.8%

### `guidance`
- Replace WBD item with: FY2026 Revenue $51.4B (+13.9%), OI Margin 32.1%, Ad Revenue ~$3B (2x YoY), FCF ~$11B, content cash costs ~$19.8B

### `strategicInsights`
- CEO quote stays (or update to something from the docs)
- Insights: engagement stall risk, ad tier monetization opportunity, sports rights escalation, AI disruption threat

### `analysts`
- Replace with: Needham Buy $120, Barclays Equal Weight $115, JP Morgan Overweight $120
- Mean target ~$118, current price $96.24, upside +23%

### `news`
- Replace with: WBD deal walkaway + $2.8B fee, stock re-rating +14% in one day, ad tier $1.5B, engagement concerns, content cost surge to $19.8B

### `profitabilityChart.footnotes`
- Update FCF to ~$9.5B, add net debt/EBITDA 0.3x

## Files Changed
| File | Action |
|---|---|
| `src/data/netflix.ts` | Update narrative sections with sell-side research data |

