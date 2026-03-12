import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { companies } from "@/data/companies";
import { useAuth } from "@/contexts/AuthContext";
import { useLivePrices } from "@/hooks/useLivePrices";
import Navbar from "@/components/Navbar";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  BarChart3,
  RefreshCw,
  Search,
  X,
  ChevronDown,
} from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Collect all tickers from live positions
  const allTickers = useMemo(() => {
    return companies.flatMap((c) =>
      c.positions.status === "live" ? c.positions.positions.map((p) => p.description) : []
    );
  }, []);

  const { prices, loading: pricesLoading, lastUpdated } = useLivePrices(allTickers);

  const getLivePrice = (ticker: string, fallback: number) => prices[ticker] ?? fallback;

  const livePositions = companies.filter((c) => c.positions.status === "live");
  const waitingPositions = companies.filter((c) => c.positions.status === "waiting");

  const totalInvested = livePositions.reduce((sum, c) => {
    return sum + c.positions.positions.reduce((s, p) => s + p.quantity * p.avgPrice, 0);
  }, 0);

  const totalCurrentValue = livePositions.reduce((sum, c) => {
    return sum + c.positions.positions.reduce((s, p) => s + p.quantity * getLivePrice(p.description, p.currentPrice), 0);
  }, 0);

  const totalPnL = totalCurrentValue - totalInvested;
  const totalPnLPct = totalInvested > 0 ? ((totalPnL / totalInvested) * 100).toFixed(1) : "0";
  const isPnLPositive = totalPnL >= 0;

  // Per-company P&L breakdown
  const companyPnLBreakdown = livePositions.map((c) => {
    const invested = c.positions.positions.reduce((s, p) => s + p.quantity * p.avgPrice, 0);
    const current = c.positions.positions.reduce(
      (s, p) => s + p.quantity * getLivePrice(p.description, p.currentPrice),
      0
    );
    const pnl = current - invested;
    const pnlPct = invested > 0 ? ((pnl / invested) * 100).toFixed(1) : "0";
    return { name: c.name, ticker: c.ticker, slug: c.slug, invested, current, pnl, pnlPct, logo: c.logo, color: c.color };
  });

  // Per-company invested breakdown
  const companyInvestedBreakdown = livePositions.map((c) => {
    const invested = c.positions.positions.reduce((s, p) => s + p.quantity * p.avgPrice, 0);
    const posCount = c.positions.positions.length;
    return { name: c.name, ticker: c.ticker, invested, posCount, logo: c.logo, color: c.color };
  });

  const getPositionSummary = (c: (typeof companies)[0]) => {
    if (c.positions.status === "waiting") {
      return { label: "Watching", color: "text-amber-400", bgColor: "bg-amber-400/10 border-amber-400/20" };
    }
    const pnl = c.positions.positions.reduce(
      (s, p) => s + p.quantity * (getLivePrice(p.description, p.currentPrice) - p.avgPrice),
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

  // Filter companies by search
  const filteredCompanies = companies.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.ticker.toLowerCase().includes(q) ||
      c.sector.toLowerCase().includes(q)
    );
  });

  const toggleCard = (id: string) => setExpandedCard(expandedCard === id ? null : id);

  const formatCurrency = (val: number) => {
    if (Math.abs(val) >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`;
    if (Math.abs(val) >= 1_000) return `$${(val / 1_000).toFixed(1)}K`;
    return `$${val.toFixed(0)}`;
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
            {lastUpdated && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <RefreshCw className={`h-3 w-3 ${pricesLoading ? "animate-spin" : ""}`} />
                <span>Prices updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by company, ticker, or sector..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-10 bg-card/80 border-border/50 backdrop-blur-sm"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Global Portfolio Summary - Expandable Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {/* Positions Card */}
            <div className="space-y-0">
              <Card
                onClick={() => toggleCard("positions")}
                className={`cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-200 hover:border-primary/30 ${expandedCard === "positions" ? "border-primary/40 shadow-md shadow-primary/10" : ""}`}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Positions</p>
                    <p className="text-lg font-bold text-foreground">{livePositions.length} live</p>
                  </div>
                  <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${expandedCard === "positions" ? "rotate-180" : ""}`} />
                </CardContent>
              </Card>
              {expandedCard === "positions" && (
                <Card className="border-border/50 border-t-0 rounded-t-none bg-card/90 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Live Positions</p>
                    {livePositions.map((c) => (
                      <div key={c.slug} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          {c.logo ? (
                            <img src={c.logo} alt={c.name} className="h-5 w-5 rounded object-contain bg-white/90 p-0.5" />
                          ) : (
                            <div className="h-5 w-5 rounded text-[10px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                          )}
                          <span className="text-foreground">{c.ticker}</span>
                        </div>
                        <span className="text-muted-foreground">{c.positions.positions.length} pos</span>
                      </div>
                    ))}
                    <div className="border-t border-border/50 pt-2 mt-2">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Watchlist</p>
                      {waitingPositions.map((c) => (
                        <div key={c.slug} className="flex items-center gap-2 text-sm text-muted-foreground">
                          {c.logo ? (
                            <img src={c.logo} alt={c.name} className="h-5 w-5 rounded object-contain bg-white/90 p-0.5" />
                          ) : (
                            <div className="h-5 w-5 rounded text-[10px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                          )}
                          <span>{c.ticker}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Watchlist Card */}
            <div className="space-y-0">
              <Card
                onClick={() => toggleCard("watchlist")}
                className={`cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-200 hover:border-amber-400/30 ${expandedCard === "watchlist" ? "border-amber-400/40 shadow-md shadow-amber-400/10" : ""}`}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-lg bg-amber-400/10 p-2">
                    <Clock className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Watchlist</p>
                    <p className="text-lg font-bold text-foreground">{waitingPositions.length}</p>
                  </div>
                  <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${expandedCard === "watchlist" ? "rotate-180" : ""}`} />
                </CardContent>
              </Card>
              {expandedCard === "watchlist" && (
                <Card className="border-border/50 border-t-0 rounded-t-none bg-card/90 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Watching</p>
                    {waitingPositions.map((c) => (
                      <div key={c.slug} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          {c.logo ? (
                            <img src={c.logo} alt={c.name} className="h-5 w-5 rounded object-contain bg-white/90 p-0.5" />
                          ) : (
                            <div className="h-5 w-5 rounded text-[10px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                          )}
                          <span className="text-foreground">{c.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{c.sector}</span>
                      </div>
                    ))}
                    {waitingPositions.length === 0 && (
                      <p className="text-xs text-muted-foreground">No companies on watchlist</p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Invested Card */}
            <div className="space-y-0">
              <Card
                onClick={() => toggleCard("invested")}
                className={`cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-200 hover:border-blue-400/30 ${expandedCard === "invested" ? "border-blue-400/40 shadow-md shadow-blue-400/10" : ""}`}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-400/10 p-2">
                    <DollarSign className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Invested</p>
                    <p className="text-lg font-bold text-foreground">${(totalInvested / 1000).toFixed(0)}K</p>
                  </div>
                  <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${expandedCard === "invested" ? "rotate-180" : ""}`} />
                </CardContent>
              </Card>
              {expandedCard === "invested" && (
                <Card className="border-border/50 border-t-0 rounded-t-none bg-card/90 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Investment by Company</p>
                    {companyInvestedBreakdown
                      .sort((a, b) => b.invested - a.invested)
                      .map((c) => (
                        <div key={c.ticker} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            {c.logo ? (
                              <img src={c.logo} alt={c.name} className="h-5 w-5 rounded object-contain bg-white/90 p-0.5" />
                            ) : (
                              <div className="h-5 w-5 rounded text-[10px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                            )}
                            <span className="text-foreground">{c.ticker}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-foreground font-medium">{formatCurrency(c.invested)}</span>
                            <span className="text-muted-foreground text-xs ml-1.5">
                              ({((c.invested / totalInvested) * 100).toFixed(0)}%)
                            </span>
                          </div>
                        </div>
                      ))}
                    {/* Bar visualization */}
                    <div className="pt-2 space-y-1.5">
                      {companyInvestedBreakdown
                        .sort((a, b) => b.invested - a.invested)
                        .map((c) => (
                          <div key={c.ticker} className="flex items-center gap-2">
                            <span className="text-[10px] text-muted-foreground w-8">{c.ticker}</span>
                            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-400 rounded-full transition-all"
                                style={{ width: `${(c.invested / Math.max(...companyInvestedBreakdown.map(x => x.invested))) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* P&L Card */}
            <div className="space-y-0">
              <Card
                onClick={() => toggleCard("pnl")}
                className={`cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/30 ${expandedCard === "pnl" ? (isPnLPositive ? "border-emerald-400/40 shadow-md shadow-emerald-400/10" : "border-red-400/40 shadow-md shadow-red-400/10") : ""}`}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`rounded-lg p-2 ${isPnLPositive ? "bg-emerald-400/10" : "bg-red-400/10"}`}>
                    {isPnLPositive ? (
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Total P&L</p>
                    <p className={`text-lg font-bold ${isPnLPositive ? "text-emerald-400" : "text-red-400"}`}>
                      {isPnLPositive ? "+" : ""}${(totalPnL / 1000).toFixed(1)}K
                      <span className="text-xs font-normal ml-1">({totalPnLPct}%)</span>
                    </p>
                  </div>
                  <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${expandedCard === "pnl" ? "rotate-180" : ""}`} />
                </CardContent>
              </Card>
              {expandedCard === "pnl" && (
                <Card className="border-border/50 border-t-0 rounded-t-none bg-card/90 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2">P&L by Company</p>
                    {companyPnLBreakdown
                      .sort((a, b) => b.pnl - a.pnl)
                      .map((c) => {
                        const pos = c.pnl >= 0;
                        return (
                          <div
                            key={c.ticker}
                            onClick={(e) => { e.stopPropagation(); navigate(`/company/${c.slug}`); }}
                            className="flex items-center justify-between text-sm py-1 px-1.5 -mx-1.5 rounded hover:bg-secondary/50 cursor-pointer transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              {c.logo ? (
                                <img src={c.logo} alt={c.name} className="h-5 w-5 rounded object-contain bg-white/90 p-0.5" />
                              ) : (
                                <div className="h-5 w-5 rounded text-[10px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                              )}
                              <span className="text-foreground font-medium">{c.ticker}</span>
                            </div>
                            <div className="text-right">
                              <span className={`font-medium ${pos ? "text-emerald-400" : "text-red-400"}`}>
                                {pos ? "+" : ""}{formatCurrency(c.pnl)}
                              </span>
                              <span className={`text-xs ml-1.5 ${pos ? "text-emerald-400/70" : "text-red-400/70"}`}>
                                ({pos ? "+" : ""}{c.pnlPct}%)
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    {/* Summary bar */}
                    <div className="pt-2 space-y-1.5">
                      {companyPnLBreakdown
                        .sort((a, b) => b.pnl - a.pnl)
                        .map((c) => {
                          const maxAbs = Math.max(...companyPnLBreakdown.map(x => Math.abs(x.pnl)));
                          const pos = c.pnl >= 0;
                          return (
                            <div key={c.ticker} className="flex items-center gap-2">
                              <span className="text-[10px] text-muted-foreground w-8">{c.ticker}</span>
                              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all ${pos ? "bg-emerald-400" : "bg-red-400"}`}
                                  style={{ width: `${(Math.abs(c.pnl) / maxAbs) * 100}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Company Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredCompanies.map((c) => {
              const posSummary = getPositionSummary(c);
              return (
                <Card
                  key={c.slug}
                  onClick={() => navigate(`/company/${c.slug}`)}
                  className="group cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
                >
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
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
            {filteredCompanies.length === 0 && (
              <div className="col-span-2 text-center py-12 text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-40" />
                <p>No companies match "{search}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
