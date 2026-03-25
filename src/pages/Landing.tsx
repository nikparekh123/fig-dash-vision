import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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
  LayoutGrid,
  LayoutList,
  Grid3X3,
  Layers,
  Rows3,
  ExternalLink,
} from "lucide-react";

type ViewMode = "big" | "medium" | "small" | "list" | "by-sector" | "by-earnings";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [industryFilter, setIndustryFilter] = useState<string>("all");
  const [sectorFilter, setSectorFilter] = useState<string>("all");
  const [earningsFilter, setEarningsFilter] = useState<string>("all");
  const [pnlFilter, setPnlFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("big");

  const allTickers = useMemo(() => {
    return companies.flatMap((c) =>
      c.positions.status === "live" ? c.positions.positions.map((p) => p.description) : []
    );
  }, []);

  const { prices, loading: pricesLoading, lastUpdated } = useLivePrices(allTickers);
  const getLivePrice = (ticker: string, fallback: number) => prices[ticker] ?? fallback;

  const livePositions = companies.filter((c) => c.positions.status === "live");
  const waitingPositions = companies.filter((c) => c.positions.status === "waiting");

  const totalInvested = livePositions.reduce(
    (sum, c) => sum + c.positions.positions.reduce((s, p) => s + p.quantity * p.avgPrice, 0),
    0
  );
  const totalCurrentValue = livePositions.reduce(
    (sum, c) =>
      sum + c.positions.positions.reduce((s, p) => s + p.quantity * getLivePrice(p.description, p.currentPrice), 0),
    0
  );
  const totalPnL = totalCurrentValue - totalInvested;
  const totalPnLPct = totalInvested > 0 ? ((totalPnL / totalInvested) * 100).toFixed(1) : "0";
  const isPnLPositive = totalPnL >= 0;

  // Per-company breakdowns
  const companyBreakdown = companies.map((c) => {
    const invested = c.positions.positions.reduce((s, p) => s + p.quantity * p.avgPrice, 0);
    const current = c.positions.positions.reduce(
      (s, p) => s + p.quantity * getLivePrice(p.description, p.currentPrice), 0
    );
    const pnl = current - invested;
    const pnlPct = invested > 0 ? ((pnl / invested) * 100).toFixed(1) : "0";
    return { ...c, invested, current, pnl, pnlPct: Number(pnlPct) };
  });

  const formatCurrency = (val: number) => {
    if (Math.abs(val) >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`;
    if (Math.abs(val) >= 1_000) return `$${(val / 1_000).toFixed(1)}K`;
    return `$${val.toFixed(0)}`;
  };

  // Unique filter options
  const industries = useMemo(() => [...new Set(companies.map((c) => c.industry))].sort(), []);
  const sectors = useMemo(() => [...new Set(companies.map((c) => c.sector))].sort(), []);
  const quarters = useMemo(() => [...new Set(companies.map((c) => c.quarter))].sort(), []);

  const getPositionSummary = (c: (typeof companies)[0]) => {
    if (c.positions.status === "waiting") {
      return { label: "Watching", color: "text-amber-400", bgColor: "bg-amber-400/10 border-amber-400/20" };
    }
    const pnl = c.positions.positions.reduce(
      (s, p) => s + p.quantity * (getLivePrice(p.description, p.currentPrice) - p.avgPrice), 0
    );
    if (pnl >= 0) return { label: `+$${(pnl / 1000).toFixed(1)}K`, color: "text-emerald-400", bgColor: "bg-emerald-400/10 border-emerald-400/20" };
    return { label: `-$${(Math.abs(pnl) / 1000).toFixed(1)}K`, color: "text-red-400", bgColor: "bg-red-400/10 border-red-400/20" };
  };

  // Filter companies
  const filteredCompanies = [...companies]
    .sort((a, b) => new Date(b.earningsDate).getTime() - new Date(a.earningsDate).getTime())
    .filter((c) => {
      const q = search.toLowerCase();
      const matchSearch = c.name.toLowerCase().includes(q) || c.ticker.toLowerCase().includes(q) || c.sector.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q);
      const matchIndustry = industryFilter === "all" || c.industry === industryFilter;
      const matchSector = sectorFilter === "all" || c.sector === sectorFilter;
      const matchEarnings = earningsFilter === "all" || c.quarter === earningsFilter;
      const matchPnl = (() => {
        if (pnlFilter === "all") return true;
        if (c.positions.status === "waiting") return pnlFilter === "watching";
        const pnl = c.positions.positions.reduce(
          (s, p) => s + p.quantity * (getLivePrice(p.description, p.currentPrice) - p.avgPrice), 0
        );
        if (pnlFilter === "profit") return pnl >= 0;
        if (pnlFilter === "loss") return pnl < 0;
        return true;
      })();
      return matchSearch && matchIndustry && matchSector && matchEarnings && matchPnl;
    });

  // Group helpers
  const groupBySector = () => {
    const groups: Record<string, typeof filteredCompanies> = {};
    filteredCompanies.forEach((c) => {
      const key = `${c.industry} — ${c.sector}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(c);
    });
    return groups;
  };

  const groupByEarnings = () => {
    const groups: Record<string, typeof filteredCompanies> = {};
    filteredCompanies.forEach((c) => {
      if (!groups[c.quarter]) groups[c.quarter] = [];
      groups[c.quarter].push(c);
    });
    return groups;
  };

  const hasActiveFilters = industryFilter !== "all" || sectorFilter !== "all" || earningsFilter !== "all" || pnlFilter !== "all" || search !== "";

  // Company card renderer
  const renderCompanyCard = (c: (typeof companies)[0], size: "big" | "medium" | "small" | "list") => {
    const posSummary = getPositionSummary(c);

    if (size === "list") {
      return (
        <div
          key={c.slug}
          onClick={() => navigate(`/company/${c.slug}`)}
          className="group flex items-center gap-4 p-3 rounded-lg cursor-pointer border border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-md transition-all duration-200"
        >
          {c.logo ? (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/90 p-1.5">
              <img src={c.logo} alt={`${c.name} logo`} className="h-full w-full object-contain" />
            </div>
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white" style={{ backgroundColor: c.color }}>
              {c.name.charAt(0)}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</span>
              <span className="text-xs text-muted-foreground">{c.exchange}:{c.ticker}</span>
            </div>
            <p className="text-xs text-muted-foreground/70 truncate">{c.industry} — {c.sector}</p>
          </div>
          <span className="text-xs text-muted-foreground">{c.quarter}</span>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${posSummary.bgColor} ${posSummary.color}`}>
            {posSummary.label}
          </span>
        </div>
      );
    }

    const sizeClasses = {
    big: "p-4",
      medium: "p-3",
      small: "p-2.5",
    };
    const logoClasses = {
    big: "h-12 w-12 rounded-xl",
      medium: "h-10 w-10 rounded-xl",
      small: "h-8 w-8 rounded-lg",
    };
    const titleClasses = {
      big: "text-xl",
      medium: "text-base",
      small: "text-sm",
    };

    return (
      <Card
        key={c.slug}
        onClick={() => navigate(`/company/${c.slug}`)}
        className="group cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
      >
        <CardContent className={`${sizeClasses[size]} flex flex-col items-center text-center space-y-${size === "small" ? "2" : size === "medium" ? "3" : "4"}`}>
          <div className="w-full flex justify-end -mb-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${posSummary.bgColor} ${posSummary.color}`}>
              {posSummary.label}
            </span>
          </div>
          {c.logo ? (
            <div className={`flex items-center justify-center ${logoClasses[size]} bg-white/90 p-1.5 transition-transform group-hover:scale-110`}>
              <img src={c.logo} alt={`${c.name} logo`} className="h-full w-full object-contain" />
            </div>
          ) : (
            <div
              className={`flex items-center justify-center ${logoClasses[size]} text-${size === "small" ? "lg" : "2xl"} font-bold text-white transition-transform group-hover:scale-110`}
              style={{ backgroundColor: c.color }}
            >
              {c.name.charAt(0)}
            </div>
          )}
          <div className="space-y-0.5">
            <h2 className={`${titleClasses[size]} font-bold text-foreground group-hover:text-primary transition-colors`}>
              {c.name}
            </h2>
            <p className="text-xs text-muted-foreground">{c.exchange}: {c.ticker}</p>
            {size !== "small" && <p className="text-xs text-muted-foreground/70">{c.industry} — {c.sector}</p>}
          </div>
          {size === "big" && (
            <div className="rounded-full bg-secondary px-3 py-1">
              <span className="text-xs font-medium text-muted-foreground">{c.quarter} Earnings</span>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const gridClasses: Record<ViewMode, string> = {
    big: "grid grid-cols-1 gap-6 sm:grid-cols-2",
    medium: "grid grid-cols-2 gap-4 sm:grid-cols-3",
    small: "grid grid-cols-3 gap-3 sm:grid-cols-4",
    list: "flex flex-col gap-2",
    "by-sector": "",
    "by-earnings": "",
  };

  const renderGrouped = (groups: Record<string, typeof filteredCompanies>) => (
    <div className="space-y-8">
      {Object.entries(groups).map(([group, items]) => (
        <div key={group}>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 px-1">{group}</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => renderCompanyCard(c, "medium"))}
          </div>
        </div>
      ))}
    </div>
  );

  // Modal content renderers
  const renderModalContent = (id: string) => {
    switch (id) {
      case "positions":
        return (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Live Positions ({livePositions.length})</h4>
              <div className="space-y-2">
                {livePositions.map((c) => (
                  <div
                    key={c.slug}
                    onClick={() => { setOpenModal(null); navigate(`/company/${c.slug}`); }}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {c.logo ? (
                        <img src={c.logo} alt={c.name} className="h-8 w-8 rounded-lg object-contain bg-white/90 p-1" />
                      ) : (
                        <div className="h-8 w-8 rounded-lg text-sm font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                      )}
                      <div>
                        <span className="font-medium text-foreground">{c.name}</span>
                        <p className="text-xs text-muted-foreground">{c.ticker} · {c.positions.positions.length} position{c.positions.positions.length > 1 ? "s" : ""}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Watchlist ({waitingPositions.length})</h4>
              <div className="space-y-2">
                {waitingPositions.map((c) => (
                  <div
                    key={c.slug}
                    onClick={() => { setOpenModal(null); navigate(`/company/${c.slug}`); }}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card/50 hover:border-amber-400/20 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {c.logo ? (
                        <img src={c.logo} alt={c.name} className="h-8 w-8 rounded-lg object-contain bg-white/90 p-1" />
                      ) : (
                        <div className="h-8 w-8 rounded-lg text-sm font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                      )}
                      <div>
                        <span className="font-medium text-foreground">{c.name}</span>
                        <p className="text-xs text-muted-foreground">{c.ticker} · {c.sector}</p>
                      </div>
                    </div>
                    <span className="text-xs text-amber-400 font-medium">Watching</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "watchlist":
        return (
          <div className="space-y-2">
            {waitingPositions.map((c) => (
              <div
                key={c.slug}
                onClick={() => { setOpenModal(null); navigate(`/company/${c.slug}`); }}
                className="flex items-center justify-between p-3 rounded-lg border border-border/50 bg-card/50 hover:border-amber-400/20 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  {c.logo ? (
                    <img src={c.logo} alt={c.name} className="h-8 w-8 rounded-lg object-contain bg-white/90 p-1" />
                  ) : (
                    <div className="h-8 w-8 rounded-lg text-sm font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                  )}
                  <div>
                    <span className="font-medium text-foreground">{c.name}</span>
                    <p className="text-xs text-muted-foreground">{c.sector}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{c.quarter}</span>
              </div>
            ))}
            {waitingPositions.length === 0 && <p className="text-sm text-muted-foreground text-center py-6">No companies on watchlist</p>}
          </div>
        );

      case "invested":
        return (
          <div className="space-y-3">
            {companyBreakdown
              .filter((c) => c.positions.status === "live")
              .sort((a, b) => b.invested - a.invested)
              .map((c) => {
                const maxInvested = Math.max(...companyBreakdown.filter(x => x.positions.status === "live").map(x => x.invested));
                return (
                  <div key={c.slug} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {c.logo ? (
                          <img src={c.logo} alt={c.name} className="h-6 w-6 rounded object-contain bg-white/90 p-0.5" />
                        ) : (
                          <div className="h-6 w-6 rounded text-xs font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                        )}
                        <span className="text-sm font-medium text-foreground">{c.name}</span>
                        <span className="text-xs text-muted-foreground">{c.ticker}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-foreground">{formatCurrency(c.invested)}</span>
                        <span className="text-xs text-muted-foreground ml-1.5">({((c.invested / totalInvested) * 100).toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full transition-all" style={{ width: `${(c.invested / maxInvested) * 100}%` }} />
                    </div>
                  </div>
                );
              })}
            <div className="border-t border-border/50 pt-3 mt-3 flex justify-between text-sm">
              <span className="font-medium text-foreground">Total Invested</span>
              <span className="font-bold text-foreground">{formatCurrency(totalInvested)}</span>
            </div>
          </div>
        );

      case "pnl":
        return (
          <div className="space-y-2">
            {companyBreakdown
              .filter((c) => c.positions.status === "live")
              .sort((a, b) => b.pnl - a.pnl)
              .map((c) => {
                const pos = c.pnl >= 0;
                const maxAbs = Math.max(...companyBreakdown.filter(x => x.positions.status === "live").map(x => Math.abs(x.pnl)));
                return (
                  <div
                    key={c.slug}
                    onClick={() => { setOpenModal(null); navigate(`/company/${c.slug}`); }}
                    className="p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/20 cursor-pointer transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {c.logo ? (
                          <img src={c.logo} alt={c.name} className="h-6 w-6 rounded object-contain bg-white/90 p-0.5" />
                        ) : (
                          <div className="h-6 w-6 rounded text-xs font-bold text-white flex items-center justify-center" style={{ backgroundColor: c.color }}>{c.name.charAt(0)}</div>
                        )}
                        <span className="text-sm font-medium text-foreground">{c.name}</span>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm font-semibold ${pos ? "text-emerald-400" : "text-red-400"}`}>
                          {pos ? "+" : ""}{formatCurrency(c.pnl)}
                        </span>
                        <span className={`text-xs ml-1.5 ${pos ? "text-emerald-400/70" : "text-red-400/70"}`}>
                          ({pos ? "+" : ""}{c.pnlPct.toFixed(1)}%)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>Cost: {formatCurrency(c.invested)}</span>
                      <span>→</span>
                      <span>Value: {formatCurrency(c.current)}</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${pos ? "bg-emerald-400" : "bg-red-400"}`}
                        style={{ width: `${(Math.abs(c.pnl) / maxAbs) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            <div className="border-t border-border/50 pt-3 mt-3 flex justify-between text-sm">
              <span className="font-medium text-foreground">Total P&L</span>
              <span className={`font-bold ${isPnLPositive ? "text-emerald-400" : "text-red-400"}`}>
                {isPnLPositive ? "+" : ""}{formatCurrency(totalPnL)} ({totalPnLPct}%)
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const modalTitles: Record<string, string> = {
    positions: "All Positions",
    watchlist: "Watchlist",
    invested: "Investment Breakdown",
    pnl: "Profit & Loss Breakdown",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="px-4 py-4 md:px-8">
        <div className="mx-auto max-w-6xl space-y-4">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Earnings Dashboard</h1>
            <p className="text-sm text-muted-foreground">Select a company to view detailed financial analysis</p>
            {lastUpdated && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <RefreshCw className={`h-3 w-3 ${pricesLoading ? "animate-spin" : ""}`} />
                <span>Prices updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
            )}
          </div>

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Card onClick={() => setOpenModal("positions")} className="cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2"><BarChart3 className="h-4 w-4 text-primary" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Positions</p>
                  <p className="text-lg font-bold text-foreground">{livePositions.length} live</p>
                </div>
              </CardContent>
            </Card>
            <Card onClick={() => setOpenModal("watchlist")} className="cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:border-amber-400/30 hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="rounded-lg bg-amber-400/10 p-2"><Clock className="h-4 w-4 text-amber-400" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Watchlist</p>
                  <p className="text-lg font-bold text-foreground">{waitingPositions.length}</p>
                </div>
              </CardContent>
            </Card>
            <Card onClick={() => setOpenModal("invested")} className="cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:border-blue-400/30 hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-400/10 p-2"><DollarSign className="h-4 w-4 text-blue-400" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Invested</p>
                  <p className="text-lg font-bold text-foreground">${(totalInvested / 1000).toFixed(0)}K</p>
                </div>
              </CardContent>
            </Card>
            <Card onClick={() => setOpenModal("pnl")} className="cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:border-emerald-400/30 hover:shadow-md transition-all duration-200">
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`rounded-lg p-2 ${isPnLPositive ? "bg-emerald-400/10" : "bg-red-400/10"}`}>
                  {isPnLPositive ? <TrendingUp className="h-4 w-4 text-emerald-400" /> : <TrendingDown className="h-4 w-4 text-red-400" />}
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

          {/* Filter & View Bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {/* Search */}
              <div className="relative w-48">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 pr-7 h-9 text-sm bg-card/80 border-border/50"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Industry Filter */}
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-auto min-w-[110px] h-9 text-xs bg-card/80 border-border/50">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map((i) => (
                    <SelectItem key={i} value={i}>{i}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sector Filter */}
              <Select value={sectorFilter} onValueChange={setSectorFilter}>
                <SelectTrigger className="w-auto min-w-[110px] h-9 text-xs bg-card/80 border-border/50">
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  {sectors.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Earnings Filter */}
              <Select value={earningsFilter} onValueChange={setEarningsFilter}>
                <SelectTrigger className="w-auto min-w-[110px] h-9 text-xs bg-card/80 border-border/50">
                  <SelectValue placeholder="Earnings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Earnings</SelectItem>
                  {quarters.map((q) => (
                    <SelectItem key={q} value={q}>{q}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* P&L Filter */}
              <Select value={pnlFilter} onValueChange={setPnlFilter}>
                <SelectTrigger className="w-auto min-w-[100px] h-9 text-xs bg-card/80 border-border/50">
                  <SelectValue placeholder="P&L" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All P&L</SelectItem>
                  <SelectItem value="profit">In Profit</SelectItem>
                  <SelectItem value="loss">In Loss</SelectItem>
                  <SelectItem value="watching">Watching</SelectItem>
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <button
                  onClick={() => { setSearch(""); setIndustryFilter("all"); setSectorFilter("all"); setEarningsFilter("all"); setPnlFilter("all"); }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* View Toggle */}
            <ToggleGroup type="single" value={viewMode} onValueChange={(v) => v && setViewMode(v as ViewMode)} className="shrink-0">
              <ToggleGroupItem value="big" aria-label="Large grid" className="h-8 w-8 p-0">
                <LayoutGrid className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="medium" aria-label="Medium grid" className="h-8 w-8 p-0">
                <Grid3X3 className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="small" aria-label="Small grid" className="h-8 w-8 p-0">
                <Rows3 className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view" className="h-8 w-8 p-0">
                <LayoutList className="h-3.5 w-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="by-sector" aria-label="Group by sector" className="h-8 px-2 text-xs">
                Sector
              </ToggleGroupItem>
              <ToggleGroupItem value="by-earnings" aria-label="Group by earnings" className="h-8 px-2 text-xs">
                Earnings
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Company Cards */}
          {viewMode === "by-sector" ? (
            renderGrouped(groupBySector())
          ) : viewMode === "by-earnings" ? (
            renderGrouped(groupByEarnings())
          ) : (
            <div className={gridClasses[viewMode]}>
              {filteredCompanies.map((c) =>
                renderCompanyCard(c, viewMode === "list" ? "list" : viewMode)
              )}
            </div>
          )}

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-3 opacity-40" />
              <p>No companies match your filters</p>
            </div>
          )}
        </div>
      </div>

      {/* KPI Detail Modals */}
      <Dialog open={!!openModal} onOpenChange={(open) => !open && setOpenModal(null)}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{openModal ? modalTitles[openModal] : ""}</DialogTitle>
          </DialogHeader>
          {openModal && renderModalContent(openModal)}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Landing;
