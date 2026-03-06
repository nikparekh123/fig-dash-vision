import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Zap } from "lucide-react";
import type { GuidanceData } from "@/data/types";

const iconMap = {
  blue: <Target className="h-4 w-4 text-chart-blue" />,
  success: <TrendingUp className="h-4 w-4 text-success" />,
  amber: <Zap className="h-4 w-4 text-chart-amber" />,
};

const GuidanceSection = ({ data }: { data: GuidanceData }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    {data.items.map((item) => (
      <Card key={item.title} className={`border-border/50 ${item.accent === "success" ? "bg-success/5 border-success/20" : "bg-card/80"} backdrop-blur-sm`}>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            {iconMap[item.accent]}
            <CardTitle className="text-sm font-semibold text-foreground">{item.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className={`text-2xl font-bold ${item.accent === "success" ? "text-success" : "text-foreground"}`}>{item.value}</div>
          <div className="space-y-1">
            {item.details.map((d, i) => (
              <p key={i} className="text-xs text-muted-foreground">{d}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default GuidanceSection;
