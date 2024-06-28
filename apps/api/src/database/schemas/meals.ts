import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const MealsTable = pgTable("meals", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("title", { length: 255 }).notNull(),
});
