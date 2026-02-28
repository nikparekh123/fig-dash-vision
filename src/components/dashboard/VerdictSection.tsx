import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, AlertTriangle, Scale } from "lucide-react";

const VerdictSection = () => (
  <div className="space-y-4">
    {/* Strengths vs Risks */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card className="border-success/20 bg-success/5 backdrop-blur-sm">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="h-4 w-4 text-success" />
            <h3 className="text-sm font-bold text-foreground">Strengths</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              Outsize revenue growth (+40% YoY)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              Strong customer retention (136% NDR)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              Improving operating performance & EPS beat
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-danger/20 bg-danger/5 backdrop-blur-sm">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-danger" />
            <h3 className="text-sm font-bold text-foreground">Risks</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              Persistent heavy losses (-$1.25B net FY2025)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              Negative EBITDA margins (-120.7%)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              Stock down 74% in past year; high valuation risk
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    {/* Verdict */}
    <Card className="border-chart-amber/20 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Scale className="h-4 w-4 text-chart-amber" />
          <h3 className="text-sm font-bold text-foreground">⚖️ The Verdict</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Figma is a classic <span className="font-semibold text-foreground">high-growth, high-loss</span> tech story. If management delivers on guidance and turns profitable, the stock could have{" "}
          <span className="font-semibold text-success">substantial upside</span>—especially with analyst targets far above current levels. But with{" "}
          <span className="font-semibold text-danger">negative margins</span> and a battered share price, investors will need conviction (and patience) to ride out the volatility.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default VerdictSection;
