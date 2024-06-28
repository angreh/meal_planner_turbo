import { Plan } from "shared-types";
import { eq } from "drizzle-orm";

import { PlansTable } from "@/database/schemas";
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
};
