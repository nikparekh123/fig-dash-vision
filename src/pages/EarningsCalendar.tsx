import { useMemo, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { companies } from "@/data/companies";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import {
  format,
  differenceInDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isToday,
  isSameMonth,
} from "date-fns";
import { cn } from "@/lib/utils";
import {
  Search,
  List,
  CalendarDays,
  Plus,
  Clock,
  X,
  Loader2,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface EarningsEntry {
  id: string;
  name: string;
  ticker: string;
  earningsDate: Date;
  logo?: string;
  color: string;
  slug?: string;
  isCustom: boolean;
}

type ViewMode = "feed" | "calendar";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const EarningsCalendar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("feed");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [customEntries, setCustomEntries] = useState<
    { id: string; company_name: string; ticker: string; earnings_date: string }[]
  >([]);
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  const [liveEarnings, setLiveEarnings] = useState<Record<string, { name: string; earningsDate: string }>>({});
  const [loadingEarnings, setLoadingEarnings] = useState(false);

  const [newTicker, setNewTicker] = useState("");
  const [lookingUp, setLookingUp] = useState(false);
  const [lookupResult, setLookupResult] = useState<{ name: string; earningsDate: string } | null>(null);
  const [lookupError, setLookupError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchCustomEntries = async () => {
    const { data } = await supabase
      .from("custom_earnings")
      .select("id, company_name, ticker, earnings_date");
    if (data) setCustomEntries(data);
  };

  const fetchLiveEarnings = useCallback(async () => {
    const allTickers = [
      ...companies.map((c) => c.ticker),
      ...customEntries.map((c) => c.ticker),
    ];
    if (allTickers.length === 0) return;

    setLoadingEarnings(true);
    try {
      const { data, error } = await supabase.functions.invoke("lookup-earnings", {
        body: { tickers: allTickers },
      });
      if (!error && data?.success && data.results) {
        setLiveEarnings(data.results);
      }
    } catch (e) {
      console.error("Failed to fetch live earnings:", e);
    } finally {
      setLoadingEarnings(false);
    }
  }, [customEntries]);

  useEffect(() => { fetchCustomEntries(); }, []);
  useEffect(() => { fetchLiveEarnings(); }, [fetchLiveEarnings]);

  const allEntries: EarningsEntry[] = useMemo(() => {
    const builtIn: EarningsEntry[] = companies.map((c) => {
      const live = liveEarnings[c.ticker];
      const dateStr = live?.earningsDate || c.earningsDate;
      return {
        id: c.slug, name: c.name, ticker: c.ticker,
        earningsDate: new Date(dateStr),
        logo: c.logo, color: c.color, slug: c.slug, isCustom: false,
      };
    });

    const custom: EarningsEntry[] = customEntries.map((c) => {
      const live = liveEarnings[c.ticker];
      const dateStr = live?.earningsDate || c.earnings_date;
      return {
        id: c.id, name: live?.name || c.company_name, ticker: c.ticker,
        earningsDate: new Date(dateStr.includes("T") ? dateStr : dateStr + "T00:00:00"),
        color: "#6366f1", isCustom: true,
      };
    });

    return [...builtIn, ...custom];
  }, [customEntries, liveEarnings]);

  const filteredEntries = useMemo(() => {
    const q = search.toLowerCase();
    const filtered = allEntries.filter(
      (e) => e.name.toLowerCase().includes(q) || e.ticker.toLowerCase().includes(q)
    );
    const now = new Date();
    return filtered.sort((a, b) => {
      const aDiff = differenceInDays(a.earningsDate, now);
      const bDiff = differenceInDays(b.earningsDate, now);
      const aFuture = aDiff >= 0;
      const bFuture = bDiff >= 0;
      if (aFuture && bFuture) return aDiff - bDiff;
      if (aFuture && !bFuture) return -1;
      if (!aFuture && bFuture) return 1;
      return bDiff - aDiff;
    });
  }, [allEntries, search]);

  // Calendar grid
  const calendarWeeks = useMemo(() => {
    const monthStart = startOfMonth(calendarMonth);
    const monthEnd = endOfMonth(calendarMonth);
    const gridStart = startOfWeek(monthStart);
    const gridEnd = endOfWeek(monthEnd);

    const weeks: Date[][] = [];
    let current = gridStart;
    let week: Date[] = [];

    while (current <= gridEnd) {
      week.push(current);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
      current = addDays(current, 1);
    }
    return weeks;
  }, [calendarMonth]);

  const entriesByDate = useMemo(() => {
    const map: Record<string, EarningsEntry[]> = {};
    allEntries.forEach((e) => {
      const key = format(e.earningsDate, "yyyy-MM-dd");
      if (!map[key]) map[key] = [];
      map[key].push(e);
    });
    return map;
  }, [allEntries]);

  const handleLookupTicker = async () => {
    if (!newTicker.trim()) return;
    setLookingUp(true);
    setLookupResult(null);
    setLookupError("");
    try {
      const { data, error } = await supabase.functions.invoke("lookup-earnings", {
        body: { tickers: [newTicker.trim().toUpperCase()] },
      });
      if (error) throw error;
      const ticker = newTicker.trim().toUpperCase();
      const result = data?.results?.[ticker];
      if (result) {
        setLookupResult(result);
      } else {
        setLookupError("Could not find earnings data for this ticker.");
      }
    } catch {
      setLookupError("Failed to look up ticker. Try again.");
    } finally {
      setLookingUp(false);
    }
  };

  const handleAddCompany = async () => {
    if (!lookupResult || !user) return;
    setSubmitting(true);
    const ticker = newTicker.trim().toUpperCase();
    await supabase.from("custom_earnings").insert({
      user_id: user.id,
      company_name: lookupResult.name,
      ticker,
      earnings_date: lookupResult.earningsDate,
    });
    setNewTicker("");
    setLookupResult(null);
    setAddDialogOpen(false);
    setSubmitting(false);
    fetchCustomEntries();
  };

  const handleDeleteCustom = async (id: string) => {
    await supabase.from("custom_earnings").delete().eq("id", id);
    fetchCustomEntries();
  };

  const getCountdown = (date: Date) => {
    const days = differenceInDays(date, new Date());
    if (days === 0) return "Today";
    if (days === 1) return "Tomorrow";
    if (days > 0) return `in ${days} days`;
    if (days === -1) return "Yesterday";
    return `${Math.abs(days)} days ago`;
  };

  const isPast = (date: Date) => differenceInDays(date, new Date()) < 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar companyName="Earnings Calendar" />

      <div className="w-full px-4 py-4 md:px-6 space-y-4 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-foreground">Earnings Calendar</h1>
            {loadingEarnings && (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Loader2 className="h-3 w-3 animate-spin" />
                Refreshing dates...
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={fetchLiveEarnings} disabled={loadingEarnings} className="gap-1.5">
              <RefreshCw className={cn("h-3.5 w-3.5", loadingEarnings && "animate-spin")} />
              Refresh
            </Button>
            <Button size="sm" onClick={() => setAddDialogOpen(true)} className="gap-1.5">
              <Plus className="h-3.5 w-3.5" />
              Add Company
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input placeholder="Search company or ticker..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9 text-sm" />
          </div>
          <ToggleGroup type="single" value={viewMode} onValueChange={(v) => v && setViewMode(v as ViewMode)} size="sm">
            <ToggleGroupItem value="feed" aria-label="Feed view"><List className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="calendar" aria-label="Calendar view"><CalendarDays className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Feed View */}
        {viewMode === "feed" && (
          <div className="space-y-2">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className={cn(
                  "group flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-200",
                  entry.slug && "cursor-pointer hover:border-primary/40 hover:shadow-md",
                  isPast(entry.earningsDate) && "opacity-50"
                )}
                onClick={() => entry.slug && navigate(`/company/${entry.slug}`)}
              >
                {entry.logo ? (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/90 p-1.5">
                    <img src={entry.logo} alt={`${entry.name} logo`} className="h-full w-full object-contain" />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white" style={{ backgroundColor: entry.color }}>
                    {entry.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{entry.name}</span>
                    <span className="text-xs text-muted-foreground">{entry.ticker}</span>
                  </div>
                  <p className="text-xs text-muted-foreground/70">{format(entry.earningsDate, "MMM d, yyyy")}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn("text-xs font-medium px-2.5 py-0.5 rounded-full border", isPast(entry.earningsDate) ? "bg-muted/50 border-border text-muted-foreground" : "bg-primary/10 border-primary/20 text-primary")}>
                    <Clock className="h-3 w-3 inline mr-1" />{getCountdown(entry.earningsDate)}
                  </span>
                  {entry.isCustom && (
                    <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); handleDeleteCustom(entry.id); }}>
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {filteredEntries.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-12">No earnings found</p>
            )}
          </div>
        )}

        {/* Calendar View — Full-screen Google Calendar style */}
        {viewMode === "calendar" && (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Month navigation */}
            <div className="flex items-center gap-3 mb-3">
              <Button variant="outline" size="sm" onClick={() => setCalendarMonth(new Date())} className="text-xs">
                Today
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setCalendarMonth((m) => subMonths(m, 1))}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setCalendarMonth((m) => addMonths(m, 1))}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-semibold text-foreground">{format(calendarMonth, "MMMM yyyy")}</h2>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 border-b border-border">
              {WEEKDAYS.map((day) => (
                <div key={day} className="py-2 text-center text-[11px] font-medium text-muted-foreground tracking-wide">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 flex-1 border-l border-border">
              {calendarWeeks.flat().map((day, i) => {
                const dateKey = format(day, "yyyy-MM-dd");
                const dayEntries = entriesByDate[dateKey] || [];
                const inMonth = isSameMonth(day, calendarMonth);
                const isTodayDate = isToday(day);
                const maxVisible = 3;
                const overflow = dayEntries.length - maxVisible;

                return (
                  <div
                    key={i}
                    className={cn(
                      "border-r border-b border-border p-1 min-h-[100px] flex flex-col",
                      !inMonth && "bg-muted/20"
                    )}
                  >
                    <div className="flex items-start px-1 mb-0.5">
                      <span
                        className={cn(
                          "text-xs leading-6",
                          !inMonth && "text-muted-foreground/40",
                          inMonth && "text-foreground font-medium",
                          isTodayDate && "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-[11px] font-bold"
                        )}
                      >
                        {format(day, "d")}
                      </span>
                    </div>

                    <div className="flex flex-col gap-[2px] flex-1 overflow-hidden">
                      {dayEntries.slice(0, maxVisible).map((entry) => (
                        <div
                          key={entry.id}
                          className="text-[11px] leading-tight px-1.5 py-[3px] rounded-sm truncate transition-opacity hover:opacity-80 cursor-pointer"
                          style={{
                            backgroundColor: entry.color + "20",
                            color: entry.color,
                            borderLeft: `3px solid ${entry.color}`,
                          }}
                          onClick={() => entry.slug && navigate(`/company/${entry.slug}`)}
                          title={`${entry.name} (${entry.ticker}) — Earnings`}
                        >
                          <span className="font-medium">{entry.ticker}</span>{" "}
                          <span className="opacity-80">{entry.name}</span>
                        </div>
                      ))}
                      {overflow > 0 && (
                        <span className="text-[10px] text-muted-foreground px-1.5 font-medium">
                          +{overflow} more
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Add Company Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={(open) => {
        setAddDialogOpen(open);
        if (!open) { setNewTicker(""); setLookupResult(null); setLookupError(""); }
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Company</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Ticker Symbol</label>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g. AAPL"
                  value={newTicker}
                  onChange={(e) => { setNewTicker(e.target.value.toUpperCase()); setLookupResult(null); setLookupError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleLookupTicker()}
                  className="flex-1"
                />
                <Button onClick={handleLookupTicker} disabled={!newTicker.trim() || lookingUp} variant="secondary">
                  {lookingUp ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {lookupError && <p className="text-sm text-destructive">{lookupError}</p>}

            {lookupResult && (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{lookupResult.name}</span>
                  <span className="text-xs text-muted-foreground">{newTicker.trim().toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Next earnings: {format(new Date(lookupResult.earningsDate), "MMM d, yyyy")}
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleAddCompany} disabled={!lookupResult || submitting}>
              {submitting ? "Adding..." : "Add to Calendar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EarningsCalendar;
