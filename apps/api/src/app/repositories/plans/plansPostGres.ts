import { Ingredient, Meal, Plan } from "shared-types";
import { eq } from "drizzle-orm";

import {
  IngredientsTable,
  MealsTable,
  PlansTable,
  ingredientsToMeals,
  mealsToPlans,
} from "@/database/schemas";
import { PlanRepository } from "./plans";
import { db } from "@/database/client";

export const postgressRepository: PlanRepository = {
  list: async () => {
    try {
      return await db.select().from(PlansTable);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  create: async (plan: Plan): Promise<Plan> => {
    console.log(typeof plan.dateStart);

    try {
      const newIngredient = await db
        .insert(PlansTable)
        .values(plan)
        .returning();

      return newIngredient[0];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  get: async (id: string): Promise<Plan> => {
    try {
      const plan = (
        await db.select().from(PlansTable).where(eq(PlansTable.id, id)).limit(1)
      )[0] as Plan;

      return plan;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  edit: async (plan: Plan): Promise<Plan> => {
    try {
      const result = await db
        .update(PlansTable)
        .set({
          dateStart: plan.dateStart,
          dateEnd: plan.dateEnd,
        })
        .where(eq(PlansTable.id, plan.id as any))
        .returning();

      return result[0] as Plan;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  addMeal: async (planId: string, mealId: string): Promise<boolean> => {
    try {
      await db.insert(mealsToPlans).values({ planId, mealId });

      return true;
    } catch (_) {
      return false;
    }
  },
  listMeals: async (planId: string): Promise<Meal[]> => {
    try {
      const result: unknown = await db
        .select({
          id: MealsTable.id,
          name: MealsTable.name,
        })
        .from(mealsToPlans)
        .where(eq(mealsToPlans.planId, planId))
        .innerJoin(MealsTable, eq(mealsToPlans.mealId, MealsTable.id));

      return result as Meal[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
  listIngredients: async (planId: string): Promise<Ingredient[]> => {
    try {
      const result = await db
        .select({
          id: IngredientsTable.id,
          name: IngredientsTable.name,
        })
        .from(mealsToPlans)
        .innerJoin(
          ingredientsToMeals,
          eq(ingredientsToMeals.mealId, mealsToPlans.mealId)
        )
        .innerJoin(
          IngredientsTable,
          eq(IngredientsTable.id, ingredientsToMeals.ingredientId)
        )
        .where(eq(mealsToPlans.planId, planId))
        .groupBy(IngredientsTable.id);

      return result as Ingredient[];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  },
};
