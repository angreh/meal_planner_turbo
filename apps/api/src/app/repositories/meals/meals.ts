import { Ingredient, Meal } from "shared-types";

export interface MealRepository {
  list(): Promise<Meal[]>;
  create(meal: Meal): Promise<Meal>;
  get(id: string): Promise<Meal>;
  edit(meal: Meal): Promise<Meal>;

  // ingredients
  addIngredient(mealId: string, ingredientId: string): Promise<boolean>;
  listIngredients(mealId: string): Promise<Ingredient[]>;
}
