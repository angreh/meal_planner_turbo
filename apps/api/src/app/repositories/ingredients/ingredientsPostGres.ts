import { IngredientsTable } from "@/database/schemas";
import { IngredientRepository } from "./ingredients";
import { Ingredient } from "shared-types";
import { db } from "@/database/client";
import { asc, eq } from "drizzle-orm";

const list = async (): Promise<Ingredient[]> => {
  try {
    return await db
      .select()
      .from(IngredientsTable)
      .orderBy(asc(IngredientsTable.name));
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const create = async (ingredient: Ingredient): Promise<Ingredient> => {
  try {
    const newIngredient = await db
      .insert(IngredientsTable)
      .values(ingredient)
      .returning();

    return newIngredient[0];
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const get = async (id: string): Promise<Ingredient> => {
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
};

const edit = async (ingredient: Ingredient): Promise<Ingredient> => {
  try {
    const result = await db
      .update(IngredientsTable)
      .set({
        name: ingredient.name,
      })
      .where(eq(IngredientsTable.id, ingredient.id as any))
      .returning();

    return result[0] as Ingredient;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const postgressRepository: IngredientRepository = {
  list,
  create,
  get,
  edit,
};
