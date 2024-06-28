import { Plan } from "shared-types";

export interface PlanRepository {
  list(): Promise<Plan[]>;
  create(meal: Plan): Promise<Plan>;
  get(id: string): Promise<Plan>;
  edit(meal: Plan): Promise<Plan>;
}
