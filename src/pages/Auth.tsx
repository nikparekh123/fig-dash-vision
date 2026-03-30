import { useState, useRef } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleComplete = async (code: string) => {
    setError("");
    setLoading(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke(
        "pincode-login",
        { body: { pincode: code } }
      );

      if (fnError || data?.error) {
        setError(data?.error || fnError?.message || "Invalid code.");
        setValue("");
        setLoading(false);
        setTimeout(() => inputRef.current?.focus(), 50);
        return;
      }

      if (data?.session) {
        await supabase.auth.setSession({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
        });
      }
    } catch {
      setError("Something went wrong. Try again.");
      setValue("");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Fig
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your 4-digit code
        </p>

        {loading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-muted border-t-primary" />
            <span className="text-sm">Signing in…</span>
          </div>
        ) : (
          <InputOTP
            maxLength={4}
            value={value}
            onChange={setValue}
            onComplete={handleComplete}
            ref={inputRef}
            pattern="^[0-9]*$"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        )}

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Auth;
