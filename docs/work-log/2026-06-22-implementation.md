# 2026-06-22 Implementation

## Scope

Created the permanent certificate verification site for `certificates.web3-talents.com`.

## Decisions

- The site reads certificate records server-side from Supabase via `DATABASE_URL`.
- The only permanent public route is `/verify/<certificateId>`.
- The verification page reveals participant name, certificate name, cohort, issue date, and validity status.
- No claim flow, email sending, PDF generation, NFT minting, or wallet collection belongs in this repository.

## Asset Sources

- `public/tbc-wordmark.png` from `/home/codex/projects/website/public/tbc-wordmark.png`
- `public/web3-talents-logo.png` from `/home/codex/projects/web3-talents-website/public/logo/black text/large.png`

