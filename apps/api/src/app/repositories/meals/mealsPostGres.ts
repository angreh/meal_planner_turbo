import {
  IngredientsTable,
  MealsTable,
  ingredientsToMeals,
} from "@/database/schemas";
import { MealRepository } from "./meals";
import { Ingredient, Meal } from "shared-types";
import { db } from "@/database/client";
import { asc, eq, sql } from "drizzle-orm";

export const postgressRepository: MealRepository = {
  list: async () => {
    try {
      return await db.select().from(MealsTable).orderBy(asc(MealsTable.name));
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
        await db.select().from(MealsTable).where(eq(MealsTable.id, id)).limit(1)
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

  // ingredients
  addIngredient: async (
    mealId: string,
    ingredientId: string
  ): Promise<boolean> => {
    try {
      await db.insert(ingredientsToMeals).values({ mealId, ingredientId });

      return true;
    } catch (error) {
      return false;
    }
  },
  listIngredients: async (mealId: string): Promise<Ingredient[]> => {
    try {
      const result: unknown = await db
        .select({
          id: IngredientsTable.id,
          name: IngredientsTable.name,
        })
        .from(ingredientsToMeals)
        .where(eq(ingredientsToMeals.mealId, mealId))
        .innerJoin(
          IngredientsTable,
          eq(ingredientsToMeals.ingredientId, IngredientsTable.id)
        );

      return result as Ingredient[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
};
