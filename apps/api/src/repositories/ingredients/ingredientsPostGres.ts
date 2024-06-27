import { IngredientsTable } from "@/database/schemas";
import { Ingredient, IngredientRepository } from "./Ingredients";
import { db } from "@/database/client";

export const postgressRepository: IngredientRepository = {
  get: async () => await db.select().from(IngredientsTable),
  create: async (ingredient: Ingredient): Promise<Ingredient> => {
    const newIngredient = await db
      .insert(IngredientsTable)
      .values(ingredient)
      .returning();

    return newIngredient[0];
  },
};
