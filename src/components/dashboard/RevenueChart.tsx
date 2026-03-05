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
  Legend,
  LabelList,
} from "recharts";

const yearlyData = [
  { name: "FY2023", revenue: 505, billings: 600, revenueGrowth: "+48%", billingsGrowth: "~est.", type: "actual" },
  { name: "FY2024", revenue: 749, billings: 877, revenueGrowth: "+48%", billingsGrowth: "+46%", type: "actual" },
  { name: "FY2025", revenue: 1056, billings: 1270, revenueGrowth: "+41%", billingsGrowth: "+45%", type: "actual" },
  { name: "FY2026E", revenue: 1370, billings: null, revenueGrowth: "+29%", billingsGrowth: null, type: "estimate" },
];

const quarterlyData = [
  { name: "Q1 2025", revenue: 209.2, growth: "+44%", type: "actual" },
  { name: "Q2 2025", revenue: 247.8, growth: "+45%", type: "actual" },
  { name: "Q3 2025", revenue: 299.2, growth: "+40%", type: "actual" },
  { name: "Q4 2025", revenue: 303.8, growth: "+40%", type: "actual" },
];

const formatValue = (v: number) => v >= 1000 ? `$${(v / 1000).toFixed(2)}B` : `$${v}M`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const entry = payload[0]?.payload;
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {entry.revenue != null && (
        <p className="text-muted-foreground">
          Revenue: <span className="font-mono text-foreground">{formatValue(entry.revenue)}</span>
          <span className="text-success ml-1 text-[10px]">{entry.revenueGrowth || entry.growth}</span>
        </p>
      )}
      {entry.billings != null && (
        <p className="text-muted-foreground">
          Billings: <span className="font-mono text-foreground">{formatValue(entry.billings)}</span>
          <span className="text-[hsl(217,91%,60%)] ml-1 text-[10px]">{entry.billingsGrowth}</span>
        </p>
      )}
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
            <CardTitle className="text-base font-semibold text-foreground">Revenue & Billings Overview</CardTitle>
            <p className="text-xs text-muted-foreground">
              {view === "quarterly" ? "FY2025 quarterly breakdown ($M)" : "FY2023–FY2026E revenue & billings ($M)"}
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
              <Bar dataKey="revenue" name="Revenue" fill="hsl(142 76% 46%)" fillOpacity={0.85} radius={[6, 6, 0, 0]} maxBarSize={48}>
                <LabelList
                  dataKey="revenueGrowth"
                  position="top"
                  fill="hsl(142 76% 46%)"
                  fontSize={10}
                  fontWeight={600}
                />
              </Bar>
              {view === "yearly" && (
                <Bar dataKey="billings" name="Billings" fill="hsl(217 91% 60%)" fillOpacity={0.7} radius={[6, 6, 0, 0]} maxBarSize={48}>
                  <LabelList
                    dataKey="billingsGrowth"
                    position="top"
                    fill="hsl(217 91% 60%)"
                    fontSize={10}
                    fontWeight={600}
                  />
                </Bar>
              )}
              <Legend
                wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
                iconType="square"
                iconSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
