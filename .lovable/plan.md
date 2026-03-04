## Technical Analysis Section Updates

### Changes to `src/components/dashboard/TechnicalAnalysisSection.tsx`

**1. RSI Needle Enhancement**
The needle already exists in the code but may not be rendering visibly. Will ensure the needle renders correctly by using the Recharts `customized` prop or rendering the needle as a separate SVG overlay, and add a small label at the needle tip showing "58.58" so it's clear where the RSI sits on the gauge.  I don't see the needle, can you help me find it or maybe use a colour which would be visible like white

**2. EMA Current Price — Larger Font**
Increase the current price text from `text-sm` to `text-2xl font-bold` so it stands out prominently.

**3. Add TradingView Chart Screenshot**
Copy the uploaded screenshot to `src/assets/tradingview-chart.png` and display it as an image below the current price in the EMA card, showing the candlestick chart with EMA overlays. It will be rendered inside a rounded container with proper sizing.