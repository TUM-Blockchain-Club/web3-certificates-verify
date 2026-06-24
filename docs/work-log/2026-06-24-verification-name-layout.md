# 2026-06-24 Verification Name Layout

## Change

Fixed the certificate verification page layout for longer participant names.

The participant name now uses a dedicated `certificate-name` class instead of
only the global `h1` sizing. The statement panel is a container query sizing
context, and long names receive smaller font-size variants based on name length.

This prevents names such as `Sai Kommalapati` from overflowing into the
certificate detail column.

## Verification

Ran:

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`

Also served the production build locally and confirmed
`/verify/agizM0VSX8Cq3cBazZ2gwJhN` returns `200` with the new
`certificate-name` class.

