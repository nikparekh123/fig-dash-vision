import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const yearlyData = [
  { name: "FY2025", revenue: 1060, growth: "+41%", type: "actual" },
  { name: "FY2026E", revenue: 1370, growth: "+29%", type: "estimate" },
];

const quarterlyData = [
  { name: "Q1 2025", revenue: 209.2, growth: "+44%", type: "actual" },
  { name: "Q2 2025", revenue: 247.8, growth: "+45%", type: "actual" },
  { name: "Q3 2025", revenue: 299.2, growth: "+40%", type: "actual" },
  { name: "Q4 2025", revenue: 303.8, growth: "+40%", type: "actual" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{label}</p>
      <p className="text-muted-foreground">
        Revenue: <span className="font-mono text-foreground">${payload[0].value >= 1000 ? `${(payload[0].value / 1000).toFixed(2)}B` : `${payload[0].value}M`}</span>
      </p>
      <p className="text-success text-[10px]">{payload[0].payload.growth} YoY</p>
    </div>
  );
};

const RevenueChart = () => {
  const [view, setView] = useState<string>("yearly");
  const data = view === "quarterly" ? quarterlyData : yearlyData;

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-foreground">Revenue Overview</CardTitle>
            <p className="text-xs text-muted-foreground">
              {view === "quarterly" ? "FY2025 quarterly breakdown ($M)" : "Annual & forward guidance ($M)"}
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
            <BarChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 32.6% 17.5%)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "hsl(215 20.2% 55%)", fontSize: 12 }}
                axisLine={{ stroke: "hsl(217 32.6% 17.5%)" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "hsl(215 20.2% 55%)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => (v >= 1000 ? `$${v / 1000}B` : `$${v}M`)}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(217 32.6% 17.5% / 0.4)" }} />
              <Bar dataKey="revenue" radius={[6, 6, 0, 0]} maxBarSize={64}>
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.type === "estimate" ? "hsl(217 91% 60%)" : "hsl(142 76% 46%)"}
                    fillOpacity={entry.type === "estimate" ? 0.6 : 0.85}
                  />
                ))}
                <LabelList
                  dataKey="growth"
                  position="top"
                  fill="hsl(142 76% 46%)"
                  fontSize={11}
                  fontWeight={600}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
