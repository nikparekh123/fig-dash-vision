import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Scale } from "lucide-react";
import type { SummaryData } from "@/data/types";

const SummarySection = ({ data }: { data: SummaryData }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Lynch Pitch */}
      <Card className="border-success/20 bg-success/5 backdrop-blur-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            <h3 className="text-base font-bold text-foreground">{data.lynchPitch.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{data.lynchPitch.description}</p>
          <div className="space-y-1.5 text-sm text-muted-foreground">
            {data.lynchPitch.bullets.map((b, i) => (
              <p key={i}>• <span className="font-semibold text-success">{b}</span></p>
            ))}
          </div>
          <div className="border-t border-success/20 pt-3">
            <p className="text-xs font-semibold text-foreground mb-1">What must go right:</p>
            <p className="text-xs text-muted-foreground">{data.lynchPitch.whatMustGoRight}</p>
          </div>
        </CardContent>
      </Card>

      {/* Munger Inversion */}
      <Card className="border-danger/20 bg-danger/5 backdrop-blur-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-danger" />
            <h3 className="text-base font-bold text-foreground">{data.mungerInvert.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{data.mungerInvert.description}</p>
          <div className="space-y-1.5 text-sm text-muted-foreground">
            <p className="text-xs font-semibold text-foreground mb-1">Watch signals:</p>
            {data.mungerInvert.watchSignals.map((s, i) => (
              <p key={i}>• <span className="font-semibold text-danger">{s}</span></p>
            ))}
          </div>
          {data.mungerInvert.quote && (
            <div className="border-t border-danger/20 pt-3">
              <p className="text-xs italic text-muted-foreground">{data.mungerInvert.quote}</p>
              {data.mungerInvert.quoteSource && (
                <p className="text-[10px] font-semibold text-muted-foreground mt-1">— {data.mungerInvert.quoteSource}</p>
              )}
            </div>
          )}
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
        {data.verdict.map((p, i) => (
          <p key={i} className={`text-sm leading-relaxed text-muted-foreground ${i > 0 ? "mt-3" : ""}`}>{p}</p>
        ))}
      </CardContent>
    </Card>
  </div>
);

export default SummarySection;
