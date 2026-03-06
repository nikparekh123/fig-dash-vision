import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 60;

const LoginWall = ({ onAuthenticated }: { onAuthenticated: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState<number | null>(null);

  const isLocked = lockedUntil !== null && Date.now() < lockedUntil;

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      if (isLocked) {
        const remaining = Math.ceil(((lockedUntil ?? 0) - Date.now()) / 1000);
        setError(`Too many attempts. Try again in ${remaining}s.`);
        return;
      }

      if (username === "Rad" && password === "Figma10k%") {
        sessionStorage.setItem("authenticated", "true");
        onAuthenticated();
      } else {
        const next = attempts + 1;
        setAttempts(next);
        if (next >= MAX_ATTEMPTS) {
          const until = Date.now() + LOCKOUT_SECONDS * 1000;
          setLockedUntil(until);
          setError(`Too many attempts. Locked for ${LOCKOUT_SECONDS}s.`);
          setTimeout(() => {
            setLockedUntil(null);
            setAttempts(0);
          }, LOCKOUT_SECONDS * 1000);
        } else {
          setError(`Invalid credentials. ${MAX_ATTEMPTS - next} attempts remaining.`);
        }
      }
    },
    [username, password, attempts, isLocked, lockedUntil, onAuthenticated]
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Lock className="h-5 w-5 text-foreground" />
          </div>
          <CardTitle className="text-xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                disabled={isLocked}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={isLocked}
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            <Button type="submit" className="w-full" disabled={isLocked}>
              Enter
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginWall;
