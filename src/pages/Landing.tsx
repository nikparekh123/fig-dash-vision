import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { companies } from "@/data/companies";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { TrendingUp, TrendingDown, Clock, DollarSign, BarChart3 } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Calculate global portfolio summary
  const livePositions = companies.filter((c) => c.positions.status === "live");
  const waitingPositions = companies.filter((c) => c.positions.status === "waiting");

  const totalInvested = livePositions.reduce((sum, c) => {
    return sum + c.positions.positions.reduce((s, p) => s + p.quantity * p.avgPrice, 0);
  }, 0);

  const totalCurrentValue = livePositions.reduce((sum, c) => {
    return sum + c.positions.positions.reduce((s, p) => s + p.quantity * p.currentPrice, 0);
  }, 0);

  const totalPnL = totalCurrentValue - totalInvested;
  const totalPnLPct = totalInvested > 0 ? ((totalPnL / totalInvested) * 100).toFixed(1) : "0";
  const isPnLPositive = totalPnL >= 0;

  const getPositionSummary = (c: (typeof companies)[0]) => {
    if (c.positions.status === "waiting") {
      return { label: "Watching", color: "text-amber-400", bgColor: "bg-amber-400/10 border-amber-400/20" };
    }
    const pnl = c.positions.positions.reduce(
      (s, p) => s + p.quantity * (p.currentPrice - p.avgPrice),
      0
    );
    if (pnl >= 0) {
      return {
        label: `+$${(pnl / 1000).toFixed(1)}K`,
        color: "text-emerald-400",
        bgColor: "bg-emerald-400/10 border-emerald-400/20",
      };
    }
    return {
      label: `-$${(Math.abs(pnl) / 1000).toFixed(1)}K`,
      color: "text-red-400",
      bgColor: "bg-red-400/10 border-red-400/20",
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Earnings Dashboard
            </h1>
            <p className="text-muted-foreground">Select a company to view detailed financial analysis</p>
          </div>

          {/* Global Portfolio Summary */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Positions</p>
                  <p className="text-lg font-bold text-foreground">{livePositions.length} live</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="rounded-lg bg-amber-400/10 p-2">
                  <Clock className="h-4 w-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Watchlist</p>
                  <p className="text-lg font-bold text-foreground">{waitingPositions.length}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-400/10 p-2">
                  <DollarSign className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Invested</p>
                  <p className="text-lg font-bold text-foreground">${(totalInvested / 1000).toFixed(0)}K</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`rounded-lg p-2 ${isPnLPositive ? "bg-emerald-400/10" : "bg-red-400/10"}`}>
                  {isPnLPositive ? (
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total P&L</p>
                  <p className={`text-lg font-bold ${isPnLPositive ? "text-emerald-400" : "text-red-400"}`}>
                    {isPnLPositive ? "+" : ""}${(totalPnL / 1000).toFixed(1)}K
                    <span className="text-xs font-normal ml-1">({totalPnLPct}%)</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {companies.map((c) => {
              const posSummary = getPositionSummary(c);
              return (
                <Card
                  key={c.slug}
                  onClick={() => navigate(`/company/${c.slug}`)}
                  className="group cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
                >
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    {/* Position badge */}
                    <div className="w-full flex justify-end -mb-2">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${posSummary.bgColor} ${posSummary.color}`}>
                        {posSummary.label}
                      </span>
                    </div>

                    {c.logo ? (
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 p-2 transition-transform group-hover:scale-110">
                        <img
                          src={c.logo}
                          alt={`${c.name} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white transition-transform group-hover:scale-110"
                        style={{ backgroundColor: c.color }}
                      >
                        {c.name.charAt(0)}
                      </div>
                    )}
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {c.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {c.exchange}: {c.ticker}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {c.sector}
                      </p>
                    </div>
                    <div className="rounded-full bg-secondary px-3 py-1">
                      <span className="text-xs font-medium text-muted-foreground">
                        {c.quarter} Earnings
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
