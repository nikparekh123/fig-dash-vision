import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Building2, Users, ArrowRight } from "lucide-react";
import type { MarketPenetrationData } from "@/data/types";

const MarketPenetration = ({ data }: { data: MarketPenetrationData }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* TAM Penetration */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-chart-amber" />
            <CardTitle className="text-sm font-semibold text-foreground">TAM Penetration</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-chart-amber">{data.tam.percentage}</span>
            <span className="text-xs text-muted-foreground">of {data.tam.market}</span>
          </div>
          <Progress value={parseInt(data.tam.percentage) || 3} className="h-3 bg-secondary" />
          <p className="text-xs text-muted-foreground">{data.tam.description}</p>
        </CardContent>
      </Card>

      {/* Enterprise Adoption */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-success" />
            <CardTitle className="text-sm font-semibold text-foreground">Enterprise Adoption</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            {data.enterprise.items.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-mono font-semibold text-success">{item.display}</span>
                </div>
                <Progress value={item.value} className="h-2 bg-secondary" />
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{data.enterprise.description}</p>
        </CardContent>
      </Card>

      {/* Upsell Runway */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-chart-blue" />
            <CardTitle className="text-sm font-semibold text-foreground">Upsell Runway</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs text-muted-foreground">{data.upsell.description}</p>
          <div className="rounded-lg border border-border/30 bg-secondary/30 p-3 space-y-1">
            {data.upsell.tiers.map((t) => (
              <p key={t.label} className="text-[11px] text-muted-foreground">
                <span className="font-semibold text-foreground">{t.label}:</span> {t.detail}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>

    {/* User Funnel */}
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold text-foreground">User-to-Revenue Funnel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {data.funnel.steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="w-24 shrink-0 text-right">
                <span className="text-xs font-mono font-semibold text-foreground">{step.value}</span>
              </div>
              <div className="flex-1">
                <div
                  className={`${step.accent} h-8 rounded flex items-center px-3 transition-all`}
                  style={{ width: `${step.width}%`, opacity: 0.8 }}
                >
                  <span className="text-[11px] font-medium text-foreground truncate">{step.label}</span>
                </div>
              </div>
              {i < data.funnel.steps.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">{data.funnel.description}</p>
      </CardContent>
    </Card>
  </div>
);

export default MarketPenetration;
