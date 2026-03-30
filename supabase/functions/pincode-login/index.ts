import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { pincode } = await req.json();

    if (typeof pincode !== "string" || pincode.length !== 4) {
      return new Response(JSON.stringify({ error: "Invalid code." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    const adminClient = createClient(supabaseUrl, serviceRoleKey);
    const anonClient = createClient(supabaseUrl, anonKey);

    // Look up team member by pincode
    const { data: member, error: memberError } = await adminClient
      .from("team_members")
      .select("user_id")
      .eq("pincode", pincode)
      .maybeSingle();

    if (memberError || !member) {
      return new Response(JSON.stringify({ error: "Invalid code." }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get user email
    const { data: userData, error: userError } =
      await adminClient.auth.admin.getUserById(member.user_id);

    if (userError || !userData?.user?.email) {
      return new Response(JSON.stringify({ error: "User not found." }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Generate magic link
    const { data: linkData, error: linkError } =
      await adminClient.auth.admin.generateLink({
        type: "magiclink",
        email: userData.user.email,
      });

    if (linkError || !linkData?.properties?.hashed_token) {
      console.error("generateLink error:", linkError);
      return new Response(
        JSON.stringify({ error: "Authentication failed." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const hashedToken = linkData.properties.hashed_token;

    // Verify OTP to get session
    const { data: otpData, error: otpError } =
      await anonClient.auth.verifyOtp({
        token_hash: hashedToken,
        type: "magiclink",
      });

    if (otpError || !otpData?.session) {
      console.error("verifyOtp error:", otpError);
      return new Response(
        JSON.stringify({ error: "Authentication failed." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ session: otpData.session, user: otpData.user }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
