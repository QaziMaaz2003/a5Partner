import "dotenv/config";
import { defineConfig } from "prisma/config";

/**
 * Prisma 7 configuration. The connection URL lives here rather than in
 * schema.prisma, and is used by the CLI (migrate, studio, db push).
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Falls back so `prisma generate` works on a fresh clone with no .env yet
    // (the postinstall hook runs before anyone has copied .env.example).
    url: process.env.DATABASE_URL ?? "file:./dev.db",
  },
});
