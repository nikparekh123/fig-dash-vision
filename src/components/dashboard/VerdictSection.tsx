import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, AlertTriangle, Scale } from "lucide-react";

const VerdictSection = () => (
  <div className="space-y-4">
    {/* Strengths vs Risks */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card className="border-success/20 bg-success/5 backdrop-blur-sm">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="h-4 w-4 text-success" />
            <h3 className="text-sm font-bold text-foreground">Strengths</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              Revenue growth +41% YoY ($1.056B), billings +45% ($1.27B)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              136% NDR — customers reliably expand spend
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              Zero debt, $1.66B cash fortress, $242.7M FCF (23% margin)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              Non-GAAP operating income $129.5M (12% margin)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              2/3 of MAUs are non-designers — platform breadth validated
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-danger/20 bg-danger/5 backdrop-blur-sm">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-danger" />
            <h3 className="text-sm font-bold text-foreground">Risks</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              GAAP net loss -$1.25B (driven by $1.364B SBC, incl. $975.7M one-time IPO RSU)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              Gross margin fell 88.3% → 82.4%; cost of revenue grew 112% vs 41% revenue
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              $759M unrecognized CEO stock compensation over next 4–5 years
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              AI could destroy seat model — company's own risk factor warning
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              Multi-class voting concentrates control with CEO Dylan Field
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
              $73.7M Bitcoin ETF on balance sheet — unusual for enterprise SaaS
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    {/* Verdict */}
    <Card className="border-chart-amber/20 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Scale className="h-4 w-4 text-chart-amber" />
          <h3 className="text-sm font-bold text-foreground">⚖️ The Verdict</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Figma's GAAP financials look alarming (<span className="font-semibold text-danger">-$1.25B net loss</span>), but the headline number is distorted by{" "}
          <span className="font-semibold text-foreground">$1.364B in stock-based compensation</span> — the vast majority from a one-time IPO-triggered RSU vesting event ($975.7M). Strip that out and the underlying business generated{" "}
          <span className="font-semibold text-success">$129.5M in Non-GAAP operating income</span> at a 12% margin, with $242.7M in free cash flow.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mt-3">
          The central tension: <span className="font-semibold text-foreground">AI is both Figma's growth engine and its existential risk</span>. It drives product expansion but compresses gross margins (cost of revenue +112%) and threatens the per-seat pricing model the business is built on. The March 2026 AI credit billing rollout is the next critical test — if customers accept it, margins stabilize; if they balk, NDR could decline sharply.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mt-3">
          Investors need conviction that Figma can successfully navigate the transition from a <span className="font-semibold text-foreground">per-seat design tool</span> to a <span className="font-semibold text-foreground">usage-based platform OS</span> — while managing $759M in unrecognized CEO compensation that will weigh on GAAP results for years to come.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default VerdictSection;
