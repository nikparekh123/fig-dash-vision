import { useMemo } from "react";
import { TrendingUp, TrendingDown, Clock, CircleDot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { PositionData } from "@/data/types";

interface Props {
  data: PositionData;
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

const fmtPnl = (n: number) => (n >= 0 ? "+" : "") + fmt(n);

const fmtPct = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(2) + "%";

const PositionStatus = ({ data }: Props) => {
  const enriched = useMemo(
    () =>
      data.positions.map((p) => {
        const multiplier = p.type === "stock" ? 1 : 100;
        const marketValue = p.quantity * p.currentPrice * multiplier;
        const costBasis = p.quantity * p.avgPrice * multiplier;
        const unrealizedPnL = marketValue - costBasis;
        const pnlPct = costBasis !== 0 ? ((marketValue - costBasis) / Math.abs(costBasis)) * 100 : 0;
        return { ...p, marketValue, costBasis, unrealizedPnL, pnlPct };
      }),
    [data.positions],
  );

  const totalPnL = enriched.reduce((s, p) => s + p.unrealizedPnL, 0);
  const totalMarketValue = enriched.reduce((s, p) => s + p.marketValue, 0);
  const totalCostBasis = enriched.reduce((s, p) => s + p.costBasis, 0);
  const totalPnLPct = totalCostBasis !== 0 ? ((totalMarketValue - totalCostBasis) / Math.abs(totalCostBasis)) * 100 : 0;

  if (data.status === "waiting") {
    return (
      <Card className="border-chart-amber/30 bg-card">
        <CardHeader className="flex flex-row items-center gap-3 pb-3">
          <CardTitle className="text-lg font-semibold text-foreground">💼 Position Status</CardTitle>
          <Badge variant="outline" className="border-chart-amber/50 bg-chart-amber/10 text-[hsl(var(--chart-amber))]">
            <Clock className="mr-1 h-3 w-3" /> Waiting
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-secondary/30 p-6">
            <CircleDot className="h-5 w-5 text-[hsl(var(--chart-amber))]" />
            <p className="text-sm text-muted-foreground">{data.note || "Position pending entry"}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const isGain = totalPnL >= 0;

  return (
    <Card className="border-success/30 bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-3">
          <CardTitle className="text-lg font-semibold text-foreground">💼 Position Status</CardTitle>
          <Badge variant="outline" className="border-success/50 bg-success/10 text-[hsl(var(--success))]">
            <CircleDot className="mr-1 h-3 w-3" /> Live
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-right">
          <span className="text-xs text-muted-foreground">Total P&L</span>
          <span className={`text-lg font-bold ${isGain ? "text-[hsl(var(--success))]" : "text-[hsl(var(--danger))]"}`}>
            {isGain ? <TrendingUp className="mr-1 inline h-4 w-4" /> : <TrendingDown className="mr-1 inline h-4 w-4" />}
            {fmtPnl(totalPnL)} ({fmtPct(totalPnLPct)})
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price gauge for each position */}
        {enriched.map((p, i) => {
          const pIsGain = p.unrealizedPnL >= 0;
          const minPrice = Math.min(p.avgPrice, p.currentPrice) * 0.9;
          const maxPrice = Math.max(p.avgPrice, p.currentPrice) * 1.1;
          const range = maxPrice - minPrice;
          const avgPct = ((p.avgPrice - minPrice) / range) * 100;
          const curPct = ((p.currentPrice - minPrice) / range) * 100;
          const leftPct = Math.min(avgPct, curPct);
          const widthPct = Math.abs(curPct - avgPct);

          return (
            <div key={i} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-chart-blue/50 bg-chart-blue/10 text-[hsl(var(--chart-blue))]">
                    STOCK
                  </Badge>
                  <span className="font-semibold text-foreground">{p.description}</span>
                  <span className="text-sm text-muted-foreground">× {p.quantity.toLocaleString()} shares</span>
                </div>
                <span className={`font-bold ${pIsGain ? "text-[hsl(var(--success))]" : "text-[hsl(var(--danger))]"}`}>
                  {fmtPnl(p.unrealizedPnL)} ({fmtPct(p.pnlPct)})
                </span>
              </div>

              {/* Price range gauge */}
              <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                <div className="relative h-8 w-full rounded-full bg-secondary/50">
                  {/* Fill between avg and current */}
                  <div
                    className={`absolute top-0 h-full rounded-full ${pIsGain ? "bg-[hsl(var(--success)/0.25)]" : "bg-[hsl(var(--danger)/0.25)]"}`}
                    style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                  />
                  {/* Avg price marker */}
                  <div
                    className="absolute top-0 h-full w-0.5 bg-muted-foreground/60"
                    style={{ left: `${avgPct}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-muted-foreground">
                      Avg {fmt(p.avgPrice)}
                    </div>
                  </div>
                  {/* Current price marker */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ left: `${curPct}%`, transform: `translateX(-50%) translateY(-50%)` }}
                  >
                    <div className={`h-5 w-5 rounded-full border-2 ${pIsGain ? "border-[hsl(var(--success))] bg-[hsl(var(--success)/0.3)]" : "border-[hsl(var(--danger))] bg-[hsl(var(--danger)/0.3)]"}`} />
                    <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold ${pIsGain ? "text-[hsl(var(--success))]" : "text-[hsl(var(--danger))]"}`}>
                      Now {fmt(p.currentPrice)}
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Cost Basis</p>
                    <p className="text-sm font-semibold text-foreground">{fmt(p.costBasis)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Market Value</p>
                    <p className="text-sm font-semibold text-foreground">{fmt(p.marketValue)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Unrealized P&L</p>
                    <p className={`text-sm font-bold ${pIsGain ? "text-[hsl(var(--success))]" : "text-[hsl(var(--danger))]"}`}>
                      {fmtPnl(p.unrealizedPnL)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PositionStatus;
