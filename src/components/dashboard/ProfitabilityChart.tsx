import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const yearlyData = [
  { name: "FY2024", netIncome: -74.7, ebitdaMargin: null, grossMargin: 88.3, nonGaapOpIncome: null },
  { name: "FY2025", netIncome: -1250, ebitdaMargin: -120.7, grossMargin: 82.4, nonGaapOpIncome: 129.5 },
  { name: "FY2026E", netIncome: null, ebitdaMargin: null, grossMargin: null, nonGaapOpIncome: null },
];

const quarterlyData = [
  { name: "Q1 2025", netIncome: -340.4, ebitdaMargin: -155 },
  { name: "Q2 2025", netIncome: -364.6, ebitdaMargin: -147 },
  { name: "Q3 2025", netIncome: -318.4, ebitdaMargin: -106 },
  { name: "Q4 2025", netIncome: -226.6, ebitdaMargin: -55 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{label}</p>
      {payload.map((p: any) => {
        if (p.value == null) return null;
        const isPercent = p.dataKey === "ebitdaMargin" || p.dataKey === "grossMargin";
        return (
          <p key={p.dataKey} className="text-muted-foreground">
            {p.name}: <span className="font-mono text-foreground">
              {isPercent ? `${p.value}%` : `$${Math.abs(p.value) >= 1000 ? `${(p.value / 1000).toFixed(2)}B` : `${p.value}M`}`}
            </span>
          </p>
        );
      })}
    </div>
  );
};

const ProfitabilityChart = () => {
  const [view, setView] = useState<string>("yearly");
  const data = view === "quarterly" ? quarterlyData : yearlyData;

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-foreground">Profitability & Margins</CardTitle>
            <p className="text-xs text-muted-foreground">
              {view === "quarterly" ? "FY2025 quarterly net income & EBITDA margin" : "Net income, EBITDA margin & gross margin trend"}
            </p>
          </div>
          <ToggleGroup type="single" value={view} onValueChange={(v) => v && setView(v)} size="sm" variant="outline">
            <ToggleGroupItem value="yearly" className="text-xs px-2.5 h-7">Yearly</ToggleGroupItem>
            <ToggleGroupItem value="quarterly" className="text-xs px-2.5 h-7">Quarterly</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 32.6% 17.5%)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "hsl(215 20.2% 55%)", fontSize: 12 }}
                axisLine={{ stroke: "hsl(217 32.6% 17.5%)" }}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: "hsl(215 20.2% 55%)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => (Math.abs(v) >= 1000 ? `$${(v / 1000).toFixed(1)}B` : `$${v}M`)}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "hsl(215 20.2% 55%)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(217 32.6% 17.5% / 0.4)" }} />
              <Legend
                wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
                iconType="circle"
                iconSize={8}
              />
              <Bar dataKey="netIncome" yAxisId="left" radius={[6, 6, 0, 0]} maxBarSize={64} name="Net Income">
                {data.map((entry: any, index: number) => (
                  <Cell
                    key={index}
                    fill={entry.netIncome && entry.netIncome >= 0 ? "hsl(142 76% 46%)" : "hsl(0 84% 60%)"}
                    fillOpacity={0.75}
                  />
                ))}
              </Bar>
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="ebitdaMargin"
                stroke="hsl(38 92% 50%)"
                strokeWidth={2}
                dot={{ fill: "hsl(38 92% 50%)", r: 4 }}
                name="EBITDA Margin"
                connectNulls={false}
              />
              {view === "yearly" && (
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="grossMargin"
                  stroke="hsl(217 91% 60%)"
                  strokeWidth={2}
                  strokeDasharray="6 3"
                  dot={{ fill: "hsl(217 91% 60%)", r: 4 }}
                  name="Gross Margin"
                  connectNulls={false}
                />
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        {view === "yearly" && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 rounded-lg bg-secondary/50 p-3">
              <div className="h-2 w-2 rounded-full bg-chart-blue" />
              <span className="text-xs text-muted-foreground">FY2026E Projected EPS:</span>
              <span className="text-sm font-bold text-success">$0.25</span>
              <span className="text-[10px] text-muted-foreground">— Path to profitability</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-chart-amber/5 border border-chart-amber/20 p-3">
              <div className="h-2 w-2 rounded-full bg-chart-amber" />
              <span className="text-xs text-muted-foreground">FY2025 Non-GAAP Operating Income:</span>
              <span className="text-sm font-bold text-success">$129.5M</span>
              <span className="text-[10px] text-muted-foreground">— 12% margin (vs. GAAP loss of -$1.25B driven by $1.364B SBC)</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfitabilityChart;
