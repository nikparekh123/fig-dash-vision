import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Percent,
  Users,
  Banknote,
  Landmark,
  Layers,
  TrendingUp,
  Clock,
  BarChart3,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const metrics: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  accent: "success" | "blue" | "amber";
  monitor?: boolean;
}[] = [
  {
    icon: <Percent className="h-4 w-4 text-chart-amber" />,
    label: "Gross Margin (GAAP)",
    value: "82.4%",
    sub: "FY2025 — down from 88.3% in FY2024. AI inference costs compressing margins.",
    accent: "amber" as const,
    monitor: true,
  },
  {
    icon: <TrendingUp className="h-4 w-4 text-success" />,
    label: "Net Dollar Retention",
    value: "136%",
    sub: "Customers with >$10K ARR expanding spend rapidly",
    accent: "success" as const,
    monitor: true,
  },
  {
    icon: <Users className="h-4 w-4 text-chart-blue" />,
    label: "Paid Customers >$10K ARR",
    value: "11,900+",
    sub: "High-value (>$100K) grew 42% YoY",
    accent: "blue" as const,
  },
  {
    icon: <Banknote className="h-4 w-4 text-success" />,
    label: "Free Cash Flow Margin",
    value: "23%",
    sub: "$242.7M FCF — first year of clean generation at scale",
    accent: "success" as const,
  },
  {
    icon: <Landmark className="h-4 w-4 text-chart-blue" />,
    label: "Cash & Securities",
    value: "$1.66B",
    sub: "Zero debt. Includes $73.7M Bitcoin ETF. Ample runway.",
    accent: "blue" as const,
  },
  {
    icon: <Layers className="h-4 w-4 text-chart-amber" />,
    label: "Multi-Product Adoption",
    value: "80%",
    sub: "Use 2+ products; 66% use 3+",
    accent: "amber" as const,
  },
  {
    icon: <Clock className="h-4 w-4 text-chart-amber" />,
    label: "Deferred Revenue",
    value: "$595M",
    sub: "Up from $381M — contractually committed future revenue already billed",
    accent: "amber" as const,
  },
  {
    icon: <BarChart3 className="h-4 w-4 text-success" />,
    label: "Non-GAAP Op. Income",
    value: "$129.5M",
    sub: "12% Non-GAAP operating margin in FY2025",
    accent: "success" as const,
  },
];

const accentMap = {
  success: { bg: "bg-success/10", text: "text-success" },
  blue: { bg: "bg-chart-blue/10", text: "text-chart-blue" },
  amber: { bg: "bg-chart-amber/10", text: "text-chart-amber" },
};

const KeyMetrics = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <Card key={m.label} className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className={`rounded-lg p-2 ${accentMap[m.accent].bg}`}>{m.icon}</div>
              <div className="space-y-0.5 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{m.label}</p>
                  {m.monitor && (
                    <Badge className="border-chart-amber/30 bg-chart-amber/10 text-chart-amber text-[10px] px-1.5 py-0 leading-4 hover:bg-chart-amber/20">
                      Monitor
                    </Badge>
                  )}
                </div>
                <p className={`text-2xl font-bold ${accentMap[m.accent].text}`}>{m.value}</p>
                <p className="text-[11px] text-muted-foreground">{m.sub}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Product adoption bar */}
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-4 space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Multi-Product Usage Breakdown</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">2+ products</span>
            <span className="font-mono text-foreground">80%</span>
          </div>
          <Progress value={80} className="h-2 bg-secondary" />
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">3+ products</span>
            <span className="font-mono text-foreground">66%</span>
          </div>
          <Progress value={66} className="h-2 bg-secondary" />
        </div>
      </CardContent>
    </Card>
  </div>
);

export default KeyMetrics;
