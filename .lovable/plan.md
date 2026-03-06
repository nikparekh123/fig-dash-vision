

# Plan: Simplify Login & Pre-create User Accounts

## Overview
Remove signup/forgot-password UI, pre-create two user accounts via an edge function, and implement a first-login password setup flow.

## Changes

### 1. Simplify `AuthPage.tsx`
- Remove signup and forgot password views entirely
- Remove the "Create account" and "Forgot password" buttons
- Keep only the email + password login form

### 2. Create edge function `create-invite-users`
- Uses Supabase Admin API (`auth.admin.createUser`) to create:
  - `nik@sunnyfi.co` with `email_confirm: true` and a random temporary password
  - `kushal@sunnyfi.co` with `email_confirm: true` and a random temporary password
- Sets `user_metadata: { must_change_password: true }` on both
- Sends each user an email with a magic link / password reset link so they can set their password on first visit

### 3. Send password-setup emails
- After creating users, call `auth.admin.generateLink({ type: 'recovery', email })` for each user
- This sends them a "set your password" email link
- When they click it, they land on `/reset-password` (already built) to set their password

### 4. Update `ProtectedRoute` in `App.tsx`
- After login, check `user.user_metadata.must_change_password`
- If true, redirect to `/set-password` instead of dashboard

### 5. Create `/set-password` page
- Simple form: new password + confirm password
- On submit: call `supabase.auth.updateUser({ password })` and also update metadata to remove the flag
- Redirect to dashboard after success

## Files Changed
| File | Action |
|---|---|
| `src/components/AuthPage.tsx` | Simplify to login-only |
| `supabase/functions/create-invite-users/index.ts` | New edge function to create accounts |
| `src/pages/SetPassword.tsx` | New page for first-login password setup |
| `src/App.tsx` | Add `/set-password` route + redirect logic |

