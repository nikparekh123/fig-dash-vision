import { Card, CardContent } from "@/components/ui/card";
import { Percent, Banknote, Landmark, Clock, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { KeyMetricItem } from "@/data/types";

const iconList = [Percent, Banknote, Landmark, Clock, BarChart3];

const accentMap = {
  success: { bg: "bg-success/10", text: "text-success" },
  blue: { bg: "bg-chart-blue/10", text: "text-chart-blue" },
  amber: { bg: "bg-chart-amber/10", text: "text-chart-amber" },
};

const KeyMetrics = ({ data }: { data: KeyMetricItem[] }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
    {data.map((m, i) => {
      const Icon = iconList[i % iconList.length];
      return (
        <Card key={m.label} className="bg-card">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className={`rounded-lg p-2 ${accentMap[m.accent].bg}`}>
                <Icon className={`h-4 w-4 ${accentMap[m.accent].text}`} />
              </div>
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
      );
    })}
  </div>
);

export default KeyMetrics;
