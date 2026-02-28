import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
  subtitle?: string;
}

const KpiCard = ({ title, value, change, positive, icon, subtitle }: KpiCardProps) => (
  <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-colors">
    <CardContent className="p-5">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold tracking-tight text-foreground">{value}</p>
          <div className="flex items-center gap-1.5">
            {positive ? (
              <TrendingUp className="h-3.5 w-3.5 text-success" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-danger" />
            )}
            <span className={`text-xs font-semibold ${positive ? "text-success" : "text-danger"}`}>
              {change}
            </span>
            {subtitle && <span className="text-xs text-muted-foreground">· {subtitle}</span>}
          </div>
        </div>
        <div className={`rounded-lg p-2 ${positive ? "bg-success/10" : "bg-danger/10"}`}>
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const KpiCards = () => {
  const kpis: KpiCardProps[] = [
    {
      title: "Q4 Revenue",
      value: "$303.8M",
      change: "+40% YoY",
      positive: true,
      icon: <DollarSign className="h-4 w-4 text-success" />,
    },
    {
      title: "Adjusted EPS",
      value: "$0.08",
      change: "Beat $0.06 est.",
      positive: true,
      icon: <TrendingUp className="h-4 w-4 text-success" />,
      subtitle: "+33%",
    },
    {
      title: "GAAP Net Loss",
      value: "-$226.6M",
      change: "Q4 2025",
      positive: false,
      icon: <TrendingDown className="h-4 w-4 text-danger" />,
    },
    {
      title: "FY2025 Revenue",
      value: "$1.06B",
      change: "+41% YoY",
      positive: true,
      icon: <BarChart3 className="h-4 w-4 text-success" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
};

export default KpiCards;
