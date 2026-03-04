import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Globe, DollarSign } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const ndrData = {
  value: "136%",
  description:
    "Customers are not only sticking around but spending more — a strong signal of product-market fit and expansion revenue.",
};

const tier10kData = [
  { year: "2023", value: 7.2, type: "actual" },
  { year: "2024", value: 10.5, type: "actual" },
  { year: "2025", value: 13.9, type: "actual" },
  { year: "2026E", value: 16.3, type: "estimate" },
  { year: "2027E", value: 18.0, type: "estimate" },
];

const tier100kData = [
  { year: "2023", value: 0.6, type: "actual" },
  { year: "2024", value: 1.0, type: "actual" },
  { year: "2025", value: 1.4, type: "actual" },
  { year: "2026E", value: 1.7, type: "estimate" },
  { year: "2027E", value: 2.0, type: "estimate" },
];

const regionalData = [
  { region: "United States", y2023: 252.3, y2024: 359.4, y2025: 491.5 },
  { region: "International", y2023: 252.6, y2024: 389.6, y2025: 564.2 },
];

const ChartTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-muted-foreground">
          {p.name}: <span className="font-mono text-foreground">{p.value}M</span>
        </p>
      ))}
    </div>
  );
};

const TierChart = ({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: typeof tier10kData;
}) => (
  <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-semibold text-foreground">{title}</CardTitle>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </CardHeader>
    <CardContent>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 16, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              axisLine={{ stroke: "hsl(var(--muted))" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}M`}
            />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
            <Bar dataKey="value" name="Customers" radius={[4, 4, 0, 0]} maxBarSize={40}>
              {data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.type === "estimate" ? "hsl(var(--chart-blue))" : "hsl(var(--success))"}
                  fillOpacity={entry.type === "estimate" ? 0.6 : 0.85}
                />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                fill="hsl(var(--foreground))"
                fontSize={10}
                formatter={(v: number) => `${v}M`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

const RegionalTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.fill }} className="text-muted-foreground">
          {p.name}: <span className="font-mono text-foreground">${p.value}M</span>
        </p>
      ))}
    </div>
  );
};

const CustomerRetentionSection = () => (
  <div className="space-y-4">
    {/* NDR Card */}
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card className="border-success/20 bg-success/5 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-success" />
            <CardTitle className="text-sm font-semibold text-foreground">Net Dollar Retention</CardTitle>
            <Badge className="border-chart-amber/30 bg-chart-amber/10 text-chart-amber text-[10px] px-1.5 py-0 leading-4 hover:bg-chart-amber/20">
              Monitor
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-4xl font-bold text-success">{ndrData.value}</div>
          <p className="text-xs text-muted-foreground">{ndrData.description}</p>
        </CardContent>
      </Card>

      {/* Regional Performance */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm lg:col-span-2">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-chart-blue" />
            <CardTitle className="text-sm font-semibold text-foreground">Regional Revenue</CardTitle>
          </div>
          <p className="text-xs text-muted-foreground">US vs International ($M)</p>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalData} margin={{ top: 16, right: 8, left: 8, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" vertical={false} />
                <XAxis
                  dataKey="region"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  axisLine={{ stroke: "hsl(var(--muted))" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `$${v}M`}
                />
                <Tooltip content={<RegionalTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
                <Bar dataKey="y2023" name="2023" fill="hsl(var(--chart-amber))" fillOpacity={0.7} radius={[4, 4, 0, 0]} maxBarSize={28} />
                <Bar dataKey="y2024" name="2024" fill="hsl(var(--chart-blue))" fillOpacity={0.8} radius={[4, 4, 0, 0]} maxBarSize={28} />
                <Bar dataKey="y2025" name="2025" fill="hsl(var(--success))" fillOpacity={0.85} radius={[4, 4, 0, 0]} maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-chart-amber/70" />2023</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-chart-blue/80" />2024</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-success/85" />2025</span>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Customer Tier Charts */}
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <TierChart
        title="Customers >$10K ARR"
        subtitle="High-value segment growth (millions)"
        data={tier10kData}
      />
      <TierChart
        title="Customers >$100K ARR"
        subtitle="Enterprise segment growth (millions)"
        data={tier100kData}
      />
    </div>
  </div>
);

export default CustomerRetentionSection;
