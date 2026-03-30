const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const AI_GATEWAY_URL = 'https://ai.gateway.lovable.dev/v1/chat/completions';

async function lookupEarnings(tickers: string[]): Promise<Record<string, { name: string; earningsDate: string } | null>> {
  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  if (!LOVABLE_API_KEY) {
    throw new Error('LOVABLE_API_KEY is not configured');
  }

  const tickerList = tickers.join(', ');
  const today = new Date().toISOString().split('T')[0];

  const response = await fetch(AI_GATEWAY_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LOVABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'google/gemini-3-flash-preview',
      messages: [
        {
          role: 'system',
          content: `You are a financial data assistant. Today's date is ${today}. When asked about earnings dates, return the NEXT UPCOMING earnings date (the nearest future date). If the next earnings date is not yet announced, estimate based on historical quarterly patterns. Always respond with valid JSON only, no markdown.`,
        },
        {
          role: 'user',
          content: `For each of these stock tickers, provide the company name and next upcoming earnings date: ${tickerList}

Return a JSON object where each key is the ticker symbol and the value is an object with "name" (full company name) and "earningsDate" (in YYYY-MM-DD format). Example:
{"AAPL": {"name": "Apple Inc.", "earningsDate": "2026-04-30"}}`,
        },
      ],
      temperature: 0.1,
    }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`AI Gateway call failed [${response.status}]: ${errBody}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || '{}';
  
  // Strip markdown code fences if present
  const cleaned = content.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
  
  try {
    return JSON.parse(cleaned);
  } catch {
    console.error('Failed to parse AI response:', content);
    return {};
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { tickers } = await req.json();

    if (!tickers || !Array.isArray(tickers) || tickers.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'tickers array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Looking up earnings for:', tickers.join(', '));

    const results = await lookupEarnings(tickers);

    console.log('Earnings results:', JSON.stringify(results));

    return new Response(
      JSON.stringify({ success: true, results }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error looking up earnings:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to lookup earnings';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
