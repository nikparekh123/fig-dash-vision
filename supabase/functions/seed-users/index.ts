import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const USERS = [
  { name: "Ary LaRocca", pincode: "5499", is_admin: true, initials: "AL", color: "#6366f1" },
  { name: "Radhouen Rahmouni", pincode: "2026", is_admin: false, initials: "RR", color: "#f59e0b" },
  { name: "Kushal Jain", pincode: "0987", is_admin: false, initials: "KJ", color: "#10b981" },
  { name: "Nik Parekh", pincode: "6617", is_admin: true, initials: "NP", color: "#ef4444" },
];

function toEmail(name: string): string {
  return name.toLowerCase().replace(/\s+/g, ".") + "@internal.app";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const admin = createClient(supabaseUrl, serviceRoleKey);

    const results: Array<{ name: string; status: string; email: string }> = [];

    for (const u of USERS) {
      const email = toEmail(u.name);
      let userId: string;

      // Try to create user; if exists, find them
      const { data: created, error: createError } =
        await admin.auth.admin.createUser({
          email,
          password: "temp-" + crypto.randomUUID().slice(0, 8),
          email_confirm: true,
          user_metadata: { full_name: u.name },
        });

      if (createError) {
        // User likely exists — look them up
        const { data: listData } = await admin.auth.admin.listUsers();
        const existing = listData?.users?.find(
          (usr: any) => usr.email === email
        );
        if (!existing) {
          results.push({ name: u.name, status: "error: " + createError.message, email });
          continue;
        }
        userId = existing.id;
      } else {
        userId = created.user.id;
      }

      // Upsert into team_members
      const { error: upsertError } = await admin.from("team_members").upsert(
        {
          user_id: userId,
          name: u.name,
          initials: u.initials,
          color: u.color,
          pincode: u.pincode,
          is_admin: u.is_admin,
        },
        { onConflict: "user_id" }
      );

      if (upsertError) {
        results.push({ name: u.name, status: "upsert error: " + upsertError.message, email });
      } else {
        results.push({ name: u.name, status: "ok", email });
      }
    }

    return new Response(JSON.stringify({ results }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
