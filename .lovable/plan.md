# Plan: Add Position Status Section + New Company

## Overview

Add a "Position Status" section to each company dashboard showing live or waiting trading positions (stocks and options). Add a new company "Integrated Sensor Solutions" with a waiting position.  
the positions wideget must stand out clearly and color coded depending on unrelized pnl. choose the best fit graph model for diplay this.

## Data from Screenshots

**Figma (FIG) — Live Positions:**

**the unrelized pnl must be calculated live. do not use the static info on the screenshots.**

&nbsp;


| Type  | Description    | Position | Avg Price | Market Value | Unrealized P&L |
| ----- | -------------- | -------- | --------- | ------------ | -------------- |
| Stock | FIG            | 4,000    | $29.73    | $117,200     | -$1,765        |
| Put   | JAN 15 '27 $20 | 40       | $2.92     | $11,997      | +$321.74       |
| Call  | JAN 15 '27 $55 | -50      | $3.05     | -$14,631     | +$633.44       |


**Netflix (NFLX) — Live Positions:**


| Type  | Description     | Position | Avg Price | Market Value | Unrealized P&L |
| ----- | --------------- | -------- | --------- | ------------ | -------------- |
| Stock | NFLX            | 1,000    | $85.81    | $98,060      | +$12,245       |
| Put   | JAN 15 '27 $80  | 10       | $9.16     | $5,557       | -$3,600        |
| Call  | JAN 15 '27 $110 | 10       | $5.11     | $10,570      | +$5,463        |
| Call  | JAN 15 '27 $125 | -15      | $5.93     | -$9,552      | -$662.83       |


**Cigna, Eli Lilly, Integrated Sensor Solutions** — Waiting positions (no live trades yet).

## Changes

### 1. Update `src/data/types.ts`

Add new interfaces:

- `PositionItem`: type (stock/put/call), description, quantity, avgPrice, marketValue, unrealizedPnL
- `PositionData`: status ("live" | "waiting"), positions array, optional note for waiting
- Add `positions: PositionData` to `CompanyData`

### 2. Create `src/components/dashboard/PositionStatus.tsx`

New component rendering:

- Status badge (green "Live" or amber "Waiting")
- Table of positions with P&L color-coded (green positive, red negative)
- For waiting status: show a message like "Position pending entry"

### 3. Update company data files

- `src/data/figma.ts` — add live positions from screenshots
- `src/data/netflix.ts` — add live positions from screenshots
- `src/data/cigna.ts` — add waiting position
- `src/data/eli-lilly.ts` — add waiting position

### 4. Create `src/data/integrated-sensor.ts`

New company data file for "Integrated Sensor Solutions" with waiting position and placeholder financial data.

### 5. Update `src/data/companies.ts`

Import and add Integrated Sensor Solutions to the companies array.

### 6. Update `src/pages/CompanyDashboard.tsx`

Import and render `PositionStatus` section (place it prominently after KPI cards).

## Files Changed


| File                                          | Action                                    |
| --------------------------------------------- | ----------------------------------------- |
| `src/data/types.ts`                           | Add PositionItem, PositionData interfaces |
| `src/components/dashboard/PositionStatus.tsx` | New component                             |
| `src/data/figma.ts`                           | Add positions data                        |
| `src/data/netflix.ts`                         | Add positions data                        |
| `src/data/cigna.ts`                           | Add positions data                        |
| `src/data/eli-lilly.ts`                       | Add positions data                        |
| `src/data/integrated-sensor.ts`               | New company file                          |
| `src/data/companies.ts`                       | Add new company                           |
| `src/pages/CompanyDashboard.tsx`              | Add PositionStatus section                |
