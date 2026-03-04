

## Changes to `src/components/dashboard/TechnicalAnalysisSection.tsx`

### 1. Fix RSI Needle Visibility
The `RsiNeedle` component is rendered as a direct child of `PieChart`, but Recharts ignores arbitrary children. Fix by wrapping it with Recharts' `Customized` component which allows rendering custom SVG elements inside the chart.

### 2. Chart Image as Clickable Expandable Widget
- Extract the TradingView chart image into its own Card within the technical analysis section grid
- Add click-to-maximize functionality using a Dialog (modal) — clicking the chart opens a full-screen overlay showing the chart at maximum size
- Keep it in the same technical analysis section, making the grid 3 columns on large screens (EMA metrics, Chart, RSI gauge) or stack appropriately

### Layout
The section becomes a 3-column grid on large screens:
1. EMA metrics card (without the chart image)
2. TradingView chart card (clickable, opens in Dialog)
3. RSI gauge card (with fixed needle)

