import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Globe, AlertTriangle } from "lucide-react";
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
  PieChart,
  Pie,
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

const PieTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const data = payload[0];
  const percent = typeof data?.percent === "number" ? (data.percent * 100).toFixed(1) : "N/A";
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{data.name}</p>
      <p className="text-muted-foreground">
        Revenue: <span className="font-mono text-foreground">${data.value}M</span>
      </p>
      <p className="text-muted-foreground">
        Share: <span className="font-mono text-foreground">{percent}%</span>
      </p>
    </div>
  );
};

const RegionalRetentionSection = () => {
  const pieData = [
    { name: "United States", value: 491.5, fill: "hsl(var(--chart-blue))" },
    { name: "International", value: 564.2, fill: "hsl(var(--success))" },
  ];

  const totalRevenue = pieData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-chart-blue" />
          <CardTitle className="text-sm font-semibold text-foreground">Regional Revenue</CardTitle>
        </div>
        <p className="text-xs text-muted-foreground">2025 Distribution ($M)</p>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Tooltip content={<PieTooltip />} />
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} fillOpacity={0.85} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-chart-blue/85" />
              United States
            </span>
            <span className="font-mono font-semibold text-foreground">$491.5M</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success/85" />
              International
            </span>
            <span className="font-mono font-semibold text-foreground">$564.2M</span>
          </div>
          <div className="border-t border-border/30 pt-2 flex justify-between font-semibold">
            <span className="text-foreground">Total</span>
            <span className="font-mono text-foreground">${totalRevenue.toFixed(1)}M</span>
          </div>
        </div>
      </CardContent>
    </Card>
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

      <RegionalRetentionSection />
    </div>

    {/* NDR Methodology Warning */}
    <div className="flex items-start gap-2 rounded-lg border border-chart-amber/20 bg-chart-amber/5 p-3">
      <AlertTriangle className="h-4 w-4 shrink-0 text-chart-amber mt-0.5" />
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">NDR methodology note:</span> Calculated only on customers with {">"}$10K ARR — a self-selecting cohort of the healthiest accounts. Excludes smaller customers. The company pre-warns this metric may "fluctuate or decline" due to pricing changes, growing revenue base, and the March 2025 billing model update which introduced administrator controls that may inhibit seat upgrades.
      </p>
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
