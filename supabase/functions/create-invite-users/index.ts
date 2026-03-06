import { createClient } from "https://esm.sh/@supabase/supabase-js@2.98.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const users = [
    { email: "nik@sunnyfi.co" },
    { email: "kushal@sunnyfi.co" },
  ];

  const results = [];

  for (const u of users) {
    // Create user with a random temp password
    const tempPassword = crypto.randomUUID();
    const { data: created, error: createError } =
      await supabaseAdmin.auth.admin.createUser({
        email: u.email,
        password: tempPassword,
        email_confirm: true,
        user_metadata: { must_change_password: true },
      });

    if (createError) {
      results.push({ email: u.email, status: "error", message: createError.message });
      continue;
    }

    // Generate a recovery link so user can set their password
    const { data: linkData, error: linkError } =
      await supabaseAdmin.auth.admin.generateLink({
        type: "recovery",
        email: u.email,
      });

    results.push({
      email: u.email,
      status: "created",
      userId: created.user?.id,
      recoveryLink: linkData?.properties?.action_link ?? null,
      linkError: linkError?.message ?? null,
    });
  }

  return new Response(JSON.stringify({ results }, null, 2), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
