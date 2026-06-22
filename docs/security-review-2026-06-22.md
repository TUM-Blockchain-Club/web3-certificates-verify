# Security Review 2026-06-22

## Scope

Repository: `web3-certificates-verify`

Reviewed:

- Next.js verification route and metadata.
- Server-side Postgres access.
- Environment handling.
- Dependency audit.
- Supabase connectivity from the local environment.

## Findings

### Resolved After Review: Supabase Runtime API Is Connected

The site now uses the Supabase REST API with the publishable key. The public verification view was created through the claim platform migrations and tested successfully with the publishable key.

The direct database host remains IPv6-only from this environment, but the operational pooler URL for migrations/imports was discovered separately in the claim platform.

### Resolved After Review: Runtime Database URL Removed

The app was changed to use the Supabase REST API with the publishable key against a dedicated public verification view. It no longer needs a direct Postgres URL at runtime.

The supporting view is defined in the claim platform migrations and still needs to be applied through SQL access.

### Resolved After Review: Verification Pages Marked Noindex

Dynamic verification pages now set `robots.index = false` and `robots.follow = false` while keeping direct URL access public.

Recommendation: consider `noindex` metadata for `/verify/<certificateId>` pages while keeping direct URL access public.

### Resolved After Review: PostCSS Advisory Fixed

The repo now pins `postcss` to `8.5.15` through a pnpm override. `pnpm audit --audit-level moderate` reports no known vulnerabilities.

## Positive Notes

- No committed secrets were found in the repository or `.env.example` history.
- Certificate ID input is constrained before querying.
- SQL queries use parameterized `postgres` tagged templates.
- Runtime secrets stay server-side.
- `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass.
- `pnpm audit --audit-level moderate` passes.
