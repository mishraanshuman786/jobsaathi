import {
  pgTable,
  uuid,
  text,
  integer,
  uniqueIndex,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

export const jobs = pgTable(
  "jobs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    organisation: text("organisation").notNull(),
    sourceUrl: text("source_url").notNull(),
    vacancies: integer("vacancies"),
    lastDate: date("last_date"),
    hash: text("hash").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [uniqueIndex("jobs_hash_idx").on(table.hash)],
);

export type NewJob = typeof jobs.$inferInsert;
