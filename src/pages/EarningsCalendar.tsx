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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
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
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CalendarIcon,
  Check,
  ChevronsUpDown,
} from "lucide-react";

interface CompanyEvent {
  id: string;
  company_slug: string;
  company_name: string;
  ticker: string;
  event_name: string;
  event_date: string;
}

type ViewMode = "feed" | "calendar";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const SUGGESTED_EVENTS = [
  "Q1 Earnings Call",
  "Q2 Earnings Call",
  "Q3 Earnings Call",
  "Q4 Earnings Call",
  "Investor Day",
  "Product Launch",
  "Annual Meeting",
  "Conference Presentation",
];

const EarningsCalendar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("feed");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [events, setEvents] = useState<CompanyEvent[]>([]);
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  // Dialog state
  const [selectedSlug, setSelectedSlug] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState<Date>();
  const [companyOpen, setCompanyOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [eventNameSuggestions, setEventNameSuggestions] = useState<string[]>([]);

  const fetchEvents = useCallback(async () => {
    const { data } = await supabase
      .from("company_events")
      .select("id, company_slug, company_name, ticker, event_name, event_date");
    if (data) setEvents(data);
  }, []);

  // Fetch unique event names for suggestions
  const fetchEventNameSuggestions = useCallback(async () => {
    const { data } = await supabase
      .from("company_events")
      .select("event_name");
    if (data) {
      const unique = [...new Set(data.map((d) => d.event_name))];
      const merged = [...new Set([...SUGGESTED_EVENTS, ...unique])];
      setEventNameSuggestions(merged);
    } else {
      setEventNameSuggestions(SUGGESTED_EVENTS);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
    fetchEventNameSuggestions();
  }, [fetchEvents, fetchEventNameSuggestions]);

  const selectedCompany = useMemo(
    () => companies.find((c) => c.slug === selectedSlug),
    [selectedSlug]
  );

  // Build display entries from DB events
  const allEntries = useMemo(() => {
    return events.map((e) => {
      const company = companies.find((c) => c.slug === e.company_slug);
      return {
        id: e.id,
        company_slug: e.company_slug,
        company_name: e.company_name,
        ticker: e.ticker,
        event_name: e.event_name,
        event_date: new Date(e.event_date + "T00:00:00"),
        logo: company?.logo,
        color: company?.color || "#6366f1",
        slug: company?.slug,
      };
    });
  }, [events]);

  const filteredEntries = useMemo(() => {
    const q = search.toLowerCase();
    const filtered = allEntries.filter(
      (e) =>
        e.company_name.toLowerCase().includes(q) ||
        e.ticker.toLowerCase().includes(q) ||
        e.event_name.toLowerCase().includes(q)
    );
    const now = new Date();
    return filtered.sort((a, b) => {
      const aDiff = differenceInDays(a.event_date, now);
      const bDiff = differenceInDays(b.event_date, now);
      const aFuture = aDiff >= 0;
      const bFuture = bDiff >= 0;
      if (aFuture && bFuture) return aDiff - bDiff;
      if (aFuture && !bFuture) return -1;
      if (!aFuture && bFuture) return 1;
      return bDiff - aDiff;
    });
  }, [allEntries, search]);

  // Companies without upcoming events
  const companiesWithoutEvents = useMemo(() => {
    const now = new Date();
    const slugsWithFuture = new Set(
      allEntries
        .filter((e) => differenceInDays(e.event_date, now) >= 0)
        .map((e) => e.company_slug)
    );
    return companies.filter((c) => !slugsWithFuture.has(c.slug));
  }, [allEntries]);

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
    const map: Record<string, typeof allEntries> = {};
    allEntries.forEach((e) => {
      const key = format(e.event_date, "yyyy-MM-dd");
      if (!map[key]) map[key] = [];
      map[key].push(e);
    });
    return map;
  }, [allEntries]);

  const openAddDialog = (prefilledSlug?: string) => {
    setSelectedSlug(prefilledSlug || "");
    setEventName("");
    setEventDate(undefined);
    setAddDialogOpen(true);
  };

  const handleAddEvent = async () => {
    if (!selectedCompany || !eventName.trim() || !eventDate || !user) return;
    setSubmitting(true);
    await supabase.from("company_events").insert({
      user_id: user.id,
      company_slug: selectedCompany.slug,
      company_name: selectedCompany.name,
      ticker: selectedCompany.ticker,
      event_name: eventName.trim(),
      event_date: format(eventDate, "yyyy-MM-dd"),
    });
    setAddDialogOpen(false);
    setSubmitting(false);
    fetchEvents();
    fetchEventNameSuggestions();
  };

  const handleDeleteEvent = async (id: string) => {
    await supabase.from("company_events").delete().eq("id", id);
    fetchEvents();
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

  // Filter suggestions based on input
  const filteredSuggestions = eventNameSuggestions.filter((s) =>
    s.toLowerCase().includes(eventName.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar companyName="Events Calendar" />

      <div className="w-full px-4 py-4 md:px-6 space-y-4 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Events Calendar</h1>
          <Button size="sm" onClick={() => openAddDialog()} className="gap-1.5">
            <Plus className="h-3.5 w-3.5" />
            Add Event
          </Button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search company, ticker, or event..."
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

        {/* Alert: Companies without upcoming events */}
        {viewMode === "feed" && companiesWithoutEvents.length > 0 && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Companies without upcoming events
            </div>
            <div className="flex flex-wrap gap-2">
              {companiesWithoutEvents.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => openAddDialog(c.slug)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all text-sm"
                >
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="h-4 w-4 object-contain"
                    />
                  ) : (
                    <span
                      className="h-4 w-4 rounded-full text-[8px] font-bold text-primary-foreground flex items-center justify-center"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.name.charAt(0)}
                    </span>
                  )}
                  <span className="text-foreground">{c.name}</span>
                  <Plus className="h-3 w-3 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Feed View */}
        {viewMode === "feed" && (
          <div className="space-y-2">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className={cn(
                  "group flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-200",
                  entry.slug &&
                    "cursor-pointer hover:border-primary/40 hover:shadow-md",
                  isPast(entry.event_date) && "opacity-50"
                )}
                onClick={() =>
                  entry.slug && navigate(`/company/${entry.slug}`)
                }
              >
                {entry.logo ? (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/90 p-1.5">
                    <img
                      src={entry.logo}
                      alt={`${entry.company_name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-primary-foreground"
                    style={{ backgroundColor: entry.color }}
                  >
                    {entry.company_name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {entry.company_name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {entry.ticker}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground/70">
                    {entry.event_name} · {format(entry.event_date, "MMM d, yyyy")}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-xs font-medium px-2.5 py-0.5 rounded-full border",
                      isPast(entry.event_date)
                        ? "bg-muted/50 border-border text-muted-foreground"
                        : "bg-primary/10 border-primary/20 text-primary"
                    )}
                  >
                    <Clock className="h-3 w-3 inline mr-1" />
                    {getCountdown(entry.event_date)}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteEvent(entry.id);
                    }}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
            {filteredEntries.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-12">
                No events found. Add events to track important dates.
              </p>
            )}
          </div>
        )}

        {/* Calendar View */}
        {viewMode === "calendar" && (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center gap-3 mb-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCalendarMonth(new Date())}
                className="text-xs"
              >
                Today
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setCalendarMonth((m) => subMonths(m, 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setCalendarMonth((m) => addMonths(m, 1))}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-semibold text-foreground">
                {format(calendarMonth, "MMMM yyyy")}
              </h2>
            </div>

            <div className="grid grid-cols-7 border-b border-border">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="py-2 text-center text-[11px] font-medium text-muted-foreground tracking-wide"
                >
                  {day}
                </div>
              ))}
            </div>

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
                          isTodayDate &&
                            "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-[11px] font-bold"
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
                          onClick={() =>
                            entry.slug && navigate(`/company/${entry.slug}`)
                          }
                          title={`${entry.company_name} — ${entry.event_name}`}
                        >
                          <span className="font-medium">{entry.ticker}</span>{" "}
                          <span className="opacity-80">{entry.event_name}</span>
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

      {/* Add Event Dialog */}
      <Dialog
        open={addDialogOpen}
        onOpenChange={(open) => {
          setAddDialogOpen(open);
          if (!open) {
            setSelectedSlug("");
            setEventName("");
            setEventDate(undefined);
          }
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Company Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Company
              </label>
              <Popover open={companyOpen} onOpenChange={setCompanyOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={companyOpen}
                    className="w-full justify-between font-normal"
                  >
                    {selectedCompany ? (
                      <span className="flex items-center gap-2">
                        {selectedCompany.logo ? (
                          <img
                            src={selectedCompany.logo}
                            alt=""
                            className="h-4 w-4 object-contain"
                          />
                        ) : (
                          <span
                            className="h-4 w-4 rounded text-[8px] font-bold text-primary-foreground flex items-center justify-center"
                            style={{
                              backgroundColor: selectedCompany.color,
                            }}
                          >
                            {selectedCompany.name.charAt(0)}
                          </span>
                        )}
                        {selectedCompany.name} ({selectedCompany.ticker})
                      </span>
                    ) : (
                      <span className="text-muted-foreground">
                        Select company...
                      </span>
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search company..." />
                    <CommandList>
                      <CommandEmpty>No company found.</CommandEmpty>
                      <CommandGroup>
                        {companies.map((c) => (
                          <CommandItem
                            key={c.slug}
                            value={`${c.name} ${c.ticker}`}
                            onSelect={() => {
                              setSelectedSlug(c.slug);
                              setCompanyOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedSlug === c.slug
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <span className="flex items-center gap-2">
                              {c.logo ? (
                                <img
                                  src={c.logo}
                                  alt=""
                                  className="h-4 w-4 object-contain"
                                />
                              ) : (
                                <span
                                  className="h-4 w-4 rounded text-[8px] font-bold text-primary-foreground flex items-center justify-center"
                                  style={{ backgroundColor: c.color }}
                                >
                                  {c.name.charAt(0)}
                                </span>
                              )}
                              {c.name}{" "}
                              <span className="text-muted-foreground text-xs">
                                {c.ticker}
                              </span>
                            </span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Event Name with suggestions */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Event Name
              </label>
              <Input
                placeholder="e.g. Q4 Earnings Call, Investor Day"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
              {eventName.length > 0 && filteredSuggestions.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {filteredSuggestions.slice(0, 5).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setEventName(s)}
                      className={cn(
                        "text-xs px-2 py-1 rounded-full border transition-colors",
                        eventName === s
                          ? "bg-primary/10 border-primary/30 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/20"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {eventName.length === 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_EVENTS.slice(0, 4).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setEventName(s)}
                      className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground hover:border-primary/20 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Event Date
              </label>
              <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !eventDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {eventDate ? (
                      format(eventDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={eventDate}
                    onSelect={(d) => {
                      setEventDate(d);
                      setDatePickerOpen(false);
                    }}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleAddEvent}
              disabled={
                !selectedCompany ||
                !eventName.trim() ||
                !eventDate ||
                submitting
              }
            >
              {submitting ? "Adding..." : "Add Event"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EarningsCalendar;
