CREATE TABLE public.company_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  company_slug text NOT NULL,
  company_name text NOT NULL,
  ticker text NOT NULL,
  event_name text NOT NULL,
  event_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.company_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own events" ON public.company_events
  FOR ALL TO authenticated USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);