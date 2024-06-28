import { Ingredient } from "shared-types";

export interface IngredientRepository {
  list(): Promise<Ingredient[]>;
  create(ingredient: Ingredient): Promise<Ingredient>;
  get(id: string): Promise<Ingredient>;
  edit(ingredient: Ingredient): Promise<Ingredient>;
}
