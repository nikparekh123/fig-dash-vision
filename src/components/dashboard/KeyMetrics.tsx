import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Percent,
  Users,
  Banknote,
  Landmark,
  Layers,
  TrendingUp,
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
    icon: <Percent className="h-4 w-4 text-success" />,
    label: "Gross Margin",
    value: "90%",
    sub: "Q2 2025 — near best-in-class SaaS",
    accent: "success" as const,
  },
  {
    icon: <TrendingUp className="h-4 w-4 text-success" />,
    label: "Net Dollar Retention",
    value: "129%",
    sub: "Existing customers expanding spend rapidly",
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
    value: "24%",
    sub: "Q2 2025 adjusted — cash generation turning positive",
    accent: "success" as const,
  },
  {
    icon: <Landmark className="h-4 w-4 text-chart-blue" />,
    label: "Cash & Securities",
    value: "$1.6B+",
    sub: "Ample runway for growth and R&D",
    accent: "blue" as const,
  },
  {
    icon: <Layers className="h-4 w-4 text-chart-amber" />,
    label: "Multi-Product Adoption",
    value: "80%",
    sub: "Use 2+ products; 66% use 3+",
    accent: "amber" as const,
  },
];

const accentMap = {
  success: { bg: "bg-success/10", text: "text-success" },
  blue: { bg: "bg-chart-blue/10", text: "text-chart-blue" },
  amber: { bg: "bg-chart-amber/10", text: "text-chart-amber" },
};

const KeyMetrics = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
