import {drizzle} from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const g = globalThis as unknown as { pgClient?: ReturnType<typeof postgres> };

export const client = g.pgClient ?? postgres(process.env.DATABASE_URL!);
if (process.env.NODE_ENV !== "production") g.pgClient = client;

export const db = drizzle(client, { schema });