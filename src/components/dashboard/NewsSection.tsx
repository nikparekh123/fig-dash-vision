import { Newspaper, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NewsItem {
  headline: string;
  source: string;
  tag?: string;
  date: string;
  url: string;
}

const newsItems: NewsItem[] = [
  {
    headline: "Figma to offer optional AI credit subscriptions for admins starting March 11, 2026",
    source: "Figma",
    tag: "New",
    date: "Mar 4, 2026",
    url: "https://www.figma.com/blog",
  },
  {
    headline: "Figma IPO prices above expectations as design platform goes public on NYSE",
    source: "Reuters",
    tag: "IPO",
    date: "Feb 27, 2026",
    url: "https://www.reuters.com/technology",
  },
  {
    headline: "Figma reports Q4 2025 revenue of $303.8M, up 40% year-over-year",
    source: "Figma",
    date: "Feb 20, 2026",
    url: "https://investor.figma.com",
  },
  {
    headline: "Figma expands AI-powered design features across all product tiers",
    source: "TechCrunch",
    date: "Feb 12, 2026",
    url: "https://techcrunch.com",
  },
  {
    headline: "High-value customer cohort ($100K+ ARR) grows 42% year-over-year",
    source: "Figma",
    date: "Feb 8, 2026",
    url: "https://investor.figma.com",
  },
  {
    headline: "Piper Sandler reiterates Figma stock rating on strong guidance",
    source: "Piper Sandler",
    date: "Jan 28, 2026",
    url: "https://www.pipersandler.com",
  },
  {
    headline: "Cathie Wood's ARK stock trades: Figma and Teradyne lead activity",
    source: "ARK Invest",
    date: "Jan 15, 2026",
    url: "https://ark-invest.com",
  },
];

const NewsSection = () => (
  <ScrollArea className="h-[320px]">
    <div className="space-y-3 pr-4">
      {newsItems.map((item) => (
        <a
          key={item.headline}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-colors cursor-pointer group">
            <CardContent className="flex items-start gap-3 p-4">
              <div className="rounded-lg bg-accent p-2 shrink-0">
                <Newspaper className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-medium leading-snug text-foreground group-hover:text-chart-blue transition-colors">
                  {item.headline}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">{item.source}</p>
                  <span className="text-[10px] text-muted-foreground/60">•</span>
                  <p className="text-[10px] text-muted-foreground/60">{item.date}</p>
                  {item.tag && (
                    <Badge className="border-success/30 bg-success/10 text-success text-[10px] px-1.5 py-0 leading-4 hover:bg-success/20">
                      {item.tag}
                    </Badge>
                  )}
                </div>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-chart-blue shrink-0 mt-1 transition-colors" />
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  </ScrollArea>
);

export default NewsSection;
