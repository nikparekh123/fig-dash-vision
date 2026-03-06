import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { OwnershipData } from "@/data/types";

const COLORS = [
  "hsl(217, 91%, 60%)", "hsl(199, 89%, 48%)", "hsl(262, 83%, 58%)", "hsl(280, 67%, 50%)",
  "hsl(142, 76%, 46%)", "hsl(173, 80%, 40%)", "hsl(38, 92%, 50%)", "hsl(25, 95%, 53%)",
  "hsl(346, 77%, 50%)", "hsl(215, 20%, 55%)",
];

type Metric = "pct" | "shares" | "marketValue";

const formatValue = (val: number, metric: Metric) => {
  if (metric === "pct") return `${val.toFixed(1)}%`;
  if (metric === "marketValue") return `$${(val / 1e9).toFixed(2)}B`;
  return `${(val / 1e6).toFixed(1)}M`;
};

const CustomTooltip = ({ active, payload, metric }: any) => {
  if (!active || !payload?.[0]) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-foreground">{d.name}</p>
      <p className="text-muted-foreground">{d.type}</p>
      <p className="mt-1 font-semibold text-foreground">{formatValue(d[metric || "pct"], metric || "pct")}</p>
    </div>
  );
};

const OwnershipStructure = ({ data }: { data: OwnershipData }) => {
  const [metric, setMetric] = useState<Metric>("pct");
  const [tableOpen, setTableOpen] = useState(false);
  const { shareholders, summaryCards } = data;
  const topOwners = shareholders.reduce((acc, s) => acc + s.pct, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="border-border/50 bg-card">
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Top {shareholders.length} Ownership</p>
            <p className="text-xl font-bold text-foreground">{topOwners.toFixed(1)}%</p>
          </CardContent>
        </Card>
        {summaryCards.map((c) => (
          <Card key={c.label} className="border-border/50 bg-card">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{c.label}</p>
              <p className="text-xl font-bold text-foreground">{c.value}</p>
              {c.sub && <p className="text-xs text-muted-foreground">{c.sub}</p>}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/50 bg-card">
        <CardContent className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Shareholder Breakdown</p>
            <ToggleGroup type="single" value={metric} onValueChange={(v) => v && setMetric(v as Metric)} size="sm">
              <ToggleGroupItem value="pct" className="text-xs">% Outstanding</ToggleGroupItem>
              <ToggleGroupItem value="shares" className="text-xs">Shares</ToggleGroupItem>
              <ToggleGroupItem value="marketValue" className="text-xs">Market Value</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={shareholders} dataKey={metric} nameKey="name" cx="50%" cy="50%" innerRadius={65} outerRadius={120} paddingAngle={2} stroke="none">
                    {shareholders.map((_, i) => (<Cell key={i} fill={COLORS[i % COLORS.length]} />))}
                  </Pie>
                  <Tooltip content={<CustomTooltip metric={metric} />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={shareholders} layout="vertical" margin={{ left: 0, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 17%)" horizontal={false} />
                <XAxis type="number" tickFormatter={(v) => formatValue(v, metric)} tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 10 }} />
                <YAxis type="category" dataKey="name" width={110} tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 10 }} />
                <Tooltip content={<CustomTooltip metric={metric} />} />
                <Bar dataKey={metric} radius={[0, 4, 4, 0]}>
                  {shareholders.map((_, i) => (<Cell key={i} fill={COLORS[i % COLORS.length]} />))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Collapsible open={tableOpen} onOpenChange={setTableOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="flex w-full items-center justify-between px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
            <span>{tableOpen ? "Hide Full Table" : "View Full Table"}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${tableOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="border-border/50 bg-card">
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Shareholder</TableHead>
                    <TableHead className="text-right">Shares</TableHead>
                    <TableHead className="text-right">Market Value</TableHead>
                    <TableHead className="text-right">% Outstanding</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Filing Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shareholders.map((s) => (
                    <TableRow key={s.name}>
                      <TableCell className="font-medium">{s.name}</TableCell>
                      <TableCell className="text-right">{s.shares.toLocaleString()}</TableCell>
                      <TableCell className="text-right">${(s.marketValue / 1e6).toFixed(1)}M</TableCell>
                      <TableCell className="text-right">{s.pct.toFixed(2)}%</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">{s.type}</span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{s.filed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default OwnershipStructure;
