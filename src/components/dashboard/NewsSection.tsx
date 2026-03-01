import { Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  headline: string;
  source: string;
}

const newsItems: NewsItem[] = [
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
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {newsItems.map((item) => (
      <Card
        key={item.headline}
        className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-colors cursor-pointer"
      >
        <CardContent className="flex items-start gap-3 p-5">
          <div className="rounded-lg bg-accent p-2">
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-snug text-foreground">
              {item.headline}
            </p>
            <p className="text-xs text-muted-foreground">{item.source}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default NewsSection;
