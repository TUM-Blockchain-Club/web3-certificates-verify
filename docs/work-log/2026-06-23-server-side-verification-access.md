# 2026-06-23 Server-Side Verification Access

## Change

Switched the verification site from `SUPABASE_PUBLISHABLE_KEY` to
`SUPABASE_SECRET_KEY`.

The verification page remains public, but the Supabase verification dataset is
queried server-side only. This prevents a publishable key from listing all
certificate IDs and participant names.

## Deployment

Vercel now needs `SUPABASE_SECRET_KEY` for this repo. The old
`SUPABASE_PUBLISHABLE_KEY` is no longer required by the verification site.

