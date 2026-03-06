

# Plan: Client-Side Login Wall

## Important Security Note
Without a backend (Supabase/Cloud), enterprise-grade features like MFA, WebAuthn, WAF, zero-trust, and CAPTCHA **cannot be implemented**. This will be a **visual login gate** with credentials checked client-side. The credentials will be visible in the browser source code. To upgrade to real security later, connect Supabase.

## What Will Be Built

### 1. New file: `src/components/LoginWall.tsx`
- Clean, minimal login form matching the dark theme
- Username and password fields + "Enter" button
- Client-side check against the provided credentials
- Rate limiting: lock out after 5 failed attempts for 60 seconds (client-side only)
- Session stored in `sessionStorage` (cleared on tab close)
- Error messages for invalid credentials and lockout

### 2. Edit: `src/pages/Index.tsx`
- Wrap the entire dashboard in the login gate
- If not authenticated, show `LoginWall` instead of the dashboard
- Authentication state managed via React state + sessionStorage

## Design
- Centered card on the dark background
- Consistent with existing card/input/button components
- Subtle branding consistent with the dashboard aesthetic

## Files Changed
| File | Action |
|---|---|
| `src/components/LoginWall.tsx` | **New** — login form component |
| `src/pages/Index.tsx` | **Edit** — gate dashboard behind login |

