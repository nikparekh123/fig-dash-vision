import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { KpiItem } from "@/data/types";

interface KpiCardProps extends KpiItem {
  icon: React.ReactNode;
}

const iconMap = [
  <DollarSign className="h-4 w-4 text-success" />,
  <TrendingUp className="h-4 w-4 text-success" />,
  <TrendingDown className="h-4 w-4 text-danger" />,
  <BarChart3 className="h-4 w-4 text-success" />,
];

const KpiCard = ({ title, value, change, positive, icon, subtitle }: KpiCardProps) => (
  <Card className="bg-card hover:bg-card/80 transition-colors">
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

const KpiCards = ({ data }: { data: KpiItem[] }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {data.map((kpi, i) => (
      <KpiCard
        key={kpi.title}
        {...kpi}
        icon={kpi.positive ? iconMap[0] : iconMap[2]}
      />
    ))}
  </div>
);

export default KpiCards;
