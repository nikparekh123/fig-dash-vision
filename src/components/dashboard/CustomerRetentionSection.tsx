import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Globe, AlertTriangle } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell, PieChart, Pie,
} from "recharts";
import type { RetentionData } from "@/data/types";

const ChartTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} className="text-muted-foreground">
          {p.name}: <span className="font-mono text-foreground">{p.value.toLocaleString()}</span>
        </p>
      ))}
    </div>
  );
};

const TierChart = ({ title, subtitle, data }: { title: string; subtitle: string; data: { year: string; value: number; type: string }[] }) => {
  if (!data.length) return null;
  return (
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
              <XAxis dataKey="year" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} axisLine={{ stroke: "hsl(var(--muted))" }} tickLine={false} />
              <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(1)}K` : `${v}`} />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.4)" }} />
              <Bar dataKey="value" name="Value" radius={[4, 4, 0, 0]} maxBarSize={40}>
                {data.map((_, i) => (<Cell key={i} fill="hsl(var(--success))" fillOpacity={0.85} />))}
                <LabelList dataKey="value" position="top" fill="hsl(var(--foreground))" fontSize={10} formatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(1)}K` : `${v}`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const PieTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const data = payload[0];
  const percent = typeof data?.percent === "number" ? (data.percent * 100).toFixed(1) : "N/A";
  return (
    <div className="rounded-lg border border-border/50 bg-card px-3 py-2 text-xs shadow-xl">
      <p className="font-semibold text-foreground">{data.name}</p>
      <p className="text-muted-foreground">Value: <span className="font-mono text-foreground">{data.value.toLocaleString()}</span></p>
      <p className="text-muted-foreground">Share: <span className="font-mono text-foreground">{percent}%</span></p>
    </div>
  );
};

const RegionalSection = ({ data }: { data: RetentionData["regional"] }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-chart-blue" />
          <CardTitle className="text-sm font-semibold text-foreground">Regional Breakdown</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<PieTooltip />} />
              <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {data.map((entry, i) => (<Cell key={i} fill={entry.fill} fillOpacity={0.85} />))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2 text-xs">
          {data.map((item, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-muted-foreground">{item.name}</span>
              <span className="font-mono font-semibold text-foreground">{item.value.toLocaleString()}</span>
            </div>
          ))}
          <div className="border-t border-border/30 pt-2 flex justify-between font-semibold">
            <span className="text-foreground">Total</span>
            <span className="font-mono text-foreground">{total.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CustomerRetentionSection = ({ data }: { data: RetentionData }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card className="border-success/20 bg-success/5 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-success" />
            <CardTitle className="text-sm font-semibold text-foreground">Net Dollar Retention</CardTitle>
            {data.ndr.value !== "N/A" && (
              <Badge className="border-chart-amber/30 bg-chart-amber/10 text-chart-amber text-[10px] px-1.5 py-0 leading-4 hover:bg-chart-amber/20">Monitor</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-4xl font-bold text-success">{data.ndr.value}</div>
          <p className="text-xs text-muted-foreground">{data.ndr.description}</p>
        </CardContent>
      </Card>
      <RegionalSection data={data.regional} />
    </div>

    {data.ndrNote && (
      <div className="flex items-start gap-2 rounded-lg border border-chart-amber/20 bg-chart-amber/5 p-3">
        <AlertTriangle className="h-4 w-4 shrink-0 text-chart-amber mt-0.5" />
        <p className="text-xs text-muted-foreground">{data.ndrNote}</p>
      </div>
    )}

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {data.tier10k.length > 0 && (
        <TierChart title={data.tier10kTitle || "Customers >$10K ARR"} subtitle="Growth trend" data={data.tier10k} />
      )}
      {data.tier100k.length > 0 && (
        <TierChart title={data.tier100kTitle || "Customers >$100K ARR"} subtitle="Growth trend" data={data.tier100k} />
      )}
    </div>
  </div>
);

export default CustomerRetentionSection;
