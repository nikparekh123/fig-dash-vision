# Earnings Calendar Rework — Events-Based System

## Overview

Replace the API-driven earnings lookup with a fully manual, user-managed events system. Users create events (earnings calls, investor days, product launches, etc.) tied to portfolio companies. Companies without upcoming events show an alert prompting the user to add one.

## Database

**New table: `company_events**` — replaces `custom_earnings` for this page's data source.

```sql
CREATE TABLE public.company_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  company_slug text NOT NULL,       -- links to static company data
  company_name text NOT NULL,       -- display name
  ticker text NOT NULL,
  event_name text NOT NULL,         -- e.g. "Q3 Earnings Call", "Investor Day"
  event_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.company_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own events" ON public.company_events
  FOR ALL TO authenticated USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

## Changes to `EarningsCalendar.tsx` (full rewrite of data logic + dialog)

### Remove

- All `liveEarnings` state and `fetchLiveEarnings` / `lookup-earnings` API calls
- The ticker-lookup dialog flow (no more API search)
- The `custom_earnings` table usage
- The "Refresh" button

### Add Event Dialog (replaces Add Company)

- Button label: **"Add Event"**
- Dialog fields:
  1. **Company** — a searchable select/combobox populated from the static `companies` array (slug, name, ticker, logo). User picks from existing portfolio companies.
  2. **Event Name** — free text input (e.g. "Q4 Earnings Call", "Investor Day", "Product Launch"), this fields should suggest to the user texts based on previous entries
  3. **Event Date** — date picker
- On submit: insert into `company_events` table

### Data Flow

- On mount, fetch all rows from `company_events` (user's own, via RLS)
- Build the entry list from DB rows only (no more merging static `earningsDate` fields)
- Each card shows: company logo/name, event name, date, days remaining countdown

### Feed View Cards

- Show: company logo + name, ticker, **event name** (e.g. "Q3 Earnings Call"), date, countdown badge
- Sorted by closest upcoming first, past events dimmed at bottom
- Clicking navigates to company dashboard if slug exists
- Delete button (X) on hover to remove event

### Alert Mode — Companies Without Events

- At the top of the feed, show an alert/banner section for any portfolio company (from `companies` array) that has **no future events** in `company_events`
- Each alert: company logo + name + "No upcoming events" + an "Add Event" button that opens the dialog pre-filled with that company

### Calendar View

- Same grid layout, but entries now show event name instead of just ticker + company name

## Files Modified

- `src/pages/EarningsCalendar.tsx` — major rewrite
- New migration for `company_events` table

## Files NOT Changed

- Static company data files, Navbar, types — unchanged
- `lookup-earnings` edge function — left in place (other pages may use it), just no longer called from this page

## Execution Order

1. Create `company_events` migration
2. Rewrite `EarningsCalendar.tsx` with new data model, dialog, and alert section