# Web3 Certificates Verification

Permanent public verification site for Web3 Talents certificates.

Site name: `Web3 Verification`

Production domain:

```text
https://certificates.web3-talents.com
```

Public certificate pages use this stable path:

```text
/verify/<certificateId>
```

## Purpose

This site verifies random, non-guessable certificate IDs against Supabase and displays the public certificate fields:

- participant name;
- certificate name;
- cohort;
- issue date;
- validity status.

It does not issue certificates, collect wallet addresses, or send email. Those responsibilities live in the temporary claim platform.

## Local Development

Use `pnpm`.

```bash
pnpm install
pnpm dev
```

Required environment variables are documented in `.env.example`. Keep `.env` uncommitted.

The app uses the Supabase REST API with the server-only secret key against the
verification view. The publishable key must not be able to list verification
records. This app should not need a direct Postgres URL at runtime.

## Checks

```bash
pnpm typecheck
pnpm build
```
