import { IngredientsTable } from "@/database/schemas";
import { Ingredient, IngredientRepository } from "./Ingredients";
import { db } from "@/database/client";
import { asc, eq } from "drizzle-orm";

export const postgressRepository: IngredientRepository = {
  list: async () => {
    try {
      return await db
        .select()
        .from(IngredientsTable)
        .orderBy(asc(IngredientsTable.name));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  create: async (ingredient: Ingredient): Promise<Ingredient> => {
    try {
      const newIngredient = await db
        .insert(IngredientsTable)
        .values(ingredient)
        .returning();

      return newIngredient[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  get: async (id: string): Promise<Ingredient> => {
    try {
      const ingredient = (
        await db
          .select()
          .from(IngredientsTable)
          .where(eq(IngredientsTable.id, id))
          .limit(1)
      )[0] as Ingredient;

      return ingredient;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  edit: async (ingredient: Ingredient): Promise<Ingredient> => {
    try {
      const result = await db
        .update(IngredientsTable)
        .set({
          name: ingredient.name,
        })
        .where(eq(IngredientsTable.id, ingredient.id))
        .returning();

      return result[0] as Ingredient;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
};
