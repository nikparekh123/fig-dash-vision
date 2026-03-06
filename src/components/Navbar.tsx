import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, ChevronRight, LayoutDashboard } from "lucide-react";

interface NavbarProps {
  companyName?: string;
}

const Navbar = ({ companyName }: NavbarProps) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </button>
          {companyName && (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-medium text-muted-foreground">{companyName}</span>
            </>
          )}
        </div>
        <Button variant="ghost" size="sm" onClick={signOut} className="gap-1.5">
          <LogOut className="h-3.5 w-3.5" />
          Sign Out
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
