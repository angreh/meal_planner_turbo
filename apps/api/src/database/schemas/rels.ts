import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { IngredientsTable } from "./ingredients";
import { MealsTable } from "./meals";
import { PlansTable } from "./plans";

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

export const mealsToPlans = pgTable(
  "meals_to_plans",
  {
    mealId: uuid("meal_id")
      .notNull()
      .references(() => MealsTable.id),
    planId: uuid("plan_id")
      .notNull()
      .references(() => PlansTable.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.mealId, table.planId] }),
  })
);
