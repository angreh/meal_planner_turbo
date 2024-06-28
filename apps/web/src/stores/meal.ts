import { create } from "zustand";
import { Meal } from "shared-types";

type MealProperty = "id" | "name";

interface mealState {
  meal: Meal;
  meals: Meal[];

  setMealProperty: (key: MealProperty, value: string) => void;
  setMeals: (meal: Meal[]) => void;

  resetMeals: () => void;
  resetMeal: () => void;
}

export const useMealStore = create<mealState>((set) => ({
  // data
  meal: {
    id: undefined,
    name: "",
    isNew: false,
  },
  meals: [],

  // actions
  setMealProperty: (key: MealProperty, value: string) => {
    set((prev) => ({
      ...prev,
      meal: { ...prev.meal, [key]: value },
    }));
  },
  setMeals: (meals: Meal[]) => set({ meals }),

  // utils
  resetMeals: () => set({ meals: [] }),
  resetMeal: () => set({ meal: { id: undefined, name: "" } }),
}));
