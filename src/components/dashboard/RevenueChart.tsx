import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const data = [
  { name: "Q4 2025", revenue: 303.8, growth: "+40%", type: "actual" },
  { name: "FY2025", revenue: 1060, growth: "+41%", type: "actual" },
  { name: "FY2026E", revenue: 1370, growth: "+29%", type: "estimate" },
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

const RevenueChart = () => (
  <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-base font-semibold text-foreground">Revenue Overview</CardTitle>
      <p className="text-xs text-muted-foreground">Quarterly, annual & forward guidance ($M)</p>
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

export default RevenueChart;
