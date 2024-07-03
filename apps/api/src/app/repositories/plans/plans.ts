import { Meal, Plan } from "shared-types";

export interface PlanRepository {
  list(): Promise<Plan[]>;
  create(meal: Plan): Promise<Plan>;
  get(id: string): Promise<Plan>;
  edit(meal: Plan): Promise<Plan>;

  // meals
  addMeal(planId: string, mealId: string): Promise<boolean>;
  listMeals(planId: string): Promise<Meal[]>;
}
