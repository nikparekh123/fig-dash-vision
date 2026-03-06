import { Newspaper, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { NewsItem } from "@/data/types";

const NewsSection = ({ data }: { data: NewsItem[] }) => (
  <ScrollArea className="h-[320px]">
    <div className="space-y-3 pr-4">
      {data.map((item) => (
        <a key={item.headline} href={item.url} target="_blank" rel="noopener noreferrer" className="block">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-colors cursor-pointer group">
            <CardContent className="flex items-start gap-3 p-4">
              <div className="rounded-lg bg-accent p-2 shrink-0">
                <Newspaper className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm font-medium leading-snug text-foreground group-hover:text-chart-blue transition-colors">{item.headline}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">{item.source}</p>
                  <span className="text-[10px] text-muted-foreground/60">•</span>
                  <p className="text-[10px] text-muted-foreground/60">{item.date}</p>
                  {item.tag && (
                    <Badge className="border-success/30 bg-success/10 text-success text-[10px] px-1.5 py-0 leading-4 hover:bg-success/20">{item.tag}</Badge>
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
