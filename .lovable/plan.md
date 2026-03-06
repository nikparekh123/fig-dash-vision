

# Secure Backend Authentication

## Current Problem
Right now, credentials (`Rad` / `Figma10k%`) are hardcoded in the frontend JavaScript — anyone can see them in the browser's source code. There is no backend connected.

## What's Needed
To implement real, secure authentication you need a backend. Lovable supports two options:

1. **Lovable Cloud** (recommended) — spins up a Supabase-powered backend automatically, no external account needed
2. **External Supabase connection** — connect your own Supabase project

Neither is currently connected to this project.

## What I'll Build Once Connected
After connecting a backend, I would implement:

| Layer | Feature |
|---|---|
| **Auth provider** | Supabase Auth with email/password login |
| **Credential storage** | Hashed passwords in Supabase's `auth.users` (bcrypt, server-side) |
| **Session management** | Secure JWT tokens managed by Supabase, validated server-side |
| **RLS policies** | Row-Level Security on all tables so data is inaccessible without valid auth |
| **Protected routes** | Frontend auth guard using `onAuthStateChange` listener |
| **Rate limiting** | Edge function with attempt tracking to prevent brute force |

## Next Step
**You need to connect a backend first.** Please either:
- Enable **Lovable Cloud** (click the Cloud tab in the left panel), or
- Connect an **external Supabase project** (Settings → Connectors → Supabase)

Once connected, I can implement the full secure authentication system.

