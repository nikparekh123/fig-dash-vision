import { Figma, Clock, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import KpiCards from "@/components/dashboard/KpiCards";
import NewsSection from "@/components/dashboard/NewsSection";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ProfitabilityChart from "@/components/dashboard/ProfitabilityChart";
import GuidanceSection from "@/components/dashboard/GuidanceSection";
import AnalystSection from "@/components/dashboard/AnalystSection";
import CustomerRetentionSection from "@/components/dashboard/CustomerRetentionSection";
import KeyMetrics from "@/components/dashboard/KeyMetrics";
import StrategicInsights from "@/components/dashboard/StrategicInsights";
import SummarySection from "@/components/dashboard/SummarySection";
import TechnicalAnalysisSection from "@/components/dashboard/TechnicalAnalysisSection";
import MarketPenetration from "@/components/dashboard/MarketPenetration";
import OwnershipStructure from "@/components/dashboard/OwnershipStructure";

const Index = () => {
  const { signOut, user } = useAuth();

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Figma className="h-5 w-5 text-foreground" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-baseline gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Figma
                </h1>
                <span className="text-sm font-medium text-muted-foreground">(NYSE: FIG)</span>
              </div>
              <p className="text-sm text-muted-foreground">Q4 2025 Earnings Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>Last updated: March 4, 2026</span>
            </div>
            <Button variant="ghost" size="sm" onClick={signOut} className="gap-1.5">
              <LogOut className="h-3.5 w-3.5" />
              Sign Out
            </Button>
          </div>
        </header>

        {/* 1. KPI Cards */}
        <KpiCards />

        {/* 2. Investment Thesis */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">📊 Investment Thesis</h2>
          <SummarySection />
        </div>

        {/* 3. Revenue & Profitability Charts */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <RevenueChart />
          <ProfitabilityChart />
        </div>

        {/* 4. Key Metrics */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">🚀 Key Financial Metrics</h2>
          <KeyMetrics />
        </div>

        {/* 5. Market Penetration */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">🎯 Market Penetration & Growth Runway</h2>
          <MarketPenetration />
        </div>

        {/* 6. Ownership Structure */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">🏛 Ownership Structure</h2>
          <OwnershipStructure />
        </div>

        {/* 7. Customer Retention */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">📊 Customer Retention & Growth</h2>
          <CustomerRetentionSection />
        </div>

        {/* 8. Forward Guidance */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Forward Guidance</h2>
          <GuidanceSection />
        </div>

        {/* 9. Technical Analysis */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">📈 Technical Analysis</h2>
          <TechnicalAnalysisSection />
        </div>

        {/* 10. Strategic Insights */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">🌎 Strategic Insights</h2>
          <StrategicInsights />
        </div>

        {/* 11. Analyst Views */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Analyst Views</h2>
          <AnalystSection />
        </div>

        {/* 12. Latest News */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Latest News</h2>
          <NewsSection />
        </div>

        {/* Footer */}
        <footer className="border-t border-border/50 pt-4 text-center text-xs text-muted-foreground">
          Data sourced from Figma Form 10-K, Year Ended December 31, 2025. Not investment advice.
        </footer>
      </div>
    </div>
  );
};

export default Index;
