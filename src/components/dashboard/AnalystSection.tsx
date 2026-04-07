import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { AnalystData } from "@/data/types";

const sentimentIcon = {
  bullish: <TrendingUp className="h-3.5 w-3.5 text-success" />,
  bearish: <TrendingDown className="h-3.5 w-3.5 text-danger" />,
  neutral: <Minus className="h-3.5 w-3.5 text-chart-amber" />,
};

const sentimentColor = {
  bullish: "text-success",
  bearish: "text-danger",
  neutral: "text-chart-amber",
};

const AnalystSection = ({ data }: { data: AnalystData }) => (
  <Card className="bg-card">
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-semibold text-foreground">Analyst Views</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="space-y-2">
        {data.analysts.map((a) => (
          <div key={a.firm} className="flex items-center justify-between rounded-xl bg-secondary/40 px-3 py-2">
            <div className="flex items-center gap-2">
              {sentimentIcon[a.sentiment]}
              <span className="text-sm font-medium text-foreground">{a.firm}</span>
            </div>
            <div className="flex items-center gap-3">
              {a.note && <span className="text-[10px] text-muted-foreground">{a.note}</span>}
              <span className={`text-xs font-semibold ${sentimentColor[a.sentiment]}`}>{a.rating}</span>
              <span className="font-mono text-xs text-foreground">{a.target}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl bg-chart-blue/5 px-3 py-2.5">
        <div>
          <p className="text-xs text-muted-foreground">Mean Analyst Target</p>
          <p className="text-lg font-bold text-foreground">{data.meanTarget}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Current Price</p>
          <p className="text-lg font-bold text-foreground">{data.currentPrice}</p>
        </div>
        <div className="rounded-full bg-success/10 px-3 py-1">
          <span className="text-xs font-bold text-success">{data.upside}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default AnalystSection;
