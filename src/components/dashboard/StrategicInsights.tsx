import { Card, CardContent } from "@/components/ui/card";
import { Quote, ShieldCheck, Users, Landmark } from "lucide-react";

const insights = [
  {
    icon: <ShieldCheck className="h-4 w-4 text-success" />,
    title: "Why gross margin matters",
    text: "High gross margins mean Figma keeps more from every dollar of revenue—fuel for R&D and global expansion.",
  },
  {
    icon: <Users className="h-4 w-4 text-chart-blue" />,
    title: "Net dollar retention",
    text: "Indicates Figma's products are sticky; customers not only stay but spend more over time.",
  },
  {
    icon: <Landmark className="h-4 w-4 text-chart-amber" />,
    title: "Strong cash position",
    text: "Shields Figma from short-term shocks and enables aggressive investment in AI and platform growth.",
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

    {/* Why These Stand Out */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
