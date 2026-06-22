# 2026-06-22 Security Fixes

## Work Completed

- Switched runtime data access from direct Postgres to the Supabase REST API.
- Removed the runtime `DATABASE_URL` requirement.
- Queried the public verification view with the Supabase publishable key.
- Added `noindex`/`nofollow` metadata for certificate verification pages.
- Added a pnpm override for `postcss@8.5.15`.

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `pnpm audit --audit-level moderate`

