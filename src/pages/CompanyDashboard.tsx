import { useParams, Navigate } from "react-router-dom";
import { Clock } from "lucide-react";
import { getCompanyBySlug } from "@/data/companies";
import Navbar from "@/components/Navbar";
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
import PositionStatus from "@/components/dashboard/PositionStatus";

const CompanyDashboard = () => {
  const { slug } = useParams<{ slug: string }>();
  const company = getCompanyBySlug(slug || "");

  if (!company) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar companyName={company.name} />
      <div className="px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Header */}
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-10 w-10 rounded-lg object-contain"
                />
              ) : (
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-white"
                  style={{ backgroundColor: company.color }}
                >
                  {company.name.charAt(0)}
                </div>
              )}
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-2">
                  <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{company.name}</h1>
                  <span className="text-sm font-medium text-muted-foreground">({company.exchange}: {company.ticker})</span>
                </div>
                <p className="text-sm text-muted-foreground">{company.quarter} Earnings Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>Last updated: {company.lastUpdated}</span>
            </div>
          </header>

          <KpiCards data={company.kpis} />

          <PositionStatus data={company.positions} />

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">📊 Investment Thesis</h2>
            <SummarySection data={company.summary} />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <RevenueChart data={company.revenueChart} />
            <ProfitabilityChart data={company.profitabilityChart} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">🚀 Key Financial Metrics</h2>
            <KeyMetrics data={company.keyMetrics} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">🎯 Market Penetration & Growth Runway</h2>
            <MarketPenetration data={company.marketPenetration} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">🏛 Ownership Structure</h2>
            <OwnershipStructure data={company.ownership} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">📊 Customer Retention & Growth</h2>
            <CustomerRetentionSection data={company.customerRetention} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">Forward Guidance</h2>
            <GuidanceSection data={company.guidance} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">📈 Technical Analysis</h2>
            <TechnicalAnalysisSection data={company.technicalAnalysis} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">🌎 Strategic Insights</h2>
            <StrategicInsights data={company.strategicInsights} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">Analyst Views</h2>
            <AnalystSection data={company.analysts} />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">Latest News</h2>
            <NewsSection data={company.news} />
          </div>

          <footer className="border-t border-border/50 pt-4 text-center text-xs text-muted-foreground">
            Data sourced from public filings and earnings reports. Not investment advice.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
