const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

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

    // Use Yahoo Finance v8 API (no key required)
    const symbols = tickers.join(',');
    const url = `https://query1.finance.yahoo.com/v8/finance/spark?symbols=${encodeURIComponent(symbols)}&range=1d&interval=1d`;

    console.log('Fetching prices for:', symbols);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    if (!response.ok) {
      // Fallback: try v7 quote endpoint
      const fallbackUrl = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(symbols)}`;
      const fallbackResponse = await fetch(fallbackUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });

      if (!fallbackResponse.ok) {
        throw new Error(`Yahoo Finance API failed with status ${fallbackResponse.status}`);
      }

      const fallbackData = await fallbackResponse.json();
      const prices: Record<string, number> = {};

      for (const quote of fallbackData.quoteResponse?.result || []) {
        prices[quote.symbol] = quote.regularMarketPrice;
      }

      return new Response(
        JSON.stringify({ success: true, prices }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const prices: Record<string, number> = {};

    for (const ticker of tickers) {
      const sparkData = data[ticker];
      if (sparkData?.spark?.result?.[0]?.response?.[0]?.meta?.regularMarketPrice) {
        prices[ticker] = sparkData.spark.result[0].response[0].meta.regularMarketPrice;
      } else if (sparkData?.spark?.result?.[0]?.response?.[0]?.indicators?.quote?.[0]?.close) {
        const closes = sparkData.spark.result[0].response[0].indicators.quote[0].close;
        const lastClose = closes.filter((c: number | null) => c !== null).pop();
        if (lastClose) prices[ticker] = lastClose;
      }
    }

    console.log('Fetched prices:', prices);

    return new Response(
      JSON.stringify({ success: true, prices }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching stock prices:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch prices';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
