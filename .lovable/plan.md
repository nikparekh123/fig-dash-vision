

# Plan: Deduplicate, Add Market Data, Reorder for Investor Priority

## Problem
Heavy redundancy: NDR (136%), revenue growth (41%), FCF ($242.7M), cash ($1.66B) each appear 3-4 times across KpiCards, KeyMetrics, VerdictSection, and SummarySection. VerdictSection (strengths/risks/verdict) and SummarySection (Lynch/Munger) overlap significantly. Missing new market penetration data from the latest report.

## Changes

### 1. Merge VerdictSection into SummarySection, delete VerdictSection
Combine into one component. Keep Lynch Pitch and Munger Inversion cards. Move the "Verdict" paragraph (GAAP vs Non-GAAP disconnect, AI double-edged sword) as a third card below them. Remove the redundant strengths/risks bullet lists since they duplicate Lynch/Munger content. Remove `VerdictSection.tsx` file entirely.

### 2. New section: Market Penetration & Growth Runway
New component `MarketPenetration.tsx` with data from the new report:
- **TAM Penetration**: ~3% of $33B market — visual progress bar
- **Enterprise Adoption**: 95% of Fortune 500, 78% of Forbes Global 2000
- **User Funnel**: 13M+ MAUs → 540K paid customers → 11,906 >$10K ARR → 1,119 >$100K ARR (funnel visualization)
- **Upsell Runway**: 2/3 of customers are non-designers concentrated in free/low tiers ($3-$5 Collab seats), massive upsell potential

### 3. Deduplicate KeyMetrics
Remove NDR card (already featured prominently in CustomerRetentionSection). Remove Multi-Product Adoption card and progress bars (move to MarketPenetration or drop). Keep: Gross Margin, FCF Margin, Cash, Deferred Revenue, Non-GAAP Op Income — 5 cards in a grid, no progress bar section.

### 4. Remove "2/3 non-designers" from StrategicInsights
This data point moves to MarketPenetration. Replace with a new insight: **"~3% TAM penetration"** — $33B addressable market with only $1B in revenue signals long runway.

### 5. Reorder Index.tsx sections (investor priority)

```text
1. Header
2. KPI Cards (headline financials)
3. Investment Thesis (Lynch/Munger + Verdict) — moved UP
4. Revenue & Billings + Profitability charts
5. Key Metrics (financial deep dive, deduplicated)
6. Market Penetration & Growth Runway (NEW)
7. Customer Retention & Growth
8. Forward Guidance
9. Technical Analysis
10. Strategic Insights
11. Analyst Views
12. Latest News — moved DOWN (least critical)
13. Footer
```

### 6. Update CustomerRetentionSection tier data
Fix >$10K ARR to show 11,906 (not 13.9M) and >$100K to 1,119. These are customer counts in thousands shown as millions — correct the scale labels.

## Files Changed

| File | Action |
|---|---|
| `SummarySection.tsx` | Add verdict card from VerdictSection |
| `VerdictSection.tsx` | **Delete** |
| `MarketPenetration.tsx` | **New** — TAM, Fortune 500, user funnel, upsell |
| `KeyMetrics.tsx` | Remove NDR card, remove multi-product section |
| `StrategicInsights.tsx` | Replace "2/3 non-designers" with TAM insight |
| `CustomerRetentionSection.tsx` | Fix tier chart scale |
| `Index.tsx` | Reorder sections, remove VerdictSection, add MarketPenetration |

