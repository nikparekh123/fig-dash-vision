import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertTriangle } from "lucide-react";

const SummarySection = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {/* Lynch Pitch */}
    <Card className="border-success/20 bg-success/5 backdrop-blur-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-success" />
          <h3 className="text-base font-bold text-foreground">The Lynch Pitch — Why Own This?</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Figma is becoming the <span className="font-semibold text-foreground">operating system for digital product development</span>. It is not a design tool — it is the platform where the full lifecycle of building software happens, from whiteboard to shipped code. Every new product — Dev Mode, Figma Sites, Figma Make — deepens the workflow lock and creates a new billing surface.
        </p>
        <div className="space-y-1.5 text-sm text-muted-foreground">
          <p>• <span className="font-semibold text-success">41% revenue growth</span>, $1.66B cash, zero debt</p>
          <p>• <span className="font-semibold text-success">136% NDR</span> — customers reliably spend more over time</p>
          <p>• <span className="font-semibold text-success">23% FCF margin</span> ($242.7M) — real cash generation at scale</p>
          <p>• <span className="font-semibold text-success">12% Non-GAAP operating margin</span> ($129.5M)</p>
        </div>
        <div className="border-t border-success/20 pt-3">
          <p className="text-xs font-semibold text-foreground mb-1">What must go right:</p>
          <p className="text-xs text-muted-foreground">AI credit billing transition (March 2026) must not trigger material churn. Non-GAAP margins must expand as the platform matures. New products (Sites, Make, Buzz, Draw) need to achieve adoption.</p>
        </div>
      </CardContent>
    </Card>

    {/* Munger Inversion */}
    <Card className="border-danger/20 bg-danger/5 backdrop-blur-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-danger" />
          <h3 className="text-base font-bold text-foreground">The Munger Invert — How Could You Lose?</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Paying a high price for a business whose <span className="font-semibold text-foreground">core monetization model is structurally threatened</span> by the same technology it is trying to monetize. AI is simultaneously Figma's growth narrative and its biggest existential risk.
        </p>
        <div className="space-y-1.5 text-sm text-muted-foreground">
          <p className="text-xs font-semibold text-foreground mb-1">Watch signals:</p>
          <p>• NDR declining below <span className="font-semibold text-danger">120%</span></p>
          <p>• Gross margin continuing to fall from <span className="font-semibold text-danger">82.4%</span></p>
          <p>• Billings growth decelerating faster than revenue growth</p>
          <p>• Customer backlash against AI credit billing (March 2026)</p>
          <p>• Competitor bundling full AI design at no additional cost</p>
        </div>
        <div className="border-t border-danger/20 pt-3">
          <p className="text-xs italic text-muted-foreground">
            "...there could be a decrease in the number of designers, developers, and other collaborators that use our platform if such individuals are able to significantly increase their efficiency through the use of AI capabilities alongside or instead of our platform."
          </p>
          <p className="text-[10px] font-semibold text-muted-foreground mt-1">— Figma 10-K Risk Factors</p>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default SummarySection;
