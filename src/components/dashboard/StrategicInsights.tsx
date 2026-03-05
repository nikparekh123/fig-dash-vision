import { Card, CardContent } from "@/components/ui/card";
import { Quote, Cpu, Users, Layers, ShieldCheck } from "lucide-react";

const insights = [
  {
    icon: <Cpu className="h-4 w-4 text-chart-amber" />,
    title: "AI: Double-edged sword",
    text: "Drives revenue growth but compresses margins — cost of revenue grew 112% vs 41% revenue growth. AI inference costs rising. Simultaneously threatens per-seat model if AI agents replace human collaborators.",
  },
  {
    icon: <Users className="h-4 w-4 text-chart-blue" />,
    title: "2/3 of users are non-designers",
    text: "Validates Figma as a cross-functional platform OS, not just a design tool. Developers, PMs, researchers, and marketers make up the majority of monthly active users.",
  },
  {
    icon: <Layers className="h-4 w-4 text-danger" />,
    title: "8 products, 1,886 employees",
    text: "Execution risk: multi-product expansion (Dev Mode, Sites, Make, Buzz, Draw, Slides) while simultaneously managing AI billing model launch in March 2026.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-success" />,
    title: "FedRAMP authorized",
    text: "Received FedRAMP authorization in early 2025, opening the U.S. federal government market — a new growth vector with high stickiness and long contract cycles.",
  },
];

const StrategicInsights = () => (
  <div className="space-y-4">
    {/* CEO Quote */}
    <Card className="border-chart-blue/20 bg-chart-blue/5 backdrop-blur-sm">
      <CardContent className="p-5">
        <div className="flex gap-3">
          <Quote className="h-5 w-5 shrink-0 text-chart-blue mt-0.5" />
          <div>
            <blockquote className="text-sm italic leading-relaxed text-foreground">
              "Today, virtually every business is becoming a software business, and AI has made software easier than ever to create. We have a massive opportunity in front of us, and we intend to capture it. We're willing to take big swings if we truly believe in them."
            </blockquote>
            <p className="mt-2 text-xs font-semibold text-muted-foreground">
              — Dylan Field, CEO
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Strategic Insights */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {insights.map((i) => (
        <Card key={i.title} className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {i.icon}
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
