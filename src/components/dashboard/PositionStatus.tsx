import { useMemo } from "react";
import { TrendingUp, TrendingDown, Clock, CircleDot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import type { PositionData } from "@/data/types";

interface Props {
  data: PositionData;
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

const fmtPnl = (n: number) => (n >= 0 ? "+" : "") + fmt(n);

const PositionStatus = ({ data }: Props) => {
  const enriched = useMemo(
    () =>
      data.positions.map((p) => {
        const multiplier = p.type === "stock" ? 1 : 100;
        const marketValue = p.quantity * p.currentPrice * multiplier;
        const costBasis = p.quantity * p.avgPrice * multiplier;
        const unrealizedPnL = marketValue - costBasis;
        return { ...p, marketValue, costBasis, unrealizedPnL };
      }),
    [data.positions],
  );

  const totalPnL = enriched.reduce((s, p) => s + p.unrealizedPnL, 0);
  const totalMarketValue = enriched.reduce((s, p) => s + p.marketValue, 0);

  const chartData = enriched.map((p) => ({
    name: p.description,
    pnl: p.unrealizedPnL,
  }));

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
          <span className={`text-lg font-bold ${totalPnL >= 0 ? "text-[hsl(var(--success))]" : "text-[hsl(var(--danger))]"}`}>
            {totalPnL >= 0 ? <TrendingUp className="mr-1 inline h-4 w-4" /> : <TrendingDown className="mr-1 inline h-4 w-4" />}
            {fmtPnl(totalPnL)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* P&L Bar Chart */}
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
              <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                formatter={(value: number) => [fmtPnl(value), "Unrealized P&L"]}
              />
              <Bar dataKey="pnl" radius={[6, 6, 0, 0]}>
                {chartData.map((entry, i) => (
                  <Cell key={i} fill={entry.pnl >= 0 ? "hsl(var(--success))" : "hsl(var(--danger))"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Positions Table */}
        <div className="rounded-lg border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 bg-secondary/30">
                <TableHead className="text-xs font-semibold text-muted-foreground">Type</TableHead>
                <TableHead className="text-xs font-semibold text-muted-foreground">Description</TableHead>
                <TableHead className="text-right text-xs font-semibold text-muted-foreground">Qty</TableHead>
                <TableHead className="text-right text-xs font-semibold text-muted-foreground">Avg Price</TableHead>
                <TableHead className="text-right text-xs font-semibold text-muted-foreground">Market Value</TableHead>
                <TableHead className="text-right text-xs font-semibold text-muted-foreground">Unrealized P&L</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enriched.map((p, i) => (
                <TableRow key={i} className="border-border/30">
                  <TableCell>
                    <Badge variant="outline" className={
                      p.type === "stock"
                        ? "border-chart-blue/50 bg-chart-blue/10 text-[hsl(var(--chart-blue))]"
                        : p.type === "call"
                          ? "border-success/50 bg-success/10 text-[hsl(var(--success))]"
                          : "border-chart-amber/50 bg-chart-amber/10 text-[hsl(var(--chart-amber))]"
                    }>
                      {p.type.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium text-foreground">{p.description}</TableCell>
                  <TableCell className="text-right text-foreground">{p.quantity.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{fmt(p.avgPrice)}</TableCell>
                  <TableCell className="text-right text-foreground">{fmt(p.marketValue)}</TableCell>
                  <TableCell className={`text-right font-semibold ${p.unrealizedPnL >= 0 ? "text-[hsl(var(--success))]" : "text-[hsl(var(--danger))]"}`}>
                    {fmtPnl(p.unrealizedPnL)}
                  </TableCell>
                </TableRow>
              ))}
              {/* Total row */}
              <TableRow className="border-t-2 border-border bg-secondary/20">
                <TableCell colSpan={4} className="font-semibold text-foreground">Total</TableCell>
                <TableCell className="text-right font-semibold text-foreground">{fmt(totalMarketValue)}</TableCell>
                <TableCell className={`text-right font-bold text-lg ${totalPnL >= 0 ? "text-[hsl(var(--success))]" : "text-[hsl(var(--danger))]"}`}>
                  {fmtPnl(totalPnL)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PositionStatus;
