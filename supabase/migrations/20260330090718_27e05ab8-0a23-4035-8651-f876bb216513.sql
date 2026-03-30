CREATE TABLE public.custom_earnings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  company_name text NOT NULL,
  ticker text NOT NULL,
  earnings_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.custom_earnings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own earnings" ON public.custom_earnings FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);