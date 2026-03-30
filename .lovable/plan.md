

# Earnings Calendar Page

## Overview
A new `/earnings` page with two views (Feed and Calendar), showing upcoming earnings dates sorted nearest-first. Includes search, logo display, and the ability for users to add custom companies. A nav link will be added to the Navbar.

## Database

**New table: `custom_earnings`** — stores user-added companies with earnings dates.

```sql
CREATE TABLE public.custom_earnings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  company_name text NOT NULL,
  ticker text NOT NULL,
  earnings_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.custom_earnings ENABLE ROW LEVEL SECURITY;
-- Users CRUD their own entries
CREATE POLICY "Users manage own earnings" ON public.custom_earnings FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
```

## New Files

### `src/pages/EarningsCalendar.tsx`
- **Feed View**: Cards sorted by nearest earnings date, showing company logo, name, ticker, earnings date, and countdown (e.g. "in 12 days"). Includes search bar filtering by name/ticker. Uses same logo rendering pattern as Landing page.
- **Calendar View**: Uses the existing `Calendar` component (react-day-picker) with earnings dates highlighted/marked. Clicking a date shows companies reporting that day.
- Toggle between Feed/Calendar via ToggleGroup (same pattern as Landing view modes).
- Merges built-in companies (from `companies` array using `earningsDate` field) with user-added companies from `custom_earnings` table.
- "Add Company" button opens a Dialog form with fields: company name, ticker, earnings date (using date picker).
- Auto-refreshes data from the database periodically.

## Modified Files

### `src/components/Navbar.tsx`
- Add an "Earnings" nav link next to "Dashboard" that navigates to `/earnings`.

### `src/App.tsx`
- Add protected route: `/earnings` → `<EarningsCalendar />`.

## Technical Details
- Built-in companies use their `earningsDate` and `logo` fields directly from the static data.
- Custom companies (from DB) won't have logos — show a generic placeholder or initials avatar.
- Sorting: `new Date(earningsDate) - new Date()`, ascending. Past dates go to the bottom or are dimmed.
- Search filters both built-in and custom companies by name or ticker (case-insensitive).
- Calendar markers use colored dots on days that have earnings, with a popover or list below showing which companies.

