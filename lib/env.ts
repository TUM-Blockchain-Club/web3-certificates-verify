import { z } from "zod";

const envSchema = z.object({
  SUPABASE_SECRET_KEY: z.string().min(1),
  SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("https://certificates.web3-talents.com"),
});

export const env = envSchema.parse(process.env);
