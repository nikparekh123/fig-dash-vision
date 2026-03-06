import { Card, CardContent } from "@/components/ui/card";
import { Quote, Cpu, Target, Layers, ShieldCheck } from "lucide-react";
import type { StrategicInsightsData } from "@/data/types";

const colorIconMap = {
  amber: <Cpu className="h-4 w-4 text-chart-amber" />,
  blue: <Target className="h-4 w-4 text-chart-blue" />,
  danger: <Layers className="h-4 w-4 text-danger" />,
  success: <ShieldCheck className="h-4 w-4 text-success" />,
};

const StrategicInsights = ({ data }: { data: StrategicInsightsData }) => (
  <div className="space-y-4">
    <Card className="border-chart-blue/20 bg-chart-blue/5 backdrop-blur-sm">
      <CardContent className="p-5">
        <div className="flex gap-3">
          <Quote className="h-5 w-5 shrink-0 text-chart-blue mt-0.5" />
          <div>
            <blockquote className="text-sm italic leading-relaxed text-foreground">{data.ceoQuote.text}</blockquote>
            <p className="mt-2 text-xs font-semibold text-muted-foreground">— {data.ceoQuote.author}</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.insights.map((i) => (
        <Card key={i.title} className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {colorIconMap[i.color]}
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">{i.title}</h4>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{i.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default StrategicInsights;
