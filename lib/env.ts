import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("https://certificates.web3-talents.com"),
});

export const env = envSchema.parse(process.env);

