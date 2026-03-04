## Add Technical Analysis Section

### New Component: `src/components/dashboard/TechnicalAnalysisSection.tsx`

The current price of Figma is 30.49

**EMA Card:**

- Display two EMA readings in a clean card layout:
  - 50 EMA: $30.35
  - 100 EMA: $38.95
- Show each as a metric card with label and value, similar to KPI card styling

**RSI Gauge Card:**

- Build a semicircular gauge chart using Recharts `PieChart` (half-donut technique)
- Zones color-coded: Red (0-30 oversold), Yellow/neutral (30-70), Green (70-100 overbought)
- Needle/indicator at 58.58 (in neutral zone)
- Labels for "Oversold" (< 30) and "Overbought" (> 70) zones
- Current RSI value displayed prominently in the center

### Update: `src/pages/Index.tsx`

- Import and place `TechnicalAnalysisSection` in the dashboard layout, after the charts row