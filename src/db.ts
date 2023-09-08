import { PrismaClient } from "_/prisma";

const globalPrisma = globalThis as unknown as {
  db?: PrismaClient;
};

const db = globalPrisma.db ?? new PrismaClient();

export default db;

if (process.env.NODE_ENV !== "production") globalPrisma.db = db;
