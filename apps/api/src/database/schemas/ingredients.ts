import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const IngredientsTable = pgTable("ingredients", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
});
