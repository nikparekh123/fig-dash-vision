import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PieChart, Pie, Cell, Customized } from "recharts";
import { TrendingUp, TrendingDown, Maximize2 } from "lucide-react";
import type { TechnicalData } from "@/data/types";

const RADIAN = Math.PI / 180;

const gaugeData = [
  { name: "Oversold", value: 30, color: "hsl(8, 72%, 58%)" },
  { name: "Neutral", value: 40, color: "hsl(42, 65%, 63%)" },
  { name: "Overbought", value: 30, color: "hsl(120, 30%, 73%)" },
];

const RsiNeedle = ({ cx, cy, outerRadius, value }: { cx: number; cy: number; outerRadius: number; value: number }) => {
  const angle = 180 - (value / 100) * 180;
  const needleLength = outerRadius * 0.75;
  const x = cx + needleLength * Math.cos(-angle * RADIAN);
  const y = cy + needleLength * Math.sin(-angle * RADIAN);
  const labelX = cx + (outerRadius + 14) * Math.cos(-angle * RADIAN);
  const labelY = cy + (outerRadius + 14) * Math.sin(-angle * RADIAN);
  return (
    <g>
      <circle cx={cx} cy={cy} r={6} fill="hsl(30 50% 96%)" stroke="hsl(30 50% 96%)" strokeWidth={1} />
      <line x1={cx} y1={cy} x2={x} y2={y} stroke="hsl(30 50% 96%)" strokeWidth={3} strokeLinecap="round" />
      <circle cx={x} cy={y} r={3} fill="hsl(30 50% 96%)" />
      <text x={labelX} y={labelY} textAnchor="middle" dominantBaseline="central" fill="hsl(30 50% 96%)" fontSize={11} fontWeight={700}>{value}</text>
    </g>
  );
};

const TechnicalAnalysisSection = ({ data }: { data: TechnicalData }) => {
  const [chartOpen, setChartOpen] = useState(false);
  const cx = 140, cy = 120, innerRadius = 60, outerRadius = 100;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="bg-card">
          <CardContent className="p-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Exponential Moving Averages</p>
            <p className="mb-4 text-muted-foreground">Current Price: <span className="text-2xl font-bold text-foreground">${data.currentPrice.toFixed(2)}</span></p>
            <div className="space-y-3">
              {data.emas.map((ema) => {
                const isAbove = data.currentPrice > ema.value;
                return (
                  <div key={ema.label} className="flex items-center justify-between rounded-xl bg-secondary/30 px-4 py-3">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-foreground">{ema.label}</p>
                      <div className="flex items-center gap-1.5">
                        {isAbove ? <TrendingUp className="h-3.5 w-3.5 text-success" /> : <TrendingDown className="h-3.5 w-3.5 text-danger" />}
                        <span className={`text-xs font-medium ${isAbove ? "text-success" : "text-danger"}`}>Price {isAbove ? "above" : "below"} EMA</span>
                      </div>
                    </div>
                    <p className="text-xl font-bold tabular-nums text-foreground">${ema.value.toFixed(2)}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {data.chartImage ? (
          <Card className="group cursor-pointer bg-card transition-all hover:bg-card/80" onClick={() => setChartOpen(true)}>
            <CardContent className="relative p-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Price Chart</p>
                <Maximize2 className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={data.chartImage} alt="Price chart" className="w-full" />
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-card">
            <CardContent className="p-5 flex items-center justify-center h-full">
              <p className="text-sm text-muted-foreground">Price chart not available</p>
            </CardContent>
          </Card>
        )}

        <Card className="bg-card">
          <CardContent className="p-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Relative Strength Index (RSI)</p>
            <div className="flex flex-col items-center">
              <PieChart width={280} height={160}>
                <Pie data={gaugeData} cx={cx} cy={cy} startAngle={180} endAngle={0} innerRadius={innerRadius} outerRadius={outerRadius} dataKey="value" stroke="none">
                  {gaugeData.map((entry, index) => (<Cell key={index} fill={entry.color} />))}
                </Pie>
                <Customized component={() => (<RsiNeedle cx={cx} cy={cy} outerRadius={outerRadius} value={data.rsi} />)} />
              </PieChart>
              <div className="-mt-8 text-center">
                <p className="text-3xl font-bold tabular-nums text-foreground">{data.rsi}</p>
                <p className="text-sm font-medium text-muted-foreground">{data.rsi < 30 ? "Oversold" : data.rsi > 70 ? "Overbought" : "Neutral"}</p>
              </div>
              <div className="mt-3 flex w-full justify-between px-4 text-xs text-muted-foreground">
                <span className="text-danger">Oversold (&lt;30)</span>
                <span className="text-success">Overbought (&gt;70)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {data.chartImage && (
        <Dialog open={chartOpen} onOpenChange={setChartOpen}>
          <DialogContent className="max-w-5xl bg-card p-2">
            <DialogTitle className="sr-only">Price Chart</DialogTitle>
            <img src={data.chartImage} alt="Price chart" className="w-full rounded-xl" />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default TechnicalAnalysisSection;
