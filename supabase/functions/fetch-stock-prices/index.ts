const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

async function fetchFromYahooChart(ticker: string): Promise<number | null> {
  try {
    const url = `https://query2.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=1d`;
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const meta = data?.chart?.result?.[0]?.meta;
    if (meta?.regularMarketPrice) return meta.regularMarketPrice;
    return null;
  } catch {
    return null;
  }
}

async function fetchFromGoogleFinance(ticker: string): Promise<number | null> {
  try {
    // Try scraping Google Finance page
    const url = `https://www.google.com/finance/quote/${encodeURIComponent(ticker)}:NYSE`;
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
    });
    if (!res.ok) {
      // Try NASDAQ
      const url2 = `https://www.google.com/finance/quote/${encodeURIComponent(ticker)}:NASDAQ`;
      const res2 = await fetch(url2, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      });
      if (!res2.ok) return null;
      const html2 = await res2.text();
      return extractPriceFromGoogleFinance(html2);
    }
    const html = await res.text();
    return extractPriceFromGoogleFinance(html);
  } catch {
    return null;
  }
}

function extractPriceFromGoogleFinance(html: string): number | null {
  // Google Finance embeds price in data-last-price attribute
  const match = html.match(/data-last-price="([0-9.]+)"/);
  if (match) return parseFloat(match[1]);
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

    // Fetch all tickers in parallel using Yahoo Chart API first, then Google Finance fallback
    const results = await Promise.all(
      tickers.map(async (ticker: string) => {
        // Try Yahoo Chart API first
        let price = await fetchFromYahooChart(ticker);
        if (price) return { ticker, price };

        // Fallback to Google Finance
        price = await fetchFromGoogleFinance(ticker);
        if (price) return { ticker, price };

        return { ticker, price: null };
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
