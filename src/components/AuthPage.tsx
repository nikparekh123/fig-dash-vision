import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type View = "login" | "signup" | "forgot";

const AuthPage = () => {
  const [view, setView] = useState<View>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  }, [email, password]);

  const handleSignup = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName },
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) {
      setError(error.message);
    } else {
      setMessage("Check your email for a confirmation link.");
    }
    setLoading(false);
  }, [email, password, displayName]);

  const handleForgotPassword = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      setError(error.message);
    } else {
      setMessage("Check your email for a password reset link.");
    }
    setLoading(false);
  }, [email]);

  const resetForm = (newView: View) => {
    setError("");
    setMessage("");
    setView(newView);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Lock className="h-5 w-5 text-foreground" />
          </div>
          <CardTitle className="text-xl">
            {view === "login" && "Sign In"}
            {view === "signup" && "Create Account"}
            {view === "forgot" && "Reset Password"}
          </CardTitle>
          <CardDescription>
            {view === "login" && "Enter your credentials to access the dashboard"}
            {view === "signup" && "Sign up for dashboard access"}
            {view === "forgot" && "We'll send you a reset link"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {view === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="pl-9" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in…" : "Sign In"}
              </Button>
              <div className="flex justify-between text-sm">
                <button type="button" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => resetForm("forgot")}>Forgot password?</button>
                <button type="button" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => resetForm("signup")}>Create account</button>
              </div>
            </form>
          )}

          {view === "signup" && (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="displayName" value={displayName} onChange={e => setDisplayName(e.target.value)} className="pl-9" placeholder="Your name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupEmail">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="signupEmail" type="email" value={email} onChange={e => setEmail(e.target.value)} className="pl-9" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupPassword">Password</Label>
                <Input id="signupPassword" type="password" value={password} onChange={e => setPassword(e.target.value)} minLength={8} required />
                <p className="text-xs text-muted-foreground">Minimum 8 characters</p>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              {message && <p className="text-sm text-green-500">{message}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account…" : "Create Account"}
              </Button>
              <button type="button" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => resetForm("login")}>
                <ArrowLeft className="h-3 w-3" /> Back to sign in
              </button>
            </form>
          )}

          {view === "forgot" && (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resetEmail">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="resetEmail" type="email" value={email} onChange={e => setEmail(e.target.value)} className="pl-9" placeholder="you@example.com" required />
                </div>
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              {message && <p className="text-sm text-green-500">{message}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending…" : "Send Reset Link"}
              </Button>
              <button type="button" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => resetForm("login")}>
                <ArrowLeft className="h-3 w-3" /> Back to sign in
              </button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
