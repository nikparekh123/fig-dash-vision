const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

async function fetchPrice(ticker: string): Promise<number | null> {
  // Strategy 1: Yahoo Finance v8 chart API
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=1d`;
    console.log(`[${ticker}] Trying Yahoo chart: ${url}`);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
    });
    console.log(`[${ticker}] Yahoo chart status: ${res.status}`);
    if (res.ok) {
      const data = await res.json();
      const price = data?.chart?.result?.[0]?.meta?.regularMarketPrice;
      if (price) {
        console.log(`[${ticker}] Yahoo chart price: ${price}`);
        return price;
      }
      console.log(`[${ticker}] Yahoo chart no price in response`);
    }
  } catch (e) {
    console.error(`[${ticker}] Yahoo chart error:`, e);
  }

  // Strategy 2: Yahoo Finance v6 quote API
  try {
    const url = `https://query1.finance.yahoo.com/v6/finance/quote?symbols=${encodeURIComponent(ticker)}`;
    console.log(`[${ticker}] Trying Yahoo v6 quote`);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
    });
    console.log(`[${ticker}] Yahoo v6 status: ${res.status}`);
    if (res.ok) {
      const data = await res.json();
      const price = data?.quoteResponse?.result?.[0]?.regularMarketPrice;
      if (price) {
        console.log(`[${ticker}] Yahoo v6 price: ${price}`);
        return price;
      }
    }
  } catch (e) {
    console.error(`[${ticker}] Yahoo v6 error:`, e);
  }

  // Strategy 3: Google Finance scrape
  try {
    const exchanges = ['NYSE', 'NASDAQ'];
    for (const exchange of exchanges) {
      const url = `https://www.google.com/finance/quote/${encodeURIComponent(ticker)}:${exchange}`;
      console.log(`[${ticker}] Trying Google Finance: ${url}`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        },
      });
      console.log(`[${ticker}] Google Finance ${exchange} status: ${res.status}`);
      if (res.ok) {
        const html = await res.text();
        const match = html.match(/data-last-price="([0-9.]+)"/);
        if (match) {
          const price = parseFloat(match[1]);
          console.log(`[${ticker}] Google Finance price: ${price}`);
          return price;
        }
      }
    }
  } catch (e) {
    console.error(`[${ticker}] Google Finance error:`, e);
  }

  console.log(`[${ticker}] All strategies failed`);
  return null;
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

    console.log('Fetching prices for:', tickers.join(','));

    const prices: Record<string, number> = {};

    const results = await Promise.all(
      tickers.map(async (ticker: string) => {
        const price = await fetchPrice(ticker);
        return { ticker, price };
      })
    );

    for (const r of results) {
      if (r.price !== null) {
        prices[r.ticker] = r.price;
      }
    }

    console.log('Fetched prices:', JSON.stringify(prices));

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
