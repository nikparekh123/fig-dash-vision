import KpiCards from "@/components/dashboard/KpiCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ProfitabilityChart from "@/components/dashboard/ProfitabilityChart";
import GuidanceSection from "@/components/dashboard/GuidanceSection";
import AnalystSection from "@/components/dashboard/AnalystSection";
import KeyMetrics from "@/components/dashboard/KeyMetrics";
import StrategicInsights from "@/components/dashboard/StrategicInsights";
import VerdictSection from "@/components/dashboard/VerdictSection";
import SummarySection from "@/components/dashboard/SummarySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <header className="space-y-1">
          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Figma
            </h1>
            <span className="text-sm font-medium text-muted-foreground">(NYSE: FIG)</span>
          </div>
          <p className="text-sm text-muted-foreground">Q4 2025 Earnings Dashboard</p>
        </header>

        {/* KPI Cards */}
        <KpiCards />

        {/* Charts Row */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <RevenueChart />
          <ProfitabilityChart />
        </div>

        {/* Guidance */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Forward Guidance</h2>
          <GuidanceSection />
        </div>

        {/* Key Metrics */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">🚀 Metrics That Jump Off the Page</h2>
          <KeyMetrics />
        </div>

        {/* Analyst Views & Retention */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Customer Retention & Analyst Views</h2>
          <AnalystSection />
        </div>

        {/* Strategic Insights */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">🌎 Strategic Insights</h2>
          <StrategicInsights />
        </div>

        {/* Big Picture & Verdict */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">The Big Picture</h2>
          <VerdictSection />
        </div>

        {/* Summary */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Analyst Brief</h2>
          <SummarySection />
        </div>

        {/* Footer */}
        <footer className="border-t border-border/50 pt-4 text-center text-xs text-muted-foreground">
          Data sourced from Figma Q4 2025 earnings release. Estimates are consensus analyst projections.
        </footer>
      </div>
    </div>
  );
};

export default Index;
