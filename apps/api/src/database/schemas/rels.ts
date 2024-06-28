import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { IngredientsTable } from "./ingredients";
import { MealsTable } from "./meals";

export const ingredientsToMeals = pgTable(
  "ingredients_to_meals",
  {
    ingredientId: uuid("ingredient_id")
      .notNull()
      .references(() => IngredientsTable.id),
    mealId: uuid("meal_id")
      .notNull()
      .references(() => MealsTable.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.ingredientId, table.mealId] }),
  })
);
