import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { companies } from "@/data/companies";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { format, differenceInDays, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Search,
  List,
  CalendarDays,
  Plus,
  CalendarIcon,
  Clock,
  X,
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

const EarningsCalendar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("feed");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [customEntries, setCustomEntries] = useState<
    { id: string; company_name: string; ticker: string; earnings_date: string }[]
  >([]);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<Date | undefined>();

  // Add company form state
  const [newName, setNewName] = useState("");
  const [newTicker, setNewTicker] = useState("");
  const [newDate, setNewDate] = useState<Date | undefined>();
  const [submitting, setSubmitting] = useState(false);

  // Fetch custom entries
  const fetchCustomEntries = async () => {
    const { data } = await supabase
      .from("custom_earnings")
      .select("id, company_name, ticker, earnings_date");
    if (data) setCustomEntries(data);
  };

  useEffect(() => {
    fetchCustomEntries();
    const interval = setInterval(fetchCustomEntries, 60_000);
    return () => clearInterval(interval);
  }, []);

  // Merge built-in + custom
  const allEntries: EarningsEntry[] = useMemo(() => {
    const builtIn: EarningsEntry[] = companies.map((c) => ({
      id: c.slug,
      name: c.name,
      ticker: c.ticker,
      earningsDate: new Date(c.earningsDate),
      logo: c.logo,
      color: c.color,
      slug: c.slug,
      isCustom: false,
    }));

    const custom: EarningsEntry[] = customEntries.map((c) => ({
      id: c.id,
      name: c.company_name,
      ticker: c.ticker,
      earningsDate: new Date(c.earnings_date + "T00:00:00"),
      color: "#6366f1",
      isCustom: true,
    }));

    return [...builtIn, ...custom];
  }, [customEntries]);

  // Filter & sort
  const filteredEntries = useMemo(() => {
    const q = search.toLowerCase();
    const filtered = allEntries.filter(
      (e) =>
        e.name.toLowerCase().includes(q) || e.ticker.toLowerCase().includes(q)
    );

    const now = new Date();
    // Sort: future dates ascending, then past dates descending
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

  // Calendar: dates with earnings
  const earningsDates = useMemo(() => {
    return allEntries.map((e) => e.earningsDate);
  }, [allEntries]);

  const companiesOnDate = useMemo(() => {
    if (!selectedCalendarDate) return [];
    return allEntries.filter((e) => isSameDay(e.earningsDate, selectedCalendarDate));
  }, [allEntries, selectedCalendarDate]);

  const handleAddCompany = async () => {
    if (!newName || !newTicker || !newDate || !user) return;
    setSubmitting(true);
    await supabase.from("custom_earnings").insert({
      user_id: user.id,
      company_name: newName.trim(),
      ticker: newTicker.trim().toUpperCase(),
      earnings_date: format(newDate, "yyyy-MM-dd"),
    });
    setNewName("");
    setNewTicker("");
    setNewDate(undefined);
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
    <div className="min-h-screen bg-background">
      <Navbar companyName="Earnings Calendar" />

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Earnings Calendar</h1>
          <Button size="sm" onClick={() => setAddDialogOpen(true)} className="gap-1.5">
            <Plus className="h-3.5 w-3.5" />
            Add Company
          </Button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search company or ticker..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9 text-sm"
            />
          </div>
          <ToggleGroup
            type="single"
            value={viewMode}
            onValueChange={(v) => v && setViewMode(v as ViewMode)}
            size="sm"
          >
            <ToggleGroupItem value="feed" aria-label="Feed view">
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="calendar" aria-label="Calendar view">
              <CalendarDays className="h-4 w-4" />
            </ToggleGroupItem>
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
                    <img
                      src={entry.logo}
                      alt={`${entry.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
                    style={{ backgroundColor: entry.color }}
                  >
                    {entry.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {entry.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{entry.ticker}</span>
                  </div>
                  <p className="text-xs text-muted-foreground/70">
                    {format(entry.earningsDate, "MMM d, yyyy")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-xs font-medium px-2.5 py-0.5 rounded-full border",
                      isPast(entry.earningsDate)
                        ? "bg-muted/50 border-border text-muted-foreground"
                        : "bg-primary/10 border-primary/20 text-primary"
                    )}
                  >
                    <Clock className="h-3 w-3 inline mr-1" />
                    {getCountdown(entry.earningsDate)}
                  </span>
                  {entry.isCustom && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCustom(entry.id);
                      }}
                    >
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {filteredEntries.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-12">
                No earnings found
              </p>
            )}
          </div>
        )}

        {/* Calendar View */}
        {viewMode === "calendar" && (
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6">
            <Card className="border-border/50">
              <CardContent className="p-4">
                <Calendar
                  mode="single"
                  selected={selectedCalendarDate}
                  onSelect={setSelectedCalendarDate}
                  className={cn("p-3 pointer-events-auto")}
                  modifiers={{
                    earnings: earningsDates,
                  }}
                  modifiersClassNames={{
                    earnings:
                      "bg-primary/20 text-primary font-bold hover:bg-primary/30",
                  }}
                />
              </CardContent>
            </Card>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground">
                {selectedCalendarDate
                  ? format(selectedCalendarDate, "MMMM d, yyyy")
                  : "Select a date"}
              </h3>
              {selectedCalendarDate && companiesOnDate.length === 0 && (
                <p className="text-sm text-muted-foreground py-4">
                  No earnings on this date
                </p>
              )}
              {companiesOnDate.map((entry) => (
                <div
                  key={entry.id}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-card/80",
                    entry.slug && "cursor-pointer hover:border-primary/40"
                  )}
                  onClick={() => entry.slug && navigate(`/company/${entry.slug}`)}
                >
                  {entry.logo ? (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/90 p-1">
                      <img
                        src={entry.logo}
                        alt={entry.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                      style={{ backgroundColor: entry.color }}
                    >
                      {entry.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <span className="font-medium text-foreground text-sm">
                      {entry.name}
                    </span>
                    <p className="text-xs text-muted-foreground">{entry.ticker}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Company Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Earnings Date</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company Name</label>
              <Input
                placeholder="e.g. Apple Inc."
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Ticker</label>
              <Input
                placeholder="e.g. AAPL"
                value={newTicker}
                onChange={(e) => setNewTicker(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Earnings Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !newDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {newDate ? format(newDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={newDate}
                    onSelect={setNewDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleAddCompany}
              disabled={!newName || !newTicker || !newDate || submitting}
            >
              {submitting ? "Adding..." : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EarningsCalendar;
