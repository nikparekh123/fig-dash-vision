import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

const CURRENT_PRICE = 30.49;

const emaData = [
  { label: "50 EMA", value: 30.35, signal: 30.35 < CURRENT_PRICE ? "above" : "below" },
  { label: "100 EMA", value: 38.95, signal: 38.95 < CURRENT_PRICE ? "above" : "below" },
];

const RSI_VALUE = 58.58;

const gaugeData = [
  { name: "Oversold", value: 30, color: "hsl(0, 72%, 51%)" },
  { name: "Neutral", value: 40, color: "hsl(45, 93%, 47%)" },
  { name: "Overbought", value: 30, color: "hsl(142, 71%, 45%)" },
];

const RADIAN = Math.PI / 180;

const RsiNeedle = ({ cx, cy, outerRadius, value }: { cx: number; cy: number; outerRadius: number; value: number }) => {
  const angle = 180 - (value / 100) * 180;
  const needleLength = outerRadius * 0.75;
  const x = cx + needleLength * Math.cos(-angle * RADIAN);
  const y = cy + needleLength * Math.sin(-angle * RADIAN);

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="hsl(var(--foreground))" />
      <line
        x1={cx}
        y1={cy}
        x2={x}
        y2={y}
        stroke="hsl(var(--foreground))"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </g>
  );
};

const TechnicalAnalysisSection = () => {
  const cx = 140;
  const cy = 120;
  const innerRadius = 60;
  const outerRadius = 100;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* EMA Card */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardContent className="p-5">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Exponential Moving Averages
          </p>
          <p className="mb-4 text-sm text-muted-foreground">
            Current Price: <span className="font-semibold text-foreground">${CURRENT_PRICE}</span>
          </p>
          <div className="space-y-3">
            {emaData.map((ema) => {
              const isAbove = CURRENT_PRICE > ema.value;
              return (
                <div
                  key={ema.label}
                  className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 px-4 py-3"
                >
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium text-foreground">{ema.label}</p>
                    <div className="flex items-center gap-1.5">
                      {isAbove ? (
                        <TrendingUp className="h-3.5 w-3.5 text-success" />
                      ) : (
                        <TrendingDown className="h-3.5 w-3.5 text-danger" />
                      )}
                      <span className={`text-xs font-medium ${isAbove ? "text-success" : "text-danger"}`}>
                        Price {isAbove ? "above" : "below"} EMA
                      </span>
                    </div>
                  </div>
                  <p className="text-xl font-bold tabular-nums text-foreground">${ema.value.toFixed(2)}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* RSI Gauge Card */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardContent className="p-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Relative Strength Index (RSI)
          </p>
          <div className="flex flex-col items-center">
            <PieChart width={280} height={160}>
              <Pie
                data={gaugeData}
                cx={cx}
                cy={cy}
                startAngle={180}
                endAngle={0}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                dataKey="value"
                stroke="none"
              >
                {gaugeData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              {/* Needle */}
              <RsiNeedle cx={cx} cy={cy} outerRadius={outerRadius} value={RSI_VALUE} />
            </PieChart>
            <div className="-mt-8 text-center">
              <p className="text-3xl font-bold tabular-nums text-foreground">{RSI_VALUE}</p>
              <p className="text-sm font-medium text-muted-foreground">
                {RSI_VALUE < 30 ? "Oversold" : RSI_VALUE > 70 ? "Overbought" : "Neutral"}
              </p>
            </div>
            <div className="mt-3 flex w-full justify-between px-4 text-xs text-muted-foreground">
              <span className="text-[hsl(0,72%,51%)]">Oversold (&lt;30)</span>
              <span className="text-[hsl(142,71%,45%)]">Overbought (&gt;70)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalAnalysisSection;
