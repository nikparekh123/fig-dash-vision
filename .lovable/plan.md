

## Plan: Add Billings alongside Revenue in the same chart

### Changes to `RevenueChart.tsx`

**Data update** — Add `billings` field to the yearly data and include FY2023/FY2024 history from the 10-K:
- FY2023: Revenue $505M, Billings ~$600M (estimated from growth)
- FY2024: Revenue $749M, Billings $877M
- FY2025: Revenue $1,056M, Billings $1,270M
- FY2026E: Revenue $1,370M (keep estimate only for revenue)

**Chart update** — Render two grouped `<Bar>` elements side by side:
- Green bar = Revenue
- Blue bar = Billings
- Add a `<Legend>` to label both series

**Tooltip update** — Show both Revenue and Billings values in the custom tooltip.

**Title update** — Change to "Revenue & Billings Overview".

Quarterly view stays revenue-only since quarterly billings data isn't available from the 10-K.

