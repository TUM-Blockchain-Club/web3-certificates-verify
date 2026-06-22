# Agent Guide

## Project Structure

- `app/`: Next.js App Router pages.
- `app/verify/[certificateId]/page.tsx`: permanent public verification page.
- `lib/`: environment validation, Supabase API client, and certificate data access.
- `public/`: official logo assets copied from TUM Blockchain Club and Web3 Talents repositories.
- `docs/`: implementation notes for future agents.

## Conventions

- Use `pnpm` for all Node.js work.
- Use the Supabase REST API with the publishable key against `certificate_public_verifications`.
- Do not add a runtime direct Postgres connection to this repo.
- Do not add claim, email, PDF generation, or NFT collection features to this repo.
- Keep `/verify/<certificateId>` stable; old certificate URLs must not break.
- Do not commit `.env` or credentials.
- Use the shared Supabase schema owned by the claim platform repository.

## Product Naming

Use these spellings consistently:

- Web3 Talents
- Web3 Talents Certificate
- Cohort 1
- Tum Blockchain Club
