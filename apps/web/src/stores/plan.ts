import { create } from "zustand";
import { Plan } from "shared-types";

type PlanProperty = "id" | "dateStart" | "dateEnd";

interface planState {
  plan: Plan;
  plans: Plan[];

  setPlanProperty: (key: PlanProperty, value: string | Date) => void;
  setPlans: (plan: Plan[]) => void;

  resetPlans: () => void;
  resetPlan: () => void;
}

export const usePlanStore = create<planState>((set) => ({
  // data
  plan: {
    id: undefined,
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  plans: [],

  // actions
  setPlanProperty: (key: PlanProperty, value: string | Date) => {
    set((prev) => ({
      ...prev,
      plan: { ...prev.plan, [key]: value },
    }));
  },
  setPlans: (plans: Plan[]) => set({ plans }),

  // utils
  resetPlans: () => set({ plans: [] }),
  resetPlan: () =>
    set({
      plan: { id: undefined, dateStart: new Date(), dateEnd: new Date() },
    }),
}));
