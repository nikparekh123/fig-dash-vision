import { Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NewsItem {
  headline: string;
  source: string;
  tag?: string;
}

const newsItems: NewsItem[] = [
  {
    headline: "Figma to offer optional AI credit subscriptions for admins starting March 11, 2026",
    source: "Figma",
    tag: "New",
  },
  {
    headline: "Figma IPO prices above expectations as design platform goes public on NYSE",
    source: "Reuters",
    tag: "IPO",
  },
  {
    headline: "Figma reports Q4 2025 revenue of $303.8M, up 40% year-over-year",
    source: "Figma",
  },
  {
    headline: "Figma expands AI-powered design features across all product tiers",
    source: "TechCrunch",
  },
  {
    headline: "High-value customer cohort ($100K+ ARR) grows 42% year-over-year",
    source: "Figma",
  },
  {
    headline: "Piper Sandler reiterates Figma stock rating on strong guidance",
    source: "Piper Sandler",
  },
  {
    headline: "Cathie Wood's ARK stock trades: Figma and Teradyne lead activity",
    source: "ARK Invest",
  },
];

const NewsSection = () => (
  <ScrollArea className="h-[320px]">
    <div className="space-y-3 pr-4">
      {newsItems.map((item) => (
        <Card
          key={item.headline}
          className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-colors cursor-pointer"
        >
          <CardContent className="flex items-start gap-3 p-4">
            <div className="rounded-lg bg-accent p-2 shrink-0">
              <Newspaper className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-snug text-foreground">
                {item.headline}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground">{item.source}</p>
                {item.tag && (
                  <Badge className="border-success/30 bg-success/10 text-success text-[10px] px-1.5 py-0 leading-4 hover:bg-success/20">
                    {item.tag}
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </ScrollArea>
);

export default NewsSection;
