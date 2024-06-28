import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const PlansTable = pgTable("plans", {
  id: uuid("id").primaryKey().defaultRandom(),
  dateStart: timestamp("date_start").notNull(),
  dateEnd: timestamp("date_end").notNull(),
});
