import { Card, CardContent } from "@/components/ui/card";

const SummarySection = () => (
  <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
    <CardContent className="p-6 space-y-5">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">🚀 Revenue Roars, Losses Persist</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Figma's top line is on a tear: Q4 revenue was up <span className="font-semibold text-success">40% YoY</span>, pushing full-year 2025 revenue to{" "}
          <span className="font-semibold text-foreground">$1.06 billion (+41%)</span>. That's the kind of growth most SaaS companies dream about, but it comes at a price. Net income for FY2025 was{" "}
          <span className="font-semibold text-danger">-$1.25 billion</span>, with EBITDA margin at a bruising{" "}
          <span className="font-semibold text-danger">-120.7%</span> for the year. In plain English: Figma is growing quickly, but profitability is still out of reach—at least for now.
        </p>
      </div>
      <div className="h-px bg-border/50" />
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">📈 Guidance: Bullish on 2026</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Management isn't shy about ambitious targets. Figma's Q1 2026 revenue guidance of{" "}
          <span className="font-semibold text-foreground">$315–317 million</span> trounces consensus, and full-year 2026 revenue is forecast between{" "}
          <span className="font-semibold text-foreground">$1.366–1.374 billion</span>—well above street expectations. Analysts expect Figma to tip into profitability in 2026, with a projected EPS of{" "}
          <span className="font-semibold text-success">$0.25</span> for FY2026.
        </p>
      </div>
    </CardContent>
  </Card>
);

export default SummarySection;
