import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "recharts";

const data = [
  { name: "Q4 2025", netIncome: -226.6, ebitdaMargin: -55, eps: null },
  { name: "FY2025", netIncome: -1250, ebitdaMargin: -120.7, eps: null },
  { name: "FY2026E", netIncome: null, ebitdaMargin: null, eps: 0.25 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} className="text-muted-foreground">
          {p.name}: <span className="font-mono text-foreground">
            {p.dataKey === "ebitdaMargin" ? `${p.value}%` : p.dataKey === "eps" ? `$${p.value}` : `$${Math.abs(p.value) >= 1000 ? `${(p.value / 1000).toFixed(2)}B` : `${p.value}M`}`}
          </span>
        </p>
      ))}
    </div>
  );
};

const ProfitabilityChart = () => (
  <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-base font-semibold text-foreground">Profitability & EPS</CardTitle>
      <p className="text-xs text-muted-foreground">Net income/loss, EBITDA margin & projected EPS</p>
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
            <Bar dataKey="netIncome" yAxisId="left" radius={[6, 6, 0, 0]} maxBarSize={64} name="Net Income">
              {data.map((entry, index) => (
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
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-secondary/50 p-3">
        <div className="h-2 w-2 rounded-full bg-chart-blue" />
        <span className="text-xs text-muted-foreground">FY2026E Projected EPS:</span>
        <span className="text-sm font-bold text-success">$0.25</span>
        <span className="text-[10px] text-muted-foreground">— Path to profitability</span>
      </div>
    </CardContent>
  </Card>
);

export default ProfitabilityChart;
