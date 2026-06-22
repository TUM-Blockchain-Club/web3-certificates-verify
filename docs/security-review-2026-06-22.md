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

### P1: Supabase Postgres Is Not Connected From This Environment

The site depends on `DATABASE_URL`, but the direct Supabase database host is not reachable from the local environment. A connection test failed with `ECONNREFUSED` against the IPv6-only database host.

Impact: valid certificate pages cannot be verified until the deployment environment has a working database connection string, preferably a Supabase pooler URL.

### P1: Runtime Database URL Appears To Be A Broad Postgres Credential

The app uses `DATABASE_URL` directly from server runtime. The provided URL is for the `postgres` user. Even though all current queries are parameterized, a server compromise would expose broad database privileges.

Recommendation: create a least-privileged read-only role for this verification site. It should only be able to select the public verification columns from `certificate_recipients`, preferably through a dedicated view.

### P2: Verification Pages Are Publicly Indexable

The site allows crawling through `robots.ts`, and valid verification pages expose participant name, certificate name, cohort, issue date, and certificate ID. This matches the public verification requirement, but it may allow shared verification URLs to be indexed.

Recommendation: consider `noindex` metadata for `/verify/<certificateId>` pages while keeping direct URL access public.

### P2: Dependency Audit Reports A Moderate PostCSS Advisory

`pnpm audit --audit-level moderate` reports `postcss <8.5.10` through `next@16.2.9`.

Recommendation: add a package-manager override to force patched `postcss >=8.5.10`, or upgrade Next once its dependency tree is patched.

## Positive Notes

- No committed secrets were found in the repository or `.env.example` history.
- Certificate ID input is constrained before querying.
- SQL queries use parameterized `postgres` tagged templates.
- Runtime secrets stay server-side.
- `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass.

