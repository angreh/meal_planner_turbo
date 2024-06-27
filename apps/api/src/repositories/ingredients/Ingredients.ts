export type Ingredient = {
  id: string;
  name: string;
}

export interface IngredientRepository {
  get(): Promise<Ingredient[]>;
  create(ingredient: Ingredient): Promise<Ingredient>;
}
