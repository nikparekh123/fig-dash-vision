

# Pincode Login System & User Seeding

## Overview
Replace the existing email/password auth with a 4-digit pincode system. Users enter a code, it's validated against a `team_members` table, and a magic-link session is created server-side. Four users are seeded with specific pincodes and roles.

## Database

**New table: `team_members`**
```sql
CREATE TABLE public.team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  name text NOT NULL,
  initials text,
  color text,
  pincode text NOT NULL,
  is_admin boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
-- Authenticated users can read team members (needed for display names, etc.)
CREATE POLICY "Authenticated can read" ON public.team_members FOR SELECT TO authenticated USING (true);
```

## New Files

### `supabase/functions/pincode-login/index.ts`
- CORS headers + OPTIONS handler
- Accepts `{ pincode }`, validates it's a 4-char string
- Uses service role admin client to query `team_members` by pincode
- If no match → 401
- Gets user email via `admin.auth.admin.getUserById()`
- Generates magic link via `admin.auth.admin.generateLink({ type: "magiclink", email })`
- Verifies OTP with anon client using `hashed_token`
- Returns `{ session, user }`

### `supabase/functions/seed-users/index.ts`
- Creates 4 auth users via `admin.auth.admin.createUser()` with generated emails (e.g. `ary.larocca@internal.app`)
- Inserts into `team_members` with name, initials, color, pincode, is_admin
- Handles "user already exists" by looking up existing users and upserting
- Users: Ary LaRocca (5499, admin), Radhouen Rahmouni (2026, member), Kushal Jain (0987, member), Nik Parekh (6617, admin)

### `src/pages/Auth.tsx`
- Full-screen centered layout with app heading + "Enter your 4-digit code" subtitle
- 4-slot `InputOTP` component (digits only, maxLength 4)
- On `onComplete`: calls `supabase.functions.invoke('pincode-login', { body: { pincode } })`
- On success: calls `supabase.auth.setSession()` with returned tokens
- Shows error inline, resets OTP input; shows "Signing in…" while loading
- No submit button — auto-submits on 4th digit

## Modified Files

### `src/contexts/AuthContext.tsx`
- No structural changes needed — already exposes `user`, `loading`, `signOut` and listens to auth state changes. Will continue to work as-is.

### `src/App.tsx`
- Replace `AuthPage` import with new `Auth` page
- Update `/login` route to render `<Auth />`
- Keep all existing route protection logic (ProtectedRoute, PublicRoute)
- Remove `/set-password` and `/reset-password` routes (no longer needed)

### `src/components/Navbar.tsx`
- Update `useAuth` import if needed (still from `@/contexts/AuthContext`)

## Files to Delete
- `src/components/AuthPage.tsx` (replaced by `src/pages/Auth.tsx`)
- `src/pages/SetPassword.tsx` (no longer needed)
- `src/pages/ResetPassword.tsx` (no longer needed)

## Execution Order
1. Create `team_members` table migration
2. Create `pincode-login` edge function
3. Create `seed-users` edge function
4. Create `src/pages/Auth.tsx`
5. Update `src/App.tsx` — swap auth page, remove password routes
6. Delete old auth components
7. Run seed-users function to populate data

