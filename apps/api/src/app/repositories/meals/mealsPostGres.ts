import { MealsTable } from "@/database/schemas";
import { MealRepository } from "./meals";
import { Meal } from "shared-types";
import { db } from "@/database/client";
import { asc, eq } from "drizzle-orm";

export const postgressRepository: MealRepository = {
  list: async () => {
    try {
      return await db
        .select()
        .from(MealsTable)
        .orderBy(asc(MealsTable.name));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  create: async (meal: Meal): Promise<Meal> => {
    try {
      const newIngredient = await db
        .insert(MealsTable)
        .values(meal)
        .returning();

      return newIngredient[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  get: async (id: string): Promise<Meal> => {
    try {
      const meal = (
        await db
          .select()
          .from(MealsTable)
          .where(eq(MealsTable.id, id))
          .limit(1)
      )[0] as Meal;

      return meal;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  edit: async (meal: Meal): Promise<Meal> => {
    try {
      const result = await db
        .update(MealsTable)
        .set({
          name: meal.name,
        })
        .where(eq(MealsTable.id, meal.id as any))
        .returning();

      return result[0] as Meal;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
};
