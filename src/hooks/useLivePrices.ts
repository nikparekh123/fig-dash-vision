import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface LivePrices {
  [ticker: string]: number;
}

export function useLivePrices(tickers: string[]) {
  const [prices, setPrices] = useState<LivePrices>({});
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPrices = useCallback(async () => {
    if (tickers.length === 0) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("fetch-stock-prices", {
        body: { tickers },
      });

      if (error) {
        console.error("Error fetching live prices:", error);
        return;
      }

      if (data?.success && data.prices) {
        setPrices(data.prices);
        setLastUpdated(new Date());
      }
    } catch (err) {
      console.error("Failed to fetch live prices:", err);
    } finally {
      setLoading(false);
    }
  }, [tickers.join(",")]);

  useEffect(() => {
    fetchPrices();
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrices, 60_000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  return { prices, loading, lastUpdated, refetch: fetchPrices };
}
