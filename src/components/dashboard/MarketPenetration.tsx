import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Building2, Users, ArrowRight } from "lucide-react";

const funnelSteps = [
  { label: "Monthly Active Users", value: "13M+", width: 100, accent: "bg-chart-blue" },
  { label: "Paid Customers", value: "540K", width: 72, accent: "bg-chart-amber" },
  { label: ">$10K ARR", value: "11,906", width: 32, accent: "bg-success" },
  { label: ">$100K ARR", value: "1,119", width: 12, accent: "bg-danger" },
];

const MarketPenetration = () => (
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
            <span className="text-3xl font-bold text-chart-amber">~3%</span>
            <span className="text-xs text-muted-foreground">of $33B market</span>
          </div>
          <Progress value={3} className="h-3 bg-secondary" />
          <p className="text-xs text-muted-foreground">
            ~$1B revenue against a $33B addressable market. Massive expansion runway, especially in collaborative tools like FigJam and new products (Sites, Make).
          </p>
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
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-muted-foreground">Fortune 500</span>
                <span className="font-mono font-semibold text-success">95%</span>
              </div>
              <Progress value={95} className="h-2 bg-secondary" />
            </div>
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-muted-foreground">Forbes Global 2000</span>
                <span className="font-mono font-semibold text-success">78%</span>
              </div>
              <Progress value={78} className="h-2 bg-secondary" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            High adoption rate but low average spend — signals room for significant upsell within existing enterprise accounts.
          </p>
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
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">2/3 of customers are non-designers</span> concentrated in free or lower-priced tiers (Collab seats at $3–$5/user/month). Massive potential to upsell to higher-value plans or drive adoption of Dev Mode, Sites, and Make.
          </p>
          <div className="rounded-lg border border-border/30 bg-secondary/30 p-3 space-y-1">
            <p className="text-[11px] text-muted-foreground"><span className="font-semibold text-foreground">Free/Low tier:</span> ~12.5M users at $0–$5/mo</p>
            <p className="text-[11px] text-muted-foreground"><span className="font-semibold text-foreground">Paid customers:</span> 540K at standard plans</p>
            <p className="text-[11px] text-muted-foreground"><span className="font-semibold text-foreground">High-value:</span> 11,906 at {">"}$10K ARR</p>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* User Funnel */}
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold text-foreground">User-to-Revenue Funnel</CardTitle>
        <p className="text-xs text-muted-foreground">From free users to high-value enterprise accounts</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {funnelSteps.map((step, i) => (
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
              {i < funnelSteps.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Conversion from free to paid is ~4%. Only 2.2% of paid customers reach {">"}$10K ARR — highlighting the expansion opportunity within the existing base.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default MarketPenetration;
