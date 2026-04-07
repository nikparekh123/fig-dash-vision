import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList,
} from "recharts";
import type { RevenueChartData } from "@/data/types";

const formatValue = (v: number) => v >= 1000 ? `$${(v / 1000).toFixed(v >= 10000 ? 1 : 2)}B` : `$${v}M`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const entry = payload[0]?.payload;
  return (
    <div className="rounded-xl border border-border bg-card px-3 py-2 text-xs">
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
          <span className="text-chart-blue ml-1 text-[10px]">{entry.billingsGrowth}</span>
        </p>
      )}
    </div>
  );
};

const RevenueChart = ({ data }: { data: RevenueChartData }) => {
  const [view, setView] = useState<string>("yearly");
  const chartData = view === "quarterly" ? data.quarterly : data.yearly;

  return (
    <Card className="bg-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-foreground">Revenue & Billings Overview</CardTitle>
            <p className="text-xs text-muted-foreground">
              {view === "quarterly" ? data.quarterlySubtitle : data.yearlySubtitle}
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
            <BarChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(170 40% 16%)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "hsl(165 25% 38%)", fontSize: 12 }} axisLine={{ stroke: "hsl(170 40% 16%)" }} tickLine={false} />
              <YAxis tick={{ fill: "hsl(165 25% 38%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => formatValue(v)} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(170 40% 16% / 0.4)" }} />
              <Bar dataKey="revenue" name="Revenue" fill="hsl(120 30% 73%)" fillOpacity={0.85} radius={[6, 6, 0, 0]} maxBarSize={48}>
                <LabelList dataKey="revenueGrowth" position="top" fill="hsl(120 30% 73%)" fontSize={10} fontWeight={600} />
              </Bar>
              {view === "yearly" && data.showBillings && (
                <Bar dataKey="billings" name="Billings" fill="hsl(170 50% 40%)" fillOpacity={0.7} radius={[6, 6, 0, 0]} maxBarSize={48}>
                  <LabelList dataKey="billingsGrowth" position="top" fill="hsl(170 50% 40%)" fontSize={10} fontWeight={600} />
                </Bar>
              )}
              <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} iconType="square" iconSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
