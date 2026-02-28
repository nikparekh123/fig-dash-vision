import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Zap } from "lucide-react";

const GuidanceSection = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    {/* Q1 2026 Guidance */}
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-chart-blue" />
          <CardTitle className="text-sm font-semibold text-foreground">Q1 2026 Guidance</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-2xl font-bold text-foreground">$315–317M</div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Consensus est.</span>
            <span className="text-muted-foreground">~$305M</span>
          </div>
          <Progress value={100} className="h-1.5 bg-secondary" />
          <p className="text-[10px] font-semibold text-success">Beats consensus by ~$10–12M</p>
        </div>
      </CardContent>
    </Card>

    {/* FY2026 Revenue Forecast */}
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-success" />
          <CardTitle className="text-sm font-semibold text-foreground">FY2026 Revenue</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-2xl font-bold text-foreground">$1.37B</div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$1.366B</span>
            <span>$1.374B</span>
          </div>
          <div className="relative h-2 rounded-full bg-secondary">
            <div
              className="absolute left-[40%] right-[40%] h-full rounded-full bg-success/70"
              style={{ left: "45%", right: "45%" }}
            />
            <div
              className="absolute h-full w-[2px] bg-success"
              style={{ left: "50%" }}
            />
          </div>
          <p className="text-center text-[10px] text-muted-foreground">
            Midpoint: <span className="font-semibold text-foreground">$1.370B</span> (+29% YoY)
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Projected EPS */}
    <Card className="border-success/20 bg-success/5 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-success" />
          <CardTitle className="text-sm font-semibold text-foreground">FY2026 EPS (Est.)</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-3xl font-bold text-success">$0.25</div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            Analysts project Figma to turn profitable in FY2026, representing a major inflection point.
          </p>
          <div className="mt-2 inline-flex items-center rounded-full bg-success/10 px-2.5 py-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-success">
              Path to Profitability
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default GuidanceSection;
