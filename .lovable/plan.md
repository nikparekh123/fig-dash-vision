

# Plan: Enrich Dashboard with 10-K Equity Research Data

## 1. Fix Existing Metrics (`KeyMetrics.tsx`)

| Metric | Current | Corrected (10-K) |
|---|---|---|
| Gross Margin | 90% / "Q2 2025" | **82.4%** / "FY2025 GAAP — down from 88.3% in FY2024" + **Monitor** badge |
| NDR | 129% | **136%** / "Customers with >$10K ARR expanding spend" |
| FCF Margin | 24% / "Q2 2025 adjusted" | **23%** / "$242.7M FCF — first year of clean generation at scale" |
| Cash & Securities | $1.6B+ | **$1.66B** / "Zero debt. Includes $73.7M Bitcoin ETF" |

Add two new metric cards:
- **Deferred Revenue**: $595M, "Up from $381M — contractually committed future revenue", accent amber
- **Non-GAAP Op. Income**: $129.5M, "12% Non-GAAP operating margin", accent success

## 2. Add Gross Margin Trend to `ProfitabilityChart.tsx`

Add FY2024 data point: `{ name: "FY2024", netIncome: null, ebitdaMargin: null, grossMargin: 88.3 }` and FY2025 grossMargin: 82.4. Add a second Line for gross margin on the right axis so the decline is visible. Also add `nonGaapOpIncome: 129.5` for FY2025 context in tooltip.

## 3. Enrich `VerdictSection.tsx` — Strengths & Risks

**Strengths** (replace current list):
- Revenue growth +41% YoY ($1.056B), billings +45% ($1.27B)
- 136% NDR — customers reliably expand spend
- Zero debt, $1.66B cash fortress, $242.7M FCF
- Non-GAAP operating income $129.5M (12% margin)
- 2/3 of MAUs are non-designers — platform breadth validated

**Risks** (replace current list):
- GAAP net loss -$1.25B (driven by $1.364B SBC, incl. $975.7M one-time IPO RSU)
- Gross margin fell 88.3% → 82.4%; cost of revenue grew 112% vs 41% revenue
- $759M unrecognized CEO stock compensation over next 4-5 years
- AI could destroy seat model — company's own risk factor warning
- Multi-class voting concentrates control with CEO Dylan Field
- $73.7M Bitcoin ETF on balance sheet — unusual for enterprise SaaS

**Verdict text**: Rewrite to reference the GAAP vs Non-GAAP disconnect, the AI double-edged sword, and the billing model transition risk (March 2026 AI credit enforcement).

## 4. Replace `SummarySection.tsx` with Investment Thesis

Transform into two cards:

**Lynch Pitch** (green-tinted card):
- "Figma is becoming the operating system for digital product development"
- Key thesis: every new product (Dev Mode, Sites, Make) deepens workflow lock
- Stats: 41% growth, $1.66B cash, zero debt, 136% NDR, 23% FCF margin
- "What must go right": AI credit billing transition, Non-GAAP margin expansion

**Munger Inversion** (red-tinted card):
- "How could you lose money?" — paying a high price for a business whose monetization model is structurally threatened by AI
- Watch signals: NDR < 120%, gross margin continuing to fall, billings deceleration, AI credit backlash, competitor bundling AI for free
- Quote from 10-K risk factors about seat reduction

## 5. Enrich `StrategicInsights.tsx`

Keep the CEO quote. Replace the 3 insight cards with 4:
- **AI: Double-edged sword** — drives revenue but compresses margins (cost of rev +112%) and threatens seat model
- **2/3 of users are non-designers** — validates platform as cross-functional OS, not just a design tool
- **8 products, 1,886 employees** — execution risk of multi-product expansion while managing AI billing launch
- **FedRAMP authorized** — opens U.S. federal government market, new growth vector

## 6. Update `Index.tsx`

- Rename "Analyst Brief" section to "Investment Thesis"
- Update footer: "Data sourced from Figma Form 10-K, Year Ended December 31, 2025. Not investment advice."

## 7. Add NDR Context to `CustomerRetentionSection.tsx`

Add a warning callout below the NDR card: "Note: NDR is calculated only on customers with >$10K ARR. Company pre-warns this metric may fluctuate or decline due to pricing changes and growing revenue base." Style as a small amber-tinted note.

---

## Files Changed

| File | Action |
|---|---|
| `KeyMetrics.tsx` | Fix 4 values, add 2 new cards |
| `ProfitabilityChart.tsx` | Add FY2024 data, gross margin line |
| `VerdictSection.tsx` | Rewrite strengths/risks/verdict with 10-K data |
| `SummarySection.tsx` | Replace with Lynch Pitch + Munger Inversion |
| `StrategicInsights.tsx` | Replace 3 insight cards with 4 new ones |
| `CustomerRetentionSection.tsx` | Add NDR methodology warning |
| `Index.tsx` | Rename section, update footer |

