import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { companies } from "@/data/companies";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {companies.map((c) => (
              <Card
                key={c.slug}
                onClick={() => navigate(`/company/${c.slug}`)}
                className="group cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
              >
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      className="h-16 w-16 rounded-2xl object-contain transition-transform group-hover:scale-110"
                    />
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
                  </div>
                  <div className="rounded-full bg-secondary px-3 py-1">
                    <span className="text-xs font-medium text-muted-foreground">
                      {c.quarter} Earnings
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
